import React from 'react';

const FaqForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} className="submit-faq pt-150">
      <h3 className="faq-page-title text-center">Did’nt Find Answer, Submit Your Question.</h3>
      <div className="row">
        <div className="col-lg-4 col-md-6"><input type="text" placeholder="Your Name*" /></div>
        <div className="col-lg-4 col-md-6"><input type="email" placeholder="Your Mail*" /></div>
        <div className="col-lg-4"><input type="text" placeholder="Subject*" /></div>
        <div className="col-12"><textarea placeholder="Your Question*"></textarea></div>
        <div className="col-12"><button>Submit Questions</button></div>
      </div>
    </form>
  );
};

export default FaqForm;