import React from 'react';
import useModal from '../../../hooks/use-modal';
import VideoModal from '../../common/modals/modal-video';
import BlogCommentForm from '../../forms/blog-comment-form';
import { SocialLinksTwo } from '../../social-links';
import SingleComment from '../blog-details/single-comment';

const DetailsFullGrid = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      <div className="our-blog blog-details blog-details-fg">
        <div className="blog-hero-banner" style={{ backgroundImage: 'url(/assets/images/blog/31.jpg)' }}>
          <div className="blog-custom-container">
            <a href="#" className="date">23 July, 2018</a>
            <h2 className="blog-title">Challange yourself and win the future.</h2>
          </div>
        </div>
        <div className="blog-fg-data">
          <div className="post-data">
            <div className="blog-custom-container">
              <div className="custom-container-bg">
                <p className="pt-50">This response is important for our ability to learn from mistakes, but it alsogives self-criticism, because it is part of the threat-protection system. In other words, what keeps us safe can go too </p>
                <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: making mistakes.</p>
                <blockquote className="quote-one">A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.</blockquote>
                <h4 className="sub-heading">How We Achive It Togather.</h4>
                <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: making mistakes.</p>
                <p>This response is important for our ability to learn from mistakes, but it alsogives self-criticism, because it is part of the threat-protection system. In other words, what keeps us safe can go too </p>
                <div className="blog-img-gallery">
                  <div className="row">
                    <div className="col-sm-6"><img src="/assets/images/blog/32.jpg" alt="" /></div>
                    <div className="col-sm-6"><img src="/assets/images/blog/33.jpg" alt="" /></div>
                  </div>
                </div>
                <h5 className="bold-text">This response is important for our ability to learn from mistakes, but it alsogives rise to self-criticism,because it is part of the threat-protection system. </h5>
                <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as weexperience the emotional sensation of stress from our first instances of social rejection ridicule. We quickly learn to fear and thusautomatically.</p>
                <h4 className="sub-heading">Work Harder & Gain Succsess.</h4>
                <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same is true as we experience the emotional sensation of stress from our first ins social rejection ridicule. We quickly learn to fear and thus automatically. automatically avoid potentially stressful situation of all kinds, including the most common of all: making mistakes.</p>
              </div>
            </div>

            <div className="video-banner-blog">
              <a onClick={() => setIsVideoOpen(true)} style={{ cursor: 'pointer' }} className="fancybox video-button"><i className="flaticon-play-button-2"></i></a>
            </div>
            <div className="blog-custom-container">
              <div className="custom-container-bg">
                <blockquote className="quote-two">One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. <span></span></blockquote>
                <h4 className="sub-heading">Let’s Start Now.</h4>
                <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection with ridicule. We quickly learn to fear and thus automatically.</p>
              </div>
            </div>
          </div>

          <div className="blog-custom-container">
            <div className="custom-container-bg">
              <div className="post-tag-area d-md-flex justify-content-between align-items-center pt-50">
                <ul className="tags">
                  <li>Tag:</li>
                  <li><a href="#">Adventure,</a></li>
                  <li><a href="#">Landscape,</a></li>
                  <li><a href="#">Nature</a></li>
                </ul>
                <ul className="share-icon">
                  <li>Share:</li>
                  <SocialLinksTwo />
                </ul>
              </div>

              <div className="user-comment-area pt-150">
                <h3 className="inner-block-title">2 Comments</h3>
                <div className="comment-wrapper">
                  <SingleComment img="/assets/images/blog/1.jpg" name="Rashed ka." date="13 June, 2018, 7:30pm"
                    desc="One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation." />
                  <SingleComment reply={true} img="/assets/images/blog/1.jpg" name="Rashed ka." date="14 June, 2018, 7:30pm" desc="One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation." />
                  <SingleComment img="/assets/images/blog/2.jpg" name="Naim Ahmed" date="15 June, 2018, 7:30pm" desc="One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation." />
                </div>
              </div>
            </div>
          </div>

          <div className="comment-form-area mt-150">
            <div className="blog-custom-container">
              <div className="custom-container-bg">
                <h3 className="inner-block-title">Leave A Comment</h3>
                <p>Sing in to post your comment or singup if you dont have any account.</p>
                {/* form start */}
                <BlogCommentForm />
                {/* form end */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={'aXFSJTjVjw0'} />
      {/* video modal end */}
    </>
  );
};

export default DetailsFullGrid;