import React from 'react';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css'

const dot = <><i>.</i></>

const BannerThree = () => {
  return (
    <div id="theme-banner-three">
      <div className="container">
        <div className="main-wrapper">
          <h1 className="main-title wow fadeInUp animated" data-wow-delay="0.2s">
            <span className="cd-headline clip">
              <span>I Am Naim Develope Quality</span>

              <div>
                <Typed
                //  typedRef={typedRef()}
                className='cd-words-wrapper'
                 loop
                 typeSpeed={100}
                 backSpeed={100}
                 strings={["Website.", "Mobile App.", "Landing Page."]}
                 smartBackspace
                 shuffle={false}
                 backDelay={1}
                 fadeOut={false}
                 fadeOutDelay={100}
                 loopCount={0}
                 showCursor={false}
                //  cursorChar="|"
                />
              </div>

            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BannerThree;