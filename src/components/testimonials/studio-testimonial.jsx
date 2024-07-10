import React from 'react';

function ClientTextBox({ img, desc, title, desg }) {
  return (
    <div className="client-text-box">
      <img src={`/assets/images/home/${img}.jpg`} alt="" />
      <blockquote>{desc}</blockquote>
      <h6 className="font-k2d">{title}</h6>
      <div className="desg">{desg}</div>
    </div>
  )
}

const StudioTestimonial = () => {
  return (
    <>
      <div className="op-testimonial-one">
        <div className="container clearfix">
          <div className="row">
            <div className="col-md-6">
              <h2 className="theme-title-four font-k2d">Whats our client  <span>think…</span></h2>
              <ClientTextBox img="4" desc="“ Lorem ipsum dolor sit, consectetu qu some adipiscing elit eiusmod tempor incididu nt ut labore e dol magna great aliqua.mollit ani muim…”" title="Anna McGill" desg="CEO & Founder Rogan." />
              <ClientTextBox img="5" desc="“ Lorem ipsum dolor sit, consectetu qu some adipiscing elit eiusmod tempor incididu nt ut labore e dol magna great aliqua.mollit ani muim…”" title="Erin Walker" desg="CEO & Founder Gullu." />
            </div>

            <div className="col-md-6">
              <ClientTextBox img="6" desc="“ Lorem ipsum dolor sit, consectetu qu some adipiscing elit eiusmod tempor incididu nt ut labore e dol magna great aliqua.mollit ani muim…”" title="Samuel Ingram" desg="CEO & Founder Onu." />
              <ClientTextBox img="7" desc="“ Lorem ipsum dolor sit, consectetu qu some adipiscing elit eiusmod tempor incididu nt ut labore e dol magna great aliqua.mollit ani muim…”" title="Randy Murphy" desg="CEO & Founder Zora." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudioTestimonial;