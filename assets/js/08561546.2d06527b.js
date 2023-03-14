"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[11133],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return r?a.createElement(h,o(o({ref:t},d),{},{components:r})):a.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88834:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={description:"Grove - Infrared Reflective Sensor",title:"Grove - Infrared Reflective Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Infrared_Reflective_Sensor",last_update:{date:"1/5/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Light/Grove-Infrared_Reflective_Sensor",id:"Sensor/Grove/Grove_Sensors/Light/Grove-Infrared_Reflective_Sensor",title:"Grove - Infrared Reflective Sensor",description:"Grove - Infrared Reflective Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Light/Grove-Infrared_Reflective_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Light",slug:"/Grove-Infrared_Reflective_Sensor",permalink:"/Grove-Infrared_Reflective_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Light/Grove-Infrared_Reflective_Sensor.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672876800,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{description:"Grove - Infrared Reflective Sensor",title:"Grove - Infrared Reflective Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Infrared_Reflective_Sensor",last_update:{date:"1/5/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Flame Sensor",permalink:"/Grove-Flame_Sensor"},next:{title:"Grove - I2C Color Sensor",permalink:"/Grove-I2C_Color_Sensor"}},s={},p=[{value:"Version Tracker",id:"version-tracker",level:2},{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Line Following",id:"line-following",level:4},{value:"Hardware",id:"hardware",level:5},{value:"Rotary Speed Detection",id:"rotary-speed-detection",level:4},{value:"Hardware",id:"hardware-1",level:5},{value:"Software",id:"software",level:5},{value:"Play With Raspberry Pi",id:"play-with-raspberry-pi",level:3},{value:"Hardware",id:"hardware-2",level:4},{value:"Software",id:"software-1",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/main.jpg"})),(0,n.kt)("p",null,"Grove - Infrared Reflective Sensor is used to detect the presence of an object within a specific range. The sensor consists of an IR LED and a photosensor (phototransistor) pair. The light emitted by the IR LED gets reflected by any object placed in front of the sensor and this reflection is detected by the photosensor(phototransistor). Any white (or lighter) colored surface reflects more than black (or darker) colored surface."),(0,n.kt)("p",null,"When the reflected light is detected, it produces ",(0,n.kt)("strong",{parentName:"p"},"Digital LOW")," (or Binary ",(0,n.kt)("strong",{parentName:"p"},"0"),") output on the ",(0,n.kt)("strong",{parentName:"p"},"SIG")," pin. The on-board LED indicator will also glow. If no reflection is detected or if the object is too far from the sensor, the output on the ",(0,n.kt)("strong",{parentName:"p"},"SIG")," pin stays at ",(0,n.kt)("strong",{parentName:"p"},"Digital High")," (Binary ",(0,n.kt)("strong",{parentName:"p"},"1"),"). The on-board LED indicator will be off as well. The detectable range of this sensor is 4\u201316 mm. The module incorporates a Rail-to-Rail Operational Amplifier to amplify the output of phototransistor. There is a potentiometer which can be used to adjust the gain of the amplifier, that is, sensitivity of detection."),(0,n.kt)("p",null,"With this sensor, you can build the following (but not limited to) applications: ",(0,n.kt)("strong",{parentName:"p"},"line following robots"),", ",(0,n.kt)("strong",{parentName:"p"},"optical encoders")," and ",(0,n.kt)("strong",{parentName:"p"},"object counting applications"),"."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png",width:"210",height:"41",border:"0"}))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This product is also mildly sensitive to non-IR radiations and hence any bright light on photosensor impairs or disturbs IR light detection.")),(0,n.kt)("h2",{id:"version-tracker"},"Version Tracker"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Product version"),(0,n.kt)("th",{parentName:"tr",align:null},"Changes"),(0,n.kt)("th",{parentName:"tr",align:null},"Release date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Versions older than v1.2"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial"),(0,n.kt)("td",{parentName:"tr",align:null},"June 2012\u200e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Version 1.2(current version)"),(0,n.kt)("td",{parentName:"tr",align:null},"Optimized layout"),(0,n.kt)("td",{parentName:"tr",align:null},"April 2016")))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Grove compatible and easy to use"),(0,n.kt)("li",{parentName:"ul"},"Highly sensitive and reliable"),(0,n.kt)("li",{parentName:"ul"},"Small footprint"),(0,n.kt)("li",{parentName:"ul"},"Adjustable sensitivity for different occasions")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"More details about Grove modules please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove System"))),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating voltage(V)"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3\u20135V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating current(mA)"),(0,n.kt)("td",{parentName:"tr",align:null},"14.69\u201315.35 mA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Effective detectable distance"),(0,n.kt)("td",{parentName:"tr",align:null},"4\u201315 mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Response time"),(0,n.kt)("td",{parentName:"tr",align:null},"10 \u03bcs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Phototransistor: Peak sensitivity wavelength"),(0,n.kt)("td",{parentName:"tr",align:null},"800 nm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"IR LED: Peak light emitting wavelength"),(0,n.kt)("td",{parentName:"tr",align:null},"940 nm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Reflective photosensor"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/RPR-220.pdf"},"datasheet"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Output operational amplifiers"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/LMV358_datasheet.pdf"},"datasheet"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Weight"),(0,n.kt)("td",{parentName:"tr",align:null},"4 g")))),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg"})))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Grove-Infrared_Reflective_Sensor_v1.2_hardware_overview_1200_z.jpg"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RPR220 Reflective photosensor")," - Highly sensitive reflective photosensor."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"LMV358")," - rail-to-rail operational amplifier."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"LED Indicator")," - The LED will switch on when the received infrared light intensity exceeds a preset level."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Light sensitivity adjustment potentiometer")," - adjust the sensitivity of photosensor to light.")),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"Let us see how to implement few basic applications with this module:"),(0,n.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,n.kt)("h4",{id:"line-following"},"Line Following"),(0,n.kt)("p",null,"This sensor can be used to help a robotic car follow a black line."),(0,n.kt)("h5",{id:"hardware"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the following materials:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Infrared Reflective Sensor"),(0,n.kt)("th",{parentName:"tr",align:null},"White paper and black pen"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/thumbnail.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\ude42")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Connect Grove - Infrared Reflective Sensor to any port of Grove-Base Shield via the Grove cable, we use ",(0,n.kt)("strong",{parentName:"p"},"D2")," in this demo.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Place this sensor 12mm above the white(or other bright color) paper."))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-4.JPG"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Adjust the potentiometer with a screwdriver to change the sensitivity of reflective photosensor, until the LED indicator glows. As your rotate clockwise, the reflective photosensor will be more sensitive to light.")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-5.JPG"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Use a proper screw-driver to adjust the tiny potentiometer. Applying heavy pressure or frequent adjustments might damage the wiper of the potentiometer.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5.")," Maintain the vertical distance, move the sensor horizontally towards the black line. The indicator LED should go off over the black line. If it is still on, adjust the potentiometer until it is off.")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-6.JPG"})),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-7.JPG"})),(0,n.kt)("h4",{id:"rotary-speed-detection"},"Rotary Speed Detection"),(0,n.kt)("p",null,"Let us implement simple optical encoder to detect the speed of a motor"),(0,n.kt)("h5",{id:"hardware-1"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the following materials:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Infrared Reflective Sensor"),(0,n.kt)("th",{parentName:"tr",align:null},"3V/5V DC Motor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/thumbnail.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/N30%203V%20DC%2012000RPM%20DC%20Motor.jpg"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/N30-3V-DC-12000RPM-DC-Motor-p-1886.html"},"Get One Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Connect the Infrared Reflective Sensor to the ",(0,n.kt)("strong",{parentName:"li"},"D2")," port of Grove - Base Shield and connect the motor to the ",(0,n.kt)("strong",{parentName:"li"},"D6")," (In fact, you can just connct VCC and GND to power the motor).")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/connect_arduino.jpg"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Attach a round, white paper plate (with a black line marked on it) to the motor. Place the sensor near this rotatory encoder. Run the motor.")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-9.JPG"})),(0,n.kt)("h5",{id:"software"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Download the library ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/TimerOne-ArduinoLib.zip"},"Arduino timer1 ",(0,n.kt)("em",{parentName:"a"},"library"))," and add it into the libraries file of Arduino IDE. A ",(0,n.kt)("a",{parentName:"p",href:"/Guide_to_use_demos_downloaded_from_Seeed-s_Github/"},"guide")," about how to run our demo code.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Open a new sketch, and copy the following code into the sketch."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c++"},'unsigned int counter=0;\nvoid blink()\n{\n    counter++;\n}\nvoid timerIsr()\n{\n    Timer1.detachInterrupt();  //disable the timer1\n    Serial.print("The speed of the motor: ");\n    Serial.print(counter,DEC);\n    Serial.println("round/s");\n    counter=0;\n    Timer1.attachInterrupt( timerIsr );  //enable the timer1\n}\nvoid setup()\n{\n    Serial.begin(9600);\n    Timer1.initialize(1000000); // set a timer of length 1sec\n    attachInterrupt(0, blink, RISING);  //INT0\n    Timer1.attachInterrupt( timerIsr ); // attach the service routine here\n}\nvoid loop()\n{\n\n}\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"how to upload code"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 5.")," Open the ",(0,n.kt)("strong",{parentName:"p"},"Serial Monitor")," of Arduino IDE by click ",(0,n.kt)("strong",{parentName:"p"},"Tool-> Serial Monitor"),". Or tap the ++ctrl+shift+m++ key at the same time. if every thing goes well, you will get the speed."))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-10.JPG"})),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-12.JPG"})),(0,n.kt)("h3",{id:"play-with-raspberry-pi"},"Play With Raspberry Pi"),(0,n.kt)("h4",{id:"hardware-2"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the following materials:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,n.kt)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Infrared Reflective Sensor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/thumbnail.jpg"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/GrovePi%2B-p-2241.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html"},"Get One Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Plug the GrovePi_Plus into Raspberry.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Connect Grove - Infrared Reflective Sensor to ",(0,n.kt)("strong",{parentName:"p"},"D4")," port of GrovePi_Plus.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Connect the Raspberry to PC via USB cable."))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/connect_pi.jpg"})),(0,n.kt)("h4",{id:"software-1"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Follow ",(0,n.kt)("a",{parentName:"p",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/"},"Setting Software")," to configure the development environment.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Follow ",(0,n.kt)("a",{parentName:"p",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/"},"Updating the Firmware")," to update the newest firmware of GrovePi."))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"In this wiki we use the path ",(0,n.kt)("strong",{parentName:"p"},"~/GrovePi/")," instead of ",(0,n.kt)("strong",{parentName:"p"},"/home/pi/Desktop/GrovePi"),", you need to make sure Step 2 and Step 3 use the same path.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"We strongly suggest you to update the firmware, or for some sensors you may get errors.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Git clone the Github repository.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/DexterInd/GrovePi.git\n\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Check the code.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"\ncd ~/GrovePi/Software/Python\nsudo nano grove_infrared_reflective_sensor.py\n\n")),(0,n.kt)("p",null,"Then the code should be like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'import time\nimport grovepi\n\xa0\n# Connect the Grove Infrared Reflective Sensor to digital port D4\n# SIG,NC,VCC,GND\nsensor = 4\n\xa0\ngrovepi.pinMode(sensor,"INPUT")\n\xa0\nwhile True:\n    try:\n        # Sensor returns HIGH on a black surface and LOW on a white surface\n        if grovepi.digitalRead(sensor) == 1:\n            print "black surface detected"\n        else:\n            print "white surface detected"\n\xa0\n        time.sleep(.5)\n\xa0\n    except IOError:\n        print "Error"\n')),(0,n.kt)("p",null,"Then tap ++ctrl+x++ to quit nano."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5.")," To run the demo, execute the following command in terminal:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo python grove_infrared_reflective_sensor.py\n\n")),(0,n.kt)("p",null,"The result should be like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"\npi@raspberrypi:~/GrovePi/Software/Python $ sudo python grove_infrared_reflective_sensor.py\nblack surface detected\nblack surface detected\nblack surface detected\nblack surface detected\nblack surface detected\nwhite surface detected\nwhite surface detected\nwhite surface detected\nblack surface detected\nblack surface detected\nblack surface detected\nblack surface detected\nblack surface detected\nblack surface detected\n\n")),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/Grove%20-%20Infrared%20Reflective%20Sensor%20v1.2_eaglefile.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Zip]"),"  ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/Grove%20-%20Infrared%20Reflective%20Sensor%20v1.2_eaglefile.zip"},"Grove-Infrared Reflective Sensor v1.2 Eagle Files")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Zip]"),"  ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/TimerOne-ArduinoLib.zip"},"Arduino Timer1 Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Pdf]"),"  ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/RPR220_datasheet.pdf"},"RPR220 Datasheet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Pdf]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/LMV358_datasheet.pdf"},"Datasheet"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,n.kt)("p",null,"With the SenseCAP ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,n.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))))}m.isMDXComponent=!0}}]);