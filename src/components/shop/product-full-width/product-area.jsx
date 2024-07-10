import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetProductQuery } from '../../../redux/api/api-slice';
import Categories from '../shop-standard/categories';
import PriceFilter from '../shop-standard/price-filter';
import ProductItems from '../shop-standard/product-items';
import Colors from './colors';
import SelectFilter from './select-filter';
import Sizes from './sizes';

const ProductArea = () => {
  const [showContent, setShowContent] = useState(false);
  const [showing, setShowing] = useState(0);
  const { data: products, isLoading, isError } = useGetProductQuery();
  const { categories, price, sizes, colors, selectedItem } = useSelector(state => state.filter);

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

    if (selectedItem === 'Price: low to high') {
      items = products.slice().sort((a, b) => Number(a.price) - Number(b.price))
    }
    if (selectedItem === 'Price: high to low') {
      items = products.slice().sort((a, b) => Number(b.price) - Number(a.price))
    }

    content = <ProductItems itemsPerPage={8} items={items} col_4={true}
      gutter="80" setShowing={setShowing} pag_center={true} />

    content_2 = (<><div className="col-lg-3 col-sm-6">
      {/* category start */}
      <div className="single-block">
        <h4 className="sidebar-title">Categories</h4>
        <Categories products={products} hide_length={true} maxPrice={maxPrice} />
      </div>
      {/* category end */}
    </div>
      <div className="col-lg-3 col-sm-6">
        {/* filter price start */}
        <div className="single-block">
          <h4 className="sidebar-title">Filter by Price</h4>
          <PriceFilter maxPrice={maxPrice} />
        </div>
        {/* filter price end */}
      </div>
      <div className="col-lg-3 col-sm-6">
        <Sizes maxPrice={maxPrice} />
      </div>
      <div className="col-lg-3 col-sm-6">
        <Colors maxPrice={maxPrice} />
      </div>
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
        <div className="product-filter-area d-sm-flex justify-content-between align-items-center">
          <div className="large-filter-area d-flex justify-content-between align-items-center">
            <div className="filter-dropdown-holder">
              <button className="filter-button" onClick={() => setShowContent(!showContent)}>
                <span className="icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                Filter
              </button>
            </div>
            <p className="display-item-filter">Showing 1 - {showing} of {products?.length}</p>
            <div className={`large-filter-content theme-sidebar-widget ${showContent ? 'show-content' : ''}`}>
              <div className="row">
                {content_2}
              </div>
            </div>
          </div>

          <div className="shop-demo-filter">
            <SelectFilter />
          </div>
        </div>

        {content}

      </div>
    </>
  );
};

export default ProductArea;