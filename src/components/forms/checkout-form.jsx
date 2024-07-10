import React from 'react';
import OrderConfirmArea from '../checkout/order-confirm-area';

const countries = ['Country*','Afghanistan','Algeria','America','Bangladesh','France','Italy','India','Pakistan','Turki','United State','Japan']

const CheckoutForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="row">
          <div className="col-lg-7">
            <h2 className="main-title">Billing Details</h2>
            <div className="user-profile-data">
              <div className="row">
                <div className="col-lg-6">
                  <input type="text" placeholder="First Name*" className="single-input-wrapper" />
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Last Name*" className="single-input-wrapper" />
                </div>
                <div className="col-12">
                  <input type="text" placeholder="Company Name*" className="single-input-wrapper" />
                </div>
                <div className="col-12">
                  <select className="theme-select-menu">
                    {countries.map((country, i) => <option key={i}>{country}</option>)}
                  </select>
                </div>
                <div className="col-12"><input type="text" placeholder="Street Address*" className="single-input-wrapper" /></div>
                <div className="col-lg-4"><input type="text" placeholder="Town/City*" className="single-input-wrapper" /></div>
                <div className="col-lg-4"><input type="text" placeholder="State*" className="single-input-wrapper" /></div>
                <div className="col-lg-4"><input type="text" placeholder="Zip Code*" className="single-input-wrapper" /></div>
                <div className="col-lg-6"><input type="email" placeholder="Email Address*" className="single-input-wrapper" /></div>
                <div className="col-lg-6"><input type="text" placeholder="Phone Number*" className="single-input-wrapper" /></div>
                <div className="col-12">
                  <ul className="checkbox-list">
                    <li>
                      <input type="checkbox" id="new-account" />
                      <label htmlFor="new-account">Create Account?</label>
                    </li>
                    <li>
                      <input type="checkbox" id="shipping" />
                      <label htmlFor="shipping">Ship to Different Address?</label>
                    </li>
                  </ul>
                </div>
                <div className="col-12">
                  <div className="other-note-area">
                    <p>Order Note (Optional)</p>
                    <textarea></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            {/* order area start */}
            <OrderConfirmArea />
            {/* order area end */}
          </div>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;