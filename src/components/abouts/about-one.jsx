import Link from 'next/link';
import React from 'react';

const contents = {
	upper_title: 'About us',
	main_title: 'Leading Digital Agency for Business Solution.',
	text: 'Lorem ipsum dolor sit amet, hendrerit omittantur mel, es vidit animal iracundia. Ius te altera essent incorrupte. Id alien accu consetetur eam, nibh aliquam iracundia.',
	quote_text: 'Lorem ipsum dolor sit amet, hendrerit omittantur mel et, est ut vidit animal iracundia luis.',
	author_name: 'Salim Rana',
	author_title: 'CEO ThemePure',
	signature: '/assets/images/shape/signature.png',
	img_box: '/assets/images/home/1.jpg',
	btn_text: 'Learn More'
}
const { upper_title, main_title, text, btn_text, img_box, quote_text, signature, author_name, author_title } = contents;

const AboutArea = () => {
	return (
		<div className="agn-about-us">
			<img src="/assets/images/shape/shape-61.svg" alt="" className="shape-one" />
			<img src="/assets/images/shape/shape-64.svg" alt="" className="shape-two" data-aos="fade-left" />
			<img src="/assets/images/shape/shape-65.svg" alt="" className="shape-three" data-aos="fade-right" />
			<img src="/assets/images/shape/shape-60.svg" alt="" className="shape-four" />
			<div className="container">
				<div className="row">
					<div className="col-lg-6 order-lg-last">
						<div className="text-wrapper">
							<div className="theme-title-one">
								<div className="upper-title">{upper_title}</div>
								<h2 className="main-title">{main_title}</h2>
							</div>
							<p>{text}</p>
							<p className="quote">{quote_text}</p>
							<div className="author"><span className="name">{author_name}</span>{author_title}</div>
							<img src={signature} alt="" />
						</div>
					</div>
					<div className="col-lg-6 order-lg-first">
						<div className="img-box">
							<img src={img_box} alt="" className="main-img" />
						</div>
					</div>
				</div>
			</div>
			<Link href="/about-us-agency">
				<a className="learn-more theme-button-two" data-aos="fade-left">{btn_text} <i className="fa fa-angle-right icon-right" aria-hidden="true"></i></a>
			</Link>
		</div>
	);
};

export default AboutArea;