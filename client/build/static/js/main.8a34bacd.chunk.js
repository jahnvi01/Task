(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{140:function(e,t,a){e.exports=a.p+"static/media/img_avatar1.cec4ccb3.png"},150:function(e,t,a){e.exports=a.p+"static/media/ice.a5eecc10.jpg"},158:function(e,t,a){e.exports=a(249)},241:function(e,t,a){},249:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),l=a(136),s=a(137),i=a(156),u=a(153),m=(a(163),a(9)),d=a(13),p=a(24),f=a(257),g=a(70),E=a(259),h=(a(116),a(58)),b=a(250),y=a(139),v=a.n(y),j=a(140),O=a.n(j),w=a(258),S=a(61),N=w.a.Option;var C=Object(m.f)(Object(h.b)((function(e){return{orders:e.orders}}),(function(e){return{getOrders:function(t){return fetch("/api/orders",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({username:t})}).then((function(e){return e.json()})).then((function(t){return e({type:"orders",payload:t})}))},remove:function(t){e({type:"remove",payload:{id:t,message:"Removed From Cart"}})}}}))((function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)([]),s=Object(d.a)(l,2),i=(s[0],s[1],Object(n.useState)(!1)),u=Object(d.a)(i,2),m=u[0],h=u[1],y=Object(n.useState)(!1),j=Object(d.a)(y,2),C=j[0],x=j[1],k=Object(n.useState)(""),I=Object(d.a)(k,2),A=I[0],T=I[1],P=Object(n.useState)(0),_=Object(d.a)(P,2),D=_[0],B=_[1],F=Object(n.useState)(1),W=Object(d.a)(F,2),J=W[0],U=W[1],R=Object(n.useState)(""),Y=Object(d.a)(R,2),L=Y[0],z=Y[1],H=function(){o(!0)};Object(n.useEffect)((function(){var t=localStorage.getItem("username");null===t?o(!0):(e.getOrders(t),o(!1))}),[]);var $=function(e){return console.log(A),r.a.createElement("td",{key:e._id},r.a.createElement("button",{className:"btn btn-primary",onClick:function(){var t;t=e,console.log(t),T(t),x(!0)}}," Yes"),r.a.createElement(f.a,{title:"Details",visible:C,onOk:Z,onCancel:X},r.a.createElement("p",{className:"mt-2"},"Select number of scoops"),r.a.createElement(w.a,{id:"scoop",onChange:function(e){!function(e){console.log("selected ".concat(e)),U(e),console.log(A);var t=parseFloat(e)*parseFloat(A.order.pricePerScoop);console.log(t),B(t)}(e)},style:{width:"100px"}},q(5)),r.a.createElement("p",{className:"mt-2"},"Total Bill"),r.a.createElement("p",null,D)))},M=function(e){return r.a.createElement("td",{key:e._id},r.a.createElement("button",{className:"btn btn-primary",onClick:function(){var t;t=e._id,z(t),h(!0)}}," Yes"),r.a.createElement(f.a,{title:"Delete Order",visible:m,onOk:V,onCancel:Q},r.a.createElement("p",{className:"mt-2"},"Do you want to delete this order?")))},V=function(e){var t={_id:L};fetch("/api/remove",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){"Order Deleted"===e.message?(E.a.success({message:"Order Deleted",duration:3}),window.location.reload()):E.a.error({message:"Try again",duration:3})})),z(""),x(!1)},Z=function(e){var t={scoop:J,total:D,_id:A._id};fetch("/api/updateOrder",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){"update successful"===e.message?(E.a.success({message:"update successful",duration:3}),window.location.reload()):E.a.error({message:"Try again",duration:3})})),T(""),U(0),B(0),x(!1)},q=function(e){e=parseInt(e);for(var t=[],a=1;a<=e;a++)t.push(r.a.createElement(N,{value:a},a));return t},G=function(e){var t=document.getElementById("username").value,a=document.getElementById("contact").value;console.log(document.getElementById("username").value),t&&a?(localStorage.setItem("username",t),localStorage.setItem("contact",a),o(!1),window.location.reload()):E.a.error({message:"Fill all the fields",duration:3})},K=function(){if(null!==localStorage.getItem("username"))return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3 col-md-12",style:{padding:"0px",margin:"0px"}},r.a.createElement("div",{class:"card"},r.a.createElement("img",{class:"card-img-top",src:O.a,alt:"Card image",width:"50",height:"200"}),r.a.createElement("div",{class:"card-body"},r.a.createElement("h4",{class:"card-title"},localStorage.getItem("username")),r.a.createElement("p",{class:"card-text"},"Contact Number :-",localStorage.getItem("contact")),r.a.createElement(g.a,{type:"primary",onClick:H},"Change Account")))),0!==e.orders.length&&r.a.createElement("div",{className:"col-lg-9 col-md-12",style:{padding:"0px",margin:"0px"}},r.a.createElement("h4",{style:{fontSize:"25px",textAlign:"center"},className:"title mt-3 mb-3"},"View Your Orders "),r.a.createElement(b.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Ice-Cream"),r.a.createElement("th",null,"pricePerScoop"),r.a.createElement("th",null,"Scoops"),r.a.createElement("th",null,"Total"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Update"),r.a.createElement("th",null,"Delete"))),r.a.createElement("tbody",null,function(){if(0!==e.orders.length)return e.orders.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("th",{scope:"row"},"#"),r.a.createElement("td",null,e.order.name),r.a.createElement("td",null,e.order.pricePerScoop),r.a.createElement("td",null,e.scoop),r.a.createElement("td",null,e.total),r.a.createElement("td",null,v()(e.updatedAt).fromNow()),$(e),M(e))}))}()))),0==e.orders.length&&r.a.createElement("div",{className:"col-lg-9 col-md-12",style:{padding:"0px",margin:"0px"}},r.a.createElement(S.a,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",imageStyle:{height:200},description:r.a.createElement("span",null,"No Orders Yet")},r.a.createElement(p.b,{to:"/order"}," ",r.a.createElement(g.a,{type:"primary"},"Order Now")))))},Q=function(e){z(""),x(!1)},X=function(e){T(""),U(0),B(0),x(!1)},ee=function(e){console.log(e),null===localStorage.getItem("username")?o(!0):(console.log("cancelll"),o(!1))};return r.a.createElement("div",{className:"homepage"},r.a.createElement("div",null,K(),r.a.createElement(f.a,{title:"Details",visible:c,onOk:G,onCancel:ee},r.a.createElement("p",null,"Enter your name.."),r.a.createElement("input",{type:"text",id:"username",style:{padding:"1%"},placeholder:"Username"}),r.a.createElement("p",{className:"mt-2"},"Enter your contact.."),r.a.createElement("input",{type:"number",id:"contact",style:{padding:"1%"},placeholder:"Mobile Number"}))))}))),x=a(92),k=a(150),I=a.n(k),A=w.a.Option;var T=Object(m.f)(Object(h.b)((function(e){return{products:e.products}}),(function(e){return{getProducts:function(){return fetch("/api/products",{method:"get",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){return e({type:"get",payload:t})}))}}}))((function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(0),s=Object(d.a)(l,2),i=s[0],u=s[1],m=Object(n.useState)(""),h=Object(d.a)(m,2),b=h[0],y=h[1],v=Object(n.useState)(""),j=Object(d.a)(v,2),O=j[0],S=j[1];Object(n.useEffect)((function(){e.getProducts(),null===localStorage.getItem("username")?(e.history.push("/"),o(!0)):o(!1)}),[]);var N=function(e){var t=localStorage.getItem("contact"),a=localStorage.getItem("username");if(a&&t&&b&&0!==i&&O){var n={username:a,contact:t,scoop:b,total:i,id:O._id};fetch("/api/order",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){"ordered successfully"===e.message?E.a.success({message:"ordered successfully",duration:3}):E.a.error({message:"Try again",duration:3})}))}o(!1),S(""),y(""),u(0)},C=function(e){return r.a.createElement("div",{className:"row",style:{justifyContent:"center"},key:e._id},r.a.createElement(g.a,{type:"primary",onClick:function(){!function(e){console.log(e),S(e),o(!0)}(e)}},"Order"),r.a.createElement(f.a,{title:"order",visible:c,onOk:N,onCancel:k},r.a.createElement("p",null,"Select number of scoops"),r.a.createElement(w.a,{id:"scoop",onChange:function(e){!function(e){console.log("selected ".concat(e)),y(e);var t=parseFloat(e)*parseFloat(O.pricePerScoop);console.log(t),u(t)}(e)},style:{width:"100px"}},function(e){e=parseInt(e);for(var t=[],a=1;a<=e;a++)t.push(r.a.createElement(A,{value:a},a));return t}(5)),r.a.createElement("p",{className:"mt-2"},"Total Bill"),r.a.createElement("p",null,i)))},k=function(e){console.log("cancelll"),S(""),u(0),y(""),o(!1)};return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",style:{justifyContent:"center"}},function(){if(0!==e.products.length)return console.log(e.products),e.products.map((function(e){return r.a.createElement("div",{className:"col-lg-3 col-md-6 card card-cascade card-ecommerce",style:{margin:"10px",justifyContent:"center"}},r.a.createElement("div",{className:"view view-cascade overlay"},r.a.createElement("img",Object(x.a)({className:"card-img-top",src:I.a,width:"150",alt:"product"},"alt",""))),r.a.createElement("div",{className:"card-body card-body-cascade text-center"},r.a.createElement(p.b,{to:"/details",style:{textDecoration:"none",font:"black !important"}},r.a.createElement("h4",{className:"card-title"},r.a.createElement("strong",null,e.name))),r.a.createElement("div",{className:"card-footer d-flex",style:{justifyContent:"space-around"}},r.a.createElement("span",{className:"float-left"},"Price :-",e.pricePerScoop,"$ ")),C(e)))}))}()))}))),P=(a(241),a(251)),_=a(252),D=a(253),B=a(260),F=a(254),W=a(255),J=a(256),U=Object(m.f)((function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),c=a[0],o=a[1],l=function(){return o(!c)};return r.a.createElement("div",null,r.a.createElement(P.a,{color:"#f8f9fa",style:{background:"#f8f9fa"},light:!0,expand:"md"},r.a.createElement(p.b,{to:"/"},r.a.createElement(_.a,{className:"font-weight-bold",style:{cursor:"pointer"}}," Ice-Cream-Shop")),r.a.createElement(D.a,{onClick:l}),r.a.createElement(B.a,{isOpen:c,navbar:!0},r.a.createElement(F.a,{className:"ml-auto",navbar:!0},r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,null,r.a.createElement(p.b,{to:"/"},r.a.createElement(J.a,{style:{cursor:"pointer"}},"Home"))),r.a.createElement(W.a,null,r.a.createElement(p.b,{to:"/order"},r.a.createElement(J.a,{style:{cursor:"pointer"}},"Order"))))))))})),R=(a(248),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(U,null),r.a.createElement(m.c,null,r.a.createElement("div",null,r.a.createElement(m.a,{exact:!0,path:"/",component:C}),r.a.createElement(m.a,{path:"/order",component:T}))))}}]),a}(n.Component)),Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var z=a(80),H=a(38),$={products:[],orders:[]},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t.payload),t.type){case"get":return Object(H.a)(Object(H.a)({},e),{},{products:t.payload});case"orders":return Object(H.a)(Object(H.a)({},e),{},{orders:t.payload});case"add":case"remove":return Object(H.a)(Object(H.a)({},e),{},{message:t.payload.message,cart:localStorage.getItem("cart")});default:return e}},V=a(20),Z=Object(z.b)(M),q=Object(V.a)();o.a.render(r.a.createElement(h.a,{store:Z},r.a.createElement(p.a,{history:q},r.a.createElement(R,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Y?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):L(t,e)}))}}()}},[[158,1,2]]]);
//# sourceMappingURL=main.8a34bacd.chunk.js.map