export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    // Product 
    {
      divider: true
    },
    {
      title: true,
      name: 'Management'
    },
    {
      name: 'Products',
      url: '/admin/products',
      icon: 'fa fa-shopping-cart',
      children: [
        {
          name: 'List Products',
          url: '/admin/products/list',
          icon: 'fa fa-list'
        },
        {
          name: 'Create Products',
          url: '/admin/products/create',
          icon: 'fa fa-cart-plus'
        },
      ]
    },
    {
      name: 'Orders',
      url: '/admin/orders',
      icon: 'fa fa-file-text-o',
      children: [
        {
          name: 'List Order',
          url: '/admin/orders/list',
          icon: 'fa fa-list'
        },
        {
          name: 'View Order',
          url: '/admin/orders/view',
          icon: 'fa fa-file-text-o'
        },
      ]
    },
    {
      name: 'Invoices',
      url: '/admin/invoices',
      icon: 'fa fa-sticky-note-o',
      children: [
        {
          name: 'List Invoice',
          url: '/admin/invoices/list',
          icon: 'fa fa-list'
        },
        {
          name: 'View Invoice',
          url: '/admin/invoices/view',
          icon: 'fa fa-sticky-note-o'
        },
      ]
    },
    {
      divider: true
    },
    // ----- End Management--
    // {
    //   title: true,
    //   name: 'Theme',
    //   wrapper: {            // optional wrapper object
    //     element: '',        // required valid HTML5 element tag
    //     attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
    //   },
    //   class: ''             // optional class names space delimited list for title item ex: "text-center"
    // },
    // {
    //   name: 'Colors',
    //   url: '/admin/theme/colors',
    //   icon: 'icon-drop',
    // },
    // {
    //   name: 'Typography',
    //   url: '/admin/theme/typography',
    //   icon: 'icon-pencil',
    // },
    // {
    //   title: true,
    //   name: 'Components',
    //   wrapper: {
    //     element: '',
    //     attributes: {},
    //   },
    // },
    // {
    //   name: 'Base',
    //   url: '/admin/base',
    //   icon: 'icon-puzzle',
    //   children: [
    //     {
    //       name: 'Breadcrumbs',
    //       url: '/admin/base/breadcrumbs',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Cards',
    //       url: '/admin/base/cards',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Carousels',
    //       url: '/admin/base/carousels',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Collapses',
    //       url: '/admin/base/collapses',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Dropdowns',
    //       url: '/admin/base/dropdowns',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Forms',
    //       url: '/admin/base/forms',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Jumbotrons',
    //       url: '/admin/base/jumbotrons',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'List groups',
    //       url: '/admin/base/list-groups',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Navs',
    //       url: '/admin/base/navs',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Paginations',
    //       url: '/admin/base/paginations',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Popovers',
    //       url: '/admin/base/popovers',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Progress Bar',
    //       url: '/admin/base/progress-bar',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Switches',
    //       url: '/admin/base/switches',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Tables',
    //       url: '/admin/base/tables',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Tabs',
    //       url: '/admin/base/tabs',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'Tooltips',
    //       url: '/admin/base/tooltips',
    //       icon: 'icon-puzzle',
    //     },
    //   ],
    // },
    // {
    //   name: 'Buttons',
    //   url: '/admin/buttons',
    //   icon: 'icon-cursor',
    //   children: [
    //     {
    //       name: 'Buttons',
    //       url: '/admin/buttons/buttons',
    //       icon: 'icon-cursor',
    //     },
    //     {
    //       name: 'Button dropdowns',
    //       url: '/admin/buttons/button-dropdowns',
    //       icon: 'icon-cursor',
    //     },
    //     {
    //       name: 'Button groups',
    //       url: '/admin/buttons/button-groups',
    //       icon: 'icon-cursor',
    //     },
    //     {
    //       name: 'Brand Buttons',
    //       url: '/admin/buttons/brand-buttons',
    //       icon: 'icon-cursor',
    //     },
    //   ],
    // },
    // {
    //   name: 'Charts',
    //   url: '/admin/charts',
    //   icon: 'icon-pie-chart',
    // },
    // {
    //   name: 'Icons',
    //   url: '/admin/icons',
    //   icon: 'icon-star',
    //   children: [
    //     {
    //       name: 'CoreUI Icons',
    //       url: '/admin/icons/coreui-icons',
    //       icon: 'icon-star',
    //       badge: {
    //         variant: 'info',
    //         text: 'NEW',
    //       },
    //     },
    //     {
    //       name: 'Flags',
    //       url: '/admin/icons/flags',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Font Awesome',
    //       url: '/admin/icons/font-awesome',
    //       icon: 'icon-star',
    //       badge: {
    //         variant: 'secondary',
    //         text: '4.7',
    //       },
    //     },
    //     {
    //       name: 'Simple Line Icons',
    //       url: '/admin/icons/simple-line-icons',
    //       icon: 'icon-star',
    //     },
    //   ],
    // },
    // {
    //   name: 'Notifications',
    //   url: '/admin/notifications',
    //   icon: 'icon-bell',
    //   children: [
    //     {
    //       name: 'Alerts',
    //       url: '/admin/notifications/alerts',
    //       icon: 'icon-bell',
    //     },
    //     {
    //       name: 'Badges',
    //       url: '/admin/notifications/badges',
    //       icon: 'icon-bell',
    //     },
    //     {
    //       name: 'Modals',
    //       url: '/admin/notifications/modals',
    //       icon: 'icon-bell',
    //     },
    //   ],
    // },
    // {
    //   name: 'Widgets',
    //   url: '/admin/widgets',
    //   icon: 'icon-calculator',
    //   badge: {
    //     variant: 'info',
    //     text: 'NEW',
    //   },
    // },
  ],
};
