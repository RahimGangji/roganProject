import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetProductQuery } from '../../../redux/api/api-slice';
import Colors from '../product-full-width/colors';
import SelectFilter from '../product-full-width/select-filter';
import Sizes from '../product-full-width/sizes';
import Categories from '../shop-standard/categories';
import PriceFilter from '../shop-standard/price-filter';
import ProductItems from '../shop-standard/product-items';
import SearchForm from './search-form';

const ProductArea = () => {
  const [showing, setShowing] = useState(0);
  const { data: products, isLoading, isError } = useGetProductQuery();
  const { categories, price, sizes, colors, selectedItem, searchValue } = useSelector(state => state.filter);

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

    let items = products.filter(product => {
      if (categories.length > 0) {
        return categories.includes(product.category)
      }
      return true;
    })
      .filter(item => Number(item.price) <= price)
      .filter(item => {
        if (sizes.length > 0) {
          return item.sizes.some(size => sizes.includes(size));
        }
        return true;
      })
      .filter(item => {
        if (colors.length > 0) {
          return item.colors.some(color => colors.includes(color));
        }
        return true;
      })
      .filter(item => {
        if (selectedItem) {
          switch (selectedItem) {
            case 'Filtering':
              return true;
            case 'Popularity':
              return item.popular === true;
            case 'Trending items':
              return item.trending === true;
            case 'Newest items':
              return item.new === true;

            default:
              return true;
          }
        }
        return true;
      })
      .filter(item => {
        if (searchValue) {
          return item.title.toLowerCase().includes(searchValue.toLowerCase())
        }
        return true;
      })

    if (selectedItem === 'Price: low to high') {
      items = products.slice().sort((a, b) => Number(a.price) - Number(b.price))
    }
    if (selectedItem === 'Price: high to low') {
      items = products.slice().sort((a, b) => Number(b.price) - Number(a.price))
    }

    content = <ProductItems itemsPerPage={6} items={items}
      gutter="80" setShowing={setShowing} pag_center={true} />

    content_2 = (<>    {/* category start */}
      <div className="single-block mb-80 main-menu-list">
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

      <div className="mb-80">
        <Colors maxPrice={maxPrice} />
      </div>

      <Sizes maxPrice={maxPrice} />
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
      <div className="full-width-container pt-90 pb-100">
        <div className="row">
          <div className="col-xl-9 col-lg-8 order-lg-last">
            <div className="product-filter-area d-flex justify-content-between align-items-center">
              <div className="large-filter-area d-flex justify-content-between align-items-center">
                <p className="display-item-filter">Showing 1 - {showing} of {products?.length}</p>
              </div>

              <div className="shop-demo-filter">
                <SelectFilter />
              </div>
            </div>

            {content}
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 col-12 order-lg-first">
            <div className="theme-sidebar-widget">
              <div className="single-block mb-80 mt-95">
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