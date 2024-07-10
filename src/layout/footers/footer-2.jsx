import React, { useState } from 'react';
import PortfolioForm from '../../components/forms/portfolio-form';
import { InView } from "react-intersection-observer";
import { SocialLinksTwo } from '../../components/social-links';

const FooterTwo = () => {
	const [isView, setIsView] = useState(false);
  return (
    <>
     <footer className={`portfo-footer ${isView?'show-pr':'hide-pr'}`}>
				<img src="/assets/images/shape/shape-7.svg" alt="" className="round-shape"/>
				<div className="container">
					<InView as="div" onChange={(inView,entry) => setIsView(inView)} 
					className={`theme-title-one text-center ${isView?'show-pr':'hide-pr'}`}>
						<div className="upper-title">Contact Us</div>
						<h2 className="main-title">Send me a message, I will be touch <br/>with you shortly.</h2>
					</InView> 

					{/* form start */}
          <PortfolioForm/>
					{/* form end */}

					<div className="copyright-text">
						<ul className="social-icon">
							<SocialLinksTwo/>
						</ul>
						<p>&copy; Built with Love By ThemePure.</p>
					</div> 
				</div>
			</footer> 
    </>
  );
};

export default FooterTwo;