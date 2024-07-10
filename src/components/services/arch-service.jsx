import Link from 'next/link';
import React, { useState } from 'react';
import { InView } from "react-intersection-observer";

function SingleBlock({ icon, title, subtitle }) {
  return <div className="col-lg-4 col-sm-6">
    <div className="single-block">
      <img src={`/assets/images/icon/icon${icon}.svg`} alt="" />
      <h5 className="title"><a href="#">{title}</a></h5>
      <p className="font-lato">{subtitle}</p>
    </div>
  </div>
}

const ArchService = () => {
  const [isView, setIsView] = useState(false);
  return (
    <>
      <div className="arch-service">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center pb-70">
            <InView as="div" onChange={(inView, entry) => setIsView(inView)}
              className={`theme-title-one arch-title ${isView ? 'show-pr' : 'hide-pr'}`}>
              <h2 className="main-title">We provide below <br />Services. <b className="line"></b></h2>
            </InView>
            <Link href="/service-minimal">
              <a className="line-button-three">See All Services</a>
            </Link>
          </div>

          <div className="row">
            <SingleBlock icon="64" title={<>Retail-Fit Out & <br /> Carpentry</>}
              subtitle="Great idea give you great result. So, we do that for you." />
            <SingleBlock icon="65" title={<>Event & Road Show <br /> Build up</>}
              subtitle="Great idea give you great result. So, we do that for you." />
            <SingleBlock icon="66" title={<>Interior & Space <br /> Planing</>}
              subtitle="Great idea give you great result. So, we do that for you." />
          </div>
        </div>
      </div>
    </>
  );
};

export default ArchService;