"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[14160],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>g});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(i),c=r,g=p["".concat(d,".").concat(c)]||p[c]||m[c]||a;return i?n.createElement(g,o(o({ref:t},u),{},{components:i})):n.createElement(g,o({ref:t},u))}));function g(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=i[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},60257:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=i(87462),r=(i(67294),i(3905));const a={description:"Getting started wizard",title:"Getting started wizard",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Getting_started_wizard",last_update:{date:"1/31/2023",author:"jianjing Huang"}},o="Build an ML Model in 5 Minutes and Deploy in the Wio Terminal Powered by Edge Impulse",l={unversionedId:"Sensor/Wio_Terminal/Tutorial/Getting_started_wizard",id:"Sensor/Wio_Terminal/Tutorial/Getting_started_wizard",title:"Getting started wizard",description:"Getting started wizard",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Getting_started_wizard.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial",slug:"/Getting_started_wizard",permalink:"/Getting_started_wizard",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Getting_started_wizard.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{description:"Getting started wizard",title:"Getting started wizard",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Getting_started_wizard",last_update:{date:"1/31/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"How to measure noise levels with Wio Terminal",permalink:"/Wio-Terminal-Sound-Meter"},next:{title:"Edge Impulse Tuner",permalink:"/Edge-Impulse-Tuner"}},d={},s=[{value:"<strong>Introduction</strong>",id:"introduction",level:2},{value:"<strong>Getting started with Edge Impulse</strong>",id:"getting-started-with-edge-impulse",level:2},{value:"<strong>Hardware</strong>",id:"hardware",level:3},{value:"<strong>Software</strong>",id:"software",level:3},{value:"Edge Impulse Training Started",id:"edge-impulse-training-started",level:3},{value:"Deploy the Machine Learning Model in the Wio Terminal",id:"deploy-the-machine-learning-model-in-the-wio-terminal",level:3}],u={toc:s};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"build-an-ml-model-in-5-minutes-and-deploy-in-the-wio-terminal-powered-by-edge-impulse"},"Build an ML Model in 5 Minutes and Deploy in the Wio Terminal Powered by Edge Impulse"),(0,r.kt)("h2",{id:"introduction"},(0,r.kt)("strong",{parentName:"h2"},"Introduction")),(0,r.kt)("p",null,"Edge Impulse has launched a new ",(0,r.kt)("strong",{parentName:"p"},"Getting Started Wizard"),' which is very friendly to Machine Learning beginners. It uses the few-shot keyword spotting model that lets you record a short sentence, automatically improving your dataset to give you an open-source model in less than 5 minutes. The model can be applied in the Wio Terminal. In this wiki, we will show you how to use the "wizard" and then deploy the model from the wizard into the Wio Terminal.'),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png"})),(0,r.kt)("h2",{id:"getting-started-with-edge-impulse"},(0,r.kt)("strong",{parentName:"h2"},"Getting started with Edge Impulse")),(0,r.kt)("p",null,"Now we are going to introduce you to how to launch the Getting Started Wizard and then show you the instruction."),(0,r.kt)("h3",{id:"hardware"},(0,r.kt)("strong",{parentName:"h3"},"Hardware")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hardware Required")),(0,r.kt)("p",null,"In this demo you will need the devices listed as below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"WioTerminal")),(0,r.kt)("li",{parentName:"ul"},"PC"),(0,r.kt)("li",{parentName:"ul"},"Microphone to the PC"),(0,r.kt)("li",{parentName:"ul"},"Type-C cable")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hardware Connect")),(0,r.kt)("p",null,"It is connected to a computer through the Type-C cable."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI02a.png"})),(0,r.kt)("h3",{id:"software"},(0,r.kt)("strong",{parentName:"h3"},"Software")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hardware Required")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Arduino IDE"))),(0,r.kt)("p",null,"The project is based on the Arduino platform which means Arduino IDE and various Arduino libraries are required. If this is your first time using the Wio terminal, we recommend a guide to quickly ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/"},"Get Started with Wio Terminal"),"."),(0,r.kt)("h3",{id:"edge-impulse-training-started"},"Edge Impulse Training Started"),(0,r.kt)("p",null,"First, you need to have your own Edge Impulse account and then create a project."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1"),". Open the ",(0,r.kt)("a",{parentName:"li",href:"https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1"},"Edge Impulse website"),", and then register an account.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/Alots/Alots1.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2"),". Create a new project.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/Alots/Alots2.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3"),". Click the ",(0,r.kt)("strong",{parentName:"li"},'"Launch getting started wizard"'),' button at the bottom of the "Dashboard" page and start the wizard.')),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI02a.jpg"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4"),". Follow the instruction by clicking the button.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI03.jpg"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 5"),". Enter a word or a short sentence.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI04a.jpg"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 6"),". Record yourself saying words for 38 seconds through the computer microphone.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI06.jpg"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI07.jpg"})),(0,r.kt)("p",null,"Make sure you record clearly and collect enough data, otherwise you will be asked to collect more."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI08.jpg"})),(0,r.kt)("p",null,"Once you collect enough, the block will show up."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI09.jpg"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 7"),'. Click "Next" and Edge Impulse will help you mix other words along with background noise in your dataset.')),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI10.jpg"})),(0,r.kt)("p",null,"And then the model can learn to distinguish between your words and other sounds."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI12.jpg"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 8"),'. Follow the instruction and create "the impulse".')),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI13.jpg"})),(0,r.kt)("p",null,"It can extract the features that can be used for machine learning."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI14.jpg"})),(0,r.kt)("p",null,'It is functioning automatically, and click "Next" when it completed'),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI15.jpg"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 9"),". Follow the instruction and train a neural network for your model.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI16.jpg"})),(0,r.kt)("p",null,"Proceed until the model has been trained."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI17.jpg"})),(0,r.kt)("p",null,"You can use the microphone again and check your results."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI18.jpg"})),(0,r.kt)("p",null,"Congratulations on your new words classification model! Now we can deploy the model on our Wio Terminal."),(0,r.kt)("h3",{id:"deploy-the-machine-learning-model-in-the-wio-terminal"},"Deploy the Machine Learning Model in the Wio Terminal"),(0,r.kt)("p",null,"Here we are going to deploy our model in the Wio Terminal."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 10"),'. Select and click the "Deployment" column on the left. Then choose "Arduino Library", to the bottom select "build" to create the library needed in your Arduino. It will automatically download a zip file that includes the third-party library.')),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Alots/Alots19.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI21.jpg"})),(0,r.kt)("p",null,"The name of the wanted library is about the name of the project which means whatever the name you have written to the project on ",(0,r.kt)("strong",{parentName:"p"},"step 2")," will be shown here. It can help you find the correct file that you need."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI22.jpg"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 11"),". Download the audio recognition code ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/example.ino"},"here")," and open it with Arduino IDE. Meanwhile, it is required to add the downloaded .zip file so you can apply the third-party library.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI23.jpg"})),(0,r.kt)("p",null,"Change the name of the third-party library to your own and the words you say in the first place."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI24.jpg"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI25.jpg"})),(0,r.kt)("p",null,"Finally, you can say the words and observe whether the Wio Terminal displays them."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI26.jpg"})))}p.isMDXComponent=!0}}]);