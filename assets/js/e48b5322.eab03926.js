"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[8946],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return d}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,m=c["".concat(l,".").concat(d)]||c[d]||g[d]||o;return n?t.createElement(m,i(i({ref:r},s),{},{components:n})):t.createElement(m,i({ref:r},s))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var p=2;p<o;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2200:function(e,r,n){n.r(r),n.d(r,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return g}});var t=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],u={tags:["Angular","Framework"]},l="Angular Routing",p={unversionedId:"programming/angular-routing",id:"programming/angular-routing",title:"Angular Routing",description:"The Angular router is the standardized way of navigating between pages within an",source:"@site/docs/programming/angular-routing.md",sourceDirName:"programming",slug:"/programming/angular-routing",permalink:"/programming/angular-routing",draft:!1,editUrl:"https://github.com/b-turchyn/knowledge/tree/main/docs/docs/programming/angular-routing.md",tags:[{label:"Angular",permalink:"/tags/angular"},{label:"Framework",permalink:"/tags/framework"}],version:"current",frontMatter:{tags:["Angular","Framework"]},sidebar:"tutorialSidebar",previous:{title:"Time Leaks",permalink:"/productivity/time-leak"},next:{title:"Steam API",permalink:"/programming/apis/steam"}},s={},g=[{value:"Displaying 404 Not Found Error Pages",id:"displaying-404-not-found-error-pages",level:2},{value:"Handling Routing Errors",id:"handling-routing-errors",level:2},{value:"References",id:"references",level:2}],c={toc:g};function d(e){var r=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"Angular%20Routing"},"Angular Routing"),(0,o.kt)("p",null,"The Angular router is the standardized way of navigating between pages within an\nAngular application."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://angular.io/api/router/ExtraOptions"},"ExtraOptions")," is used to provide\nextra configuration to your router. "),(0,o.kt)("h2",{id:"Displaying%20404%20Not%20Found%20Error%20Pages"},"Displaying 404 Not Found Error Pages"),(0,o.kt)("p",null,"The recommended way of handling this is to have a wildcard route listed on your\nroutes that will handle all Page Not Found errors."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const routes: Routes = [\n  { path: '/', component: HomePageComponent },\n  { path: '**', component: PageNotFoundComponent },\n];\n")),(0,o.kt)("p",null,"For other routing errors, the ",(0,o.kt)("inlineCode",{parentName:"p"},"errorHandler")," attribute on ",(0,o.kt)("inlineCode",{parentName:"p"},"ExtraOptions")," can be\nused (see: ",(0,o.kt)("a",{parentName:"p",href:"#Handling%20Routing%20Errors"},"Handling Routing Errors"),")"),(0,o.kt)("h2",{id:"Handling%20Routing%20Errors"},"Handling Routing Errors"),(0,o.kt)("p",null,"When handling routing errors other than a 404 page (which should be handled as\ndescribed\n",(0,o.kt)("a",{parentName:"p",href:"#Displaying%20404%20Not%20Found%20Error%20Pages"},"above"),"), use ",(0,o.kt)("inlineCode",{parentName:"p"},"errorHandler"),".\nIn the ",(0,o.kt)("a",{parentName:"p",href:"https://angular.io/api/router/ExtraOptions#errorHandler"},"documentation"),",\nthis is described as an instance of ",(0,o.kt)("a",{parentName:"p",href:"https://angular.io/api/core/ErrorHandler"},"@angular/core\nErrorHandler"),", but this should\nactually be an instance of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/angular/angular/blob/ae18f00023417cb9480c04791747f97b6265f1f1/packages/router/src/router.ts#L226"},"@angular/router\nErrorHandler"),".\nIn short, this is a function of signature ",(0,o.kt)("inlineCode",{parentName:"p"},"(error: any): any"),", ",(0,o.kt)("em",{parentName:"p"},"not")," an\nErrorHandler class object. This also means that you don\u2019t have access to\ndependency injection, which makes handling errors here \u2014 short of logging them\nto a system like Sentry or Honeybadger \u2014 challenging."),(0,o.kt)("h2",{id:"References"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://angular.io/guide/routing-overview"},"Angular Routing")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://v10.angular.io/api/router/ExtraOptions"},"@angular/router ExtraOptions\n(v10)"))))}d.isMDXComponent=!0}}]);