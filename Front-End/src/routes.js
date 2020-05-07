import React from 'react';
// Importing User Component----------------------------------------------------------------

// Importing Admin Component----------------------------------------------------------------
const ProductCreate = React.lazy(() => import('./admin/views/products/product-create/product-create'));
const ProductList = React.lazy(() => import('./admin/views/products/product-list/product-list'));
const Breadcrumbs = React.lazy(() => import('./admin/views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./admin/views/Base/Cards'));
const Carousels = React.lazy(() => import('./admin/views/Base/Carousels'));
const Collapses = React.lazy(() => import('./admin/views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./admin/views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./admin/views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./admin/views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./admin/views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./admin/views/Base/Navbars'));
const Navs = React.lazy(() => import('./admin/views/Base/Navs'));
const Paginations = React.lazy(() => import('./admin/views/Base/Paginations'));
const Popovers = React.lazy(() => import('./admin/views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./admin/views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./admin/views/Base/Switches'));
const Tables = React.lazy(() => import('./admin/views/Base/Tables'));
const Tabs = React.lazy(() => import('./admin/views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./admin/views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./admin/views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./admin/views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./admin/views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./admin/views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./admin/views/Charts'));
const Dashboard = React.lazy(() => import('./admin/views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./admin/views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./admin/views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./admin/views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./admin/views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./admin/views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./admin/views/Notifications/Badges'));
const Modals = React.lazy(() => import('./admin/views/Notifications/Modals'));
const Colors = React.lazy(() => import('./admin/views/Theme/Colors'));
const Typography = React.lazy(() => import('./admin/views/Theme/Typography'));
const Widgets = React.lazy(() => import('./admin/views/Widgets/Widgets'));
const Users = React.lazy(() => import('./admin/views/Users/Users'));
const User = React.lazy(() => import('./admin/views/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  // Creating User Routes--------------
  // { path: '/', exact: true, name: 'Home'},
  // Creating Admin Routes--------------
  { path: '/admin', exact: true, name: 'Home' },
  { path: '/admin/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/admin/products', exact: true, name: 'Products', component: ProductCreate },
  { path: '/admin/products/create', name: 'Product Create', component: ProductCreate},
  { path: '/admin/products/list', name: 'Product List', component: ProductList},
  { path: '/admin/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/admin/theme/colors', name: 'Colors', component: Colors },
  { path: '/admin/theme/typography', name: 'Typography', component: Typography },
  { path: '/admin/base', exact: true, name: 'Base', component: Cards },
  { path: '/admin/base/cards', name: 'Cards', component: Cards },
  { path: '/admin/base/forms', name: 'Forms', component: Forms },
  { path: '/admin/base/switches', name: 'Switches', component: Switches },
  { path: '/admin/base/tables', name: 'Tables', component: Tables },
  { path: '/admin/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/admin/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/admin/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/admin/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/admin/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/admin/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/admin/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/admin/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/admin/base/navs', name: 'Navs', component: Navs },
  { path: '/admin/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/admin/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/admin/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/admin/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/admin/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/admin/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/admin/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/admin/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/admin/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/admin/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/admin/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/admin/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/admin/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/admin/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/admin/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/admin/notifications/badges', name: 'Badges', component: Badges },
  { path: '/admin/notifications/modals', name: 'Modals', component: Modals },
  { path: '/admin/widgets', name: 'Widgets', component: Widgets },
  { path: '/admin/charts', name: 'Charts', component: Charts },
  { path: '/admin/users', exact: true,  name: 'Users', component: Users },
  { path: '/admin/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
