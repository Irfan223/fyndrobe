(window.webpackJsonp=window.webpackJsonp||[]).push([[6,8,49],{908:function(e,a,t){"use strict";var n=t(923),o=t.n(n).a.create({baseURL:"http://www.scrolltechinfo.com/api",withCredentials:!0});a.a=o},912:function(e,a,t){"use strict";a.parse=function(e,a){if("string"!==typeof e)throw new TypeError("argument str must be a string");for(var t={},o=a||{},s=e.split(r),c=o.decode||n,l=0;l<s.length;l++){var d=s[l],m=d.indexOf("=");if(!(m<0)){var p=d.substr(0,m).trim(),u=d.substr(++m,d.length).trim();'"'==u[0]&&(u=u.slice(1,-1)),void 0==t[p]&&(t[p]=i(u,c))}}return t},a.serialize=function(e,a,t){var n=t||{},r=n.encode||o;if("function"!==typeof r)throw new TypeError("option encode is invalid");if(!s.test(e))throw new TypeError("argument name is invalid");var i=r(a);if(i&&!s.test(i))throw new TypeError("argument val is invalid");var c=e+"="+i;if(null!=n.maxAge){var l=n.maxAge-0;if(isNaN(l)||!isFinite(l))throw new TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(l)}if(n.domain){if(!s.test(n.domain))throw new TypeError("option domain is invalid");c+="; Domain="+n.domain}if(n.path){if(!s.test(n.path))throw new TypeError("option path is invalid");c+="; Path="+n.path}if(n.expires){if("function"!==typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");c+="; Expires="+n.expires.toUTCString()}n.httpOnly&&(c+="; HttpOnly");n.secure&&(c+="; Secure");if(n.sameSite){var d="string"===typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite;switch(d){case!0:c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"strict":c+="; SameSite=Strict";break;case"none":c+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return c};var n=decodeURIComponent,o=encodeURIComponent,r=/; */,s=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function i(e,a){try{return a(e)}catch(t){return e}}},915:function(e,a,t){"use strict";t.r(a);var n=t(233),o=t(234),r=t(236),s=t(235),i=t(237),c=t(2),l=t.n(c),d=t(921),m=t.n(d),p=t(238),u=t(908),h=t(916),v=t(81),f=l.a.lazy(function(){return Promise.all([t.e(13),t.e(23),t.e(47)]).then(t.bind(null,972))}),g=new h.a,w=function(e){function a(){var e,t;Object(n.a)(this,a);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(t=Object(r.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(i)))).state={collapsed:"true",prevUrl:localStorage.getItem("curUrl"),isLoggedIn:localStorage.getItem("isLoggedIn"),cart:[],totalProducts:0,userId:g.get("userId"),cartUpdate:!1},t.toggleNavbar=function(){t.setState({collapsed:!t.state.collapsed})},t.logout=function(e){localStorage.setItem("isLoggedIn",null),g.remove("userId",{path:"/"}),g.remove("firstName",{path:"/"}),g.remove("lastName",{path:"/"}),g.remove("email",{path:"/"}),g.remove("mobile",{path:"/"}),g.remove("token",{path:"/"}),g.remove("address",{path:"/"}),t.setState({isLoggedIn:localStorage.getItem("isLoggedIn")},function(){window.location.reload(!1)})},t}return Object(i.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getCart()}},{key:"getCart",value:function(){var e=this;u.a.get("cart/"+this.state.userId).then(function(a){console.log(a),e.setState({cart:a.data.products,totalProducts:a.data.products.length})}).catch(function(e){console.log(e)})}},{key:"componentDidUpdate",value:function(e,a){e.cartItems!==this.props.cartItems&&this.setState({totalProducts:this.props.cartItems})}},{key:"render",value:function(){console.log("LoggedIN User iD "+g.get("userId"));var e=this.state.isLoggedIn,a=(g.get("userId"),this.state.collapsed),t=a?"collapse navbar-collapse":"collapse navbar-collapse show",n=window.innerWidth;console.log("window width "+n);var o="";return o="true"==e?l.a.createElement("div",{className:"dropdown-menu  ".concat(m.a.DropdownMenu),style:{columnCount:"1",top:"65px",right:"0px"},"aria-labelledby":"navbarDropdown"},l.a.createElement("a",{href:"#",className:"dropdown-item  ".concat(m.a.DropdownItem)},"Orders"),l.a.createElement("a",{href:"#",className:"dropdown-item ".concat(m.a.DropdownItem)},"Profile"),l.a.createElement(p.Link,{to:this.state.prevUrl,className:"dropdown-item   ".concat(m.a.DropdownItem),onClick:this.logout},"Logout")):l.a.createElement("div",{className:"dropdown-menu ".concat(m.a.DropdownMenu),"aria-labelledby":"navbarDropdown",style:{columnCount:"1",top:"65px",right:"0px"}},l.a.createElement(p.Link,{to:"/login",className:"dropdown-item ".concat(m.a.DropdownItem),href:"#"},"LogIn")),l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar shadow-sm   navbar-expand-lg navbar-light bg-light fixed-top ".concat(m.a.Navbar)},l.a.createElement("a",{className:"navbar-brand ".concat(m.a.NavbarBrand),href:"/"},"Fashion Focus"),l.a.createElement("div",{className:"d-block d-sm-none"},l.a.createElement(f,null)),l.a.createElement("div",{className:"".concat(t," ").concat(m.a.Collapse," collapse navbar-collapse"),id:"navbarSupportedContent",style:{transform:a&&360==n?"translate3d(-100%,0,0)":"translate3d(0,0,0)"}},l.a.createElement("button",{className:"".concat(m.a.tooglerBarButton," navbar-toggler"),onClick:this.toggleNavbar,type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"fa fa-times fa-x2 ".concat(m.a.FaTimes)})),l.a.createElement("br",null)," ",l.a.createElement("hr",null),l.a.createElement("ul",{className:"navbar-nav ".concat(m.a.category)},l.a.createElement("li",{className:"nav-item dropdown ".concat(m.a.NavItem," ").concat(m.a.Dropdown)},l.a.createElement(p.NavLink,{className:"nav-link ".concat(m.a.NavLink),activeClassName:m.a.IsActive,to:"/",id:"navbarDropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},"Mens",l.a.createElement("span",{className:"fa fa-angle-down ml-2"}))),l.a.createElement("li",{className:"nav-item dropdown ".concat(m.a.NavItem," ").concat(m.a.Dropdown)},l.a.createElement(p.NavLink,{className:"nav-link ".concat(m.a.NavLink),activeClassName:m.a.IsActive,to:"/",role:"button","aria-haspopup":"true","aria-expanded":"false"},"Womens",l.a.createElement("span",{className:"fa fa-angle-down ml-2"})),l.a.createElement("div",{className:"dropdown-menu ".concat(m.a.DropdownMenu),"aria-labelledby":"navbarDropdown"},l.a.createElement(p.Link,{to:"/products/women/Kurta",className:"dropdown-item ".concat(m.a.DropdownItem)},"Dupattas and Shawls"),l.a.createElement(p.Link,{to:"/products/women/Kurta-with-leggins",className:"dropdown-item ".concat(m.a.DropdownItem)},"Kurtas with dupattas"),l.a.createElement(p.Link,{to:"/products/women/Kurta-with-dupatta",className:"dropdown-item ".concat(m.a.DropdownItem)},"Kurtas with leggins"),l.a.createElement(p.Link,{to:"/products/women/Dupattas-and-Shawls",className:"dropdown-item ".concat(m.a.DropdownItem)},"Kurtas"))),l.a.createElement("li",{className:"nav-item dropdown ".concat(m.a.NavItem," ").concat(m.a.Dropdown)},l.a.createElement(p.NavLink,{className:"nav-link ".concat(m.a.NavLink),activeClassName:m.a.IsActive,to:"/",role:"button","aria-haspopup":"true","aria-expanded":"false"},"Kids",l.a.createElement("span",{className:"fa fa-angle-down ml-2"}))),l.a.createElement("li",{className:"nav-item dropdown ".concat(m.a.NavItem," ").concat(m.a.Dropdown)},l.a.createElement(p.NavLink,{className:"nav-link ".concat(m.a.NavLink),activeClassName:m.a.IsActive,to:"/",role:"button","aria-haspopup":"true","aria-expanded":"false"},"Accesories ",l.a.createElement("sup",{style:{color:"orange"}},"Essential"))))),l.a.createElement("form",{className:"form-inline my-2 my-lg-0 ".concat(m.a.SignInCart)},l.a.createElement("div",{className:"".concat(m.a.SearchBar)},l.a.createElement("span",null,l.a.createElement("i",{onClick:function(){return alert("Hello")},className:"fa fa-search"})),l.a.createElement("input",{className:"form-control ",type:"search",placeholder:"Search","aria-label":"Search"})),l.a.createElement("div",{className:"d-none d-sm-block"},l.a.createElement("ul",{className:"navbar-nav mr-auto "},l.a.createElement("li",{className:"nav-item dropdown dropleft ".concat(m.a.NavItem," ").concat(m.a.Dropdown)},l.a.createElement("a",{className:"nav-link ".concat(m.a.NavLink),to:"/login",id:"navbarDropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},l.a.createElement("span",{className:"fa fa-user"})),o))),l.a.createElement("div",null,l.a.createElement("li",{className:"nav-item ".concat(m.a.NavItem)},l.a.createElement(p.Link,{to:"/cart",className:"nav-link ".concat(m.a.NavLink)},l.a.createElement("span",{className:"fa fa-shopping-cart"}))),l.a.createElement("div",{className:m.a.cartItem},l.a.createElement("span",{className:m.a.circle},this.state.totalProducts))))))}}]),a}(c.Component);a.default=Object(v.o)(w)},916:function(e,a,t){"use strict";var n=t(912);function o(e,a){void 0===a&&(a={});var t=function(e){if(e&&"j"===e[0]&&":"===e[1])return e.substr(2);return e}(e);if(function(e,a){return"undefined"===typeof a&&(a=!e||"{"!==e[0]&&"["!==e[0]&&'"'!==e[0]),!a}(t,a.doNotParse))try{return JSON.parse(t)}catch(n){}return e}var r=t(180),s=function(){function e(e,a){var t=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=function(e,a){return"string"===typeof e?n.parse(e,a):"object"===typeof e&&null!==e?e:{}}(e,a),new Promise(function(){t.HAS_DOCUMENT_COOKIE="object"===typeof document&&"string"===typeof document.cookie}).catch(function(){})}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=n.parse(document.cookie,e))},e.prototype._emitChange=function(e){for(var a=0;a<this.changeListeners.length;++a)this.changeListeners[a](e)},e.prototype.get=function(e,a,t){return void 0===a&&(a={}),this._updateBrowserValues(t),o(this.cookies[e],a)},e.prototype.getAll=function(e,a){void 0===e&&(e={}),this._updateBrowserValues(a);var t={};for(var n in this.cookies)t[n]=o(this.cookies[n],e);return t},e.prototype.set=function(e,a,t){var o;"object"===typeof a&&(a=JSON.stringify(a)),this.cookies=r({},this.cookies,((o={})[e]=a,o)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=n.serialize(e,a,t)),this._emitChange({name:e,value:a,options:t})},e.prototype.remove=function(e,a){var t=a=r({},a,{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=r({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=n.serialize(e,"",t)),this._emitChange({name:e,value:void 0,options:a})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var a=this.changeListeners.indexOf(e);a>=0&&this.changeListeners.splice(a,1)},e}();a.a=s},921:function(e,a,t){e.exports={Navbar:"header_Navbar__JnYvq",category:"header_category__y0MAv",NavItem:"header_NavItem__2potV",NavLink:"header_NavLink__RLiQf",IsActive:"header_IsActive__3Fg7m",NavbarBrand:"header_NavbarBrand__1rgDF",Dropdown:"header_Dropdown__1VRTM",DropdownMenu:"header_DropdownMenu__uDak8",DropdownItem:"header_DropdownItem__2G_XJ",DropdownToggle:"header_DropdownToggle__IBTtY",SignInCart:"header_SignInCart__2Whu1",SearchBar:"header_SearchBar__2Zfeq",tooglerBarButton:"header_tooglerBarButton__2UVxk",FaTimes:"header_FaTimes__3yn5O",Collapse:"header_Collapse__2iIWC",cartItem:"header_cartItem__3crYd",circle:"header_circle__GrwW3"}}}]);
//# sourceMappingURL=6.d381e0b0.chunk.js.map