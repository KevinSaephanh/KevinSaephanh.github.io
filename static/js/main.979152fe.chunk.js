(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/me.6eeb72b9.jpg"},,,,function(e,a,t){e.exports=t.p+"static/media/algoProToday.314a0b2a.png"},,,function(e){e.exports=JSON.parse('{"navs":[{"icon":"fa fa-home","title":"Home","id":"home-link","link":"/dev"},{"icon":"fa fa-user","title":"About","id":"about-link","link":"/dev/about"},{"icon":"fa fa-code","title":"Work","id":"work-link","link":"/dev/work"},{"icon":"fa fa-envelope","title":"Contact","id":"contact-link","link":"/dev/contact"}]}')},function(e){e.exports=JSON.parse('{"skills":[{"tech":"Java","proficiency":80},{"tech":"JavaScript","proficiency":80},{"tech":"Spring Boot","proficiency":70},{"tech":"Node.js","proficiency":50},{"tech":"React","proficiency":70},{"tech":"Angular","proficiency":50},{"tech":"AWS","proficiency":40}]}')},function(e){e.exports=JSON.parse('{"projs":[{"pic":"pathfinder.png","title":"Pathfinder","stack":[{"name":"React"},{"name":"JavaScript"}],"link":"https://kevinsaephanh.github.io/Pathfinder/"},{"pic":"sortVisualizer.png","title":"Sort Visualizer","stack":[{"name":"React"},{"name":"TypeScript"}],"link":"https://kevinsaephanh.github.io/Sort_Visualizer/"},{"pic":"algoProToday.png","title":"AlgoProToday","stack":[{"name":"NodeJS"},{"name":"React"},{"name":"MongoDB"},{"name":"ExpressJS"},{"name":"JavaScript"}],"link":"https://algopt.herokuapp.com/"},{"pic":"quizme.png","title":"QuizMe","stack":[{"name":"Django"},{"name":"React"},{"name":"PostgreSQL"},{"name":"JavaScript"},{"name":"Python"}],"link":"https://hiquizme.herokuapp.com/"}]}')},,,function(e){e.exports=JSON.parse('{"socials":[{"icon":"fa fa-linkedin-square","title":"LinkedIn","link":"/home"},{"icon":"fa fa-github-square","title":"Github","link":"/home"},{"icon":"fa fa-facebook-official","title":"Facebook","link":"/home"}]}')},function(e,a,t){e.exports=t(45)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){var n={"./algoProToday.png":14,"./me.jpg":10,"./pathfinder.png":33,"./quizme.png":34,"./sortVisualizer.png":35};function c(e){var a=i(e);return t(a)}function i(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=i,e.exports=c,c.id=32},function(e,a,t){e.exports=t.p+"static/media/pathfinder.6e34b7a6.png"},function(e,a,t){e.exports=t.p+"static/media/quizme.a6f971b1.png"},function(e,a,t){e.exports=t.p+"static/media/sortVisualizer.a8bde66c.png"},function(e,a,t){},,,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(16),l=t.n(i),r=t(6),o=function(e){var a=c.a.useRef();return c.a.useEffect((function(){a.current=e})),a.current},m=t(17),s=(t(28),function(e){var a=e.currentPage,t=(e.handleNavClick,c.a.useState(!1)),n=Object(r.a)(t,2);n[0],n[1],o(a);return c.a.createElement("header",null,c.a.createElement("a",{href:"/"},c.a.createElement("div",{className:"tonberry"},c.a.createElement("div",{className:"eye eye1"}),c.a.createElement("div",{className:"eye eye2"}))),c.a.createElement("ul",null,m.navs.map((function(e,a){return c.a.createElement("a",{href:e.link},c.a.createElement("i",{id:e.id,className:e.icon,title:e.title,key:a,"aria-hidden":"true"}))}))))}),u=t(20),d=t(1),p=(t(29),function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"circle"}),c.a.createElement("h1",null,"Hi, I'm Kevin Saephanh ",c.a.createElement("br",null),"I'm a Full Stack Developer"),c.a.createElement("div",{className:"circle"}))}),f=t(10),h=t.n(f),E=t(18),v=(t(30),E.skills),k=function(){var e=c.a.useState(1),a=Object(r.a)(e,2),t=a[0],n=a[1];c.a.useEffect((function(){i(),2===t&&v.forEach((function(e){l(e,e.proficiency,0)}))}),[t]);var i=function(){var e=document.getElementById("dot1").style,a=document.getElementById("dot2").style;1===t?(a.backgroundColor="black",e.backgroundColor="green"):(e.backgroundColor="black",a.backgroundColor="green")},l=function e(a,t,n){if(n<t){var c=document.getElementById("".concat(a.tech)).style;n++,setTimeout((function(){c.width="".concat(n,"%"),e(a,t,n)}),10)}},o=function(){n(1!==t?1:2)};return c.a.createElement("div",{className:"about"},c.a.createElement("div",{id:"clouds"}),c.a.createElement("div",{className:"carousel"},1===t?c.a.createElement("div",{className:"slides info"},c.a.createElement("img",{src:h.a,alt:""}),c.a.createElement("div",{className:"sword"},c.a.createElement("div",{className:"handle"},c.a.createElement("div",{className:"handle-line"})," ",c.a.createElement("div",{className:"handle-line"}),c.a.createElement("div",{className:"handle-line"}),c.a.createElement("div",{className:"handle-line"})),c.a.createElement("div",{className:"guard"}),c.a.createElement("div",{className:"blade"})),c.a.createElement("p",null,"I'm a Full Stack Developer from California. I began my programming journey in 2016 in college starting with C++. In 2019, my interest in programming led me to the world of web development. The freedom, practicality, and creativeness that web development offers are what motivate me to continue creating web apps that not only showcase my interests, but also allow me to experiment with different designs.")):c.a.createElement("div",{className:"slides skills"},c.a.createElement("h2",null,"Languages / Technologies"),c.a.createElement("ul",{className:"skills"},v.map((function(e,a){return c.a.createElement("li",{className:"skill",key:a},c.a.createElement("h3",null,e.tech),c.a.createElement("div",{className:"proficiency"},c.a.createElement("div",{id:"".concat(e.tech),className:"progress"}),c.a.createElement("div",{className:"proficiency-num"},e.proficiency,"%")))})))),c.a.createElement("a",{className:"prev",onClick:o},"\u276e"),c.a.createElement("a",{className:"next",onClick:o},"\u276f")),c.a.createElement("div",null,c.a.createElement("span",{id:"dot1",className:"dot",onClick:o}),c.a.createElement("span",{id:"dot2",className:"dot",onClick:o})))},g=t(19),N=(t(31),t(14),function(){var e=g.projs,a=function(e){return c.a.createElement("ul",{className:"stack"},e.stack.map((function(e,a){return c.a.createElement("li",{className:"stack-item",key:a},e.name)})))};return c.a.createElement("div",{className:"work"},c.a.createElement("h1",null,"My Favorite Projects"),c.a.createElement("ul",{className:"projects"},e.map((function(e,n){return c.a.createElement("li",{className:"project",key:n,title:"".concat(e.title," - click to visit")},c.a.createElement("img",{src:t(32)("./".concat(e.pic)),id:e.pic,alt:""}),c.a.createElement("div",{className:"project-info"},c.a.createElement("h3",null,e.title),a(e),c.a.createElement("a",{href:e.link},c.a.createElement("button",{type:"button"},"Visit"))))}))))}),y=(t(36),function(){var e=c.a.useState({name:"",email:"",message:""}),a=Object(r.a)(e,2),t=a[0];a[1];return c.a.createElement("div",{className:"contact"},c.a.createElement("div",{className:"slime",title:"Poorly drawn Slime from Maplestory using CSS"},c.a.createElement("div",{className:"antenna"},"\u223f\u223f\u223f"),c.a.createElement("div",{className:"eye1"},"+"),c.a.createElement("div",{className:"eye2"},"+"),c.a.createElement("div",{className:"mouth"},"w")),c.a.createElement("form",null,c.a.createElement("input",{placeholder:"Name",title:"Name",maxLength:"100",required:!0}),c.a.createElement("input",{placeholder:"Email",type:"email",title:"Email",maxLength:"100",required:!0}),c.a.createElement("textarea",{placeholder:"Speak your mind :3",title:"Message",maxLength:"300",required:!0}),c.a.createElement("button",{type:"button",onClick:function(){t.name,t.email,t.message}},"Send")))}),b=function(){return c.a.createElement(u.a,{basename:"/"},c.a.createElement(d.c,null,c.a.createElement(d.a,{path:"/about",component:k}),c.a.createElement(d.a,{path:"/work",component:N}),c.a.createElement(d.a,{path:"/contact",component:y}),c.a.createElement(d.a,{component:p})))},S=t(22),w=(t(42),function(){return c.a.createElement("footer",null,S.socials.map((function(e,a){return c.a.createElement("i",{className:e.icon,title:e.title,key:a,"aria-hidden":"true"})})))}),x=(t(43),t(44),function(){var e=c.a.useState("Home"),a=Object(r.a)(e,2),t=a[0],n=a[1];return c.a.createElement("div",{className:"App"},c.a.createElement(s,{currentPage:t,handleNavClick:function(e){var a=e.target.name;n(a)}}),c.a.createElement(b,null),c.a.createElement(w,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.979152fe.chunk.js.map