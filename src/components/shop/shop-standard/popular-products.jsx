import React from 'react';

const PopularProducts = ({products}) => {
  return (
    <div className="single-block">
      <h4 className="sidebar-title">Popular Products</h4>
      <ul className="sidebar-popular-product">
        {products?.slice(0,3).map(product => (
          <li key={product.id} className="d-flex align-items-center">
          <img src={product.img} alt="" />
          <div className="info">
            <a href="#">{product.title}</a>
            <div className="price">${product.price}</div>
          </div>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularProducts;