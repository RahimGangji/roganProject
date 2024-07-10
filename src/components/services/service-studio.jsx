import React from 'react';

const contents = {
  title_text:'Service',
  theme_title:<>We build usable  <span>products.</span></>,
  sm_text:'Lorem ipsum dolor sit, consectetur some adipiscing elit eiusmod tempor incididu',
  list_items:[
    {title:'Design',lists:['Product Mockup','Branding','Illustrations','UI/UX','Websites']},
    {title:'Marketing',lists:['SEO Marketing','Search Engine Optimization','Affiliate Marketing',
    'Keyword','Article Writing']},
    {title:'Development',lists:['WordPress','Application Development','Front-end','PHP','Javascript']},
    {title:'Video Editing',lists:['Animation','MotionGraphics','After Effects','Cinema 4D','After Effects']},
  ]
}

const {title_text,theme_title,sm_text,list_items} = contents;

const ServiceStudio = () => {
  return (
    <>
      <div className="op-services-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="title-text">{title_text}</div>
            </div>
            <div className="col-lg-8">
              <h2 className="theme-title-four font-k2d">{theme_title}</h2>
              <p>{sm_text}</p>
              <div className="row">
                {list_items.map((item,i) => (
                <div key={i} className="col-sm-6">
                  <div className="list-item">
                    <h6 className="font-k2d">{item.title}</h6>
                    <ul>
                      {item.lists.map((l,i) => <li key={i}>{l}</li>)}
                    </ul>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceStudio;