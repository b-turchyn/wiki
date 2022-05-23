"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[857],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=m(n),g=o,f=s["".concat(c,".").concat(g)]||s[g]||p[g]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9707:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={tags:["Language"]},c="Ruby",m={unversionedId:"programming/ruby",id:"programming/ruby",title:"Ruby",description:"Time Zones",source:"@site/docs/programming/ruby.md",sourceDirName:"programming",slug:"/programming/ruby",permalink:"/programming/ruby",draft:!1,editUrl:"https://github.com/b-turchyn/knowledge/tree/main/docs/docs/programming/ruby.md",tags:[{label:"Language",permalink:"/tags/language"}],version:"current",frontMatter:{tags:["Language"]},sidebar:"tutorialSidebar",previous:{title:"Memoization",permalink:"/programming/memoization"},next:{title:"Psychology",permalink:"/psychology/"}},l={},p=[{value:"Time Zones",id:"time-zones",level:2}],s={toc:p};function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"Ruby"},"Ruby"),(0,a.kt)("h2",{id:"Time%20Zones"},"Time Zones"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(Sourced from ",(0,a.kt)("a",{parentName:"em",href:"https://thoughtbot.com/blog/its-about-time-zones"},"Thoughtbot"),")")),(0,a.kt)("p",null,"Do not use the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'* Time.now\n* Date.today\n* Date.today.to_time\n* Time.parse("2015-07-04 17:05:37")\n* Time.strptime(string, "%Y-%m-%dT%H:%M:%S%z")\n')),(0,a.kt)("p",null,"Use the following instead:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'* Time.current\n* 2.hours.ago\n* Time.zone.today\n* Date.current\n* 1.day.from_now\n* Time.zone.parse("2015-07-04 17:05:37")\n* Time.strptime(string, "%Y-%m-%dT%H:%M:%S%z").in_time_zone\n')))}g.isMDXComponent=!0}}]);