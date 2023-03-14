"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[71404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={description:"Jetson Mate",title:"Jetson Mate",keywords:["Edge","reComputer Carrier_Board_for_Jetson_Moudule"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/Jetson-Mate",last_update:{date:"01/05/2023",author:"w0x7ce"},no_comments:!1},l="Jetson Mate Getting Started",s={unversionedId:"Edge/reComputer/Carrier_Board_for_Jetson_Moudule/Jetson-Mate",id:"Edge/reComputer/Carrier_Board_for_Jetson_Moudule/Jetson-Mate",title:"Jetson Mate",description:"Jetson Mate",source:"@site/docs/Edge/reComputer/Carrier_Board_for_Jetson_Moudule/Jetson-Mate.md",sourceDirName:"Edge/reComputer/Carrier_Board_for_Jetson_Moudule",slug:"/Jetson-Mate",permalink:"/zh-CN/Jetson-Mate",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reComputer/Carrier_Board_for_Jetson_Moudule/Jetson-Mate.md",tags:[],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672876800,formattedLastUpdatedAt:"2023\u5e741\u67085\u65e5",frontMatter:{description:"Jetson Mate",title:"Jetson Mate",keywords:["Edge","reComputer Carrier_Board_for_Jetson_Moudule"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/Jetson-Mate",last_update:{date:"01/05/2023",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"A205 Carrier Board",permalink:"/zh-CN/reComputer_A205_Flash_System"},next:{title:"Memory Expansion",permalink:"/zh-CN/reComputer_Jetson_Memory_Expansion"}},i={},p=[{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware Needed",id:"hardware-needed",level:3},{value:"Hardware Set Up",id:"hardware-set-up",level:3},{value:"Software Set Up",id:"software-set-up",level:3},{value:"Launch the Cluster",id:"launch-the-cluster",level:3},{value:"Build a Kubernetes cluster with Jetson Mate",id:"build-a-kubernetes-cluster-with-jetson-mate",level:2},{value:"configure Docker",id:"configure-docker",level:3},{value:"Installing Kubernetes",id:"installing-kubernetes",level:3},{value:"Configure Kubernetes",id:"configure-kubernetes",level:3},{value:"Validating a successful EGX 2.0 installation",id:"validating-a-successful-egx-20-installation",level:2},{value:"Configure Jupyter on Kubernetes",id:"configure-jupyter-on-kubernetes",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"jetson-mate-getting-started"},"Jetson Mate Getting Started"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Jetson-Mate/banner-2.png"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Jetson Mate")," is a carrier board which can install up to ",(0,r.kt)("strong",{parentName:"p"},"4 Nvidia Jetson Nano/NX SoMs"),". There is an on board ",(0,r.kt)("strong",{parentName:"p"},"5-port gigabit switch enabling the 4 SoMs to communicate with each other"),". All the 3 peripheral SoMs can be powered on or off separately. With a 65W 2-Port PD charger, for Jetson Nano SoMs or a 90W 2-Port PD charger for Jetson NX SoMs, and one ethernet cable, developers can easily build their own Jetson Cluster."),(0,r.kt)("h2",{id:"feature"},"Feature"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Easy to build and config"),(0,r.kt)("li",{parentName:"ul"},"Powerful and Compact"),(0,r.kt)("li",{parentName:"ul"},"Comes with a dedicated case and fan")),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Spec"),(0,r.kt)("th",{parentName:"tr",align:null},"--"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Power"),(0,r.kt)("td",{parentName:"tr",align:null},"65w PD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dimensions"),(0,r.kt)("td",{parentName:"tr",align:null},"110mm x 110mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Onboard Switch"),(0,r.kt)("td",{parentName:"tr",align:null},"Microchip KSZ9896CTXC")))),(0,r.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Jetson-Mate/JetsonMate.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Jetson-Mate/JetsonMate-2.png"})),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"!!!Note\nIn this guide, Ubuntu 18.04 LTS is installed on the host PC. Currently OS flashing using NVIDIA SDK Manager is not supported by Ubuntu 20.04. So make sure to use either Ubuntu 18.04 or 16.04. Also if you are running Ubuntu on a virtual machine, it is recommended to use ",(0,r.kt)("a",{parentName:"p",href:"https://www.vmware.com/products/workstation-player/workstation-player-evaluation.html"},"VMware Workstation Player")," as we have tested this. It is not recommended to use Oracle VM VirtualBox, since it fails to flash the OS."),(0,r.kt)("h3",{id:"hardware-needed"},"Hardware Needed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Jetson Mate"),(0,r.kt)("li",{parentName:"ul"},"Jetson Nano/ NX Module(s)"),(0,r.kt)("li",{parentName:"ul"},"Micro - USB Cable"),(0,r.kt)("li",{parentName:"ul"},"65W or 90W charging adapter with USB Type-C Cable"),(0,r.kt)("li",{parentName:"ul"},"Host PC with Ubuntu 18.04 or 16.04 installed")),(0,r.kt)("h3",{id:"hardware-set-up"},"Hardware Set Up"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Insert a ",(0,r.kt)("strong",{parentName:"li"},"Jetson Nano/ NX")," module to ",(0,r.kt)("strong",{parentName:"li"},"Master Node"))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Jetson-Mate/h-3.jpg",alt:"pir",width:800,height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2.")," Connect a ",(0,r.kt)("strong",{parentName:"li"},"micro-USB")," cable from Jetson Mate to PC")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Jetson-Mate/micro-usb.jpg",alt:"pir",width:800,height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3.")," Connect a jumper between ",(0,r.kt)("strong",{parentName:"li"},"BOOT and GND pins")," for ",(0,r.kt)("strong",{parentName:"li"},"recovery mode"))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Jetson-Mate/jumper.jpg",alt:"pir",width:800,height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 4.")," Connect Jetson Mate to a power adapter and turn on Jetson Mate by pressing on the ",(0,r.kt)("strong",{parentName:"p"},"WAKE")," button")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 5.")," Remove the jumper after Jetson Mate turns on")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 6.")," Open a terminal window on host PC and execute the following"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"lsusb\n")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Jetson-Mate/1.png",alt:"pir",width:800,height:"auto"})),(0,r.kt)("p",null,"If the output includes ",(0,r.kt)("strong",{parentName:"p"},"0955:7f21 NVidia Corp."),", Jetson Mate has entered recovery mode"),(0,r.kt)("h3",{id:"software-set-up"},"Software Set Up"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you are using modules with micro-SD card from Developer Kit, we suggest you install and configure the system by following ",(0,r.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit"},"this guide for Jetson Nano"),", ",(0,r.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-2gb-devkit"},"this guide for Jetson Nano 2GB")," and ",(0,r.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/learn/get-started-jetson-xavier-nx-devkit"},"this guide for Jetson Xavier NX"))),(0,r.kt)("p",null,"If you are using modules with eMMC storage, please use NVIDIA\u2019s official SDK Manager and follow the steps below"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Download ",(0,r.kt)("strong",{parentName:"li"},"NVIDIA SDK Manager")," by clicking ",(0,r.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/nvidia-sdk-manager"},"here"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Choose the relavant version according to the host PC OS. We choose Ubuntu here because the host PC used in this guide is running Ubuntu 18.04"),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Jetson-Mate/SDK-Manager.png",alt:"pir",width:800,height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Create an account or log in to ",(0,r.kt)("strong",{parentName:"p"},"NVIDIA Developer Program Membership"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Install NVIDIA SDK Manager"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Double click the downloaded file to install it"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4.")," Open NVIDIA SDK Manager and you will notice it automatically detects the connected Jetson Nano/ NX module")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Jetson-Mate/2.png",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 5.")," Select the connected module")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 6.")," On the configuration window, ",(0,r.kt)("strong",{parentName:"p"},"uncheck")," Host Machine."))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Jetson-Mate/3.png",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Here ",(0,r.kt)("strong",{parentName:"p"},"DeepStream SDK")," is also unchecked. But if you plan to install it as well, you can check it. However, the ",(0,r.kt)("strong",{parentName:"p"},"16GB")," on the eMMC module will not be enough to install this SDK."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 7.")," Click ",(0,r.kt)("strong",{parentName:"p"},"CONTINUE TO STEP 02"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 8.")," Review the required components and check ",(0,r.kt)("strong",{parentName:"p"},"I accept the terms and conditions of the license agreements")))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Jetson-Mate/5.png",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," If you only want to install the ",(0,r.kt)("strong",{parentName:"p"},"Jetson OS"),", you can uncheck ",(0,r.kt)("strong",{parentName:"p"},"Jetson SDK Components")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 9.")," Click ",(0,r.kt)("strong",{parentName:"p"},"CONTINUE TO STEP 03"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 10.")," Once following error message pops up, click ",(0,r.kt)("strong",{parentName:"p"},"Create")))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Jetson-Mate/6.png",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 11.")," Start downloading and flashing")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Jetson-Mate/7.png",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 12.")," After downloading and flashing the OS is finished, you will see the following output")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Jetson-Mate/8.png",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 13.")," Turn off Jetson Mate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 14.")," Open a terminal window on host PC and install ",(0,r.kt)("strong",{parentName:"p"},"minicom")," which is a serial terminal application"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update\nsudo apt install minicom\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," We will use this application to establish a serial connection between the host PC and Jetson Mate"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 15.")," Turn on Jetson Mate while still connected to PC via micro - USB cable, enter the following to identify the connected serial port")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"dmesg | grep tty\n")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Jetson-Mate/grep_tty.png",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Here the port name is ",(0,r.kt)("strong",{parentName:"p"},"ttyACM0")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 16.")," Connect to Jetson Mate using minicom")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo minicom -b 9600 -D /dev/ttyACM0\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," -b is baud rate and -D is device"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 17.")," Go through the ",(0,r.kt)("strong",{parentName:"li"},"initial configuration")," for Jetson OS")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Jetson-Mate/initial-config-minicom.png",alt:"pir",width:800,height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 18.")," After configuration is finished, come back to SDK Manager window, enter the ",(0,r.kt)("strong",{parentName:"li"},"username and password")," set for Jetson Mate and click ",(0,r.kt)("strong",{parentName:"li"},"Install"))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Jetson-Mate/9.png",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Use the username and password set in the initial configuration"),(0,r.kt)("p",null,"Now it will start downloading and installing the SDK components"),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Jetson-Mate/10.png",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("p",null,"You will see the following output when the SDK manager has sucessfully downloaded and installed the necessary components"),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Jetson-Mate/11.png",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 19.")," Flash all the remaining Jetson Nano/ NX modules you have")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," ",(0,r.kt)("strong",{parentName:"p"},"All the modules can only be flashed when installed on the master node"),". Therefore, you should flash and configure the modules one by one on the master node."),(0,r.kt)("h3",{id:"launch-the-cluster"},"Launch the Cluster"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Connect an Ethernet cable from router to Jetson Mate")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Make sure the PC and Jetson Mate are connected to the same router"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2.")," Enter Jetson Mate using ",(0,r.kt)("strong",{parentName:"li"},"minicom")," as explained before, while micro-USB connected to host PC and type the following to obtain the IP addresses of the modules connected to Jetson Mate")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ifconfig\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3.")," Type the following on the host PC terminal to establish an SSH connection")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ssh user@192.xxx.xx.xx\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Replace ",(0,r.kt)("strong",{parentName:"p"},"user")," with your Jetson Nano/ NX username and ",(0,r.kt)("strong",{parentName:"p"},"192.xxx.xx.xx")," with your Jetson Nano/ NX IP address"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," You can also connect to the nodes by replacing the IP address by their hostname"),(0,r.kt)("h2",{id:"build-a-kubernetes-cluster-with-jetson-mate"},"Build a Kubernetes cluster with Jetson Mate"),(0,r.kt)("p",null,"Kubernetes is an enterprise-grade container-orchestration system designed from the start to be cloud-native. It has grown to be the de-facto cloud container platform, continuing to expand as it has embraced new technologies, including container-native virtualization and serverless computing."),(0,r.kt)("p",null,'Kubernetes manages containers and more, from micro-scale at the edge to massive scale, in both public and private cloud environments. It is a perfect choice for a "private cloud at home" project, providing both robust container orchestration and the opportunity to learn about a technology in such demand and so thoroughly integrated into the cloud that its name is practically synonymous with "cloud computing."'),(0,r.kt)("p",null,"In this tutorial, we use one master and three workers. In the following steps, We will indicate in bold whether \uff0cThe software running in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"master"))," or in the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"worker")),", or in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"worker and master")),"."),(0,r.kt)("h3",{id:"configure-docker"},"configure Docker"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"worker and master")),', We need configure the docker runtime use "nvidia" as default.\nmodify the file ',(0,r.kt)("inlineCode",{parentName:"p"},"/etc/docker/daemon.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "default-runtime" : "nvidia",\n    "runtimes": {\n        "nvidia": {\n            "path": "nvidia-container-runtime",\n            "runtimeArgs": []\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Restart the Docker daemon:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl daemon-reload && sudo systemctl restart docker\n")),(0,r.kt)("p",null,"Validate the Docker default runtime as NVIDIA:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker info | grep -i runtime\n")),(0,r.kt)("p",null,"Here\u2019s the sample output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Runtimes: nvidia runc\nDefault Runtime: nvidia\n")),(0,r.kt)("h3",{id:"installing-kubernetes"},"Installing Kubernetes"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"worker and master")),", Install kubelet, kubeadm, and kubectl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get update && sudo apt-get install -y apt-transport-https curl\ncurl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -\n\n# Add the Kubernetes repo\ncat <<EOF | sudo tee /etc/apt/sources.list.d/kubernetes.list\ndeb https://apt.kubernetes.io/ kubernetes-xenial main\nEOF\nsudo apt update && sudo apt install -y kubelet kubeadm kubectl\nsudo apt-mark hold kubelet kubeadm kubectl\n")),(0,r.kt)("p",null,"Disable the swap, You have to turn this off every time you reboot."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo swapoff -a\n")),(0,r.kt)("p",null,"Compile deviceQuery, which we will use it in the following steps."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /usr/local/cuda/samples/1_Utilities/deviceQuery && sudo make \ncd \n")),(0,r.kt)("h3",{id:"configure-kubernetes"},"Configure Kubernetes"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"master")),", Initialize the cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo kubeadm init --pod-network-cidr=10.244.0.0/16\n")),(0,r.kt)("p",null,"The output shows you commands to execute for deploying a pod network to the cluster, as well as commands to join the cluster. If everything is successful, you should see something similar to this at the end of the output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Your Kubernetes control-plane has initialized successfully!\n\nTo start using your cluster, you need to run the following as a regular user:\n\n  mkdir -p $HOME/.kube\n  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\n  sudo chown $(id -u):$(id -g) $HOME/.kube/config\n\nYou should now deploy a pod network to the cluster.\nRun "kubectl apply -f [podnetwork].yaml" with one of the options listed at:\n  https://kubernetes.io/docs/concepts/cluster-administration/addons/\n\nThen you can join any number of worker nodes by running the following on each as root:\n\nkubeadm join 192.168.2.114:6443 --token zqqoy7.9oi8dpkfmqkop2p5 \\\n    --discovery-token-ca-cert-hash sha256:71270ea137214422221319c1bdb9ba6d4b76abfa2506753703ed654a90c4982b\n')),(0,r.kt)("p",null,"Using the output instructions, run the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p $HOME/.kube\nsudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\nsudo chown $(id -u):$(id -g) $HOME/.kube/config\n")),(0,r.kt)("p",null,"Install a pod-network add-on to the control plane node. Use calico as the pod-network add-on:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you are in China, follow this instead:\nkubectl apply -f ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/wj204811/wj204811/raw/master/kube-flannel.yml"},"https://gitee.com/wj204811/wj204811/raw/master/kube-flannel.yml"))),(0,r.kt)("p",null,"Make sure that all pods are up and running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods --all-namespaces\n")),(0,r.kt)("p",null,"Here\u2019s the sample output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n\nNAMESPACE     NAME                                       READY   STATUS    RESTARTS   AGE\nkube-system   kube-flannel-ds-arm64-gz28t                1/1     Running   0          2m8s\nkube-system   coredns-5c98db65d4-d4kgh                   1/1     Running   0          9m8s\nkube-system   coredns-5c98db65d4-h6x8m                   1/1     Running   0          9m8s\nkube-system   etcd-#yourhost                             1/1     Running   0          8m25s\nkube-system   kube-apiserver-#yourhost                   1/1     Running   0          8m7s\nkube-system   kube-controller-manager-#yourhost          1/1     Running   0          8m3s\nkube-system   kube-proxy-6sh42                           1/1     Running   0          9m7s\nkube-system   kube-scheduler-#yourhost                   1/1     Running   0          8m26s\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"worker")),", Join the compute nodes to the cluster, it is now time to add compute nodes to the cluster. Joining the compute nodes is just a matter of running the kubeadm join command provided at the end of the kube init command run to initialize the Control Plane node. For the other Jetson nano you want to join your cluster, log into the host, and run the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," the cluster - your tokens and ca-cert-hash will vary\n$ sudo kubeadm join 192.168.2.114:6443 --token zqqoy7.9oi8dpkfmqkop2p5 \\\n    --discovery-token-ca-cert-hash sha256:71270ea137214422221319c1bdb9ba6d4b76abfa2506753703ed654a90c4982b\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"master")),",Once you have completed the join process on each node, you should be able to see the new nodes in the output of kubectl get nodes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get nodes\n")),(0,r.kt)("p",null,"Here\u2019s the sample output:"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Jetson-Mate/Picture1.png"})),(0,r.kt)("p",null,"tag as node for the worker."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl label node se2 node-role.kubernetes.io/worker=worker\nkubectl label node se3 node-role.kubernetes.io/worker=worker\nkubectl label node se4 node-role.kubernetes.io/worker=worker\n")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Jetson-Mate/Picture2.png"})),(0,r.kt)("h2",{id:"validating-a-successful-egx-20-installation"},"Validating a successful EGX 2.0 installation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"worker and master")),", To validate that the EGX stack works as expected, follow these steps to create a pod yaml file. If the get pods command shows the pod status as completed, the installation has been successful. You can also verify the successful run of the cuda-samples.yaml file by verifying that the output shows Result=PASS.\nCreate a pod yaml file, add the following contents to it, and save it as samples.yaml:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nano cuda-samples.yaml\n")),(0,r.kt)("p",null,"Add the following content and save it as cuda-samples.yaml:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: nvidia-l4t-base\nspec:\n  restartPolicy: OnFailure\n  containers:\n  - name: nvidia-l4t-base\n    image: "nvcr.io/nvidia/l4t-base:r32.4.2"\n    args:\n       - /usr/local/cuda/samples/1_Utilities/deviceQuery/deviceQuery\n')),(0,r.kt)("p",null,"Create a sample GPU pod:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo kubectl apply -f cuda-samples.yaml\n")),(0,r.kt)("p",null,"Check whether the samples pod was created:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get pods\n")),(0,r.kt)("p",null,"Validate the sample pod logs to support CUDA libraries:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl logs nvidia-l4t-base\n")),(0,r.kt)("p",null,"Here\u2019s the sample output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'/usr/local/cuda/samples/1_Utilities/deviceQuery/deviceQuery Starting...\n CUDA Device Query (Runtime API) version (CUDART static linking)\nDetected 1 CUDA Capable device(s)\n \nDevice 0: "Xavier"\n  CUDA Driver Version / Runtime Version          10.2 / 10.2\n  CUDA Capability Major/Minor version number:    7.2\n  Total amount of global memory:                 7764 MBytes (8140709888 bytes)\n  ( 6) Multiprocessors, ( 64) CUDA Cores/MP:     384 CUDA Cores\n  GPU Max Clock rate:                            1109 MHz (1.11 GHz)\n  Memory Clock rate:                             1109 Mhz\n  Memory Bus Width:                              256-bit\n  L2 Cache Size:                                 524288 bytes\n  Maximum Texture Dimension Size (x,y,z)         1D=(131072), 2D=(131072, 65536), 3D=(16384, 16384, 16384)\n  Maximum Layered 1D Texture Size, (num) layers  1D=(32768), 2048 layers\n  Maximum Layered 2D Texture Size, (num) layers  2D=(32768, 32768), 2048 layers\n  Total amount of constant memory:               65536 bytes\n  Total amount of shared memory per block:       49152 bytes\n  Total number of registers available per block: 65536\n  Warp size:                                     32\n  Maximum number of threads per multiprocessor:  2048\n  Maximum number of threads per block:           1024\n  Max dimension size of a thread block (x,y,z): (1024, 1024, 64)\n  Max dimension size of a grid size    (x,y,z): (2147483647, 65535, 65535)\n  Maximum memory pitch:                          2147483647 bytes\n  Texture alignment:                             512 bytes\n  Concurrent copy and kernel execution:          Yes with 1 copy engine(s)\n  Run time limit on kernels:                     No\n  Integrated GPU sharing Host Memory:            Yes\n  Support host page-locked memory mapping:       Yes\n  Alignment requirement for Surfaces:            Yes\n  Device has ECC support:                        Disabled\n  Device supports Unified Addressing (UVA):      Yes\n  Device supports Compute Preemption:            Yes\n  Supports Cooperative Kernel Launch:            Yes\n  Supports MultiDevice Co-op Kernel Launch:      Yes\n  Device PCI Domain ID / Bus ID / location ID:   0 / 0 / 0\n  Compute Mode:\n     < Default (multiple host threads can use ::cudaSetDevice() with device simultaneously) >\n \ndeviceQuery, CUDA Driver = CUDART, CUDA Driver Version = 10.2, CUDA Runtime Version = 10.2, NumDevs = 1\nResult = PASS\n')),(0,r.kt)("h2",{id:"configure-jupyter-on-kubernetes"},"Configure Jupyter on Kubernetes"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"worker and master")),",Add the following content and save it as jupyter.yaml:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nano jupyter.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\napiVersion: apps/v1 # for versions before 1.9.0 use apps/v1beta2\nkind: Deployment\nmetadata:\n  name: cluster-deployment\nspec:\n  selector:\n    matchLabels:\n      app: cluster\n  replicas: 3 # tells deployment to run 3 pods matching the template\n  template:\n    metadata:\n      labels:\n        app: cluster\n    spec:\n      containers:\n      - name: nginx\n        image: helmuthva/jetson-nano-jupyter:latest\n        ports:\n        - containerPort: 8888\n")),(0,r.kt)("p",null,"Create a jupyter GPU pod:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl  apply -f jupyter.yml\n")),(0,r.kt)("p",null," Check whether the jupyter pod was created and running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pod\n")),(0,r.kt)("p",null," Create an External Load Balancer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl expose deployment cluster-deployment --port=8888 --type=LoadBalancer \n")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Jetson-Mate/Picture3.png"})),(0,r.kt)("p",null," Here you can see that the jupyter cluster has external access on port 31262. So we use ",(0,r.kt)("inlineCode",{parentName:"p"},"http://se1.local:31262")," to visit the jupyter."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Jetson-Mate/Picture4.png"})),(0,r.kt)("p",null,"We can use the following code to check the number of GPUs available, we only have 3 workers, and the number of GPUs available is 3."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom tensorflow.python.client import device_lib\n\ndef get_available_gpus():\n    local_device_protos = device_lib.list_local_devices()\n    return [x.name for x in local_device_protos if x.device_type == 'GPU']\n\nget_available_gpus()\n")),(0,r.kt)("p",null,"All right, here's your show."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Jetson-Mate/Jetson-Mate-Schematics-V1.0.pdf"},"Jetson Mate Schematics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Jetson-Mate/Jetson-Mate-PCB-TOP-V1.0.pdf"},"Jetson Mate PCB Top")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Jetson-Mate/Jetson-Mate-PCB-BOTTOM-V1.0.pdf"},"Jetson Mate PCB Bottom"))),(0,r.kt)("iframe",{frameBorder:0,height:385,scrolling:"no",src:"https://www.hackster.io/WhoseAI/set-up-a-jetson-nano-nx-cluster-in-one-systerm-ac4235/embed",width:350}),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum")),(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}d.isMDXComponent=!0}}]);