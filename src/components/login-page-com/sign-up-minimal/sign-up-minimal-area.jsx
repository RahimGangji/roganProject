import React from 'react';
import SignUpFormTwo from '../../forms/sign-up-form-2';

const SignUpMinimalArea = () => {
  return (
    <>
      <div className="signUp-page signUp-minimal pt-50 pb-100">
				<div className="shape-wrapper">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div> 
				<div className="sign-up-form-wrapper">
					<div className="title-area text-center">
						<h3>Register Now!</h3>
						<p>You can signup with you social account below</p>
					</div> 
					<ul className="social-icon-wrapper row">
						<li className="col-6"><a href="#" className="gmail"><i className="fa fa-envelope-o" aria-hidden="true"></i> Gmail</a></li>
						<li className="col-6"><a href="#" className="facebook"><i className="fa fa-facebook" aria-hidden="true"></i> Facebook</a></li>
					</ul>
					<p className="or-text"><span>or</span></p>
					{/* form start */}
          <SignUpFormTwo/>
					{/* form end */}
				</div> 
			</div>
    </>
  );
};

export default SignUpMinimalArea;