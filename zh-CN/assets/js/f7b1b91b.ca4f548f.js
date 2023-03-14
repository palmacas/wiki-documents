"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[23309],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=i,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||n;return r?o.createElement(h,a(a({ref:t},c),{},{components:r})):o.createElement(h,a({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var d=2;d<n;d++)a[d]=r[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15486:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var o=r(87462),i=(r(67294),r(3905));const n={description:"Grove - EMG Detector",title:"Grove - EMG Detector",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-EMG_Detector",last_update:{date:"1/6/2023",author:"jianjing Huang"}},a=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Biometric/Grove-EMG_Detector",id:"Sensor/Grove/Grove_Sensors/Biometric/Grove-EMG_Detector",title:"Grove - EMG Detector",description:"Grove - EMG Detector",source:"@site/docs/Sensor/Grove/Grove_Sensors/Biometric/Grove-EMG_Detector.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Biometric",slug:"/Grove-EMG_Detector",permalink:"/zh-CN/Grove-EMG_Detector",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Biometric/Grove-EMG_Detector.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672963200,formattedLastUpdatedAt:"2023\u5e741\u67086\u65e5",frontMatter:{description:"Grove - EMG Detector",title:"Grove - EMG Detector",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-EMG_Detector",last_update:{date:"1/6/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Finger-clip Heart Rate Sensor with shell",permalink:"/zh-CN/Grove-Finger-clip_Heart_Rate_Sensor_with_shell"},next:{title:"Grove - Ear-clip Heart Rate Sensor",permalink:"/zh-CN/Grove-Ear-clip_Heart_Rate_Sensor"}},s={},d=[{value:"Features",id:"features",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"Download Code and Upload",id:"download-code-and-upload",level:3},{value:"Move",id:"move",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Emg_product.jpg"})),(0,i.kt)("p",null,"EMG detector is a bridge connects human body and electrical, the sensor gathers small muscle signal then process with 2th amplify and filter, the output signal can be recognized by Arduino. You can add this signal into your control system."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The sensor cannot be used for medical purposes.")),(0,i.kt)("p",null,"In standby mode, the output voltage is 1.5V. When detect muscle active, the output signal rise up, the maximum voltage is 3.3V. You can use this sensor in 3.3V or 5V system."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/Grove-EMG-Detector-p-1737.html",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png"}))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Grove Compatible"),(0,i.kt)("li",{parentName:"ul"},"3.5mm Connector"),(0,i.kt)("li",{parentName:"ul"},"6 Disposable Surface Electrodes"),(0,i.kt)("li",{parentName:"ul"},"Power supply voltage: 3.3V-5V"),(0,i.kt)("li",{parentName:"ul"},"1000mm Cable Leads"),(0,i.kt)("li",{parentName:"ul"},"No additional power supply")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"More details about Grove modules please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove System"))),(0,i.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg"})))))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,i.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Grove_EMG_detector.jpg"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"J2: grove interface, connect to analog I/O;"),(0,i.kt)("li",{parentName:"ul"},"J1: EMG Disposable Surface Electrodes connector."),(0,i.kt)("li",{parentName:"ul"},"U1: INA331IDGKT, difference amplifier."),(0,i.kt)("li",{parentName:"ul"},"U2, U3: OPA333, Zero drift amplifier.")),(0,i.kt)("h2",{id:"demonstration"},"Demonstration"),(0,i.kt)("p",null,"This demonstration will show you how to use Grove - LCD RGB Backlight, we need a Seeeduino V3.0, a Grove - LED Bar and Grove - Base Shield."),(0,i.kt)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,i.kt)("p",null,"Plug Grove - Base Shield to Seeeduino, then connect Grove - LED Bar to D8, connect Grove - EMG Sensor to A0."),(0,i.kt)("p",null,"Finally, tack the three electrodes to your muscle, and keep a distance between each electrodes."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Emg_connect.jpg"})),(0,i.kt)("h3",{id:"download-code-and-upload"},"Download Code and Upload"),(0,i.kt)("p",null,"You can download the demo code in github, click ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_EMG_detector_demo_code/"},"here"),", then extract it to anywhere."),(0,i.kt)("p",null,"Then upload the code to Seeeduino, if you have any problem about code uploading, please refer to Getting Started With Seeeduino"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Emg_ide.png"})),(0,i.kt)("h3",{id:"move"},"Move"),(0,i.kt)("p",null,"When finish downloading demo code, it'll take about 5s to initialize, you should keep static when initializing."),(0,i.kt)("p",null,"You can see that when initializing, the Led Bar will go form level 10 to level 0. When Led Bar All off, you can move now."),(0,i.kt)("p",null,"When you are moving, you can find that the level of Led Bar will change."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Grove_emg_demo_2.gif"})),(0,i.kt)("h1",{id:"grove-emg-sensor-v10"},"Grove-EMG Sensor v1.0"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-EMG_Detector/res/Grove-EMG_Sensor_v1.0.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h1",{id:"grove-emg-sensor-v11"},"Grove-EMG Sensor v1.1"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-EMG_Detector/res/202000023+PCBA-Grove+EMG+Detector+v1.1.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-EMG_Detector/res/Grove-EMG_Sensor_v1.0.zip"},"Grove-EMG Sensor v1.0 Eagle File")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-EMG_Detector/res/202000023+PCBA-Grove+EMG+Detector+v1.1.zip"},"Grove-EMG Sensor v1.1 Eagle File")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_EMG_detector_demo_code"},"Demo Code"))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please submit any technical issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("div",null,(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);