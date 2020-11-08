(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,c){},129:function(e,t){},153:function(e,t){},155:function(e,t){},164:function(e,t,c){},165:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),r=c(24),s=c.n(r),i=c(23),l=c(3),o=c(5);c(69);var d=function(){return Object(a.jsx)("div",{className:"footer",children:Object(a.jsxs)("div",{className:"footer__content",children:[Object(a.jsxs)("div",{className:"footer__info",children:["You need to allow access to video and audio to place calls. ",Object(a.jsx)("br",{})," Facetime is fully Open Source and does not store any data on its servers."]}),Object(a.jsx)("div",{className:"footer__credits",children:"Made with \u2764\ufe0f by Tanuj Choudhary"})]})})};c(70);var j=function(){return Object(a.jsx)("div",{className:"header__wrapper",children:Object(a.jsxs)("header",{className:"header",children:[Object(a.jsxs)("div",{className:"header__left",children:[Object(a.jsx)("div",{className:"header__brand__image__wrapper",children:Object(a.jsx)("i",{className:"fas fa-phone-alt header__brand__image"})}),Object(a.jsx)("div",{className:"header__brand__name",children:"FaceTime"})]}),Object(a.jsx)("div",{className:"header__right",children:Object(a.jsx)("iframe",{src:"https://ghbtns.com/github-btn.html?user=Tanuj-Choudhary&repo=facetime&type=star&size=large",frameBorder:"0",scrolling:"0",width:"90",height:"30",title:"GitHub"})})]})})};c(71);var u=function(){return Object(a.jsxs)("div",{className:"container hero-container",children:[Object(a.jsx)("div",{className:"hero__welcome__text",children:"Anonymous Video Calls"}),Object(a.jsx)("div",{className:"hero__description__text",children:"across the world for free"}),Object(a.jsx)("div",{className:"hero__action__text",children:"Create a call or Join a call"})]})},b=c(25),h=c(33),m=c(60),O=(c(72),function(e){var t=e.handleModalAction,c=Object(m.a)(e,["handleModalAction"]);return Object(r.createPortal)(Object(a.jsxs)("div",{onClick:function(e){e.target.closest(".modal__body")||t()},className:"modal",children:[Object(a.jsx)("div",{className:"overlay"}),Object(a.jsxs)("div",{className:"modal__body",children:[c.children,Object(a.jsx)("span",{className:"close-modal",onClick:t,children:"X"})]})]}),document.querySelector("#modal"))});c(73);var f=function(e){var t=e.fields,c=e.handleChange,n=e.handleClick,r=e.isModalOpen,s=e.handleModalClose;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"callBox",children:[r&&Object(a.jsx)(O,{handleModalAction:s,children:Object(a.jsx)("h1",{className:"callbox__modal",children:"Please enter a ID"})}),Object(a.jsx)("input",{name:"friendID",value:t.friendID,onChange:c,placeholder:"Friend ID",type:"text",className:"input__id"}),Object(a.jsx)("button",{onClick:n,className:"call-btn",children:"Call"})]}),Object(a.jsxs)("div",{className:"callbox__text",children:["To call your friend, ask them to open ",Object(a.jsx)("span",{children:"facetime"})," in their browser.",Object(a.jsx)("br",{})," Send your ID and wait for their call ",Object(a.jsx)("span",{children:"OR"})," enter their ID and hit call!"]})]})};var x=function(){var e=Object(n.useState)({friendID:""}),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!1),i=Object(o.a)(s,2),d=i[0],j=i[1],u=Object(l.f)();return Object(a.jsx)(f,{fields:c,handleChange:function(e){var t=e.target,a=t.name,n=t.value,s=Object(h.a)(Object(h.a)({},c),{},Object(b.a)({},a,n));r(s)},handleClick:function(e){e.preventDefault();var t=c.friendID;""!==t?u.push({pathname:"/rooms",search:"?id=".concat(t)}):j(!0)},isModalOpen:d,handleModalClose:function(){j(!1)}})};c(81);var _=function(e){var t=e.handleClick,c=e.buttonClicked;return Object(a.jsxs)("div",{children:[Object(a.jsx)(j,{}),Object(a.jsx)(u,{}),c?"join"===c?Object(a.jsx)(x,{}):null:Object(a.jsxs)("div",{className:"home__btns",children:[Object(a.jsxs)("button",{id:"start",onClick:t,className:"btn home__create-btn",children:[Object(a.jsx)("i",{className:"fa fa-video-camera video__icon","aria-hidden":"true"}),"Start a call"]}),Object(a.jsxs)("button",{id:"join",onClick:t,className:"btn home__join-btn",children:[Object(a.jsx)("i",{className:"fas fa-user-friends friends__icon"}),"Join a call"]})]}),Object(a.jsx)(d,{})]})};var v=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(l.f)();return Object(a.jsx)(_,{handleClick:function(e){var t=e.target.closest(".btn").id;"start"===t&&s.push("rooms"),r(t)},buttonClicked:c})},p=c(18),g=c.n(p),N=c(36),y=c(62),w=c.n(y);c(102),c(103);var C=function(e){var t=e.userVideo,c=e.partnerVideo,n=e.modalMessage,r=e.modalVisible,s=e.handleModalAction,i=e.receivingCall,l=e.acceptCall,o=e.rejectCall,d=e.callAccepted,j=e.callRejected,u=e.caller,b=e.yourID,h=e.error;return Object(a.jsxs)("div",{className:"chat__page",children:[Object(a.jsxs)("div",{className:"my__id",children:["Your username: ",Object(a.jsx)("span",{children:b})]}),r?Object(a.jsx)(O,{handleModalAction:s,children:Object(a.jsx)("h1",{className:"callbox__modal",children:n})}):null,!i||d||j?null:Object(a.jsxs)(O,{handleModalAction:o,children:[Object(a.jsxs)("h1",{className:"call__modal__heading",children:[u," is calling you"]}),Object(a.jsxs)("div",{className:"call__modal__btns",children:[Object(a.jsxs)("button",{onClick:l,className:"accept-btn",children:[Object(a.jsx)("i",{className:"fa fa-check call__modal__btns__icon"}),"Accept call"]}),Object(a.jsxs)("button",{onClick:o,className:"reject-btn",children:[Object(a.jsx)("i",{className:"fa fa-close call__modal__btns__icon"}),"Reject call"]})]})]}),null!==t||null!==c?Object(a.jsxs)("div",{className:"videoboxes",children:[Object(a.jsx)("div",{className:"videobox videobox__partner",children:Object(a.jsx)("video",{ref:function(e){e&&(e.srcObject=c)},autoPlay:!0,controls:!0,className:"video__partner",width:"350",height:"300",children:"Sorry, your browser doesn't support embedded videos."})}),Object(a.jsx)("div",{className:"videobox videobox__user",children:Object(a.jsx)("video",{ref:function(e){e&&(e.srcObject=t)},autoPlay:!0,controls:!0,width:"100",height:"100",muted:!0,children:"Sorry, your browser doesn't support embedded videos."})})]}):h?null:Object(a.jsxs)("div",{className:"center",children:[Object(a.jsx)(w.a,{type:"Oval",color:"#02caca",height:100,width:100,timeout:6e4}),Object(a.jsxs)("span",{className:"loading__text",children:["Waiting for ",Object(a.jsx)("br",{})," someone to join"]})]})]})},k=c(63),S=c.n(k),M=c(37),D=c.n(M);var A=function(e){var t=new URLSearchParams(e.location.search).get("id")||null,c=Object(n.useState)(null),r=Object(o.a)(c,2),s=r[0],i=r[1],l=Object(n.useState)(null),d=Object(o.a)(l,2),j=d[0],u=d[1],b=Object(n.useState)(null),h=Object(o.a)(b,2),m=h[0],O=h[1],f=Object(n.useState)(""),x=Object(o.a)(f,2),_=x[0],v=x[1],p=Object(n.useState)({}),y=Object(o.a)(p,2),w=y[0],k=y[1],M=Object(n.useState)(!1),A=Object(o.a)(M,2),I=A[0],P=A[1],F=Object(n.useState)(""),R=Object(o.a)(F,2),V=R[0],T=R[1],U=Object(n.useState)(),J=Object(o.a)(U,2),Y=J[0],B=J[1],E=Object(n.useState)(!1),W=Object(o.a)(E,2),q=W[0],z=W[1],G=Object(n.useState)(!1),H=Object(o.a)(G,2),L=H[0],X=H[1],K=Object(n.useState)(!1),Q=Object(o.a)(K,2),Z=Q[0],$=Q[1],ee=Object(n.useState)(""),te=Object(o.a)(ee,2),ce=te[0],ae=te[1],ne=Object(n.useRef)(null),re=Object(n.useRef)();function se(){return(se=Object(N.a)(g.a.mark((function e(t){var c,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t||!w[t]||t===_){e.next=24;break}return e.prev=1,e.next=4,navigator.mediaDevices.getUserMedia({audio:!0,video:!0});case 4:c=e.sent,T(t),i(c),a=new D.a({initiator:!0,trickle:!1,config:{iceServers:[{urls:"stun:numb.viagenie.ca",username:"sultan1640@gmail.com",credential:"98376683"},{urls:"turn:numb.viagenie.ca",username:"sultan1640@gmail.com",credential:"98376683"}]},stream:c}),re.current=a,a.on("signal",(function(e){ne.current.emit("callUser",{userToCall:t,signalData:e,from:_})})),a.on("stream",(function(e){u(e)})),a.on("error",(function(e){le()})),ne.current.on("callAccepted",(function(e){z(!0),a.signal(e)})),ne.current.on("close",(function(){window.location.reload()})),ne.current.on("rejected",(function(){window.location.reload()})),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(1),ae("You cannot place/ receive a call without granting video and audio permissions! Please change your settings to use FaceTime."),$(!0),O(!0);case 22:e.next=28;break;case 24:return ae("We think the username entered is wrong. Please check again and retry!"),$(!0),O(!0),e.abrupt("return");case 28:case"end":return e.stop()}}),e,null,[[1,17]])})))).apply(this,arguments)}function ie(){return(ie=Object(N.a)(g.a.mark((function e(){var t,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({audio:!0,video:!0});case 3:t=e.sent,i(t),z(!0),c=new D.a({initiator:!1,trickle:!1,stream:t}),re.current=c,c.on("signal",(function(e){ne.current.emit("acceptCall",{signal:e,to:V})})),c.on("stream",(function(e){u(e)})),c.on("error",(function(e){le()})),c.signal(Y),ne.current.on("close",(function(){window.location.reload()})),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(0),ae("You cannot place/ receive a call without granting video and audio permissions! Please change your settings to use Cuckoo."),$(!0),O(!0);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}function le(){re.current.destroy(),ne.current.emit("close",{to:V}),window.location.reload()}return Object(n.useEffect)((function(){ne.current||(ne.current=S.a.connect("/"),ne.current.on("yourID",(function(e){v(e)}))),ne.current.on("allUsers",(function(e){k(e)})),ne.current.on("hey",(function(e){P(!0),T(e.from),B(e.signal)})),t&&""!==_&&Object.keys(w).length>1&&function(e){se.apply(this,arguments)}(t)}),[t,_,w]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(C,{userVideo:s,partnerVideo:j,modalMessage:ce,modalVisible:Z,handleModalAction:function(){$(!1)},receivingCall:I,acceptCall:function(){return ie.apply(this,arguments)},rejectCall:function(){X(!0),ne.current.emit("rejected",{to:V}),window.location.reload()},callAccepted:q,callRejected:L,caller:V,yourID:_,error:m})})};var I=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(i.a,{children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/",exact:!0,component:v}),Object(a.jsx)(l.a,{path:"/rooms",exact:!0,component:A})]})})})};c(164);var P=function(){return Object(a.jsx)(I,{})};s.a.render(Object(a.jsx)(P,{}),document.getElementById("root"))},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},81:function(e,t,c){}},[[165,1,2]]]);
//# sourceMappingURL=main.74ac5cba.chunk.js.map