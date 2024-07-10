import React from 'react';
import { blog_data } from '../../data';
import SingleBlog from './single-blog';

const blog_items = blog_data.filter(blog => blog.blog_full_grid);

const BlogFullGridArea = () => {
  return (
    <>
      <div className="our-blog blog-default pt-150 mb-200">
        <div className="full-grid-container">
          {blog_items.map((blog, i) => (
            <SingleBlog key={i} blog={blog} />
          ))}

          <div className="theme-pagination-one pt-15">
            <ul>
              <li className="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#"><i className="flaticon-next-1"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogFullGridArea;