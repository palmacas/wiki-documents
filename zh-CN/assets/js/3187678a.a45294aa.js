"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(87462),r=(n(67294),n(3905));const a={description:"Reading Coronavirus Live Data using Wio Terminal",title:"Reading Coronavirus Live Data using Wio Terminal",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Reading-COVID19",last_update:{date:"1/31/2023",author:"jianjing Huang"}},o="Reading Coronavirus COVID-19 Live Data using Wio Terminal",l={unversionedId:"Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Reading-COVID19",id:"Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Reading-COVID19",title:"Reading Coronavirus Live Data using Wio Terminal",description:"Reading Coronavirus Live Data using Wio Terminal",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Reading-COVID19.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial",slug:"/Wio-Terminal-Reading-COVID19",permalink:"/zh-CN/Wio-Terminal-Reading-COVID19",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Reading-COVID19.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"2023\u5e741\u670831\u65e5",frontMatter:{description:"Reading Coronavirus Live Data using Wio Terminal",title:"Reading Coronavirus Live Data using Wio Terminal",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Reading-COVID19",last_update:{date:"1/31/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Pressure sensor using the Wio terminal",permalink:"/zh-CN/Barometric-Pressure-sensor-using-the-Wio-terminal"},next:{title:"Build a IR Thermal Imaging Camera using Wio Terminal",permalink:"/zh-CN/Wio-Terminal-Thermal-Camera"}},s={},d=[{value:"Part List",id:"part-list",level:2},{value:"Features",id:"features",level:2},{value:"Arduino libraries needed",id:"arduino-libraries-needed",level:2},{value:"Arduino Instructions",id:"arduino-instructions",level:2},{value:"Complete Code",id:"complete-code",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"reading-coronavirus-covid-19-live-data-using-wio-terminal"},"Reading Coronavirus COVID-19 Live Data using Wio Terminal"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/COVID-19.gif"})),(0,r.kt)("p",null,"This wiki is a modification of ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Reading-Github/"},"Reading Github Repository Stats from Wio Terminal"),", where it is modified to access to ",(0,r.kt)("a",{parentName:"p",href:"https://covid19api.com/"},"Coronavirus COVID19 API")," and parse the data and display Live COVID-19 data on the LCD screen."),(0,r.kt)("h2",{id:"part-list"},"Part List"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Wio Terminal"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-p-4516.html"},"Wio Terminal Battery Chassis")))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Connects to a https server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Obtain COVID-19 live data API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pressing button to refresh data"))),(0,r.kt)("h2",{id:"arduino-libraries-needed"},"Arduino libraries needed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install the LCD screen Library ",(0,r.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_LCD"),", please visit ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/"},"Wio Terminal LCD")," for more information.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Visit the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bblanchon/ArduinoJson"},"ArduinoJson")," repositories and download the entire repo to your local drive."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Now, the ArduinoJson library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,r.kt)("inlineCode",{parentName:"li"},"sketch")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Include Library")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Add .ZIP Library"),", and choose the ",(0,r.kt)("inlineCode",{parentName:"li"},"ArduinoJson")," file that you've have just downloaded."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For more information about Https connection, please visit ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Wi-Fi/#wi-fi-https-connection-example-code"},(0,r.kt)("strong",{parentName:"a"},"here")),"."))),(0,r.kt)("h2",{id:"arduino-instructions"},"Arduino Instructions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download the ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/Free_Fonts.h"},(0,r.kt)("inlineCode",{parentName:"a"},"Free_Fonts.h"))," header file so that can use abbreviations for the free fonts included in the LCD library. Please make sure to put this header file in the same location as the Arduino Sketch.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download the Complete code ",(0,r.kt)("a",{parentName:"p",href:"http://files.seeedstudio.com/wiki/Wio-Terminal/res/covid.zip"},"here")," or copy the following.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Upload the code."))),(0,r.kt)("h2",{id:"complete-code"},"Complete Code"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Change the ",(0,r.kt)("inlineCode",{parentName:"p"},"ssid")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," to your Network Wi-Fi."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "rpcWiFi.h"\n#include <WiFiClientSecure.h>\n#include <ArduinoJson.h>\n#include"Free_Fonts.h"\n#include"TFT_eSPI.h"\nTFT_eSPI tft;\n\nconst char* ssid     = "YourNetworkName";\nconst char* password = "yourNetworkPassword";\n\nconst char*  server = "api.covid19api.com";  // Server URL\n\nconst char* test_root_ca = \\\n                            "-----BEGIN CERTIFICATE-----\\n"\n                            "MIIEkjCCA3qgAwIBAgIQCgFBQgAAAVOFc2oLheynCDANBgkqhkiG9w0BAQsFADA/\\n"\n                            "MSQwIgYDVQQKExtEaWdpdGFsIFNpZ25hdHVyZSBUcnVzdCBDby4xFzAVBgNVBAMT\\n"\n                            "DkRTVCBSb290IENBIFgzMB4XDTE2MDMxNzE2NDA0NloXDTIxMDMxNzE2NDA0Nlow\\n"\n                            "SjELMAkGA1UEBhMCVVMxFjAUBgNVBAoTDUxldCdzIEVuY3J5cHQxIzAhBgNVBAMT\\n"\n                            "GkxldCdzIEVuY3J5cHQgQXV0aG9yaXR5IFgzMIIBIjANBgkqhkiG9w0BAQEFAAOC\\n"\n                            "AQ8AMIIBCgKCAQEAnNMM8FrlLke3cl03g7NoYzDq1zUmGSXhvb418XCSL7e4S0EF\\n"\n                            "q6meNQhY7LEqxGiHC6PjdeTm86dicbp5gWAf15Gan/PQeGdxyGkOlZHP/uaZ6WA8\\n"\n                            "SMx+yk13EiSdRxta67nsHjcAHJyse6cF6s5K671B5TaYucv9bTyWaN8jKkKQDIZ0\\n"\n                            "Z8h/pZq4UmEUEz9l6YKHy9v6Dlb2honzhT+Xhq+w3Brvaw2VFn3EK6BlspkENnWA\\n"\n                            "a6xK8xuQSXgvopZPKiAlKQTGdMDQMc2PMTiVFrqoM7hD8bEfwzB/onkxEz0tNvjj\\n"\n                            "/PIzark5McWvxI0NHWQWM6r6hCm21AvA2H3DkwIDAQABo4IBfTCCAXkwEgYDVR0T\\n"\n                            "AQH/BAgwBgEB/wIBADAOBgNVHQ8BAf8EBAMCAYYwfwYIKwYBBQUHAQEEczBxMDIG\\n"\n                            "CCsGAQUFBzABhiZodHRwOi8vaXNyZy50cnVzdGlkLm9jc3AuaWRlbnRydXN0LmNv\\n"\n                            "bTA7BggrBgEFBQcwAoYvaHR0cDovL2FwcHMuaWRlbnRydXN0LmNvbS9yb290cy9k\\n"\n                            "c3Ryb290Y2F4My5wN2MwHwYDVR0jBBgwFoAUxKexpHsscfrb4UuQdf/EFWCFiRAw\\n"\n                            "VAYDVR0gBE0wSzAIBgZngQwBAgEwPwYLKwYBBAGC3xMBAQEwMDAuBggrBgEFBQcC\\n"\n                            "ARYiaHR0cDovL2Nwcy5yb290LXgxLmxldHNlbmNyeXB0Lm9yZzA8BgNVHR8ENTAz\\n"\n                            "MDGgL6AthitodHRwOi8vY3JsLmlkZW50cnVzdC5jb20vRFNUUk9PVENBWDNDUkwu\\n"\n                            "Y3JsMB0GA1UdDgQWBBSoSmpjBH3duubRObemRWXv86jsoTANBgkqhkiG9w0BAQsF\\n"\n                            "AAOCAQEA3TPXEfNjWDjdGBX7CVW+dla5cEilaUcne8IkCJLxWh9KEik3JHRRHGJo\\n"\n                            "uM2VcGfl96S8TihRzZvoroed6ti6WqEBmtzw3Wodatg+VyOeph4EYpr/1wXKtx8/\\n"\n                            "wApIvJSwtmVi4MFU5aMqrSDE6ea73Mj2tcMyo5jMd6jmeWUHK8so/joWUoHOUgwu\\n"\n                            "X4Po1QYz+3dszkDqMp4fklxBwXRsW10KXzPMTZ+sOPAveyxindmjkW8lGy+QsRlG\\n"\n                            "PfZ+G6Z6h7mjem0Y+iWlkYcV4PIWL1iwBi8saCbGS5jN2p8M+X+Q7UNKEkROb3N6\\n"\n                            "KOqkqm57TH2H3eDJAkSnh6/DNFu0Qg==\\n"\n                            "-----END CERTIFICATE-----\\n";\n\n// You can use x.509 client certificates if you want\n//const char* test_client_key = "";   //to verify the client\n//const char* test_client_cert = "";  //to verify the client\n\nString data;\n\nWiFiClientSecure client;\n\nvoid setup() {\n    //Initialize serial and wait for port to open:\n    Serial.begin(115200);\n    delay(100);\n\n    pinMode(WIO_KEY_C, INPUT_PULLUP);\n\n    Serial.print("Attempting to connect to SSID: ");\n    Serial.println(ssid);\n    WiFi.begin(ssid, password);\n\n    tft.begin();\n    tft.setRotation(3);\n    tft.fillScreen(TFT_BLACK);\n    tft.setFreeFont(FMB12);\n    tft.setCursor((320 - tft.textWidth("Connecting to Wi-Fi.."))/2, 120);\n    tft.print("Connecting to Wi-Fi..");\n\n    // attempt to connect to Wifi network:\n    while (WiFi.status() != WL_CONNECTED) {\n        Serial.print(".");\n        // wait 1 second for re-trying\n        delay(1000);\n    }\n\n    Serial.print("Connected to ");\n    Serial.println(ssid);\n\n    tft.fillScreen(TFT_BLACK);\n    tft.setCursor((320 - tft.textWidth("Connected!"))/2, 120);\n    tft.print("Connected!");\n\n    getData();\n}\n\nint lastState = 1;\nvoid loop()\n{\n    int currentState = digitalRead(WIO_KEY_C);\n    if (currentState == 0) {\n      if (currentState != lastState) {\n        getData();\n      }\n      lastState = !lastState;\n    }\n}\n\nvoid getData() {\n    client.setCACert(test_root_ca);\n  //client.setCertificate(test_client_key); // for client verification\n  //client.setPrivateKey(test_client_cert); // for client verification\n\n    tft.fillScreen(TFT_BLACK);\n    tft.setTextColor(TFT_WHITE);\n    tft.setCursor((320 - tft.textWidth("Conectting to Server.."))/2, 120);\n    tft.print("Connecting to Server..");\n\n    Serial.println("\\nStarting connection to server...");\n    if (!client.connect(server, 443)) {\n        Serial.println("Connection failed!");\n        tft.fillScreen(TFT_BLACK);\n        tft.setCursor((320 - tft.textWidth("Connection failed!"))/2, 120);\n        tft.print("Connection failed!");\n    } else {\n        Serial.println("Connected to server!");\n        tft.fillScreen(TFT_BLACK);\n        tft.setCursor((320 - tft.textWidth("Connected to Server!"))/2, 120);\n        tft.print("Connected to Server!");\n\n        // Make a HTTP request:\n        client.println("GET https://api.covid19api.com/world/total HTTP/1.0");\n        client.println("Host: api.covid19api.com");\n        client.println("Connection: close");\n        client.println();\n\n        while (client.connected()) {\n            String line = client.readStringUntil(\'\\n\');\n            if (line == "\\r") {\n                Serial.println("headers received");\n                break;\n            }\n        }\n\n        while(client.available())\n        {\n          String line = client.readStringUntil(\'\\r\');\n          data = line;\n        }\n        Serial.println(data);\n        client.stop();\n        Serial.println("closing connection");\n    }\n\n    //ArduinoJson to parse data, plesae check ArduinoJson for more info\n    const size_t capacity = JSON_OBJECT_SIZE(3) + 50;\n    DynamicJsonDocument doc(capacity);\n    deserializeJson(doc, data);\n\n    long TotalConfirmed = doc["TotalConfirmed"];\n    long TotalDeaths = doc["TotalDeaths"];\n    long TotalRecovered = doc["TotalRecovered"];\n\n// -----------------LCD---------------------\n\n    tft.fillScreen(tft.color565(24,15,60));\n    tft.setFreeFont(FF17);\n    tft.setTextColor(tft.color565(224,225,232));\n    tft.drawString("COVID-19 Dashboard/Global",20,10);\n\n    tft.fillRoundRect(10, 45, 300, 55, 5, tft.color565(40,40,86));\n    tft.fillRoundRect(10, 105, 300, 55, 5, tft.color565(40,40,86));\n    tft.fillRoundRect(10, 165, 300, 55, 5, tft.color565(40,40,86));\n\n    tft.setFreeFont(FM9);\n    tft.drawString("Total Confirmed", 75, 50);\n    tft.drawString("Total Deaths",95, 110);\n    tft.drawString("Total Recovered",75, 170);\n\n    tft.setFreeFont(FMB12);\n    tft.setTextColor(TFT_RED);\n    tft.drawNumber(TotalConfirmed, 110, 75);\n    tft.setTextColor(tft.color565(224,225,232));\n    tft.drawNumber(TotalDeaths, 120, 135);\n    tft.setTextColor(TFT_GREEN);\n    tft.drawNumber(TotalRecovered, 110, 195);\n}\n')))}p.isMDXComponent=!0}}]);