(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(18),o=n.n(s),i=(n(25),n(11)),l=n(20),r=(n(26),n(8)),d=n(0);function b(e){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(r.b,{className:"navbar-brand",to:"/",children:e.title}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(d.jsxs)("ul",{className:"navbar-nav",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.b,{className:"nav-link",to:"/about",children:"About"})})]})})]})})}b.defaultProps={title:"Your title here"};var j=function(e){var t=e.Todo,n=e.onDelete;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:t.title}),Object(d.jsx)("p",{children:t.decp}),Object(d.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){return n(t)},children:"Delete"})]}),Object(d.jsx)("hr",{})]})},u=function(e){return Object(d.jsxs)("div",{className:"container ",style:{minHeight:"70vh",margin:"40px auto"},children:[Object(d.jsx)("h3",{className:"my-3",children:"Todos List"}),0===e.todos.length?"No Todos to display":e.todos.map((function(t){return Object(d.jsx)(j,{Todo:t,onDelete:e.onDelete},t.sno)}))]})},m=function(){return Object(d.jsx)("footer",{className:"bg-dark text-light py-3",children:Object(d.jsx)("p",{className:"text-center",children:"Copyright \xa9 TodosList.com"})})},h=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),r=l[0],b=l[1];return Object(d.jsxs)("div",{className:"container my-3",children:[Object(d.jsx)("h3",{children:"Add a Todo"}),Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c&&r?(e.addTodo(c,r),s(""),b("")):alert("Title or Description can not be blank")},children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"title",className:"form-label",children:"Todo Title"}),Object(d.jsx)("input",{type:"text",value:c,onChange:function(e){s(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp"})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"decp",className:"form-label",children:"Todo description"}),Object(d.jsx)("input",{type:"text",value:r,onChange:function(e){b(e.target.value)},className:"form-control",id:"decp"})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-success btn-sm",children:"Submit"})]})]})},x=function(){return Object(d.jsxs)("div",{children:["This is a about page",Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nisi et minima suscipit, iste ex reiciendis consequatur voluptatum expedita, eos doloremque voluptas dignissimos delectus non voluptates nulla quia eum. Blanditiis?"})]})},O=n(2);var g=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){console.log("I am delete",e),j(o.filter((function(t){return t!==e}))),localStorage.setItem("todos",JSON.stringify(o))},n=function(e,t){console.log("todo added",e,t);var n={sno:0===o.length?0:o[o.length-1].sno+1,title:e,decp:t};j([].concat(Object(l.a)(o),[n])),console.log(n)},c=Object(a.useState)(e),s=Object(i.a)(c,2),o=s[0],j=s[1];return Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)(b,{title:"My Todos list"}),Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{exact:!0,path:"/",render:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{addTodo:n}),Object(d.jsx)(u,{todos:o,onDelete:t})]})}}),Object(d.jsx)(O.a,{exact:!0,path:"/about",children:Object(d.jsx)(x,{})})]}),Object(d.jsx)(m,{})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),p()}},[[33,1,2]]]);
//# sourceMappingURL=main.b7d4d7dc.chunk.js.map