"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[21572],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),u=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=u(t.components);return r.createElement(d.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=u(a),c=n,g=m["".concat(d,".").concat(c)]||m[c]||s[c]||l;return a?r.createElement(g,i(i({ref:e},p),{},{components:a})):r.createElement(g,i({ref:e},p))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[m]="string"==typeof t?t:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},57353:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const l={description:"Seeed Arduino Serial",title:"Seeed Arduino Serial",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeed_Arduino_Serial",last_update:{date:"1/16/2023",author:"hushuxu"}},i=void 0,o={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Seeed_Arduino_Serial",id:"Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Seeed_Arduino_Serial",title:"Seeed Arduino Serial",description:"Seeed Arduino Serial",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Seeed_Arduino_Serial.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage",slug:"/Seeed_Arduino_Serial",permalink:"/zh-CN/Seeed_Arduino_Serial",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Seeed_Arduino_Serial.md",tags:[],version:"current",lastUpdatedBy:"hushuxu",lastUpdatedAt:1673827200,formattedLastUpdatedAt:"2023\u5e741\u670816\u65e5",frontMatter:{description:"Seeed Arduino Serial",title:"Seeed Arduino Serial",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeed_Arduino_Serial",last_update:{date:"1/16/2023",author:"hushuxu"}},sidebar:"ProductSidebar",previous:{title:"Suli",permalink:"/zh-CN/Suli"},next:{title:"I2C And I2C Address of Seeed Product",permalink:"/zh-CN/I2C_And_I2C_Address_of_Seeed_Product"}},d={},u=[{value:"Tech Support",id:"tech-support",level:2}],p={toc:u};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Serial communications provide an easy and flexible way for your Arduino board to interact with your computer and other devices. Implementing serial communications involves hardware and software. The hardware provides the electrical signaling between Arduino and the device it is talking to. The software uses the hardware to send bytes or bits that the connected hardware understands. "),(0,n.kt)("p",null,"Most of arduino boards have at least one Serial, some have multiple serials(Arduino Mega has 4 Serials). "),(0,n.kt)("p",null,"It communicates on digital pins 0 (RX) and 1 (TX) as well as with the computer via USB. So if you connect UART device on pin 0 and pin D1, you have to remove them before downloading program through USB. Or else it will cause upload fails."),(0,n.kt)("p",null,"Sometimes you need more serial ports than the number of hardware serial ports available. If this is the case, you can use an ",(0,n.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Reference/SoftwareSerial"},"Software Serial")," that uses software to emulate serial hardware. Software serial requires a lot of help from the Arduino controller to send and receive data, so it\u2019s not as fast or efficient as hardware serial."),(0,n.kt)("p",null,"Some boards, such as the Seeeduino Stalker V3.1 and Seeeduino Ethernet, do not have USB support and require an ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html"},"adapter")," for connecting to your computer that converts TTL to USB. "),(0,n.kt)("p",null,"!!!Warning\nThe TX/RX uses TTL logic levels(5v/3.3v). You can not connect it directly to RS232 serial port, which operates at +/-12v. You need the ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-RS232-P-2852.html"},"TTL to RS232 converter")," to change the voltage levels. "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"BOARDs"),(0,n.kt)("th",{parentName:"tr",align:null},"Micro Controller"),(0,n.kt)("th",{parentName:"tr",align:null},"USB Serial"),(0,n.kt)("th",{parentName:"tr",align:null},"Hardware Serial"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Seeeduino V4.2, Seeeduino Lotus"),(0,n.kt)("td",{parentName:"tr",align:null},"Atmega328"),(0,n.kt)("td",{parentName:"tr",align:null},"Serial"),(0,n.kt)("td",{parentName:"tr",align:null},"Serial: 0(RX), 1(TX)"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Seeeduino Mega"),(0,n.kt)("td",{parentName:"tr",align:null},"Atmega2560"),(0,n.kt)("td",{parentName:"tr",align:null},"Serial"),(0,n.kt)("td",{parentName:"tr",align:null},"Serial: 0(RX), 1(TX)"),(0,n.kt)("td",{parentName:"tr",align:null},"Serial1: 19(RX), 18(TX)"),(0,n.kt)("td",{parentName:"tr",align:null},"Serial2: 17(RX), 16(TX)"),(0,n.kt)("td",{parentName:"tr",align:null},"Serial3: 15(RX), 14(TX)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Seeeduino Ethernet, Seeeduino GPRS"),(0,n.kt)("td",{parentName:"tr",align:null},"Atmega328P"),(0,n.kt)("td",{parentName:"tr",align:null},"Need USB to TTL adapter"),(0,n.kt)("td",{parentName:"tr",align:null},"Serial: 0(RX), 1(TX)"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Seeeduino GPRS"),(0,n.kt)("td",{parentName:"tr",align:null},"Atmega32U4"),(0,n.kt)("td",{parentName:"tr",align:null},"Serial"),(0,n.kt)("td",{parentName:"tr",align:null},"Serial: 0(RX), 1(TX)"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Seeeduino Cloud"),(0,n.kt)("td",{parentName:"tr",align:null},"Atmega32U4"),(0,n.kt)("td",{parentName:"tr",align:null},"Serial"),(0,n.kt)("td",{parentName:"tr",align:null},"Serial: 0(RX), 1(TX), Grove UART port and Dragino module HE"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Seeeduino Lite"),(0,n.kt)("td",{parentName:"tr",align:null},"Atmega32U4"),(0,n.kt)("td",{parentName:"tr",align:null},"Serial"),(0,n.kt)("td",{parentName:"tr",align:null},"Serial1: 0(RX), 1(TX)"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Seeeduino LoraWAN"),(0,n.kt)("td",{parentName:"tr",align:null},"ATSAMD21G18"),(0,n.kt)("td",{parentName:"tr",align:null},"SerialUSB"),(0,n.kt)("td",{parentName:"tr",align:null},"Serial: Connect to GPS module"),(0,n.kt)("td",{parentName:"tr",align:null},"Serial1: Connect to RHF76-052AM for AT commands and 0(RX), 1(TX)"),(0,n.kt)("td",{parentName:"tr",align:null},"SerialDebug: Connect to RHF76-052AM for firmware update"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Seeeduino Lotus Cortex-M0+"),(0,n.kt)("td",{parentName:"tr",align:null},"ATSAMD21"),(0,n.kt)("td",{parentName:"tr",align:null},"SerialUSB"),(0,n.kt)("td",{parentName:"tr",align:null},"Serial: Connect to J2 UART Grove Port"),(0,n.kt)("td",{parentName:"tr",align:null},"Serial1: Connect to 0(RX), 1(TX)"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Wio Link"),(0,n.kt)("td",{parentName:"tr",align:null},"ESP8266"),(0,n.kt)("td",{parentName:"tr",align:null},"Serial"),(0,n.kt)("td",{parentName:"tr",align:null},"Serial:Connect to UART Grove Port"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Wio Tracker - GPS, BT3.0, GSM, Arduino Compatible"),(0,n.kt)("td",{parentName:"tr",align:null},"ATSAMD21G18A"),(0,n.kt)("td",{parentName:"tr",align:null},"SerialUSB"),(0,n.kt)("td",{parentName:"tr",align:null},"SerialDBG: Connect to Grove UART Port"),(0,n.kt)("td",{parentName:"tr",align:null},"serialMC20: Connect to MC20"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Wio LTE Cat.1"),(0,n.kt)("td",{parentName:"tr",align:null},"STM32F405RG"),(0,n.kt)("td",{parentName:"tr",align:null},"SerialUSB"),(0,n.kt)("td",{parentName:"tr",align:null},"serialDebug: Connect to EC21"),(0,n.kt)("td",{parentName:"tr",align:null},"Serial: Connect to Grove UART Port"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Wio LTE Cat M1/NB-IoT Tracker"),(0,n.kt)("td",{parentName:"tr",align:null},"STM32F405RG"),(0,n.kt)("td",{parentName:"tr",align:null},"SerialDebug"),(0,n.kt)("td",{parentName:"tr",align:null},"SerialGrove: Connect to Grove UART Port"),(0,n.kt)("td",{parentName:"tr",align:null},"SerialGSM: Connect to LTE M1/NB-IOT module"),(0,n.kt)("td",{parentName:"tr",align:null},"SerialGNSS: Connect to GPS module"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"If you have any technical issue.  submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". "),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}m.isMDXComponent=!0}}]);