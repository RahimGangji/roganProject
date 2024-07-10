import React from 'react';
import BlogSidebar from '../../common/sidebar/blog-sidebar';
import BlogCommentForm from '../../forms/blog-comment-form';
import SingleComment from './single-comment';

const BlogDetailsArea = ({ blog }) => {
  return (
    <>
      <div className="our-blog blog-details pt-150 mb-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-blog-post">
                <div className="img-holder">
                  <img src="/assets/images/blog/12.jpg" alt="" />
                </div>
                <div className="post-data">
                  <a href="#" className="date">{blog?.date}</a>
                  <h5 className="blog-title-two title">{blog?.title}</h5>
                  <p>This response is important for our ability to learn from mistakes, but it alsogives rise to self-criticism, because it is part of the threat-protection system. In other words, what keeps us safe can go too </p>
                  <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: making mistakes.</p>
                  <blockquote className="quote-one">A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.</blockquote>
                  <h5 className="bold-text">This response is important for our ability to learn from mistakes, but it alsogives rise to self-criticism, because it is part of the threat-protection system. </h5>
                  <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection ridicule. We quickly learn to fear and thus automatically.</p>
                </div>
                <div className="post-tag-area d-md-flex justify-content-between align-items-center mb-80">
                  <ul className="tags">
                    <li>Tag:</li>
                    <li><a href="#">Adventure,</a></li>
                    <li><a href="#">Landscape,</a></li>
                    <li><a href="#">Nature</a></li>
                  </ul>
                  <ul className="share-icon">
                    <li>Share:</li>
                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                  </ul>
                </div>

                <div className="user-comment-area pt-50">
                  <h3 className="inner-block-title">2 Comments</h3>
                  <div className="comment-wrapper">
                    <SingleComment img="/assets/images/blog/1.jpg" name="Rashed ka." date="13 June, 2018, 7:30pm"
                    desc="One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation." />
                    <SingleComment reply={true} img="/assets/images/blog/1.jpg" name="Rashed ka." date="14 June, 2018, 7:30pm" desc="One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation." />
                    <SingleComment img="/assets/images/blog/2.jpg" name="Naim Ahmed" date="15 June, 2018, 7:30pm" desc="One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation." />
                  </div>
                </div>

                <div className="comment-form-area pt-150">
                  <h3 className="inner-block-title">Leave A Comment</h3>
                  <p>Sing in to post your comment or singup if you dont have any account.</p>
                  {/* form start */}
                  <BlogCommentForm/>
                  {/* form end */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              {/* sidebar start */}
              <BlogSidebar />
              {/* sidebar end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsArea;