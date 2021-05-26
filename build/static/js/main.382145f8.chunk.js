(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{202:function(e,t,s){},388:function(e,t,s){},389:function(e,t,s){"use strict";s.r(t);var n,a=s(1),c=s.n(a),r=s(75),l=s.n(r),o=s(35),i=s(80),j=Object(i.b)({name:"username",initialState:{username:null},reducers:{setUserName:function(e,t){e.username=t.payload}}}),d=j.actions.setUserName,u=j.reducer,x=Object(i.a)({reducer:{username:u}}),m=(s(202),s(53)),b=s(8),f=s(43),h=s(2),O=function(e){var t,s,n=e.location,c=Object(o.c)((function(e){return e.username})),r=Object(o.b)(),l=Object(a.useState)((null===n||void 0===n||null===(t=n.state)||void 0===t?void 0:t.roomName)?null===n||void 0===n||null===(s=n.state)||void 0===s?void 0:s.roomName:""),i=Object(f.a)(l,2),j=i[0],u=i[1];return Object(h.jsx)("div",{className:"w-full h-screen bg-black bg-opacity-80",children:Object(h.jsxs)("div",{className:"h-full flex flex-col justify-center items-center",children:[Object(h.jsx)("div",{className:"font-thin text-2xl text-gray-200 w-2/12 text-center py-2 border-b",children:Object(h.jsx)("h1",{children:"Join"})}),Object(h.jsx)("input",{required:!0,className:"w-2/12 my-4 shadow rounded py-2 px-3 bg-gray-200 placeholder-gray-600 font-thin",placeholder:"Enter your name",type:"text",onChange:function(e){return r(d(e.target.value))}}),Object(h.jsx)("input",{required:!0,className:"w-2/12 shadow rounded py-2 px-3 bg-gray-200 placeholder-gray-600 font-thin",placeholder:"Enter room name",value:j,type:"text",onChange:function(e){return u(e.target.value)}}),Object(h.jsx)(m.b,{onClick:function(e){return c&&j?null:e.preventDefault()},to:"/chat?room=".concat(j),children:Object(h.jsx)("button",{className:"focus:outline-none outline-none my-4 border py-2 px-8 rounded-xl text-gray-200 hover:bg-white hover:text-gray-700",type:"submit",children:"Join chat"})})]})})},p=s(194),g=s(114),y=s.n(g),v=s(179),N=s.n(v),w=s(56),M=function(e){var t=e.room;return Object(h.jsx)("div",{className:"w-full mx-auto h-1/6",children:Object(h.jsxs)("div",{className:"w-full flex flex-row justify-between bg-green-400 text-gray-100",children:[Object(h.jsxs)("div",{className:"flex flex-row",children:[Object(h.jsx)("div",{className:"text-4xl p-2",children:Object(h.jsx)(w.a,{})}),Object(h.jsx)("h3",{className:"align-middle my-auto",children:t})]}),Object(h.jsx)("div",{className:"my-auto px-4",children:Object(h.jsx)("a",{href:"/",className:"text-gray-100 text-xl",children:Object(h.jsx)(w.b,{className:"mx-auto"})})})]})})},S=s(180),Y=function(e){var t=e.message,s=e.setMessage,n=e.sendMessage;return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"flex flex-row w-full relative",children:[Object(h.jsx)("input",{value:t,onChange:function(e){return s(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?n(e):null},type:"text",placeholder:"Start typing...",className:"w-full p-2 focus:outline-none"}),Object(h.jsx)("button",{className:"absolute z-10 right-8 text-2xl text-green-600 p-2 focus:outline-none",children:Object(h.jsx)(S.a,{})}),Object(h.jsx)("button",{onClick:function(e){return n(e)},className:"absolute right-0 z-10 text-2xl text-green-600 p-2 focus:outline-none",children:Object(h.jsx)(w.c,{})})]})})},k=s(193),C=s(9),D=s.n(C),E=function(e){var t=e.message,s=t.user,n=t.text,a=t.date;return s===e.name.trim().toLowerCase()?Object(h.jsx)("div",{className:"flex justify-end p-2",children:Object(h.jsxs)("div",{className:"w-5/12 bg-green-200 bg-opacity-80 rounded-xl py-1 px-2",children:[Object(h.jsx)("div",{className:"flex flex-row justify-between",children:Object(h.jsx)("p",{className:"font-thin text-sm text-right",children:s})}),Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"text-sm",children:n})}),Object(h.jsx)("div",{className:"mx-auto text-right",children:Object(h.jsx)("span",{className:"font-thin text-xs",children:D()(D()()).isSame(a,"day")?D()(a).format("LT"):0===D()().diff(a,"days")?"Yesterday":D()().diff(a,"days")<=7?D()(a).format("ddd, h:mm"):0===D()().diff(a,"years")?D()(a).format("MMM Do"):D()(a).format("MMM Do YYYY")})})]})}):"admin"===s?Object(h.jsx)("div",{className:"font-thin text-sm text-center",children:n}):Object(h.jsx)("div",{className:"flex justify-start p-2",children:Object(h.jsxs)("div",{className:"w-5/12 bg-green-100 bg-opacity-80 rounded-xl py-1 px-2",children:[Object(h.jsx)("div",{className:"flex flex-row justify-between",children:Object(h.jsx)("p",{className:"font-thin text-sm text-left",children:s})}),Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"text-sm",children:n})}),Object(h.jsx)("div",{className:"mx-auto text-right",children:Object(h.jsx)("span",{className:"font-thin text-xs",children:D()(D()()).isSame(a,"day")?D()(a).format("LT"):0===D()().diff(a,"days")?"Yesterday":D()().diff(a,"days")<=7?D()(a).format("ddd, h:mm"):0===D()().diff(a,"years")?D()(a).format("MMM Do"):D()(a).format("MMM Do YYYY")})})]})})},J=(s(388),function(e){var t=e.messages,s=e.name;return Object(h.jsx)(k.a,{followButtonClassName:"ScrollToBottomBtn",className:"w-full h-full overflow-hidden",children:t.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsx)(E,{message:e,name:s})},t)}))})}),q=function(e){var t=e.location,s=Object(o.c)((function(e){return e.username})).username,c=Object(a.useState)(""),r=Object(f.a)(c,2),l=r[0],i=r[1],j=Object(a.useState)(""),d=Object(f.a)(j,2),u=d[0],x=d[1],m=Object(a.useState)([]),O=Object(f.a)(m,2),g=O[0],v=O[1],w="https://kinda-real-time-chat.herokuapp.com/";Object(a.useEffect)((function(){var e=y.a.parse(t.search).room;return n=N()(w,{transports:["websocket"]}),i(e),n.emit("join",{name:s,room:e},(function(){})),function(){n.disconnect(),n.off()}}),[w,t.search]),Object(a.useEffect)((function(){n.on("message",(function(e){v([].concat(Object(p.a)(g),[e]))}))}),[g]);return s?Object(h.jsx)("div",{className:"h-screen bg-green-200 flex justify-center items-center",children:Object(h.jsxs)("div",{className:"flex flex-col justify-between h-2/4 w-6/12 2xl:w-4/12 mx-auto bg-gray-200",children:[Object(h.jsx)(M,{room:l}),Object(h.jsx)(J,{messages:g,name:s,className:"h-full"}),Object(h.jsx)(Y,{message:u,setMessage:x,sendMessage:function(e){e.preventDefault(),u&&n.emit("sendMessage",u,(function(){return x("")}))}})]})}):Object(h.jsx)(b.a,{to:{pathname:"/",state:{roomName:y.a.parse(t.search).room}}})},B=function(){return Object(h.jsx)(m.a,{children:Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.b,{path:"/",exact:!0,component:O}),Object(h.jsx)(b.b,{path:"/chat",component:q})]})})};l.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(o.a,{store:x,children:Object(h.jsx)(B,{})})}),document.querySelector("#root"))}},[[389,1,2]]]);
//# sourceMappingURL=main.382145f8.chunk.js.map