import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clear_cart } from '../../redux/features/cart-slice';
import CartTotal from './cart-total';
import SingleCart from './single-cart';

const CartArea = () => {
  const { cart_products } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      <div className="cart-section pt-90 pb-100">
        <div className="main-container">
          {cart_products.length === 0 && <div className='d-flex align-items-center justify-content-center'>
            <div>
              <h3 className='mb-4'>No Cart Items</h3>
              <Link href={`/shop`}>
                <button className="dark-button-one">Return to shop</button>
              </Link>
            </div>
          </div>
          }
          {cart_products.length > 0 && <form onSubmit={e => e.preventDefault()} className="cart-list-form">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th colSpan="2">Product</th>
                    <th>Price</th>
                    <th>QTY</th>
                    <th>Total</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {cart_products.map((item, i) => (
                    <SingleCart key={i} item={item} />
                  ))}
                </tbody>
              </table>
            </div>

            <div className="d-sm-flex justify-content-between cart-footer">
              <div className="coupon-section">
                <div className="coupon-form d-lg-flex align-items-center">
                  <input type="text" placeholder="Enter your code" />
                  <button className="dark-button-one">Apply Coupon</button>
                </div>
                <button onClick={() => dispatch(clear_cart())} className="dark-button-one update-cart-button">
                  Clear cart
                </button>
              </div>

              <div className="cart-total-section">
                <CartTotal />
                <Link href="/checkout">
                  <a className="dark-button-one checkout-process">Checkout</a>
                </Link>
              </div>
            </div>
          </form>}
        </div>
      </div>
    </>
  );
};

export default CartArea;