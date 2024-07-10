import React from 'react';

const ShopModal = ({ item, id }) => {
  return (
    <>
      <div className="modal fade product-details-modal" id={id} tabIndex="-1" aria-labelledby={`exampleModalLabel`}>
        <div className="modal-dialog modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header justify-content-end" style={{border:'none'}}>
              <button data-bs-dismiss="modal" aria-label="Close"
                data-izimodal-transitionout="fadeOutDown" className="close-button">
                <img src="/assets/images/icon/icon43.svg" alt="" />
              </button>
            </div>
            <div className="modal-body">
              <div className="main-bg-wrapper">
                <img src="/assets/images/shop/3.png" alt="" className="product-img" />
                <h2 className="title">{item?.title}</h2>
                <p>With groundbreaking Nike Air technology, the Nike Air VaporMax Flyknit 2 CNY sets the tone for your new year by stretching the limits of what is possible with an ultra flexible upper and direct contact between your foot and a full-length Air unit. Celebrate with the lightest, most flexible Air Max shoe yet.</p>
                <a href="#" className="cart-button">Add to Cart</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ShopModal;