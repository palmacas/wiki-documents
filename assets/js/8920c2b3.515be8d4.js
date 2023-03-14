"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[49219],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>P});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=s.createContext({}),u=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return s.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,P=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return n?s.createElement(P,i(i({ref:t},l),{},{components:n})):s.createElement(P,i({ref:t},l))}));function P(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}h.displayName="MDXCreateElement"},81197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var s=n(87462),r=(n(67294),n(3905));const a={description:"HTTP API Access Guide",title:"HTTP API Access Guide",keywords:["HTTP API"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,o={unversionedId:"Cloud_Chain/SenseCAP_API/HTTP_API/HTTP_API_Access_Guide",id:"Cloud_Chain/SenseCAP_API/HTTP_API/HTTP_API_Access_Guide",title:"HTTP API Access Guide",description:"HTTP API Access Guide",source:"@site/docs/Cloud_Chain/SenseCAP_API/HTTP_API/HTTP_API_Access_Guide.md",sourceDirName:"Cloud_Chain/SenseCAP_API/HTTP_API",slug:"/Cloud_Chain/SenseCAP_API/HTTP_API/HTTP_API_Access_Guide",permalink:"/Cloud_Chain/SenseCAP_API/HTTP_API/HTTP_API_Access_Guide",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Cloud_Chain/SenseCAP_API/HTTP_API/HTTP_API_Access_Guide.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"HTTP API Access Guide",title:"HTTP API Access Guide",keywords:["HTTP API"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"HTTP API Quickstart",permalink:"/Cloud_Chain/SenseCAP_API/HTTP_API/Quick_Start"},next:{title:"Data OpenStream API Quickstart",permalink:"/Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Quickstart"}},c={},u=[{value:"HTTP Request and Response",id:"http-request-and-response",level:2},{value:"HTTP HOST",id:"http-host",level:3},{value:"HTTP HEADER",id:"http-header",level:3},{value:"Request",id:"request",level:4},{value:"Response",id:"response",level:4},{value:"HTTP Basic Authentication",id:"http-basic-authentication",level:4},{value:"API Response",id:"api-response",level:4},{value:"Successful Response with String",id:"successful-response-with-string",level:4},{value:"Successful Response with Object",id:"successful-response-with-object",level:4},{value:"Successful response with Array",id:"successful-response-with-array",level:4},{value:"Error Response",id:"error-response",level:4},{value:"Tech Support",id:"tech-support",level:2}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"http-request-and-response"},"HTTP Request and Response"),(0,r.kt)("p",null,"  Requests are authenticated with the HTTP Basic Authentication."),(0,r.kt)("h3",{id:"http-host"},"HTTP HOST"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"China Station: ",(0,r.kt)("a",{parentName:"li",href:"https://sensecap.seeed.cn/openapi"},"https://sensecap.seeed.cn/openapi")),(0,r.kt)("li",{parentName:"ul"},"Global Station: ",(0,r.kt)("a",{parentName:"li",href:"https://sensecap.seeed.cc/openapi"},"https://sensecap.seeed.cc/openapi"))),(0,r.kt)("h3",{id:"http-header"},"HTTP HEADER"),(0,r.kt)("h4",{id:"request"},"Request"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null," key"),(0,r.kt)("th",null," description")),(0,r.kt)("tr",null,(0,r.kt)("td",{width:"300"}," API-VERSION"),(0,r.kt)("td",{width:"300"}," api version"))),(0,r.kt)("h4",{id:"response"},"Response"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null," key"),(0,r.kt)("th",null," description")),(0,r.kt)("tr",null,(0,r.kt)("td",{width:"300"}," api-gateway-excute-second"),(0,r.kt)("td",{width:"300"}," Time in seconds to execute the api")),(0,r.kt)("tr",null,(0,r.kt)("td",{width:"300"}," api-gateway-mpuo-consume"),(0,r.kt)("td",{width:"300"}," The quota consumed by executing the api"))),(0,r.kt)("h4",{id:"http-basic-authentication"},"HTTP Basic Authentication"),(0,r.kt)("p",null,"  ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Basic_access_authentication"},"HTTP Basic Authentication"),"is one of the most common ways for RESTfull API authentication. We use Access ID as username and Access Key as password. Every HTTP client library should have its built-in support for Basic Authentication, in this documentation we use curl, which uses the \u2013user option to specify Basic Authentication credential."),(0,r.kt)("p",null,"  you can create access keys via SenseCAP Portal. Please refer to quickstart to see how to get an access key."),(0,r.kt)("h4",{id:"api-response"},"API Response"),(0,r.kt)("p",null," All response key follow the lowercase and underscore convention."),(0,r.kt)("h4",{id:"successful-response-with-string"},"Successful Response with String"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'  {\n     "code":"0",\n     "data":"\n         // string\n     "\n }\n')),(0,r.kt)("h4",{id:"successful-response-with-object"},"Successful Response with Object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'    {\n     "code":"0",\n     "data":{\n         // object\n     }\n }\n')),(0,r.kt)("h4",{id:"successful-response-with-array"},"Successful response with Array"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'    {\n     "code":"0",\n     "data":[\n         // Array\n     ]\n }\n')),(0,r.kt)("h4",{id:"error-response"},"Error Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},' {\n     "code":"1001",\n     "msg":"error message"\n }\n')),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,r.kt)("div",null,(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);