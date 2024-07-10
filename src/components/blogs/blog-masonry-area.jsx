import React, { useState } from 'react';
import { blog_data } from '../../data';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import MasonrySingleBlog from './masonry-single-blog';

const blog_items = blog_data.filter(blog => blog.blog_masonry);

const itemPerView = 6;

const BlogMasonryArea = () => {
  const [next, setNext] = useState(itemPerView);
  // handleLoadData
  const handleLoadData = () => {
    setNext(value => value + 3)
  }
  return (
    <>
      <div className="our-blog blog-masonry pt-150 mb-200">
        <div className="container">
          <div className="row masnory-blog-wrapper">
            <div className="grid-sizer"></div>

            <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 750: 2, 992: 3 }}>
              <Masonry gutter="50px">
                {blog_items?.slice(0, next)?.map((item, i) => {
                  return <MasonrySingleBlog key={i} item={item} />
                })}
              </Masonry>
            </ResponsiveMasonry>

          </div>
          {next < blog_items.length && <div className="text-center pt-90" onClick={handleLoadData}>
            <a style={{ cursor: 'pointer' }} className="theme-button-one">Load More</a>
          </div>}
        </div>
      </div>
    </>
  );
};

export default BlogMasonryArea;