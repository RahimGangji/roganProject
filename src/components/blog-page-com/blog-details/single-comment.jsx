import React from 'react';

const SingleComment = ({reply,img,name,date,desc}) => {
  return (
    <div className={`single-comment ${reply?'comment-reply':''} d-sm-flex align-items-top`}>
      <img src={img} alt="" className="user-img" />
      <div className="user-comment-data">
        <h6 className="name">{name}</h6>
        <div className="date">{date}</div>
        <p>{desc}</p>
        <button className="reply">Reply</button>
      </div>
    </div>
  );
};

export default SingleComment;