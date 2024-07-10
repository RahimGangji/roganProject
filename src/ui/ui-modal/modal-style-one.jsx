import React from 'react';
import AllModals from './all-modals';

const ModalStyleOne = () => {
  return (
    <>
      <div className="element-section mb-150">
        <div className="container">
          <div className="element-tile-two">Modal</div>

          <div className="row">
            <div className="col-md-3">
              <p className="pb-30">Modal size</p>
              <div className="mb-3">
                <button className="white-shdw-button modal-button mb-2" data-bs-toggle="modal" data-bs-target="#m">Normal</button>
                <button className="white-shdw-button modal-button mb-2" data-bs-toggle="modal" data-bs-target="#m-sm">Small size</button>
                <button className="white-shdw-button modal-button mb-2" data-bs-toggle="modal" data-bs-target="#m-md">Large size</button>
                <button className="white-shdw-button modal-button mb-2" data-bs-toggle="modal" data-bs-target="#m-xl">Extra Large size</button>
              </div>
              <p className="pb-30 pt-50">Without Backdrop</p>
              <div className="mb-3">
                <button className="white-shdw-button modal-button mb-2" data-bs-toggle="modal" data-bs-target="#mb-3">Without</button>
                <button className="white-shdw-button modal-button mb-2" data-bs-toggle="modal" data-bs-target="#mb-3-w">white style</button>
                <button className="white-shdw-button modal-button mb-2" data-bs-toggle="modal" data-bs-target="#mb-3-b">Dark style</button>
              </div>
              <p className="pb-30 pt-50">Animation</p>
              <div className="mb-3 btn-groups">
                <button className="white-shdw-button modal-button mb-2" data-bs-toggle="modal" data-bs-target="#m-a-f">Fade</button>
                <button className="white-shdw-button modal-button mb-2" data-bs-toggle="modal" data-bs-target="#m-a-a-right" data-bs-toggle-class="fade-right" data-bs-toggle-class-target="#animate">Right</button>
                <button className="white-shdw-button modal-button mb-2" data-bs-toggle="modal" data-bs-target="#m-a-a-left" data-bs-toggle-class="fade-left" data-bs-toggle-class-target="#animate">Left</button>
                <button className="white-shdw-button modal-button mb-2" data-bs-toggle="modal" data-bs-target="#m-a-a-up" data-bs-toggle-class="fade-up" data-bs-toggle-class-target="#animate">Up</button>
                <button className="white-shdw-button modal-button mb-2" data-bs-toggle="modal" data-bs-target="#m-a-a-down" data-bs-toggle-class="fade-down" data-bs-toggle-class-target="#animate">Down</button>
              </div>
            </div>

            <div className="col-md-9">
              <p className="pb-30">Modal style</p>
              <div className="row">
                <div className="col-md-6">
                  <div className="modal-content mb-3">
                    <div className="modal-header">
                      <h5 className="modal-title">Header</h5>
                    </div>
                    <div className="modal-body">
                      <p>Modal content</p>
                    </div>
                    <div className="modal-footer">
                      <button className="btn btn-white">Cancel</button>
                      <button className="btn btn-primary">OK</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="modal-content bg-dark mb-3">
                    <div className="modal-header">
                      <h5 className="modal-title">Header</h5>
                    </div>
                    <div className="modal-body">
                      <p>Modal content</p>
                    </div>
                    <div className="modal-footer">
                      <button className="btn btn-white">Cancel</button>
                      <button className="btn btn-primary">OK</button>
                    </div>
                  </div>
                </div>
              </div>
              <p className="pb-30 pt-50">Modal form</p>
              <div className="row">
                <div className="col-md-6">
                  <div className="modal-content mb-3">
                    <div className="modal-header">
                      <h5 className="modal-title">Login</h5>
                    </div>
                    <div className="modal-body">
                      <form className="" role="form">
                        <div className="form-group">
                          <label>Email</label>
                          <input type="email" className="form-control" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input type="password" className="form-control" placeholder="Password" />
                          <div className="my-3 text-right"><a href="#" className="text-muted text-sm">Forgot password?</a></div>
                        </div>
                        <div className="checkbox mb-3">
                          <label className="ui-check">
                            <input type="checkbox" /><i></i> Remember me
                          </label>
                        </div>
                        <button type="submit" className="theme-button-two mb-4">Sign in</button>
                        <div className="text-sm">Do not have an account? <a href="#" className="text-primary">Sign up</a></div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="modal-content mb-3">
                    <div className="modal-header">
                      <h5 className="modal-title">Register</h5>
                    </div>
                    <div className="modal-body">
                      <div className="">
                        <form name="form" action="#">
                          <div>
                            <a href="#" className="btn btn-block facebook s-sign mb-2">
                              <i className="fa fa-facebook float-left mr-3" aria-hidden="true"></i>
                              Sign up with Facebook
                            </a>
                            <a href="#" className="btn btn-block twitter s-sign">
                              <i className="fa fa-twitter float-left mr-3" aria-hidden="true"></i>
                              Sign up with Twitter
                            </a>
                            <a href="#" className="btn btn-block google s-sign">
                              <i className="fa fa-google float-left mr-3" aria-hidden="true"></i>
                              Sign up with Google
                            </a>
                          </div>
                          <div className="my-3 text-muted text-center">
                            OR
                          </div>
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Username" required />
                          </div>
                          <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email" required />
                          </div>
                          <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" required />
                          </div>
                          <div className="mb-3 text-sm">
                            <span className="text-muted">By clicking Sign Up, I agree to the</span>
                            <a href="#">Terms of service</a>
                          </div>
                          <button type="submit" className="theme-button-two mb-4">Sign Up</button>
                          <div className="text-sm">Already have an account? <a href="#" className="text-primary _600">Sign in</a></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal open */}
      <AllModals/>
    </>
  );
};

export default ModalStyleOne;