"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[1118],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=a,f=c["".concat(s,".").concat(h)]||c[h]||p[h]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1278:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={tags:["DevOps Cookbook"]},s="Traefik ForwardAuth Support with Keycloak",u={unversionedId:"devops/traefik-forwardauth",id:"devops/traefik-forwardauth",title:"Traefik ForwardAuth Support with Keycloak",description:"Original blog post over on",source:"@site/docs/devops/traefik-forwardauth.md",sourceDirName:"devops",slug:"/devops/traefik-forwardauth",permalink:"/devops/traefik-forwardauth",draft:!1,editUrl:"https://github.com/b-turchyn/knowledge/tree/main/docs/docs/devops/traefik-forwardauth.md",tags:[{label:"DevOps Cookbook",permalink:"/tags/dev-ops-cookbook"}],version:"current",frontMatter:{tags:["DevOps Cookbook"]},sidebar:"tutorialSidebar",previous:{title:"Tmux",permalink:"/devops/tmux"},next:{title:"Dog Training",permalink:"/dog-training/"}},d={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Required Information",id:"required-information",level:3},{value:"Get your realm provider URI",id:"get-your-realm-provider-uri",level:3},{value:"Assign valid redirect URIs in the identity provider",id:"assign-valid-redirect-uris-in-the-identity-provider",level:3},{value:"Assign client scopes to your client",id:"assign-client-scopes-to-your-client",level:3},{value:"Set up ForwardAuth container",id:"set-up-forwardauth-container",level:3},{value:"Create a new container definition",id:"create-a-new-container-definition",level:4},{value:"Assign Middleware To Other Containers",id:"assign-middleware-to-other-containers",level:3},{value:"Debugging",id:"debugging",level:2},{value:"Getting Extra Information",id:"getting-extra-information",level:3},{value:"Bad Gateway Error",id:"bad-gateway-error",level:3},{value:"Changelog",id:"changelog",level:2}],c={toc:p};function h(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"Traefik%20ForwardAuth%20Support%20with%20Keycloak"},"Traefik ForwardAuth Support with Keycloak"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Original blog post over on\n",(0,i.kt)("a",{parentName:"p",href:"https://brianturchyn.net/traefik-forwardauth-support-with-keycloak/"},"BrianTurchyn.net")))),(0,i.kt)("h2",{id:"Prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Traefik >= v2 installed and running in Docker"),(0,i.kt)("li",{parentName:"ul"},"Identity Provider set up such as Keycloak")),(0,i.kt)("h2",{id:"Steps"},"Steps"),(0,i.kt)("h3",{id:"Required%20Information"},"Required Information"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A signing secret for the ForwardAuth container. This can be any random string."),(0,i.kt)("li",{parentName:"ul"},"The realm provider URI. This URI will have ",(0,i.kt)("inlineCode",{parentName:"li"},"/.well-known/openid-configuration"),"\nappended to it to retrieve the OIDC configuration from your identity\nprovider, so be sure to have this available."),(0,i.kt)("li",{parentName:"ul"},"Realm Client ID (this will be created below)"),(0,i.kt)("li",{parentName:"ul"},"Realm Client Secret (this will be created below)"),(0,i.kt)("li",{parentName:"ul"},"Traefik\u2019s Docker network name (assuming traefik-webgateway for this guide)"),(0,i.kt)("li",{parentName:"ul"},"Traefik\u2019s entry point that you\u2019re using (assuming websecure for this guide)")),(0,i.kt)("h3",{id:"Get%20your%20realm%20provider%20URI"},"Get your realm provider URI"),(0,i.kt)("p",null,"Assuming you are using Keycloak, you should be able to use the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the admin console for Keycloak, and select the realm you are using"),(0,i.kt)("li",{parentName:"ol"},"Select \u201cRealm Settings\u201d. In the Endpoints section, there should be \u201cOpenID\nEndpoint Configuration\u201d. Copy this link. Remove the\n",(0,i.kt)("inlineCode",{parentName:"li"},"/.well-known/openid-configuration")," part of the path (there should be no ",(0,i.kt)("inlineCode",{parentName:"li"},"/"),"\nat the end of the URL. This is important!")),(0,i.kt)("h3",{id:"Assign%20valid%20redirect%20URIs%20in%20the%20identity%20provider"},"Assign valid redirect URIs in the identity provider"),(0,i.kt)("p",null,"Assuming you are using Keycloak, you should be able to use the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the admin console for Keycloak, and select the realm you are using"),(0,i.kt)("li",{parentName:"ol"},"Select \u201cClients\u201d, then click \u201cCreate\u201d"),(0,i.kt)("li",{parentName:"ol"},"Create your Client ID. All other values can remain their defaults. Click\n\u201cSave\u201d. This is your client ID, required below."),(0,i.kt)("li",{parentName:"ol"},"In the \u201cSettings\u201d section, change the following values, then click \u201cSave\u201d:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Access Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"confidential")),(0,i.kt)("li",{parentName:"ul"},"Valid Redirect URIs: Add each domain you want to authenticate against with\n",(0,i.kt)("inlineCode",{parentName:"li"},"/_oauth")," set as the path (example: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://example.com/_oauth"),")"))),(0,i.kt)("li",{parentName:"ol"},"Navigate to the \u201cCredentials\u201d tab. Get the value in the \u201cSecret\u201d field.\nThis is your client secret, required below.")),(0,i.kt)("h3",{id:"Assign%20client%20scopes%20to%20your%20client"},"Assign client scopes to your client"),(0,i.kt)("p",null,"The ForwardAuth container requires, at minimum, these client scopes to be\nassigned: ",(0,i.kt)("inlineCode",{parentName:"p"},"email"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"groups"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"profile"),". It\u2019s possible you may need more or\nless depending on your configuration. (Is yours different? Let me know in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/b-turchyn/wiki/issues"},"GitHub Issues")," or the ",(0,i.kt)("a",{parentName:"p",href:"https://brianturchyn.net/traefik-forwardauth-support-with-keycloak/"},"blog\ncomments"),"\nso I can keep this up-to-date!)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the admin console for Keycloak, and select the realm you are using"),(0,i.kt)("li",{parentName:"ol"},"Select \u201cClients\u201d, then select the client you created above"),(0,i.kt)("li",{parentName:"ol"},"In the \u201cRealm Scopes\u201d section, select each of the scopes above from the list\nof available scopes, then click \u201cAdd Selected\u201d (note: depending on your\nconfiguration, those scopes could be either in the \u201cDefault Client Scopes\u201d\nor \u201cOptional Client Scopes\u201d section).")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Configuration of client scopes within Keycloak",src:n(9748).Z,width:"579",height:"350"})),(0,i.kt)("h3",{id:"Set%20up%20ForwardAuth%20container"},"Set up ForwardAuth container"),(0,i.kt)("p",null,"For ForwardAuth to work, you need a container that will handle the auth\nforwarding for you. The current recommended one for a generic OIDC provider is\n",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/mesosphere/traefik-forward-auth"},"mesosphere/traefik-forward-auth"),"\nwhich is a fork of an older version that does not support generic OIDC."),(0,i.kt)("p",null,"It\u2019s generally easiest to run this in the same docker-compose.yaml file as your\nTraefik install. This is the assumption with the rest of this guide."),(0,i.kt)("h4",{id:"Create%20a%20new%20container%20definition"},"Create a new container definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'  forwardauth:\n    image: mesosphere/traefik-forward-auth\n    networks:\n      - webgateway\n    environment:\n      - SECRET=<signing-secret>\n      - PROVIDER_URI=https://<your-domain>/auth/realms/btdev\n      - CLIENT_ID=<client-id>\n      - CLIENT_SECRET=<client-secret>\n    labels:\n      - "traefik.enable=true"\n      - "traefik.docker.network=traefik_webgateway"\n      - "traefik.http.services.forwardauth.loadbalancer.server.port=4181"\n      - "traefik.http.routers.forwardauth.entrypoints=websecure"\n      - "traefik.http.routers.forwardauth.rule=Path(`/_oauth`)"\n      - "traefik.http.routers.forwardauth.middlewares=traefik-forward-auth"\n      - "traefik.http.middlewares.traefik-forward-auth.forwardauth.address=http://forwardauth:4181"\n      - "traefik.http.middlewares.traefik-forward-auth.forwardauth.authResponseHeaders=X-Forwarded-User"\n      - "traefik.http.middlewares.traefik-forward-auth.forwardauth.trustForwardHeader=true"\n')),(0,i.kt)("p",null,"This does a few things:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Creates the ForwardAuth container with the needed configuration (via\n",(0,i.kt)("inlineCode",{parentName:"li"},"environment")," variables), defined as ",(0,i.kt)("inlineCode",{parentName:"li"},"forwardauth")," in the router\nconfiguration"),(0,i.kt)("li",{parentName:"ol"},"Announces the container to Traefik and makes it accessible via any domain\nvia the ",(0,i.kt)("inlineCode",{parentName:"li"},"/_oauth")," path"),(0,i.kt)("li",{parentName:"ol"},"Defines a new middleware called ",(0,i.kt)("inlineCode",{parentName:"li"},"traefik-forward-auth")," which will be used by\nother containers to route authentication requests through")),(0,i.kt)("p",null,"You can also add the following labels if you are using SSL and are using a\ncertresolver. In this case, it is labelled as ",(0,i.kt)("inlineCode",{parentName:"p"},"cloudflare")," in the Traefik\nconfiguration. Replace with the certresolver name that you are using."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- "traefik.http.routers.traefik-forward-auth.tls=true"\n- "traefik.http.routers.traefik-forward-auth.tls.certresolver=cloudflare"\n')),(0,i.kt)("h3",{id:"Assign%20Middleware%20To%20Other%20Containers"},"Assign Middleware To Other Containers"),(0,i.kt)("p",null,"For any container behind Traefik that you want to have protected by OIDC, add\nthe following labels to it, then re-deploy that container:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- "traefik.http.routers.traefik-forward-auth.middlewares=traefik-forward-auth"\n')),(0,i.kt)("h2",{id:"Debugging"},"Debugging"),(0,i.kt)("h3",{id:"Getting%20Extra%20Information"},"Getting Extra Information"),(0,i.kt)("p",null,"Set the ",(0,i.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL")," environment variable to ",(0,i.kt)("inlineCode",{parentName:"p"},"debug")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"trace")," for additional\nlog information, and then re-deploy your container."),(0,i.kt)("h3",{id:"Bad%20Gateway%20Error"},"Bad Gateway Error"),(0,i.kt)("p",null,"You may receive an error where the error message \u201cBad Gateway\u201d is displayed.\nThis is likely accompanied by the URL having changed and having an error in it\nthat mentions invalid scopes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://[example.com]/_oauth?error=invalid_scope&\nerror_description=Invalid+scopes%3A+openid+profile+email+groups&state=[...]\n")),(0,i.kt)("p",null,"To fix this, assign the client scopes defined in the error description in the\nURL, then try again. See the section \u201cAssign client scopes for your client\u201d\nabove."),(0,i.kt)("h2",{id:"Changelog"},"Changelog"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2021-08-01: Published."),(0,i.kt)("li",{parentName:"ul"},"2022-01-16: Added section on assigning client scopes, based on provided\nfeedback from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pbitante"},"@pbitante")," and\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/PierrePetit"},"@PierrePetit")," in the blog comments.")))}h.isMDXComponent=!0},9748:function(e,t,n){t.Z=n.p+"assets/images/traefik-forwardauth-scopes-96d2c97b39ac1cf00db9495e587fb219.png"}}]);