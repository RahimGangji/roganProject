import React, { useState } from 'react';

function SectionShape({ img, img_class }) {
  return <img src={`/assets/images/${img}`} alt="" className={img_class ? img_class : ''} />
}

// single-feature-block
const featureBlockData = [
  {
    bg_shape: 'bg-shape2.svg',
    icon: 'icon24.svg',
    title: <>Provide awesome customer service with our tools. <b className="line"></b></>,
    sm_text: 'Lorem ipsum dolor sit amet, hendrerit omittantur mel, es vidit Ius te altera essent incorrupte.',
    lists: [
      'Lorem ipsum essent alien eam hendrerit mel anil.',
      'Lorem ipsum essent alien eam hendrerit mel es vidit lus anil.',
      'hendrerit mel es vidit lus anil nibh due.',
    ],
    img_boxs: [
      { img: 'shape/shape-15.svg', img_c: 'main-shape', fade: 'fade-right', delay: '200' },
      { img: 'shape/shape-16.svg', img_c: 'bg-shape', fade: 'fade-right', delay: '300' },
      { img: 'home/screen1.png', img_c: 'screen-one', fade: 'fade-down', delay: '500' },
      { img: 'home/screen2.png', img_c: 'screen-two', fade: 'fade-down', delay: '700' },
      { img: 'home/screen3.png', img_c: 'screen-three', fade: 'fade-down', delay: '900' },
      { img: 'home/screen4.png', img_c: 'screen-four', fade: 'fade-down', delay: '1100' },
    ]
  },
  {
    bg_shape: 'bg-shape3.svg',
    icon: 'icon25.svg',
    title: <>Great managment and strong security system. <b className="line"></b></>,
    sm_text: 'Lorem ipsum dolor sit amet, hendrerit omittantur mel, es vidit Ius te altera essent incorrupte.',
    lists: [
      'hendrerit mel es vidit lus anil nibh due.',
      'Lorem ipsum essent alien eam hendrerit mel anil.',
      'Lorem ipsum essent alien eam hendrerit mel es vidit lus anil.',
    ],
    img_boxs: [
      { img: 'shape/shape-17.svg', img_c: 'main-shape', fade: 'fade-left', delay: '200' },
      { img: 'home/screen5.png', img_c: 'screen-one', fade: 'fade-down', delay: '400' },
      { img: 'home/screen6.png', img_c: 'screen-two', fade: 'zoom-in', delay: '600' },
    ]
  },
]

const FeatureSass = () => {
  const [isView, setIsView] = useState(false);
  return (
    <>
      <div className="our-feature-sass">
        <div className="section-shape-one"></div>
        <div className="section-shape-two">
          <SectionShape img="shape/shape-18.svg" />
        </div>
        <SectionShape img="shape/shape-18.svg" img_class="section-shape-three" />
        <div className="section-shape-four"></div>
        <SectionShape img="shape/shape-20.svg" img_class="section-shape-five" />
        <SectionShape img="shape/shape-21.svg" img_class="section-shape-six" />
        <SectionShape img="shape/shape-22.svg" img_class="section-shape-seven" />
        <SectionShape img="shape/shape-19.svg" img_class="section-shape-eight" />
        <a href="#feature-sass" className="down-arrow scroll-target">
          <span><i className="flaticon-back"></i></span>
        </a>

        <div className="feature-wrapper" id="feature-sass">

          {featureBlockData.map((item, i) => {
            const {bg_shape,icon,img_boxs,lists,sm_text,title} = item;
            return <div key={i} className="single-feature-block">
              <div className="container clearfix">
                <div className="text-box">
                  <div className="theme-title-one show-pr">
                    <div className="icon-box show-pr">
                      <img src={`/assets/images/shape/${bg_shape}`} alt="" className="bg-shape" />
                      <img src={`/assets/images/icon/${icon}`} alt="" className="icon" />
                    </div>
                    <h2 className="main-title">{title}<b className="line"></b></h2>
                  </div>
                  <p>{sm_text}</p>
                  <ul>
                    {lists.map((l,i) => <li key={i}>{l}</li>)}
                  </ul>
                  <a href="#" className="read-more">Read More</a>
                </div>
              </div>

              <div className="img-box">
                {img_boxs.map((item,i) => (
                <img key={i} src={`/assets/images/${item.img}`} alt="" className={item.img_c} 
                data-aos={item.fade} data-aos-delay={item.delay} />
                ))}
              </div>
            </div>
          })}

        </div>
      </div>
    </>
  );
};

export default FeatureSass;