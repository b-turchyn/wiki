"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[9866],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=s(r),d=o,y=l["".concat(u,".").concat(d)]||l[d]||f[d]||i;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},9184:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={},u="CyberChef",s={unversionedId:"devops/cyberchef",id:"devops/cyberchef",title:"CyberChef",description:"CyberChef is a webpage to perform a series of operations on an input. For",source:"@site/docs/devops/cyberchef.md",sourceDirName:"devops",slug:"/devops/cyberchef",permalink:"/devops/cyberchef",draft:!1,editUrl:"https://github.com/b-turchyn/knowledge/tree/main/docs/docs/devops/cyberchef.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Conditional Access",permalink:"/devops/conditional-access"},next:{title:"Docusarus",permalink:"/devops/docusaurus"}},p={},f=[{value:"Authentication and Authorization",id:"authentication-and-authorization",level:2}],l={toc:f};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"CyberChef"},"CyberChef"),(0,i.kt)("p",null,"CyberChef is a webpage to perform a series of operations on an input. For\nexample, one could Base64 decode an XML string, parse the XML, beautify it,\nparse out one of the XML fields, then continue to perform operations on that\nvalue."),(0,i.kt)("h1",{id:"Useful%20Recipes"},"Useful Recipes"),(0,i.kt)("h2",{id:"Authentication%20and%20Authorization"},"Authentication and Authorization"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gchq.github.io/CyberChef/#recipe=Find_/_Replace(%7B'option':'Regex','string':'%5EBearer%20'%7D,'',false,false,false,false)JWT_Decode()JWT_Verify(''/disabled)"},"Decode\nJWT"),"\n(removes \u201cBearer \u201d prefix if present)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gchq.github.io/CyberChef/#recipe=From_HTML_Entity()From_Base64('A-Za-z0-9%2B/%3D',true,false)XML_Beautify('%5C%5Ct')XPath_expression('//*%5Blocal-name()%3D%5C'X509Certificate%5C'%5D/text()','%5C%5Cn')Parse_X.509_certificate('Base64')"},"Parse X.509 Certificate from\nSAMLResponse"))))}d.isMDXComponent=!0}}]);