import Link from 'next/link';
import React, { useState } from 'react';
import { blog_data } from '../../data';

const blog_items = blog_data.filter(blog => blog.blog_filter);
const all_categories = ['All', ...new Set(blog_items.map(item => item.category))]

const BlogFilterArea = () => {
  const [category, setCategory] = useState('All');
  const [items, setItems] = useState(blog_items);
  // handleCategory
  const handleCategory = (category) => {
    setCategory(category);
    if (category === 'All') {
      setItems(blog_items)
    }
    else {
      setItems(blog_items.filter(item => item.category === category))
    }
  }
  return (
    <>
      <div className="our-blog blog-filer mb-150">
        <div className="blog-filter-title">
          <p className="upper-title">Our News</p>
          <h2 className="main-title">Our inside stories <br /> for you</h2>
        </div>

        <ul className="isotop-menu-wrapper blog-filter-nav clearfix">
          {all_categories.map((c, i) => (
            <li key={i} className={c === category ? "is-checked" : ''} onClick={() => handleCategory(c)}>
              <span>{c}</span>
            </li>
          ))}
        </ul>


        <div className="row">
          {
            items.map((item) => (
              <div key={item.id} className="col-lg-3 col-md-4" data-aos="fade-left">
                <div className="economy marketing">
                  <div className="single-blog-post">
                    <div className="img-holder">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="post-data">
                      <a href="#" className="date">{item.date}</a>
                      <h5 className="blog-title-one title">
                        <Link href={`/blog-details/${item.id}`}>
                          <a>{item.title}</a>
                        </Link>
                      </h5>
                      <p>{item.desc}…</p>
                      <Link href={`/blog-details/${item.id}`}>
                        <a className="read-more"><i className="flaticon-next-1"></i></a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        <div className="theme-pagination-one text-center pt-15">
          <ul>
            <li><a href="#"><i className="flaticon-back-1"></i></a></li>
            <li className="active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li>....</li>
            <li><a href="#">Last</a></li>
            <li><a href="#"><i className="flaticon-next-1"></i></a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogFilterArea;