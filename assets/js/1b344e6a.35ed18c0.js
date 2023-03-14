"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[84936],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={title:"Analog",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-IO-Analog/",slug:"/Wio-Terminal-IO-Analog",last_update:{date:"01/11/2022",author:"gunengyu"}},a="Using the Grove Analog Port on Wio Terminal",l={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-Analog",id:"Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-Analog",title:"Analog",description:"This repo demonstrates how to use Analog as inputs on Wio Terminal. To use analog pins on Wio Terminal, you must use RPI pins.",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-Analog.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/Input&Output",slug:"/Wio-Terminal-IO-Analog",permalink:"/Wio-Terminal-IO-Analog",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-Analog.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"Jan 11, 2022",frontMatter:{title:"Analog",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-IO-Analog/",slug:"/Wio-Terminal-IO-Analog",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Overview",permalink:"/Wio-Terminal-IO-Overview"},next:{title:"Digital",permalink:"/Wio-Terminal-IO-Digital"}},s={},u=[{value:"RPI Analog Pins",id:"rpi-analog-pins",level:2},{value:"Grove Port Configurations",id:"grove-port-configurations",level:2},{value:"Example Code",id:"example-code",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-the-grove-analog-port-on-wio-terminal"},"Using the Grove Analog Port on Wio Terminal"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-12%2011-36-22.2019-12-12%2011_37_02.gif"})),(0,o.kt)("p",null,"This repo demonstrates how to use Analog as inputs on Wio Terminal. To use analog pins on Wio Terminal, you must use RPI pins."),(0,o.kt)("h2",{id:"rpi-analog-pins"},"RPI Analog Pins"),(0,o.kt)("p",null,"The Raspberry Pi pinouts are defined as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"RPI_A0")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"RPI_A8"))),(0,o.kt)("h2",{id:"grove-port-configurations"},"Grove Port Configurations"),(0,o.kt)("p",null,"To use the ",(0,o.kt)("strong",{parentName:"p"},"Grove configurable A/D Port")," as Analog port, simply define it as follow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"void setup() {\n    pinMode(A0, INPUT);\n}\n")),(0,o.kt)("p",null,"Now, connect your Grove sensor to the physical pin!"),(0,o.kt)("h2",{id:"example-code"},"Example Code"),(0,o.kt)("p",null,"In this example, a Grove Loudness sensor is used to demonstrate:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'void setup() {\n    Serial.begin(115200);\n    pinMode(A0, INPUT);\n}\nvoid loop() {\n    int loudness = analogRead(A0);\n    Serial.print("Loudness: ");\n    Serial.println(loudness);\n    delay(50);\n}\n')),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("div",null,(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);