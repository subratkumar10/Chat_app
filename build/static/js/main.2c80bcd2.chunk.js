(this.webpackJsonpmessanger_app=this.webpackJsonpmessanger_app||[]).push([[0],{52:function(e,s,a){},53:function(e,s,a){},62:function(e,s,a){"use strict";a.r(s);var t=a(2),c=a(19),n=a.n(c),r=a(44),i=a(33),o=(a(52),a(85)),m=a(83),l=a(82),d=a(81),p=a(84),u=a(79),j=a(80),b=(a(53),a(12)),h=Object(t.forwardRef)((function(e,s){var a=e.message,t=e.username===a.username;return Object(b.jsx)("div",{ref:s,className:"message ".concat(t&&"message_user"),children:Object(b.jsx)(p.a,{className:t?"message_usercard":"message_guestcard",children:Object(b.jsx)(u.a,{children:Object(b.jsxs)(j.a,{color:"white",variant:"h5",component:"h2",children:[!t&&"".concat(a.username,":"),"  ",a.message]})})})})})),g=a(32),f=g.a.initializeApp({apiKey:"AIzaSyDSTmB28cRy_UVLZWxHKrtClThd963DdzY",authDomain:"messanger-app-59f60.firebaseapp.com",databaseURL:"https://messanger-app-59f60-default-rtdb.firebaseio.com",projectId:"messanger-app-59f60",storageBucket:"messanger-app-59f60.appspot.com",messagingSenderId:"401770513136",appId:"1:401770513136:web:e78beb51df07a773ccb835",measurementId:"G-G9SJG22720"}).firestore(),O=a(43);var x=function(){var e=Object(t.useState)(""),s=Object(i.a)(e,2),a=s[0],c=s[1],n=Object(t.useState)([{username:"rahul",message:"hii"},{username:"rahul",message:"hii"}]),p=Object(i.a)(n,2),u=p[0],j=p[1],x=Object(t.useState)(""),v=Object(i.a)(x,2),y=v[0],w=v[1];return console.log(a),Object(t.useEffect)((function(){w(prompt("enter your name"))}),[]),Object(t.useEffect)((function(){f.collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){j(e.docs.map((function(e){return{id:e.id,message:e.data()}})))}))}),[]),console.log(u),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("img",{src:"https://www.gannett-cdn.com/presto/2020/10/11/USAT/62f94775-642e-4e4f-a130-bb855f18960f-image001.png",alt:"sry img is not available"}),Object(b.jsx)("h1",{children:"Welcome to chat world!!!!"}),Object(b.jsxs)("h2",{children:["hello ",y]})]}),Object(b.jsx)("form",{className:"app_form",children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(m.a,{htmlFor:"my-input",style:{color:"white"},placeholder:"Enter message here",children:"Enter messages"}),Object(b.jsx)(l.a,{value:a,onChange:function(e){c(e.target.value)},style:{color:"white"}}),Object(b.jsx)(d.a,{disabled:!a,variant:"contained",color:"primary",type:"submit",onClick:function(e){e.preventDefault(),f.collection("messages").add({message:a,username:y,timestamp:g.a.firestore.FieldValue.serverTimestamp()}),j([].concat(Object(r.a)(u),[{username:y,message:a}])),c("")},children:"send messages"})]})}),Object(b.jsx)(O.a,{children:u.map((function(e){var s=e.message,a=e.id;return Object(b.jsx)(h,{username:y,message:s},a)}))})]})};n.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.2c80bcd2.chunk.js.map