"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[68712],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),c=n,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||a;return r?i.createElement(h,o(o({ref:t},d),{},{components:r})):i.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},84873:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=r(87462),n=(r(67294),r(3905));const a={description:"Grove - Temperature&Humidity Sensor(DHT20)",title:"Grove - Temperature&Humidity Sensor(DHT20)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Temperature-Humidity-Sensor-DH20",last_update:{date:"1/3/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-Temperature-Humidity-Sensor-DH20",id:"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-Temperature-Humidity-Sensor-DH20",title:"Grove - Temperature&Humidity Sensor(DHT20)",description:"Grove - Temperature&Humidity Sensor(DHT20)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-Temperature-Humidity-Sensor-DH20.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Temp&Humi",slug:"/Grove-Temperature-Humidity-Sensor-DH20",permalink:"/Grove-Temperature-Humidity-Sensor-DH20",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-Temperature-Humidity-Sensor-DH20.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672704e3,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{description:"Grove - Temperature&Humidity Sensor(DHT20)",title:"Grove - Temperature&Humidity Sensor(DHT20)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Temperature-Humidity-Sensor-DH20",last_update:{date:"1/3/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Temperature&Humidity Sensor (DHT11)",permalink:"/Grove-TemperatureAndHumidity_Sensor"},next:{title:"Grove - Temperature&Humidity Sensor (HDC1000)",permalink:"/Grove-TemperatureAndHumidity_Sensor-HDC1000"}},s={},p=[{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pin Map",id:"pin-map",level:3},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play with MicroPython",id:"play-with-micropython",level:2},{value:"Connect RaspberryPi Pico",id:"connect-raspberrypi-pico",level:3},{value:"I2C Connection",id:"i2c-connection",level:4},{value:"Software",id:"software-1",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors-1",level:2}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg"})),(0,n.kt)("p",null,"The new Grove - Temperature & Humidity Sensor is based on the DHT20 sensor. The DHT20 is an upgraded version of the DHT11, compared with the previous version, the temperature and humidity measurement accuracy are higher, and the measurement range is larger. It features I2C output which means it is easier to use."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,n.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,n.kt)("p",null,"With the SenseCAP ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,n.kt)("p",null,"SenseCAP S210x series industrial sensors provide an out-of-box experience for environmental sensing. Please refer to the S2101 Wireless Temperature and Humidity Sensor with higher performance and robustness for air quality monitoring. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device"},"SenseCAP S210x")," for your next successful industrial project."),(0,n.kt)("table",{style:{marginLeft:"auto",marginRight:"auto"}},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",{align:"center"},(0,n.kt)("font",{size:4},(0,n.kt)("strong",null,"SenseCAP Industrial Sensor")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,n.kt)("img",{width:"20%",src:"https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png"}))))),(0,n.kt)("tr",null,(0,n.kt)("td",{align:"center"},(0,n.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,n.kt)("strong",null,"S2101 Air Temp & Humidity")))))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"High Accuracy:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Temperature Accuracy:\xb1 0.5 \u2103"),(0,n.kt)("li",{parentName:"ul"},"Humidity Accuracy:\xb1 3 % RH ( 25 \u2103 )"))),(0,n.kt)("li",{parentName:"ul"},"Wide measurement ranges:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Measuring Range (Humidity):0 ~ 100% RH"),(0,n.kt)("li",{parentName:"ul"},"Measuring Range (Temperature):-40 ~ + 80 \u2103"))),(0,n.kt)("li",{parentName:"ul"},"Better compatibility\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Digital output"),(0,n.kt)("li",{parentName:"ul"},"I\xb2C interface"))),(0,n.kt)("li",{parentName:"ul"},"Fully calibrated"),(0,n.kt)("li",{parentName:"ul"},"Excellent long-term stability"),(0,n.kt)("li",{parentName:"ul"},"Quick response and anti-interference capability"),(0,n.kt)("li",{parentName:"ul"},"Wide voltage support 2.5-5.5V DC")),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Input Voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0 V \u2013 5.5 V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Measuring Humidity Range"),(0,n.kt)("td",{parentName:"tr",align:null},"0 ~ 100% RH")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Measuring Temperature Range"),(0,n.kt)("td",{parentName:"tr",align:null},"-40 ~ + 80 \u2103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Humidity Accuracy"),(0,n.kt)("td",{parentName:"tr",align:null},"\xb1 3 % RH ( 25 \u2103 )")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Temperature Accuracy"),(0,n.kt)("td",{parentName:"tr",align:null},"\xb1 0.5 \u2103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Output Signal"),(0,n.kt)("td",{parentName:"tr",align:null},"I2C signal")))),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("h3",{id:"pin-map"},"Pin Map"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pin-mode.jpg"})),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg"})))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoretical compatibility. We only provide software library or code examples for the Arduino platform in most cases. It is not possible to provide software library/demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,n.kt)("h4",{id:"hardware"},"Hardware"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Materials required")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Temperature & Humidity Sensor V2.0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/getonenow.png"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html",target:"_blank"},"Get One Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Connect the Grove Temperature & Humidity Sensor V2.0 to port ",(0,n.kt)("strong",{parentName:"p"},"I2C")," of Grove-Base Shield.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino to PC through a USB cable."))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/zhanshitu4.png"})),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we strongly recommend you to see ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,n.kt)("p",null,"Compared with DHT11, the DHT20 Temperature and Humidity Sensor has clear changes in supply voltage, measurement range of temperature and humidity, precision and quality of output signal."),(0,n.kt)("p",null,"It has equipped with a fully calibrated digital I2C interface, so there are slightly different definitions of pins. You should download and install the library ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor"},"here")," to use DHT20."),(0,n.kt)("p",null,"Once it is all set up, we can upload the sample code to see if it works:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C++"},'// Example testing sketch for various DHT humidity/temperature sensors\n// Written by ladyada, public domain\n#include "Wire.h"\n#include "DHT.h"\n#define DHTTYPE DHT20   // DHT 20\n/*Notice: The DHT10 and DHT20 is different from other DHT* sensor ,it uses i2c interface rather than one wire*/\n/*So it doesn\'t require a pin.*/\nDHT dht(DHTTYPE);         //   DHT10 DHT20 don\'t need to define Pin\n\n#if defined(ARDUINO_ARCH_AVR)\n    #define debug  Serial\n\n#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)\n    #define debug  SerialUSB\n#else\n    #define debug  Serial\n#endif\n\nvoid setup() {\n\n    debug.begin(115200);\n    debug.println("DHTxx test!");\n    Wire.begin();\n\n    /*if using WIO link,must pull up the power pin.*/\n    // pinMode(PIN_GROVE_POWER, OUTPUT);\n    // digitalWrite(PIN_GROVE_POWER, 1);\n\n    dht.begin();\n}\n\nvoid loop() {\n    float temp_hum_val[2] = {0};\n    // Reading temperature or humidity takes about 250 milliseconds!\n    // Sensor readings may also be up to 2 seconds \'old\' (its a very slow sensor)\n\n\n    if (!dht.readTempAndHumidity(temp_hum_val)) {\n        debug.print("Humidity: ");\n        debug.print(temp_hum_val[0]);\n        debug.print(" %\\t");\n        debug.print("Temperature: ");\n        debug.print(temp_hum_val[1]);\n        debug.println(" *C");\n    } else {\n        debug.println("Failed to get temprature and humidity value.");\n    }\n\n    delay(1500);\n}\n')),(0,n.kt)("p",null,"After done uploading, we can use Serial Monitor in Arduino to see the result."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Serial-Monitor.png"})),(0,n.kt)("p",null,"And the output should be something like... :"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/output.png"})),(0,n.kt)("p",null,"The values are based on the current environment."),(0,n.kt)("h2",{id:"play-with-micropython"},"Play with MicroPython"),(0,n.kt)("h3",{id:"connect-raspberrypi-pico"},"Connect RaspberryPi Pico"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Materials required")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"RaspberryPi Pico"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove Shield for Pi Pico v1.0"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Temperature & Humidity Sensor V2.0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https:///files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pico1.png"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pico-shield1.png"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/getonenow.png"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html"},"Get ONE Now"))))),(0,n.kt)("h4",{id:"i2c-connection"},"I2C Connection"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Plug RaspberryPi Pico into Grove Shield for Pi Pico.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2."),"  Plug Grove - CO2 & Temperature & Humidity Sensor - SCD41 to ",(0,n.kt)("strong",{parentName:"p"},"I2C1")," port of Grove Shield for Pi Pico.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Connect RaspberryPi Pico to a PC through a USB cable."))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pico-connect.png"})),(0,n.kt)("p",null,"This is the basic hardware connecting."),(0,n.kt)("h3",{id:"software-1"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," We need to use third-party library to control ",(0,n.kt)("strong",{parentName:"li"},"Grove - Temperature & Humidity Sensor V2.0"))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/dht20.py"},"dht20.py")," library and save it to the computer.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Use Thonny to open the files, click on the "file" option at the top left, and then select "save as".'))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Thonny1.png"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},'Select "Raspberry Pi Pico" and save it in Pico.')),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Thonny2.png"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},'Once we saving, Thonny will ask to name the file. Here we type "lcd1602.py" as its name, and we also need to type the extension of the file, or it can not be used.')),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/zhanshitu5.png"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Upload the code.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c++"},'from machine import I2C\nfrom dht20 import DHT20\ni2c = I2C(0)\ndht20 = DHT20(i2c)\nwhile True:\n    temper = dht20.dht20_temperature()\n    humidity = dht20.dht20_humidity()\n    print("temper : " + str(temper))\n    print("humidity : " + str(humidity))\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," The result should look like:")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/zhanshitu6.png"})),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Grove-Temperature&Humidity-Sensor-V2.1.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Pico-micropython-master.zip"},"Grove - Temperature & Humidity Sensor V2.0(DHT20)"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("h2",{id:"upgradable-to-industrial-sensors-1"},"Upgradable to Industrial Sensors"),(0,n.kt)("p",null,"With the SenseCAP ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,n.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))))}u.isMDXComponent=!0}}]);