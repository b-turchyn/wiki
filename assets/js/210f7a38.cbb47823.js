"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[5814],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||l[m]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1637:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={tags:["Dev Tools"]},c="Tmux",u={unversionedId:"devops/tmux",id:"devops/tmux",title:"Tmux",description:"Session switcher with fzf",source:"@site/docs/devops/tmux.md",sourceDirName:"devops",slug:"/devops/tmux",permalink:"/devops/tmux",draft:!1,editUrl:"https://github.com/b-turchyn/knowledge/tree/main/docs/docs/devops/tmux.md",tags:[{label:"Dev Tools",permalink:"/tags/dev-tools"}],version:"current",frontMatter:{tags:["Dev Tools"]},sidebar:"tutorialSidebar",previous:{title:"Self-Hosting",permalink:"/devops/self-hosting"},next:{title:"Traefik ForwardAuth Support with Keycloak",permalink:"/devops/traefik-forwardauth"}},p={},l=[{value:"Session switcher with <code>fzf</code>",id:"session-switcher-with-fzf",level:2}],f={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"Tmux"},"Tmux"),(0,i.kt)("h2",{id:"Session%20switcher%20with%20fzf"},"Session switcher with ",(0,i.kt)("inlineCode",{parentName:"h2"},"fzf")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=31308099"},"(source)")),(0,i.kt)("p",null,"Requires tmux 3.2 and ",(0,i.kt)("inlineCode",{parentName:"p"},"fzf")," to be installed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bind C-j display-popup -E \"tmux list-sessions | sed -E 's/:.*$//' | grep -v \\\"^$(tmux display-message -p '#S')\\$\\\" | fzf --reverse | xargs tmux switch-client -t\"\n")))}m.isMDXComponent=!0}}]);