import Link from 'next/link';
import React from 'react';
import useModal from '../../hooks/use-modal';
import VideoModal from '../common/modals/modal-video';

const contents = {
  shapes: [
    { img: '/assets/images/shape/oval-1.svg', img_class: 'oval-one' },
    { img: '/assets/images/shape/shape-1.svg', img_class: 'shape-three' },
    { img: '/assets/images/shape/shape-55.svg', img_class: 'shape-four' },
    { img: '/assets/images/shape/shape-56.svg', img_class: 'shape-five' },
    { img: '/assets/images/shape/shape-57.svg', img_class: 'shape-six' },
    { img: '/assets/images/shape/shape-58.svg', img_class: 'shape-seven' },
    { img: '/assets/images/shape/shape-59.svg', img_class: 'shape-eight' },
    { img: '/assets/images/shape/shape-60.svg', img_class: 'shape-nine' },
    { img: '/assets/images/shape/shape-61.svg', img_class: 'shape-ten' },
    { img: '/assets/images/shape/shape-62.svg', img_class: 'shape-eleven' },
  ],
  banner_shape_1: '/assets/images/shape/banner-shape1.svg',
  banner_shape_2: '/assets/images/shape/banner-shape2.svg',
  banner_shape_3: '/assets/images/shape/banner-shape3.svg',
  slogan: <><span>70% Off</span> for first 3 months</>,
  title: <>Digital Agency <br />with Excellence <br />Services.</>,
  subtitle: <>The 3 golden rules professional graphic designer don’t <br /> want you to know about.</>,
  btn_text: 'More About us',
  video_title: 'See live demo.',
  video_id: 'aXFSJTjVjw0'
}
const { shapes, banner_shape_1, banner_shape_2, banner_shape_3, title, subtitle, slogan, btn_text, video_id, video_title } = contents;


const BannerOne = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      <div id="theme-banner-one">
        <div className="illustration wow zoomIn animated" data-wow-delay="1s" data-wow-duration="2s">
          <img src={banner_shape_1} alt="" />
          <img src={banner_shape_2} alt="" className="shape-one wow fadeInDown animated" data-wow-delay="1.8s" />
          <img src={banner_shape_3} alt="" className="shape-two wow fadeInUp animated" data-wow-delay="2.7s" />
        </div>
        {shapes.map((s, i) => <img key={i} src={s.img} alt="" className={s.img_class} />)}
        <div className="container">
          <div className="main-wrapper">
            <div className="slogan wow fadeInDown animated" data-wow-delay="0.2s">
              {slogan}
            </div>
            <h1 className="main-title wow fadeInUp animated" data-wow-delay="0.4s">{title}</h1>
            <p className="sub-title wow fadeInUp animated" data-wow-delay="0.9s">{subtitle}</p>
            <ul className="button-group lightgallery">
              <li>
                <Link href="/about-us-standard">
                  <a className="more-button solid-button-one wow fadeInLeft animated" data-wow-delay="1.5s">{btn_text} <i className="fa fa-angle-right icon-right" aria-hidden="true"></i></a>
                </Link>
              </li>

              <li><button onClick={() => setIsVideoOpen(true)} className="fancybox video-button-one wow fadeInRight animated" data-wow-delay="1.5s">{video_title} <i className="flaticon-play-button icon-right"></i></button></li>
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

export default BannerOne;