import React from 'react';
import { blog_data } from '../../data';
import BlogSidebar from '../common/sidebar/blog-sidebar';
import SingleBlog from './single-blog';

const blog_items = blog_data.filter(blog => blog.blog_default);

const BlogDefaultArea = () => {
  return (
    <>
     <div className="our-blog blog-default pt-150 mb-200">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
              {blog_items.map((blog,i) => (
                <SingleBlog key={i} blog={blog} />
              ))}
							<div className="pd-footer d-flex justify-content-between align-items-center pt-50">
								<a href="#" className="theme-pager prev"><span className="flaticon-back"></span> &nbsp;&nbsp;Previous</a>
								<a href="#" className="theme-pager next">Next &nbsp;&nbsp;<span className="flaticon-next"></span></a>
							</div> 
						</div> 

						<div className="col-lg-4 col-md-6 col-sm-8">
							{/* sidebar start */}
              <BlogSidebar/>
							{/* sidebar end */}
						</div>
					</div> 
				</div>
			</div> 
    </>
  );
};

export default BlogDefaultArea;