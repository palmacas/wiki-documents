"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[10710],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return a?r.createElement(h,i(i({ref:t},d),{},{components:a})):r.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},74985:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={description:"ODYSSEY - X86J4105",title:"Coral Mini PCIe Accelerator for ODYSSEY",tags:["ODYSSEY"],keywords:["ODYSSEY"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/Coral-Mini-PCIe-Accelerator-x86",last_update:{date:"01/03/2023",author:"w0x7ce"}},i=void 0,o={unversionedId:"Edge/ODYSSEY/ODYSSEY_X86J4105/Coral-Mini-PCIe-Accelerator-on-ODYSSEY-X86J4105",id:"Edge/ODYSSEY/ODYSSEY_X86J4105/Coral-Mini-PCIe-Accelerator-on-ODYSSEY-X86J4105",title:"Coral Mini PCIe Accelerator for ODYSSEY",description:"ODYSSEY - X86J4105",source:"@site/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/Coral-Mini-PCIe-Accelerator-on-ODYSSEY-X86J4105.md",sourceDirName:"Edge/ODYSSEY/ODYSSEY_X86J4105",slug:"/Coral-Mini-PCIe-Accelerator-x86",permalink:"/Coral-Mini-PCIe-Accelerator-x86",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/Coral-Mini-PCIe-Accelerator-on-ODYSSEY-X86J4105.md",tags:[{label:"ODYSSEY",permalink:"/tags/odyssey"}],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672704e3,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{description:"ODYSSEY - X86J4105",title:"Coral Mini PCIe Accelerator for ODYSSEY",tags:["ODYSSEY"],keywords:["ODYSSEY"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/Coral-Mini-PCIe-Accelerator-x86",last_update:{date:"01/03/2023",author:"w0x7ce"}},sidebar:"ProductSidebar",previous:{title:"Adding Accessories",permalink:"/ODYSSEY-X86J4105-Accessories"},next:{title:"LTE Modules for ODYSSEY",permalink:"/ODYSSEY-X86J4105-LTE-Module"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"play with ODYSSEY - X86J4105",id:"play-with-odyssey---x86j4105",level:3},{value:"Hardware Connection",id:"hardware-connection",level:4},{value:"Software",id:"software",level:2},{value:"1.Install the PCIe driver",id:"1install-the-pcie-driver",level:2},{value:"2. Install the edge tpu runtime",id:"2-install-the-edge-tpu-runtime",level:2},{value:"3. Install the TensorFlow Lite library",id:"3-install-the-tensorflow-lite-library",level:2},{value:"4. Run a model using the TensorFlow Lite API",id:"4-run-a-model-using-the-tensorflow-lite-api",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/M.2.jpg",alt:" "})),(0,n.kt)("p",null,"Coral Mini PCIe Accelerator on ODYSSEY X86J4105 is an M.2 module that brings the edge tpu coprocessor to existing systems and products."),(0,n.kt)("p",null,"The edge tpu is a small ASCI designed by google that provides high-performance ml influencing with low power requirements: it's capable of performing 4 trillion operations (tera-operations) per second (tops), using 0.5 watts for each tops (2 tops per watt). For example, it can execute state-of-the-art mobile vision models such as mobileNet v2 at almost 400 fps, in a power-efficient manner. This on-device processing reduces latency, increases data privacy, and removes the need for constant high-bandwidth connectivity."),(0,n.kt)("p",null,"The M.2 Accelerator is a dual-key M.2 card ( B+M keys), designed to fit any compatible M.2 slot. This form-factor enables easy integration into arm and x86 platforms so you can add local ML acceleration to products such as embedded platforms, mini-PCs, and industrial gateways."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Coral-M-2-Accelerator-B-M-key-p-4411.html"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png",alt:"enter image description here"}))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Performs high-speed ML influencing"),(0,n.kt)("li",{parentName:"ul"},"Works with debian linux"),(0,n.kt)("li",{parentName:"ul"},"Supports tensorFlow lite"),(0,n.kt)("li",{parentName:"ul"},"Supports ",(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/vision/automl/docs/edge-quickstart"},"AutoML Vision Edge"))),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Physical specifications"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Dimensions"),(0,n.kt)("td",{parentName:"tr",align:null},"B+M key: 22.00 x 80.00 x 2.35 mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Weight"),(0,n.kt)("td",{parentName:"tr",align:null},"B+M key: 5.8 g")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Host interface"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hardware interface"),(0,n.kt)("td",{parentName:"tr",align:null},"M.2 B+M key (M.2-2280-B-M-S3)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Serial interface"),(0,n.kt)("td",{parentName:"tr",align:null},"PCIe Gen2 x1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating voltage"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DC supply"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V +/- 10 %")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Environmental reliability"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Temperature"),(0,n.kt)("td",{parentName:"tr",align:null},"-40 ~ 85\xb0C(storage)     -20 ~ 70\xb0 C (operating)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Relative humidity"),(0,n.kt)("td",{parentName:"tr",align:null},"0 ~ 100% (non-condensing)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mechanical reliability"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Op-shock"),(0,n.kt)("td",{parentName:"tr",align:null},"100 G, 11ms (persistent)1000 G, 0.5 ms (stress)1000 G, 1.0 ms (stress)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Op-vibe (random)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.5 Grms, 5 - 500 Hz (persistent)3 Grms, 5 - 800 Hz (stress)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Op-vibe (sinusoidal)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.5 Grms, 5 - 500 Hz (persistent)3 Grms, 5 - 800 Hz (stress)")))),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/hardware.jpg",alt:" "})),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"play-with-odyssey---x86j4105"},"play with ODYSSEY - X86J4105"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Materials required")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Coral Mini PCIe Accelerator"),(0,n.kt)("th",{parentName:"tr",align:null},"ODYSSEY  X86J4105"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/M.2.jpg",alt:" "})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/PC.png",alt:" "}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Coral-M-2-Accelerator-B-M-key-p-4411.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html"},"Get ONE Now"))))),(0,n.kt)("h4",{id:"hardware-connection"},"Hardware Connection"),(0,n.kt)("p",null,"The steps of hardware connection is very simple."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Connecting Coral Mini PCIe Accelerator  to the ODYSSEY - X86J4105."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Connecting the power to the ODYSSEY - X86J4105."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Connecting the power and display to the ODYSSEY - X86J4105."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4."),"  Connecting the keyboard and mouse to the ODYSSEY - X86J4105."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5.")," If you have a network cable, please connect it to you ODYSSEY - X86J4105.")),(0,n.kt)("h2",{id:"software"},"Software"),(0,n.kt)("p",null,"After we finished hardware connection,the next step is to solve software problems.\nHere I'll tell you a few  installation steps: install  PCIe driver, edge tpu runtime, and the tensorFlow Lite runtime."),(0,n.kt)("p",null,"At first, what you need  is a linux computer, please follow the step."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can choose  x86-64, ARMv7 (32-bit), or ARMv8 (64-bit) system ."),(0,n.kt)("p",{parentName:"li"}," Please refer to how to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/ODYSSEY-X86J4105-Installing-OS/"},"create a bootable USB drive and install Linux OS(Ubuntu Desktop 18.04)")," onto the ODYSSEY - X86J4105.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"An available Coral Mini PCIe Accelerator on ODYSSEY X86J4105")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Debian 6.0 Linux distribution or higher, or any derivative thereof (such as Ubuntu 10.0+)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Python 3.5 or higher"))),(0,n.kt)("p",null,"After you successfully make the U disk boot disk and install the Linux os file , you can go to the next step."),(0,n.kt)("h2",{id:"1install-the-pcie-driver"},"1.Install the PCIe driver"),(0,n.kt)("p",null,"If you already installed a pre-built Apex driver, you should consider Whether the drive will result in the Edge TPU fail, because some of the drivers have bugs lead to these mistakes. So you should check it. So first follow these steps:"),(0,n.kt)("p",null,"   1.Check your linux kernel version with this command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"   uname -r \n\n")),(0,n.kt)("p",null,"   If it prints 4.18 or lower, you should be okay and can skip beginning installing our pcie driver."),(0,n.kt)("p",null,"   2.If your kernel version is 4.19 or higher, now check if you have a pre-build apex driver installed:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"   lsmod | grep apex\n\n")),(0,n.kt)("p",null,"   If it prints nothing, then you're okay and continue to install our pcie driver."),(0,n.kt)("p",null,"   If it does print an apex module name, stop here and follow the ",(0,n.kt)("a",{parentName:"p",href:"https://coral.ai/docs/m2/get-started/#workaround-to-disable-apex-and-gasket"},"workaround to disable Apex and Gasket"),"."),(0,n.kt)("p",null,"Install  pcie driver as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure the host system where you'll connect the module is shut down.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Connect the Coral PCIe module to your host system at the B Key M.2 interface(SATA_SSD M.2 interface not support the Coral module).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Boot the system and make sure it has an internet connection. Then add our debian package repository to your system and install our pcie driver with these commands:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'echo "deb https://packages.cloud.google.com/apt coral-edgetpu-stable main" | sudo tee /etc/apt/sources.list.d/coral-edgetpu.list\n\ncurl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -\n\nsudo apt update\n\nsudo apt-get install gasket-dkms\n')),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},'If the user account you\'ll be using does not have root permissions, you might need to add the following udev rule, and then verify that the "apex" group exists and that your user is added to it:')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'   sudo sh -c "echo \'SUBSYSTEM==\\"apex\\", MODE=\\"0660\\", GROUP=\\"apex\\"\' >> /etc/udev/rules.d/65-apex.rules"\n\n   sudo groupadd apex\n\n   sudo adduser $USER apex\n')),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reboot the system.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Verify that the accelerator module is detected:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"   lspci -x | grep 089a\n")),(0,n.kt)("p",{parentName:"li"},"You should see something like this:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  03:00.0 System peripheral: Device 1ac1:089a\n")),(0,n.kt)("p",{parentName:"li"},"The 03 number and system peripheral name might be different because those are host-system specific, but as long as you see a device listed with 089a then you're okay to proceed.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Verify that the pcie driver is loaded:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"ls /dev/apex_0\n")),(0,n.kt)("p",{parentName:"li"},"You should simply see the name repeated back:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"/dev/apex_0\n\n")))),(0,n.kt)("h2",{id:"2-install-the-edge-tpu-runtime"},"2. Install the edge tpu runtime"),(0,n.kt)("p",null,"The edge tpu runtime is required to communicate with the edge tpu. You can install it on your host computer from a command line as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo apt-get install libedgetpu1-std\n")),(0,n.kt)("p",null,"Notes"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Unlike the ",(0,n.kt)("a",{parentName:"p",href:"https://coral.ai/products/accelerator/"},"USB Accelerator"),', the mini pcie and M.2 accelerator do not use different runtime packages for "reduced" and "maximum" clock frequencies. Instead, these devices operate at the maximum frequency by default and perform  ',(0,n.kt)("a",{parentName:"p",href:"https://coral.ai/docs/m2/get-started/#operating-frequency-and-thermal-settings"},"power throttling based on thermal limits"),".")),(0,n.kt)("h2",{id:"3-install-the-tensorflow-lite-library"},"3. Install the TensorFlow Lite library"),(0,n.kt)("p",null,"There are several ways you can install TensorFlow's apis, but to get started with Python, the easiest option is to install the tflite_runtime package. This package provides the bare minimum code required to run an inference with python (primarily, the ",(0,n.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/api_docs/python/tf/lite/Interpreter"},"Interpreter")," api), thus saving you a lot of disk space."),(0,n.kt)("p",null,"To install it, follow the ",(0,n.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/lite/guide/python"},"TensorFlow Lite Python quickstart"),", and then return to this page after you run the pip3 install command."),(0,n.kt)("h2",{id:"4-run-a-model-using-the-tensorflow-lite-api"},"4. Run a model using the TensorFlow Lite API"),(0,n.kt)("p",null,"Now you're ready to run  inference on the edge tpu. Follow these steps to perform image classification with our example code and model:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Download the example code from GitHub:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"   mkdir coral && cd coral\n\n   git clone https://github.com/google-coral/tflite.git\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Download the bird classifier model, labels file, and a bird photo:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd tflite/python/examples/classification\n\nbash install_requirements.sh\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Run the image classifier with the bird photo (shown in figure 1):")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"python3 classify_image.py \\\n--model models/mobilenet_v2_1.0_224_inat_bird_quant_edgetpu.tflite \\\n--labels models/inat_bird_labels.txt \\\n--input images/parrot.jpg\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/parrot.jpg",alt:null})),(0,n.kt)("p",null,"You should see results like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"INFO: Initialized TensorFlow Lite runtime.\n----INFERENCE TIME----\nNote: The first inference on Edge TPU is slow because it includes loading the model into Edge TPU memory.\n11.8ms\n3.0ms\n2.8ms\n2.9ms\n2.9ms\n-------RESULTS--------\nAra macao (Scarlet Macaw): 0.76562\n")),(0,n.kt)("p",null,"Congrats! You just performed an inference on the edge tpu using tensorflow lite."),(0,n.kt)("p",null,"To demonstrate varying inference speeds, the example repeats the same inference five times. It prints the time to perform each inference and the top classification (the label ID/name and the confidence score, from 0 to 1.0). Your inference speeds might differ based on your host system."),(0,n.kt)("p",null,"The classify_image.py example above uses the tensorflow lite python api. To learn more about how it works, take a look at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/google-coral/tflite/blob/master/python/examples/classification/classify_image.py"},"the classify_image.py source code")," and read about how to ",(0,n.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/lite/guide/inference#load_and_run_a_model_in_python"},"run inference with TensorFlow Lite"),"."),(0,n.kt)("p",null,"As an alternative to using the tensorflow lite api (used above), you can use the ",(0,n.kt)("a",{parentName:"p",href:"https://coral.ai/docs/edgetpu/api-intro/"},"Edge TPU Python API"),", which provides high-level apis to perform inference with image classification and object detection models with just a few lines of code. For  example, try our other version of ",(0,n.kt)("a",{parentName:"p",href:"https://coral.ai/examples/classify-image/"},"classify_image.py using the Edge TPU API"),"."),(0,n.kt)("p",null,"You can also ",(0,n.kt)("a",{parentName:"p",href:"https://coral.ai/docs/edgetpu/tflite-cpp/"},"run inference using C++ and TensorFlow Lite"),"."),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeeedDocument/Bazaar_Document/raw/master/Coral-M2-datasheet.pdf"},"Datasheet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://coral.ai/docs/mini-pcie/datasheet/#"},"Coral Ai user manual"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);