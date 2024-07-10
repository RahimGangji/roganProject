import React from 'react';

const CartProList = () => {
  return (
    <ul className="cart-product-list">
      <li className="clearfix selected-item">
        <a href="#" className="item-img"><img src="/assets/images/shop/1.png" alt="" /></a>
        <div className="item-info">
          <a href="#" className="name">Blue Fery.</a>
          <div className="price">$38.00 <span className="quantity">x 1</span></div>
          <a href="#" className="close"><i className="fa fa-window-close" aria-hidden="true"></i></a>
        </div>
      </li>
      <li className="clearfix selected-item">
        <a href="#" className="item-img"><img src="/assets/images/shop/2.png" alt="" /></a>
        <div className="item-info">
          <a href="#" className="name">Vibrant Shoe.</a>
          <div className="price">$125.00 <span className="quantity">x 1</span></div>
          <a href="#" className="close"><i className="fa fa-window-close" aria-hidden="true"></i></a>
        </div>
      </li>
    </ul>
  );
};

export default CartProList;