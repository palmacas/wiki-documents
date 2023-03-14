"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[75599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,c=m["".concat(s,".").concat(h)]||m[h]||u[h]||i;return n?r.createElement(c,o(o({ref:t},d),{},{components:n})):r.createElement(c,o({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},63266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={description:"Grove - I2C UV Sensor (VEML6070)",title:"Grove - I2C UV Sensor (VEML6070)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-I2C_UV_Sensor-VEML6070",last_update:{date:"1/5/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Light/Grove-I2C_UV_Sensor-VEML6070",id:"Sensor/Grove/Grove_Sensors/Light/Grove-I2C_UV_Sensor-VEML6070",title:"Grove - I2C UV Sensor (VEML6070)",description:"Grove - I2C UV Sensor (VEML6070)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Light/Grove-I2C_UV_Sensor-VEML6070.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Light",slug:"/Grove-I2C_UV_Sensor-VEML6070",permalink:"/zh-CN/Grove-I2C_UV_Sensor-VEML6070",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Light/Grove-I2C_UV_Sensor-VEML6070.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672876800,formattedLastUpdatedAt:"2023\u5e741\u67085\u65e5",frontMatter:{description:"Grove - I2C UV Sensor (VEML6070)",title:"Grove - I2C UV Sensor (VEML6070)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-I2C_UV_Sensor-VEML6070",last_update:{date:"1/5/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - UV Sensor",permalink:"/zh-CN/Grove-UV_Sensor"},next:{title:"Grove - Luminance Sensor",permalink:"/zh-CN/Grove-Luminance_Sensor"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Typical applications",id:"typical-applications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pin Out",id:"pin-out",level:3},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Alert Function",id:"alert-function",level:4},{value:"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)",id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Project",id:"project",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/perspective.jpg"})),(0,a.kt)("p",null,"The Grove - I2C UV Sensor(VEML6070) is an advanced ultraviolet (UV) light sensor with I2C protocol interface. Ultraviolet (UV) is electromagnetic radiation with a wavelength from 10 nm to 400 nm, shorter than that of visible light but longer than X-rays, this sensor detects 320-410nm light most effectively, and will converts solar UV light intensity to digital data."),(0,a.kt)("p",null,"This module is based on VEML6070, which has linear sensitivity to solar UV light and is easily adjusted by an external resistor."),(0,a.kt)("p",null,"What's more the active acknowledge (ACK) feature with threshold windows setting allows the UV sensor to send out a UVI alert message. Under a strong solar UVI condition, the smart ACK signal can be easily implemented by the software programming."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/Grove-I2C-UV-Sensor-(VEML6070)-p-3195.html",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Excellent performance of UV radiation measurement under long time solar UV exposure"),(0,a.kt)("li",{parentName:"ul"},"Excellent UV sensitivity and linearity"),(0,a.kt)("li",{parentName:"ul"},"Excellent temperature compensation"),(0,a.kt)("li",{parentName:"ul"},"High dynamic detection resolution"),(0,a.kt)("li",{parentName:"ul"},"Support acknowledge feature (ACK)")),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Item"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,a.kt)("td",{parentName:"tr",align:null},"3.3V / 5V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Range of spectral sensitivity"),(0,a.kt)("td",{parentName:"tr",align:null},"320 ~ 410 nm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Peak Sensitivity"),(0,a.kt)("td",{parentName:"tr",align:null},"355 nm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UVA Sensitivity"),(0,a.kt)("td",{parentName:"tr",align:null},"5 \u03bcW/cm2/step(typical)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Interface"),(0,a.kt)("td",{parentName:"tr",align:null},"I2C")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"I2C Address"),(0,a.kt)("td",{parentName:"tr",align:null},"0x38(Data LSB) / 0x39(Data MSB)")))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"    Actually, this sensor has 3 I2C address, each address\n"))),(0,a.kt)("h2",{id:"typical-applications"},"Typical applications"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Solar UV indicator"),(0,a.kt)("li",{parentName:"ul"},"Cosmetic / outdoor sport handheld product"),(0,a.kt)("li",{parentName:"ul"},"Consumer products")),(0,a.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,a.kt)("h3",{id:"pin-out"},"Pin Out"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/pin_out.jpg"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/pin_out_back.jpg"})),(0,a.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg"})))))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,a.kt)("h4",{id:"hardware"},"Hardware"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Materials required")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,a.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - I2C UV Sensor (VEML6070)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/thumbnail.jpg"})))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html",target:"_blank"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{href:"https://www.seeedstudio.com/Grove-I2C-UV-Sensor-(VEML6070)-p-3195.html",target:"_blank"},"Get One Now"))))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"1")," Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"},"here")," to buy"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"2")," Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html"},"here")," to buy.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Connect the Grove - I2C UV Sensor (VEML6070) to port ",(0,a.kt)("strong",{parentName:"p"},"I2C")," of Grove-Base Shield.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino to PC via a USB cable."))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/connect.jpg"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove Cable"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - I2C UV Sensor (VEML6070)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GND"),(0,a.kt)("td",{parentName:"tr",align:null},"Black"),(0,a.kt)("td",{parentName:"tr",align:null},"GND")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5V or 3.3V"),(0,a.kt)("td",{parentName:"tr",align:null},"Red"),(0,a.kt)("td",{parentName:"tr",align:null},"VCC")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SDA"),(0,a.kt)("td",{parentName:"tr",align:null},"White"),(0,a.kt)("td",{parentName:"tr",align:null},"SDA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SCL"),(0,a.kt)("td",{parentName:"tr",align:null},"Yellow"),(0,a.kt)("td",{parentName:"tr",align:null},"SCL")))),(0,a.kt)("h4",{id:"software"},"Software"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we strongly recommend you to see ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_VEML6070"},"Seeed_VEML6070")," Library from Github.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Restart the Arduino IDE. Open the example, you can open it in the following three ways\uff1a"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open it directly in the Arduino IDE via the path: ",(0,a.kt)("strong",{parentName:"p"},"File --\x3e Examples --\x3e Seeed_VEML6070 --\x3e INT_mode"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/path_1.jpg"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open it in your computer by click the ",(0,a.kt)("strong",{parentName:"p"},"INT_mode.ino")," which you can find in the folder ",(0,a.kt)("strong",{parentName:"p"},"XXXX\\Arduino\\libraries\\Seeed_VEML6070-master\\examples\\INT_mode"),", ",(0,a.kt)("strong",{parentName:"p"},"XXXX")," is the location you installed the Arduino IDE."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/path_2.jpg"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Or, you can just click the icon ",(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg",alt:null})," in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE."))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C++"},'#include "Seeed_VEML6070.h"\n\n\n/*SAMD core*/\n#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE\n  #define SERIAL SerialUSB\n#else\n  #define SERIAL Serial\n#endif\n\nVEML6070 sensor;\n\nchar *UV_str[]={"low level","moderate level","high_level","very high","extreme"};\n\nerr_t read_UV()\n{\n    err_t ret=NO_ERROR;\n    u16 step;\n    sensor.wait_for_ready();\n    CHECK_RESULT(ret,sensor.read_step(step));\n    SERIAL.print("UV step = ");\n    SERIAL.println(step);\n    RISK_LEVEL level=sensor.convert_to_risk_level(step);\n    SERIAL.print("UV level is ");\n    SERIAL.println(UV_str[level]);\n    SERIAL.println(" ");\n    SERIAL.println(" ");\n    SERIAL.println(" ");\n    return ret;\n}\n\n\n\nvoid setup()\n{\n    SERIAL.begin(115200);\n    delay(10);\n    SERIAL.println("serial start!!");\n    delay(1000);\n    if(sensor.init())\n    {\n      SERIAL.println("init failed!!!");\n    }\n    /*threshold is 145 steps*/\n    /*enable*/\n    sensor.set_interrupt(INT_145_STEP,ENABLE);\n}\n\n\nvoid loop()\n{\n    if(read_UV())\n    {\n      SERIAL.print("read UV sensor failed!!");\n    }\n    //sensor.enable();\n    //sensor.disable();\n    delay(1000);\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"There are 2 demos in the library:"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"basic_demo.ino")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"    >This example can get the UV index and UV level from the serial.polling for data.\n")),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"INT_mode.ino"),"  "),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"    >here is a INT pad on the sensor module which connect to ACK pin of VEML6070. You can set UV threshold by 102 steps or 145 steps(only two choises).The INT pin outputs low when the UV value beyond limit.You can attach INT pin to a interrupt pin of host,To improve the efficiency of program operation.  \n"))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The library file may be updated. This code may not be applicable to the updated library file, so we recommend that you use the first two methods.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 5.")," Open the ",(0,a.kt)("strong",{parentName:"p"},"Serial Monitor")," of Arduino IDE by click ",(0,a.kt)("strong",{parentName:"p"},"Tool-> Serial Monitor"),". Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to ",(0,a.kt)("strong",{parentName:"p"},"115200"),"."))),(0,a.kt)("admonition",{title:"success",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If every thing goes well, when you use UV light to illuminate this module, you will see information like:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"4serial start!!\ncmd reg=32\nUV step = 20\nUV level is low level\n \n \n \nUV step = 125\nUV level is low level\n \n \n \nUV step = 511\nUV level is low level\n\n")),(0,a.kt)("h4",{id:"alert-function"},"Alert Function"),(0,a.kt)("p",null,"As we can see in the hardware Overview part, there is a ACK pin for user to work as a interrupt signal. The good news is that there are two threshold 102 step and 145 step to choose, the bad one is that you can not set your own number, only 102 and 145 are valid. The ACK pin default output low, once the UV value exceed the threshold you setted, the ACK pin output High. Let's come back to the example code ",(0,a.kt)("strong",{parentName:"p"},"INT_mode.ino"),"."),(0,a.kt)("p",null,"Line 46, the default setting of threshold is 145, if you want to use the 102, you should just change the code as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cxx",metastring:'title="old.ino"',title:'"old.ino"'},"sensor.set_interrupt(INT_145_STEP,ENABLE); //change this line \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cxx",metastring:'title="modify.ino"',title:'"modify.ino"'},"sensor.set_interrupt(INT_102_STEP,ENABLE); // modified\n")),(0,a.kt)("h3",{id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi"},"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)"),(0,a.kt)("h4",{id:"hardware-1"},"Hardware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1"),". Things used in this project:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove Base Hat for RasPi"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - I2C UV Sensor (VEML6070)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/thumbnail.jpg"})))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-I2C-UV-Sensor-(VEML6070)-p-3195.html"},"Get ONE Now"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2"),". Plug the Grove Base Hat into Raspberry."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3"),". Connect the Grove - I2C UV Sensor (VEML6070) to ",(0,a.kt)("strong",{parentName:"li"},"I2C")," port of the Base Hat."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4"),". Connect the Raspberry Pi to PC through USB cable.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/UV_Hat.jpg"})),(0,a.kt)("h4",{id:"software-1"},"Software"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1"),". Follow ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation"},"Setting Software")," to configure the development environment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2"),". Download the source file by cloning the grove.py library.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/Seeed-Studio/grove.py\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3"),". Excute below commands to run the code.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd grove.py/grove\npython grove_uv_sensor.py \n\n")),(0,a.kt)("p",null,"Following is the grove_uv_sensor.py code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\n\nfrom __future__ import print_function\nimport time, sys, signal, atexit\nfrom upm import pyupm_veml6070 as veml6070\n\ndef main():\n    # Instantiate a Vishay UV Sensor on the I2C bus 0\n    veml6070_sensor = veml6070.VEML6070(0);\n\n    ## Exit handlers ##\n    # This function stops python from printing a stacktrace when you hit control-C\n    def SIGINTHandler(signum, frame):\n        raise SystemExit\n\n    # This function lets you run code on exit, including functions from abpdrrt005pg2a5\n    def exitHandler():\n        print("Exiting")\n        sys.exit(0)\n\n    # Register exit handlers\n    atexit.register(exitHandler)\n    signal.signal(signal.SIGINT, SIGINTHandler)\n\n    # Read the value every second and detect the pressure\n    while(1):\n        print("UV Value: {0}".format(veml6070_sensor.getUVIntensity()))\n        time.sleep(1)\n\nif __name__ == \'__main__\':\n    main()\n\n\n')),(0,a.kt)("admonition",{title:"success",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If everything goes well, you will be able to see the following result")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"\npi@raspberrypi:~/grove.py/grove $ python grove_uv_sensor.py \nUV Value: 0\nUV Value: 0\nUV Value: 0\nUV Value: 0\n^CExiting\n\n")),(0,a.kt)("p",null,"You can quit this program by simply press ",(0,a.kt)("inlineCode",{parentName:"p"},"ctrl"),"+",(0,a.kt)("inlineCode",{parentName:"p"},"c"),"."),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/res/Grove%20-%20I2C%20UV%20Sensor(VEML6070).zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/res/Grove%20-%20I2C%20UV%20Sensor(VEML6070).zip"},"Grove - I2C UV Sensor (VEML6070) Eagle Files"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_VEML6070/archive/master.zip"},"Seeed VEML6070 Library"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/res/VEML6070.pdf"},"Datasheet VEML6070"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_VEML6070/raw/master/doc/designingveml6070.pdf"},"VEML6070 Application Note")))),(0,a.kt)("h2",{id:"project"},"Project"),(0,a.kt)("p",null,"This is the introduction Video of this product, simple demos, you can have a try."),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/3slfeHKSSCw?rel=0",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum")),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}m.isMDXComponent=!0}}]);