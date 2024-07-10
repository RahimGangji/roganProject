import React, { useState } from 'react';

const OrderConfirmArea = () => {
  const [creditCard,setCreditCard] = useState(false);
  return (
    <div className="order-confirm-sheet">
      <h2 className="main-title">Order Details</h2>
      <div className="order-review">
        <table className="product-review">
          <tbody>
            <tr>
              <th>
                <span>Bluthooth Speaker</span>
              </th>
              <td><span>$123.78</span></td>
            </tr>
            <tr>
              <th>
                <span>Subtotal</span>
              </th>
              <td><span>$123.78</span></td>
            </tr>
            <tr>
              <th>
                <span>Shipping</span>
              </th>
              <td><span>$5.00</span></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th><span>Total</span></th>
              <td><span>$128.00</span></td>
            </tr>
          </tfoot>
        </table>
        <div className="payment-option">
          <ul className="payment-list">
            <li onClick={()=> setCreditCard(false)}>
              <input type="radio" name="paymenttype" value="directbank" defaultChecked className="payment-radio-button" />
              <label htmlFor="bankTrns">Direct Bank Transfer</label>
              <p>Make your payment directly into our account. Plase use your Order ID as payment reference.</p>
            </li>
            <li onClick={()=> setCreditCard(false)}>
              <input type="radio" name="paymenttype" value="paypal" className="payment-radio-button" />
              <label htmlFor="paypal">PayPal</label>
            </li>
            <li onClick={()=> setCreditCard(true)}>
              <input type="radio" name="paymenttype" value="creditCard" id="credit-card" className="payment-radio-button" />
              <label htmlFor="credit-card">Credit Card</label>
            </li>
            <li className="credit-card-form" style={{display:creditCard?'list-item':'none'}}>
              <div className="row">
                <div className="col-12">
                  <h6>Card number</h6>
                  <input type="text" />
                </div>
                <div className="col-8">
                  <h6>Expiry date</h6>
                  <div className="d-flex align-items-center">
                    <input type="tel" placeholder="MM" />
                    <span>/</span>
                    <input type="tel" placeholder="YY" />
                  </div>
                </div>
                <div className="col-4 ml-auto">
                  <h6>CVV</h6>
                  <input type="text" />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <p className="policy-text">Your personal data will be use for your order, support your experience through this website & for other purpose described in our privacy policy</p>
        <div className="agreement-checkbox">
          <input type="checkbox" id="agreement" />
          <label htmlFor="agreement">I have read and agree to the website terms and conditions*</label>
        </div>

        <button className="dark-button-one">Place Order</button>
      </div>
    </div>
  );
};

export default OrderConfirmArea;