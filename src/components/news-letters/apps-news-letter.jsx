import React from 'react';

const AppsNewsLetter = ({ab_stan}) => {
  return (
    <div className={`newsletter-section ${ab_stan?'agn-theme':''}`}>
      <div className="container">
        <div className="main-wrapper">
          <div className="theme-title-one upper-bar text-center">
            <h2 className="main-title">Subscribe Newsletter & get <br />Company News.</h2>
          </div>
          <form className="ajax-sub-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" id="subscription-email" />
            <button><i className="flaticon-next"></i></button>
            <label className="subscription-label" htmlFor="subscription-email"></label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppsNewsLetter;