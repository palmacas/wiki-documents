"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[97e3],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),c=i,b=p["".concat(d,".").concat(c)]||p[c]||m[c]||o;return n?a.createElement(b,r(r({ref:t},u),{},{components:n})):a.createElement(b,r({ref:t},u))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},68976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={description:"Rainbowduino",title:"Rainbowduino",keywords:["grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Rainbowduino",last_update:{date:"1/13/2023",author:"shuxu hu"}},r=void 0,l={unversionedId:"Seeed_Elderly/Rainbowduino/Rainbowduino",id:"Seeed_Elderly/Rainbowduino/Rainbowduino",title:"Rainbowduino",description:"Rainbowduino",source:"@site/docs/Seeed_Elderly/Rainbowduino/Rainbowduino.md",sourceDirName:"Seeed_Elderly/Rainbowduino",slug:"/Rainbowduino",permalink:"/zh-CN/Rainbowduino",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Rainbowduino/Rainbowduino.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{description:"Rainbowduino",title:"Rainbowduino",keywords:["grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Rainbowduino",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Rainbowduino LED driver platform-ATmega328",permalink:"/zh-CN/Rainbowduino_LED_driver_platform-ATmega328"},next:{title:"How to Build a Home Soft Router and NAS with ReComputer",permalink:"/zh-CN/How-to-build-a-home-soft-router-and-NAS-With-ReComputer"}},d={},s=[{value:"Rainbowduino platform",id:"rainbowduino-platform",level:2},{value:"Rainbow Cube",id:"rainbow-cube",level:2},{value:"Seeed depot sales",id:"seeed-depot-sales",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Rainbowduino series is an Arduino compatible controller board with professional multiplexed LED driver. It can drive an 8x8 RGB Led Matrix or a 4x4x4 RGB LED Cube in common Anode mode. The Rainbowduino family is as follows,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rainbowduino v3.0: Rainbowduino v3.0 is flashed with Arduino boot-loader and this makes it easy to program sketches using Arduino IDE. Unlike other LED drivers, this comes with a USB to UART (FT232RL) inbuilt for programming the sketches. This is being sold now.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Older versions :"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rainbowduino LED driver platform - Atmega 168: Not available now.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rainbowduino LED driver platform - ATmega328: The Rainbowduino board is an Arduino compatible controller board with professional LED driving capacity. It will drive an 8x8 RGB Led Matrix (Common Anode). It has revised to Rainbowduino v3.0.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rainbow Cube kit - RGB 4",(0,i.kt)("em",{parentName:"p"},"4"),"4 (Rainbowduino Compatible): ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("font",{color:"Red"},"R"),(0,i.kt)("font",{color:"Orange"},"a"),(0,i.kt)("font",{color:"Yellow"},"i"),(0,i.kt)("font",{color:"Green"},"n"),(0,i.kt)("font",{color:"Blue"},"b"),(0,i.kt)("font",{color:"Indigo"},"o"),(0,i.kt)("font",{color:"Violet"},"w")," ")," ",(0,i.kt)("strong",{parentName:"p"},"Cube Kit")," is a ",(0,i.kt)("strong",{parentName:"p"},"3D",(0,i.kt)("font",{color:"red"}," R"),(0,i.kt)("font",{color:"green"},"G"),(0,i.kt)("font",{color:"blue"},"B"))," LED Cube useful for creating colorful design. The 3D Cube is artistically crafted with sixty-four 8mm ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("font",{color:"red"},"R"),(0,i.kt)("font",{color:"green"},"G"),(0,i.kt)("font",{color:"blue"},"B"))," LEDs arranged in a 4 x 4 x 4 manner. ",(0,i.kt)("strong",{parentName:"p"},"Rainbow Cube Kit")," can be used to create many beautiful visual effects with A ",(0,i.kt)("strong",{parentName:"p"},"Rainbowduino"),". The ",(0,i.kt)("strong",{parentName:"p"},"Rainbow Cube Kit")," comes with an inbuilt 3.3V / 1 Amp LDO useful for  powering the kit independently. An XBee compatible socket is provided as well, this can be used to connect Rainbowduino with a PC or an Arduino wirelessly.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rainbowduino Extension Board v0.9b: Rainbowduino Extension Shield is a breakout board of Rainbowduino\u2019s 192 separate LED driving channels. The channels are divided into three 8*8 arrays: red, green and blue for easier controlling, it is designed to ease customized LED projects based on Rainbowduino.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rainbow Cube : The \u201cRainbow Cube \u2013 Ready to Shine\u201d requires no soldering and comes pre-assembled with a Rainbowduino (Arduino-compatible) LED driver controller. Just plug it in to your PC or Mac, grab a copy of the free design software, and you\u2019ll discover just how easy it is to program this spectacular device and see the results in real time.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rainbow Cube Kit Acrylic Harness: An exquisite, Transparent and easy-to-assembled acrylic case which custom made for Rainbow Cube Kit, it is designed by Riley Porter @Synthetos. This Harness is made of six piece of acrylic boards, two bags of keys, four 16mm high plastic columns and several screw nuts."))),(0,i.kt)("h2",{id:"rainbowduino-platform"},"Rainbowduino platform"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"[",(0,i.kt)("img",{parentName:"th",src:"https://files.seeedstudio.com/wiki/Rainbowduino/img/RAINBOW-Rainbowduino_LRG.jpg",alt:null}),"]"),(0,i.kt)("th",{parentName:"tr",align:"center"},"[",(0,i.kt)("img",{parentName:"th",src:"https://files.seeedstudio.com/wiki/Rainbowduino/img/Rainbowduino_V3.0.jpg",alt:null}),"]"),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{parentName:"th",src:"https://files.seeedstudio.com/wiki/Rainbowduino/img/Rainbowshield.jpg",alt:null})))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Rainbowduino LED driver platform - Atmega 328 / ",(0,i.kt)("font",{color:"red"},"Not available now")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Rainbowduino v3.0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Rainbowduino Extension Board v0.9b")))),(0,i.kt)("h2",{id:"rainbow-cube"},"Rainbow Cube"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"[",(0,i.kt)("img",{parentName:"th",src:"https://files.seeedstudio.com/wiki/Rainbowduino/img/Rainbowcuben.jpg",alt:null}),"]"),(0,i.kt)("th",{parentName:"tr",align:"center"},"[",(0,i.kt)("img",{parentName:"th",src:"https://files.seeedstudio.com/wiki/Rainbowduino/img/Rainbow_Cube_Assembled.jpg",alt:null}),"]"),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{parentName:"th",src:"https://files.seeedstudio.com/wiki/Rainbowduino/img/acrycubebox.jpg",alt:null})))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"[Rainbow Cube kit - RGB 4",(0,i.kt)("em",{parentName:"td"},"4"),"4 (Rainbowduino Compatible)]"),(0,i.kt)("td",{parentName:"tr",align:"center"},"[Rainbow_Cube_Kit_Acrylic_Harness]"),(0,i.kt)("td",{parentName:"tr",align:"center"},"[Rainbow Cube Kit Acrylic Harness]")))),(0,i.kt)("h2",{id:"seeed-depot-sales"},"Seeed depot sales"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/rainbowduino-led-driver-platform-atmega-328-p-371.html?cPath=132_133"},"Rainbowduino V3.0"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/rainbow-cube-kit-rgb-4x4x4-rainbowduino-compatible-p-596.html?cPath=138"},"Rainbow Cube kit - RGB 4",(0,i.kt)("em",{parentName:"a"},"4"),"4 (Rainbowduino Compatible)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/rainbowduino-extension-board-v09b-p-692.html?cPath=175_177"},"Rainbowduino Extension Board v0.9b"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/rainbow-cube-kit-assembled-p-998.html?cPath=138"},"Rainbow Cube"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/rainbow-cube-kit-acrylic-harness-p-1021.html?cPath=178_184"},"Rainbow Cube Kit Acrylic Harness")))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);