import React from 'react';
import CheckoutForm from '../forms/checkout-form';


const CheckoutArea = () => {
  return (
    <>
      <div className="checkout-section pt-90 pb-100">
        <div className="container">
          <div className="checkout-toggle-area mb-80">
            <p>Already have an account? <button type="button" data-bs-toggle="collapse" data-bs-target="#login-form">Click here to login.</button></p>
            <form action="#" id="login-form" className="collapse">
              <p>Please enter your details below.</p>
              <div className="row">
                <div className="col-md-6"><input type="text" placeholder="User name or email" /></div>
                <div className="col-md-6"><input type="password" placeholder="Password" /></div>
              </div>
              <button className="dark-button-one">Login</button>
              <a href="#" className="lost-passw">Lost your Password?</a>
            </form>
            <p>Have a promo code? <button type="button" data-bs-toggle="collapse" data-bs-target="#promo-code">Click to enter your code.</button></p>
            <form action="#" id="promo-code" className="collapse">
              <p>Please enter your promo code below.</p>
              <input type="text" placeholder="Coupon code" />
              <button className="dark-button-one">Apply coupon</button>
            </form>
          </div>
          {/* form start */}
          <CheckoutForm/>
          {/* form end */}
        </div>
      </div>
    </>
  );
};

export default CheckoutArea;