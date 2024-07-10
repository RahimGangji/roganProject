import React from 'react';
import FaqForm from '../forms/faq-form';
import SingleFaq from './single-faq';

const FaqPageArea = () => {
  return (
    <>
      <div className="faq-page faq-tab-wrapper pt-150 pb-200">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center mb-80">
            <h3 className="faq-page-title">Frequently Asked Questions</h3>
            <form action="#" className="faq-search-form">
              <input type="text" placeholder="Search here.." />
              <button><i className="fa fa-search" aria-hidden="true"></i></button>
            </form>
          </div>
          <div className="row">
            <div className="col-lg-6">
              {/* <!-- ================== FAQ Panel ================ --> */}
              <div className="faq-panel">
                <div className="panel-group theme-accordion" id="accordion-1">
                  <SingleFaq show={true} id="1" title="How can i get help by rogan?" desc="Lorem ipsum dolor sit amet, vix an natum labitur eleifd, mel am laoreet menandri. Ei justo complectitur duo. Ei mundi solet utos soletu possit quo. Sea cu justo laudem." desc_2="An utinam consulatu eos, est facilis suscipiantur te, vim te iudico delenit voluptatibus." pr="1" />
                  <SingleFaq id="2" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="1" />
                  <SingleFaq id="3" title="Is there any custome pricing system?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="1" />
                  <SingleFaq id="4" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="1" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {/* <!-- ================== FAQ Panel ================ --> */}
              <div className="faq-panel">
                <div className="panel-group theme-accordion" id="accordion-2">
                  <SingleFaq show={true} id="5" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="2" />
                  <SingleFaq id="6" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="2" />
                  <SingleFaq id="7" title="Is there any custome pricing system?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="2" />
                  <SingleFaq id="8" title="Where is the edit optioon on dashboard?" desc="Lorem ipsum dolor sit amet, nec praesent conceptam no vis lorem temporibus. Ei vix rebum noluisse voluptatibus, cum in legere intellegebat, ius ad illum aperiri officiis." pr="2" />
                </div>
              </div>
            </div>
          </div>



         {/* form start */}
         <FaqForm/>
         {/* form end */}
        </div>
      </div>
    </>
  );
};

export default FaqPageArea;