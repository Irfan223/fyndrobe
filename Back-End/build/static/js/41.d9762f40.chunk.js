(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1319:function(e,t,a){e.exports={body:"product_body__1Defx",filter:"product_filter__1GyPF",mobile:"product_mobile__32-qb",product:"product_product__HV5Mo",link:"product_link__IWexJ"}},1485:function(e,t,a){"use strict";a.r(t);var l=a(233),n=a(234),r=a(236),o=a(235),i=a(237),c=a(2),s=a.n(c),u=a(1486),d=a(1319),p=a.n(d),m=a(908),v=a(238),h=a(1526),b=s.a.lazy(function(){return a.e(8).then(a.bind(null,915))}),f=s.a.lazy(function(){return Promise.all([a.e(1),a.e(3)]).then(a.bind(null,918))}),g=(s.a.lazy(function(){return a.e(69).then(a.bind(null,1412))}),s.a.lazy(function(){return Promise.all([a.e(43),a.e(72)]).then(a.bind(null,1413))}),s.a.lazy(function(){return a.e(14).then(a.bind(null,1249))})),E=s.a.lazy(function(){return a.e(15).then(a.bind(null,1250))}),y=[{value:"1",label:"Shirt"},{value:"2",label:"Jeans"},{value:"3",label:"T-Shits"},{value:"4",label:"Joggers"},{value:"5",label:"Jacket"}],w=[{value:"1",label:"S"},{value:"2",label:"M"},{value:"3",label:"L"},{value:"4",label:"XL"},{value:"5",label:"XXL"},{value:"6",label:"XXXL"}],S=[{value:"10 to 20",label:"10% and above"},{value:"20 to 30",label:"20% and above"},{value:"30 to 40",label:"30% and above"},{value:"40 to 50",label:"40% and above"},{value:"50 to 60",label:"50% and above"},{value:"60 to 70",label:"60% and above"},{value:"70 to 80",label:"70% and above"},{value:"80 to 100",label:"80% and above"}],k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={isUpdate:!1,mensSelected:[],size:[],selectedOption:"",data:[],filterData:[],preFilterData:[]},a.onRadio=function(e){var t="discount="+e.target.value;a.props.history.push(a.props.location.pathname+"?"+t),a.setState({selectedOption:e.target.value})},a.onCheck=function(e){var t=a.state.mensSelected,l=(a.state.filterData,a.state.preFilterData);a.state.data;if(e.target.checked)t.push(+e.target.value);else{var n=t.indexOf(+e.target.value);t.splice(n,1)}a.setState({mensSelected:t});var r=!0,o=!1,i=void 0;try{for(var c,s=a.state.data[Symbol.iterator]();!(r=(c=s.next()).done);r=!0){var u=c.value,d=!0,p=!1,m=void 0;try{for(var v,h=t[Symbol.iterator]();!(d=(v=h.next()).done);d=!0){switch(v.value){case 1:1===u.id&&a.state.preFilterData.push(u);break;case 2:2===u.id&&a.state.preFilterData.push(u);break;case 3:3===u.id&&a.state.preFilterData.push(u);break;case 4:4===u.id&&a.state.preFilterData.push(u);break;case 5:5===u.id&&a.state.preFilterData.push(u)}}}catch(b){p=!0,m=b}finally{try{d||null==h.return||h.return()}finally{if(p)throw m}}}}catch(b){o=!0,i=b}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}a.setState({filterData:l,preFilterData:[]}),0===a.state.mensSelected.length&&a.setState({filterData:a.state.data})},a.onSize=function(e){var t=a.state.size;if(e.target.checked)t.push(+e.target.value);else{var l=t.indexOf(+e.target.value);t.splice(l,1)}t.sort(function(e,t){return e-t});var n="size="+t;a.props.history.push(n),a.setState({size:t})},a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){this.getAllData()}},{key:"getAllData",value:function(){var e=this,t=this.props.match.params.gender;console.log(this.props.match.params.gender);var a={gender:t,productTitle:this.props.match.params.productType};m.a.post("product",a).then(function(t){console.log(t.data),e.setState({data:t.data,filterData:t.data})}).catch(function(e){console.log(e)})}},{key:"componentDidUpdate",value:function(e,t){e.location.pathname!==this.props.location.pathname&&this.getAllData()}},{key:"render",value:function(){var e=this;return localStorage.setItem("curUrl",this.props.match.url),console.log(this.props),s.a.createElement(c.Fragment,null,s.a.createElement(b,null),s.a.createElement("div",{className:"body",id:p.a.body},s.a.createElement("div",{className:"container-fluid",id:p.a.containerFluid},s.a.createElement("div",{className:"row p-3"},s.a.createElement("div",{className:"col-sm-2 mt-3 text-uppercase font-weight-bold",id:p.a.filter},"FILTERS"),s.a.createElement("div",{className:"col-sm-10"})),s.a.createElement(u.a,null),s.a.createElement("div",{className:"row no-gutters"},s.a.createElement("div",{className:"col-sm-2 p-0 m-0 border-right",id:p.a.filter},s.a.createElement("p",{className:"pt-2 text-uppercase font-weight-bold ",style:{fontSize:"14px"}},"CATEGORIES"),y.map(function(t){return s.a.createElement(g,{key:t.id,label:t.label,value:t.value,onchange:e.onCheck})}),s.a.createElement(u.a,null),s.a.createElement("p",{className:"pt-2 text-uppercase font-weight-bold ",style:{fontSize:"14px"}},"size"),w.map(function(t){return s.a.createElement(g,{key:t.id,label:t.label,value:t.value,onchange:e.onSize})}),s.a.createElement("p",{className:"pt-2 text-uppercase font-weight-bold ",style:{fontSize:"14px"}},"discount range"),S.map(function(t){return s.a.createElement(E,{onchange:e.onRadio,value:t.value,label:t.label})}),s.a.createElement("p",null,"Radio: ",this.state.selectedOption)),s.a.createElement("div",{className:"col-12 col-sm-10 p-0 m-0",id:p.a.mobileView},s.a.createElement("div",{className:p.a.mobile},s.a.createElement("div",{className:"row no-gutters"},this.state.filterData.map(function(e){return s.a.createElement("div",{className:"col-6 col-sm-3",id:p.a.product},s.a.createElement(v.Link,{to:"/product-details/".concat(e.productTitle,"/").concat(e._id),id:p.a.link},s.a.createElement("img",{src:e.color.image[0],width:"100%"}),s.a.createElement("div",{className:"productDetails p-2"},s.a.createElement("div",null,s.a.createElement("strong",null,e.brandName)),s.a.createElement("div",null,e.productTitle),"size: ",e.size.map(function(e){return s.a.createElement("span",null,e.value,"\xa0")}),s.a.createElement("div",null,s.a.createElement("span",null,s.a.createElement("strong",null,"Rs ",e.sellingPrice)),"\xa0",s.a.createElement("span",{className:"font-weight-light"},s.a.createElement("del",null,"Rs ",e.costPrice)),"\xa0",s.a.createElement("span",{style:{color:"orange"}},"(",((e.costPrice-e.sellingPrice)/e.costPrice*100).toFixed(0),"% OFF)")))))}))),s.a.createElement(h.a,{count:10,size:"small"}))))),s.a.createElement(f,null))}}]),t}(c.Component);t.default=k},908:function(e,t,a){"use strict";var l=a(923),n=a.n(l).a.create({baseURL:"http://www.scrolltechinfo.com/api",withCredentials:!0});t.a=n}}]);
//# sourceMappingURL=41.d9762f40.chunk.js.map