"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[35837],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>S});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,S=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(S,a(a({ref:t},d),{},{components:n})):r.createElement(S,a({ref:t},d))}));function S(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={description:"6-Axis IMU Usage on Seeed Studio XIAO nRF52840 Sense",title:"6-Axis IMU Usage on Seeed Studio XIAO nRF52840 Sense",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-BLE-Sense-IMU-Usage",last_update:{date:"1/11/2023",author:"shuxu hu"}},a="The 6-Axis IMU Usage on Seeed Studio XIAO nRF52840 Sense",s={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE-Sense-IMU-Usage",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE-Sense-IMU-Usage",title:"6-Axis IMU Usage on Seeed Studio XIAO nRF52840 Sense",description:"6-Axis IMU Usage on Seeed Studio XIAO nRF52840 Sense",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE-Sense-IMU-Usage.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense",slug:"/XIAO-BLE-Sense-IMU-Usage",permalink:"/XIAO-BLE-Sense-IMU-Usage",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE-Sense-IMU-Usage.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"6-Axis IMU Usage on Seeed Studio XIAO nRF52840 Sense",title:"6-Axis IMU Usage on Seeed Studio XIAO nRF52840 Sense",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-BLE-Sense-IMU-Usage",last_update:{date:"1/11/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"NFC Usage on Seeed Studio XIAO nRF52840 (Sense)",permalink:"/XIAO-BLE-Sense-NFC-Usage"},next:{title:"PDM Microphone Usage on Seeed Studio XIAO nRF52840 Sense",permalink:"/XIAO-BLE-Sense-PDM-Usage"}},l={},p=[{value:"View accelerometer, gyroscope and temperature data on serial monitor",id:"view-accelerometer-gyroscope-and-temperature-data-on-serial-monitor",level:2},{value:"What&#39;s more?",id:"whats-more",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-6-axis-imu-usage-on-seeed-studio-xiao-nrf52840-sense"},"The 6-Axis IMU Usage on Seeed Studio XIAO nRF52840 Sense"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Seeed Studio XIAO nRF52840 Sense")," is equipped with a high-precision  ",(0,o.kt)("strong",{parentName:"p"},"6-Axis Inertial Measurement Unit (IMU)")," which includes a ",(0,o.kt)("strong",{parentName:"p"},"3-axis accelerometer")," and a ",(0,o.kt)("strong",{parentName:"p"},"3-axis gyroscope"),". There is also an ",(0,o.kt)("strong",{parentName:"p"},"embedded temperature sensor")," on this module. We believe that this module can greatly help in your TinyML projects. This wiki will introduce the basics of using this IMU on this board."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Seeed Studio XIAO nRF52840")," is not equipped with this IMU module."),(0,o.kt)("li",{parentName:"ul"},'The IMU function will perform better when we use the "Seeed nrf52 mbed-enabled Boards Library", so we highly recommon that.')),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("h2",{id:"view-accelerometer-gyroscope-and-temperature-data-on-serial-monitor"},"View accelerometer, gyroscope and temperature data on serial monitor"),(0,o.kt)("p",null,"In this example, we are going to view the accelerometer, gyroscope and temperature data from the Seeed Studio XIAO nRF52840 Sense on the Arduino Serial Monitor."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1"),". ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3"},"Download Seeed_Arduino_LSM6DS3 Library")," as a zip file")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png",alt:"pir",width:1e3,height:"auto"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2"),". Open Arduino IDE, navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"Sketch > Include Library > Add .ZIP Library...")," and open the downloaded zip file.")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 3.")," Navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"File > Examples > Accelerometer And Gyroscope LSM6DS3 > HighLevelExample")," to open the ",(0,o.kt)("strong",{parentName:"li"},"HighLevelExample"))),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/IMU-install.png",alt:"pir",width:550,height:"auto"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 4.")," Upload the codes and open the ",(0,o.kt)("strong",{parentName:"li"},"Serial Monitor"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Once you upload the codes, it will not be executed automatically until you click ",(0,o.kt)("strong",{parentName:"p"},"Serial Monitor")," on the upper right corner of the Arduino window."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/IMU-example-output.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"Now you will see the accelerometer, gyroscope and temperature data displayed one after the other on the serial monitor as above!"),(0,o.kt)("h2",{id:"whats-more"},"What's more?"),(0,o.kt)("p",null,"If you want to try out more examples you can navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"File > Examples > Accelerometer And Gyroscope LSM6DS3")," and check all the examples under ",(0,o.kt)("strong",{parentName:"p"},"Accelerometer And Gyroscope LSM6DS3")))}u.isMDXComponent=!0}}]);