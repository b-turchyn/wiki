"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[6865],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),a=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=a(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=a(t),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||c;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=d;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var a=2;a<c;a++)i[a]=t[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1267:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return p}});var n=t(7462),o=t(3366),c=(t(7294),t(3905)),i=["components"],s={tags:["Azure"]},u="Resource Locks",a={unversionedId:"devops/resource-locks",id:"devops/resource-locks",title:"Resource Locks",description:"Resource locks are used in Azure Active Directory to prevent accidental",source:"@site/docs/devops/resource-locks.md",sourceDirName:"devops",slug:"/devops/resource-locks",permalink:"/devops/resource-locks",draft:!1,editUrl:"https://github.com/b-turchyn/knowledge/tree/main/docs/docs/devops/resource-locks.md",tags:[{label:"Azure",permalink:"/tags/azure"}],version:"current",frontMatter:{tags:["Azure"]},sidebar:"tutorialSidebar",previous:{title:"Oh My Zsh!",permalink:"/devops/oh-my-zsh"},next:{title:"Rkhunter",permalink:"/devops/rkhunter"}},l={},p=[],d={toc:p};function f(e){var r=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"Resource%20Locks"},"Resource Locks"),(0,c.kt)("p",null,"Resource locks are used in Azure Active Directory to prevent accidental\nmodification and deletion of critical resources. This resource could be a server\nor access group."),(0,c.kt)("p",null,"The scenario that resource locks aim to prevent is if a sysadmin is cleaning up\nunused groups that were unknowingly still in use."),(0,c.kt)("p",null,"Locks can be set to either prevent deletion (",(0,c.kt)("inlineCode",{parentName:"p"},"CanNotDelete"),"), or prevent both\nmodification and deletion (",(0,c.kt)("inlineCode",{parentName:"p"},"ReadOnly"),")."),(0,c.kt)("p",null,"Resource locks can also be used with Azure Blueprints to enforce certain\nresource locks to always exist."))}f.isMDXComponent=!0}}]);