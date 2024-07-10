import React from 'react';
import { service_data } from '../../data';
import SingleService from './single-service';

const services_items = service_data.filter(ser => ser.home_5)

const ServicesSass = () => {
	return (
		<>
			<div className="our-service-sass show-pr">
				<div className="container">
					<div className="theme-title-one text-center">
						<div className="icon-box show-pr">
							<img src="/assets/images/shape/bg-shape1.svg" alt="" className="bg-shape" />
							<img src="/assets/images/icon/icon23.svg" alt="" className="icon" />
						</div>
						<h2 className="main-title">Provide awesome customer service <br /> with our tools.</h2>
					</div>

					<div className="inner-wrapper">
						<div className="row">
							{services_items.map((service) => {
								const { id,delay } = service;
								return <div key={id} className="col-lg-4 single-block" data-aos="fade-up"
									data-aos-delay={delay}>
									<SingleService service={service} />
								</div>
							})}

						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ServicesSass;