(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1412:function(e,a,t){"use strict";t.r(a);var l=t(233),n=t(234),u=t(236),o=t(235),c=t(237),r=t(2),b=t.n(r),i=t(1486),v=t(240),s=b.a.lazy(function(){return t.e(14).then(t.bind(null,1249))}),p=b.a.lazy(function(){return t.e(15).then(t.bind(null,1250))}),d=[{value:"1",label:"Shirt"},{value:"2",label:"Jeans"},{value:"3",label:"T-Shits"},{value:"4",label:"Joggers"},{value:"5",label:"Jacket"}],f=[{value:"1",label:"S"},{value:"2",label:"M"},{value:"3",label:"L"},{value:"4",label:"XL"},{value:"5",label:"XXL"},{value:"6",label:"XXXL"}],h=[{value:"above 10",label:"10% and above"},{value:"above 20",label:"20% and above"},{value:"above 30",label:"30% and above"},{value:"above 40",label:"40% and above"},{value:"above 50",label:"50% and above"},{value:"above 60",label:"60% and above"},{value:"above 70",label:"70% and above"},{value:"above 80",label:"80% and above"}],m=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={mensSelected:[],size:[],selectedOption:""},t.onRadio=function(e){t.setState({selectedOption:e.target.value})},t.onCheck=function(e){var a=t.state.mensSelected;if(e.target.checked)a.push(+e.target.value);else{var l=a.indexOf(+e.target.value);a.splice(l,1)}t.props.updateMensCheckbox(a)},t.onSize=function(e){var a=t.state.size;if(e.target.checked)a.push(+e.target.value);else{var l=a.indexOf(+e.target.value);a.splice(l,1)}a.sort(function(e,a){return e-a});t.setState({size:a})},t}return Object(c.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.selectedOption;a.mensSelected;return b.a.createElement(b.a.Fragment,null,b.a.createElement("p",{className:"pt-2 text-uppercase font-weight-bold ",style:{fontSize:"14px"}},"CATEGORIES"),d.map(function(a){return b.a.createElement(s,{key:a.id,label:a.label,value:a.value,onchange:e.onCheck})}),b.a.createElement(i.a,null),b.a.createElement("p",{className:"pt-2 text-uppercase font-weight-bold ",style:{fontSize:"14px"}},"size"),f.map(function(a){return b.a.createElement(s,{key:a.id,label:a.label,value:a.value,onchange:e.onSize})}),b.a.createElement("p",{className:"pt-2 text-uppercase font-weight-bold ",style:{fontSize:"14px"}},"discount range"),h.map(function(a){return b.a.createElement(p,{onchange:e.onRadio,value:a.value,label:a.label})}),b.a.createElement("p",null,"Radio: ",t))}}]),a}(r.Component);a.default=Object(v.b)(function(e){return{checkbox:e.mensSelected}},function(e){return{updateMensCheckbox:function(a){e({type:"UPDATE_MENS_CHECKBOX",payload:a})}}})(m)}}]);
//# sourceMappingURL=69.53acd4e7.chunk.js.map