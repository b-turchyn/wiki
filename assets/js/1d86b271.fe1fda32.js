"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[3698],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=i,g=m["".concat(u,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2712:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={},u="Design Questions",l={unversionedId:"programming/design-questions",id:"programming/design-questions",title:"Design Questions",description:"- What is the effort to implement the feature?",source:"@site/docs/programming/design-questions.md",sourceDirName:"programming",slug:"/programming/design-questions",permalink:"/programming/design-questions",draft:!1,editUrl:"https://github.com/b-turchyn/knowledge/tree/main/docs/docs/programming/design-questions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Steam API",permalink:"/programming/apis/steam"},next:{title:"Development Processes and Questions",permalink:"/programming/development-process"}},c={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"Design%20Questions"},"Design Questions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What is the effort to implement the feature?",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Design, development, testing, deployment, ongoing maintenance"))),(0,o.kt)("li",{parentName:"ul"},"How risky is the feature to implement?"),(0,o.kt)("li",{parentName:"ul"},"Are there other options not being considered? Why are they not viable?"),(0,o.kt)("li",{parentName:"ul"},"How is the feature going to be supported once it\u2019s live?",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Is there monitoring?"),(0,o.kt)("li",{parentName:"ul"},"Is there sufficient documentation for someone to fix issues that arise?"))),(0,o.kt)("li",{parentName:"ul"},"How much tech debt will we accrue by implementing the feature as designed?",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Will the developers be groveling in a month because \u201cthe code is a mess\u201d?"),(0,o.kt)("li",{parentName:"ul"},"Is the accrual of this tech debt acceptable?")))))}f.isMDXComponent=!0}}]);