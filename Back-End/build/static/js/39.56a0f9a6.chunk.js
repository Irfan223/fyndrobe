(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1311:function(e,a,t){e.exports={login:"login_login__e8VF6",register:"login_register__3YIyP"}},1480:function(e,a,t){"use strict";t.r(a);var n=t(242),l=t(233),r=t(234),s=t(236),o=t(235),c=t(237),i=t(2),m=t.n(i),d=t(1225),u=t(238),E=t(1311),g=t.n(E),p=t(908),h=t(1255),b=t(1252),v=m.a.lazy(function(){return t.e(8).then(t.bind(null,915))}),w=m.a.lazy(function(){return Promise.all([t.e(1),t.e(3)]).then(t.bind(null,918))}),N=m.a.lazy(function(){return Promise.all([t.e(4),t.e(17)]).then(t.bind(null,983))}),f=function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={prevUrl:localStorage.getItem("curUrl"),email:"",Password:""},t.onChange=function(e){t.setState(Object(n.a)({},e.target.name,e.target.value))},t.login=function(e,a){p.a.post("userLogin",e).then(function(e){console.log(e.data.code),1===e.data.code?(localStorage.setItem("isLoggedIn",!0),t.props.history.push(t.state.prevUrl)):2===e.data.code||3===e.data.code&&alert(e.data.message)}).catch(function(e){console.log(e)})},t}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"App bg-white"},m.a.createElement(v,null),m.a.createElement("div",{className:"body"},m.a.createElement("div",{className:"container-fluid mt-5"},m.a.createElement("div",{className:"row justify-content-center"},m.a.createElement("div",{className:"col-12 col-sm-4 p-5 border rounded"},m.a.createElement("h4",{className:"text-center"},"Login with Fashion Focus"),m.a.createElement("div",{className:"row no-gutters mb-3 mt-3"},m.a.createElement("div",{className:"col-sm-6"},m.a.createElement(u.Link,null,m.a.createElement("button",{className:g.a.login},"LOGIN"))),m.a.createElement("div",{className:"col-sm-6"},m.a.createElement(u.Link,{to:"/register"},m.a.createElement("button",{className:g.a.register},"REGISTER")))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-sm-6"},m.a.createElement("button",{className:"btn btn-facebook w-100",type:"button"},m.a.createElement("span",null,"facebook"))),m.a.createElement("div",{className:"col-sm-6"},m.a.createElement("button",{className:"btn btn-google-plus w-100",type:"button"},m.a.createElement("span",null,"Google")))),m.a.createElement("div",{className:"row no-gutters mt-3"},m.a.createElement("div",{className:"col-sm-5"},m.a.createElement("hr",null)),m.a.createElement("div",{className:"col-sm-2 text-center"},"OR"),m.a.createElement("div",{className:"col-sm-5"},m.a.createElement("hr",null))),m.a.createElement(h.a,{initialValues:{email:"",password:""},onSubmit:function(a,t){var n=t.setSubmitting;console.log(a),e.login(a,e.props.history),n(!1)},validationSchema:b.a().shape({email:b.c().email().required("Email is required"),password:b.c().required("Password is required").min(5,"Passwod is too short should be 6 character long").matches(/(?=.*[0-9])/,"Password should contain a number")})},function(e){var a=e.values,t=e.errors,n=e.touched,l=e.handleChange,r=e.handleBlur,s=e.handleSubmit,o=e.isSubmitting;return m.a.createElement("form",{onSubmit:s},m.a.createElement(N,{name:"email",label:"Email",value:a.email,onBlur:r,onChange:l,className:t.email&&n.email}),t.email&&n.email&&m.a.createElement("div",{className:"text-red"},t.email),m.a.createElement(N,{name:"password",label:"Password",onChange:l,onBlur:r,value:a.password,className:t.password&&n.password}),t.password&&n.password&&m.a.createElement("div",{className:"text-red"},t.password),m.a.createElement(d.a,{type:"submit",disabled:o,variant:"contained",color:"primary",className:"mt-3 p-2 w-100"},"Login"))}),m.a.createElement("div",{className:"row mt-3"},m.a.createElement("div",{className:"col-6 col-sm-6"},"New to here ,\xa0",m.a.createElement(u.Link,{to:"/register",variant:"contained",color:"primary"},"Sign Up")),m.a.createElement("div",{className:"col-6 col-sm-6"},m.a.createElement(u.Link,{className:"float-right",variant:"contained",color:"primary"},"Forgot Password"))))))),m.a.createElement(w,null))}}]),a}(i.Component);a.default=f},908:function(e,a,t){"use strict";var n=t(923),l=t.n(n).a.create({baseURL:"http://www.scrolltechinfo.com/api",withCredentials:!0});a.a=l}}]);
//# sourceMappingURL=39.56a0f9a6.chunk.js.map