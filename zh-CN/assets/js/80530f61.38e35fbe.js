"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[25634],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"DSO Nano/Development",keywords:["docusaurus"],image:"https://wiki.seeedstudio.com/DSO_Nano-Development/",slug:"/DSO_Nano-Development",last_update:{date:"02/03/2022",author:"gunengyu"}},i=void 0,l={unversionedId:"Sensor/Beyond_Grove/Accessories/Tools/DSO_Nano-Development",id:"Sensor/Beyond_Grove/Accessories/Tools/DSO_Nano-Development",title:"DSO Nano/Development",description:"Some resources for developing (on) the DSO Nano.",source:"@site/docs/Sensor/Beyond_Grove/Accessories/Tools/DSO_Nano-Development.md",sourceDirName:"Sensor/Beyond_Grove/Accessories/Tools",slug:"/DSO_Nano-Development",permalink:"/zh-CN/DSO_Nano-Development",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Beyond_Grove/Accessories/Tools/DSO_Nano-Development.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1643846400,formattedLastUpdatedAt:"2022\u5e742\u67083\u65e5",frontMatter:{title:"DSO Nano/Development",keywords:["docusaurus"],image:"https://wiki.seeedstudio.com/DSO_Nano-Development/",slug:"/DSO_Nano-Development",last_update:{date:"02/03/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"DSO Nano v3",permalink:"/zh-CN/DSO_Nano_v3"},next:{title:"DSO Nano/OpenOCD gdb",permalink:"/zh-CN/DSO_Nano-OpenOCD_gdb"}},u={},s=[{value:"Firmware development",id:"firmware-development",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Links",id:"links",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Some resources for developing (on) the ",(0,o.kt)("a",{parentName:"p",href:"/DSO_Nano",title:"DSO Nano"},"DSO Nano"),"."),(0,o.kt)("h2",{id:"firmware-development"},"Firmware development"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get the source and build it")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/DSO_Nano-gcc",title:"DSO Nano/gcc"},"Building the source with gcc"),". To build with IAR, see the Links section below."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Contribute patches")),(0,o.kt)("p",null,'Please share your modifications at the DSO Nano forum. The best is to post a "diff" from the git repository. E.g. "git diff ',">"," mypatch.diff and post the mypatch.diff instead of uploading the whole code tree. Even better is to learn ",(0,o.kt)("a",{parentName:"p",href:"http://git-scm.com/"},"git")," and make real patch series. Or publish your own git tree somewhere (gitourious.org, github.com etc)."),(0,o.kt)("h2",{id:"debugging"},"Debugging"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Debug arm code running on the ",(0,o.kt)("a",{parentName:"p",href:"/DSO_Nano-Qemu_gdb",title:"DSO Nano/Qemu gdb"},"qemu emulator using gdb"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Debug arm code running on a board with JTAG using ",(0,o.kt)("a",{parentName:"p",href:"/DSO_Nano-OpenOCD_gdb",title:"DSO Nano/OpenOCD gdb"},"OpenOCD and gdb")))),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://dsonano.googlecode.com/files/DSO%20nano%20firmware%20generation%20and%20upgrade.pdf"},"Firmware generation and upgrade")," (PDF)")),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("div",null,(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);