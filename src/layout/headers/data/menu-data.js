const menu_data = {
  homes_data: [
    {
      link: '/',
      title: 'Creative Agency',
      img: '/assets/images/menu-img/home-1.jpg'
    },
    {
      link: '/home-2',
      title: 'SEO & Business',
      img: '/assets/images/menu-img/home-2.jpg'
    },
    {
      link: '/home-3',
      title: 'Personal Portfolio',
      img: '/assets/images/menu-img/home-3.jpg'
    },
    {
      link: '/home-4',
      title: 'Personal Portfolio (Particles)',
      img: '/assets/images/menu-img/home-7.jpg'
    },
    {
      link: '/home-5',
      title: 'Saas Landing',
      img: '/assets/images/menu-img/home-5.jpg'
    },
    {
      link: '/home-6',
      title: 'Mobile App Landing',
      img: '/assets/images/menu-img/home-4.jpg'
    },
    {
      link: '/home-7',
      title: 'eCommerce',
      img: '/assets/images/menu-img/home-6.jpg'
    },
    {
      link: '/home-8',
      title: 'Architecture',
      img: '/assets/images/menu-img/home-8.jpg'
    },
    {
      link: '/home-9',
      title: 'Portfolio Studio',
      img: '/assets/images/menu-img/home-9.jpg'
    },
    {
      link: '/home-10',
      title: 'Portfolio Studio Two',
      img: '/assets/images/menu-img/home-10.jpg'
    },
  ],
  pages: {
    link: '/about-us-agency',
    title: 'Pages.',
    dropdown: [
      {
        link: 'about-us-agency',
        title: 'About Us',
        submenu: [
          {
            link: 'about-us-agency',
            title: 'About Us agency',
          },
          {
            link: 'about-us-standard',
            title: 'About Us standard',
          },
        ]
      },
      {
        link: 'project-full-width',
        title: 'Project',
        submenu: [
          {
            link: 'project-full-width',
            title: 'Project Full width',
          },
          {
            link: 'project-minimal',
            title: 'Project minimal',
          },
          // {
          //   link: 'project-creative',
          //   title: 'Project creative',
          //   new: true,
          // },
          {
            link: 'project-ms-full-width',
            title: 'Project masonry',
          },
          {
            link: 'project-ms-grid',
            title: 'Project masonry grid',
          },
          {
            link: 'project-standard',
            title: 'Project Standard',
          },
          {
            link: 'project-with-sidebar',
            title: 'project with sidebar',
          },
          {
            sub_child: {
              link: 'project-details-standard',
              title: 'Project Details',
              sub_dropdown: [
                {
                  link: 'project-details-standard',
                  title: 'Project Details standard',
                },
                {
                  link: 'project-details-agency',
                  title: 'Project Details agency',
                },
                {
                  link: 'project-details-business',
                  title: 'Project Details business',
                },
                {
                  link: 'project-details-creative',
                  title: 'Project Details creative',
                },
              ]
            }
          },
        ]
      },
      {
        link: 'service-creative',
        title: 'Services',
        submenu: [
          {
            link: 'service-creative',
            title: 'Service creative',
          },
          {
            link: 'service-minimal',
            title: 'Service minimal',
          },
          {
            link: 'service-modern',
            title: 'Service modern',
          },
          {
            link: 'service-standard',
            title: 'Service standard',
          },
        ]
      },
      {
        link: 'team-business',
        title: 'Team',
        submenu: [
          {
            link: 'team-business',
            title: 'Team Business',
          },
          {
            link: 'team-minimal',
            title: 'Team minimal',
          },
          {
            link: 'team-standard',
            title: 'Team standard',
          },
        ]
      },
      {
        link: 'contact-us-agency',
        title: 'Contact Us',
        submenu: [
          {
            link: 'contact-us-agency',
            title: 'Contact Agency',
          },
          {
            link: 'contact-us-minimal',
            title: 'Contact Minimal',
          },
          {
            link: 'contact-us-standard',
            title: 'Contact standard',
          },
        ]
      },
      {
        link: '404',
        title: 'Error',
        submenu: [
          {
            link: '404',
            title: 'Error Creative',
          },
          {
            link: '404-standard',
            title: 'Error Standard',
          },
        ]
      },
    ]
  },
  features: {
    link: '/features',
    title: 'Features.',
    dropdown: [
      {
        link: 'shop',
        title: 'Shop',
        submenu: [
          {
            link: 'product-full-width',
            title: 'Shop Full width',
          },
          {
            link: 'product-with-sidebar',
            title: 'Shop With sidebar',
          },
          {
            link: 'shop',
            title: 'Shop standard',
          },
          {
            link: 'shop-details',
            title: 'Single product',
          },
        ]
      },
      {
        link: 'features',
        title: 'Features',
      },
      {
        link: 'faq',
        title: 'Faq',
      },
      {
        link: 'checkout',
        title: 'Checkout',
      },
      {
        link: 'cart',
        title: 'Cart',
      },
      {
        link: 'login-standard',
        title: 'User pages',
        new: true,
        submenu: [
          {
            link: 'login-standard',
            title: 'Login Standard',
          },
          {
            link: 'login-minimal',
            title: 'Login Minimal',
          },
          {
            link: 'sign-up-standard',
            title: 'Sign-Up Standard',
          },
          {
            link: 'sign-up-minimal',
            title: 'Sign-Up Minimal',
          },
        ]
      },
    ]
  },
  mega_elements:[
    {
      title:'Element 1',
      mega_drop_lists:[
        {
          link:'ui-testimonial',
          img:'/assets/images/menu-icon/icon1.svg',
          title:'Testimonials'
        },
        {
          link:'ui-pricing-table',
          img:'/assets/images/menu-icon/icon2.svg',
          title:'Pricing Plan'
        },
        {
          link:'ui-team',
          img:'/assets/images/menu-icon/icon3.svg',
          title:'Team'
        },
        {
          link:'ui-dropdown',
          img:'/assets/images/menu-icon/icon4.svg',
          title:'Dropdown'
        },
        {
          link:'ui-tooltips',
          img:'/assets/images/menu-icon/icon5.svg',
          title:'Tooltips'
        },
        {
          link:'ui-header',
          img:'/assets/images/menu-icon/icon6.svg',
          title:'Header',
          new:true,
        },
      ]
    },
    {
      title:'Element 2',
      mega_drop_lists:[
        {
          link:'ui-accordion',
          img:'/assets/images/menu-icon/icon7.svg',
          title:'Accordion'
        },
        {
          link:'ui-alert',
          img:'/assets/images/menu-icon/icon8.svg',
          title:'Alert'
        },
        {
          link:'ui-badges',
          img:'/assets/images/menu-icon/icon9.svg',
          title:'Badges'
        },
        {
          link:'ui-gallery',
          img:'/assets/images/menu-icon/icon10.svg',
          title:'Gallery'
        },
        {
          link:'ui-typography',
          img:'/assets/images/menu-icon/icon11.svg',
          title:'Typography'
        },
        {
          link:'ui-tabs',
          img:'/assets/images/menu-icon/icon18.svg',
          title:'Tabs',
          new:true,
        },
      ]
    },
    {
      title:'Element 3',
      mega_drop_lists:[
        {
          link:'ui-blog-post',
          img:'/assets/images/menu-icon/icon12.svg',
          title:'Post'
        },
        {
          link:'ui-breadcrumbs',
          img:'/assets/images/menu-icon/icon13.svg',
          title:'Breadcrumbs'
        },
        {
          link:'ui-button',
          img:'/assets/images/menu-icon/icon14.svg',
          title:'Button'
        },
        {
          link:'ui-list',
          img:'/assets/images/menu-icon/icon15.svg',
          title:'List'
        },
        {
          link:'ui-footer',
          img:'/assets/images/menu-icon/icon16.svg',
          title:'Footer',
          new:true,
        },
      ]
    },
    {
      title:'Element 4',
      mega_drop_lists:[
        {
          link:'ui-color',
          img:'/assets/images/menu-icon/icon17.svg',
          title:'Color'
        },
        {
          link:'ui-contact-form',
          img:'/assets/images/menu-icon/icon18.svg',
          title:'Contact Form'
        },
        {
          link:'ui-counter',
          img:'/assets/images/menu-icon/icon19.svg',
          title:'Counter'
        },
        {
          link:'ui-pagination',
          img:'/assets/images/menu-icon/icon20.svg',
          title:'Pagination'
        },
        {
          link:'ui-modal',
          icon:'icon flaticon-login',
          title:'Modal',
          new:true,
        },
      ]
    },
  ],
  news:{
    link: '/blog-default',
    title: 'News.',
    dropdown: [
      {
        link: 'blog-default',
        title: 'Blog default',
      },
      {
        link: 'blog-filter',
        title: 'Blog filter',
      },
      {
        link: 'blog-full-grid',
        title: 'Blog Full Grid',
      },
      {
        link: 'blog-masonry',
        title: 'Blog masonry',
      },
      {
        link: 'blog-details',
        title: 'Blog details',
      },
      {
        link: 'blog-details-full-grid',
        title: 'blog details full grid',
      },
    ]
  }
}

export default menu_data;