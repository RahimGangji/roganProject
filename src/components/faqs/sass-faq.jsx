import React from 'react';
import SingleFaq from './single-faq';

const contents = {
	main_title: 'Questions? Look here.',
	sub_heading: <>Can’t find answer? call us at <a href="#">+880 1820 788 800</a> or email us <a href="#">xcoinc@gmail.com</a></>,
	nav_tabs: [
		{ active: true, id: 'general', title: 'General' }, { id: 'payment', title: 'Payment Gateway' },
		{ id: 'feature', title: 'Features' }, { id: 'billing', title: 'Billing Problem' }, { id: 'account', title: 'Account' }, { id: 'service', title: 'Services' },
	],
}
const { main_title, nav_tabs, sub_heading } = contents;

const SassFaq = () => {
	return (
		<>
			<div className="sass-faq-section">
				<div className="section-shape-one"><img src="/assets/images/shape/shape-18.svg" alt="" /></div>
				<img src="/assets/images/shape/shape-26.svg" alt="" className="section-shape-two" />
				<img src="/assets/images/shape/shape-29.svg" alt="" className="section-shape-three" />
				<img src="/assets/images/shape/shape-30.svg" alt="" className="section-shape-four" />
				<div className="container">
					<div className="theme-title-one text-center show-pr">
						<div className="icon-box show-pr">
							<img src="/assets/images/shape/bg-shape1.svg" alt="" className="bg-shape" />
							<img src="/assets/images/icon/icon29.svg" alt="" className="icon" />
						</div>
						<h2 className="main-title">{main_title}</h2>
					</div>
					<p className="sub-heading">{sub_heading}</p>


					<div className="faq-tab-wrapper">
						{/* <!-- Nav tabs --> */}
						<ul className="nav nav-tabs" role="tablist">

							{nav_tabs.map((tab, i) => (
								<li key={i} className="nav-item" role="presentation">
									<button className={`nav-link ${tab.active ? 'active' : ''}`} id={`${tab.id}-tab`} data-bs-toggle="tab" data-bs-target={`#${tab.id}`} type="button" role="tab"
										aria-controls={`${tab.id}`} aria-selected={tab.active ? 'true' : 'false'} tabIndex='-1'>
										<span>{tab.title}</span></button>
								</li>
							))}
						</ul>

						{/* <!-- Tab panes --> */}
						<div className="tab-content">

							<div id="general" className="tab-pane fade show active" role="tabpanel"	aria-labelledby='general-tab'>
								<div className="row">
									<div className="col-lg-6">
										<div className="faq-panel">
											<div className="panel-group theme-accordion" id="accordion-gl">
												<SingleFaq show={true} id="1" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="gl" />
												<SingleFaq id="2" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="gl" />
												<SingleFaq id="3" title="Is there any custome pricing system?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="gl" />
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="faq-panel">
											<div className="panel-group theme-accordion" id="accordion-gl-2">
												<SingleFaq id="4" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="gl-2" />
												<SingleFaq id="5" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="gl-2" />
												<SingleFaq id="6" title="Is there any custome pricing system?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="gl-2" />
											</div>
										</div>
									</div>
								</div>
							</div>

							<div id="payment" className="tab-pane fade" role="tabpanel"	aria-labelledby='payment-tab'>
								<div className="row">
									<div className="col-lg-6">
										<div className="faq-panel">
											<div className="panel-group theme-accordion" id="accordion-py">
												<SingleFaq id="7" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="py" />
												<SingleFaq id="8" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="py" />
												<SingleFaq id="9" title="Is there any custome pricing system?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="py" />
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="faq-panel">
											<div className="panel-group theme-accordion" id="accordion-py-2">
												<SingleFaq id="10" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="py-2" />
												<SingleFaq id="11" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="py-2" />
												<SingleFaq id="12" title="Is there any custome pricing system?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="py-2" />
											</div>
										</div>
									</div>
								</div>
							</div>


							<div id="feature" className="tab-pane fade" role="tabpanel"	aria-labelledby='feature-tab'>
								<div className="row">
									<div className="col-lg-6">
										<div className="faq-panel">
											<div className="panel-group theme-accordion" id="accordion-fe">
												<SingleFaq id="13" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="fe" />
												<SingleFaq id="14" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="fe" />
												<SingleFaq id="15" title="Is there any custome pricing system?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="fe" />
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="faq-panel">
											<div className="panel-group theme-accordion" id="accordion-fe-2">
												<SingleFaq id="16" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="fe-2" />
												<SingleFaq id="17" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="fe-2" />
												<SingleFaq id="19" title="Is there any custome pricing system?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="fe-2" />
											</div>
										</div>
									</div>
								</div>
							</div>


							<div id="billing" className="tab-pane fade" role="tabpanel"	aria-labelledby='billing-tab'>
								<div className="row">
									<div className="col-lg-6">
										<div className="faq-panel">
											<div className="panel-group theme-accordion" id="accordion-bg">
												<SingleFaq id="20" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="bg" />
												<SingleFaq id="21" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="bg" />
												<SingleFaq id="22" title="Is there any custome pricing system?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="bg" />
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="faq-panel">
											<div className="panel-group theme-accordion" id="accordion-bg-2">
												<SingleFaq id="23" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="bg-2" />
												<SingleFaq id="24" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="bg-2" />
												<SingleFaq id="25" title="Is there any custome pricing system?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="bg-2" />
											</div>
										</div>
									</div>
								</div>
							</div>


							<div id="account" className="tab-pane fade" role="tabpanel"	aria-labelledby='account-tab'>
								<div className="row">
									<div className="col-lg-6">
										<div className="faq-panel">
											<div className="panel-group theme-accordion" id="accordion-at">
												<SingleFaq id="26" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="at" />
												<SingleFaq id="27" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="at" />
												<SingleFaq id="28" title="Is there any custome pricing system?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="at" />
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="faq-panel">
											<div className="panel-group theme-accordion" id="accordion-at-2">
												<SingleFaq id="29" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="at-2" />
												<SingleFaq id="30" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="at-2" />
												<SingleFaq id="31" title="Is there any custome pricing system?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="at-2" />
											</div>
										</div>
									</div>
								</div>
							</div>


							<div id="service" className="tab-pane fade" role="tabpanel"	aria-labelledby='service-tab'>
								<div className="row">
									<div className="col-lg-6">
										<div className="faq-panel">
											<div className="panel-group theme-accordion" id="accordion-se">
												<SingleFaq id="32" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="se" />
												<SingleFaq id="33" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="se" />
												<SingleFaq id="34" title="Is there any custome pricing system?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="se" />
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="faq-panel">
											<div className="panel-group theme-accordion" id="accordion-se-2">
												<SingleFaq id="35" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="se-2" />
												<SingleFaq id="36" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="se-2" />
												<SingleFaq id="37" title="Is there any custome pricing system?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="se-2" />
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>


					<a href="#footer" className="down-button scroll-target"><i className="fa fa-angle-down" aria-hidden="true"></i></a>
				</div>
			</div>
		</>
	);
};

export default SassFaq;