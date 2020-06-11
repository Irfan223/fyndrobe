import React from 'react';
const ProductCreate = React.lazy(() => import('./views/products/product-create/product-create'));
const ProductList = React.lazy(() => import('./views/products/product-list/product-list'));
const OrderList = React.lazy(() => import('./views/Orders/Order-List/order-list'));
const OrderView = React.lazy(() => import('./views/Orders/Order-View/order-view'));
const InvoiceList = React.lazy(() => import('./views/Invoice/Invoice-List/invoice-list'));
const InvoiceView = React.lazy(() => import('./views/Invoice/Invoice-View/invoice-view'));
// const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs/Breadcrumbs'));
// const Cards = React.lazy(() => import('./views/Base/Cards/Cards'));
// const Carousels = React.lazy(() => import('./views/Base/Carousels/Carousels'));
// const Collapses = React.lazy(() => import('./views/Base/Collapses/Collapses'));
// const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns/Dropdowns'));
// const Forms = React.lazy(() => import('./views/Base/Forms/Forms'));
// const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons/Jumbotrons'));
// const ListGroups = React.lazy(() => import('./views/Base/ListGroups/ListGroups'));
// const Navbars = React.lazy(() => import('./views/Base/Navbars/Navbars'));
// const Navs = React.lazy(() => import('./views/Base/Navs/Navs'));
// const Paginations = React.lazy(() => import('./views/Base/Paginations/Pagnations'));
// const Popovers = React.lazy(() => import('./views/Base/Popovers/Popovers'));
// const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar/ProgressBar'));
// const Switches = React.lazy(() => import('./views/Base/Switches/Switches'));
// const Tables = React.lazy(() => import('./views/Base/Tables/Tables'));
// const Tabs = React.lazy(() => import('./views/Base/Tabs/Tabs'));
// const Tooltips = React.lazy(() => import('./views/Base/Tooltips/Tooltips'));
// const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons/BrandButtons'));
// const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns/ButtonDropdowns'));
// const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups/ButtonGroups'));
// const Buttons = React.lazy(() => import('./views/Buttons/Buttons/Buttons'));
// const Charts = React.lazy(() => import('./views/Charts/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
// const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons/CoreUIIcons'));
// const Flags = React.lazy(() => import('./views/Icons/Flags/Flags'));
// const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome/FontAwesome'));
// const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons/SimpleLineIcons'));
// const Alerts = React.lazy(() => import('./views/Notifications/Alerts/Alerts'));
// const Badges = React.lazy(() => import('./views/Notifications/Badges/Badges'));
// const Modals = React.lazy(() => import('./views/Notifications/Modals/Modals'));
// const Colors = React.lazy(() => import('./views/Theme/Colors/Colors'));
// const Typography = React.lazy(() => import('./views/Theme/Typography/Typography'));
// const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
// const Users = React.lazy(() => import('./views/Users/Users'));
// const User = React.lazy(() => import('./views/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/admin', exact: true, name: 'Home' },
  { path: '/admin/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/admin/products', exact: true, name: 'Products', component: ProductCreate },
  { path: '/admin/products/create', name: 'Product Create', component: ProductCreate},
  { path: '/admin/products/list', name: 'Product List', component: ProductList},
  { path: '/admin/orders', exact: true, name: 'Orders', component: OrderList },
  { path: '/admin/orders/list', name: 'Order List', component: OrderList},
  { path: '/admin/orders/view', name: 'Order View', component: OrderView},
  { path: '/admin/invoices', exact: true, name: 'Invoice', component: InvoiceList },
  { path: '/admin/invoices/list', name: 'Invoice List', component: InvoiceList},
  { path: '/admin/invoices/view', name: 'Invoice View', component: InvoiceView},
  // { path: '/admin/theme', exact: true, name: 'Theme', component: Colors },
  // { path: '/admin/theme/colors', name: 'Colors', component: Colors },
  // { path: '/admin/theme/typography', name: 'Typography', component: Typography },
  // { path: '/admin/base', exact: true, name: 'Base', component: Cards },
  // { path: '/admin/base/cards', name: 'Cards', component: Cards },
  // { path: '/admin/base/forms', name: 'Forms', component: Forms },
  // { path: '/admin/base/switches', name: 'Switches', component: Switches },
  // { path: '/admin/base/tables', name: 'Tables', component: Tables },
  // { path: '/admin/base/tabs', name: 'Tabs', component: Tabs },
  // { path: '/admin/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  // { path: '/admin/base/carousels', name: 'Carousel', component: Carousels },
  // { path: '/admin/base/collapses', name: 'Collapse', component: Collapses },
  // { path: '/admin/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  // { path: '/admin/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  // { path: '/admin/base/list-groups', name: 'List Groups', component: ListGroups },
  // { path: '/admin/base/navbars', name: 'Navbars', component: Navbars },
  // { path: '/admin/base/navs', name: 'Navs', component: Navs },
  // { path: '/admin/base/paginations', name: 'Paginations', component: Paginations },
  // { path: '/admin/base/popovers', name: 'Popovers', component: Popovers },
  // { path: '/admin/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  // { path: '/admin/base/tooltips', name: 'Tooltips', component: Tooltips },
  // { path: '/admin/buttons', exact: true, name: 'Buttons', component: Buttons },
  // { path: '/admin/buttons/buttons', name: 'Buttons', component: Buttons },
  // { path: '/admin/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  // { path: '/admin/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  // { path: '/admin/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  // { path: '/admin/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  // { path: '/admin/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  // { path: '/admin/icons/flags', name: 'Flags', component: Flags },
  // { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  // { path: '/admin/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  // { path: '/admin/notifications', exact: true, name: 'Notifications', component: Alerts },
  // { path: '/admin/notifications/alerts', name: 'Alerts', component: Alerts },
  // { path: '/admin/notifications/badges', name: 'Badges', component: Badges },
  // { path: '/admin/notifications/modals', name: 'Modals', component: Modals },
  // { path: '/admin/widgets', name: 'Widgets', component: Widgets },
  // { path: '/admin/charts', name: 'Charts', component: Charts },
  // { path: '/admin/users', exact: true,  name: 'Users', component: Users },
  // { path: '/admin/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
