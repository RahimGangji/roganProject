import React from 'react';
import SliderBlog from './slider-blog';

const contents = {
  upper_title: 'Our Blog',
  main_title: 'Our Company News',
}
const { upper_title, main_title } = contents;

const BlogOne = () => {

  return (
    <>
      <div className="agn-home-blog our-blog-one">
        <img src="/assets/images/shape/shape-58.svg" alt="shape" className="shape-one" />
        <img src="/assets/images/shape/shape-57.svg" alt="shape" className="shape-two" />
        <img src="/assets/images/shape/shape-9.svg" alt="shape" className="shape-three" />
        <img src="/assets/images/shape/shape-55.svg" alt="shape" className="shape-four" />
        <div className="container">
          <div className="theme-title-one text-center">
            <div className="upper-title">{upper_title}</div>
            <h2 className="main-title">{main_title}</h2>
          </div>
          {/* slider blog start */}
          <SliderBlog />
          {/* slider blog end */}
        </div>
      </div>
    </>
  );
};

export default BlogOne;