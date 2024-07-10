import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add_cart_product } from '../../../redux/features/cart-slice';

const SingleProduct = ({ product }) => {
  const { id, img, title, price } = product || {};
  const { cart_products } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(add_cart_product({
      ...item,
      serial_id: new Date().getTime(),
    }))
  }

  return (
    <div className="single-product-case">
      <div className="img-holder">
        <Link href={`/shop-details/${id}`}>
          <a>
            <img src={img} alt="" />
          </a>
        </Link>
      </div>
      <div className="info">
        <Link href={`/shop-details/${id}`}>
          <a className="name">{title}</a>
        </Link>
        <div className="price">${price}</div>
        <a onClick={() => handleAddToCart(product)} style={{ cursor: 'pointer' }}
          className={cart_products.some(item => item.id === id) ? 'cart-button active-cart' : 'cart-button'} title="Add to cart"><span><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
        </a>
      </div>
    </div>
  );
};

export default SingleProduct;