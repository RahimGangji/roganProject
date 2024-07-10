import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

const SidebarCommerce = ({ home_9,setIsSidebarOpen,isSidebarOpen }) => {
	const [showSubMenu,setShowSubMenu] = useState(false);
	return (
		<>
			<div id="sidebar-menu" 
			className={`eCommerce-side-menu ${home_9 ?'op-page-menu-one':''} ${isSidebarOpen?'show-menu':''}`}>
				<div className="inner-wrapper">
					<div className="logo-wrapper">
						<button className="close-button" onClick={()=> setIsSidebarOpen(false)}>
							<img src="/assets/images/icon/icon43.svg" alt="" />
						</button>
						<img src="/assets/images/logo/logo5.svg" alt="" />
					</div>

					<div className="main-menu-list">
						<ul>
							<li>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>
								<Link href="/about-us-standard">
									<a>About us</a>
								</Link>
							</li>
							<li>
								<Link href="/features">
									<a>Features</a>
								</Link>
							</li>
							<li className="dropdown-holder">
								<a onClick={()=> setShowSubMenu(!showSubMenu)} style={{cursor:'pointer'}}>Pages<button type="button" className="expander">
									<i className="fa fa-chevron-down" aria-hidden="true"></i>
									</button>
								</a>
								<ul className={`sub-menu ${showSubMenu?'show':''}`}>
									<li>
										<Link href="/service-creative">
											<a>Services</a>
										</Link>
									</li>
									<li>
										<Link href="/project-minimal">
											<a>Portfolio</a>
										</Link>
									</li>
									<li>
										<Link href="/blog-filter">
											<a>Blog</a>
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link href="/contact-us-minimal">
									<a>Contact</a>
								</Link>
							</li>
						</ul>
					</div>
					<form action="#" className="eCommerce-search">
						<input type="text" placeholder="Search here" />
						<i className="fa fa-search icon" aria-hidden="true"></i>
					</form>
					<p className="copy-right">&copy; {new Date().getFullYear()}  All Right Reserved</p>
				</div>
			</div>
		</>
	);
};

export default SidebarCommerce;