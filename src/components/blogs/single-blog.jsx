import Link from 'next/link';
import React from 'react';
import useModal from '../../hooks/use-modal';
import VideoModal from '../common/modals/modal-video';

const SingleBlog = ({ blog }) => {
  const { id, text_style, solid_post, video, img, date, title, desc, author } = blog || {};
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      <div className={`single-blog-post ${text_style ? 'blog-text-style' : ''} 
    ${solid_post ? 'bg-solid-post show-pr' : ''}`}>
        {!solid_post && !text_style && <div className="img-holder">
          <img src={img} alt="" />
          {video && <a style={{ cursor: 'pointer' }} onClick={() => setIsVideoOpen(true)} className="fancybox video-button"><i className="flaticon-play-button-2"></i></a>}
        </div>
        }
        {!solid_post && <div className="post-data">
          <a href="#" className="date">{date}</a>
          <h5 className="blog-title-two title">
            <Link href={`/blog-details/${id}`}>
              <a>{title}</a>
            </Link>
          </h5>
          <p>{desc.substring(0, 300)}…</p>
          <Link href={`/blog-details/${id}`}>
            <a className="read-more"><i className="flaticon-next-1"></i></a>
          </Link>
        </div>}
        {
          solid_post &&
          <div className="post-data">
            <h5 className="title">
              <Link href={`/blog-details/${id}`}>
                <a>{title}</a>
              </Link>
            </h5>
            <div className="author">{author}</div>
          </div>
        }
      </div>

      {/* video modal start */}
      <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={'aXFSJTjVjw0'} />
      {/* video modal end */}
    </>
  );
};

export default SingleBlog;