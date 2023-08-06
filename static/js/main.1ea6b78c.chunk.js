(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{36:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(25),a=c(8),s=(c(34),c(35),c(3)),r=(c(36),c(12)),j=c.n(r),i=c(2),l=function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},o=function(e){return{color:e.isActive?"red":""}},b=function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(a.c,{to:"/",className:l,style:o,children:"Home"}),Object(i.jsx)(a.c,{to:"people",className:l,style:o,children:"People"})]})})})},d=function(){return Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("h1",{className:"title",children:"Home Page"})})})},h=c(23),O=c(4),x=c(0),u=(c(38),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})});function m(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var p=function(e){var t=e.person;return Object(i.jsx)(a.b,{to:"../".concat(t.slug),className:j()({"has-text-danger":"f"===t.sex}),children:t.name})},f=function(e){var t=e.people,c=Object(s.q)().personSlug;return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":e.slug===c}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(p,{person:e})}),Object(i.jsx)("td",{children:e.sex}),Object(i.jsx)("td",{children:e.born}),Object(i.jsx)("td",{children:e.died}),Object(i.jsx)("td",{children:e.mother?Object(i.jsx)(p,{person:e.mother}):e.motherName||"-"}),Object(i.jsx)("td",{children:e.father?Object(i.jsx)(p,{person:e.father}):e.fatherName||"-"})]},e.slug)}))})]})},v=function(){var e=Object(x.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],a=Object(x.useState)(!1),s=Object(O.a)(a,2),r=s[0],j=s[1],l=Object(x.useState)(!1),o=Object(O.a)(l,2),b=o[0],d=o[1];function p(e,t){return t.find((function(t){return t.name===e}))}return Object(x.useState)((function(){j(!0),m().then((function(e){n(e.map((function(t){return Object(h.a)(Object(h.a)({},t),{},{mother:p(t.motherName||"",e),father:p(t.fatherName||"",e)})})))})).catch((function(){return d(!0)})).finally((function(){return j(!1)}))})),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsx)("div",{className:"box table-container",children:r?Object(i.jsx)(u,{}):Object(i.jsxs)(i.Fragment,{children:[0===c.length&&!b&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),Object(i.jsx)(f,{people:c}),b&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"})]})})})]})},N=function(){return Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("h1",{className:"title",children:"Page not found"})})})},g=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(b,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(s.d,{children:[Object(i.jsx)(s.b,{path:"/",element:Object(i.jsx)(d,{})}),Object(i.jsx)(s.b,{path:"home",element:Object(i.jsx)(s.a,{to:"/",replace:!0})}),Object(i.jsx)(s.b,{path:"people",children:Object(i.jsx)(s.b,{path:":personSlug?",element:Object(i.jsx)(v,{})})}),Object(i.jsx)(s.b,{path:"*",element:Object(i.jsx)(N,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(a.a,{children:Object(i.jsx)(g,{})}))}},[[39,1,2]]]);
//# sourceMappingURL=main.1ea6b78c.chunk.js.map