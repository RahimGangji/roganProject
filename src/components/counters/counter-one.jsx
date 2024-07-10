import Link from 'next/link';
import React from 'react';
import CounterWrapper from './counter-wrapper';

const contents = {
  title: <>We completed 1500+ Projects Yearly <br />Successfully & counting</>,
  bottom_banner_title: 'Have any question about us?',
  bottom_banner_text: 'Don’t hesitate to contact us.',
  bottom_btn_text: 'Contact us',
}
const { title, bottom_banner_title, bottom_banner_text, bottom_btn_text } = contents;

const CounterOne = () => {
  return (
    <>
      <div className="agn-counter-section">
        <img src="/assets/images/shape/shape-55.svg" alt="" className="shape-one" />
        <img src="/assets/images/shape/shape-59.svg" alt="" className="shape-two" />
        <img src="/assets/images/shape/shape-61.svg" alt="" className="shape-three" />
        <div className="container">
          <div className="main-wrapper">
            <div className="theme-title-one text-center">
              <h2 className="main-title">{title}</h2>
            </div>
            {<CounterWrapper />}
          </div>
          <div className="bottom-banner">
            <div className="clearfix">
              <div className="text">
                <h3 className="title">{bottom_banner_title}</h3>
                <p>{bottom_banner_text}</p>
              </div>
              <Link href="/contact-us-standard">
                <a className="contact solid-button-one">{bottom_btn_text}</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterOne;