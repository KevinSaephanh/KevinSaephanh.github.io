(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/me.6eeb72b9.jpg"},,,,,,function(e,a,t){e.exports=t.p+"static/media/algoProToday.314a0b2a.png"},,,function(e){e.exports=JSON.parse('{"navs":[{"icon":"fa fa-home","title":"Home","id":"home-link","link":"/"},{"icon":"fa fa-user","title":"About","id":"about-link","link":"/about"},{"icon":"fa fa-code","title":"Work","id":"work-link","link":"/work"},{"icon":"fa fa-envelope","title":"Contact","id":"contact-link","link":"/contact"}]}')},function(e){e.exports=JSON.parse('{"skills":[{"tech":"Java","proficiency":80},{"tech":"JavaScript","proficiency":80},{"tech":"Spring Boot","proficiency":70},{"tech":"Node.js","proficiency":50},{"tech":"React","proficiency":70},{"tech":"Angular","proficiency":50},{"tech":"AWS","proficiency":40}]}')},function(e){e.exports=JSON.parse('{"projs":[{"pic":"pathfinder.png","title":"Pathfinder","stack":[{"name":"React"},{"name":"JavaScript"}],"link":"https://kevinsaephanh.github.io/Pathfinder/"},{"pic":"sortVisualizer.png","title":"Sort Visualizer","stack":[{"name":"React"},{"name":"TypeScript"}],"link":"https://kevinsaephanh.github.io/Sort_Visualizer/"},{"pic":"algoProToday.png","title":"AlgoProToday","stack":[{"name":"NodeJS"},{"name":"React"},{"name":"MongoDB"},{"name":"ExpressJS"},{"name":"JavaScript"}],"link":"https://algopt.herokuapp.com/"},{"pic":"quizme.png","title":"QuizMe","stack":[{"name":"Django"},{"name":"React"},{"name":"PostgreSQL"},{"name":"JavaScript"},{"name":"Python"}],"link":"https://hiquizme.herokuapp.com/"}]}')},,,,,function(e){e.exports=JSON.parse('{"socials":[{"icon":"fa fa-linkedin-square","title":"LinkedIn","link":"/home"},{"icon":"fa fa-github-square","title":"Github","link":"/home"},{"icon":"fa fa-facebook-official","title":"Facebook","link":"/home"}]}')},function(e,a,t){e.exports=t(53)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){var n={"./algoProToday.png":17,"./me.jpg":11,"./pathfinder.png":38,"./quizme.png":39,"./sortVisualizer.png":40};function c(e){var a=i(e);return t(a)}function i(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=i,e.exports=c,c.id=37},function(e,a,t){e.exports=t.p+"static/media/pathfinder.6e34b7a6.png"},function(e,a,t){e.exports=t.p+"static/media/quizme.a6f971b1.png"},function(e,a,t){e.exports=t.p+"static/media/sortVisualizer.a8bde66c.png"},,,,function(e,a,t){},,,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(19),l=t.n(i),r=t(6),o=t(20),s=(t(33),function(){return c.a.createElement("header",null,c.a.createElement("a",{href:"/"},c.a.createElement("div",{className:"tonberry"},c.a.createElement("div",{className:"eye eye1"}),c.a.createElement("div",{className:"eye eye2"}))),c.a.createElement("ul",null,o.navs.map((function(e,a){return c.a.createElement("a",{href:e.link},c.a.createElement("i",{id:e.id,className:e.icon,title:e.title,key:a,"aria-hidden":"true"}))}))))}),m=t(25),u=t(1),d=(t(34),function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"circle"}),c.a.createElement("h1",null,"Hi, I'm Kevin Saephanh ",c.a.createElement("br",null),"I'm a Full Stack Developer"),c.a.createElement("div",{className:"circle"}))}),p=t(11),f=t.n(p),h=t(21),E=(t(35),h.skills),g=function(){var e=c.a.useState(1),a=Object(r.a)(e,2),t=a[0],n=a[1];c.a.useEffect((function(){i(),2===t&&(s("none"),E.forEach((function(e){l(e,e.proficiency,0)})))}),[t]);var i=function(){var e=document.getElementById("dot1").style,a=document.getElementById("dot2").style;1===t?(a.backgroundColor="black",e.backgroundColor="green"):(e.backgroundColor="black",a.backgroundColor="green")},l=function e(a,t,n){if(n<t){var c=document.getElementById("".concat(a.tech)).style;n++,setTimeout((function(){c.width="".concat(n,"%"),e(a,t,n)}),10)}n>=t&&setTimeout((function(){s("inline-block")}),1e3)},o=function(){n(1!==t?1:2)},s=function(e){document.querySelectorAll(".slider").forEach((function(a){a.style.display=e}))};return c.a.createElement("div",{className:"about"},c.a.createElement("div",{id:"clouds"}),c.a.createElement("div",{className:"carousel"},1===t?c.a.createElement("div",{className:"slides info"},c.a.createElement("img",{src:f.a,alt:""}),c.a.createElement("div",{className:"sword"},c.a.createElement("div",{className:"handle"},c.a.createElement("div",{className:"handle-line"})," ",c.a.createElement("div",{className:"handle-line"}),c.a.createElement("div",{className:"handle-line"}),c.a.createElement("div",{className:"handle-line"})),c.a.createElement("div",{className:"guard"}),c.a.createElement("div",{className:"blade"})),c.a.createElement("p",null,"I'm a Full Stack Developer from California. I began my programming journey in 2016 in college starting with C++. In 2019, my interest in programming led me to the world of web development. The freedom, practicality, and creativeness that web development offers are what motivate me to continue creating web apps that not only showcase my interests, but also allow me to experiment with different designs.")):c.a.createElement("div",{className:"slides skills"},c.a.createElement("h2",null,"Languages / Technologies"),c.a.createElement("ul",{className:"skills"},E.map((function(e,a){return c.a.createElement("li",{className:"skill",key:a},c.a.createElement("h3",null,e.tech),c.a.createElement("div",{className:"proficiency"},c.a.createElement("div",{id:"".concat(e.tech),className:"progress"}),c.a.createElement("div",{className:"proficiency-num"},e.proficiency,"%")))})))),c.a.createElement("a",{className:"slider prev",onClick:o},"\u276e"),c.a.createElement("a",{className:"slider next",onClick:o},"\u276f")),c.a.createElement("div",null,c.a.createElement("span",{id:"dot1",className:"slider dot",onClick:o}),c.a.createElement("span",{id:"dot2",className:"slider dot",onClick:o})))},v=t(22),k=(t(36),t(17),function(){var e=v.projs,a=function(e){return c.a.createElement("ul",{className:"stack"},e.stack.map((function(e,a){return c.a.createElement("li",{className:"stack-item",key:a},e.name)})))};return c.a.createElement("div",{className:"work"},c.a.createElement("h1",null,"My Favorite Projects"),c.a.createElement("ul",{className:"projects"},e.map((function(e,n){return c.a.createElement("li",{className:"project",key:n,title:"".concat(e.title," - click to visit")},c.a.createElement("img",{src:t(37)("./".concat(e.pic)),id:e.pic,alt:""}),c.a.createElement("div",{className:"project-info"},c.a.createElement("h3",null,e.title),a(e),c.a.createElement("a",{href:e.link},c.a.createElement("button",{type:"button"},"Visit"))))}))))}),y=t(9),N=t(12),b=t(13),w=t.n(b),S=t(23),x=t(24),j=(t(44),new RegExp("/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+.)+[A-Za-z]+$/")),C=function(){var e=c.a.useState({name:"",email:"",message:""}),a=Object(r.a)(e,2),t=a[0],n=a[1],i=c.a.useState(""),l=Object(r.a)(i,2),o=l[0],s=l[1],m=function(){var e=Object(S.a)(w.a.mark((function e(a){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),j.test(t.email)){e.next=5;break}return s("Failed to send message \ud83d\ude1e"),setTimeout((function(){s("")}),2e3),e.abrupt("return");case 5:x.sendForm("gmail","portfolio_email",".myForm","user_NbyzOGvn7izymknqCAYZA").then((function(e){s("Message sent successfully UwU"),setTimeout((function(){window.location.reload()}),2e3)})).catch((function(e){console.error(e)}));case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),u=function(e){var a=e.target.name,c=e.target.value;n(Object(N.a)(Object(N.a)({},t),{},Object(y.a)({},a,c)))};return c.a.createElement("div",{className:"contact"},c.a.createElement("div",{className:"slime",title:"Poorly drawn Slime from Maplestory using CSS"},c.a.createElement("div",{className:"antenna"},"\u223f\u223f\u223f"),c.a.createElement("div",{className:"eye1"},"+"),c.a.createElement("div",{className:"eye2"},"+"),c.a.createElement("div",{className:"mouth"},"w")),c.a.createElement("form",{onSubmit:m,className:"myForm"},c.a.createElement("input",{name:"name",placeholder:"Name",title:"Name",maxLength:"100",required:!0,onChange:u}),c.a.createElement("input",{name:"email",placeholder:"Email",type:"email",title:"Email",maxLength:"100",required:!0,onChange:u}),c.a.createElement("textarea",{name:"message",placeholder:"Speak your mind :3",title:"Message",maxLength:"300",onChange:u,required:!0}),c.a.createElement("span",{className:"submitMessage"},o),c.a.createElement("button",{type:"input",onClick:m},"Send")))},O=function(){return c.a.createElement(m.a,{basename:"/"},c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/about",component:g}),c.a.createElement(u.a,{path:"/work",component:k}),c.a.createElement(u.a,{path:"/contact",component:C}),c.a.createElement(u.a,{component:d})))},z=t(27),J=(t(50),function(){return c.a.createElement("footer",null,z.socials.map((function(e,a){return c.a.createElement("i",{className:e.icon,title:e.title,key:a,"aria-hidden":"true"})})))}),T=(t(51),t(52),function(){var e=c.a.useState("Home"),a=Object(r.a)(e,2),t=a[0],n=a[1];return c.a.createElement("div",{className:"App"},c.a.createElement(s,{currentPage:t,handleNavClick:function(e){var a=e.target.name;n(a)}}),c.a.createElement(O,null),c.a.createElement(J,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[28,1,2]]]);
//# sourceMappingURL=main.8a66b271.chunk.js.map