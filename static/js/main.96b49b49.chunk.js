(this.webpackJsonp2021=this.webpackJsonp2021||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(20),s=n.n(a),r=(n(28),n(29),n(9)),o=n(10),l=n(12),j=n(11),d=(n.p,n(30),n(31),n(2)),h=n(23),u=(n(32),n(0)),b=function(e){e.id;var t=e.heading,n=e.children;Object(h.a)(e,["id","heading","children"]);return Object(u.jsxs)("div",{className:"content-card",id:"$id",children:[t?Object(u.jsx)("h3",{className:"content-header",children:t}):null,Object(u.jsx)("p",{className:"content-body",children:n})]})},m=(n(34),n(7)),O=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={pages:[{id:0,title:"resume",url:"/resume",icon:"9784"},{id:3,title:"bio",url:"/bio",icon:"9778"},{id:4,title:"contact",url:"/contact",icon:"128172"}]},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"directory",children:this.state.pages.map((function(e){return Object(u.jsx)("div",{className:"directory-option",children:Object(u.jsx)(m.b,{to:e.url,children:e.title.toUpperCase()},e.id)})}))})}}]),n}(i.a.Component),p=(n(40),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={content:[{id:"1",heading:"This is a Website Built with ReactJS",inquiries:[" What will be a component?"," Will it be stateless or functional?"]},{id:"2",heading:"A React Dev decides on State",inquiries:[" What data will State represent?",' Where will State be "stored"?'," How will state be accessed?"]},{id:"3",heading:"A React Dev designs Dynamism",inquiries:["What changes when state changes?"]}]},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"homepage",children:[Object(u.jsx)("h1",{className:"welcome",children:'"Hello World"'}),Object(u.jsx)("div",{className:"content-cards",children:this.state.content.map((function(e){return Object(u.jsx)(b,{heading:e.heading,children:e.inquiries},e.id)}))})]})}}]),n}(i.a.Component)),x=(n(41),function(){return Object(u.jsxs)("div",{className:"resume-page",children:[Object(u.jsx)("h1",{children:"Resume Page"}),Object(u.jsx)(b,{id:"0",heading:"Last updated 06/2021",children:Object(u.jsx)("a",{href:"/assets/resume/resume_2021_state.pdf",children:Object(u.jsx)("img",{src:"/assets/resume/resume_2021_state1024_1.jpg"})})})]})}),g=(n(42),function(){return Object(u.jsxs)("div",{className:"biography-page",children:[Object(u.jsx)("div",{className:"bio-header",children:Object(u.jsx)("img",{class:"profile",src:"assets/profile/profile.jpg"})}),Object(u.jsxs)(b,{id:"0",heading:"Donovan Uy",children:[Object(u.jsx)("p",{children:"Born in Tampa, FL a stonethrow away from Raymond James Stadium (where the cannons sound as the Bucs play), grew up when the art classes were being cut in lieu of windows suite literacy tutorials (playing The Oregon Trail)."}),Object(u.jsx)("p",{children:"Can be found practicing geometric symmetries in a boxing gym if not servicing tables for a middle-market."}),Object(u.jsx)("p",{children:"Currently studying Project Management, and Data Science while trying to maintain a web-development skillset."})]})]})}),f=(n(43),function(){return Object(u.jsxs)("div",{className:"blog-page",children:[Object(u.jsx)("h1",{children:"Musings aplenty"}),Object(u.jsx)(b,{id:"0",heading:"A Blog powered by NextJS (or kin)",children:"How can I funnel NextJS output into this component?"})]})}),v=(n(44),function(){return Object(u.jsxs)("div",{className:"contact-page",children:[Object(u.jsx)("h1",{children:"Contact"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"mailto:donovanuy@gmaill.com",children:"Email"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://www.linkedin.com/in/donovanuy/",children:"LinkedIn"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://www.github.com/dceu/",children:"GitHub"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://www.instagram.com/donovanuy/",children:"Instagram"})})]})]})}),w=(n(45),function(){return Object(u.jsx)("div",{className:"projects-page",children:Object(u.jsx)("h1",{children:"Projects"})})}),y=(n(46),function(){return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)(m.b,{className:"home",to:"/home"})}),Object(u.jsx)(O,{}),Object(u.jsxs)("div",{className:"contact-info",children:[Object(u.jsx)("a",{href:"mailto:donovanuy@gmail.com",children:"donovanuy@gmail.com"}),Object(u.jsx)("a",{href:"https:github.com/dceu/",children:"github.com/dceu"})]})]})}),N=n(14),k=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.call(this)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"app-container",children:[Object(u.jsx)(N.Breakpoint,{small:!0,up:!0,children:Object(u.jsx)(y,{})}),Object(u.jsx)(N.Breakpoint,{medium:!0,up:!0,children:Object(u.jsx)("div",{className:"page-container",children:Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{exact:!0,path:"/home",component:p}),Object(u.jsx)(d.a,{path:"/resume",component:x}),Object(u.jsx)(d.a,{path:"/projects",component:w}),Object(u.jsx)(d.a,{path:"/blog",component:f}),Object(u.jsx)(d.a,{path:"/bio",component:g}),Object(u.jsx)(d.a,{path:"/contact",component:v})]})})})]})}}]),n}(i.a.Component);s.a.render(Object(u.jsx)(m.a,{children:Object(u.jsx)(N.BreakpointProvider,{children:Object(u.jsx)(k,{})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.96b49b49.chunk.js.map