import React from 'react';

const contents = {
  upper_title:'Marketing Gaol',
  main_title:'Best Market Research Tool for You.',
  sm_text:'Lorem ipsum dolor sit amet, hendrerit omittantur melu est ut vidit animal iracundia luis.',
  lists:[
    'Lorem ipsum essent alien eam hendrerit mel anil.',
    'Lorem ipsum essent alien eam hendrerit mel es vidit lus anil.',
    'Hendrerit mel es vidit lus anil nibh due.',
  ],
  btn_text:'Request Free Consultation'
}
const {upper_title,main_title,btn_text,lists,sm_text} = contents;

const SeoGoal = () => {
  return (
    <>
      <div className="seo-our-goal">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-wrapper">
                <div className="theme-title-one title-underline">
                  <div className="upper-title">{upper_title}</div>
                  <h2 className="main-title">{main_title}</h2>
                </div>
                <p>{sm_text}</p>
                <ul className="list-item">
                  {lists.map((l,i) => <li key={i}>{l}</li>)}
                </ul>
                <a href="#" className="request-button">{btn_text} 
                <i className="fa fa-angle-right" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
          <div className="right-shape" data-aos="fade-left"></div>
        </div>
      </div>
    </>
  );
};

export default SeoGoal;