"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[93593],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const o={title:"Wio RP2040 Module",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio_RP2040_Module_Build-in_Wireless_2.4G/",slug:"/Wio_RP2040_Module_Build-in_Wireless_2.4G",last_update:{date:"01/11/2022",author:"gunengyu"}},a=void 0,l={unversionedId:"Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_Module/Wio_RP2040_Module_Build-in_Wireless_2.4G",id:"Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_Module/Wio_RP2040_Module_Build-in_Wireless_2.4G",title:"Wio RP2040 Module",description:"enter image description here",source:"@site/docs/Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_Module/Wio_RP2040_Module_Build-in_Wireless_2.4G.md",sourceDirName:"Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_Module",slug:"/Wio_RP2040_Module_Build-in_Wireless_2.4G",permalink:"/Wio_RP2040_Module_Build-in_Wireless_2.4G",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_Module/Wio_RP2040_Module_Build-in_Wireless_2.4G.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"Jan 11, 2022",frontMatter:{title:"Wio RP2040 Module",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio_RP2040_Module_Build-in_Wireless_2.4G/",slug:"/Wio_RP2040_Module_Build-in_Wireless_2.4G",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"WM1302 Pi Hat for Raspberry Pi",permalink:"/WM1302_Pi_HAT"},next:{title:"Get Started with Wio RP2040 mini Dev Board",permalink:"/Wio_RP2040_mini_Dev_Board-Onboard_Wifi"}},s={},d=[{value:"Key Features",id:"key-features",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Software",id:"software",level:3},{value:"1. Install Thonny",id:"1-install-thonny",level:4},{value:"2.Connect Wio RP2040 Module",id:"2connect-wio-rp2040-module",level:4},{value:"3. Control I/O Pins",id:"3-control-io-pins",level:4},{value:"FAQ",id:"faq",level:2},{value:"1. I need the code to run automatically after startup.",id:"1-i-need-the-code-to-run-automatically-after-startup",level:3},{value:"2. After running code with network functions, errors or crashes are reported if I run other programs.",id:"2-after-running-code-with-network-functions-errors-or-crashes-are-reported-if-i-run-other-programs",level:3},{value:"3. I want to see more sample programs/projects.",id:"3-i-want-to-see-more-sample-programsprojects",level:3},{value:"Tech Support",id:"tech-support",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_1.jpg",alt:"enter image description here"})),(0,i.kt)("p",null,"Wio RP2040 module is Seeed's self-developed module using RP2040+WiFi chip, supporting MicroPython programming. It has Cortex M0+ dual-core with flexible clock running up to 133MHz. And the module is a low-power microcontroller with wireless functions. With powerful performance and small size, it is a perfect option for various IoT projects development. The module can be easily soldered on various PCB backplanes."),(0,i.kt)("p",null,"The module has rich interfaces, including 28 GPIO PINs (19 PINs support PIO and PWM), 2 UART, 4 ADC, 2 SPI, 2 I2C. Some pins can be multiplexed, such as GP12 and GP13 with I2C, SPI, UART functions. That\u2019s why 28 GPIO PINs can achieve more I/O PINs and interfaces. Wio RP2040 module also has a USB PIN, which can be designed to supports a USB Type-C interface.\n",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-RP2040-Module-p-4932.html"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png",alt:null})),"  "),(0,i.kt)("h2",{id:"key-features"},"Key Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Powerful CPU"),": dual-core 133MHz Cortex M0+  processor and 264KB SRAM, 2MB Flash"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Reliable wireless connection"),": using powerful WiFi chip, supporting 2.4~2.4835 GHz frequency and AP&Station mode"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Flexibility"),": compatible with Thonny editor"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Small size"),": 18.0x 28.2x 1.0mm 32 Pins SMT"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Multiple certifications"),": FCC and CE Certified"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Support programming languages"),": MicroPython")),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Details"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Processors"),(0,i.kt)("td",{parentName:"tr",align:null},"Dual Cortex M0+ processors, up to 133 MHz")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SRAM"),(0,i.kt)("td",{parentName:"tr",align:null},"264KB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Flash"),(0,i.kt)("td",{parentName:"tr",align:null},"2MB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Wireless connectivity"),(0,i.kt)("td",{parentName:"tr",align:null},"2.4\u301c2.4835 GHz\uff1bIEEE802.11 b/g/n\uff1bAP & Station")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GPIO\uff0cPIO and PWM Pins"),(0,i.kt)("td",{parentName:"tr",align:null},"20")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"I2C"),(0,i.kt)("td",{parentName:"tr",align:null},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SPI"),(0,i.kt)("td",{parentName:"tr",align:null},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UART"),(0,i.kt)("td",{parentName:"tr",align:null},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ADC"),(0,i.kt)("td",{parentName:"tr",align:null},"4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"VIN"),(0,i.kt)("td",{parentName:"tr",align:null},"5V-3.6V DC")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Size"),(0,i.kt)("td",{parentName:"tr",align:null},"18.0 x 28.2 x 1.0mm")))),(0,i.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_3.png",alt:"enter image description here"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"    I/O pins: The MCU runs at 3.3V. If the voltage input connected to the general-purpose I/O pin is higher than 3.3V, it may cause damage to the chip. Please pay attention to use, do not lift the shielding cover.\n"))),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"If you want to upload the MicroPython firmware for this module, you can download ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/firmware-v1.15.1.uf2"},"firmware-v1.15.1.uf2")," to the computer, then pull the BOOT pin low and connect the MicroUSB female socket according to the following wiring diagram, and finally, you can connect to the computer through the data cable. At this time, the computer will have an extra removable disk, and then move the firmware you downloaded to the removable disk to complete the firmware update.\n",(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/image1.png",alt:"enter image description here"})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Firmware version"),(0,i.kt)("th",{parentName:"tr",align:null},"Update Log"),(0,i.kt)("th",{parentName:"tr",align:null},"Download"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"V1.15.1"),(0,i.kt)("td",{parentName:"tr",align:null},"The first official version"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/firmware-v1.15.1.uf2"},"firmware-v1.15.1.uf2"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"V1.15.2"),(0,i.kt)("td",{parentName:"tr",align:null},"Fix the stability of the Socket and add up the error message of connection failure"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/v1.15.2.uf2"},"firmware-v1.15.2.uf2"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"V1.15.3"),(0,i.kt)("td",{parentName:"tr",align:null},"Rename the original function 'wait_msg()' to 'check_msg()' function, and add new 'wait_msg()' function.The main difference between them is that original 'wait_msg' function will block the program from executing when it hasn\u2019t 'waite' for the data. And yet the 'check_msg()' function will only detect whether the data is received. When it does, it will execute the callback, and if it doesn't,the program will still continue to execute."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/1.15.3.uf2"},"firmware-v1.15.3.uf2"))))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"The firmware version used in the wiki tutorial is V1.15.1.\nIf you use a new version of the firmware, please refer to the firmware update log to modify the sample code.\n"))),(0,i.kt)("h3",{id:"software"},"Software"),(0,i.kt)("h4",{id:"1-install-thonny"},"1. Install Thonny"),(0,i.kt)("p",null,"Easy to get started. Thonny comes with Python 3.7 built-in, so just one simple installer is needed and you're ready to learn to program. First, click ",(0,i.kt)("a",{parentName:"p",href:"https://thonny.org/"},"Thonny.org")," to enter the download page. In the upper right corner of the page, select the Thonny installation package according to your operating system to download.  Double-click the installation package you downloaded to open it, and install it according to the steps.\n",(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_4.png",alt:"enter image description here"}),"\nNow that you have Thonny installed, open the application. You should see the main interface of Thonny:\n",(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_5.png",alt:"enter image description here"}),"\nThe main interface of Thonny is very simple, divided into the following four parts:"),(0,i.kt)("p",null,"1.Toolbar: basic common tools, such as new, open, save, run the current script, stop, etc. "),(0,i.kt)("p",null,"2.Code editor: Thonny's core area, where we will write Python/MicroPython code.  "),(0,i.kt)("p",null,"3.Shell: We can run commands here, and the results of the commands will be displayed in the Shell immediately. We also can see outputs of our code in the Shell window."),(0,i.kt)("p",null,'4.Interpreter: Here you can select the type of interpreter to compile the program. Click Python 3.7.9, find MicroPython (Raspberry pi Pico) in the pop-up menu, and click OK to switch the interpreter to Pico interpreter. You can also click "Tools>>>Options>>>Interpreter" to select.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_6.png",alt:"enter image description here"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_7.png",alt:"enter image description here"})),(0,i.kt)("h4",{id:"2connect-wio-rp2040-module"},"2.Connect Wio RP2040 Module"),(0,i.kt)("p",null,'To connect the Wio RP2040 module, you need to correctly lead out the USB pins and connect them to the data cable. Use the data cable to connect the module to the computer, and then click the "Restart backend" button on the toolbar. If Wio RP2040 is successfully connected to the computer, you will see the MicroPython version information and device name in the Shell.\n',(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_8.png",alt:"enter image description here"})),(0,i.kt)("h4",{id:"3-control-io-pins"},"3. Control I/O Pins"),(0,i.kt)("p",null,"You can pull up the GP13 pin with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"from machine import Pin, Timer\n\nled = Pin(13, Pin.OUT)\nCounter = 0\nFun_Num = 0\n\ndef fun(tim):\n    global Counter\n    Counter = Counter + 1\n    print(Counter)\n    led.value(Counter%2)\n    \ntim = Timer(-1)\ntim.init(period=1000, mode=Timer.PERIODIC, callback=fun)\n\n\n")),(0,i.kt)("p",null,"Press the play icon in the toolbar to run your code.\n",(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_9.png",alt:"enter image description here"}),"\nYou can connect an LED light to the GP13 pin to detect whether the pin is normally driven."),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"1-i-need-the-code-to-run-automatically-after-startup"},"1. I need the code to run automatically after startup."),(0,i.kt)("p",null,'you need to rename the code to "main.py" and save it on the main control board. When the main control board restarts next time, it will automatically run the main.py program.'),(0,i.kt)("h3",{id:"2-after-running-code-with-network-functions-errors-or-crashes-are-reported-if-i-run-other-programs"},"2. After running code with network functions, errors or crashes are reported if I run other programs."),(0,i.kt)("p",null,"You can click the RESET button of the main control board to restart the board, and then reconnect to the Thonny editor again to run other programs."),(0,i.kt)("h3",{id:"3-i-want-to-see-more-sample-programsprojects"},"3. I want to see more sample programs/projects."),(0,i.kt)("p",null,"You can refer to the Wio RP2040 mini Dev Board wiki, there are more sample projects, and these projects are common."),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,i.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,i.kt)("div",null,(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);