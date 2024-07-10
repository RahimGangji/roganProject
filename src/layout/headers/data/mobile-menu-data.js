const mobile_menus = [
  {
    id:1,
    has_dropdown:true,
    title:'Home',
    link:'/',
    sub_menus:[
      {link: '/',title: 'Creative Agency'},
      {link: '/home-2',title: 'SEO & Business'},
      {link: '/home-3',title: 'Personal Portfolio'},
      {link: '/home-4',title: 'Personal Portfolio (Particles)'},
      {link: '/home-5',title: 'Saas Landing'},
      {link: '/home-6',title: 'Mobile App Landing'},
      {link: '/home-7',title: 'eCommerce'},
      {link: '/home-8',title: 'Architecture'},
      {link: '/home-9',title: 'Portfolio Studio'},
      {link: '/home-10',title: 'Portfolio Studio Two'},
    ]
  },
  {
    id:2,
    has_dropdown:true,
    title:'About Us',
    link:'/about-us-agency',
    sub_menus:[
      {link: 'about-us-agency',title: 'About Us agency'},
      {link: 'about-us-standard',title: 'About Us standard'}
    ]
  },
  {
    id:3,
    has_dropdown:true,
    title:'Project',
    link:'/project-full-width',
    sub_menus:[
      {link: 'project-full-width',title: 'Project Full width'},
      {link: 'project-minimal',title: 'Project minimal',},
      {link: 'project-ms-full-width',title: 'Project masonry'},
      {link: 'project-ms-grid',title: 'Project masonry grid'},
      {link: 'project-standard',title: 'Project Standard'},
      {link: 'project-with-sidebar',title: 'project with sidebar'},
    ]
  },
  {
    id:4,
    has_dropdown:true,
    title:'Project Details',
    link:'/project-details-standard',
    sub_menus:[
      {link: 'project-details-standard',title: 'Project Details standard'},
      {link: 'project-details-agency',title: 'Project Details agency'},
      {link: 'project-details-business',title: 'Project Details business'},
      {link: 'project-details-creative',title: 'Project Details creative'},
    ]
  },
  {
    id:5,
    has_dropdown:true,
    title:'Services',
    link:'/service-creative',
    sub_menus:[
      {link: 'service-creative',title: 'Service creative'},
      {link: 'service-minimal',title: 'Service minimal'},
      {link: 'service-modern',title: 'Service modern'},
      {link: 'service-standard',title: 'Service standard'},
    ]
  },
  {
    id:6,
    has_dropdown:true,
    title:'Teams',
    link:'/team-business',
    sub_menus:[
      {link: 'team-business',title: 'Team Business'},
      {link: 'team-minimal',title: 'Team minimal'},
      {link: 'team-standard',title: 'Team standard'},
    ]
  },
  {
    id:7,
    has_dropdown:true,
    title:'Contact Us',
    link:'/contact-us-agency',
    sub_menus:[
      {link: 'contact-us-agency',title: 'Contact Agency'},
      {link: 'contact-us-minimal',title: 'Contact Minimal'},
      {link: 'contact-us-standard',title: 'Contact standard'},
    ]
  },
  {
    id:8,
    has_dropdown:true,
    title:'Error',
    link:'/404',
    sub_menus:[
      {link: '404',title: 'Error Creative'},
      {link: '404-standard',title: 'Error Standard'},
    ]
  },
  {
    id:9,
    has_dropdown:true,
    title:'Shop',
    link:'/shop',
    sub_menus:[
      {link: 'product-full-width',title: 'Shop Full width'},
      {link: 'product-with-sidebar',title: 'Shop With sidebar'},
      {link: 'shop',title: 'Shop standard'},
      {link: 'shop-details',title: 'Single product'}
    ]
  },
  {
    id:10,
    has_dropdown:true,
    title:'User pages',
    link:'/login-standard',
    sub_menus:[
      {link: 'login-standard',title: 'Login Standard'},
      {link: 'login-minimal',title: 'Login Minimal'},
      {link: 'sign-up-standard',title: 'Sign-Up Standard'},
      {link: 'sign-up-minimal',title: 'Sign-Up Minimal'},
    ]
  },
  {
    id:11,
    has_dropdown:true,
    title:'Elements',
    link:'#',
    sub_menus:[
      {link:'ui-testimonial',title:'Testimonials'},
      {link:'ui-pricing-table',title:'Pricing Plan'},
      {link:'ui-team',title:'Team'},
      {link:'ui-dropdown',title:'Dropdown'},
      {link:'ui-tooltips',title:'Tooltips'},
      {link:'ui-header',title:'Header',new:true,},
      {link:'ui-accordion',title:'Accordion'},
      {link:'ui-alert',title:'Alert'},
      {link:'ui-badges',title:'Badges'},
      {link:'ui-gallery',title:'Gallery'},
      {link:'ui-typography',title:'Typography'},
      {link:'ui-tabs',title:'Tabs',new:true},
      {link:'ui-blog-post',title:'Post'},
      {link:'ui-breadcrumbs',title:'Breadcrumbs'},
      {link:'ui-button',title:'Button'},
      {link:'ui-list',title:'List'},
      {link:'ui-footer',title:'Footer',new:true,},
      {link:'ui-color',title:'Color'},
      {link:'ui-contact-form',title:'Contact Form'},
      {link:'ui-counter',title:'Counter'},
      {link:'ui-pagination',title:'Pagination'},
      {link:'ui-modal',title:'Modal',new:true,},
    ]
  },
  {
    id:12,
    has_dropdown:true,
    title:'News',
    link:'/blog-default',
    sub_menus:[
      {link: 'blog-default',title: 'Blog default'},
      {link: 'blog-filter',title: 'Blog filter'},
      {link: 'blog-full-grid',title: 'Blog Full Grid'},
      {link: 'blog-masonry',title: 'Blog masonry'},
      {link: 'blog-details',title: 'Blog details'},
      {link: 'blog-details-full-grid',title: 'blog details full grid'},
    ]
  },
  {
    id:13,
    has_dropdown:false,
    title:'Features',
    link:'/features',
  },
  {
    id:14,
    has_dropdown:false,
    title:'Faq',
    link:'/faq',
  },
  {
    id:15,
    has_dropdown:false,
    title:'Cart',
    link:'/cart',
  },
  {
    id:16,
    has_dropdown:false,
    title:'Checkout',
    link:'/checkout',
  },
]
export default mobile_menus;

