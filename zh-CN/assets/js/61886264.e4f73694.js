"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[98851],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>_});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),c=i,_=m["".concat(l,".").concat(c)]||m[c]||u[c]||o;return n?r.createElement(_,a(a({ref:t},p),{},{components:n})):r.createElement(_,a({ref:t},p))}));function _(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,a[1]=s;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6887:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const o={description:"Xadow - LED 5x7 v1.0",title:"Xadow - LED 5x7 v1.0",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_LED_5_multiply_7_v1.0",last_update:{date:"1/13/2023",author:"shuxu hu"}},a=void 0,s={unversionedId:"Seeed_Elderly/Xadow/Xadow_LED_5_multiply_7_v1.0",id:"Seeed_Elderly/Xadow/Xadow_LED_5_multiply_7_v1.0",title:"Xadow - LED 5x7 v1.0",description:"Xadow - LED 5x7 v1.0",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_LED_5_multiply_7_v1.0.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_LED_5_multiply_7_v1.0",permalink:"/zh-CN/Xadow_LED_5_multiply_7_v1.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_LED_5_multiply_7_v1.0.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{description:"Xadow - LED 5x7 v1.0",title:"Xadow - LED 5x7 v1.0",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_LED_5_multiply_7_v1.0",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - LED 5x7",permalink:"/zh-CN/Xadow_LED_5x7"},next:{title:"Xadow - M0",permalink:"/zh-CN/Xadow_M0"}},l={},d=[{value:"Specification",id:"specification",level:2},{value:"Demonstration",id:"demonstration",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/img/Xadow_LED_01.jpg",alt:null})),(0,i.kt)("p",null,"The Xadow LED 5x7 contains two parts: an LED panel and an LED controller. The LED panel is a 5x7 Monochrome matrix. The LED controller is a control module for controlling the LED panel using 12 I/O pins of the Atmega168PV. You can send command to LED controller through I2C interface. Then let the led controller to control the LED display. For example, display alphabet and number, or enter sleep mode to reduce the consumption."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/xadow-led-p-1518.html"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Working Voltage: 3.3V"),(0,i.kt)("li",{parentName:"ul"},"Built-in Microcontroller"),(0,i.kt)("li",{parentName:"ul"},"Control Mode: I2C (address 0x04)"),(0,i.kt)("li",{parentName:"ul"},"Dimensions: 25.43mm x 20.35mm")),(0,i.kt)("h2",{id:"demonstration"},"Demonstration"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"As described in the introduction, the LED  can display alphabet and number. Next we will show you the interesting demo."),(0,i.kt)("p",null,"The Hardware installation as shown below:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/img/XadowLED5X7.jpg",alt:null})),(0,i.kt)("p",null,"Note: when connect Xadow LED 5X7 to Xadow Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module(see four corners of each Xadow module).\nThe test code for displaying string or charring:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"")),(0,i.kt)("p",null,'#include "Wire.h"\n#define XADOW_DEBUG 1\n#define LEDAddress 0x04'),(0,i.kt)("p",null,"#define DISP_CHAR_5X7    0x80\n#define DISP_STRING        0x81\n#define SET_DISP_ORIENTATION 0x82\n/",(0,i.kt)("em",{parentName:"p"},"Marco definitions for the display orientation of the LED matrix"),"/\n#define RIGHT_TO_LEFT 0\n#define LEFT_TO_RIGHT 1\n#define POWER_DOWN  0x83\nuint8_t buffer","[24]",';\nint error;\nint n;\nchar *str = "SeeedStudio123";\nvoid setup(void)\n{\nWire.begin();\ndelay(100);\n#if 0\nTESTIO();\nif(error==0)\n{\nDDRB|=0x80;\nPORTB',"&","=~0x80;\n}\n#endif"),(0,i.kt)("p",null,"}\nvoid loop(void)\n{\nfor(n=0;n","<",'100;n++)\n{\ndispString(str,strlen(str),150);\ndelay(300);\n}\n//display the "seeed0728"(9 characters) on the\n//Xadow LED and the character moving one step costs 150m'),(0,i.kt)("p",null,"}"),(0,i.kt)("p",null,"/",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("strong",{parentName:"strong"},(0,i.kt)("strong",{parentName:"strong"},(0,i.kt)("strong",{parentName:"strong"},(0,i.kt)("strong",{parentName:"strong"},(0,i.kt)("strong",{parentName:"strong"},(0,i.kt)("strong",{parentName:"strong"},(0,i.kt)("strong",{parentName:"strong"},(0,i.kt)("strong",{parentName:"strong"},(0,i.kt)("strong",{parentName:"strong"},(0,i.kt)("strong",{parentName:"strong"},(0,i.kt)("strong",{parentName:"strong"},(0,i.kt)("strong",{parentName:"strong"},(0,i.kt)("strong",{parentName:"strong"},(0,i.kt)("strong",{parentName:"strong"},(0,i.kt)("strong",{parentName:"strong"},(0,i.kt)("strong",{parentName:"strong"},"**"))))))))))))))))),"/\n/",(0,i.kt)("em",{parentName:"p"},"Function: Send command to Xadow LED to display a string by the I2C. "),"/\n/",(0,i.kt)("em",{parentName:"p"},"Parameter:-char")," data",(0,i.kt)("em",{parentName:"p"},",Store a string to display on the Xadow LED.  ",(0,i.kt)("em",{parentName:"em"},"/\n/"),"          -uint8_t len,The length of the data"),".                     ",(0,i.kt)("em",{parentName:"p"},"/\n/"),"            -uint16",(0,i.kt)("em",{parentName:"p"},"t time,The time of the character moving one    step. ",(0,i.kt)("em",{parentName:"em"},"/\n/"),"Return:    void                                                        ",(0,i.kt)("em",{parentName:"em"},"/\nvoid dispString(char")," data"),",uint8",(0,i.kt)("em",{parentName:"p"},"t len,uint16_t time)\n{\nWire.beginTransmission(LEDAddress);\nWire.write(DISP_STRING);\nWire.write(len);\nWire.write((uint8_t*)data"),",len);\nWire.write(time",">",">","8); //high byte of time\nWire.write(time);//low byte of time\nWire.endTransmission();\n}\nvoid dispChar(uint8",(0,i.kt)("em",{parentName:"p"},"t data"),",uint16",(0,i.kt)("em",{parentName:"p"},"t time)\n{\nWire.beginTransmission(LEDAddress);\nWire.write(DISP_CHAR_5X7);\nWire.write(data"),");\nWire.write(time",">",">","8); //high byte of time\nWire.write(time);//low byte of time\nWire.endTransmission();\n}\nvoid setDispOrientation(uint8_t orientation)\n{\nWire.beginTransmission(LEDAddress);\nWire.write(SET_DISP_ORIENTATION);\nWire.write(orientation);\nWire.endTransmission();\n}\nvoid powerDown()\n{\nWire.beginTransmission(LEDAddress);\nWire.write(POWER_DOWN);\nWire.endTransmission();\ndigitalWrite(3,HIGH);\n}\nvoid wakeUp()\n{\nWire.beginTransmission(LEDAddress);\nWire.endTransmission();\n}"),(0,i.kt)("p",null,"void TESTIO(void)\n{"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DDRB|=0x0e;\nPORTB&amp;=~0x0e;\nDDRF|=0x01;\nPORTF&amp;=~0x01;\nDDRD&amp;=~0x0f;\n\nPORTB|=0x04;\nPORTF|=0x01;\ndelay(30);\nif(!(PIND&amp;0x01))\n{\n    error=1;\n}\nif(PIND&amp;0x02)\n{\n    error=1;\n}\nif(!(PIND&amp;0x04))\n{\n    error=1;\n}\nif(PIND&amp;0x08)\n{\n    error=1;\n}\nPORTB&amp;=~0x04;\nPORTB|=0x0a;\nPORTF&amp;=~0x01;\ndelay(30);\nif(PIND&amp;0x01)\n{\n    error=1;\n}\nif(!(PIND&amp;0x02))\n{\n    error=1;\n}\nif(PIND&amp;0x04)\n{\n    error=1;\n}\nif(!(PIND&amp;0x08))\n{\n    error=1;\n}\nSerial.println(error);\n")),(0,i.kt)("p",null,"}"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'You can see the belowing scene after uploading the code to Xadow Main Board.\n\n![](https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/img/LED_Effect_Diagram_.JPG)\n\n\n## Schematic Online Viewer\n\n<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/res/Xadow_LED_5X7_eagle_file.zip" style={{borderRadius: \'0px 0px 4px 4px\', height: 500, borderStyle: \'solid\', borderWidth: 1, borderColor: \'rgb(241, 241, 241)\', overflow: \'hidden\', maxWidth: 1280, maxHeight: 700, boxSizing: \'border-box\'}}>\n</div>\n\n\n##  Resources\n---\n*   [Xadow LED 5X7 Eagle File](https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/res/Xadow_LED_5X7_eagle_file.zip)\n\n*   [Xadow LED Firmware](https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/res/Xadow_LED_Firmware.zip)\n\n## Tech Support\nPlease submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>\n')))}m.isMDXComponent=!0}}]);