"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[27363],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>h});var n=r(67294);function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,n,l=function(t,e){if(null==t)return{};var r,n,l={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(l[r]=t[r]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(l[r]=t[r])}return l}var s=n.createContext({}),d=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var r=t.components,l=t.mdxType,i=t.originalType,s=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),u=d(r),k=l,h=u["".concat(s,".").concat(k)]||u[k]||c[k]||i;return r?n.createElement(h,o(o({ref:e},p),{},{components:r})):n.createElement(h,o({ref:e},p))}));function h(t,e){var r=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=r.length,o=new Array(i);o[0]=k;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a[u]="string"==typeof t?t:l,o[1]=a;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},62450:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=r(87462),l=(r(67294),r(3905));const i={description:"reServer X86",title:"Getting Started with reServer",tags:["reServer","Getting started"],keywords:["reServer","Getting started"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/reServer-Getting-Started",last_update:{date:"01/03/2023",author:"w0x7ce"}},o=void 0,a={unversionedId:"Edge/reServer/reServer_X86/reServer-Getting-Started",id:"Edge/reServer/reServer_X86/reServer-Getting-Started",title:"Getting Started with reServer",description:"reServer X86",source:"@site/docs/Edge/reServer/reServer_X86/reServer-Getting-Started.md",sourceDirName:"Edge/reServer/reServer_X86",slug:"/reServer-Getting-Started",permalink:"/zh-CN/reServer-Getting-Started",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reServer/reServer_X86/reServer-Getting-Started.md",tags:[{label:"reServer",permalink:"/zh-CN/tags/re-server"},{label:"Getting started",permalink:"/zh-CN/tags/getting-started"}],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672704e3,formattedLastUpdatedAt:"2023\u5e741\u67083\u65e5",frontMatter:{description:"reServer X86",title:"Getting Started with reServer",tags:["reServer","Getting started"],keywords:["reServer","Getting started"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/reServer-Getting-Started",last_update:{date:"01/03/2023",author:"w0x7ce"}},sidebar:"ProductSidebar",previous:{title:"Jetson Community Projects",permalink:"/zh-CN/reComputer_Jetson_Series_Projects"},next:{title:"Upgrading BIOS and Installing Drivers",permalink:"/zh-CN/reServer-Update-BIOS-Install-Drivers"}},s={},d=[{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Comparison",id:"comparison",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Basic version",id:"basic-version",level:3},{value:"High performance version",id:"high-performance-version",level:3},{value:"Dimensions",id:"dimensions",level:2},{value:"Quick Start with reServer",id:"quick-start-with-reserver",level:2},{value:"Hardware Required",id:"hardware-required",level:3},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"DDR4 Installation",id:"ddr4-installation",level:4},{value:"SSD Installation",id:"ssd-installation",level:4},{value:"WiFi Module Installation",id:"wifi-module-installation",level:4},{value:"4G/5G/LoRaWAN Module Installation",id:"4g5glorawan-module-installation",level:4},{value:"HDD Installation",id:"hdd-installation",level:4},{value:"Hardware Connection",id:"hardware-connection",level:3},{value:"Display Connection",id:"display-connection",level:4},{value:"Keyboard and Mouse Connection",id:"keyboard-and-mouse-connection",level:4},{value:"Audio Connection",id:"audio-connection",level:4},{value:"Power Connection",id:"power-connection",level:4},{value:"Operation System Installation",id:"operation-system-installation",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:d};function u(t){let{components:e,...r}=t;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/products/102110559/\u4e0a\u67b601.png",alt:"pir",width:600,height:"auto"})),(0,l.kt)("p",null,"reServer, as a milestone product of reThings family, is extremely compact and powerful. This smart tiny server is able to work easily and efficiently from the edge to the cloud."),(0,l.kt)("p",null,"reServer is based on an ODYSSEY X86 v2 board and powered by the latest Intel\xae Core\u2122 11th Gen. processor and Intel\xae UHD Graphics or Intel\xae Iris Xe Graphics, which delivers high CPU and AI performance for various applications. It has two high-speed 2.5-Gigabit Ethernet ports and supports hybrid connectivity including 5G, LoRa, BLE and WiFi. Meanwhile, reServer is of compact design to work efficiently in almost any scenario. The neat structure of reServer also makes it simple to access to the hard drives, memory and PCIe slots which allows easy installation, upgrades and maintenance."),(0,l.kt)("p",null,'Having dual SATA III 6.0Gbps data connectors, reServer is able to equip up to two 3.5"/2.5" SATA internal hard disk drives to acquire more storage. It also has M.2 connectors to connect to various SSDs for faster read and write speeds.'),(0,l.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,l.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reServer-X86-i3-8G-256SSD-p-4965.html"},(0,l.kt)("strong",null,(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Compact design for a server with an overall dimension of 132mm x124mm x233mm"),(0,l.kt)("li",{parentName:"ul"},"Powered by the latest 11th Gen Intel\xae Core\u2122 CPU and Intel\xae UHD Graphics or Intel\xae Iris Xe Graphics."),(0,l.kt)("li",{parentName:"ul"},"Rich peripherals including dual\xae 2.5-Gigabit Ethernet ports, USB 3.2 Type-A port, USB 2.0 Type-A port, HDMI port and DP port"),(0,l.kt)("li",{parentName:"ul"},"Support hybrid connectivity including 5G, LoRa, BLE and WiFi (5G and LoRa need additional modules)"),(0,l.kt)("li",{parentName:"ul"},'Dual SATA III 6.0 Gbps data connectors for 3.5"/2.5" SATA hard disk drives with enough space inside the enclosure to store them both'),(0,l.kt)("li",{parentName:"ul"},"M.2 B-Key/ M-Key/ E-Key for expandability such as SSD, 4G/5G modules, WiFi 6"),(0,l.kt)("li",{parentName:"ul"},"Quiet cooling fan with a large VC heat sink for excellent heat dissipation"),(0,l.kt)("li",{parentName:"ul"},"Easy to install, upgrade and maintain with ease of access to the internal components after opening the enclosure"),(0,l.kt)("li",{parentName:"ul"},"Pre-installed Windows 10 Enterprise(Unactivated), also support other Windows OS and Linux OS")),(0,l.kt)("h2",{id:"specifications"},"Specifications"),(0,l.kt)("table",{style:{tableLayout:"fixed",width:1173}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{colspan:"2"},"Versions"),(0,l.kt)("th",{colspan:"3"},"Basic Versions"),(0,l.kt)("th",{colspan:"2"},"High Performance Versions"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{rowspan:"3"},"Platform"),(0,l.kt)("td",null,"Processor"),(0,l.kt)("td",null,"Intel\xae Core\u2122 11th Gen. i3 1115G4"),(0,l.kt)("td",null,"Intel\xae Core\u2122 11th Gen. i3 1125G4"),(0,l.kt)("td",null,"Intel\xae Core\u2122 11th Gen. i5 1135G7"),(0,l.kt)("td",null,"Intel\xae Core\u2122 vPro\xae 11th Gen. i5 1145GRE"),(0,l.kt)("td",null,"Intel\xae Core\u2122 vPro\xae 11th Gen. i7 1185GRE ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Cores/Threads of processor"),(0,l.kt)("td",null,"2C/4T"),(0,l.kt)("td",null,"4C/8T"),(0,l.kt)("td",null,"4C/8T"),(0,l.kt)("td",null,"4C/8T"),(0,l.kt)("td",null,"4C/8T")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Co-processor"),(0,l.kt)("td",{colspan:"3"},"Microchip\xae ATSAMD21G18 32-Bit ARM\xae Cortex-M0+ @ 48MHz "),(0,l.kt)("td",{colspan:"2"},"Raspberry Pi\xae RP2040 32-Bit Dual ARM Cortex-M0+ @ 133MHz")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowspan:"3"},"Memory"),(0,l.kt)("td",null,"Technology"),(0,l.kt)("td",{colspan:"5"},"Dual Channels DDR4-3200")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Capacity"),(0,l.kt)("td",{colspan:"3"},"8GB; 16GB (Support up to 64GB)"),(0,l.kt)("td",{colspan:"2"},"Support up to 64GB")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"ECC Memory Supported"),(0,l.kt)("td",{colspan:"3"},"NO"),(0,l.kt)("td",{colspan:"2"},"YES")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Graphics"),(0,l.kt)("td",null,"Controller"),(0,l.kt)("td",null,"Intel\xae UHD Graphics 48EUs (400 - 1250MHz)"),(0,l.kt)("td",null,"Intel\xae UHD Graphics 48EUs (400 - 1250MHz)"),(0,l.kt)("td",null,"Intel\xae Iris Xe Graphics G7 80EUs(400-1300MHz)"),(0,l.kt)("td",null,"Intel\xae Iris Xe Graphics G7 80EUs(400-1300MHz)"),(0,l.kt)("td",null,"Intel\xae Iris Xe Graphics G7 96EUs(400-1300MHz)")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowspan:"2"},"Advanced Technologies"),(0,l.kt)("td",null,"Intel\xae  vPro\xae"),(0,l.kt)("td",{colspan:"3"},"NO"),(0,l.kt)("td",{colspan:"2"},"YES")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Intel\xae Total Memory Encryption"),(0,l.kt)("td",{colspan:"3"},"NO"),(0,l.kt)("td",{colspan:"2"},"YES")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Network"),(0,l.kt)("td",null,"Controller"),(0,l.kt)("td",{colspan:"3"},"Intel\xae Ethernet Controller I225-V"),(0,l.kt)("td",{colspan:"2"},"Intel\xae Ethernet Controller I225-LM")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowspan:"2"},"Wireless"),(0,l.kt)("td",null,"WiFi"),(0,l.kt)("td",{colspan:"5"},"M.2 E-Key(PCIE & CNVi Support), Intel\xae Wi-Fi 6 AX201(Optional)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Bluetooth"),(0,l.kt)("td",{colspan:"5"},"Bluetooth 5.0, BLE(Optional)")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowspan:"4"},"Display"),(0,l.kt)("td",null,"LCD"),(0,l.kt)("td",{colspan:"5"},"eDP 40-Pin 4 Lane Connector")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"HDMI"),(0,l.kt)("td",{colspan:"5"},"1 x HDMI 2.0b, up to 4Kx2Kx24bpp@60Hz")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"DP"),(0,l.kt)("td",{colspan:"5"},"1 x DP1.4a 7680x4320x24bpp@60Hz")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Multiple Display"),(0,l.kt)("td",{colspan:"5"},"4 simultaneous displays with each display interface combination")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowspan:"7"},"External I/O"),(0,l.kt)("td",null,"Ethernet"),(0,l.kt)("td",{colspan:"5"},"2 x 2.5GbE LAN ports (RJ45, supports 10/100/1000/2500 Mbps), Intel\xae i225")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"HDMI/DP"),(0,l.kt)("td",{colspan:"5"},"One/One")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"USB Type-C"),(0,l.kt)("td",{colspan:"3"},"N/A"),(0,l.kt)("td",{colspan:"2"},"USB PD / USB 4.0 / Thunderbolt 4")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"USB Type-A"),(0,l.kt)("td",{colspan:"3"},"USB2.0 Type A x1 ; USB3.2 Type A x1"),(0,l.kt)("td",{colspan:"2"},"USB2.0 Type A x2 ; USB3.2 Type A x1")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"LED"),(0,l.kt)("td",{colspan:"5"},"Power Status")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Power Supply"),(0,l.kt)("td",{colspan:"5"},"1x5.5x2.5mm DC Jack / Wafer 2.0mm 8pin")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Micro Sim Card Slot"),(0,l.kt)("td",{colspan:"5"},"1")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowspan:"10"},"Internal I/O"),(0,l.kt)("td",null,"SATA"),(0,l.kt)("td",{colspan:"5"},"2 x SATA Gen III 6.0 Gb/s Data Connectors + 3 x SATA Power Connectors")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"COM Port"),(0,l.kt)("td",{colspan:"5"},"1 x RS-232/422/485, 1 x RS-232")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"GPIO"),(0,l.kt)("td",{colspan:"3"},"28-Pin Arduino Co-processor 2.54mm header"),(0,l.kt)("td",{colspan:"2"},"30-Pin Raspberry Pi Co-processor 2.54mm header")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Audio"),(0,l.kt)("td",{colspan:"5"},"Realtek High Definition Audio, Microphone + headphone Combo Connector")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"USB2.0"),(0,l.kt)("td",{colspan:"5"},"USB2.0 9-pin Header x2 480Mbps")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Fan"),(0,l.kt)("td",{colspan:"5"},"2 x 12V 4-wire Fan header, PWM Control")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Front Panel Control"),(0,l.kt)("td",{colspan:"5"},"Power-on, Reset, Power Status LED, SATA Status LED")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"S/PDIF"),(0,l.kt)("td",{colspan:"5"},"3-Pin 2.54mm Header")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"SATA Power"),(0,l.kt)("td",{colspan:"5"},"WAFER4-Pin 2.0 pitch Connector")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Co-CPU. Debug Port"),(0,l.kt)("td",{colspan:"5"},"6-Pin 0.5mm FPC Connector (SWD)")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowspan:"4"},"Expansion"),(0,l.kt)("td",null,"M.2 M-Key"),(0,l.kt)("td",{colspan:"5"},"1 x M-Key 2242/2280(PCIe 3.0 x4\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"M.2 E-Key"),(0,l.kt)("td",{colspan:"5"},"1 x E-Key 2230(PCIe 3.0 x1; USB2.0 x1;Intel CNVi)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"M.2 B-Key"),(0,l.kt)("td",{colspan:"5"},"1 x B-Key2242/2252/2280(PCIe 3.0 x2; USB2.0 x1)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"High Speed I/O"),(0,l.kt)("td",{colspan:"3"},"1 X PCIe x4 Gen4 "),(0,l.kt)("td",{colspan:"2"},"1 X PCIe 3.0 x4/SMBus/LPC/USB 2.0/CPU GPIO etc.")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowspan:"2"},"Power"),(0,l.kt)("td",null,"Supply Voltage"),(0,l.kt)("td",{colspan:"3"},"DC Jack: 12V"),(0,l.kt)("td",{colspan:"2"},"DC Jack: 12V-19V")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"RTC Battery"),(0,l.kt)("td",{colspan:"5"},"Lithium 3V/210mAH")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Certification"),(0,l.kt)("td",null,"EMC"),(0,l.kt)("td",{colspan:"5"},"CE,FCC,TELEC")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowspan:"3"},"Mechanical"),(0,l.kt)("td",null,"Dimension"),(0,l.kt)("td",{colspan:"5"},"132mm*124mm*233mm")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Thermal Solution"),(0,l.kt)("td",{colspan:"5"},"Heat Pipe Assemblies/Heat Spreading Vapor Chamber Assemblies")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Weight"),(0,l.kt)("td",{colspan:"5"},"1800g")))),(0,l.kt)("h2",{id:"comparison"},"Comparison"),(0,l.kt)("table",{style:{tableLayout:"fixed",width:1354}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Version"),(0,l.kt)("th",{colspan:"3"},"Basic Versions"),(0,l.kt)("th",{colspan:"2"},"High Performance Versions"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Appearance"),(0,l.kt)("td",null,(0,l.kt)("img",{src:"https://files.seeedstudio.com/products/102110559/reserver%E4%BD%8E%E9%85%8D.png",alt:"reserver basic",width:150,height:100})),(0,l.kt)("td",null,(0,l.kt)("img",{src:"https://files.seeedstudio.com/products/102110559/reserver%E4%BD%8E%E9%85%8D.png",alt:"reserver basic",width:150,height:100})),(0,l.kt)("td",null,(0,l.kt)("img",{src:"https://files.seeedstudio.com/products/102110559/reserver%E4%BD%8E%E9%85%8D.png",alt:"reserver basic",width:150,height:100})),(0,l.kt)("td",null,(0,l.kt)("img",{src:"https://files.seeedstudio.com/products/102110559/reserver%20%E9%AB%98%E9%85%8D.png",alt:"reserver high",width:150,height:100})),(0,l.kt)("td",null,(0,l.kt)("img",{src:"https://files.seeedstudio.com/products/102110559/reserver%20%E9%AB%98%E9%85%8D.png",alt:"reserver high",width:150,height:100}))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Processor"),(0,l.kt)("td",null,"Intel\xae Core\u2122 11th Gen. i3 1115G4"),(0,l.kt)("td",null,"Intel\xae Core\u2122 11th Gen. i3 1125G4"),(0,l.kt)("td",null,"Intel\xae Core\u2122 11th Gen. i5 1135G7"),(0,l.kt)("td",null,"Intel\xae Core\u2122 vPro\xae 11th Gen. i5 1145GRE"),(0,l.kt)("td",null,"Intel\xae Core\u2122 vPro\xae 11th Gen. i7 1185GRE ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Cores/Threads of processor"),(0,l.kt)("td",null,"2C/4T"),(0,l.kt)("td",null,"4C/8T"),(0,l.kt)("td",null,"4C/8T"),(0,l.kt)("td",null,"4C/8T"),(0,l.kt)("td",null,"4C/8T")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Co-processor"),(0,l.kt)("td",{colspan:"3"},"Microchip\xae ATSAMD21G18 32-Bit ARM\xae Cortex-M0+ @ 48MHz "),(0,l.kt)("td",{colspan:"2"},"Raspberry Pi\xae RP2040 32-Bit Dual ARM Cortex-M0+ @ 133MHz")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Intel\xae  vPro\xae"),(0,l.kt)("td",{colspan:"3"},"NO"),(0,l.kt)("td",{colspan:"2"},"YES")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Intel\xae Total Memory Encryption"),(0,l.kt)("td",{colspan:"3"},"NO"),(0,l.kt)("td",{colspan:"2"},"YES")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Graphics"),(0,l.kt)("td",null,"Intel\xae UHD Graphics 48EUs (400 - 1250MHz)"),(0,l.kt)("td",null,"Intel\xae UHD Graphics 48EUs (400 - 1250MHz)"),(0,l.kt)("td",null,"Intel\xae Iris Xe Graphics G7 80EUs(400-1300MHz)"),(0,l.kt)("td",null,"Intel\xae Iris Xe Graphics G7 80EUs(400-1300MHz)"),(0,l.kt)("td",null,"Intel\xae Iris Xe Graphics G7 96EUs(400-1300MHz)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Memory"),(0,l.kt)("td",{colspan:"5"},"Dual Channels DDR4-3200(Support up to 64GB in total)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"ECC Memory Supported"),(0,l.kt)("td",{colspan:"3"},"NO"),(0,l.kt)("td",{colspan:"2"},"YES")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Network Controller"),(0,l.kt)("td",{colspan:"3"},"Intel\xae Ethernet Controller I225-V"),(0,l.kt)("td",{colspan:"2"},"Intel\xae Ethernet Controller I225-LM")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Expansion"),(0,l.kt)("td",{colspan:"3"},"M.2 M-Key; M.2 B-Key; M.2 E-Key; 1 X PCIe x4 Gen4 "),(0,l.kt)("td",{colspan:"2"},"M.2 M-Key; M.2 B-Key; M.2 E-Key; 1 X PCIe 3.0 x4/SMBus/LPC/USB 2.0/CPU GPIO etc.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"External I/O"),(0,l.kt)("td",{colspan:"3"},"USB Type-A(USB2.0 Type-A x1 ; USB3.2 Type-A x1);  HDMI; DP; 2.5GbE LAN ports x2; Audio Jack; DC Jack(12V);"),(0,l.kt)("td",{colspan:"2"},(0,l.kt)("div",null,"USB Type-C(USB PD / USB 4.0 / Thunderbolt 4);",(0,l.kt)("br",null),"USB Type-A(USB2.0 Type-A x2 ; USB3.2 Type-A x1);  HDMI;DP; 2.5GbE LAN ports x2; Audio Jack; DC Jack(12V-19V);"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"WirelessConnectivity"),(0,l.kt)("td",{colspan:"5"},"WIFI, BLE and Support LTE/4G/5G/LoRaWAN")))),(0,l.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,l.kt)("p",null,"There are two different versions of reServer, Basic version and High performance version, which have different hardware configurations."),(0,l.kt)("h3",{id:"basic-version"},"Basic version"),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/products/102110559/09%20%E4%BD%8E%E9%85%8D.png",alt:"pir",width:1e3,height:"auto"})),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/reServer/wiki/reServer%20mainboard%20.png",alt:"pir",width:1e3,height:"auto"})),(0,l.kt)("h3",{id:"high-performance-version"},"High performance version"),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/products/102110559/09-%E9%AB%98%E9%85%8D.png",alt:"pir",width:1e3,height:"auto"})),(0,l.kt)("h2",{id:"dimensions"},"Dimensions"),(0,l.kt)("p",null,"Both versions have the same dimensions."),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/products/102110559/10-%E4%BD%8E%E9%85%8D.png",alt:"pir",width:1e3,height:"auto"})),(0,l.kt)("h2",{id:"quick-start-with-reserver"},"Quick Start with reServer"),(0,l.kt)("p",null,"If you want to get started with reServer in the fastest and easiest way, you can follow the guide below."),(0,l.kt)("h3",{id:"hardware-required"},"Hardware Required"),(0,l.kt)("p",null,"You need to prepare the following hardware before getting started with reServer\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"reServer"),(0,l.kt)("li",{parentName:"ul"},"Power Adapter(provided)"),(0,l.kt)("li",{parentName:"ul"},"External monitor"),(0,l.kt)("li",{parentName:"ul"},"HDMI/DP cable"),(0,l.kt)("li",{parentName:"ul"},"Keyboard and Mouse")),(0,l.kt)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,l.kt)("p",null,"For this part, we will introduce how to install or replace some hardware inside reServer. If there are no needs for you, please skip it.\nYou might follow the ",(0,l.kt)("strong",{parentName:"p"},"Assembly Guide Manual")," attached at the end of this page to access to the main board of reServer before reading this part."),(0,l.kt)("h4",{id:"ddr4-installation"},"DDR4 Installation"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"DDR4-3200MT/s has been pre-installed for all versions of reServer")," but you can also add a new DDR4 to the other channel or replace the pre-installed one with your own to expand memory. The dual-channel SO-DIMM slots support DDR4-3200MT/s up to 64GB in total."),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/reServer/wiki/ddr4.png",alt:"pir",width:800,height:"auto"})),(0,l.kt)("h4",{id:"ssd-installation"},"SSD Installation"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"A NVMe SSD has been pre-installed for all versions of reServer"),", while, still, the M.2 M-Key 2242/2280(PCIe 3.0 x4) allows you to replace it with the SSD you desire."),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20M-Key.png",alt:"pir",width:800,height:"auto"})),(0,l.kt)("h4",{id:"wifi-module-installation"},"WiFi Module Installation"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"All versions of reServer have installed 2230 Dual Band WiFi 6 AX201(CNVio) Module at M.2 E-Key 2242/2280(PCIe 3.0x4)"),".\nIf you want to replace the pre-installed WiFi Module, feel free to follow the steps below."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 1.")," Remove the SSD from M.2 M-Key slot.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 2.")," Take off the WiFi antenna cable and remove the pre-installed WiFi Module from M.2 E-Key."))),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20E-Key.png",alt:"pir",width:800,height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 3.")," Install the new WiFi Module and connect the WiFi antenna cable back to it.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 4.")," Install the SSD back to M.2 M-Key."))),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20E-Key%20antenna.png",alt:"pir",width:800,height:"auto"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," reServer is shipped with two 2.4/5GHz WiFi Antennas, you can attach the antenna to the adapter which connects with the antenna cable of the WiFi module inside the reServer to achieve better WiFi connectivity."),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/reServer/wiki/antenna.png",alt:"pir",width:800,height:"auto"})),(0,l.kt)("h4",{id:"4g5glorawan-module-installation"},"4G/5G/LoRaWAN Module Installation"),(0,l.kt)("p",null,"reServer supports installing 4G/5G/LoRaWAN Module at M.2 B-Key 2242/2252/2280(PCIe 3.0 x2; USB2.0 x1). ",(0,l.kt)("strong",{parentName:"p"},"(4G/5G/LoRaWAN Module is not included in reServer)"),"\nPlease feel free to follow the steps to add 4G/5G/LoRaWAN Module."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 1.")," Install 4G/5G/LoRaWAN Module to M.2 B-Key.")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20B-Key.png",alt:"pir",width:800,height:"auto"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Step 2.")," Connect the antenna cable to the Module.")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20B-Key%20antenna.png",alt:"pir",width:800,height:"auto"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," You have to insert a standard SIM card into the micro SIM card slot to enable 5G/4G."),(0,l.kt)("h4",{id:"hdd-installation"},"HDD Installation"),(0,l.kt)("p",null,'reServer supports installing two 3.5"/2.5" internal hard disk drives to acquire more storage. ',(0,l.kt)("strong",{parentName:"p"},"(The HDDs are not included in reServer)"),"\nPlease follow the steps to install the HDDs."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 1.")," Remove the screws and pull out the brackets")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 2.")," Attach the HHDs to the brackets with screws")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 3.")," Push the HDD brackets down to connect the HHDs with the SATA ports.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Step 4.")," Fix the HDD brackets with screws"))),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/reServer/wiki/07.png",alt:"pir",width:!0,height:"auto"})),(0,l.kt)("h3",{id:"hardware-connection"},"Hardware Connection"),(0,l.kt)("p",null,"For this part, we will introduce the interface connection of reServer.\nThere are two versions of reServer. Please note that different versions might have different interfaces."),(0,l.kt)("h4",{id:"display-connection"},"Display Connection"),(0,l.kt)("p",null,"There are three methods for reServer to connect to a display while the third method is only for High-performing versions.\n",(0,l.kt)("strong",{parentName:"p"},"Method 1.")," HDMI Port\u3001"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Method 2.")," DP Port"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Method 3.")," USB Type-C(Available with High-performing versions only)"),(0,l.kt)("p",null,"Basic version"),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/reServer/wiki/DIsplay%20Basic%20version.png",alt:"pir",width:800,height:"auto"})),(0,l.kt)("p",null,"High performance version"),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/reServer/wiki/reserver%20high%20display.png",alt:"pir",width:800,height:"auto"})),(0,l.kt)("h4",{id:"keyboard-and-mouse-connection"},"Keyboard and Mouse Connection"),(0,l.kt)("p",null,"Connect keyboard and mouse through USB ports. There are one USB 3.2 port and one USB 2.0 port for Basic versions while there are one USB 3.2 port and two USB 2.0 ports for High-performing versions.\nBasic version"),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/reServer/wiki/USB%20Basic%20version.png",alt:"pir",width:800,height:"auto"})),(0,l.kt)("p",null,"High performance version"),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/reServer/wiki/reserver%20high%20usb.png",alt:"pir",width:800,height:"auto"})),(0,l.kt)("h4",{id:"audio-connection"},"Audio Connection"),(0,l.kt)("p",null,"For Basic versions, the Audio Jack is on the left side I/O panel, while, for High-performing versions, it's on the right side I/O panel for High-performing versions"),(0,l.kt)("p",null,"Basic version"),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/reServer/wiki/Audio%20Basic%20version.png",alt:"pir",width:800,height:"auto"})),(0,l.kt)("p",null,"High performance version"),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/reServer/wiki/reserver%20high%20audio.png",alt:"pir",width:800,height:"auto"})),(0,l.kt)("h4",{id:"power-connection"},"Power Connection"),(0,l.kt)("p",null,"There are two methods to power up reServer, and the second one is only for High-performing versions."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Method 1.")," Simply connect AC-DC power adapter(included in the product box) with AC power cord(Out of the product box but still in the package), then connect it to 12V DC Jack of reServer."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Method 2.")," Connect USB Type-C charging cable(Not included in reServer) to the Thunderbolt 4 USB Type-C port(This port is only available with High-performing versions)"),(0,l.kt)("p",null,"Basic version"),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/reServer/wiki/Power%20Basic%20version.png",alt:"pir",width:800,height:"auto"})),(0,l.kt)("p",null,"High performance version"),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/reServer/wiki/reserver%20high%20power.png",alt:"pir",width:800,height:"auto"})),(0,l.kt)("h3",{id:"operation-system-installation"},"Operation System Installation"),(0,l.kt)("p",null,"For all versions of reServer, Windows 10 Enterprise(Unactivated) has been pre-installed, you can simply boot it up and activate the OS. However, reServer still supports other Windows OS and, also, Linux OS, so you can cover the pre-installed OS with the one you want."),(0,l.kt)("h2",{id:"resources"},"Resources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,l.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/reServer/Assembly%20Guide%20of%20reServer.pdf"},"reServer Assembly Guide")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,l.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/reServer/wiki/Atmel-SAMD21-datasheet.pdf"},"Atmel-SAMD21-datasheet"))),(0,l.kt)("h2",{id:"tech-support"},"Tech Support"),(0,l.kt)("p",null,"Please submit any technical issue into our ",(0,l.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,l.kt)("br",null),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);