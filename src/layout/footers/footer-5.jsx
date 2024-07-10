import React from 'react';
import Link from 'next/link';

const FooterWidget = ({ title, lists }) => {
  return <div className="col-md-4 col-sm-6 col-12 footer-list" >
    <h5 className="title">{title}</h5>
    <ul>
      {lists.map((l, i) => <li key={i}>
        <Link href={l.link}>
          <a>{l.title}</a>
        </Link>
      </li>)}
    </ul>
  </div>
}

const FooterFive = () => {
  return (
    <footer className="arch-footer theme-footer-one">
      <div className="top-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-12" >
              <Link href="/">
                <a className="logo">
                  <img src="/assets/images/logo/logo12.svg" alt="" />
                </a>
              </Link>
            </div>
            <div className="col-lg-8">
              <h2>Any project, Job opportunities or something else? <a href="#">Email us</a></h2>
              <div className="row">
                <FooterWidget title="Services" lists={[{ link: '#', title: 'Web Design' }, { link: '#', title: 'Development' }, { link: '#', title: 'Wordpress' }, { link: '#', title: 'Online Marketing' }, { link: '#', title: 'Content' }]} />
                <FooterWidget title="About us" lists={[{ link: '/about-us-standard', title: 'About us' },
                { link: '/project-standard', title: 'Work Portfolio' }, { link: '/team-standard', title: 'Team' },
                { link: '#', title: 'Plan & Pricing' }, { link: '/blog-default', title: 'News' }]} />
                <div className="col-md-4 col-sm-6 col-12">
                  <h5 className="title">Address</h5>
                  <p className="font-lato"><a href="#" className="email">boga.inc@company.com</a></p>
                  <p className="font-lato"><a href="#" className="phone">720.661.2231</a></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container">
        <div className="bottom-footer">
          <div className="clearfix">
            <p>&copy; {new Date().getFullYear()} copyright all right reserved</p>
            <ul>
              <li><a href="#">Privace & Policy.</a></li>
              <li>
                <Link href="/faq">
                  <a >Faq.</a>
                </Link>
              </li>
              <li><a href="#">Terms.</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFive;