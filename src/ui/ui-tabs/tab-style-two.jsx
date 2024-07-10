import React from 'react';

const TabStyleTwo = () => {
  return (
    <div className="element-section mb-150">
      <div className="container">
        <div className="element-tile-two">Tab Style Two</div>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" disabled>Disabled</button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptate culpa dolores ex vero cumque tempora officiis ratione itaque nulla rerum illum harum iste consectetur repellat qui autem sint dolore, ab voluptates libero labore totam voluptatem quos? Tempore, recusandae harum optio maiores iure error? Quod rem aperiam, provident ad sapiente omnis maxime? Quos minus iure provident, ullam vitae veniam aperiam similique? Officia tempora nulla quam eius consectetur consequatur? Quibusdam nesciunt optio voluptatibus illum corrupti cum.</div>
          <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus illo tenetur quae? Reprehenderit consequuntur dicta nam eveniet voluptatibus quibusdam sint repudiandae? Necessitatibus magnam doloribus nesciunt unde provident accusamus ad et iste eaque similique corporis blanditiis voluptate dignissimos eos, dolorem tempora enim deleniti modi fugiat itaque! Magni nemo tempora, praesentium aliquid eius aperiam, libero dignissimos sint quae debitis quis? Provident sapiente asperiores quo aliquid labore mollitia corrupti animi! Veniam, cupiditate nisi sapiente doloribus quaerat non. Quos esse amet odit inventore voluptatibus.</div>
          <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae error laboriosam magni odio, quod perspiciatis iure, nam non neque inventore obcaecati necessitatibus quas, sequi quisquam distinctio? Voluptas ipsam minima magni ea repellendus maxime quos beatae possimus libero, architecto a omnis ratione modi quae officiis, cumque qui facere. Accusantium deleniti consequuntur facilis delectus quisquam beatae temporibus nisi harum quaerat voluptates praesentium, ex, atque possimus, explicabo magnam assumenda et quam sunt excepturi.</div>
          <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0"></div>
        </div>
      </div>
    </div>
  );
};

export default TabStyleTwo;