import Link from 'next/link';
import React from 'react';
import CartProList from './cart-pro-list';
import CartSubtotal from './cart-subtotal';

const CartDropdown = () => {
  return (
    <div className="dropdown-menu dropdown-menu-right">
      {/* cart product list start */}
      <CartProList />
      {/* cart product list end */}
      {/* subtotal start */}
      <CartSubtotal />
      {/* subtotal end */}
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
  );
};

export default CartDropdown;