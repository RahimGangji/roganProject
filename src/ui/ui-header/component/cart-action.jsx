import Link from 'next/link';
import React from 'react';

const CartAction = ({ dark }) => {
  return (
    <li className="cart-action-wrapper">
      <div className="dropdown">
        <button className="dropdown-toggle" data-bs-toggle="dropdown">
          <img src={`/assets/images/icon/icon${dark ? '63' : '37'}.svg`} alt="" />
          <span className="item-count">02</span>
        </button>
        <div className="dropdown-menu dropdown-menu-right">
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
          <div className="subtotal d-flex justify-content-between align-items-center">
            <div className="title">Subtotal</div>
            <div className="total-price">$163.00</div>
          </div>
          <ul className="button-group">
            <li>
              <Link href="/cart">
                <a className="view-cart">View Cart</a>
              </Link>
            </li>
            <li>
              <Link href="/checkout">
                <a className="checkout">Checkout</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default CartAction;