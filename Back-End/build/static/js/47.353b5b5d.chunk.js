(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{941:function(a,e,t){"use strict";t.r(e);var n=t(233),r=t(234),o=t(236),c=t(235),l=t(237),s=t(2),i=t.n(s),d=t(959),m=t.n(d),p=t(238),u=t(916),v=t(939),h=t(81),g=t(960),w=t.n(g),N=i.a.lazy(function(){return Promise.all([t.e(1),t.e(4),t.e(39),t.e(51)]).then(t.bind(null,1107))}),f=new v.a,b=function(a){function e(){var a,t;Object(n.a)(this,e);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(t=Object(o.a)(this,(a=Object(c.a)(e)).call.apply(a,[this].concat(l)))).state={collapsed:"true",prevUrl:localStorage.getItem("curUrl"),isLoggedIn:localStorage.getItem("isLoggedIn"),cart:[],totalProducts:0,userId:f.get("userId"),cartUpdate:!1},t.toggleNavbar=function(){t.setState({collapsed:!t.state.collapsed})},t.logout=function(a){localStorage.setItem("isLoggedIn",null),f.remove("userId",{path:"/"}),f.remove("firstName",{path:"/"}),f.remove("lastName",{path:"/"}),f.remove("email",{path:"/"}),f.remove("mobile",{path:"/"}),f.remove("token",{path:"/"}),f.remove("address",{path:"/"}),t.setState({isLoggedIn:localStorage.getItem("isLoggedIn")},function(){window.location.reload(!1)})},t}return Object(l.a)(e,a),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.getCart()}},{key:"getCart",value:function(){var a=this;u.a.get("cart/"+this.state.userId).then(function(e){console.log(e),a.setState({cart:e.data.products,totalProducts:e.data.products.length})}).catch(function(a){console.log(a)})}},{key:"componentDidUpdate",value:function(a,e){a.cartItems!==this.props.cartItems&&this.setState({totalProducts:this.props.cartItems})}},{key:"render",value:function(){var a=this;console.log("LoggedIN User iD "+f.get("userId"));var e=this.state.isLoggedIn,t=(f.get("userId"),this.state.collapsed),n=t?"collapse navbar-collapse":"collapse navbar-collapse show",r=window.innerWidth;console.log("window width "+r);var o="";return o="true"==e?i.a.createElement("div",{className:"dropdown-menu  ".concat(m.a.DropdownMenu),style:{columnCount:"1",top:"65px",right:"0px"},"aria-labelledby":"navbarDropdown"},i.a.createElement("a",{href:"#",className:"dropdown-item  ".concat(m.a.DropdownItem)},"Orders"),i.a.createElement("a",{href:"#",className:"dropdown-item ".concat(m.a.DropdownItem)},"Profile"),i.a.createElement(p.Link,{to:this.state.prevUrl,className:"dropdown-item   ".concat(m.a.DropdownItem),onClick:this.logout},"Logout")):i.a.createElement("div",{className:"dropdown-menu ".concat(m.a.DropdownMenu),"aria-labelledby":"navbarDropdown",style:{columnCount:"1",top:"65px",right:"0px"}},i.a.createElement(p.Link,{to:"/login",className:"dropdown-item ".concat(m.a.DropdownItem),href:"#"},"LogIn")),i.a.createElement("div",null,i.a.createElement("nav",{className:"navbar shadow-sm   navbar-expand-lg navbar-light bg-light fixed-top ".concat(m.a.Navbar)},i.a.createElement("a",{className:"navbar-brand ".concat(m.a.NavbarBrand),href:"/"},i.a.createElement("img",{src:w.a,width:"170px"})),i.a.createElement("div",{className:"d-block d-sm-none"},i.a.createElement(N,null)),i.a.createElement("div",{className:"".concat(n," ").concat(m.a.Collapse," collapse navbar-collapse"),id:"navbarSupportedContent",style:{transform:t&&360==r?"translate3d(-100%,0,0)":"translate3d(0,0,0)"}},i.a.createElement("button",{className:"".concat(m.a.tooglerBarButton," navbar-toggler"),onClick:this.toggleNavbar,type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"fa fa-times fa-x2 ".concat(m.a.FaTimes)})),i.a.createElement("br",null)," ",i.a.createElement("hr",null),i.a.createElement("ul",{className:"navbar-nav ".concat(m.a.category)},i.a.createElement("li",{className:"nav-item dropdown ".concat(m.a.NavItem," ").concat(m.a.Dropdown)},i.a.createElement(p.NavLink,{className:"nav-link ".concat(m.a.NavLink),activeClassName:m.a.IsActive,to:"/",id:"navbarDropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},"Mens",i.a.createElement("span",{className:"fa fa-angle-down ml-2"}))),i.a.createElement("li",{className:"nav-item dropdown ".concat(m.a.NavItem," ").concat(m.a.Dropdown)},i.a.createElement(p.NavLink,{className:"nav-link ".concat(m.a.NavLink),activeClassName:m.a.IsActive,to:"/",role:"button","aria-haspopup":"true","aria-expanded":"false"},"Womens",i.a.createElement("span",{className:"fa fa-angle-down ml-2"})),i.a.createElement("div",{className:"dropdown-menu ".concat(m.a.DropdownMenu),"aria-labelledby":"navbarDropdown"},i.a.createElement(p.Link,{to:"/products/women/Kurta",className:"dropdown-item ".concat(m.a.DropdownItem)},"Kurtas"),i.a.createElement(p.Link,{to:"/products/women/Kurta-with-leggins",className:"dropdown-item ".concat(m.a.DropdownItem)},"Kurtas with dupattas"),i.a.createElement(p.Link,{to:"/products/women/Kurta-with-dupatta",className:"dropdown-item ".concat(m.a.DropdownItem)},"Kurtas with leggins"),i.a.createElement(p.Link,{to:"/products/women/Dupattas-and-Shawls",className:"dropdown-item ".concat(m.a.DropdownItem)},"Dupattas and Shawls"))),i.a.createElement("li",{className:"nav-item dropdown ".concat(m.a.NavItem," ").concat(m.a.Dropdown)},i.a.createElement(p.NavLink,{className:"nav-link ".concat(m.a.NavLink),activeClassName:m.a.IsActive,to:"/",role:"button","aria-haspopup":"true","aria-expanded":"false"},"Kids",i.a.createElement("span",{className:"fa fa-angle-down ml-2"}))),i.a.createElement("li",{className:"nav-item dropdown ".concat(m.a.NavItem," ").concat(m.a.Dropdown)},i.a.createElement(p.NavLink,{className:"nav-link ".concat(m.a.NavLink),activeClassName:m.a.IsActive,to:"/",role:"button","aria-haspopup":"true","aria-expanded":"false"},"Accesories ",i.a.createElement("sup",{style:{color:"orange"}},"Essential"))))),i.a.createElement("div",{className:"d-flex align-items-center  ".concat(m.a.SignInCart)},i.a.createElement("div",{className:"d-flex flex-row-reverse align-items-center ".concat(m.a.SearchBar)},i.a.createElement("span",null,i.a.createElement("i",{onClick:function(){return a.setState({SearchBar:!a.state.SearchBar})},className:"fa fa-search float-right px-2"})),i.a.createElement("input",{className:"form-control  shadow-none",type:"search",placeholder:"Search","aria-label":"Search"})),i.a.createElement("div",{className:m.a.MobileSearch,style:this.state.SearchBar?{display:"translateY(0%)"}:{transform:"translateY(-150%)"}},i.a.createElement("span",{onClick:function(){return a.setState({SearchBar:!1})}},i.a.createElement("i",{className:"fa fa-arrow-left"})," "),i.a.createElement("input",{className:"form-control  shadow-none",type:"search",placeholder:"Search","aria-label":"Search",style:{width:window.innerWidth-80}}),i.a.createElement("span",null,i.a.createElement("i",{className:"fa fa-search"}))),i.a.createElement("div",{className:"d-none d-sm-block"},i.a.createElement("ul",{className:"navbar-nav mr-auto "},i.a.createElement("li",{className:"nav-item dropdown dropleft ".concat(m.a.NavItem," ").concat(m.a.Dropdown)},i.a.createElement("a",{className:"nav-link ".concat(m.a.NavLink),to:"/login",id:"navbarDropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},i.a.createElement("span",{className:"fa fa-user"})),o))),i.a.createElement("div",{className:""},i.a.createElement("li",{className:"nav-item ".concat(m.a.NavItem)},i.a.createElement(p.Link,{to:"/cart",className:"nav-link ".concat(m.a.NavLink)},i.a.createElement("span",{className:"fa fa-shopping-cart"}))),i.a.createElement("div",{className:m.a.cartItem},i.a.createElement("span",{className:m.a.circle},this.state.totalProducts))))))}}]),e}(s.Component);e.default=Object(h.o)(b)},959:function(a,e,t){a.exports={Navbar:"header_Navbar__JnYvq",category:"header_category__y0MAv",NavItem:"header_NavItem__2potV",NavLink:"header_NavLink__RLiQf",IsActive:"header_IsActive__3Fg7m",NavbarBrand:"header_NavbarBrand__1rgDF",Dropdown:"header_Dropdown__1VRTM",DropdownMenu:"header_DropdownMenu__uDak8",DropdownItem:"header_DropdownItem__2G_XJ",DropdownToggle:"header_DropdownToggle__IBTtY",SignInCart:"header_SignInCart__2Whu1",SearchBar:"header_SearchBar__2Zfeq",cartItem:"header_cartItem__3crYd",circle:"header_circle__GrwW3",MobileSearch:"header_MobileSearch__1vwKq",tooglerBarButton:"header_tooglerBarButton__2UVxk",FaTimes:"header_FaTimes__3yn5O",Collapse:"header_Collapse__2iIWC"}},960:function(a,e,t){a.exports=t.p+"static/media/FyndrobeLogo.6197d66a.png"}}]);
//# sourceMappingURL=47.353b5b5d.chunk.js.map