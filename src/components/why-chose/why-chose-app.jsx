import React from 'react';

const contents = {
  title:'Why choose us',
  subtitle:'Lorem ipsum dolor sit amet, has ad congue accusam, vide sententiae adipiscing sed ex, vis no etiam.',
  lists:[
    'Nec prodesset complectitur at, qui tempor mollis mentit hinc assentior sed.',
    'it adhuc detracto repudiare ne, mel et erudit que lucilius.',
    'Ne his everti animal omittan legimus blan.',
  ],
  author:'/assets/images/home/7.jpg',
  name:'Salim Rana',
  bio_title:'Managing Director ThemePure.',
  sign_in:'/assets/images/home/sign.png',
  screen:'/assets/images/home/screen16.png'
}
const {title,subtitle,author,lists,name,screen,sign_in,bio_title} = contents;

const WhyChoseApp = () => {
  return (
    <div className="why-choose-us-app">
      <div className="bg-shape-holder">
        <span className="big-round-one wow fadeInLeft animated" data-wow-duration="3s"></span>
        <span className="big-round-two wow fadeInLeft animated" data-wow-duration="3s"></span>
        <span className="big-round-three wow fadeInLeft animated" data-wow-duration="3s"></span>
      </div>
      <div className="container">
        <div className="clearfix">
          <div className="text-wrapper">
            <div className="title-box">{title}</div>
            <h5 className="bottom-title">{subtitle}</h5>
            <ul>
              {lists.map((l,i) => <li key={i}>{l}</li>)}
            </ul>
            <div className="director-speech clearfix">
              <img src={author} alt="" className="d-img" />
              <div className="bio-block">
                <h6 className="name">{name}</h6>
                <span>{bio_title}</span>
              </div>
              <img src={sign_in} alt="" className="sign" />
            </div>
          </div>
        </div>
      </div>
      <div className="screen-preview">
        <img src={screen} alt="" />
      </div>
    </div>
  );
};

export default WhyChoseApp;