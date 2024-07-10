import React from 'react';

const BannerSix = () => {
	return (
		<div className="op-hero-area-one">
			<div className="main-carousel-wrapper">
				<div id="op-hero-one" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
					<div className="carousel-inner">
						{/* <!-- Layer 1 --> */}
						<div className="carousel-item active"
							style={{ backgroundImage: 'url(/assets/images/home/slide-4.jpg)' }} >
							<div className="inner-container">
								<h2 data-animation="animated fadeInUp">Agency</h2>
							</div>
						</div>
						{/* <!-- Layer 2 --> */}
						<div className="carousel-item" style={{ backgroundImage: 'url(/assets/images/home/slide-5.jpg)' }}>
							<div className="inner-container">
								<h2 data-animation="animated fadeInUp">Agency</h2>
							</div>
						</div>
					</div>
					<div className="carousel-nav">
						<div>
							<a className="carousel-control-next" href="#op-hero-one" role="button" data-bs-slide="next">
								Next
								<span className="sr-only">Next</span>
							</a>
							<a className="carousel-control-prev" href="#op-hero-one" role="button" data-bs-slide="prev">
								Prev
								<span className="sr-only">Prev</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BannerSix;