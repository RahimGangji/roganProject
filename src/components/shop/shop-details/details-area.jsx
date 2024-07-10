import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add_cart_product, decrease_quantity } from '../../../redux/features/cart-slice';
import RelatedProducts from './related-products';
import SingleComment from './single-comment';

const DetailsArea = ({ products, product }) => {
  const { img, title, piece_available, rating, reviews, price, days_left, summery, colors, related_images, sizes }
    = product || {};
  const dispatch = useDispatch();
  const { cart_products } = useSelector(state => state.cart)
  const selectedItem = cart_products.find(item => Number(item.id) === Number(product.id));

  return (
    <>
      <div className="shop-details pt-150 pb-200">
        <div className="container">
          <div className="procuct-details">
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <div className="tab-content">
                  <div id="menu0" className="tab-pane fade show active">
                    <img src={img} alt="" />
                  </div>
                  <div id="menu1" className="tab-pane fade">
                    <img src="/assets/images/shop/16.jpg" alt="" />
                  </div>
                  <div id="menu2" className="tab-pane fade">
                    <img src="/assets/images/shop/17.jpg" alt="" />
                  </div>
                </div>
                <ul className="nav nav-tabs">
                  <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#menu0">
                    <img src={img} alt="" /></a>
                  </li>
                  <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#menu1">
                    <img src="/assets/images/shop/16.jpg" alt="" /></a>
                  </li>
                  <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#menu2">
                    <img src="/assets/images/shop/17.jpg" alt="" /></a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-xs-12">
                <div className="product-info">
                  <h3 className="product-name">{title}</h3>
                  <ul className="rating">
                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                    <li><i className="fa fa-star-half-o" aria-hidden="true"></i></li>
                    <li>4.5</li>
                    <li>32 Reviews</li>
                  </ul>
                  <strong className="price">${price}</strong>
                  <ul className="availability">
                    <li><span>{piece_available}</span> Piece Available</li>
                    <li>|</li>
                    <li><span>{days_left}</span> Days Left</li>
                  </ul>
                  <p>{summery}</p>
                  <div className="customize-order d-sm-flex align-items-top">
                    <div className="quantity">
                      <h6>Quantity</h6>
                      <ul className="clearfix">
                        <li onClick={() => dispatch(decrease_quantity(product))}>
                          <button className="value-decrease">-</button>
                        </li>
                        <li>
                          <input type="number" min="1" max="22" value={selectedItem ? selectedItem?.quantity : 0} disabled className="product-value val" />
                        </li>
                        <li onClick={() => dispatch(add_cart_product(product))}>
                          <button className="value-increase">+ </button>
                        </li>
                      </ul>
                    </div>
                    <div className="color-filter">
                      <h6>Colors</h6>
                      <ul>
                        {colors.map((color, i) => <li key={i}><a href="#"></a></li>)}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <a href="#" className="cart-button">ADD TO CART</a>
                    <a href="#" className="wishlist-button"><i className="fa fa-heart" aria-hidden="true"></i>ADD TO WISHLIST</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-review-tab">
            <ul className="nav nav-tabs">
              <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#menu11">Description</a></li>
              <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#menu12">Tecnical Info</a></li>
              <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#menu21">Feedback</a></li>
            </ul>
            <div className="tab-content">
              <div id="menu11" className="tab-pane fade show active">
                <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience in emotional sensation of stress from our first instances of social rejection ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all making mistakes.</p>
                <h6 className="list-title">Check product main features:</h6>
                <ul className="list-item">
                  <li>Lorem ipsum best lightweight bras cool rejection quickly avoid dummy text.</li>
                  <li>Lightweight bras cool rejection quickly avoid dummy text.</li>
                  <li>We quickly learn to fear and thus automatically avoid potentially</li>
                </ul>
              </div>
              <div id="menu12" className="tab-pane fade">
                <h4 className="tab-title">Check product main features:</h4>
                <ul className="list-item">
                  <li>Lorem ipsum best lightweight bras cool rejection quickly avoid dummy text.</li>
                  <li>Lightweight bras cool rejection quickly avoid dummy text.</li>
                  <li>We quickly learn to fear and thus automatically avoid potentially</li>
                  <li>Lorem ipsum best lightweight bras cool rejection quickly avoid dummy text.</li>
                  <li>Lightweight bras cool rejection quickly avoid dummy text.</li>
                  <li>We quickly learn to fear and thus automatically avoid potentially</li>
                </ul>
              </div>
              <div id="menu21" className="tab-pane fade">
                <div className="user-comment-area">
                  <SingleComment img="1" name="Rashed ka." rating={['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-half-o',]} desc="One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation." />
                  <SingleComment img="2" name="Naim Ahmed" rating={['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-half-o', 'fa fa-star-o',]} desc="One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation." />
                </div>
              </div>
            </div>
          </div>

          <div className="realated-product product-showcase">
            <h2 className="title">Releted Products</h2>
            <RelatedProducts products={products} product={product} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsArea;