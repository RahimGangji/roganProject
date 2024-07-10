import Link from 'next/link';
import React from 'react';
import LoginStandardForm from '../../forms/login-standard-form';

const LoginStandardArea = () => {
  return (
    <div className="signUp-page signUp-standard pt-50 pb-100">
      <div className="shape-wrapper">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="signUp-illustration">
        <img src="/assets/images/home/sign-up.svg" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 ms-auto">
            <div className="signin-form-wrapper">
              <div className="title-area">
                <h3>Login.</h3>
              </div>
              {/* form start */}
              <LoginStandardForm />
              {/* form end */}
              <p className="signUp-text">Don’t have any account?
                <Link href="/sign-up-standard">
                  <a>Sign up</a>
                </Link>
                now.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginStandardArea;