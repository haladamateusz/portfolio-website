!function(r){function e(e){for(var n,a,i=e[0],u=e[1],f=e[2],y=0,v=[];y<i.length;y++)a=i[y],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&v.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(r[n]=u[n]);for(c&&c(e);v.length;)v.shift()();return l.push.apply(l,f||[]),t()}function t(){for(var r,e=0;e<l.length;e++){for(var t=l[e],n=!0,i=1;i<t.length;i++){var u=t[i];0!==o[u]&&(n=!1)}n&&(l.splice(e--,1),r=a(a.s=t[0]))}return r}var n={},o={0:0},l=[];function a(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=r,a.c=n,a.d=function(r,e,t){a.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:t})},a.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},a.t=function(r,e){if(1&e&&(r=a(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)a.d(t,n,function(e){return r[e]}.bind(null,n));return t},a.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return a.d(e,"a",e),e},a.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},a.p="";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var f=0;f<i.length;f++)e(i[f]);var c=u;l.push([55,1]),t()}({55:function(r,e,t){"use strict";t.r(e);t(56),t(70),t(71),t(48),t(77),t(80),t(83),t(85),t(87),t(90);var n=t(53),o=t.n(n),l=(t(91),t(92),t(54)),a=t.n(l);t(93),t(97),t(98),t(99),t(100);o.a.init({disable:"mobile"});var i={strings:["Web Developer","Creative Designer","Photographer"],typeSpeed:40,loop:!0,backSpeed:30,loopCount:1/0},u=(new a.a(".welcome__animated",i),function(r,e,t){return(1-t)*r+t*e}),f=function(r,e,t,n,o){var l=1/(o/10),a=0,i=setInterval((function(){a>=1&&clearInterval(i);var o="rgba("+parseInt(u(t.r,n.r,a))+","+parseInt(u(t.g,n.g,a))+","+parseInt(u(t.b,n.b,a))+")";r.style.setProperty(e,o),a+=l}),10)},c={r:255,g:255,b:255},y={r:0,g:0,b:0,a:1},v=document.querySelectorAll(".nav-link"),d=!0,p=!1,s=void 0;try{for(var b,h=v[Symbol.iterator]();!(d=(b=h.next()).done);d=!0){var m=b.value;f(m,"color",c,c,0)}}catch(r){p=!0,s=r}finally{try{d||null==h.return||h.return()}finally{if(p)throw s}}new Waypoint({element:document.getElementById("about"),handler:function(r){if("up"===r){var e=!0,t=!1,n=void 0;try{for(var o,l=v[Symbol.iterator]();!(e=(o=l.next()).done);e=!0){var a=o.value;f(a,"color",y,c,200)}}catch(r){t=!0,n=r}finally{try{e||null==l.return||l.return()}finally{if(t)throw n}}}},offset:-10}),new Waypoint({element:document.getElementById("about"),handler:function(r){if("down"===r){var e=!0,t=!1,n=void 0;try{for(var o,l=v[Symbol.iterator]();!(e=(o=l.next()).done);e=!0){var a=o.value;f(a,"color",c,y,200)}}catch(r){t=!0,n=r}finally{try{e||null==l.return||l.return()}finally{if(t)throw n}}}}}),new Waypoint({element:document.getElementById("portfolio"),handler:function(r){if("up"===r){var e=!0,t=!1,n=void 0;try{for(var o,l=v[Symbol.iterator]();!(e=(o=l.next()).done);e=!0){var a=o.value;f(a,"color",c,y,200)}}catch(r){t=!0,n=r}finally{try{e||null==l.return||l.return()}finally{if(t)throw n}}}},offset:-10}),new Waypoint({element:document.getElementById("portfolio"),handler:function(r){if("down"===r){var e=!0,t=!1,n=void 0;try{for(var o,l=v[Symbol.iterator]();!(e=(o=l.next()).done);e=!0){var a=o.value;f(a,"color",y,c,200)}}catch(r){t=!0,n=r}finally{try{e||null==l.return||l.return()}finally{if(t)throw n}}}}});var w=!0,g=!1,S=void 0;try{for(var x,O=v[Symbol.iterator]();!(w=(x=O.next()).done);w=!0){var k=x.value;f(k,"color",c,c,200)}}catch(r){g=!0,S=r}finally{try{w||null==O.return||O.return()}finally{if(g)throw S}}document.querySelector("#home-link").addEventListener("click",(function(){var r=!0,e=!1,t=void 0;try{for(var n,o=v[Symbol.iterator]();!(r=(n=o.next()).done);r=!0){var l=n.value;f(l,"color",y,c,200)}}catch(r){e=!0,t=r}finally{try{r||null==o.return||o.return()}finally{if(e)throw t}}})),document.querySelector("#about-link").addEventListener("click",(function(){var r=!0,e=!1,t=void 0;try{for(var n,o=v[Symbol.iterator]();!(r=(n=o.next()).done);r=!0){var l=n.value;f(l,"color",c,y,200)}}catch(r){e=!0,t=r}finally{try{r||null==o.return||o.return()}finally{if(e)throw t}}})),document.querySelector("#portfolio-link").addEventListener("click",(function(){var r=!0,e=!1,t=void 0;try{for(var n,o=v[Symbol.iterator]();!(r=(n=o.next()).done);r=!0){var l=n.value;f(l,"color",y,c,200)}}catch(r){e=!0,t=r}finally{try{r||null==o.return||o.return()}finally{if(e)throw t}}}))},90:function(r,e,t){}});
//# sourceMappingURL=app.e39c6185.js.map