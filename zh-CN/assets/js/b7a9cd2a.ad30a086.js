"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[99961],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=o.createContext({}),s=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),h=a,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||n;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},47036:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var o=r(87462),a=(r(67294),r(3905));const n={description:"Xadow - Q Touch Sensor",title:"Xadow - Q Touch Sensor",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Q_Touch_Sensor",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Seeed_Elderly/Xadow/Xadow_Q_Touch_Sensor",id:"Seeed_Elderly/Xadow/Xadow_Q_Touch_Sensor",title:"Xadow - Q Touch Sensor",description:"Xadow - Q Touch Sensor",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_Q_Touch_Sensor.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_Q_Touch_Sensor",permalink:"/zh-CN/Xadow_Q_Touch_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_Q_Touch_Sensor.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{description:"Xadow - Q Touch Sensor",title:"Xadow - Q Touch Sensor",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Q_Touch_Sensor",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - Pebble Time Adapter",permalink:"/zh-CN/Xadow_Pebble_Time_Adapter"},next:{title:"Xadow Tutorial - Acceleration Detector",permalink:"/zh-CN/Xadow_Tutorial_Acceleration_Detector"}},u={},s=[{value:"Specification",id:"specification",level:2},{value:"Interface Function",id:"interface-function",level:2},{value:"Usage",id:"usage",level:2},{value:"Hardware Installation",id:"hardware-installation",level:2},{value:"Software Part",id:"software-part",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support",id:"tech-support",level:2}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/img/Xadow%20Q%20touch%20sensor.jpg",alt:null})),(0,a.kt)("p",null,"The Q Touch Sensor is a high sensitivity and high noise immunity touch input device.It is based on Atmel AT42QT1070."),(0,a.kt)("p",null,"The AT42QT1070 modulates its bursts in a spread-spectrum fashion in order to heavily suppress the effects of external noise, and to suppress RF emissions. The QT1070 uses a dual-pulse method of acquisition. This provides greater noise immunity and eliminates the need for external sampling capacitors, allowing touch sensing using a single pin."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-Q-Touch-Sensor-p-1853.html"},(0,a.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Operating Voltage: 3 ~ 5.5V"),(0,a.kt)("li",{parentName:"ul"},"Operating Current @3.3V: 1mA"),(0,a.kt)("li",{parentName:"ul"},"Touch Keys: 7 Keys ; key0 ,key1 ,key2 are on the Xadow PCB bottom side"),(0,a.kt)("li",{parentName:"ul"},"Communicating Protocol: I2C"),(0,a.kt)("li",{parentName:"ul"},"I2C Address: 0x1B")),(0,a.kt)("h2",{id:"interface-function"},"Interface Function"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/img/Xadow-Q_Touch.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2460\uff1aTouch key3 , key4 break out"),(0,a.kt)("li",{parentName:"ul"},"\u2461\uff1aTouch key5 , key6 break out")),(0,a.kt)("p",null,"The recommended range for key capacitance Cx is 1 pF \u2013 30 pF. Larger values of Cx will give reduced sensitivity."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2462\uff1aXadow interface"),(0,a.kt)("li",{parentName:"ul"},"\u2463\uff1aOn board touch key0"),(0,a.kt)("li",{parentName:"ul"},"\u2464\uff1aOn board touch key1"),(0,a.kt)("li",{parentName:"ul"},"\u2465\uff1aOn board touch key2")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Demo:"),(0,a.kt)("p",null,"When you touch the key pad on the board  ,you will see the message from a serial port."),(0,a.kt)("h2",{id:"hardware-installation"},"Hardware Installation"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connect Xadow - Q Touch Senor to Xadow - Main Board")),(0,a.kt)("h2",{id:"software-part"},"Software Part"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"1) Download the library [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_QTouch"},"Q Touch Library"),"];")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"2) Unzip it into the libraries file of Arduino IDE by the path: ..\\arduino-1.0.5\\libraries.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"3) Open the code directly by the path: File -",">"," Example -",">"," getTouchNumber.ino")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"4) Upload the code. Note that you should select the correct board type and COM port."))),(0,a.kt)("p",null,"You can see :"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/img/Q_Touch_Demo_output.jpg",alt:null})),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/res/Xadow-Q_Touch_Sensor_v1.0_sch_pcb.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resource"},"Resource"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_QTouch"},"Q Touch Library"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/res/Xadow-Q_Touch_Sensor_v1.0.pdf"},"Schematic pdf"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/res/Xadow-Q_Touch_Sensor_v1.0_sch_pcb.zip"},"Eagle file"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/res/AT42QT1070-MMH.pdf"},"AT42QT107 datasheet")))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);