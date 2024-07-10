import React from 'react';

const pricing_data = [
  {
    id: 'month',
    active: true,
    pricing_tables: [
      {
        table: 'free',
        price: '0.00',
        title: 'Free',
        feature: 'Top Features',
        lists: ['Limited Acess Library', 'Single User', 'No Updates'],
      },
      {
        table: 'regular',
        price: '11.25',
        title: 'Regular',
        feature: 'Top Features',
        pack: 'Single User, Billed Monthly',
        lists: ['Limited Acess Library', 'Single User', 'No Updates', '2x Faster speed'],
      },
      {
        table: 'plus',
        price: '39.15',
        title: 'Plus',
        feature: 'Top Features',
        pack: 'Multiple User, Billed Monthly',
        lists: ['Limited Acess Library', 'Single User', 'No Updates', '2x Faster speed', 'Hotline Support 24x7'],
      },
    ]
  },
  {
    id: 'annual',
    pricing_tables: [
      {
        table: 'free',
        price: '0.00',
        title: 'Free',
        feature: 'Top Features',
        lists: ['Limited Acess Library', 'Single User', 'No Updates'],
      },
      {
        table: 'regular',
        price: '560.25',
        title: 'Regular',
        feature: 'Top Features',
        pack: 'Single User, Billed Monthly',
        lists: ['Limited Acess Library', 'Single User', 'No Updates', '2x Faster speed'],
      },
      {
        table: 'plus',
        price: '999.15',
        title: 'Plus',
        feature: 'Top Features',
        pack: 'Multiple User, Billed Monthly',
        lists: ['Limited Acess Library', 'Single User', 'No Updates', '2x Faster speed', 'Hotline Support 24x7'],
      },
    ]
  },
]

const PricingSass = ({ui_pricing}) => {
  return (
    <>
      <div className={`sass-our-pricing ${ui_pricing?'p0':''}`}>
        <div className="section-shape-one">
          <img src="/assets/images/shape/shape-18.svg" alt="" /></div>
        <img src="/assets/images/shape/shape-24.svg" alt="" className="section-shape-two" data-aos="fade-right" data-aos-duration="3000" />
        <img src="/assets/images/shape/shape-25.svg" alt="" className="section-shape-three" />
        <div className="section-shape-four"></div>
        <img src="/assets/images/shape/shape-26.svg" alt="" className="section-shape-five" />
        <img src="/assets/images/shape/shape-27.svg" alt="" className="section-shape-six" data-aos="fade-left" data-aos-duration="3000" />


        <div className="container">
          <div className="theme-title-one text-center show-pr">
            <div className="icon-box show-pr">
              <img src="/assets/images/shape/bg-shape4.svg" alt="" className="bg-shape" />
              <img src="/assets/images/icon/icon26.svg" alt="" className="icon" />
            </div>
            <h2 className="main-title">No Hidden Charges! Choose <br />your Plan.</h2>
          </div>

          <div className="pricing-tab-menu pb-150">
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
            <p>Save 30% on annual plan</p>
          </div>

          <div className="tab-content">
            {pricing_data.map((item, i) => {
              const { id, pricing_tables, active } = item;
              return <div key={id} id={id} className={`tab-pane fade ${active ? 'show active' : ''}`}
              role="tabpanel" aria-labelledby={`${id}-tab`}>
                <div className="row g-0">
                  {pricing_tables.map((tableItem, i) => {
                    const {feature,lists,price,table,title,pack } = tableItem;
                    return <div key={i} className="col-lg-4">
                      <div className={`single-pr-table ${table}`}>
                        <div className="pr-header">
                          <div className="price">${price}</div>
                          <h4 className="title">{title}</h4>
                          {pack && <div className="package">{pack}</div>}
                        </div>
                        <div className="pr-body">
                          <h3 className="feature">{feature}</h3>
                          <ul>
                            {lists.map((l,i) => <li key={i}>{l}</li>)}
                          </ul>
                        </div>
                        <div className="pr-footer">
                          <a href="#" className="upgrade-button">Upgrade</a>
                          <a href="#" className="trial-button">Get your 30 day free trial</a>
                        </div>
                      </div>
                    </div>
                  })}
                </div>
              </div>
            })}

          </div>
        </div>
      </div>
    </>
  );
};

export default PricingSass;