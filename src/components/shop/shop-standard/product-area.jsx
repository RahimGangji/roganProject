import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetProductQuery } from '../../../redux/api/api-slice';
import SearchForm from '../shop-with-sidebar/search-form';
import Categories from './categories';
import PopularProducts from './popular-products';
import PriceFilter from './price-filter';
import ProductItems from './product-items';

const ProductArea = () => {
  const { data: products, isLoading, isError } = useGetProductQuery();
  const { categories, price, searchValue } = useSelector(state => state.filter);

  let content = null;
  let content_2 = null;
  if (isLoading && !isError) {
    content = <div className="container">
      <h2 className="text-center pt-10 alert alert-info mt-50">Loading...</h2>
    </div>
  }
  if (!isError && !isLoading && products.length === 0) {
    content = <div className="container">
      <h2 className="text-center pt-10 mt-50">No Products Found</h2>
    </div>
  }
  if (products?.length > 0 && !isError && !isLoading) {
    const max_prices = products.map(item => Number(item.price))
    const maxPrice = Math.max(...max_prices);
    const items = products.filter(product => {
      if (categories.length > 0) {
        return categories.includes(product.category)
      }
      return true;
    })
      .filter(item => Number(item.price) <= price)
      .filter(item => {
        if (searchValue) {
          return item.title.toLowerCase().includes(searchValue.toLowerCase())
        }
        return true;
      });
    content = <ProductItems itemsPerPage={6} items={items} gutter="50" />
    content_2 = (
      <>
        {/* category start */}
        <div className="single-block mb-80">
          <h4 className="sidebar-title">Categories</h4>
          <Categories products={products} maxPrice={maxPrice} />
        </div>
        {/* category end */}

        {/* filter price start */}
        <div className="single-block mb-80">
          <h4 className="sidebar-title">Filter by Price</h4>
          <PriceFilter maxPrice={maxPrice} />
        </div>
        {/* filter price end */}

        {/* popular products start*/}
        <PopularProducts products={products} />
        {/* popular products end*/}
      </>
    )
    if (items.length === 0) {
      content = <div className="container">
        <h2 className="text-center pt-10 mt-50">No Products Found</h2>
      </div>
    }
  }


  return (
    <>
      <div className="full-width-container pt-150 pb-200">
        <div className="row">
          <div className="col-xl-9 col-lg-8 col-12">

            {/* <div className="product-showcase">
              <div className="row gutter-50"> */}
            {content}
            {/* </div>
            </div> */}

          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 ">
            <div className="theme-sidebar-widget">
              <div className="single-block mb-80">
                <SearchForm />
              </div>

              {content_2}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductArea;