"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[27210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>S});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,S=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(S,i(i({ref:t},u),{},{components:n})):a.createElement(S,i({ref:t},u))}));function S(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={description:"ODYSSEY - X86J4105",title:"FreeNAS Installation",tags:["ODYSSEY"],keywords:["ODYSSEY"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/ODYSSEY-X86J4105-Installing-FreeNAS",last_update:{date:"01/03/2023",author:"w0x7ce"}},i=void 0,o={unversionedId:"Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-Installing-FreeNAS",id:"Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-Installing-FreeNAS",title:"FreeNAS Installation",description:"ODYSSEY - X86J4105",source:"@site/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-Installing-FreeNAS.md",sourceDirName:"Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation",slug:"/ODYSSEY-X86J4105-Installing-FreeNAS",permalink:"/ODYSSEY-X86J4105-Installing-FreeNAS",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-Installing-FreeNAS.md",tags:[{label:"ODYSSEY",permalink:"/tags/odyssey"}],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672704e3,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{description:"ODYSSEY - X86J4105",title:"FreeNAS Installation",tags:["ODYSSEY"],keywords:["ODYSSEY"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/ODYSSEY-X86J4105-Installing-FreeNAS",last_update:{date:"01/03/2023",author:"w0x7ce"}},sidebar:"ProductSidebar",previous:{title:"Android-x86 Installation",permalink:"/ODYSSEY-X86J4105-Installing-Android"},next:{title:"BalenaOS Installation",permalink:"/BalenaOS-X86-Getting-Started"}},s={},p=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Download the FreeNAS OS Image",id:"download-the-freenas-os-image",level:2},{value:"Creating a Bootable USB",id:"creating-a-bootable-usb",level:2},{value:"Step 1 - Prepare your Bootable USB",id:"step-1---prepare-your-bootable-usb",level:3},{value:"Step 2 - Download Flash Burner",id:"step-2---download-flash-burner",level:3},{value:"Step 3 - Writing the OS Image into USB",id:"step-3---writing-the-os-image-into-usb",level:3},{value:"Installing FreeNAS OS",id:"installing-freenas-os",level:2},{value:"Step 1 - Enabling CSM Mode in ODYSSEY - X86J4105",id:"step-1---enabling-csm-mode-in-odyssey---x86j4105",level:3},{value:"Step 2 - Install the OS",id:"step-2---install-the-os",level:3},{value:"Step 3 - Installing process",id:"step-3---installing-process",level:3},{value:"Configurations",id:"configurations",level:2},{value:"Acrylic Case",id:"acrylic-case",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This tutorial demonstrates how to install the open-source Storage operating system.  ",(0,r.kt)("a",{parentName:"p",href:"https://www.freenas.org/"},"FreeNAS")," is an operating system that can be installed on virtually any hardware platform to share data over a network. By installing FreeNAS on ODYSSEY - X86J4105 you have built yourself a personal cloud drive!"),(0,r.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Working Computer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"USB Drive x 2 (>= 8GB is recommended)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Monitor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Keyboard"))),(0,r.kt)("h2",{id:"download-the-freenas-os-image"},"Download the FreeNAS OS Image"),(0,r.kt)("p",null,"First, download the ",(0,r.kt)("a",{parentName:"p",href:"https://www.freenas.org/download-freenas-release/"},"FreeNAS OS Image")," into your drive. It should be a ",(0,r.kt)("inlineCode",{parentName:"p"},".iso")," file."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-download.jpg",alt:null})),(0,r.kt)("p",null,"In this tutorial, FreeNAS 11.3 is used. FreeNAS will need to install on a different drive. You can install the FreeNAS on an HDD or SSD Hard Drive."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," In this tutorial, FreeNAS OS is installed onto a USB drive for convenience."),(0,r.kt)("h2",{id:"creating-a-bootable-usb"},"Creating a Bootable USB"),(0,r.kt)("h3",{id:"step-1---prepare-your-bootable-usb"},"Step 1 - Prepare your Bootable USB"),(0,r.kt)("p",null,"Format one of the USB drive. If you are a Windows user, you can format the USB drive by right-clicking the USB Drive and select ",(0,r.kt)("inlineCode",{parentName:"p"},"Format"),".  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Choose ",(0,r.kt)("inlineCode",{parentName:"p"},"FAT32")," for the File System."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:"{450}",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png"})),(0,r.kt)("h3",{id:"step-2---download-flash-burner"},"Step 2 - Download Flash Burner"),(0,r.kt)("p",null,"Download the Open Source Flash burner ",(0,r.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher/"},"balenaEtcher"),". Download the version according to your operating system(Windows/macOS/Linux)."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg"})),(0,r.kt)("h3",{id:"step-3---writing-the-os-image-into-usb"},"Step 3 - Writing the OS Image into USB"),(0,r.kt)("p",null,"Select the downloaded Operating System Image, select the formatted USB Drive and Flash! Now, the bootable USB is all set to go."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png"})),(0,r.kt)("h2",{id:"installing-freenas-os"},"Installing FreeNAS OS"),(0,r.kt)("h3",{id:"step-1---enabling-csm-mode-in-odyssey---x86j4105"},"Step 1 - Enabling CSM Mode in ODYSSEY - X86J4105"),(0,r.kt)("p",null,"Plugin your bootable USB, Monitor and keyboard to ODYSSEY - X86J4105, and power up. When booting up, keep pressing ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"DEL"))," key to enter the setup screen. Navigate to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Advanced"))," -> ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"CSM Support"))," and press Enter to enable it."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetting.jpg"})),(0,r.kt)("h3",{id:"step-2---install-the-os"},"Step 2 - Install the OS"),(0,r.kt)("p",null,"Reboot your ODYSSEY - X86J4105 and keep pressing ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"F7"))," to enter the boot manager screen. Select the bootable USB (Installer) and press Enter."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Remember to choose the one that has the FreeNAS iso image on it."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg"})),(0,r.kt)("h3",{id:"step-3---installing-process"},"Step 3 - Installing process"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-boot.jpg",alt:null})),(0,r.kt)("p",null,"A boot screen like above should appear. Press ",(0,r.kt)("inlineCode",{parentName:"p"},"Enter")," to select the Boot FreeNAS Installer."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-option.jpg",alt:null})),(0,r.kt)("p",null,"Once entered into the installer, an options menu should appear as follow, select ",(0,r.kt)("strong",{parentName:"p"},"Install/Select")," and press ",(0,r.kt)("inlineCode",{parentName:"p"},"Enter"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-drive.jpg",alt:null})),(0,r.kt)("p",null,"Select a drive to install the FreeNAS image. Here we should be able to see the other USB drive."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Use ",(0,r.kt)("inlineCode",{parentName:"p"},"spacebar")," to select the USB drive."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-warning.jpg",alt:null})),(0,r.kt)("p",null,"A warning will appear stating that everything in the chosen drive will be wiped, simply press Yes."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-pw.jpg"})),(0,r.kt)("p",null,"Create your root password for logging into the FreeNAS from Web interface later."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-complete.jpg",alt:null})),(0,r.kt)("p",null,"The installing process will take place, and wait until the installing is finished. When it's done, it should like above."),(0,r.kt)("p",null,"The installing process is all done, you can reboot the ODYSSEY - X86J4105 and unplug the bootable USB(Installer)."),(0,r.kt)("p",null,"Plug in the Ethernet cable for internet and can be accessed to the Web interface."),(0,r.kt)("h2",{id:"configurations"},"Configurations"),(0,r.kt)("p",null,"Reboot the ODYSSEY - X86J4105 and press ",(0,r.kt)("inlineCode",{parentName:"p"},"F7")," again to enter Boot Manager Screen, and choose the USB drive that just installed the FreeNAS."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Can also change it in the set-up by pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"DEL")," and set the USB drive as the first boot-up option."),(0,r.kt)("p",null,"Once booted into the FreeNAS, you should see the Web interface address:"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-bootcomplete.jpg"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," If states Web interface cannot be accessed, please check your internet connection."),(0,r.kt)("p",null,"Use another computer using the same internet i.e. your laptop to type the address into the web browser:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-web1.jpg",alt:null})),(0,r.kt)("p",null,"The user name is ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," and the password is the one set during installation."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-web2.jpg",alt:null})),(0,r.kt)("p",null,"If you able see this screen then you have successfully installed the FreeNAS and feel free to add more storage to the ODYSSEY - X86J4105 and have fun with personal cloud drive!"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"For further development, you can visit the ",(0,r.kt)("a",{parentName:"em",href:"https://www.ixsystems.com/community/?__hstc=54333623.367bb0a280861850367fe7c0081ee5de.1582628751612.1582693495900.1582699340011.3&__hssc=54333623.1.1582699340011&__hsfp=3609375136"},"FreeNAS official Forum")," and find out more about plugins and features")),(0,r.kt)("h2",{id:"acrylic-case"},"Acrylic Case"),(0,r.kt)("p",null,"We have also designed an Acrylic Case for building your own NAS into a enclosure! Here provides two versions of enclosure depending on the size of your hard drive:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/J4105-2.5.dwg"},(0,r.kt)("strong",{parentName:"a"},"2.5 inches of SATA HDD"))," Hard Drive.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/J4105-3.5.dwg"},(0,r.kt)("strong",{parentName:"a"},"3.5 inches of SATA HDD"))," Hard Drive."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Materials Required:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"3mm Acrylics sheets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"M3 x 20mm Hexagon Female-Female Threaded Pillar x 4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"M3 x 40mm Hexagon Female-Female Threaded Pillar x 4 (or use M3 x 20mm to stack up to 40mm)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"M3 Screws"))),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Explaining Computers Video on FreeNAS on Odyssey-X86:")),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/qyz91Q_JrBc",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("p",null,"Other useful applications:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=sMZ-s8wHkHw&list=PLMeX7dgR89SvzGW0eumZuP_LAeBGEDnBb&index=11"},"Getting Started With FreeNAS 11 Install, Configure, Setup Users, Setup Shares & How Snapshots Work"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.windowscentral.com/how-to-set-up-freenas-home-file-server"},"How to set up a home file server using FreeNAS"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.backblaze.com/blog/how-to-setup-freenas-cloud-storage/"},"Backing Up FreeNAS and TrueNAS to Backblaze B2")))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum")),(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}d.isMDXComponent=!0}}]);