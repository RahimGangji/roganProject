import React from 'react';
import useCart from '../../hooks/use-cart';

const CartTotal = () => {
  const { total } = useCart();
  let shipping_cost = 13.00;
  return (
    <table className="cart-total-table">
    <tbody>
      <tr>
        <th>Subtotal</th>
        <td>${(total).toFixed(2)}</td>
      </tr>
      <tr>
        <th>Shipping Cost</th>
        <td>${(shipping_cost).toFixed(2)}</td>
      </tr>
      <tr>
        <th>Total</th>
        <td>${(total + shipping_cost).toFixed(2)}</td>
      </tr>
    </tbody>
  </table>
  );
};

export default CartTotal;