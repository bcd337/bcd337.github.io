"use strict";(self.webpackChunkanime=self.webpackChunkanime||[]).push([[814],{399:function(n,e,r){r.d(e,{ZP:function(){return w}});var t,i,o,a,s,l,c,d,u=r(168),m=r(5838),h=r(9777),g=(0,m.Z)(h.CC)(t||(t=(0,u.Z)([""]))),x=(0,m.Z)(h.CC)(i||(i=(0,u.Z)(["\n  transform: rotate(180deg);\n"]))),f=(0,m.Z)(h.CC)(o||(o=(0,u.Z)(["\n  transform: rotate(90deg);\n"]))),j=(0,m.Z)(h.CC)(a||(a=(0,u.Z)(["\n  transform: rotate(-90deg);\n"]))),p=(0,m.Z)(h.Tp)(s||(s=(0,u.Z)([""]))),Z=(0,m.Z)(h.Tp)(l||(l=(0,u.Z)(["\n  transform: rotate(180deg);\n"]))),v=(0,m.Z)(h.Tp)(c||(c=(0,u.Z)(["\n  transform: rotate(90deg);\n"]))),b=(0,m.Z)(h.Tp)(d||(d=(0,u.Z)(["\n  transform: rotate(-90deg);\n"]))),y=r(184),w=function(n){var e=n.direction,r=n.className,t=n.tail,i=void 0===t||t;switch(e){case"left":default:return i?(0,y.jsx)(g,{className:r}):(0,y.jsx)(p,{className:r});case"right":return i?(0,y.jsx)(x,{className:r}):(0,y.jsx)(Z,{className:r});case"top":return i?(0,y.jsx)(f,{className:r}):(0,y.jsx)(v,{className:r});case"bottom":return i?(0,y.jsx)(j,{className:r}):(0,y.jsx)(b,{className:r})}}},701:function(n,e,r){r.d(e,{Z:function(){return s}});r(2791);var t,i=r(168),o=r(5838).Z.button(t||(t=(0,i.Z)(["\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--light);\n  border-radius: 50%;\n  height: 2.75rem;\n  width: 2.75rem;\n  font-size: 1.5rem;\n  --color: var(--dark);\n"]))),a=r(184),s=function(n){var e=n.className,r=n.children,t=n.onClick,i=n.title;return(0,a.jsx)(o,{className:e,onClick:t,title:i,children:r})}},6814:function(n,e,r){r.r(e),r.d(e,{default:function(){return Ln}});var t,i,o,a,s,l,c,d,u,m,h,g,x,f,j,p,Z,v,b,y,w,N,C,k,S,E,I=r(1413),A=r(168),D=r(7570),M=r(3173),L=(0,D.Ps)(t||(t=(0,A.Z)(["\n  query GetAnimeDetail($id: Int) {\n    Media (id: $id) {\n      id \n      coverImage {\n        extraLarge\n        large\n        medium\n        color\n      }\n      bannerImage\n      description\n      title {\n        romaji\n        native\n        english\n      }\n      episodes\n      genres\n      popularity\n      averageScore\n      duration\n      format\n      status\n      season\n      seasonYear\n      studios(isMain: true) {\n        nodes {\n          id\n          name\n        }\n      }\n      startDate {\n        year\n        month\n        day\n      }\n      endDate {\n        year\n        month\n        day\n      }\n      seasonYear\n    }\n  }\n"]))),T=r(746),z=r(4165),P=r(5861),F=r(7915),J=r(8407),O=r(9777),R=r(5838),G=r(5399),H=r(4069),U=(0,R.Z)(H.ZP)(i||(i=(0,A.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),Y=r(184),_=function(n){var e=n.src,r=n.className;return(0,Y.jsx)(U,{src:e,className:r})},V=R.Z.button(o||(o=(0,A.Z)(["\n  cursor: pointer;\n  background-color: var(--primary);\n  border-radius: 0.5rem;\n  border: 1px solid var(--primary);\n  height: 2.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--light);\n  padding: 0 1rem;\n"]))),W=(0,R.Z)(G.ZP)(a||(a=(0,A.Z)(["\n  width: 8rem;\n  display: block;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n"]))),$=R.Z.div(s||(s=(0,A.Z)(["\n  position: relative;\n  display: flex;\n  flex-flow: column;\n  margin: -1.5rem -1.5rem 0 -1.5rem;\n  background-color: var(--light);\n"]))),q=(0,R.Z)(_)(l||(l=(0,A.Z)(["\n  height: 50vw;\n  width: 100%;\n  max-height: 25vh;\n"]))),B=(0,R.Z)(V)(c||(c=(0,A.Z)(["\n  width: 100%;\n"]))),K=R.Z.div(d||(d=(0,A.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 9.5rem;\n  flex: 1 1 auto;\n  cursor: pointer;\n  gap: 1rem;\n"]))),Q=R.Z.div(u||(u=(0,A.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  margin: 1rem 1.5rem 1.5rem 1.5rem;\n"]))),X=R.Z.span(m||(m=(0,A.Z)(["\n  margin: 0 1.5rem 1.5rem 1.5rem;\n  font-size: large;\n  font-weight: bold;\n"]))),nn=R.Z.div(h||(h=(0,A.Z)(["\n  height: 2.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.75rem;\n  background: ",";\n  border-radius: 0.4rem;\n  flex: 0 0 auto;\n  color: var(--light);\n"])),(function(n){return n.isLove?"red":"#999"})),en=function(n){var e=n.src,r=n.image,t=n.title,i=n.id,o=(0,F.Vu)(i),a=t?t.romaji||t.english||t.native:"",s=function(){var n=(0,P.Z)((0,z.Z)().mark((function n(e){return(0,z.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.next=3,(0,J.Z)(i,{id:i,coverImage:r,title:t});case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=0===o.length?"Add to Collection":"Manage Collection";return(0,Y.jsxs)($,{children:[(0,Y.jsx)(q,{src:e}),(0,Y.jsxs)(Q,{children:[(0,Y.jsx)(W,{image:r}),(0,Y.jsxs)(K,{onClick:s,children:[(0,Y.jsx)(B,{children:l}),(0,Y.jsx)(nn,{isLove:o.length>0,children:(0,Y.jsx)(O.AU,{})})]})]}),(0,Y.jsx)(X,{children:a})]})},rn=r(399),tn=r(6871),on=(r(2791),r(8703)),an=r.n(on)()(window),sn=R.Z.div(g||(g=(0,A.Z)(["\n  width: 100%;\n  flex: 1 1 auto;\n  font-size: 1.1rem;\n"]))),ln=R.Z.div(x||(x=(0,A.Z)(["\n  background-color: var(--light);\n  border-radius: 0.4rem;\n  padding: 1.5rem;\n  text-align: justify;\n"]))),cn=R.Z.div(f||(f=(0,A.Z)(["\n  font-weight: bold;\n  margin-bottom: 1.5rem;\n"]))),dn=function(n){var e=n.desc;return(0,Y.jsxs)(sn,{children:[(0,Y.jsx)(cn,{children:"Description"}),(0,Y.jsx)(ln,{dangerouslySetInnerHTML:{__html:an.sanitize(e)}})]})},un=r(9538),mn=(0,R.Z)(un.Z)(j||(j=(0,A.Z)(["\n  display: flex;\n  padding: 0.5rem 1rem;\n  border-radius: 0.4rem;\n  background: ",";\n  color: var(--light);\n  flex: 0 0 fit-content;\n"])),(function(n){return n.color})),hn=function(n){var e=n.name,r=n.color;return(0,Y.jsx)(mn,{to:"/collection/".concat(e),color:r,children:e})},gn=function(n,e){for(var r=e/100,t=1;t<n.length-1&&!(r<n[t].percentage);)t+=1;var i=n[t-1],o=n[t],a=o.percentage-i.percentage,s=(r-i.percentage)/a,l=1-s,c=s,d={r:Math.floor(i.color.r*l+o.color.r*c),g:Math.floor(i.color.g*l+o.color.g*c),b:Math.floor(i.color.b*l+o.color.b*c)};return"rgb(".concat([d.r,d.g,d.b].join(","),")")},xn=R.Z.div(p||(p=(0,A.Z)(["\n  width: 100%;\n  flex: 1 1 auto;\n  font-size: 1.1rem;\n"]))),fn=R.Z.div(Z||(Z=(0,A.Z)(["\n  background-color: var(--light);\n  border-radius: 0.4rem;\n  padding: 1.5rem;\n  text-align: justify;\n  display: flex;\n  gap: 1rem;\n  padding: 1.5rem;\n  flex-flow: row;\n  overflow-x: auto;\n  overflow-y: hidden;\n"]))),jn=R.Z.div(v||(v=(0,A.Z)(["\n  font-weight: bold;\n  margin-bottom: 1.5rem;\n"]))),pn=[{percentage:0,color:{r:61,g:180,b:242}},{percentage:.5,color:{r:61,g:242,b:81}},{percentage:1,color:{r:242,g:61,b:61}}],Zn=function(n){var e=n.id,r=(0,F.Vu)(e);return 0===r.length?null:(0,Y.jsxs)(xn,{children:[(0,Y.jsx)(jn,{children:"Collection Info"}),(0,Y.jsx)(fn,{children:r.map((function(n,e,r){return(0,Y.jsx)(hn,{name:n,color:gn(pn,(e+1)/r.length*100)},n)}))})]})},vn=JSON.parse('{"j":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}'),bn=JSON.parse('{"FINISHED":"Finished","RELEASING":"Releasing","NOT_YET_RELEASED":"Not yet released","CANCELLED":"Canceled","HIATUS":"Hiatus"}'),yn=JSON.parse('{"WINTER":"Winter","SPRING":"Spring","SUMMER":"Summer","FALL":"Fall"}'),wn=R.Z.div(b||(b=(0,A.Z)(["\n  width: 100%;\n  flex: 1 1 auto;\n  font-size: 1.1rem;\n"]))),Nn=R.Z.div(y||(y=(0,A.Z)(["\n  background-color: var(--light);\n  border-radius: 0.4rem;\n  padding: 1.5rem;\n  text-align: justify;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-content: space-around;\n  gap: 1rem;\n"]))),Cn=R.Z.div(w||(w=(0,A.Z)(["\n  font-weight: bold;\n  margin-bottom: 1.5rem;\n"]))),kn=R.Z.div(N||(N=(0,A.Z)(["\n  display: flex;\n  gap: 0.5rem;\n  flex-flow: column;\n\n  &:last-of-type {\n    grid-column-start: 1;\n    grid-column-end: 3;\n  }\n"]))),Sn=R.Z.div(C||(C=(0,A.Z)(["\n  color: var(--color-light);\n"]))),En=R.Z.div(k||(k=(0,A.Z)(["\n  \n"]))),In=function(n){var e=n.episodes,r=n.format,t=n.duration,i=n.status,o=n.startDate,a=n.endDate,s=n.season,l=n.seasonYear,c=n.averageScore,d=n.popularity,u=n.studios,m=n.genres;return(0,Y.jsxs)(wn,{children:[(0,Y.jsx)(Cn,{children:"Anime Info"}),(0,Y.jsxs)(Nn,{children:[(0,Y.jsxs)(kn,{children:[(0,Y.jsx)(Sn,{children:"Format"}),(0,Y.jsx)(En,{children:r})]}),(0,Y.jsxs)(kn,{children:[(0,Y.jsx)(Sn,{children:"Episodes"}),(0,Y.jsx)(En,{children:e})]}),(0,Y.jsxs)(kn,{children:[(0,Y.jsx)(Sn,{children:"Episodes Duration"}),(0,Y.jsxs)(En,{children:[t," mins"]})]}),(0,Y.jsxs)(kn,{children:[(0,Y.jsx)(Sn,{children:"Status"}),(0,Y.jsx)(En,{children:bn[i]})]}),(0,Y.jsxs)(kn,{children:[(0,Y.jsx)(Sn,{children:"Start Date"}),(0,Y.jsx)(En,{children:"".concat(vn.j[o.month]," ").concat(o.day,", ").concat(o.year)})]}),(0,Y.jsxs)(kn,{children:[(0,Y.jsx)(Sn,{children:"End Date"}),(0,Y.jsx)(En,{children:"".concat(vn.j[a.month]," ").concat(a.day,", ").concat(a.year)})]}),(0,Y.jsxs)(kn,{children:[(0,Y.jsx)(Sn,{children:"Season"}),(0,Y.jsx)(En,{children:"".concat(yn[s]," ").concat(l)})]}),(0,Y.jsxs)(kn,{children:[(0,Y.jsx)(Sn,{children:"Average Score"}),(0,Y.jsx)(En,{children:"".concat(c||0,"%")})]}),(0,Y.jsxs)(kn,{children:[(0,Y.jsx)(Sn,{children:"Popularity"}),(0,Y.jsx)(En,{children:d})]}),(0,Y.jsxs)(kn,{children:[(0,Y.jsx)(Sn,{children:"Studios"}),(0,Y.jsx)(En,{children:u.nodes.map((function(n){return n.name})).join(", ")})]}),(0,Y.jsxs)(kn,{children:[(0,Y.jsx)(Sn,{children:"Genres"}),(0,Y.jsx)(En,{children:m.join(", ")})]})]})]})},An=r(701),Dn=(0,R.Z)(An.Z)(S||(S=(0,A.Z)(["\n  position: absolute;\n  z-index: 10;\n"]))),Mn=R.Z.div(E||(E=(0,A.Z)(["\n  display: flex;\n  flex-flow: column;\n  gap: 1.5rem;\n  padding-bottom: 1.5rem;\n"]))),Ln=function(){var n=(0,tn.s0)(),e=(0,tn.UO)().id,r=function(n){return(0,M.a)(L,{variables:{id:n}})}(Number(e)),t=r.loading,i=r.error,o=r.data;if(t)return(0,Y.jsx)("p",{children:"Loading..."});if(i)return(0,Y.jsx)("p",{children:"Error :("});if(!o)return(0,Y.jsx)("p",{children:"Error : data not found("});var a=null===o||void 0===o?void 0:o.Media,s=a.title,l=a.bannerImage,c=a.coverImage,d=a.description,u=s?s.romaji||s.english||s.native:"Anime";return(0,Y.jsxs)(T.Z,{title:"Anime Collection - ".concat(u),children:[(0,Y.jsx)(Dn,{onClick:function(){return n(-1)},children:(0,Y.jsx)(rn.ZP,{})}),(0,Y.jsx)(en,{id:Number(e),src:l,image:c,title:s}),(0,Y.jsxs)(Mn,{children:[(0,Y.jsx)(Zn,{id:Number(e)}),(0,Y.jsx)(In,(0,I.Z)({},null===o||void 0===o?void 0:o.Media)),(0,Y.jsx)(dn,{desc:d})]})]})}}}]);
//# sourceMappingURL=814.eb1877d1.chunk.js.map