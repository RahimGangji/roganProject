import React from 'react';

function SingleWorkList({order,order_2,icon,title,sm_text,lists,shape }) {
  return (
    <div className="row single-work-list">
      <div className={`col-lg-6 ${order?order:''}`}>
        <div className="text-wrapper">
          <div className="icon-box">
            <img src={`/assets/images/icon/${icon}`} alt=""/>
          </div>
          <h2 className="title">{title}</h2>
          {sm_text && <p>{sm_text}</p>}
          <ul>
            {lists.map((l,i) => <li key={i}>{l}</li>)}
          </ul>
        </div>
      </div>
      <div className={`col-lg-6 ${order_2?order_2:''}`}>
        <div className="img-box clearfix">
          <img src={`/assets/images/shape/${shape}`} alt="shape"/>
        </div>
      </div>
    </div>
  )
}

const SeoWorkProgress = () => {
  return (
    <>
      <div className="seo-work-progress">
        <div className="container">

          <SingleWorkList order="order-lg-2" order_2="order-lg-1" icon="icon12.svg" 
          title="Research Your Internal Objectives." sm_text="Lorem ipsum dolor sit amet, munere animal at ius quo oratio verterem cu erat." lists={['Quo fastidii perpetua reprimique impetus utroque','Has at erat nominavi expetendis, id quod delicat quo sed lorem set impetus.']} shape="shape-3.svg" />

          <SingleWorkList icon="icon13.svg" title="Keyword Research & Link Building." lists={['Quo fastidii perpetua reprimique impetus utroque','Has at erat nominavi expetendis, id quod delicat quo sed lorem set impetus.']} shape="shape-4.svg" />

          <SingleWorkList order="order-lg-2" order_2="order-lg-1" icon="icon14.svg" 
          title="Work Tracking & Reporting." lists={['Working Capital Loans – Loan proceeds used to cover cash flow gaps in working capital','Invoice Factoring – Provide cash flow between delivery of medical services and insurance payments']} shape="shape-5.svg" />

        </div>
      </div>
    </>
  );
};

export default SeoWorkProgress;