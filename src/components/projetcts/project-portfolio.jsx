import Link from 'next/link';
import React, { useState } from 'react';
import SingleProject from './single-project';

const project_contents = {
  title: 'Projects',
  sm_text: 'Die CI Farben von Millhaus sind schwarz . Nett aber auch herausfoernd. Anfangs probierten, uns abert z.',
  project_data: [
    // Design category
    { img: '/assets/images/portfolio/5.jpg', title: <>Rogan <span>Chee</span></>, desc: 'Die CI Farben von Millhaus sind schwarz . Nett aber auch herausfoernd. Anfangs probierten, uns abert z.', category: 'Design' },
    { img: '/assets/images/portfolio/6.jpg', title: <>Rogan <span>Chee</span></>, desc: 'Die CI Farben von Millhaus sind schwarz . Nett aber auch herausfoernd. Anfangs probierten, uns abert z.', category: 'Design' },
    { img: '/assets/images/portfolio/7.jpg', title: <>Rogan <span>Chee</span></>, desc: 'Die CI Farben von Millhaus sind schwarz . Nett aber auch herausfoernd. Anfangs probierten, uns abert z.', category: 'Design' },
    { img: '/assets/images/portfolio/8.jpg', title: <>Rogan <span>Chee</span></>, desc: 'Die CI Farben von Millhaus sind schwarz . Nett aber auch herausfoernd. Anfangs probierten, uns abert z.', category: 'Design' },
    { img: '/assets/images/portfolio/9.jpg', title: <>Rogan <span>Chee</span></>, desc: 'Die CI Farben von Millhaus sind schwarz . Nett aber auch herausfoernd. Anfangs probierten, uns abert z.', category: 'Design' },
    { img: '/assets/images/portfolio/10.jpg', title: <>Rogan <span>Chee</span></>, desc: 'Die CI Farben von Millhaus sind schwarz . Nett aber auch herausfoernd. Anfangs probierten, uns abert z.', category: 'Design' },
    { img: '/assets/images/portfolio/11.jpg', title: <>Rogan <span>Chee</span></>, desc: 'Die CI Farben von Millhaus sind schwarz . Nett aber auch herausfoernd. Anfangs probierten, uns abert z.', category: 'Design' },
    { img: '/assets/images/portfolio/12.jpg', title: <>Rogan <span>Chee</span></>, desc: 'Die CI Farben von Millhaus sind schwarz . Nett aber auch herausfoernd. Anfangs probierten, uns abert z.', category: 'Design' },
    // development category
    { img: '/assets/images/portfolio/6.jpg', title: <>Rogan <span>Chee</span></>, desc: 'Die CI Farben von Millhaus sind schwarz . Nett aber auch herausfoernd. Anfangs probierten, uns abert z.', category: 'Development' },
    { img: '/assets/images/portfolio/8.jpg', title: <>Rogan <span>Chee</span></>, desc: 'Die CI Farben von Millhaus sind schwarz . Nett aber auch herausfoernd. Anfangs probierten, uns abert z.', category: 'Development' },
    { img: '/assets/images/portfolio/9.jpg', title: <>Rogan <span>Chee</span></>, desc: 'Die CI Farben von Millhaus sind schwarz . Nett aber auch herausfoernd. Anfangs probierten, uns abert z.', category: 'Development' },
    { img: '/assets/images/portfolio/11.jpg', title: <>Rogan <span>Chee</span></>, desc: 'Die CI Farben von Millhaus sind schwarz . Nett aber auch herausfoernd. Anfangs probierten, uns abert z.', category: 'Development' },
    // Marketing category
    { img: '/assets/images/portfolio/5.jpg', title: <>Rogan <span>Chee</span></>, desc: 'Die CI Farben von Millhaus sind schwarz . Nett aber auch herausfoernd. Anfangs probierten, uns abert z.', category: 'Marketing' },
    { img: '/assets/images/portfolio/7.jpg', title: <>Rogan <span>Chee</span></>, desc: 'Die CI Farben von Millhaus sind schwarz . Nett aber auch herausfoernd. Anfangs probierten, uns abert z.', category: 'Marketing' },
    { img: '/assets/images/portfolio/10.jpg', title: <>Rogan <span>Chee</span></>, desc: 'Die CI Farben von Millhaus sind schwarz . Nett aber auch herausfoernd. Anfangs probierten, uns abert z.', category: 'Marketing' },
    { img: '/assets/images/portfolio/12.jpg', title: <>Rogan <span>Chee</span></>, desc: 'Die CI Farben von Millhaus sind schwarz . Nett aber auch herausfoernd. Anfangs probierten, uns abert z.', category: 'Marketing' },
    // Photoshop category
    { img: '/assets/images/portfolio/7.jpg', title: <>Rogan <span>Chee</span></>, desc: 'Die CI Farben von Millhaus sind schwarz . Nett aber auch herausfoernd. Anfangs probierten, uns abert z.', category: 'Photoshop' },
    { img: '/assets/images/portfolio/8.jpg', title: <>Rogan <span>Chee</span></>, desc: 'Die CI Farben von Millhaus sind schwarz . Nett aber auch herausfoernd. Anfangs probierten, uns abert z.', category: 'Photoshop' },
    { img: '/assets/images/portfolio/10.jpg', title: <>Rogan <span>Chee</span></>, desc: 'Die CI Farben von Millhaus sind schwarz . Nett aber auch herausfoernd. Anfangs probierten, uns abert z.', category: 'Photoshop' },
    { img: '/assets/images/portfolio/12.jpg', title: <>Rogan <span>Chee</span></>, desc: 'Die CI Farben von Millhaus sind schwarz . Nett aber auch herausfoernd. Anfangs probierten, uns abert z.', category: 'Photoshop' },
  ]
}

const { title, sm_text, project_data } = project_contents;

const all_categories = [...new Set(project_data.map(category => category.category))];


const ProjectPortfolio = () => {
  const [category, setCategory] = useState('Design');
  const [projectItems, setProjectItems] = useState(project_data.filter(item => item.category === category));

  // gallery_images
  const gallery_images = projectItems.map(img => img.img);
  // handleCategory
  const handleCategory = (category) => {
    setCategory(category);
    setProjectItems(project_data.filter(item => item.category === category))
  }

  return (
    <>
      <div className="section-portfo our-project-portfo p-rel z-i-2">
        <div className="section-num show-pr"><span>0</span><span>4</span></div>
        <div className="container">
          <h2 className="theme-title-two">{title}<span>.</span></h2>
          <ul className="isotop-menu-wrapper show-pr">
            {all_categories.map((c, i) => (
              <li key={i} onClick={() => handleCategory(c)}
                className={`${category === c ? 'is-checked' : ''}`}>{c}.
              </li>
            ))}
          </ul>
        </div>
        <div className="text-content">
          <div className="container">
            <p>{sm_text}</p>
          </div>
          <Link href="/project-full-width">
            <a className="gallery-button" data-aos="fade-left" data-aos-duration="2000">View Gallery</a>
          </Link>
        </div>

        <div id="isotop-gallery-wrapper">
          <div className="grid-sizer"></div>
          <div className="row">
            {projectItems.map((item, i) => (
              <SingleProject key={i} item={item} index={i} gallery_images={gallery_images} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPortfolio;