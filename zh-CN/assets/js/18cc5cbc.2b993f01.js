"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13416],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),v=i,u=p["".concat(s,".").concat(v)]||p[v]||h[v]||a;return n?r.createElement(u,o(o({ref:t},d),{},{components:n})):r.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=v;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},64831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={description:"Client and Server introduction",title:"Client and Server introduction",keywords:["Wio_terminal Bluetooth"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-terminal-BLE-introduction",last_update:{date:"1/16/2023",author:"jianjing Huang"}},o="**Client and Server Introduction**",c={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/Wio-terminal-BLE-introduction",id:"Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/Wio-terminal-BLE-introduction",title:"Client and Server introduction",description:"Client and Server introduction",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/Wio-terminal-BLE-introduction.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/Bluetooth",slug:"/Wio-terminal-BLE-introduction",permalink:"/zh-CN/Wio-terminal-BLE-introduction",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/Wio-terminal-BLE-introduction.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673827200,formattedLastUpdatedAt:"2023\u5e741\u670816\u65e5",frontMatter:{description:"Client and Server introduction",title:"Client and Server introduction",keywords:["Wio_terminal Bluetooth"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-terminal-BLE-introduction",last_update:{date:"1/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Overview",permalink:"/zh-CN/Wio-Terminal-Bluetooth-Overview"},next:{title:"Web Bluetooth APIs",permalink:"/zh-CN/Wio-Terminal-Web-Bluetooth"}},s={},l=[{value:"<strong>Hardware required</strong>",id:"hardware-required",level:2},{value:"<strong>Overview</strong>",id:"overview",level:2},{value:"<strong>what is client and server</strong>",id:"what-is-client-and-server",level:3},{value:"<strong>What is UUID</strong>",id:"what-is-uuid",level:3},{value:"<strong>BLE Server on Wio terminal</strong>",id:"ble-server-on-wio-terminal",level:3},{value:"<strong>nRF Connect APP usage</strong>",id:"nrf-connect-app-usage",level:3},{value:"<strong>BLE Client usage</strong>",id:"ble-client-usage",level:2},{value:"Client code snippet",id:"client-code-snippet",level:3},{value:"<strong>Client code</strong>",id:"client-code",level:3},{value:"<strong>Code running result</strong>",id:"code-running-result",level:3},{value:"<strong>BLE Server Usage</strong>",id:"ble-server-usage",level:2},{value:"<strong>Server code Snippet</strong>",id:"server-code-snippet",level:3},{value:"<strong>Client and server commnication</strong>",id:"client-and-server-commnication",level:3},{value:"Server code",id:"server-code",level:3},{value:"Server connect to Client of Smartphone",id:"server-connect-to-client-of-smartphone",level:2},{value:"<strong>Code</strong>",id:"code",level:3}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"client-and-server-introduction"},(0,i.kt)("strong",{parentName:"h1"},"Client and Server Introduction")),(0,i.kt)("p",null,"This wiki introduces Client and server communicate function via BLE using the Wio terminal."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{400}",src:"https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Wio-connect.png"})),(0,i.kt)("h2",{id:"hardware-required"},(0,i.kt)("strong",{parentName:"h2"},"Hardware required")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,i.kt)("strong",{parentName:"a"},"Wio terminal")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you have the Wio terminal, Please visit the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Bluetooth-Overview/"},(0,i.kt)("strong",{parentName:"a"},"Bluetooth Overview"))," to updated the latest BLE firmware on RTL8720 and downloaded the dependant Arduino libraries.")),(0,i.kt)("h2",{id:"overview"},(0,i.kt)("strong",{parentName:"h2"},"Overview")),(0,i.kt)("h3",{id:"what-is-client-and-server"},(0,i.kt)("strong",{parentName:"h3"},"what is client and server")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The client made a request to the Server for data communication which allows a device to wirelessly exchange data with other Bluetooth devices."),(0,i.kt)("li",{parentName:"ul"},"The server provides data services to the Client, it encapsulates data through characteristic. Multiple characteristics form a Service, therefore service is a basic BLE application."),(0,i.kt)("li",{parentName:"ul"},"Client and Server are communication relations, They can both as master or slave.")),(0,i.kt)("h3",{id:"what-is-uuid"},(0,i.kt)("strong",{parentName:"h3"},"What is UUID")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"UUID is generally used for identifying information that needs to be unique within a system or network thereof."),(0,i.kt)("li",{parentName:"ul"},"All the BLE device has Service UUID, characteristic UUID and descriptor UUID, All the UUID of products should be uniqueness and low probability being repeated makes them useful for being associative keys in databases and identifiers for physical hardware within an organization.")),(0,i.kt)("h3",{id:"ble-server-on-wio-terminal"},(0,i.kt)("strong",{parentName:"h3"},"BLE Server on Wio terminal")),(0,i.kt)("p",null,"The Wio terminal with Bluetooth Low Energy can act as either server and client. The server advertises its existence. And it can be found by other devices and it contains the data that the client can read. The BLE supports two types of modes such as Broadcast mode and Mesh network mode. In broadcast mode, the server transmits data to many clients that are connected and in a mesh network mode, all the devices are connected."),(0,i.kt)("p",null,"Both server and client have a \u201cSERVICE UUID\u201d to make a connection between server and client. Inside this service, there can be several \u201ccharacteristics\u201d which are defined by characteristic UUID\u2019s. We use two characteristics TX and RX to send data to and receive data from the client. The Wio terminal (acting as the server) \u201cnotifies\u201d the client via the TX characteristic UUID and data is sent to the Wio terminal and received via the RX characteristic UUID. However, since there is sending and receiving, TX on the Wio terminal is actually RX on the Android app."),(0,i.kt)("h3",{id:"nrf-connect-app-usage"},(0,i.kt)("strong",{parentName:"h3"},"nRF Connect APP usage")),(0,i.kt)("p",null,"The nRF connect APP is used to search the BLE device of UUID and MAC address when you have not idea what the UUID and MAC address of the device is, also it is able to communicate with BLE device."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download the ",(0,i.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en"},(0,i.kt)("strong",{parentName:"a"},"nRF Connect APP"))," on your smartphone."),(0,i.kt)("li",{parentName:"ul"},"Scan the BLE device."),(0,i.kt)("li",{parentName:"ul"},"Find out the BLE device and connect it, then you will see the UUID and MAC address."),(0,i.kt)("li",{parentName:"ul"},"You can sent or revice the data on the Characteristic.")),(0,i.kt)("p",null,"There are BLE devices scanned by the nRF Connect APP."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{400}",src:"https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/nRF-device-scan.png"})),(0,i.kt)("p",null,"On the characteristic, that has up arrow which is mean sent to data to the server, and down arrow means to receive the data from the server."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{400}",src:"https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/interface.png"})),(0,i.kt)("p",null,"The interface option is according to the devices function, for example, i was connected to a Wio terminal(server) with a simple function, so there are only have one Service UUID with difference function characteristic, it depends on the complicacy of the equipment."),(0,i.kt)("h2",{id:"ble-client-usage"},(0,i.kt)("strong",{parentName:"h2"},"BLE Client usage")),(0,i.kt)("p",null,"This example the Wio terminal as Client to search around all the BLE devices, and then display the BLE devices name and MAC address via BLE."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You need a Wio terminal with ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wio-Terminal-BLE/20200914-seeed-ambd-firmware-rpc-v1.0.0.zip"},(0,i.kt)("strong",{parentName:"a"},"latest BLE firmware")),"."),(0,i.kt)("li",{parentName:"ul"},"Setup the Server UUID and MAC address on the code."),(0,i.kt)("li",{parentName:"ul"},"Upload the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE/blob/master/examples/BLE_client/BLE_client.ino"},(0,i.kt)("strong",{parentName:"a"},"Client code"))," on the Wio terminal.")),(0,i.kt)("h3",{id:"client-code-snippet"},"Client code snippet"),(0,i.kt)("p",null,"In the code, we need to put the UUID and characteristic UUID service of the server which you want to connect that device."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you do not konw the MAC address and UUID of device, please go to the ",(0,i.kt)("strong",{parentName:"p"},"nRF Connect APP")," page.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// The remote service we wish to connect to.\nstatic BLEUUID serviceUUID(0x180F);\n// The characteristic of the remote service we are interested in.\nstatic BLEUUID    charUUID(0x2A19);\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The UUID of code was defined by us and it just for the test, Normally The UUID format for commercial products is different to present, for example, xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.")),(0,i.kt)("p",null,"Update the MAC address of the device you want to connect that device on the code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"uint8_t bd_addr[6] = {0x7d, 0x18, 0x1b, 0xf1, 0xf7, 0x2c}; // MAC address: 2c:f7:f1:1b:18:7d\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"A Bluetooth MAC address is designed to be unique and is traceable to the chip manufacturer, in addition, you need put the MAC address in reverse order.")),(0,i.kt)("p",null,"Connect to the remove BLE Server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"pClient->connect(myDevice);\n")),(0,i.kt)("p",null,"Obtain a reference to the service we are after in the remote BLE server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"BLERemoteService* pRemoteService = pClient->getService(serviceUUID);\n")),(0,i.kt)("p",null,"Obtain a reference to the characteristic in the service of the remote BLE server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"pRemoteCharacteristic = pRemoteService->getCharacteristic(charUUID);\n")),(0,i.kt)("h3",{id:"client-code"},(0,i.kt)("strong",{parentName:"h3"},"Client code")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'/**\n * A BLE client example that is rich in capabilities.\n * There is a lot new capabilities implemented.\n * author unknown\n * updated by chegewara\n */\n\n#include "rpcBLEDevice.h"\n#include <BLEScan.h>\n#include <BLEAdvertisedDevice.h>\n\n// The remote service we wish to connect to.\nstatic BLEUUID serviceUUID(0xFEE0);\n// The characteristic of the remote service we are interested in.\nstatic BLEUUID    charUUID(0x2A2B);\n\nstatic boolean doConnect = false;\nstatic boolean connected = false;\nstatic boolean doScan = false;\nstatic BLERemoteCharacteristic* pRemoteCharacteristic;\nstatic BLEAdvertisedDevice* myDevice;\nuint8_t bd_addr[6] = {0xD7, 0x1D, 0x12, 0xDC, 0x64, 0xF0};\nBLEAddress BattServer(bd_addr);\n\nstatic void notifyCallback(\n  BLERemoteCharacteristic* pBLERemoteCharacteristic,\n  uint8_t* pData,\n  size_t length,\n  bool isNotify) {\n    Serial.print("Notify callback for characteristic ");\n    Serial.print(pBLERemoteCharacteristic->getUUID().toString().c_str());\n    Serial.print(" of data length ");\n    Serial.println(length);\n    Serial.print("data: ");\n    Serial.print(*(uint8_t *)pData);\n}\n\n\nclass MyClientCallback : public BLEClientCallbacks {\n  void onConnect(BLEClient* pclient) {\n  }\n\n  void onDisconnect(BLEClient* pclient) {\n    connected = false;\n    Serial.println("onDisconnect");\n  }\n};\n\n\nbool connectToServer() {\n    Serial.print("Forming a connection to ");\n    Serial.println(myDevice->getAddress().toString().c_str());\n    \n    BLEClient*  pClient  = BLEDevice::createClient();\n    Serial.println(" - Created client");\n\n    pClient->setClientCallbacks(new MyClientCallback());\n \n\n    // Connect to the remove BLE Server.\n    pClient->connect(myDevice);  // if you pass BLEAdvertisedDevice instead of address, it will be recognized type of peer device address (public or private)\n    Serial.println(" - Connected to server");\n\n    // Obtain a reference to the service we are after in the remote BLE server.\n    BLERemoteService* pRemoteService = pClient->getService(serviceUUID);\n    Serial.println(serviceUUID.toString().c_str());\n    if (pRemoteService == nullptr) {\n      Serial.print("Failed to find our service UUID: ");\n      Serial.println(serviceUUID.toString().c_str());\n      pClient->disconnect();\n      return false;\n    }\n    Serial.println(" - Found our service");\n\n\n    // Obtain a reference to the characteristic in the service of the remote BLE server.\n    pRemoteCharacteristic = pRemoteService->getCharacteristic(charUUID);\n    if (pRemoteCharacteristic == nullptr) {\n      Serial.print("Failed to find our characteristic UUID: ");\n      Serial.println(charUUID.toString().c_str());\n      pClient->disconnect();\n      return false;\n    }\n    Serial.println(" - Found our characteristic");\n\n\n    // Read the value of the characteristic.\n    if(pRemoteCharacteristic->canRead()) {\n      Serial.println(" -  can  read  start");\n      std::string value = pRemoteCharacteristic->readValue();\n      Serial.print("The characteristic value was: ");\n      Serial.println(value.c_str());\n    }\n    \n    if(pRemoteCharacteristic->canNotify())\n      pRemoteCharacteristic->registerForNotify(notifyCallback);\n\n    connected = true;\n    return true;\n}\n/**\n * Scan for BLE servers and find the first one that advertises the service we are looking for.\n */\nclass MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {\n /**\n   * Called for each advertising BLE server.\n   */\n  void onResult(BLEAdvertisedDevice advertisedDevice) {\n    Serial.print("BLE Advertised Device found: ");\n    Serial.println(advertisedDevice.toString().c_str());\n   \n    // We have found a device, let us now see if it contains the service we are looking for.\n    if (memcmp(advertisedDevice.getAddress().getNative(),BattServer.getNative(), 6) == 0) {\n      Serial.print("BATT Device found: ");\n      Serial.println(advertisedDevice.toString().c_str());\n      BLEDevice::getScan()->stop();\n      Serial.println("new BLEAdvertisedDevice");\n      myDevice = new BLEAdvertisedDevice(advertisedDevice);\n      Serial.println("new BLEAdvertisedDevice done");\n      doConnect = true;\n      doScan = true; \n  } // onResult\n  }\n}; // MyAdvertisedDeviceCallbacks\n\n\nvoid setup() {\n  Serial.begin(115200);\n  while(!Serial){};\n  delay(2000);\n  Serial.println("Starting Arduino BLE Client application...");\n  BLEDevice::init("");\n\n  // Retrieve a Scanner and set the callback we want to use to be informed when we\n  // have detected a new device.  Specify that we want active scanning and start the\n  // scan to run for 5 seconds.\n  BLEScan* pBLEScan = BLEDevice::getScan();\n  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());\n  pBLEScan->setInterval(1349);\n  pBLEScan->setWindow(449);\n  pBLEScan->setActiveScan(true);\n  pBLEScan->start(5, false);\n} // End of setup.\n\n\n// This is the Arduino main loop function.\nvoid loop() {\n \n  // If the flag "doConnect" is true then we have scanned for and found the desired\n  // BLE Server with which we wish to connect.  Now we connect to it.  Once we are \n  // connected we set the connected flag to be true.\n  if (doConnect == true) {\n    if (connectToServer()) {\n      Serial.println("We are now connected to the BLE Server.");\n    } else {\n      Serial.println("We have failed to connect to the server; there is nothin more we will do.");\n    }\n    doConnect = false;\n  }\n  Serial.printf(".");\n  delay(1000);\n} // End of loop\n')),(0,i.kt)("h3",{id:"code-running-result"},(0,i.kt)("strong",{parentName:"h3"},"Code running result")),(0,i.kt)("p",null,"This is a simple Client code demonstration without connecting any devices, the Wio terminal scan around BLE devices and displays the devices."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/BLE-device-print.png"})),(0,i.kt)("h2",{id:"ble-server-usage"},(0,i.kt)("strong",{parentName:"h2"},"BLE Server Usage")),(0,i.kt)("p",null,"This example the Wio terminal as Server to connect the other Wio terminal(Client), and then receive the Client require via BLE."),(0,i.kt)("h3",{id:"server-code-snippet"},(0,i.kt)("strong",{parentName:"h3"},"Server code Snippet")),(0,i.kt)("p",null,"You can define the BLE device name as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'BLEDevice::init("UART Service");\n')),(0,i.kt)("p",null,"You need to define the UUID for the server device on the Wio terminal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#define SERVICE_UUID        "180f"\n#define CHARACTERISTIC_UUID "2a19"\n#define DESCRIPTOR_UUID     "4545"\n')),(0,i.kt)("p",null,"Create BLE server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"BLEServer *pServer = BLEDevice::createServer();\n")),(0,i.kt)("p",null,"Create BLE service using the server UUID."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"BLEService *pService = pServer->createService(SERVICE_UUID);\n")),(0,i.kt)("p",null,"Add a characteristics."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'  BLECharacteristic *pCharacteristic = pService->createCharacteristic(\n                                         CHARACTERISTIC_UUID,\n                                         BLECharacteristic::PROPERTY_READ |\n                                         BLECharacteristic::PROPERTY_WRITE\n                                       );\npCharacteristic->setValue("Hello World says Neil");\n')),(0,i.kt)("p",null,"Read and write function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"  pCharacteristic->setAccessPermissions(GATT_PERM_READ | GATT_PERM_WRITE);\n  BLEDescriptor *pDescriptor = pCharacteristic->createDescriptor(\n                                         DESCRIPTOR_UUID,\n                                          ATTRIB_FLAG_VOID | ATTRIB_FLAG_ASCII_Z,\n                                         GATT_PERM_READ | GATT_PERM_WRITE,2\n                                         );\n")),(0,i.kt)("p",null,"Start BLE service"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"pService->start();\n")),(0,i.kt)("p",null,"Advertising allows devices to broadcast information defining their intentions. Which means that when a mobile device has received a Bluetooth message, the recipient has the choice to either accept or decline the message. The recipient needs to positively indicate that they wish to receive marketing messages."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();\n")),(0,i.kt)("h3",{id:"client-and-server-commnication"},(0,i.kt)("strong",{parentName:"h3"},"Client and server commnication")),(0,i.kt)("p",null,"We made a simple test in this example, the Wio terminal Client connects with the Wio terminal Server, when Client found the server then they will connect meanwhile server will text Client a message."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You need two Wio terminals.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You need to create the UUID to provide Client to connect it.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Please download the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE/tree/master/examples/BLE_client"},(0,i.kt)("strong",{parentName:"a"},"Client"))," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE/tree/master/examples/BLE_server"},(0,i.kt)("strong",{parentName:"a"},"Server"))," code in this ",(0,i.kt)("strong",{parentName:"p"},"github"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Upload the Client code in the Wio terminal.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Upload the Server code in the other Wio terminal."),(0,i.kt)("p",{parentName:"li"},"When upload and running ",(0,i.kt)("strong",{parentName:"p"},"The server code"),', you will see it keep printing "unpaired" on the Arduino IDE monitor before connect the Client.'))),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Server_side3.png"})),(0,i.kt)("p",null,"After connected to the Client, it will stop print message and the Client will print message from server."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Client_side7.png"})),(0,i.kt)("h3",{id:"server-code"},"Server code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <rpcBLEDevice.h>\n#include <BLEServer.h>\n\n#define SERVICE_UUID        "180f"\n#define CHARACTERISTIC_UUID "2a19"\n#define DESCRIPTOR_UUID     "4545"\n\nclass MyCallbacks: public BLECharacteristicCallbacks {\n    void onWrite(BLECharacteristic *pCharacteristic) {\n      std::string rxValue = pCharacteristic->getValue();\n\n      if (rxValue.length() > 0) {\n        Serial.println("*********");\n        Serial.print("Received Value: ");\n        for (int i = 0; i < rxValue.length(); i++)\n          Serial.print(rxValue[i]);\n\n        Serial.println();\n        Serial.println("*********");\n      }\n    }\n};\n\nvoid setup() {\n  Serial.begin(115200);\n  while(!Serial){};\n  Serial.println("Starting BLE work!");\n\n  BLEDevice::init("Long name 11");\n  BLEServer *pServer = BLEDevice::createServer();\n  BLEService *pService = pServer->createService(SERVICE_UUID);\n  BLECharacteristic *pCharacteristic = pService->createCharacteristic(\n                                         CHARACTERISTIC_UUID,\n                                         BLECharacteristic::PROPERTY_READ |\n                                         BLECharacteristic::PROPERTY_WRITE\n                                       );\n  pCharacteristic->setAccessPermissions(GATT_PERM_READ | GATT_PERM_WRITE);\n  BLEDescriptor *pDescriptor = pCharacteristic->createDescriptor(\n                                         DESCRIPTOR_UUID,\n                                          ATTRIB_FLAG_VOID | ATTRIB_FLAG_ASCII_Z,\n                                         GATT_PERM_READ | GATT_PERM_WRITE,\n                                         2\n                                         );\n  pCharacteristic->setValue("Hello World says Neil");\n  pCharacteristic->setCallbacks(new MyCallbacks());\n  pService->start();\n\n  // BLEAdvertising *pAdvertising = pServer->getAdvertising();  // this still is working for backward compatibility\n  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();\n  pAdvertising->addServiceUUID(SERVICE_UUID);\n  pAdvertising->setScanResponse(true);\n  pAdvertising->setMinPreferred(0x06);  // functions that help with iPhone connections issue\n  pAdvertising->setMinPreferred(0x12);\n  BLEDevice::startAdvertising();\n  Serial.println("Characteristic defined! Now you can read it in your phone!");\n}\n\nvoid loop() { \n  // put your main code here, to run repeatedly:\n  Serial.println("1");\n  delay(2000);\n}\n')),(0,i.kt)("h2",{id:"server-connect-to-client-of-smartphone"},"Server connect to Client of Smartphone"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/vidoeh-GIF.gif"})),(0,i.kt)("p",null,"This example is using a smartphone as a Client to connect the Wio terminal(server), and the Wio terminal is able to receive the message from the Client."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download the nRF connect APP on the Phone."),(0,i.kt)("li",{parentName:"ul"},"Upload the code on the Wio terminal."),(0,i.kt)("li",{parentName:"ul"},"Open the nRF connect APP to search the Wio terminal and then connect it.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Check the device name on the code, that will help you search it.")),(0,i.kt)("h3",{id:"code"},(0,i.kt)("strong",{parentName:"h3"},"Code")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "rpcBLEDevice.h"\n#include <BLE2902.h>\n#include <TFT_eSPI.h> // Hardware-specific library\n#include <SPI.h>\nTFT_eSPI tft = TFT_eSPI();       // Invoke custom library\nTFT_eSprite spr = TFT_eSprite(&tft);  // Sprite \n \nBLEServer *pServer = NULL;\nBLECharacteristic * pTxCharacteristic;\nbool deviceConnected = false;\nbool oldDeviceConnected = false;\nString Value11;\n \n#define SERVICE_UUID           "6E400001-B5A3-F393-E0A9-E50E24DCCA9E" // UART service UUID\n#define CHARACTERISTIC_UUID_RX "6E400002-B5A3-F393-E0A9-E50E24DCCA9E"\n#define CHARACTERISTIC_UUID_TX "6E400003-B5A3-F393-E0A9-E50E24DCCA9E"\n \nclass MyServerCallbacks: public BLEServerCallbacks {\n    void onConnect(BLEServer* pServer) {\n      deviceConnected = true;\n      spr.fillSprite(TFT_BLACK);\n      spr.createSprite(240, 100);\n      spr.setTextColor(TFT_WHITE, TFT_BLACK);\n      spr.setFreeFont(&FreeSansBoldOblique12pt7b);\n      spr.drawString("Message: ", 20, 70);\n      spr.setTextColor(TFT_GREEN, TFT_BLACK);\n      spr.drawString("status: connected",10 ,5); \n      spr.pushSprite(0, 0);\n    };\n \n    void onDisconnect(BLEServer* pServer) {\n      deviceConnected = false;\n      Serial.print("123123");\n      spr.fillSprite(TFT_BLACK);\n      spr.createSprite(240, 100);\n      spr.setTextColor(TFT_WHITE, TFT_BLACK);\n      spr.setFreeFont(&FreeSansBoldOblique12pt7b);\n      spr.drawString("Message: ", 20, 70);\n      spr.setTextColor(TFT_RED, TFT_BLACK);\n      spr.drawString("status: disconnect",10 ,5); \n      spr.pushSprite(0, 0);\n    }\n};\n \nclass MyCallbacks: public BLECharacteristicCallbacks {\n    void onWrite(BLECharacteristic *pCharacteristic) {\n      std::string rxValue = pCharacteristic->getValue();\n \n        if (rxValue.length() > 0) {\n        spr.fillSprite(TFT_BLACK);\n        spr.setTextColor(TFT_WHITE, TFT_BLACK);\n        spr.setFreeFont(&FreeSansBoldOblique9pt7b);\n        for (int i = 0; i < rxValue.length(); i++){\n//           Serial.print(rxValue[i]);\n           spr.drawString((String)rxValue[i],10 + i*15,0);\n        spr.pushSprite(10, 100);\n        }\n       }\n    }\n};\n \nvoid setup() {\n  tft.begin();\n  tft.init();\n  tft.setRotation(3);\n  tft.fillScreen(TFT_BLACK);\n \n  BLEDevice::init("UART Servicess");  //device name define\n \n  // Create the BLE Server\n  pServer = BLEDevice::createServer();\n  pServer->setCallbacks(new MyServerCallbacks());\n \n  // Create the BLE Service\n  BLEService *pService = pServer->createService(SERVICE_UUID);\n \n  // Create a BLE Characteristic\n  pTxCharacteristic = pService->createCharacteristic(\n                    CHARACTERISTIC_UUID_TX,\n                    BLECharacteristic::PROPERTY_NOTIFY | BLECharacteristic::PROPERTY_READ\n                  );\n  pTxCharacteristic->setAccessPermissions(GATT_PERM_READ);      \n  pTxCharacteristic->addDescriptor(new BLE2902());\n \n  BLECharacteristic * pRxCharacteristic = pService->createCharacteristic(\n                       CHARACTERISTIC_UUID_RX,\n                      BLECharacteristic::PROPERTY_WRITE\n \n                    );\n  pRxCharacteristic->setAccessPermissions(GATT_PERM_READ | GATT_PERM_WRITE);           \n \n  pRxCharacteristic->setCallbacks(new MyCallbacks());\n \n  // Start the service\n  pService->start();\n \n  // Start advertising\n  pServer->getAdvertising()->start();\n      spr.fillSprite(TFT_BLACK);\n      spr.createSprite(240, 100);\n      spr.setTextColor(TFT_WHITE, TFT_BLACK);\n      spr.setFreeFont(&FreeSansBoldOblique12pt7b);\n      spr.drawString("status: disconnect",10 ,5); \n      spr.drawString("Message: ", 20, 70);\n      spr.pushSprite(0, 0);\n}\n \nvoid loop() {\n \n    // disconnecting\n    if (!deviceConnected && oldDeviceConnected) {\n        delay(500); // give the bluetooth stack the chance to get things ready\n        pServer->startAdvertising(); // restart advertising\n        oldDeviceConnected = deviceConnected;\n    }\n    // connecting\n    if (deviceConnected && !oldDeviceConnected) {\n    // do stuff here on connecting\n        oldDeviceConnected = deviceConnected;\n    }\n}\n')))}p.isMDXComponent=!0}}]);