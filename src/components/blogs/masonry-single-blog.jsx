import Link from 'next/link';
import React from 'react';

const MasonrySingleBlog = ({ item }) => {
  const { id, title, img, date } = item;
  return (
    <div className="single-blog-post">
      <div className="img-holder">
        <img src={img} alt="" />
      </div>
      <div className="post-data">
        <a href="#" className="date">{date}</a>
        <h5 className="blog-title-one title">
          <Link href={`/blog-details/${id}`}>
            <a>{title}</a>
          </Link>
        </h5>
        <Link href={`/blog-details/${id}`}>
          <a className="read-more"><i className="flaticon-next-1"></i></a>
        </Link>
      </div>
    </div>
  );
};

export default MasonrySingleBlog;