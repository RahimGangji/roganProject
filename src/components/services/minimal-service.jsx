import React from 'react';

function ServiceBlock({icon,delay='',title,subtitle}) {
  return (
    <div className="col-lg-6">
      <div className="service-block" data-aos="fade-up" data-aos-delay={delay}>
        <div className="icon-box"><img src={`/assets/images/icon/icon${icon}.svg`} alt="" /></div>
        <h2 className="service-title"><a href="#">{title}</a></h2>
        <p>{subtitle}</p>
        <a href="#" className="read-more"><i className="flaticon-next-1"></i></a>
      </div>
    </div>
  )
}

const MinimalService = () => {
  return (
    <>
      <div className="our-service service-minimal pt-150 pb-100">
        <div className="container">
          <div className="theme-title-three text-center mb-200">
            <h2 className="title">We’v been providing our services with proud since 1980.</h2>
            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
          </div>

          <div className="demo-container-1100">
            <div className="row">
              <ServiceBlock icon="48" title="Mobile Application Design & Dev." subtitle="Lorem ipsum, or lipsum as it is sometime dummy text used in laying out printed graphic or web designs. The passage is at attributed to an unknown typesetters in 1the 5th century who is thought scrambled with all parts of Cicero De." />
              <ServiceBlock icon="49" title="Interface Design with UX." delay='100' subtitle="Lorem ipsum, or lipsum as it is sometime dummy text used in laying out printed graphic or web designs. The passage is at attributed to an unknown typesetters in 1the 5th century who is thought scrambled with all parts of Cicero De." />
              <ServiceBlock icon="50" title="Develop WordPress Theme." subtitle="Lorem ipsum, or lipsum as it is sometime dummy text used in laying out printed graphic or web designs. The passage is at attributed to an unknown typesetters in 1the 5th century who is thought scrambled with all parts of Cicero De." />
              <ServiceBlock icon="51" title="Social & Online Marketing." delay='100' subtitle="Lorem ipsum, or lipsum as it is sometime dummy text used in laying out printed graphic or web designs. The passage is at attributed to an unknown typesetters in 1the 5th century who is thought scrambled with all parts of Cicero De." />
              <ServiceBlock icon="52" title="SEO & Affiliate Marketing" subtitle="Lorem ipsum, or lipsum as it is sometime dummy text used in laying out printed graphic or web designs. The passage is at attributed to an unknown typesetters in 1the 5th century who is thought scrambled with all parts of Cicero De." />
              <ServiceBlock icon="53" title="Front-End & Sass Development." delay='100' subtitle="Lorem ipsum, or lipsum as it is sometime dummy text used in laying out printed graphic or web designs. The passage is at attributed to an unknown typesetters in 1the 5th century who is thought scrambled with all parts of Cicero De." />
  
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MinimalService;