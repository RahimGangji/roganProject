import React from 'react';

const SliderModal = ({item}) => {
  return (
    <>
      <div className="modal fade arch-modal" id={item?.id} tabIndex="-1" aria-labelledby={`exampleModalLabel`}>
        <div className="modal-dialog modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header justify-content-end">
            <button data-bs-dismiss="modal" aria-label="Close" 
            data-izimodal-transitionout="fadeOutDown" className="close-button">
              <img src="/assets/images/icon/icon43.svg" alt=""/>
            </button>
            </div>
            <div className="modal-body">
              <div className="main-bg-wrapper d-flex align-items-center justify-content-center">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-last">
                      <h3 className="title">Interior & Exterior Solution.</h3>
                      <h5 className="font-lato">Blue Sea Resort</h5>
                      <p>{"Just let this happen. We just let this flow right out of our minds. Just relax and let it flow. That easy. Let's put some happy little clouds in our world. It's a very cold picture, I may have to go get my coat. It’s about to freeze me to death. This is gonna be a happy little seascape. Let's go up in here,"} </p>
                      <p>{"And start having some fun The least little bit can do so much. Work on one thing at a time. Don't get carried away - we have plenty of time. Put your feelings into it, your heart, it's your world. These trees are so much fun. I get started on them and I have a hard time stopping."}</p>
                    </div>
                    <div className="col-lg-6 order-lg-first">
                      <img src={item?.img} alt=""/>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
   
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderModal;