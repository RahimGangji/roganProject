import React from 'react';

const SingleComment = ({img,name,rating,desc}) => {
  return (
    <div className="single-comment d-sm-flex align-items-top">
      <img src={`/assets/images/blog/${img}.jpg`} alt="" className="user-img" />
      <div className="user-comment-data">
        <h6 className="name">{name}</h6>
        <ul className="rating">
          {rating.map((rating,i) => (
            <li key={i}><a href="#"><i className={rating} aria-hidden="true"></i></a></li>
          ))}
        </ul>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default SingleComment;