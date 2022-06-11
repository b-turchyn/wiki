"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[5989],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5574:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),c=["components"],a={tags:["Azure"]},s="Conditional Access",l={unversionedId:"devops/conditional-access",id:"devops/conditional-access",title:"Conditional Access",description:"Conditional access is functionality within Azure Active Directory that will",source:"@site/docs/devops/conditional-access.md",sourceDirName:"devops",slug:"/devops/conditional-access",permalink:"/devops/conditional-access",draft:!1,editUrl:"https://github.com/b-turchyn/knowledge/tree/main/docs/docs/devops/conditional-access.md",tags:[{label:"Azure",permalink:"/tags/azure"}],version:"current",frontMatter:{tags:["Azure"]},sidebar:"tutorialSidebar",previous:{title:"Bash Shell",permalink:"/devops/bash"},next:{title:"CyberChef",permalink:"/devops/cyberchef"}},u={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"Conditional%20Access"},"Conditional Access"),(0,i.kt)("p",null,"Conditional access is functionality within Azure Active Directory that will\nenforce varying levels of ",(0,i.kt)("a",{parentName:"p",href:"/devops/authentication"},"authentication"),"\nrequirements depending on where the user is logging in from."),(0,i.kt)("p",null,"Factors such as which device the user is using, what browser, and what location\ncan be factored into the decision. These are described as ",(0,i.kt)("em",{parentName:"p"},"signals")," in their\ndocumentation."),(0,i.kt)("p",null,"Depending on the signals, more or less identity checks can be performed. If, for\nexample, a user is within an office campus, full access may be granted\nautomatically, but if a user is signing in from an unexpected country, access\nmay be blocked entirely."),(0,i.kt)("h1",{id:"References"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/"},"https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/"))))}f.isMDXComponent=!0}}]);