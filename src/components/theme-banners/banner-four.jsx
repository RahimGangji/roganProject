import Link from 'next/link';
import React from 'react';
import useModal from '../../hooks/use-modal';
import VideoModal from '../common/modals/modal-video';

const contents = {
  img: '/assets/images/home/1.png',
  img_2: '/assets/images/home/2.png',
  slogan: <><span>70% Off</span> for first 3 months</>,
  title: <>Ultimate web app <br />for your customer <br />support.</>,
  subtitle: <>With the xco platform for customer experience, <br /> service and support.</>,
  btn_text: 'More About us',
  video_id: 'aXFSJTjVjw0'
}
const { img, img_2, slogan, title, subtitle, btn_text, video_id } = contents;

const BannerFour = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      <div id="theme-banner-four">
        <img src={img} alt="" className="screen-one wow fadeInRight animated" data-wow-duration="2s" />
        <img src={img_2} alt="" className="screen-two wow fadeInUp animated" data-wow-duration="2s" />
        <img src="/assets/images/shape/shape-8.svg" alt="" className="shape-one" />
        <img src="/assets/images/shape/shape-9.svg" alt="" className="shape-two" />
        <img src="/assets/images/shape/shape-10.svg" alt="" className="shape-three" />
        <img src="/assets/images/shape/shape-11.svg" alt="" className="shape-four" />
        <div className="round-shape-one"></div>
        <div className="round-shape-two"></div>
        <div className="round-shape-three"></div>
        <div className="round-shape-four"></div>
        <div className="container">
          <div className="main-wrapper">
            <div className="slogan wow fadeInDown animated" data-wow-delay="0.2s">{slogan}</div>
            <h1 className="main-title wow fadeInUp animated" data-wow-delay="0.4s">{title}</h1>
            <p className="sub-title wow fadeInUp animated" data-wow-delay="0.9s">{subtitle}</p>
            <ul className="button-group lightgallery">
              <li>
                <Link href="/about-us-standard">
                  <a className="more-button wow fadeInLeft animated" data-wow-delay="1.5s">{btn_text} <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                </Link>
              </li>

              <li><button onClick={() => setIsVideoOpen(true)} className="fancybox video-button video-button-one wow fadeInRight animated" data-wow-delay="1.5s">See live demo. <i className="flaticon-play-button"></i></button></li>
            </ul>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={video_id} />
      {/* video modal end */}
    </>
  );
};

export default BannerFour;