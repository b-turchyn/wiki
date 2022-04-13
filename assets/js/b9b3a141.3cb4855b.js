"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[9020],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5009:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),l=["components"],a={title:"Git",tags:["Tool"]},u="Git",s={unversionedId:"devops/git",id:"devops/git",title:"Git",description:"Aliases",source:"@site/docs/devops/git.md",sourceDirName:"devops",slug:"/devops/git",permalink:"/devops/git",editUrl:"https://github.com/b-turchyn/knowledge/tree/main/docs/docs/devops/git.md",tags:[{label:"Tool",permalink:"/tags/tool"}],version:"current",frontMatter:{title:"Git",tags:["Tool"]},sidebar:"tutorialSidebar",previous:{title:"Docusarus",permalink:"/devops/docusaurus"},next:{title:"Oh My Zsh!",permalink:"/devops/oh-my-zsh"}},p={},c=[{value:"Aliases",id:"aliases",level:2},{value:"Submodules",id:"submodules",level:2},{value:"Adding A Submodule",id:"adding-a-submodule",level:3},{value:"Cloning A Repository With Submodules",id:"cloning-a-repository-with-submodules",level:3},{value:"Updating Submodules When Pulling",id:"updating-submodules-when-pulling",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"Git"},"Git"),(0,i.kt)("h2",{id:"Aliases"},"Aliases"),(0,i.kt)("p",null,"Aliases are managed through ",(0,i.kt)("a",{parentName:"p",href:"/devops/oh-my-zsh"},"oh-my-zsh"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gcl"),": Clone"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gl"),": Pull"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gp"),": Push"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gst"),": Git Status"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gc"),": Commit")),(0,i.kt)("h2",{id:"Submodules"},"Submodules"),(0,i.kt)("h3",{id:"Adding%20A%20Submodule"},"Adding A Submodule"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git submodule add <repo-url> <directory>\n")),(0,i.kt)("h3",{id:"Cloning%20A%20Repository%20With%20Submodules"},"Cloning A Repository With Submodules"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone <repo-url>\ncd <repo>\ngit submodule update --init\n")),(0,i.kt)("h3",{id:"Updating%20Submodules%20When%20Pulling"},"Updating Submodules When Pulling"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git pull --recurse-submodules\n")))}m.isMDXComponent=!0}}]);