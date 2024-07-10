import Link from 'next/link';
import React from 'react';
import LoginMinimalForm from '../../forms/login-minimal-form';

const LoginMinimalArea = () => {
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
				<div className="signin-form-wrapper">
					<div className="title-area text-center">
						<h3>Login.</h3>
					</div>
					{/* form start */}
					<LoginMinimalForm />
					{/* form end */}
					<p className="signUp-text text-center">Don’t have any account?
						<Link href="/sign-up-minimal">
							<a>Sign up</a>
						</Link>
						now.</p>
				</div>
			</div>
		</>
	);
};

export default LoginMinimalArea;