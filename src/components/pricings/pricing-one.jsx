import React, { useState } from 'react';

const contents = {
  upper_title: 'Pricing Plan',
  main_title: <>No Hidden Charges! Choose <br />your Plan.</>,
  discount_text: 'Save 30% on annual plan',
  pricing_contents: [
    {
      active: true,
      id: 'month',
      pr_lists: ['Full Access Library', 'Multiple User', 'Refund', '24/7 Support'],
      pr_columns: [
        {
          price: 2300,
          service: 'MO',
          title: 'Sandwich',
          pack: 'Regular',
          pr_body: [
            { text: 'Full Access Library', icon: 'flaticon-cancel none' },
            { text: 'Multiple User', icon: 'flaticon-cancel none' },
            { text: 'Refund', icon: 'flaticon-cancel none' },
            { text: '24/7 Support', icon: 'flaticon-tick available' },
          ],
          btn_text: 'Choose Plan',
          footer_text: 'Get your 30 day free trial'
        },
        {
          price: 6000,
          service: 'MO',
          title: 'Subway',
          pack: 'Premium',
          pr_body: [
            { text: 'Full Access Library', icon: 'flaticon-cancel none' },
            { text: 'Multiple User', icon: 'flaticon-cancel none' },
            { text: 'Refund', icon: 'flaticon-tick available' },
            { text: '24/7 Support', icon: 'flaticon-tick available' },
          ],
          btn_text: 'Choose Plan',
          footer_text: 'Get your 30 day free trial'
        },
        {
          price: 9500,
          service: 'MO',
          title: 'Burger',
          pack: 'Corporate',
          pr_body: [
            { text: 'Full Access Library', icon: 'flaticon-tick available' },
            { text: 'Multiple User', icon: 'flaticon-tick available' },
            { text: 'Refund', icon: 'flaticon-tick available' },
            { text: '24/7 Support', icon: 'flaticon-tick available' },
          ],
          btn_text: 'Choose Plan',
          footer_text: 'Get your 30 day free trial'
        },
      ]
    },
    {
      id: 'annual',
      pr_lists: ['Full Access Library', 'Multiple User', 'Refund', '24/7 Support'],
      pr_columns: [
        {
          price: 6300,
          service: 'YR',
          title: 'Sandwich',
          pack: 'Regular',
          pr_body: [
            { text: 'Full Access Library', icon: 'flaticon-cancel none' },
            { text: 'Multiple User', icon: 'flaticon-cancel none' },
            { text: 'Refund', icon: 'flaticon-cancel none' },
            { text: '24/7 Support', icon: 'flaticon-tick available' },
          ],
          btn_text: 'Choose Plan',
          footer_text: 'Get your 30 day free trial'
        },
        {
          price: 8000,
          service: 'YR',
          title: 'Subway',
          pack: 'Premium',
          pr_body: [
            { text: 'Full Access Library', icon: 'flaticon-cancel none' },
            { text: 'Multiple User', icon: 'flaticon-cancel none' },
            { text: 'Refund', icon: 'flaticon-tick available' },
            { text: '24/7 Support', icon: 'flaticon-tick available' },
          ],
          btn_text: 'Choose Plan',
          footer_text: 'Get your 30 day free trial'
        },
        {
          price: 9900,
          service: 'YR',
          title: 'Burger',
          pack: 'Corporate',
          pr_body: [
            { text: 'Full Access Library', icon: 'flaticon-tick available' },
            { text: 'Multiple User', icon: 'flaticon-tick available' },
            { text: 'Refund', icon: 'flaticon-tick available' },
            { text: '24/7 Support', icon: 'flaticon-tick available' },
          ],
          btn_text: 'Choose Plan',
          footer_text: 'Get your 30 day free trial'
        },
      ]
    },
  ]
}

const { upper_title, main_title, discount_text, pricing_contents } = contents;

const PricingOne = ({ui_pricing=false}) => {
  const [tabId, setTabId] = useState('month');
  const handleTabContent = (id) => {
    setTabId(id)
  }
  return (
    <>
      <div className={`agn-our-pricing ${ui_pricing?'p0':'pt-150 pb-200'}`}>
        <img src="/assets/images/shape/shape-55.svg" alt="" className="shape-one" />
        <img src="/assets/images/shape/shape-62.svg" alt="" className="shape-two" />
        <img src="/assets/images/shape/shape-1.svg" alt="" className="shape-three" />
        <img src="/assets/images/shape/shape-60.svg" alt="" className="shape-four" />
        <img src="/assets/images/shape/shape-57.svg" alt="" className="shape-five" />
        <div className="container">
          <div className="theme-title-one text-center">
            <div className="upper-title">{upper_title}</div>
            <h2 className="main-title">{main_title}</h2>
          </div>
        </div>

        <div className="pricing-tab-menu mt-70">
          <div className="nav-wrapper">
            <ul className="nav nav-tabs justify-content-center" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="month-tab" data-bs-toggle="tab" data-bs-target="#month" type="button" role="tab" aria-controls="month" aria-selected="true" tabIndex='-1'>
                <span>Monthly</span></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="annual-tab" data-bs-toggle="tab" data-bs-target="#annual" type="button" role="tab" aria-controls="annual" aria-selected="false" tabIndex='-1'>
                <span>Annual</span></button>
              </li>
            </ul>
          </div>
          <p>{discount_text}</p>
        </div>

        <div className="tab-content">
          {pricing_contents.map((item, i) => {
            const { id, pr_columns, pr_lists, active } = item;
            return <div key={i} id={id} className={`tab-pane fade ${active ? 'show active' : ''}`}
              role="tabpanel" aria-labelledby={`${id}-tab`}>
              <div className="table-wrapper">
                <div className="inner-table clearfix">
                  <ul className="pr-list-text">
                    {pr_lists.map((l, i) => <li key={i}>{l}</li>)}
                  </ul>
                  {pr_columns.map((col, i) => {
                    const { price, title, service, pack, btn_text, footer_text, pr_body } = col;
                    return <div key={i} className="pr-column">
                      <div className="pr-header">
                        <div className="price">${price}<span>/{service}</span></div>
                        <h4 className="title">{title}</h4>
                        <div className="package">{pack}</div>
                      </div>
                      <ul className="pr-body">
                        {pr_body.map((item, i) => (
                          <li key={i}>
                            <div className="pr-text">{item.text}</div>
                            <i className={`icon ${item.icon}`}></i>
                          </li>
                        ))}
                      </ul>
                      <div className="pr-footer">
                        <a href="#" className="choose-button line-button-two">{btn_text}</a>
                        <p>{footer_text}</p>
                      </div>
                    </div>
                  })}
                </div>
              </div>
            </div>
          })}
        </div>

      </div>
    </>
  );
};

export default PricingOne;