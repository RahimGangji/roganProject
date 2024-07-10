import React from 'react';
import { SocialLinksThree } from '../../social-links';

const ProjectDetailsArea = ({item}) => {
  return (
    <>
     <div className="project-details project-details-standard pt-150 pb-200">
				<div className="container">
					<div className="pd-header text-center">
						<h2 className="project-title-two">{item?.title}</h2>
						<p>Here is also the chance that since you have an article archive on the we  subscribers will often read more than just your original articles. Your subscriber interested lorem ipsum.</p>
						<div className="project-info">
							<ul className="d-sm-flex justify-content-between">
								<li>
									<h6 className="list-title">Date</h6>
									<span className="date">23 July, 2022</span>
								</li>
								<li>
									<h6 className="list-title">Client Name</h6>
									<span className="date">Mariona Adisson, USA</span>
								</li>
								<li>
									<h6 className="list-title">Project Type</h6>
									<span className="date">3D Design, Apartment</span>
								</li>
							</ul>
						</div> 
					</div> 
					<div className="pd-img-box"><img src="/assets/images/gallery/43.jpg" alt=""/></div>
					<div className="pd-body">
						<div className="row">
							<div className="col-md-6">
								<div className="side-block">
									<h5 className="block-title">Goal</h5>
									<p>Here is also the chance that since you have an article archive on the we  subscribers will often read more than with just yours original article. Your subscriber  interested one article but they may find what’s they looking for browsing through previous article. Remember not bore your hard earned subscribers. Then some lorem ipsum text.</p>
								</div>
							</div> 
							<div className="col-md-6">
								<div className="side-block">
									<h5 className="block-title">Challenge.</h5>
									<p>Your subscriber  interested one article but they may find what’s they are looking for browsing through  previous loremarticles. lorem ipsum que dummy text. Remember not to bore your hard earned subscribers. Present them with a problem.</p>
								</div>
							</div> 
						</div> 
					</div> 
					<div className="pd-footer d-flex justify-content-between align-items-center">
						<a href="#" className="theme-pager prev"><span className="flaticon-back"></span> &nbsp;&nbsp;Previous</a>
						<ul className="share-icon">
							<li>Share:</li>
							<SocialLinksThree/>
						</ul>
						<a href="#" className="theme-pager next">Next &nbsp;&nbsp;<span className="flaticon-next"></span></a>
					</div> 
				</div> 
			</div> 
    </>
  );
};

export default ProjectDetailsArea;