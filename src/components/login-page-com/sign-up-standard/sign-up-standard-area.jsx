import React from 'react';
import SignUpForm from '../../forms/sign-up-form';

const SignUpStandardArea = () => {
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
          <img src="/assets/images/home/sign-up.svg" alt=""/>
        </div>
				<div className="container">
					<div className="row">
						<div className="col-lg-7 ms-auto">
							<div className="sign-up-form-wrapper">
								<div className="title-area">
									<h3>Signup Now!</h3>
									<p>Please give us a few more details and we’ll add you to  our early access list.</p>
								</div>
								<ul className="social-icon-wrapper row">
									<li className="col-6"><a href="#" className="gmail"><i className="fa fa-envelope-o" aria-hidden="true"></i> Gmail</a></li>
									<li className="col-6"><a href="#" className="facebook"><i className="fa fa-facebook" aria-hidden="true"></i> Facebook</a></li>
								</ul>
								<p className="or-text"><span>or</span></p>

							{/* form start */}
              <SignUpForm/>
							{/* form end */}
							</div> 
						</div>
					</div>
				</div>
			</div>
  );
};

export default SignUpStandardArea;