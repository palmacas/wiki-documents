"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[58388],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(a),m=n,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return a?r.createElement(h,l(l({ref:t},s),{},{components:a})):r.createElement(h,l({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},52881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={description:"Camera_Shield",title:"Camera Shield",tags:["Shield","camera"],keywords:["Shield","camera"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Camera_Shield",last_update:{date:"01/10/2023",author:"Eico"},no_comments:!1},l=void 0,o={unversionedId:"Top_Brand/Arduino/shield/Camera_Shield",id:"Top_Brand/Arduino/shield/Camera_Shield",title:"Camera Shield",description:"Camera_Shield",source:"@site/docs/Top_Brand/Arduino/shield/Camera_Shield.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/Camera_Shield",permalink:"/Camera_Shield",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/Camera_Shield.md",tags:[{label:"Shield",permalink:"/tags/shield"},{label:"camera",permalink:"/tags/camera"}],version:"current",lastUpdatedBy:"Eico",lastUpdatedAt:1673308800,formattedLastUpdatedAt:"Jan 10, 2023",frontMatter:{description:"Camera_Shield",title:"Camera Shield",tags:["Shield","camera"],keywords:["Shield","camera"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Camera_Shield",last_update:{date:"01/10/2023",author:"Eico"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"CAN-BUS Shield V2.0",permalink:"/CAN-BUS_Shield_V2.0"},next:{title:"Energy Shield",permalink:"/Energy_Shield"}},p={},d=[{value:"Specification",id:"specification",level:2},{value:"Hardware Interface",id:"hardware-interface",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],s={toc:d};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Camera_Shield/img/CameraShield.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"Camera Shield is the first shield board that support photograph, it is based on the solution of ",(0,n.kt)("strong",{parentName:"p"},"VC0706 + OV7725"),", the former is a high performance camera processor with enhanced image processing functions and it embedded the hard-wired JPEG codec, and the latter is a high-performance 1/4 inch, single-chip VGA camera and image processor in a small footprint package. We have written our library to control the Camera Shield via UART/SPI, which makes it possible to take picture easily by your Arduino board. Come on and use it to take a photo!"),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fully Compatible with Arduino or Seeeduino")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Still Picture Resolution: (640x480) JPEG Output")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"High Speed Serial Bus Control: UART/SPI")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Integrated MicroSD card Interface")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Power Supply: 5 V"))),(0,n.kt)("h2",{id:"hardware-interface"},"Hardware Interface"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Camera Shield can be controlled via SPI or UART interface."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Camera_Shield/img/CameraShield_Interface.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Camera_Shield/img/CameraShield_Interface2.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Here is a brief introduction to use Camera Shield."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Camera_Shield_VC0706"},"Camera Shield library")," file from gitHub and then extract the library file to your Arduino libraries folder.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the example folder in libraries/Camera_Shield_VC0706, you will find the snapshot example sketch, double click the snapshot.ino file to open it with arduino IDE.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"We arrange the library to make it possible to control the Camera Shield via Software Serial/Hardware Serial/SPI, you can have your choice via modifying the code."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "SoftwareSerial.h"\n#include <VC0706_UART.h>\n#include <SD.h>\n#include <SPI.h>\n#define SS_SD  10\n\n//use software serial\nSoftwareSerial cameraconnection(2,3);//Rx, Tx\nVC0706 cam = VC0706(&cameraconnection);\n//use hardware serial\n//VC0706 cam = VC0706(&Serial1);\n\nvoid setup()\n{\n    Serial.begin(9600);\n    Serial.println("VC0706 Camera Snapshot Test ...");\n\n    if (!SD.begin(SS_SD)) {\n        Serial.println("SD Card init failed...");\n        return;\n    }\n    if(true == cameraInit()){\n        snapShot();\n    }else{\n        Serial.println("camera init error...");\n    }\n}\n\nvoid loop()\n{\n    //nothing to do\n}\n\nbool cameraInit()\n{\n    cam.begin(BaudRate_19200);\n    char *reply = cam.getVersion();\n    if (reply == 0) {\n        Serial.println("Failed to get version");\n        return false;\n    } else {\n        Serial.println("version:");\n        Serial.println("-----------------");\n        Serial.println(reply);\n        Serial.println("-----------------");\n        return true;\n    }\n}\n\nvoid snapShot()\n{\n    Serial.println("Snap in 3 secs...");\n    delay(3000);\n    if (! cam.takePicture()){\n        Serial.println("Failed to snap!");\n    }else {\n        Serial.println("Picture taken!");\n    }\n    // Create an image with the name IMAGExx.JPG\n    char filename[13];\n    strcpy(filename, "IMAGE00.JPG");\n    for (int i = 0; i < 100; i++) {\n        filename[5] = \'0\' + i/10;\n        filename[6] = \'0\' + i%10;\n        // create if does not exist, do not open existing, write, sync after write\n        if (! SD.exists(filename)) {\n            break;\n        }\n    }\n    // Open the file for writing\n    File imgFile = SD.open(filename, FILE_WRITE);\n    Serial.print("create ");\n    Serial.println(filename);\n    uint16_t jpglen = cam.getFrameLength();\n    Serial.print("wait to fetch ");\n    Serial.print(jpglen, DEC);\n    Serial.println(" byte image ...");\n    int32_t time = millis();\n    cam.getPicture(jpglen);\n    uint8_t *buffer;\n    while(jpglen != 0){\n        uint8_t bytesToRead = min(32, jpglen);\n        buffer = cam.readPicture(bytesToRead);\n        imgFile.write(buffer, bytesToRead);\n        //Serial.print("Read ");  Serial.print(bytesToRead, DEC); Serial.println(" bytes");\n        jpglen -= bytesToRead;\n    }\n    imgFile.close();\n    time = millis() - time;\n    Serial.println("Done!");\n    Serial.print("Took "); Serial.print(time); Serial.println(" ms");\n    cam.resumeVideo();\n}\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"use Hardware Serial or Software Serial for communication")),(0,n.kt)("p",null,"we use Serial(Software Serial or Hardware serial) to communicate with Camera Shield, you can generate your applicance like below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"//use software serial\nSoftwareSerial cameraconnection(2,3);//Rx, Tx\nVC0706 cam = VC0706(&amp;cameraconnection);\n")),(0,n.kt)("p",null,"or if you want to use the hardware serial, you can do it like below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"//use hardware serial\nVC0706 cam = VC0706(&amp;Serial1);\n")),(0,n.kt)("p",null,"We use the software serial by default. If hardware serial is your choise, you need to modify the code in VC0706_UART head file. Change"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"#define USE_SOFTWARE_SERIAL         1\n")),(0,n.kt)("p",null,"to"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"#define USE_SOFTWARE_SERIAL         0\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Use UART or SPI for data transmission")),(0,n.kt)("p",null,"Usually, you can take a picture by the following steps:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"cam.takePicture();\nuint16_t jpglen = cam.getFrameLength();\ncam.getPicture(jpglen);\nbuffer = cam.readPicture(bytesToRead);\n")),(0,n.kt)("p",null,"and we allow you to read data via two mode:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"UART \u2014\u2014 slower mode. Software Serial only support 9600/19200 baud rate. Hardware Serial can be 115200/38400/19200/9600. It will take about 30s to get a picture if you choose the uart mode and at 19200 baud rate."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ol",{parentName:"li",start:2},(0,n.kt)("li",{parentName:"ol"},"SPI \u2014\u2014 faster mode. It will only take about 1s or 2s to get the whole picture back.")))),(0,n.kt)("p",null,"You can choose your mode in VC0706_UART header file. We use the SPI mode by default."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"#define TRANSFER_BY_SPI             1\n")),(0,n.kt)("p",null,"change it to"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"#define TRANSFER_BY_SPI             0\n")),(0,n.kt)("p",null,"to use the UART mode."),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Stack the Camera Shield onto Arduino and Insert a mocro-SD card to the Camera Shield, you should pay attention to the serial jumpers that you defined in you code.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Compile the sketch and upload it to your arduino board. Open the Serial port of Arduino IDE, you can see the debug information shown from the Serial port. and the SD card status LED will blink quickly during the data transfer.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"When the program finishes, pull out the SD card and insert it to your computer, you can see your photos. Have fun"))),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Camera_Shield/res/CameraShield-Schematic.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Camera_Shield_VC0706"},"Camera Shield Library on gitHub"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Camera_Shield/res/CameraShield-Schematic.zip"},"Schematic of Camera Shield")))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}c.isMDXComponent=!0}}]);