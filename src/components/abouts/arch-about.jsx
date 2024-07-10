import React from 'react';

const contents = {
  upper_title:'About us',
  main_title:'Best Architecture Company.',
  text_1:'mollit anim laborum.Duis au dolor in voluptate velit ess cillum dolore eu lore dsu quality.',
  text_2:'mollit anim laborum.Duis aute iru dolor in re voluptate velit ess cillum dolore eu quife nulla pariatur. Excepteur sint occa cupidatat non. in culpa deserunt mollit aboru. temp incididnt ut labore.',
  name:'Johnny Palmer',
  signature:'/assets/images/home/sign3.png',
  img:'/assets/images/home/17.jpg',
  box_title:'BUILD',
  year:'1970'
}
const {box_title,img,main_title,name,signature,text_1,text_2,upper_title,year} = contents;

const ArchAbout = () => {
  return (
    <>
     <div className="about-arch">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="theme-title-one arch-title">
								<div className="upper-title">{upper_title}</div>
								<h2 className="main-title">{main_title}</h2>
							</div>
							<div className="text-wrapper">
								<p className="font-lato mark-text">{text_1}</p>
								<p className="font-lato">{text_2}</p>
								<h6 className="name">{name}</h6>
								<img src={signature} alt=""/>
							</div> 
						</div> 
						<div className="col-lg-6">
							<div className="img-box">
								<img src={img} alt=""/>
								<div className="sq-box">
									{box_title}
									<span className='d-block'>{year}</span>
								</div>
							</div>
						</div>
					</div>
				</div> 
			</div> 
    </>
  );
};

export default ArchAbout;