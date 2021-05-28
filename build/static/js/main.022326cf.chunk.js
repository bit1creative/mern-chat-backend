(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{204:function(e,t,n){},390:function(e,t,n){},391:function(e,t,n){},392:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(75),r=n.n(a),o=n(21),l=n(44),i=Object(l.b)({name:"username",initialState:{username:null},reducers:{setUserName:function(e,t){e.username=t.payload}}}),d=i.actions.setUserName,u=i.reducer,j=Object(l.b)({name:"showContacts",initialState:{showContacts:!1},reducers:{triggerContacts:function(e){e.showContacts=!e.showContacts}}}),x=j.actions.triggerContacts,b=j.reducer,m=Object(l.a)({reducer:{username:u,showContacts:b}}),f=(n(204),n(37)),h=n(8),O=n(29),g=n(2),p=function(e){var t,n,s=e.location,a=Object(o.d)((function(e){return e.username})),r=Object(o.c)(),l=Object(c.useState)((null===s||void 0===s||null===(t=s.state)||void 0===t?void 0:t.roomName)?null===s||void 0===s||null===(n=s.state)||void 0===n?void 0:n.roomName:""),i=Object(O.a)(l,2),u=i[0],j=i[1],x=Object(c.useState)("bg-black bg-opacity-80"),b=Object(O.a)(x,2),m=b[0],h=b[1],p=Object(c.useState)("text-gray-200"),y=Object(O.a)(p,2),w=y[0],v=y[1],N=Object(c.useState)("bg-gray-200 placeholder-gray-600"),C=Object(O.a)(N,2),M=C[0],k=C[1];return Object(g.jsx)("div",{className:"w-full h-screen overflow-hidden ".concat(m),children:Object(g.jsxs)("div",{className:"h-full flex flex-col justify-center items-center transition",children:[Object(g.jsx)("div",{className:"font-thin text-2xl w-5/12 md:w-3/12 lg:w-2/12 text-center py-2 border-b ".concat(w),children:Object(g.jsx)("h1",{children:"Join"})}),Object(g.jsx)("input",{required:!0,className:"w-5/12 md:w-3/12 lg:w-2/12 my-4 shadow rounded py-2 px-3 font-thin ".concat(M),placeholder:"Enter your name",type:"text",onChange:function(e){return r(d(e.target.value))}}),Object(g.jsx)("input",{required:!0,className:"w-5/12 md:w-3/12 lg:w-2/12 shadow rounded py-2 px-3 font-thin ".concat(M),placeholder:"Enter room name",value:u,type:"text",onChange:function(e){return j(e.target.value)}}),Object(g.jsx)(f.b,{onClick:function(e){return a&&u?null:e.preventDefault()},to:"/chat?room=".concat(u),className:"my-4",children:Object(g.jsx)("button",{className:"focus:outline-none outline-none border py-2 px-8 rounded-xl text-gray-700 bg-gray-200 hover:bg-black hover:opacity-80 hover:text-gray-300",type:"submit",onMouseEnter:function(){h("bg-green-200 dark:bg-gray-700"),v("text-black text-opacity-80 border-black border-opacity-80"),k("bg-black bg-opacity-80 placeholder-gray-200 text-gray-200")},onMouseLeave:function(){h("bg-black bg-opacity-80"),v("text-gray-200"),k("bg-gray-200 placeholder-gray-600 text-gray-700")},children:"Join chat"})})]})})},y=n(81),w=n(115),v=n.n(w),N=n(180),C=n.n(N),M=n(80),k=n(182),S=n(181),Y=function(e){var t=e.room,n=Object(o.c)();return Object(g.jsx)("div",{className:"w-full mx-auto mb-2",children:Object(g.jsxs)("div",{className:"w-full flex flex-row justify-between bg-green-400 text-gray-100",children:[Object(g.jsxs)("div",{className:"flex flex-row truncate",children:[Object(g.jsx)("div",{className:"text-4xl p-2",children:Object(g.jsx)(M.a,{})}),Object(g.jsx)("h3",{className:"align-middle my-auto",children:t})]}),Object(g.jsxs)("div",{className:"my-auto px-4 flex flex-row",children:[Object(g.jsx)("button",{className:"mx-4 focus:outline-none",onClick:function(){return n(x())},children:Object(g.jsx)(S.a,{className:"text-xl"})}),Object(g.jsx)(f.b,{to:"/",className:"text-gray-100 text-xl",children:Object(g.jsx)(k.a,{className:"mx-auto"})})]})]})})},E=n(183),D=function(e){var t=e.message,n=e.setMessage,c=e.sendMessage;return Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"flex flex-row w-full relative",children:[Object(g.jsx)("input",{value:t,onChange:function(e){return n(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?c(e):null},type:"text",placeholder:"Start typing...",className:"w-full p-4 md:p-2 focus:outline-none font-thin pr-20"}),Object(g.jsx)("button",{className:"absolute z-10 right-8 text-2xl text-green-600 p-4 md:p-2 focus:outline-none",children:Object(g.jsx)(E.a,{})}),Object(g.jsx)("button",{onClick:function(e){return c(e)},className:"absolute right-0 z-10 text-2xl text-green-600 p-4 md:p-2 focus:outline-none",children:Object(g.jsx)(M.b,{})})]})})},L=n(196),z=n(9),J=n.n(z),U=function(e){var t=e.message,n=t.user,c=t.text,s=t.date,a=e.name;return n===a.trim().toLowerCase()?Object(g.jsx)("div",{className:"flex justify-end p-2",children:Object(g.jsxs)("div",{className:"min-w-1/3 max-w-3/4 md:max-w-1/2 bg-green-200 bg-opacity-80 rounded-xl py-1 px-2 break-words",children:[Object(g.jsx)("div",{className:"flex flex-row justify-between truncate",children:Object(g.jsx)("p",{className:"font-bold text-sm text-right text-green-600",children:a.trim()})}),Object(g.jsx)("div",{children:Object(g.jsx)("p",{className:"text-sm",children:c})}),Object(g.jsx)("div",{className:"mx-auto text-right",children:Object(g.jsx)("span",{className:"font-thin text-xs",children:J()(J()()).isSame(s,"day")?J()(s).format("LT"):0===J()().diff(s,"days")?"Yesterday":J()().diff(s,"days")<=7?J()(s).format("ddd, h:mm"):0===J()().diff(s,"years")?J()(s).format("MMM Do"):J()(s).format("MMM Do YYYY")})})]})}):"admin"===n?Object(g.jsx)("div",{className:"font-thin text-sm text-center truncate px-16",children:c}):Object(g.jsx)("div",{className:"flex justify-start p-2",children:Object(g.jsxs)("div",{className:"min-w-1/3 max-w-3/4 md:max-w-1/2 bg-green-100 bg-opacity-80 rounded-xl py-1 px-2 break-words",children:[Object(g.jsx)("div",{className:"flex flex-row justify-between truncate",children:Object(g.jsx)("p",{className:"font-bold text-sm text-left text-green-600",children:a.trim()})}),Object(g.jsx)("div",{children:Object(g.jsx)("p",{className:"text-sm",children:c})}),Object(g.jsx)("div",{className:"mx-auto text-right",children:Object(g.jsx)("span",{className:"font-thin text-xs",children:J()(J()()).isSame(s,"day")?J()(s).format("LT"):0===J()().diff(s,"days")?"Yesterday":J()().diff(s,"days")<=7?J()(s).format("ddd, h:mm"):0===J()().diff(s,"years")?J()(s).format("MMM Do"):J()(s).format("MMM Do YYYY")})})]})})},q=(n(390),function(e){var t=e.messages,n=e.name;return Object(g.jsx)(L.a,{followButtonClassName:"ScrollToBottomBtn",className:"w-full h-full overflow-hidden",children:t.map((function(e,t){return Object(g.jsx)("div",{children:Object(g.jsx)(U,{message:e,name:n})},t)}))})});n(391);var B,H=Object(o.b)((function(e,t){return{showContacts:e.showContacts}}))((function(e){var t=e.users,n=e.showContacts;return Object(g.jsx)("div",{className:"bg-white bg-opacity-50 overflow-scroll transition-size duration-500 ".concat(n.showContacts?"w-full md:w-3/12 lg:w-2/12 xl:w-1/12 p-5 h-1/2 md:h-full lg:h-5/6 xl:h-3/4":"w-0 p-0 h-0"),children:Object(g.jsxs)("div",{className:"".concat(n.showContacts?"block":"hidden"),children:[Object(g.jsx)("span",{className:"font-thin",children:"Users in chat:"}),Object(g.jsx)("div",{className:"text-green-800 truncate",children:t.map((function(e){return Object(g.jsx)("div",{children:e.name},e.name)}))})]})})})),T=function(e){var t=e.location,n=Object(o.d)((function(e){return e.username})).username,s=Object(c.useState)(""),a=Object(O.a)(s,2),r=a[0],l=a[1],i=Object(c.useState)(""),d=Object(O.a)(i,2),u=d[0],j=d[1],x=Object(c.useState)([]),b=Object(O.a)(x,2),m=b[0],f=b[1],p=Object(c.useState)([]),w=Object(O.a)(p,2),N=w[0],M=w[1],k="192.168.1.6:5000";Object(c.useEffect)((function(){var e=v.a.parse(t.search).room;return B=C()(k,{transports:["websocket"]}),l(e),B.emit("join",{name:n,room:e},(function(){})),B.on("loadMessageHistory",(function(e){var t=e.messagesHistory;f(Object(y.a)(t))})),B.on("getUsersInChat",(function(e){var t=e.usersInChat;M(Object(y.a)(t))})),function(){B.disconnect(),B.off()}}),[k,t.search]),Object(c.useEffect)((function(){B.on("message",(function(e){f([].concat(Object(y.a)(m),[e]))}))}),[m]);return n?Object(g.jsxs)("div",{className:"h-screen bg-green-200 flex flex-col md:flex-row justify-center items-center",children:[Object(g.jsxs)("div",{className:"flex flex-col justify-between h-full lg:h-5/6 xl:h-3/4 w-full lg:w-6/12 bg-gray-200",children:[Object(g.jsx)(Y,{room:r}),Object(g.jsx)(q,{messages:m,name:n,className:"h-full"}),Object(g.jsx)(D,{message:u,setMessage:j,sendMessage:function(e){e.preventDefault(),u&&B.emit("sendMessage",u,(function(){return j("")}))}})]}),Object(g.jsx)(H,{users:N})]}):Object(g.jsx)(h.a,{to:{pathname:"/",state:{roomName:v.a.parse(t.search).room}}})},I=function(){function e(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}return Object(c.useEffect)((function(){e(),window.addEventListener("resize",(function(){e()}))}),[]),Object(g.jsx)(f.a,{children:Object(g.jsxs)(h.d,{children:[Object(g.jsx)(h.b,{path:"/",exact:!0,component:p}),Object(g.jsx)(h.b,{path:"/chat",component:T})]})})};r.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(o.a,{store:m,children:Object(g.jsx)(I,{})})}),document.querySelector("#root"))}},[[392,1,2]]]);