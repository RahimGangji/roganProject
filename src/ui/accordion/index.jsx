import React from 'react';
import BreadcrumbTwo from '../../components/breadcrumb/breadcrumb-2';
import SingleFaq from '../../components/faqs/single-faq';
import { Footer, Header } from '../../layout';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <BreadcrumbTwo title={'Accordion'} />
      {/* element section start */}
      <div className="element-section mb-150">
        <div className="container">
          <div className="element-tile-two">Accordion One</div>
          <div className="row justify-content-md-center">
            <div className="col-lg-7 col-md-9">
              <div className="faq-tab-wrapper">
                <div className="faq-panel">
                  <div className="panel-group theme-accordion" id="accordion-1">
                    <SingleFaq show={true} id="1" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="l" />
                    <SingleFaq id="2" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="1" />
                    <SingleFaq id="3" title="Is there any custome pricing system?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="1" />
                    <SingleFaq id="4" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* element section end */}

      {/* element style two start */}
      <div className="element-section mb-150">
				<div className="container">
					<div className="element-tile-two">Accordion Two</div>
					<div className="row justify-content-md-center">
						<div className="col-lg-7 col-md-9">
							<div className="faq-tab-wrapper-two">
								<div className="faq-panel">
									<div className="panel-group theme-accordion" id="accordion-two">
                  <SingleFaq show={true} id="5" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." desc_2="An utinam consulatu eos, est facilis suscipiantur te, vim te iudico delenit voluptatibus." pr="two" />
                  <SingleFaq id="6" title="Is there any custome pricing system?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." desc_2="An utinam consulatu eos, est facilis suscipiantur te, vim te iudico delenit voluptatibus." pr="two" />
                  <SingleFaq id="7" title=" How can i get help by rogan?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." desc_2="An utinam consulatu eos, est facilis suscipiantur te, vim te iudico delenit voluptatibus." pr="two" />
                  <SingleFaq id="8" title="Is there any custome pricing system?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." desc_2="An utinam consulatu eos, est facilis suscipiantur te, vim te iudico delenit voluptatibus." pr="two" />
									</div> 
								</div> 
							</div> 
						</div>
					</div>
				</div>
			</div>
      {/* element style two end */}

      {/* element style three start */}
      <div className="element-section mb-150">
				<div className="container">
					<div className="element-tile-two">Accordion Three</div>
					<div className="row justify-content-md-center">
						<div className="col-lg-7 col-md-9">
							<div className="faq-tab-wrapper-three">
								<div className="faq-panel">
									<div className="panel-group theme-accordion" id="accordion-three">
                  <SingleFaq show={true} id="9" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="three" />
                  <SingleFaq id="10" title="Is there any custome pricing system?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="three" />
                  <SingleFaq id="11" title=" How can i get help by rogan?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="three" />
                  <SingleFaq id="12" title="Is there any custome pricing system?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="three" />
									</div> 
								</div> 
							</div>
						</div>
					</div>
				</div>
			</div>
      {/* element style three end */}
      {/* element style three start */}
      <div className="element-section mb-150">
				<div className="container">
					<div className="element-tile-two">Accordion Four</div>
					<div className="row justify-content-md-center">
						<div className="col-lg-7 col-md-9">
							<div className="faq-tab-wrapper-four">
								<div className="faq-panel">
									<div className="panel-group theme-accordion" id="accordion-four">

                  <SingleFaq show={true} id="13" icon="fa fa-cog" title="How can i get help by rogan?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." img_1="1" img_2="2" desc_2="An utinam consulatu eos, est facilis suscipiantur te, vim te iudico delenit voluptatibus." pr="four" />
                  <SingleFaq id="14" icon="fa fa-bar-chart" title="What about loan programs?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." img_1="3" img_2="4" desc_2="An utinam consulatu eos, est facilis suscipiantur te, vim te iudico delenit voluptatibus." pr="four" />
                  <SingleFaq id="15" icon="fa fa-sitemap" title="What about invesment plan & process?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." img_1="5" img_2="6" desc_2="An utinam consulatu eos, est facilis suscipiantur te, vim te iudico delenit voluptatibus." pr="four" />
                  <SingleFaq id="16" icon="fa fa-anchor" title="How can i opent new account?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." img_1="7" img_2="8" desc_2="An utinam consulatu eos, est facilis suscipiantur te, vim te iudico delenit voluptatibus." pr="four" />

									</div> 
								</div> 
							</div> 
						</div>
					</div>
				</div>
			</div>
      {/* element style three end */}
      <Footer top_border={true} />
    </div>
  );
};

export default index;