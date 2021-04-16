(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{29:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(21),s=n.n(a),o=(n(29),n(14)),i=n(24),u=n(6),j=n.n(u),l=n(11),d=n(10),b=n(8),f=n(2),h=n(1),p=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:r,style:{backgroundColor:t},className:"btn",children:n})})};p.defaultProps={color:"steelblue"};var x=p,O=function(e){var t=e.title,n=e.onAdd,r=e.showAdd,c=Object(f.e)();return Object(h.jsx)("div",{children:Object(h.jsxs)("header",{className:"header",children:[Object(h.jsxs)("h1",{children:[" ",t," "]}),"/"===c.pathname&&Object(h.jsx)(x,{color:r?"red":"green",text:r?"Close":"Add",onClick:n})]})})};O.defaultProps={title:"Task Tracker"};var v=O,m=n(23),k=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(h.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t._id)},children:[Object(h.jsxs)("h3",{children:[t.text," ",Object(h.jsx)(m.a,{style:{color:"red"},onClick:function(){return n(t._id)}})]}),Object(h.jsx)("p",{children:t.day})]})},g=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(h.jsx)(h.Fragment,{children:t.map((function(e,t){return Object(h.jsx)(k,{task:e,onDelete:n,onToggle:r},t)}))})},y=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(d.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),i=Object(d.a)(o,2),u=i[0],j=i[1],l=Object(r.useState)(!0),b=Object(d.a)(l,2),f=b[0],p=b[1];return Object(h.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:u,reminder:f}),s(""),j(""),p(!1)):alert("Please add text")},children:[Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Task"}),Object(h.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Day & Time"}),Object(h.jsx)("input",{type:"text",placeholder:"Add Day and Time",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control form-control-check",children:[Object(h.jsx)("label",{children:"Set Reminder"}),Object(h.jsx)("input",{type:"checkbox",checked:f,value:f,onChange:function(e){return p(e.currentTarget.checked)}})]}),Object(h.jsx)("input",{className:"btn btn-block",type:"submit",value:"Save Task"})]})},T=function(){return Object(h.jsxs)("footer",{children:[Object(h.jsx)("p",{children:" Copyright \xa9 2021"}),Object(h.jsx)(b.b,{to:"/about",children:"About"})]})},w=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{children:"Version 1.0.0"}),Object(h.jsx)(b.b,{to:"/",children:"Go Back"})]})};var C=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(d.a)(a,2),u=s[0],p=s[1];Object(r.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var x=function(){var e=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,console.log(typeof n),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,p([].concat(Object(i.a)(u),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/tasks/".concat(t),{method:"DELETE"});case 2:n=e.sent,console.log(n),p(u.filter((function(e){return e._id!==t})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,r,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:return n=e.sent,r=Object(o.a)(Object(o.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("/api/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:a=e.sent,p(u.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{reminder:!a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(b.a,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(v,{onAdd:function(){return c(!n)},showAdd:n,title:"Task Tracker"}),Object(h.jsx)(f.a,{path:"/",exact:!0,render:function(e){return Object(h.jsxs)(h.Fragment,{children:[n&&Object(h.jsx)(y,{onAdd:m}),u.length>0?Object(h.jsx)(g,{tasks:u,onDelete:k,onToggle:C}):"No Tasks to Show"]})}}),Object(h.jsx)(f.a,{path:"/about",component:w}),Object(h.jsx)(T,{})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root")),S()}},[[37,1,2]]]);
//# sourceMappingURL=main.b54324c6.chunk.js.map