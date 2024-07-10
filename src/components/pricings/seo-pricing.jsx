import React from 'react';

function SinglePrice({ delay, pricing_class, icon, title, price, pack, slogan, lists }) {
  return (
    <div className="col-lg-4" data-aos="fade-up" data-aos-delay={delay ? delay : ''}>
      <div className={`single-pr-table ${pricing_class}`}>
        <div className="pr-header">
          <img src={`/assets/images/icon/${icon}`} alt="icon" className="icon" data-aos="fade-right" />
          <h4 className="title">{title}</h4>
          <div className="price">${price}.<sup>99</sup></div>
          <div className="package">{pack}</div>
        </div>
        <div className="pr-body">
          <h3 className="slogan">{slogan}</h3>
          <ul>
            {lists.map((l, i) => <li key={i}>{l}</li>)}
          </ul>
        </div>
        <div className="pr-footer">
          <a href="#" className="plan-button line-button-two">Choose Plan</a>
          <a href="#" className="trial-button">Get your 30 day free trial</a>
        </div>
      </div>
    </div>
  )
}

const SeoPricing = ({ui_pricing}) => {
  return (
    <>
      <div className={`seo-our-pricing ${ui_pricing?'':'section-bg'}`}>
        <div className="container">
          <div className="theme-title-one title-underline text-center">
            <div className="upper-title">Pricing Plan</div>
            <h2 className="main-title">No Hidden Charges! Choose <br />your Plan.</h2>
          </div>

          <div className="row">
            <SinglePrice pricing_class="subway" icon="icon15.svg" title="Subway" price={39} pack="Weekly"
            slogan="Quick job, Small Work" lists={['50GB Bandwidth', 'Business & Finance Analyzing',
            '24 hour support', 'Customer Management']} />

            <SinglePrice delay="300" pricing_class="sandwich" icon="icon16.svg" title="Sandwich" price={99} pack="Monthly" slogan="Bigger, Great for Team" lists={['50GB Bandwidth', 'Business & Finance Analyzing',
            '24 hour support', 'Customer Management']} />

            <SinglePrice delay="500" pricing_class="burger" icon="icon17.svg" title="Burger" price={989} pack="Yearly" slogan="Great for Corporation" lists={['50GB Bandwidth', 'Business & Finance Analyzing',
            '24 hour support', 'Customer Management']} />

          </div>
        </div>
      </div>
    </>
  );
};

export default SeoPricing;