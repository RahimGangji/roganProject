import Link from 'next/link';
import React from 'react';

const BlogSidebar = () => {
  return (
    <div className="theme-sidebar-widget">
      <div className="single-block mb-80">
        <form className="sidebar-search">
          <input type="text" placeholder="Search" />
          <button><i className="fa fa-search" aria-hidden="true"></i></button>
        </form>
      </div>
      <div className="single-block mb-80">
        <h4 className="sidebar-title">Categories</h4>
        <ul className="list-item blog-category">
          <li>
            <a href="#">Web Design <span>(09)</span></a>
          </li>
          <li>
            <a href="#">Graphics <span>(13)</span></a>
          </li>
          <li>
            <a href="#">Web Development <span>(05)</span></a>
          </li>
          <li>
            <a href="#">IOS/Android Development <span>(19)</span></a>
          </li>
          <li>
            <a href="#">Others <span>(12)</span></a>
          </li>
        </ul>
      </div>
      <div className="single-block mb-80">
        <h4 className="sidebar-title">Recent News</h4>
        <ul className="recent-news-item">
          <li>
            <h6 className="rn-title">
              <Link href="/blog-details">
                <a>10 days quick challange for boost your online visitors.</a>
              </Link>
            </h6>
            <div className="date">23 July, 2022</div>
          </li>
          <li>
            <h6 className="rn-title">
              <Link href="/blog-details">
                <a>10 days quick challange for boost your online visitors.</a>
              </Link>
            </h6>
            <div className="date">25 July, 2022</div>
          </li>
          <li>
            <h6 className="rn-title">
              <Link href="/blog-details">
                <a>10 days quick challange for boost your online visitors.</a>
              </Link>
            </h6>
            <div className="date">27 July, 2022</div>
          </li>
        </ul>
      </div>
      <div className="single-block">
        <h4 className="sidebar-title">Keywords</h4>
        <ul className="keywords-tag clearfix">
          <li><a href="#">Ideas</a></li>
          <li><a href="#">Education</a></li>
          <li><a href="#">Design</a></li>
          <li><a href="#">Development</a></li>
          <li><a href="#">Branding</a></li>
        </ul>
      </div>
    </div>
  );
};

export default BlogSidebar;