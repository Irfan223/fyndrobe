(window.webpackJsonp=window.webpackJsonp||[]).push([[53,54,55],{1073:function(e,a,t){e.exports={coupon:"price-calculate_coupon__1yV5u",FormItem:"price-calculate_FormItem__1ABTM",inputText:"price-calculate_inputText__1XFBV",submitButton:"price-calculate_submitButton__1rCup",placeOrder:"price-calculate_placeOrder__YFYSB",priceTotal:"price-calculate_priceTotal__1bxE1",submitButtonContainer:"price-calculate_submitButtonContainer__bmrHL"}},1091:function(e,a,t){"use strict";t.r(a);var c=t(233),o=t(234),n=t(236),l=t(235),r=t(237),s=t(2),i=t.n(s),m=t(1073),p=t.n(m),u=(t(913),t(240)),d=t(81),E=t(1188),v=t(1093),b=t(1075),N=function(e){function a(){var e,t;Object(c.a)(this,a);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(t=Object(n.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(r)))).state={button:""},t.goToAddress=function(e){t.props.history.push("/address")},t.goToPayment=function(e){t.props.history.push("/payment")},t.goToConfirmation=function(e){t.props.history.push("/confirmation")},t}return Object(r.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e;return console.log(this.props),"/cart"===this.props.currentComponent?e=i.a.createElement("button",{className:p.a.button,onClick:this.goToAddress},"PLACE ORDER"):"/address"===this.props.currentComponent?e=i.a.createElement("button",{className:p.a.button,onClick:this.goToPayment},"CONTINUE"):"/payment"===this.props.currentComponent&&(e=i.a.createElement("button",{className:p.a.button,onClick:this.goToConfirmation},"PAY")),i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"body  mt-3"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:" col-md-11 col-sm-11 col-12 p-3 ".concat(p.a.coupon," border ")},i.a.createElement("div",{className:"p-1"},i.a.createElement("strong",null,"Have a Coupon?")),i.a.createElement(E.a,{layout:"inline"},i.a.createElement(E.a.Item,{className:p.a.FormItem},i.a.createElement(v.a,{placeholder:"Enter Coupon"})),i.a.createElement("div",{className:" ".concat(p.a.submitButtonContainer)},i.a.createElement(b.a,{className:p.a.submitButton,type:"default",size:"middle",htmlType:"submit",style:{outlineStyle:"none"}},"Apply"))))),i.a.createElement("div",{className:""},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:" col-md-11 col-sm-11 col-12  border p-3 mt-2"},i.a.createElement("div",{className:""},i.a.createElement("h6",null,"BILLING DETAILS")),i.a.createElement("div",{className:"row pb-2 text-muted small"},i.a.createElement("div",{className:"col-sm-6 col-6"},i.a.createElement("div",{className:"pb-2"},"Bag Total:"),i.a.createElement("div",{className:"pb-2"},"Bag Discount:"),i.a.createElement("div",{className:"pb-2"},"Coupon Discount:"),i.a.createElement("div",{className:"pb-2"},"Order Total:"),i.a.createElement("div",{className:"pb-2"},"Delivery Charges:")),i.a.createElement("div",{className:"col-sm-6 col-6"},i.a.createElement("div",{className:"float-right text-right"},i.a.createElement("div",{className:"pb-2"},"\u20b9 ",this.props.BagTotal),i.a.createElement("div",{className:"pb-2"},"\u20b9 ",this.props.BagDiscount),i.a.createElement("div",{className:"pb-2"},"\u20b9 ",this.props.couponDiscount),i.a.createElement("div",{className:"pb-2"},"\u20b9 ",this.props.orderTotal),i.a.createElement("div",{className:"pb-2"},"\u20b9 ",this.props.deliveryCharge)))),i.a.createElement("hr",null),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-6 col-6"},i.a.createElement("div",null,i.a.createElement("strong",null,"Total"))),i.a.createElement("div",{className:"col-sm-6 col-6"},i.a.createElement("div",{className:"float-right"},i.a.createElement("strong",null,"\u20b9"," ",this.props.orderTotal+this.props.deliveryCharge)))),i.a.createElement("div",{className:"row py-3"},i.a.createElement("div",{className:"col-sm-12 col-xs-12 col-12 ".concat(p.a.placeOrder)},e))))))))}}]),a}(s.Component);a.default=Object(d.o)(Object(u.b)(function(e){return{BagTotal:e.BagTotal,BagDiscount:e.BagDiscount,couponDiscount:e.couponDiscount,orderTotal:e.orderTotal,deliveryCharge:e.deliveryCharge,currentComponent:e.currentComponent}},function(e){return{cartUpdate:function(a,t,c,o,n){e({type:"UPDATE_TOTAL",payload:{BagTotal:a,BagDiscount:t,couponDiscount:c,orderTotal:o,deliveryCharge:n}})}}})(N))}}]);
//# sourceMappingURL=53.99a1d8be.chunk.js.map