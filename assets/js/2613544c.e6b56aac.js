"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[1786],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1670:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={tags:["Documentation","Writing"]},u="Docusarus",c={unversionedId:"devops/docusaurus",id:"devops/docusaurus",title:"Docusarus",description:"Docusarus is the engine that generates this wiki. I picked this system based on",source:"@site/docs/devops/docusaurus.md",sourceDirName:"devops",slug:"/devops/docusaurus",permalink:"/devops/docusaurus",draft:!1,editUrl:"https://github.com/b-turchyn/knowledge/tree/main/docs/docs/devops/docusaurus.md",tags:[{label:"Documentation",permalink:"/tags/documentation"},{label:"Writing",permalink:"/tags/writing"}],version:"current",frontMatter:{tags:["Documentation","Writing"]},sidebar:"tutorialSidebar",previous:{title:"Conditional Access",permalink:"/devops/conditional-access"},next:{title:"Git",permalink:"/devops/git"}},l={},p=[{value:"Dev Server",id:"dev-server",level:2},{value:"Folder Categorization",id:"folder-categorization",level:2},{value:"Automatic Deployments to Github Pages",id:"automatic-deployments-to-github-pages",level:2},{value:"Custom Javascript Loading",id:"custom-javascript-loading",level:2},{value:"Known Issues",id:"known-issues",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"Docusarus"},"Docusarus"),(0,o.kt)("p",null,"Docusarus is the engine that generates this wiki. I picked this system based on\nits use by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nikitavoloboev"},"Nikita Voloboev")," in their\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nikitavoloboev/knowledge/"},"knowledgebase"),"."),(0,o.kt)("h2",{id:"Dev%20Server"},"Dev Server"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start")," to start the dev server. This runs ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus start"),", which is\nrunning ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/dev-server/"},"webpack-dev-server"),"\nunder the covers (although I don\u2019t think webpack config files can be passed in)."),(0,o.kt)("p",null,"My local install is configured to run on port 3001 to avoid conflicts with the\ndefault Ruby On Rails port."),(0,o.kt)("h2",{id:"Folder%20Categorization"},"Folder Categorization"),(0,o.kt)("p",null,"Categories can be customized by creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"_category_.json")," in a\ndirectory",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,o.kt)("h2",{id:"Automatic%20Deployments%20to%20Github%20Pages"},"Automatic Deployments to Github Pages"),(0,o.kt)("p",null,"Docusaurus has automatic build and deploy wrapped into a single command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run deploy\n")),(0,o.kt)("p",null,"This works great for local deploys, but requires some additional commands to\nwork with ",(0,o.kt)("a",{parentName:"p",href:"/devops/github-actions"},"Github Actions"),"."),(0,o.kt)("p",null,"The current build and deploy action can be found on\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/b-turchyn/wiki/blob/main/.github/workflows/node.js.yml"},"Github"),",\nbut in short, the approach is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check out the code"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"npm ci")),(0,o.kt)("li",{parentName:"ul"},"Configure git credentials"),(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run deploy")),(0,o.kt)("li",{parentName:"ul"},"Cleanup (done automatically)")),(0,o.kt)("h2",{id:"Custom%20Javascript%20Loading"},"Custom Javascript Loading"),(0,o.kt)("p",null,"Custom Javascript is loaded via ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts"),"\nsection",(0,o.kt)("sup",{parentName:"p",id:"fnref-2"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const config = {\n  scripts: [\n    // String style\n    'my-js-host.example.com/my.js',\n    // Object style\n    {\n      src: 'my-js-host.example.com/my.js',\n      defer: true\n    }\n  ]\n}\n")),(0,o.kt)("h2",{id:"Known%20Issues"},"Known Issues"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When writing new articles, linking an article to that new article requires a\nrestart of the local server (",(0,o.kt)("inlineCode",{parentName:"li"},"npm start"),") in order to pick up that new\narticle\u2019s link.")),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},(0,o.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/sidebar/autogenerated#category-index-convention"},"https://docusaurus.io/docs/sidebar/autogenerated#category-index-convention"),(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2"},(0,o.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/api/docusaurus-config#scripts"},"https://docusaurus.io/docs/api/docusaurus-config#scripts"),(0,o.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);