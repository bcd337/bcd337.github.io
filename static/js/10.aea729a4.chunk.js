"use strict";(self.webpackChunkanime=self.webpackChunkanime||[]).push([[10],{6004:function(n,e,t){t.d(e,{Z:function(){return o}});var r,i=t(168),o=t(5838).Z.div(r||(r=(0,i.Z)(["\n  flex: 1 1 auto;\n"])))},4069:function(n,e,t){t.d(e,{ZP:function(){return m}});var r,i,o,a=t(885),c=t(2791),u=t(168),l=t(5838),d=l.Z.div(r||(r=(0,u.Z)(["\n  background: linear-gradient(180deg, var(--light) 40%, var(--shadow-dark));\n"]))),s=l.Z.img(i||(i=(0,u.Z)(["\n  object-fit: cover;\n  background: linear-gradient(180deg, var(--light) 40%, var(--shadow-dark));\n  opacity: ",";\n  height: 100%;\n  width: 100%;\n"])),(function(n){return n.load?1:0})),f=(l.Z.div(o||(o=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color);\n  background: linear-gradient(180deg, var(--light) 40%, var(--shadow-dark));\n"]))),t(184)),m=function(n){var e=n.alt,t=n.src,r=n.className,i=(0,c.useState)(!1),o=(0,a.Z)(i,2),u=o[0],l=o[1],m=(0,c.useState)(!1),h=(0,a.Z)(m,2),p=(h[0],h[1]);return(0,f.jsx)(d,{className:r,children:(0,f.jsx)(s,{onLoad:function(){l(!0)},onError:function(){p(!0)},alt:e,src:t,load:u})})}},9538:function(n,e,t){t.d(e,{Z:function(){return c}});var r,i=t(168),o=t(5838),a=t(3504),c=(0,o.Z)(a.rU)(r||(r=(0,i.Z)(["\n  text-decoration: none;\n"])))},746:function(n,e,t){t.d(e,{Z:function(){return u}});t(2791);var r,i=t(6907),o=t(168),a=t(5838).Z.div(r||(r=(0,o.Z)(["\n  padding-top: 1.5rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  isolation: isolate;\n  display: flex;\n  flex-flow: column;\n  gap: 1.5rem;\n  flex: 1 1 auto;\n  max-width: 90rem;\n  width: 100vw;\n  margin: auto;\n"]))),c=t(184),u=function(n){var e=n.children,t=n.title;return(0,c.jsxs)(a,{children:[(0,c.jsxs)(i.ql,{children:[(0,c.jsx)("title",{children:t}),(0,c.jsx)("meta",{name:"description",content:t})]}),e]})}},8233:function(n,e,t){t.d(e,{Z:function(){return c}});t(2791);var r,i=t(168),o=t(5838).Z.h1(r||(r=(0,i.Z)(["\n  font-size: 3.2rem;\n  margin: 0;\n"]))),a=t(184),c=function(n){var e=n.children;return(0,a.jsx)(o,{children:e})}},7915:function(n,e,t){t.d(e,{C5:function(){return h},Cf:function(){return p},Hc:function(){return f},Kx:function(){return v},LU:function(){return m},Vu:function(){return Z},dU:function(){return d},f7:function(){return s},wR:function(){return g},xE:function(){return x}});var r=t(1413),i=t(2982),o=t(3272),a=t(9919),c="MediaCollection",u=(0,o.QS)(function(){var n=localStorage.getItem(c);if(n){var e=JSON.parse(n);if(e)return e}return[]}()),l=function(n){localStorage.setItem(c,JSON.stringify(n)),u(n)},d=function(n,e){var t=u();if(!(t.findIndex((function(e){return n===e.name}))>=0))return l([].concat((0,i.Z)(t),[{name:n,media:[e],lastUsed:!0}]));var o=u().map((function(t){return t.name!==n?(0,r.Z)((0,r.Z)({},t),{},{lastUsed:!1}):(0,r.Z)((0,r.Z)({},t),{},{lastUsed:!0,media:[].concat((0,i.Z)(t.media),[e])})}));return l(o)},s=function(n,e){var t=u().map((function(t){return t.name!==n?t:(0,r.Z)((0,r.Z)({},t),{},{media:t.media.filter((function(n){return n.id!==e}))})}));l(t)},f=function(n){return l([].concat((0,i.Z)(u()),[{name:n,media:[],lastUsed:!1}]))},m=function(n,e){return!(u().findIndex((function(n){return n.name===e}))>=0)&&l(u().map((function(t){return t.name!==n?t:(0,r.Z)((0,r.Z)({},t),{},{name:e})})))},h=function(n){return l(u().filter((function(e){return e.name!==n})))},p=function(){return(0,a.l)(u).map((function(n){return n.name}))},x=function(n){var e=(0,a.l)(u).find((function(e){return e.name===n}));return(null===e||void 0===e?void 0:e.media)||[]},Z=function(n){return(0,a.l)(u).filter((function(e){return e.media.findIndex((function(e){return e.id===n}))>=0})).map((function(n){return n.name}))},v=function(){return(0,a.l)(u)},g=function(n){return u().findIndex((function(e){return e.name===n}))>=0}},1933:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(7889),i=t(7915),o=t(184),a=function(){return r.Z.fire({title:(0,o.jsx)("p",{children:"Please Input Collection Name:"}),input:"text",inputPlaceholder:"Enter Collection Name",inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Save",inputValidator:function(n){return n?(0,i.wR)(n)?"".concat(n," has been used"):null:"Must not empty"}}).then((function(n){return String(n.value||"")}))}},7889:function(n,e,t){var r=t(1830),i=t.n(r),o=t(8086),a=t.n(o)()(i());e.Z=a},7010:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r,i,o,a,c,u,l,d,s,f,m,h=t(4165),p=t(5861),x=t(6004),Z=t(746),v=t(8233),g=t(1933),j=t(7915),w=t(7889),b=t(8174),k=t(9538),y=t(168),C=t(5838),N=t(4069),S=C.Z.div(r||(r=(0,y.Z)(["\n  width: 100%;\n  gap: 1rem;\n  display: flex;\n  position: relative;\n  text-decoration: none;\n  flex-flow: row;\n"]))),I=C.Z.div(i||(i=(0,y.Z)(["\n  background-color: white;\n  border-radius: 0.5rem;\n  overflow: hidden;\n  position: relative;\n  width: 10rem;\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));\n"]))),U=C.Z.div(o||(o=(0,y.Z)(["\n  background: white;\n  flex: 1 1 auto;\n  border-radius: 0.5rem;\n  padding: 1rem;\n  display: flex;\n  flex-flow: column;\n  gap: 1rem;\n  justify-content: space-between;\n"]))),A=C.Z.div(a||(a=(0,y.Z)(["\n  display: flex;\n  flex-flow: column;\n  gap: 1rem;\n"]))),B=C.Z.div(c||(c=(0,y.Z)(["\n  width: 100%;\n  height: 2.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--background-color);\n  border-radius: 0.4rem;\n  cursor: pointer;\n"]))),L=(0,C.Z)(N.ZP)(u||(u=(0,y.Z)(["\n  min-width: 50%;\n  min-height: 50%;\n  color: transparent;\n  background: transparent;\n  display: inline-block;\n"]))),E=C.Z.div(l||(l=(0,y.Z)(["\n  min-width: 50%;\n  min-height: 50%;\n  color: transparent;\n  background: ",";\n  display: inline-block;\n"])),(function(n){return n.color||"transparent"})),P=C.Z.table(d||(d=(0,y.Z)(["\n\n  td {\n    padding: 0.5rem;\n\n    &:first-of-type {\n      padding-left: 0;\n    }\n  }\n"]))),z=t(184),R=function(n){var e=n.name,t=n.media,r=n.className,i=function(){var n=(0,p.Z)((0,h.Z)().mark((function n(){var t;return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,(0,g.Z)();case 4:if(t=n.sent){n.next=7;break}return n.abrupt("return");case 7:(0,j.LU)(e,t);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,p.Z)((0,h.Z)().mark((function n(){return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:w.Z.fire({text:'Are you sure want to remove "'.concat(e,'" collection?'),icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){n.isConfirmed&&(b.Am.info('"'.concat(e,'" collection has been remove')),(0,j.C5)(e))}));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,z.jsxs)(S,{className:r,children:[(0,z.jsx)(k.Z,{to:"/collection/".concat(e),children:(0,z.jsx)(I,{children:t.slice(0,4).map((function(n){var e=n.title,t=n.coverImage,r=n.id,i=e?e.romaji||e.english||e.native:"",o=t.medium||t.large||t.extraLarge;return o?(0,z.jsx)(L,{src:o,alt:i},r):(0,z.jsx)(E,{color:t.color})}))})}),(0,z.jsxs)(U,{children:[(0,z.jsx)("div",{children:(0,z.jsx)(P,{children:(0,z.jsxs)("tbody",{children:[(0,z.jsxs)("tr",{children:[(0,z.jsx)("td",{children:"Name"}),(0,z.jsx)("td",{children:":"}),(0,z.jsx)("td",{children:e})]}),(0,z.jsxs)("tr",{children:[(0,z.jsx)("td",{children:"Anime"}),(0,z.jsx)("td",{children:":"}),(0,z.jsx)("td",{children:t.length})]})]})})}),(0,z.jsxs)(A,{children:[(0,z.jsx)(B,{onClick:i,children:"Edit Collection Name"}),(0,z.jsx)(B,{onClick:o,children:"Remove Collection"})]})]})]})},H=C.Z.div(s||(s=(0,y.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  white-space: nowrap;\n  flex-flow: column;\n"]))),J=C.Z.div(f||(f=(0,y.Z)(["\n  font-size: 1rem;\n  border: none;\n  background: white;\n  border-radius: 0.4rem;\n  height: 2.75rem;\n  padding: 0 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n"]))),K=C.Z.div(m||(m=(0,y.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill,minmax(25rem,1fr));\n  justify-content: center;\n  gap: 1.5rem;\n  padding-bottom: 1.5rem;\n"]))),M=function(){var n=(0,j.Kx)(),e=function(){var n=(0,p.Z)((0,h.Z)().mark((function n(){var e;return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,g.Z)();case 2:if(e=n.sent){n.next=5;break}return n.abrupt("return");case 5:(0,j.Hc)(e);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,z.jsxs)(Z.Z,{title:"Anime Collection - Collection List",children:[(0,z.jsxs)(H,{children:[(0,z.jsx)(v.Z,{children:"Collection List"}),(0,z.jsx)(J,{onClick:e,children:"Add Collection"})]}),(0,z.jsx)(x.Z,{children:(0,z.jsx)(K,{children:n.map((function(n){var e=n.name,t=n.media;return(0,z.jsx)(R,{name:e,media:t},e)}))})})]})}}}]);
//# sourceMappingURL=10.aea729a4.chunk.js.map