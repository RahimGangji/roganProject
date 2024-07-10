import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useCart from '../../../hooks/use-cart';
import CartDropdown from '../../../layout/headers/component/cart-dropdown';
import { remove_cart_product } from '../../../redux/features/cart-slice';
import UserProfileDropdown from '../../../ui/ui-header/component/user-profile-dropdown';

const MenuBar = ({setIsSidebarOpen,home_7=false}) => {
  const dispatch = useDispatch();
  const { quantity, total } = useCart();
  const { cart_products } = useSelector(state => state.cart);
  return (
    <>
      <div className="theme-Ecommerce-menu">
        <div className="d-flex justify-content-between align-items-center">
          <div className="left-content">
            <ul>
              <li>
                <button className="menu-button sidebar-menu-open" onClick={()=> setIsSidebarOpen(true)}>
                  <img src="/assets/images/logo/menu.svg" alt="" />
                </button>
              </li>
              <li className="logo">
                <Link href={'/'}>
                  <a>
                    <img src="/assets/images/logo/logo5.svg" alt="" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="right-content">
            <ul>
              <li className="search-form">
                <form action="#" className="eCommerce-search">
                  <input type="text" placeholder="Search here" />
                  <i className="fa fa-search icon" aria-hidden="true"></i>
                </form>
              </li>
              <li className="action-list-item cart-action-wrapper">
                <div className="dropdown">
                  <button className="dropdown-toggle" data-bs-toggle="dropdown">
                    <img src="/assets/images/icon/icon37.svg" alt="" />
                    <span className="item-count">{home_7 ? '02' : quantity}</span>
                  </button>
                  {!home_7 &&<div className="dropdown-menu dropdown-menu-right">
                    {cart_products.length === 0 && <div>
                      <h5>No Cart Items</h5>
                    </div>
                    }
                    {cart_products.length > 0 && <><ul className="cart-product-list"
                      style={{ height: cart_products.length === 2 ? '300px' : cart_products.length > 2 ? '400px' : 'auto', overflow: cart_products.length > 2 && 'auto' }}>
                      {cart_products.map((item, i) => (
                        <li key={i} className="clearfix selected-item">
                          <Link href={`/shop-details/${item.id}`}>
                            <a className="item-img">
                              <img src={item.img} alt="" />
                            </a>
                          </Link>
                          <div className="item-info">
                            <Link href={`/shop-details/${item.id}`}>
                              <a className="name">{item.title.substring(0, 10)}..</a>
                            </Link>
                            <div className="price">${item.price} <span className="quantity">x {item.quantity}</span></div>
                            <a onClick={() => dispatch(remove_cart_product(item))} style={{ cursor: 'pointer' }} className="close">
                              <i className="fa fa-window-close" aria-hidden="true"></i>
                            </a>
                          </div>
                        </li>
                      ))}
                    </ul>
                      <div className="subtotal d-flex justify-content-between align-items-center">
                        <div className="title">Subtotal</div>
                        <div className="total-price">${total.toFixed(2)}</div>
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
                      </ul></>}
                  </div>
                  }
                  {home_7 && <CartDropdown/>}
                </div>
              </li>
              <li className="action-list-item user-profile-action">
                <div className="dropdown">
                  <button className="dropdown-toggle" data-bs-toggle="dropdown">
                    <img src="/assets/images/icon/icon38.svg" alt="" />
                    <span>Account</span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <UserProfileDropdown />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBar;