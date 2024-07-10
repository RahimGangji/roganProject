import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import MasonrySingleBlog from '../../components/blogs/masonry-single-blog';
import SingleBlog from '../../components/blogs/single-blog';
import SliderBlog from '../../components/blogs/slider-blog';
import BreadcrumbTwo from '../../components/breadcrumb/breadcrumb-2';
import { blog_data } from '../../data';
import { Footer, Header } from '../../layout';

const first_blog = blog_data.filter(blog => blog.blog_default)[0];
const second_blog = blog_data.filter(blog => blog.blog_default).find(blog => blog.video);
const third_blog = blog_data.filter(blog => blog.blog_default).find(blog => blog.text_style);
const fourth_blog = blog_data.filter(blog => blog.blog_default).find(blog => blog.solid_post);
const masonry_blogs = blog_data.filter(blog => blog.blog_masonry).slice(0, 3);

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <BreadcrumbTwo title={'Latest Post'} />
      {/* slider blog start */}
      <div className="element-section mb-150">
        <div className="agn-home-blog our-blog-one p0">
          <div className="container">
            {/* slider blog start */}
            <SliderBlog />
            {/* slider blog end */}
          </div>
        </div>
      </div>
      {/* slider blog end */}

      {/* blog default style start */}
      <div className="element-section mb-150">
        <div className="our-blog blog-default">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <SingleBlog blog={first_blog} />
              </div>
              <div className="col-lg-6">
                <SingleBlog blog={second_blog} />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <SingleBlog blog={third_blog} />
                <SingleBlog blog={fourth_blog} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* blog default style end */}

      {/* blog masonry style start */}
      <div className="element-section mb-150">
        <div className="our-blog blog-masonry">
          <div className="container">
            <div className="row masnory-blog-wrapper">
              {/* <div className="grid-sizer"></div> */}
              <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 750: 2, 992: 3 }}>
                <Masonry gutter="50px">
                  {masonry_blogs.map((item, i) => {
                    return <MasonrySingleBlog key={i} item={item} />
                  })}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          </div>
        </div>
      </div>
      {/* blog masonry style end */}
      <Footer top_border={true} />
    </div>
  );
};

export default index;