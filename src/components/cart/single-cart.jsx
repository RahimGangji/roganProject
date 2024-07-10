import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import { add_cart_product, decrease_quantity, remove_cart_product } from '../../redux/features/cart-slice';

const SingleCart = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td className="product-thumbnails"><a href="#" className="product-img">
        <img src={item.img} alt="" /></a>
      </td>
      <td className="product-info">
        <Link href={`/shop-details/${item.id}`}>
          <a className="product-name">{item.title}</a>
        </Link>
        <div className="serial">#{item.serial_id}</div>
        <ul>
          <li className="size">Size: {item.sizes.join(',')}</li>
          <li className="color">Color: {item.colors.join(',')}</li>
        </ul>
      </td>
      <td className="price"><span>${item.price}</span></td>
      <td className="quantity">
        <ul className="order-box">
          <li onClick={() => dispatch(decrease_quantity(item))}><button className="value-decrease">-</button></li>
          <li><input type="number" value={item.quantity} disabled className="product-value val" /></li>
          <li onClick={() => dispatch(add_cart_product(item))}><button className="value-increase">+ </button></li>
        </ul>
      </td>
      <td className="price total-price"><span>${(item.quantity * item.price).toFixed(2)}</span></td>
      <td onClick={() => dispatch(remove_cart_product(item))}><a style={{ cursor: 'pointer' }}
        className="remove-product">x</a>
      </td>
    </tr>
  );
};

export default SingleCart;