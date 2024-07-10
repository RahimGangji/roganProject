import React from 'react';

const contents = {
  main_title: <>No Hidden Charges! Choose <br />your Plan.</>,
  save: 'Save 30% on annual plan',
  pricing_data: [
    {
      id: 'month',
      active: true,
      pr_lists: ['Full Access Library', 'Multiple User', 'Refund', '24/7 Support'],
      columns: [
        {
          pack: 'Regular',
          price: '19',
          title: 'Billed Monthly',
          body: [
            { icon: 'flaticon-cancel none', text: 'Full Access Library' },
            { icon: 'flaticon-cancel none', text: 'Multiple User' },
            { icon: 'flaticon-cancel none', text: 'Refund' },
            { icon: 'flaticon-tick available', text: '14/7 Support' },
          ]
        },
        {
          pack: 'Business',
          price: '39',
          title: 'Billed Monthly',
          body: [
            { icon: 'flaticon-cancel none', text: 'Full Access Library' },
            { icon: 'flaticon-cancel none', text: 'Multiple User' },
            { icon: 'flaticon-tick available', text: 'Refund' },
            { icon: 'flaticon-tick available', text: '14/7 Support' },
          ]
        },
        {
          pack: 'Corporate',
          price: '83',
          title: 'Billed Monthly',
          body: [
            { icon: 'flaticon-tick available', text: 'Full Access Library' },
            { icon: 'flaticon-tick available', text: 'Multiple User' },
            { icon: 'flaticon-tick available', text: 'Refund' },
            { icon: 'flaticon-tick available', text: '14/7 Support' },
          ]
        },
      ]
    },
    {
      id: 'annual',
      pr_lists: ['Full Access Library', 'Multiple User', 'Refund', '24/7 Support'],
      columns: [
        {
          pack: 'Regular',
          price: '719',
          title: 'Billed Yearly',
          body: [
            { icon: 'flaticon-cancel none', text: 'Full Access Library' },
            { icon: 'flaticon-cancel none', text: 'Multiple User' },
            { icon: 'flaticon-cancel none', text: 'Refund' },
            { icon: 'flaticon-tick available', text: '14/7 Support' },
          ]
        },
        {
          pack: 'Business',
          price: '739',
          title: 'Billed Yearly',
          body: [
            { icon: 'flaticon-cancel none', text: 'Full Access Library' },
            { icon: 'flaticon-cancel none', text: 'Multiple User' },
            { icon: 'flaticon-tick available', text: 'Refund' },
            { icon: 'flaticon-tick available', text: '14/7 Support' },
          ]
        },
        {
          pack: 'Corporate',
          price: '983',
          title: 'Billed Yearly',
          body: [
            { icon: 'flaticon-tick available', text: 'Full Access Library' },
            { icon: 'flaticon-tick available', text: 'Multiple User' },
            { icon: 'flaticon-tick available', text: 'Refund' },
            { icon: 'flaticon-tick available', text: '14/7 Support' },
          ]
        },
      ]
    },
  ]
}

const { main_title, pricing_data, save } = contents;

const PricingApp = () => {
  return (
    <>
      <div className="agn-our-pricing pricing-app pt-150 pb-200">
        <div className="container">
          <div className="theme-title-one upper-bar text-center">
            <h2 className="main-title">{main_title}</h2>
          </div>

          <div className="pricing-tab-menu mt-70">
            <div className="nav-wrapper">
              <ul className="nav nav-tabs justify-content-center" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active m-0" id="month-tab" data-bs-toggle="tab" data-bs-target="#month" type="button" role="tab" aria-controls="month" aria-selected="true" tabIndex='-1'> <span>Monthly</span></button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link m-0" id="annual-tab" data-bs-toggle="tab" data-bs-target="#annual" type="button" role="tab" aria-controls="annual" aria-selected="false" tabIndex='-1'>
                    <span>Annual</span></button>
                </li>
              </ul>
            </div>
            <p>{save}</p>
          </div>
        </div>

        <div className="tab-content">
          {pricing_data.map((item, i) => {
            const { columns, id, pr_lists, active } = item;
            return <div key={i} id={id} className={`tab-pane fade ${active ? 'show active' : ''}`}
            role="tabpanel" aria-labelledby={`${id}-tab`}>
              <div className="table-wrapper">
                <div className="inner-table clearfix">
                  <ul className="pr-list-text">
                    {pr_lists.map((l, i) => <li key={i}>{l}</li>)}
                  </ul>
                  {columns.map((column, i) => {
                    const { pack, body, price, title } = column;
                    return <div key={i} className="pr-column">
                      <div className="pr-header">
                        <div className="package">{pack}</div>
                        <div className="price">${price}.<sup>99</sup></div>
                        <h4 className="title">{title}</h4>
                      </div>
                      <ul className="pr-body">
                        {body.map((item, i) => (
                          <li key={i}>
                            <div className="pr-text">{item.text}</div>
                            <i className={`icon ${item.icon}`}></i>
                          </li>
                        ))}
                      </ul>
                      <div className="pr-footer">
                        <a href="#" className="choose-button line-button-two">Choose Plan</a>
                        <p>Get your 30 day free trial</p>
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

export default PricingApp;