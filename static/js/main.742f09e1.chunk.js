(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(11),r=n.n(c),o=(n(34),n(14)),l=(n(35),n(26)),s=n(69),d=n(9),u=n(73),b=n(74),h=n(68),j=n(72),p=n(65),m=n(67),f=n(75),g=n(70),O=n(71),x=n(4);function v(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function y(e,t){return"desc"===e?function(e,n){return v(e,n,t)}:function(e,n){return-v(e,n,t)}}function P(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n.map((function(e){return e[0]}))}var k=[{id:"name",numeric:!0,disablePadding:!0,label:"Name"},{id:"email",numeric:!1,disablePadding:!1,label:"Email"},{id:"phone",numeric:!1,disablePadding:!1,label:"Company Phone"},{id:"cell",numeric:!1,disablePadding:!1,label:"Cell Phone"},{id:"address",numeric:!1,disablePadding:!1,label:"Address"}];function C(e){var t=e.classes,n=e.order,a=e.orderBy,i=e.onRequestSort;return Object(x.jsx)(p.a,{children:Object(x.jsx)(m.a,{children:k.map((function(e){return Object(x.jsx)(h.a,{align:e.numeric?"left":"right",padding:e.disablePadding?"none":"default",sortDirection:a===e.id&&n,children:Object(x.jsxs)(f.a,{active:a===e.id,direction:a===e.id?n:"asc",onClick:(c=e.id,function(e){i(e,c)}),children:[e.label,a===e.id?Object(x.jsx)("span",{className:t.visuallyHidden,children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var c}))})})}var S=Object(s.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(d.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}})),w=function(e){var t=S();return Object(x.jsx)(g.a,{className:t.title,variant:"h6",id:"tableTitle",component:"div",children:"Employees"})},N=Object(s.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function E(e){var t=e.props,n=N(),c=i.a.useState("asc"),r=Object(o.a)(c,2),s=r[0],d=r[1],p=i.a.useState("name"),f=Object(o.a)(p,2),g=f[0],v=f[1],k=Object(a.useState)([]),S=Object(o.a)(k,2),E=S[0],B=S[1];return Object(a.useEffect)((function(){B([]),t.userdata.forEach((function(e){B((function(t){return[].concat(Object(l.a)(t),[(n=e.name.title+" "+e.name.first+" "+e.name.last,a=e.email,i=e.phone,c=e.cell,r=e.location.street.number+" "+e.location.street.name+" "+e.location.city+" "+e.location.state+" "+e.location.postcode,{name:n,email:a,phone:i,cell:c,address:r})]);var n,a,i,c,r}))}))}),[t.userdata]),Object(x.jsx)("div",{className:n.root,children:Object(x.jsxs)(O.a,{className:n.paper,children:[Object(x.jsx)(w,{}),Object(x.jsx)(j.a,{children:Object(x.jsxs)(u.a,{className:n.table,"aria-labelledby":"tableTitle",size:"medium","aria-label":"enhanced table",children:[Object(x.jsx)(C,{classes:n,order:s,orderBy:g,onRequestSort:function(e,t){d(g===t&&"asc"===s?"desc":"asc"),v(t)}}),Object(x.jsx)(b.a,{children:P(E,y(s,g)).map((function(e,t){var n="enhanced-table-checkbox-".concat(t);return Object(x.jsxs)(m.a,{hover:!0,role:"checkbox",tabIndex:-1,children:[Object(x.jsx)(h.a,{component:"th",id:n+t,scope:"row",padding:"none",children:e.name}),Object(x.jsx)(h.a,{align:"right",children:e.email}),Object(x.jsx)(h.a,{align:"right",children:e.phone}),Object(x.jsx)(h.a,{align:"right",children:e.cell}),Object(x.jsx)(h.a,{align:"right",children:e.address})]},e.name+t)}))})]})})]})})}var B=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){fetch("https://randomuser.me/api/?format=json&results=10").then((function(e){return e.json()})).then((function(e){i(e.results)})).catch((function(e){return console.err}))}),[]),Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(E,{props:{userdata:n}})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(B,{})}),document.getElementById("root")),F()}},[[41,1,2]]]);
//# sourceMappingURL=main.742f09e1.chunk.js.map