import Link from 'next/link';
import React, { useState } from 'react';
import { InView } from "react-intersection-observer";
import { blog_data } from '../../data';

const contents = {
  main_title: <>Check Our Inside <br />Story.</>,
  blog_items: blog_data.filter(item => item.home_arch)
}
const { main_title, blog_items } = contents;

const ArchBlog = () => {
  const [isView, setIsView] = useState(false)
  return (
    <>
      <div className="arch-blog">
        <div className="container">
          <div className="d-lg-flex justify-content-between align-items-center pb-30">
            <InView as="div" onChange={(inView, entry) => setIsView(inView)}
              className={`theme-title-one arch-title ${isView ? 'show-pr' : 'hide-pr'}`}>
              <h2 className="main-title">{main_title}<b className="line"></b></h2>
            </InView>
            <Link href="/blog-full-grid">
              <a className="line-button-three">Go to blog</a>
            </Link>
          </div>

          <div className="row">
            {blog_items.map((blog) => {
              const { id, img, date, title } = blog;
              return <div key={id} className="col-lg-4 col-md-6">
                <div className="blog-post">
                  <div className="img"><img src={img} alt="" /></div>
                  <div className="post">
                    <a href="#" className="date font-lato">{date}</a>
                    <h4 className="title"><a href="#">{title}</a></h4>
                    <a href="#" className="line-button-three read-more">Read More</a>
                  </div>
                </div>
              </div>
            })}

          </div>
        </div>
      </div>
    </>
  );
};

export default ArchBlog;