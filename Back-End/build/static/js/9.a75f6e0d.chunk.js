(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1062:function(e,a,t){"use strict";t.r(a);var c=t(233),o=t(234),n=t(236),l=t(235),r=t(237),s=t(2),i=t.n(s),m=t(1231),p=t.n(m),u=(t(908),t(241)),d=t(87),E=function(e){function a(){var e,t;Object(c.a)(this,a);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(t=Object(n.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(r)))).state={button:""},t.goToAddress=function(e){t.props.history.push("/address")},t.goToPayment=function(e){t.props.history.push("/payment")},t.goToConfirmation=function(e){t.props.history.push("/confirmation")},t}return Object(r.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e;return console.log(this.props),"/cart"===this.props.currentComponent?e=i.a.createElement("button",{className:p.a.button,onClick:this.goToAddress},"PLACE ORDER"):"/address"===this.props.currentComponent?e=i.a.createElement("button",{className:p.a.button,onClick:this.goToPayment},"CONTINUE"):"/payment"===this.props.currentComponent&&(e=i.a.createElement("button",{className:p.a.button,onClick:this.goToConfirmation},"PAY")),i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"body  mt-3"},i.a.createElement("div",{className:"priceDetails border p-4 mt-2 rounded"},i.a.createElement("div",{className:"".concat(p.a.coupon," border rounded mb-3")},i.a.createElement("div",{className:"pb-1"},i.a.createElement("strong",null,"Have a Coupon?")),i.a.createElement("form",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-8 col-8"},i.a.createElement("input",{type:"text",className:"".concat(p.a.inputText),placeholder:"Enter coupon"})),i.a.createElement("div",{className:"col-sm-4 col-4"},i.a.createElement("input",{type:"submit",className:"".concat(p.a.submitButton),value:"Apply"}))))),i.a.createElement("div",{className:""},i.a.createElement("h6",null,"BILLING DETAILS")),i.a.createElement("div",{className:"row pb-2 text-muted small"},i.a.createElement("div",{className:"col-sm-6 col-6"},i.a.createElement("div",{className:"pb-2"},"Bag Total:"),i.a.createElement("div",{className:"pb-2"},"Bag Discount:"),i.a.createElement("div",{className:"pb-2"},"Coupon Discount:"),i.a.createElement("div",{className:"pb-2"},"Order Total:"),i.a.createElement("div",{className:"pb-2"},"Delivery Charges:")),i.a.createElement("div",{className:"col-sm-6 col-6"},i.a.createElement("div",{className:"float-right text-right"},i.a.createElement("div",{className:"pb-2"},"\u20b9 ",this.props.BagTotal),i.a.createElement("div",{className:"pb-2"},"\u20b9 ",this.props.BagDiscount),i.a.createElement("div",{className:"pb-2"},"\u20b9 ",this.props.couponDiscount),i.a.createElement("div",{className:"pb-2"},"\u20b9 ",this.props.orderTotal),i.a.createElement("div",{className:"pb-2"},"\u20b9 ",this.props.deliveryCharge)))),i.a.createElement("hr",null),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-6 col-6"},i.a.createElement("div",null,i.a.createElement("strong",null,"Total"))),i.a.createElement("div",{className:"col-sm-6 col-6"},i.a.createElement("div",{className:"float-right"},i.a.createElement("strong",null,"\u20b9 ",this.props.orderTotal+this.props.deliveryCharge)))),i.a.createElement("div",{className:"row py-3"},i.a.createElement("div",{className:"col-sm-12 col-xs-12 col-12 ".concat(p.a.placeOrder)},e)))))}}]),a}(s.Component);a.default=Object(d.o)(Object(u.b)(function(e){return{BagTotal:e.BagTotal,BagDiscount:e.BagDiscount,couponDiscount:e.couponDiscount,orderTotal:e.orderTotal,deliveryCharge:e.deliveryCharge,currentComponent:e.currentComponent}},function(e){return{cartUpdate:function(a,t,c,o,n){e({type:"UPDATE_TOTAL",payload:{BagTotal:a,BagDiscount:t,couponDiscount:c,orderTotal:o,deliveryCharge:n}})}}})(E))},1231:function(e,a,t){e.exports={coupon:"price-calculate_coupon__1yV5u",inputText:"price-calculate_inputText__1XFBV",submitButton:"price-calculate_submitButton__1rCup",placeOrder:"price-calculate_placeOrder__YFYSB",priceTotal:"price-calculate_priceTotal__1bxE1"}}}]);
//# sourceMappingURL=9.a75f6e0d.chunk.js.map