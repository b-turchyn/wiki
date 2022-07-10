"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[857],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(r),g=o,y=s["".concat(p,".").concat(g)]||s[g]||c[g]||a;return r?n.createElement(y,i(i({ref:t},m),{},{components:r})):n.createElement(y,i({ref:t},m))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9707:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={tags:["Language"]},i="Ruby",l={unversionedId:"programming/ruby",id:"programming/ruby",title:"Ruby",description:"Time Zones",source:"@site/docs/programming/ruby.md",sourceDirName:"programming",slug:"/programming/ruby",permalink:"/programming/ruby",draft:!1,editUrl:"https://github.com/b-turchyn/knowledge/tree/main/docs/docs/programming/ruby.md",tags:[{label:"Language",permalink:"/tags/language"}],version:"current",frontMatter:{tags:["Language"]},sidebar:"tutorialSidebar",previous:{title:"Powershell",permalink:"/programming/powershell"},next:{title:"Userscripts",permalink:"/programming/userscripts"}},p={},u=[{value:"Time Zones",id:"time-zones",level:2}],m={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"Ruby"},"Ruby"),(0,o.kt)("h2",{id:"Time%20Zones"},"Time Zones"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(Sourced from ",(0,o.kt)("a",{parentName:"em",href:"https://thoughtbot.com/blog/its-about-time-zones"},"Thoughtbot"),")")),(0,o.kt)("p",null,"Do not use the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},'* Time.now\n* Date.today\n* Date.today.to_time\n* Time.parse("2015-07-04 17:05:37")\n* Time.strptime(string, "%Y-%m-%dT%H:%M:%S%z")\n')),(0,o.kt)("p",null,"Use the following instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},'* Time.current\n* 2.hours.ago\n* Time.zone.today\n* Date.current\n* 1.day.from_now\n* Time.zone.parse("2015-07-04 17:05:37")\n* Time.strptime(string, "%Y-%m-%dT%H:%M:%S%z").in_time_zone\n')))}c.isMDXComponent=!0}}]);