(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{29:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(21),s=n.n(a),o=(n(29),n(14)),i=n(24),u=n(6),l=n.n(u),j=n(11),d=n(10),b=n(8),h=n(2),f=n(1),p=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:r,style:{backgroundColor:t},className:"btn",children:n})})};p.defaultProps={color:"steelblue"};var x=p,O=function(e){var t=e.title,n=e.onAdd,r=e.showAdd,c=Object(h.e)();return Object(f.jsx)("div",{children:Object(f.jsxs)("header",{className:"header",children:[Object(f.jsxs)("h1",{children:[" ",t," "]}),"/"===c.pathname&&Object(f.jsx)(x,{color:r?"red":"green",text:r?"Close":"Add",onClick:n})]})})};O.defaultProps={title:"Task Tracker"};var v=O,m=n(23),k=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(f.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t._id)},children:[Object(f.jsxs)("h3",{children:[t.text," ",Object(f.jsx)(m.a,{style:{color:"red"},onClick:function(){return n(t._id)}})]}),Object(f.jsx)("p",{children:t.day})]})},g=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(f.jsx)(f.Fragment,{children:t.map((function(e,t){return Object(f.jsx)(k,{task:e,onDelete:n,onToggle:r},t)}))})},y=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(d.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),i=Object(d.a)(o,2),u=i[0],l=i[1],j=Object(r.useState)(!0),b=Object(d.a)(j,2),h=b[0],p=b[1];return Object(f.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:u,reminder:h}),s(""),l(""),p(!1)):alert("Please add text")},children:[Object(f.jsxs)("div",{className:"form-control",children:[Object(f.jsx)("label",{children:"Task"}),Object(f.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(f.jsxs)("div",{className:"form-control",children:[Object(f.jsx)("label",{children:"Day & Time"}),Object(f.jsx)("input",{type:"text",placeholder:"Add Day and Time",value:u,onChange:function(e){return l(e.target.value)}})]}),Object(f.jsxs)("div",{className:"form-control form-control-check",children:[Object(f.jsx)("label",{children:"Set Reminder"}),Object(f.jsx)("input",{type:"checkbox",checked:h,value:h,onChange:function(e){return p(e.currentTarget.checked)}})]}),Object(f.jsx)("input",{className:"btn btn-block",type:"submit",value:"Save Task"})]})},T=function(){return Object(f.jsxs)("footer",{children:[Object(f.jsx)("p",{children:" Copyright \xa9 2021"}),Object(f.jsx)(b.b,{to:"/about",children:"About"})]})},w=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h4",{children:"Version 1.0.0"}),Object(f.jsx)(b.b,{to:"/",children:"Go Back"})]})};var C=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(d.a)(a,2),u=s[0],p=s[1];Object(r.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var x=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5001/api/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,console.log(typeof n),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5001/api/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5001/api/tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,p([].concat(Object(i.a)(u),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5001/api/tasks/".concat(t),{method:"DELETE"});case 2:n=e.sent,console.log(n),p(u.filter((function(e){return e._id!==t})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:return n=e.sent,r=Object(o.a)(Object(o.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("http://localhost:5001/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:a=e.sent,p(u.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{reminder:!a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(b.a,{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(v,{onAdd:function(){return c(!n)},showAdd:n,title:"Task Tracker"}),Object(f.jsx)(h.a,{path:"/",exact:!0,render:function(e){return Object(f.jsxs)(f.Fragment,{children:[n&&Object(f.jsx)(y,{onAdd:m}),u.length>0?Object(f.jsx)(g,{tasks:u,onDelete:k,onToggle:C}):"No Tasks to Show"]})}}),Object(f.jsx)(h.a,{path:"/about",component:w}),Object(f.jsx)(T,{})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(C,{})}),document.getElementById("root")),S()}},[[37,1,2]]]);
//# sourceMappingURL=main.d46696b6.chunk.js.map