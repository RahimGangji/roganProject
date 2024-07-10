import React from 'react';
import useModal from '../../hooks/use-modal';
import VideoModal from '../common/modals/modal-video';

const AboutAgnVideoBanner = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      <div className="video-action-banner-one mt-95">
        <div className="overlay">
          <a onClick={() => setIsVideoOpen(true)} className="video-button fancybox" style={{cursor:'pointer'}}>
            <img src="/assets/images/icon/icon47.svg" alt="" />
          </a>
        </div>
      </div>

      {/* video modal start */}
      <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={'aXFSJTjVjw0'} />
      {/* video modal end */}
    </>
  );
};

export default AboutAgnVideoBanner;