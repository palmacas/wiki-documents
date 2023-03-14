"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[61822],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),s=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(d.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),c=a,f=p["".concat(d,".").concat(c)]||p[c]||m[c]||o;return t?i.createElement(f,r(r({ref:n},u),{},{components:t})):i.createElement(f,r({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},55869:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=t(87462),a=(t(67294),t(3905));const o={description:"How to measure noise levels with Wio Terminal",title:"How to measure noise levels with Wio Terminal",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Sound-Meter",last_update:{date:"1/31/2023",author:"jianjing Huang"}},r="How to measure noise levels with Wio Terminal",l={unversionedId:"Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Sound-Meter",id:"Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Sound-Meter",title:"How to measure noise levels with Wio Terminal",description:"How to measure noise levels with Wio Terminal",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Sound-Meter.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial",slug:"/Wio-Terminal-Sound-Meter",permalink:"/Wio-Terminal-Sound-Meter",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Sound-Meter.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{description:"How to measure noise levels with Wio Terminal",title:"How to measure noise levels with Wio Terminal",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Sound-Meter",last_update:{date:"1/31/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Build a IR Thermal Imaging Camera using Wio Terminal",permalink:"/Wio-Terminal-Thermal-Camera"},next:{title:"Getting started wizard",permalink:"/Getting_started_wizard"}},d={},s=[{value:"Overview",id:"overview",level:2},{value:"Part list",id:"part-list",level:2},{value:"Features",id:"features",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"library Installation",id:"library-installation",level:2},{value:"Dispaly the dB value on the Arduino Monitor",id:"dispaly-the-db-value-on-the-arduino-monitor",level:2},{value:"The Decibel Meter Demo",id:"the-decibel-meter-demo",level:2},{value:"Complete Code",id:"complete-code",level:2}],u={toc:s};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-measure-noise-levels-with-wio-terminal"},"How to measure noise levels with Wio Terminal"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This example showing how perfectly display the Decibel Meter on the Wio Terminal."),(0,a.kt)("h2",{id:"part-list"},"Part list"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,a.kt)("strong",{parentName:"a"},"Wio Terminal"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html"},(0,a.kt)("strong",{parentName:"a"},"ReSpeaker 2-Mics Pi HAT")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Please visit the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Audio-Overview/"},(0,a.kt)("strong",{parentName:"a"},"Audio Overview"))," for the ",(0,a.kt)("strong",{parentName:"p"},"Hardware Connection"),".")),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The dB can be presented in the dial plate, reading and line-chart respectively."),(0,a.kt)("li",{parentName:"ul"},"It has a guide to introduce what the number of dB mean.")),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"To get started with the Audio library for Wio Terminal, please follow through the followings:"),(0,a.kt)("h2",{id:"library-installation"},"library Installation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the Audio library ",(0,a.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_Audio"),", Please visit the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Audio-Overview/"},(0,a.kt)("strong",{parentName:"a"},"Audio Overview"))," for more information.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the LCD screen Library ",(0,a.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_LCD"),", please visit ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/"},"Wio Terminal LCD")," for more information.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now, the  library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,a.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,a.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_Audio")," file that you've have just downloaded."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})),(0,a.kt)("h2",{id:"dispaly-the-db-value-on-the-arduino-monitor"},"Dispaly the dB value on the Arduino Monitor"),(0,a.kt)("p",null,"This example is display the dB value on the arduino Monitor, so we can have a test dB code."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The code is quite long, so you can just click 'copy to clipboard' then put on the Arduino IDE.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <Audio.h>\n#include <Wire.h> \n#include <SD.h> \n\nint i;\nfloat v[512] = {0};\nfloat magnitude = 0;\nfloat dB_holder;\nfloat a_weight[512] = {0.000491601, 0.007439144, 0.026456683, 0.057237193, 0.097648235, 0.145530499, 0.19895028, 0.256192702, 0.315753433, 0.376341431, 0.436880336, 0.496502258, 0.554533348, 0.610473237, 0.663971116, 0.714800959, 0.762837753, 0.808035908, 0.85041046, 0.890021233, 0.926959868, 0.961339445, 0.993286373, 1.022934171, 1.050418819, 1.075875354, 1.099435459, 1.12122582, 1.141367062, 1.159973138, 1.177151032, 1.193000704, 1.207615207, 1.221080906, 1.233477786, 1.244879798, 1.255355228, 1.264967081, 1.273773452, 1.281827897, 1.289179783, 1.29587462, 1.301954369, 1.307457742, 1.312420463, 1.316875521, 1.320853401, 1.324382291, 1.327488281, 1.330195534, 1.332526449, 1.334501812, 1.336140927, 1.337461742, 1.338480956, 1.339214128, 1.339675764, 1.339879407, 1.33983771, 1.33956251, 1.339064892, 1.338355246, 1.337443324, 1.336338287, 1.33504875, 1.333582824, 1.331948154, 1.330151954, 1.328201037, 1.326101843, 1.323860472, 1.3214827, 1.318974007, 1.316339599, 1.313584419, 1.310713175, 1.307730349, 1.304640214, 1.301446848, 1.298154147, 1.294765835, 1.291285478, 1.28771649, 1.284062146, 1.280325589, 1.276509835, 1.272617788, 1.268652238, 1.264615874, 1.260511287, 1.256340974, 1.252107348, 1.247812737, 1.243459393, 1.239049492, 1.234585143, 1.230068386, 1.2255012, 1.220885501, 1.216223152, 1.211515958, 1.206765674, 1.201974005, 1.19714261, 1.1922731, 1.187367045, 1.182425973, 1.177451372, 1.172444693, 1.167407348, 1.162340715, 1.157246139, 1.152124932, 1.146978373, 1.141807712, 1.136614169, 1.131398936, 1.126163178, 1.120908033, 1.115634612, 1.110344003, 1.105037268, 1.099715447, 1.094379556, 1.08903059, 1.083669521, 1.078297301, 1.072914859, 1.067523108, 1.062122937, 1.05671522, 1.05130081, 1.045880542, 1.040455233, 1.035025683, 1.029592675, 1.024156975, 1.018719333, 1.013280482, 1.00784114, 1.00240201, 0.996963778, 0.991527118, 0.986092686, 0.980661126, 0.975233068, 0.969809127, 0.964389904, 0.958975988, 0.953567954, 0.948166364, 0.942771769, 0.937384705, 0.932005696, 0.926635255, 0.921273883, 0.915922069, 0.91058029, 0.905249011, 0.899928687, 0.894619763, 0.88932267, 0.88403783, 0.878765656, 0.873506548, 0.868260896, 0.863029082, 0.857811477, 0.852608441, 0.847420326, 0.842247473, 0.837090216, 0.831948877, 0.826823771, 0.821715204, 0.816623471, 0.811548862, 0.806491654, 0.80145212, 0.796430522, 0.791427115, 0.786442146, 0.781475853, 0.776528467, 0.771600212, 0.766691304, 0.761801951, 0.756932355, 0.752082709, 0.747253202, 0.742444013, 0.737655316, 0.732887277, 0.728140056, 0.723413808, 0.71870868, 0.714024813, 0.709362343, 0.704721397, 0.700102099, 0.695504567, 0.690928912, 0.686375241, 0.681843653, 0.677334244, 0.672847104, 0.668382317, 0.663939963, 0.659520116, 0.655122846, 0.650748219, 0.646396293, 0.642067124, 0.637760764, 0.633477258, 0.629216649, 0.624978975, 0.620764269, 0.616572561, 0.612403877, 0.608258238, 0.604135661, 0.600036161, 0.595959749, 0.59190643, 0.587876209, 0.583869084, 0.579885053, 0.575924108, 0.571986239, 0.568071433, 0.564179674, 0.560310942, 0.556465216, 0.552642469, 0.548842674, 0.5450658, 0.541311815, 0.537580682, 0.533872363, 0.530186816, 0.526524, 0.522883867, 0.519266371, 0.51567146, 0.512099084, 0.508549187, 0.505021714, 0.501516605, 0.498033801, 0.49457324, 0.491134857, 0.487718587, 0.484324362, 0.480952113, 0.47760177, 0.47427326, 0.47096651, 0.467681443, 0.464417985, 0.461176056, 0.457955577, 0.454756467, 0.451578645, 0.448422028, 0.445286531, 0.442172069, 0.439078556, 0.436005904, 0.432954025, 0.429922829, 0.426912226, 0.423922125, 0.420952434, 0.41800306, 0.41507391, 0.412164889, 0.409275902, 0.406406853, 0.403557647, 0.400728185, 0.397918372, 0.395128108, 0.392357295, 0.389605834, 0.386873625, 0.384160569, 0.381466565, 0.378791512, 0.37613531, 0.373497856, 0.37087905, 0.368278789, 0.36569697, 0.363133492, 0.360588252, 0.358061147, 0.355552074, 0.353060929, 0.35058761, 0.348132012, 0.345694033, 0.343273569, 0.340870517, 0.338484772, 0.336116231, 0.333764791, 0.331430348, 0.329112798, 0.326812038, 0.324527964, 0.322260474, 0.320009464, 0.31777483, 0.315556471, 0.313354282, 0.311168162, 0.308998008, 0.306843717, 0.304705188, 0.302582319, 0.300475007, 0.298383152, 0.296306653, 0.294245408, 0.292199316, 0.290168278, 0.288152193, 0.286150961, 0.284164484, 0.28219266, 0.280235393, 0.278292582, 0.276364131, 0.27444994, 0.272549913, 0.270663953, 0.268791961, 0.266933843, 0.265089501, 0.263258841, 0.261441767, 0.259638183, 0.257847996, 0.256071111, 0.254307435, 0.252556875, 0.250819337, 0.249094729, 0.247382959, 0.245683935, 0.243997567, 0.242323763, 0.240662434, 0.239013489, 0.23737684, 0.235752397, 0.234140071, 0.232539776, 0.230951422, 0.229374924, 0.227810195, 0.226257148, 0.224715697, 0.223185759, 0.221667247, 0.220160077, 0.218664167, 0.217179432, 0.215705789, 0.214243158, 0.212791454, 0.211350598, 0.209920507, 0.208501103, 0.207092304, 0.205694032, 0.204306207, 0.202928752, 0.201561587, 0.200204635, 0.19885782, 0.197521065, 0.196194293, 0.19487743, 0.193570399, 0.192273127, 0.19098554, 0.189707563, 0.188439124, 0.187180149, 0.185930567, 0.184690306, 0.183459294, 0.182237461, 0.181024737, 0.179821051, 0.178626335, 0.177440519, 0.176263535, 0.175095315, 0.173935792, 0.172784898, 0.171642567, 0.170508733, 0.16938333, 0.168266293, 0.167157558, 0.166057059, 0.164964734, 0.163880519, 0.162804351, 0.161736168, 0.160675908, 0.159623508, 0.158578909, 0.157542048, 0.156512867, 0.155491306, 0.154477304, 0.153470803, 0.152471745, 0.151480071, 0.150495724, 0.149518647, 0.148548783, 0.147586076, 0.146630469, 0.145681907, 0.144740336, 0.143805699, 0.142877944, 0.141957016, 0.141042862, 0.140135428, 0.139234663, 0.138340513, 0.137452928, 0.136571854, 0.135697243, 0.134829041, 0.133967201, 0.133111671, 0.132262402, 0.131419345, 0.130582451, 0.129751671, 0.128926959, 0.128108265, 0.127295544, 0.126488747, 0.125687829, 0.124892743, 0.124103444, 0.123319885, 0.122542022, 0.121769811, 0.121003206, 0.120242164, 0.119486641, 0.118736594, 0.117991979, 0.117252754, 0.116518877, 0.115790306, 0.115066999, 0.114348914, 0.113636011, 0.112928249, 0.112225587, 0.111527986, 0.110835406, 0.110147807, 0.109465151, 0.108787398, 0.108114511, 0.10744645, 0.106783179, 0.106124659, 0.105470853, 0.104821725, 0.104177238, 0.103537355, 0.10290204, 0.102271258, 0.101644973, 0.10102315, 0.100405754, 0.09979275, 0.099184104, 0.098579782, 0.09797975, 0.097383975, 0.096792423, 0.096205061, 0.095621857, 0.095042778, 0.094467792, 0.093896867, 0.093329972, 0.092767075, 0.092208144, 0.091653149, 0.09110206, 0.090554845, 0.090011475, 0.08947192, 0.088936151, 0.088404136, 0.087875849, 0.087351259, 0.086830338};\n\nAudioInputI2S            i2s1;           //xy=204.00000381469727,247.00000381469727\nAudioMixer4              mixer1;         //xy=402,248\nAudioAnalyzeFFT1024      fft1024_1;      //xy=635.0000076293945,249.00000381469727\nAudioConnection          patchCord1(i2s1, 0, mixer1, 0);\nAudioConnection          patchCord2(i2s1, 1, mixer1, 1);\nAudioConnection          patchCord3(mixer1, fft1024_1);\n// GUItool: end automatically generated code\n\nAudioControlWM8960 wm8960;\n\nconst int myInput = AUDIO_INPUT_LINEIN;\n\nvoid setup() {\n  analogReadResolution(16);\n  AudioMemory(60);\n  Serial.begin(9600);\n  fft1024_1.windowFunction(AudioWindowHanning1024);\n\n  wm8960.enable();\n  wm8960.inputSelect(myInput);\n  wm8960.volume(0.5);\n}\n\nvoid loop() { \n  if (fft1024_1.available()) {\n      magnitude = 0;\n      dB_holder = 0;\n      float v[512] = {0};\n      \n      for (i=0; i<512; i++) {\n        v[i] = fft1024_1.read(i) * a_weight[i];\n        magnitude = magnitude + sq(v[i]);\n      }\n      magnitude = sqrt(magnitude);\n      \n      dB_holder = log10f(magnitude) * 20  + 97.05;\n      Serial.println(dB_holder,2); // f[23] = 1kHz, f[82] = 3.5kHz, f[252] = 12kHz\n  }\n}\n")),(0,a.kt)("p",null,"The value of dB is presented."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Sound-Meter/sound-Meter-value_gGIF.gif"})),(0,a.kt)("h2",{id:"the-decibel-meter-demo"},"The Decibel Meter Demo"),(0,a.kt)("p",null,"This example detects dB using the mic on ReSpeaker 2-Mic Hat, The around evirnment is detected, then displayed on the display."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Sound-Meter/sound-Meter_gGIF.gif"})),(0,a.kt)("h2",{id:"complete-code"},"Complete Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'\n#include <Audio.h>\n#include <Wire.h> \n#include <SD.h> \n#include <TFT_eSPI.h> // Hardware-specific library\n#include <SPI.h>\n#include <Bounce.h>\n#include"seeed_line_chart.h" //include the library\nTFT_eSPI tft = TFT_eSPI();       // Invoke custom library\n#define TFT_GREY 0x5AEB\n#define LOOP_PERIOD 35 // Display updates every 35 ms\n\n#define max_size 20 //maximum size of data\ndoubles data; //Initilising a doubles type to store data\nTFT_eSprite spr = TFT_eSprite(&tft);  // Sprite \nTFT_eSprite spr2 = TFT_eSprite(&tft);\n\nfloat ltx = 0;    // Saved x coord of bottom of needle\nuint16_t osx = 120, osy = 120; // Saved x & y coords\nuint32_t updateTime = 0;       // time for next update\n\nint old_analog =  -999; // Value last displayed\n\nint mode = 0;  // 1=display_information\n\nint i;\nfloat v[512] = {0};\nfloat magnitude = 0;\nfloat dB_holder;\nfloat a_weight[512] = {0.000491601, 0.007439144, 0.026456683, 0.057237193, 0.097648235, 0.145530499, 0.19895028, 0.256192702, 0.315753433, 0.376341431, 0.436880336, 0.496502258, 0.554533348, 0.610473237, 0.663971116, 0.714800959, 0.762837753, 0.808035908, 0.85041046, 0.890021233, 0.926959868, 0.961339445, 0.993286373, 1.022934171, 1.050418819, 1.075875354, 1.099435459, 1.12122582, 1.141367062, 1.159973138, 1.177151032, 1.193000704, 1.207615207, 1.221080906, 1.233477786, 1.244879798, 1.255355228, 1.264967081, 1.273773452, 1.281827897, 1.289179783, 1.29587462, 1.301954369, 1.307457742, 1.312420463, 1.316875521, 1.320853401, 1.324382291, 1.327488281, 1.330195534, 1.332526449, 1.334501812, 1.336140927, 1.337461742, 1.338480956, 1.339214128, 1.339675764, 1.339879407, 1.33983771, 1.33956251, 1.339064892, 1.338355246, 1.337443324, 1.336338287, 1.33504875, 1.333582824, 1.331948154, 1.330151954, 1.328201037, 1.326101843, 1.323860472, 1.3214827, 1.318974007, 1.316339599, 1.313584419, 1.310713175, 1.307730349, 1.304640214, 1.301446848, 1.298154147, 1.294765835, 1.291285478, 1.28771649, 1.284062146, 1.280325589, 1.276509835, 1.272617788, 1.268652238, 1.264615874, 1.260511287, 1.256340974, 1.252107348, 1.247812737, 1.243459393, 1.239049492, 1.234585143, 1.230068386, 1.2255012, 1.220885501, 1.216223152, 1.211515958, 1.206765674, 1.201974005, 1.19714261, 1.1922731, 1.187367045, 1.182425973, 1.177451372, 1.172444693, 1.167407348, 1.162340715, 1.157246139, 1.152124932, 1.146978373, 1.141807712, 1.136614169, 1.131398936, 1.126163178, 1.120908033, 1.115634612, 1.110344003, 1.105037268, 1.099715447, 1.094379556, 1.08903059, 1.083669521, 1.078297301, 1.072914859, 1.067523108, 1.062122937, 1.05671522, 1.05130081, 1.045880542, 1.040455233, 1.035025683, 1.029592675, 1.024156975, 1.018719333, 1.013280482, 1.00784114, 1.00240201, 0.996963778, 0.991527118, 0.986092686, 0.980661126, 0.975233068, 0.969809127, 0.964389904, 0.958975988, 0.953567954, 0.948166364, 0.942771769, 0.937384705, 0.932005696, 0.926635255, 0.921273883, 0.915922069, 0.91058029, 0.905249011, 0.899928687, 0.894619763, 0.88932267, 0.88403783, 0.878765656, 0.873506548, 0.868260896, 0.863029082, 0.857811477, 0.852608441, 0.847420326, 0.842247473, 0.837090216, 0.831948877, 0.826823771, 0.821715204, 0.816623471, 0.811548862, 0.806491654, 0.80145212, 0.796430522, 0.791427115, 0.786442146, 0.781475853, 0.776528467, 0.771600212, 0.766691304, 0.761801951, 0.756932355, 0.752082709, 0.747253202, 0.742444013, 0.737655316, 0.732887277, 0.728140056, 0.723413808, 0.71870868, 0.714024813, 0.709362343, 0.704721397, 0.700102099, 0.695504567, 0.690928912, 0.686375241, 0.681843653, 0.677334244, 0.672847104, 0.668382317, 0.663939963, 0.659520116, 0.655122846, 0.650748219, 0.646396293, 0.642067124, 0.637760764, 0.633477258, 0.629216649, 0.624978975, 0.620764269, 0.616572561, 0.612403877, 0.608258238, 0.604135661, 0.600036161, 0.595959749, 0.59190643, 0.587876209, 0.583869084, 0.579885053, 0.575924108, 0.571986239, 0.568071433, 0.564179674, 0.560310942, 0.556465216, 0.552642469, 0.548842674, 0.5450658, 0.541311815, 0.537580682, 0.533872363, 0.530186816, 0.526524, 0.522883867, 0.519266371, 0.51567146, 0.512099084, 0.508549187, 0.505021714, 0.501516605, 0.498033801, 0.49457324, 0.491134857, 0.487718587, 0.484324362, 0.480952113, 0.47760177, 0.47427326, 0.47096651, 0.467681443, 0.464417985, 0.461176056, 0.457955577, 0.454756467, 0.451578645, 0.448422028, 0.445286531, 0.442172069, 0.439078556, 0.436005904, 0.432954025, 0.429922829, 0.426912226, 0.423922125, 0.420952434, 0.41800306, 0.41507391, 0.412164889, 0.409275902, 0.406406853, 0.403557647, 0.400728185, 0.397918372, 0.395128108, 0.392357295, 0.389605834, 0.386873625, 0.384160569, 0.381466565, 0.378791512, 0.37613531, 0.373497856, 0.37087905, 0.368278789, 0.36569697, 0.363133492, 0.360588252, 0.358061147, 0.355552074, 0.353060929, 0.35058761, 0.348132012, 0.345694033, 0.343273569, 0.340870517, 0.338484772, 0.336116231, 0.333764791, 0.331430348, 0.329112798, 0.326812038, 0.324527964, 0.322260474, 0.320009464, 0.31777483, 0.315556471, 0.313354282, 0.311168162, 0.308998008, 0.306843717, 0.304705188, 0.302582319, 0.300475007, 0.298383152, 0.296306653, 0.294245408, 0.292199316, 0.290168278, 0.288152193, 0.286150961, 0.284164484, 0.28219266, 0.280235393, 0.278292582, 0.276364131, 0.27444994, 0.272549913, 0.270663953, 0.268791961, 0.266933843, 0.265089501, 0.263258841, 0.261441767, 0.259638183, 0.257847996, 0.256071111, 0.254307435, 0.252556875, 0.250819337, 0.249094729, 0.247382959, 0.245683935, 0.243997567, 0.242323763, 0.240662434, 0.239013489, 0.23737684, 0.235752397, 0.234140071, 0.232539776, 0.230951422, 0.229374924, 0.227810195, 0.226257148, 0.224715697, 0.223185759, 0.221667247, 0.220160077, 0.218664167, 0.217179432, 0.215705789, 0.214243158, 0.212791454, 0.211350598, 0.209920507, 0.208501103, 0.207092304, 0.205694032, 0.204306207, 0.202928752, 0.201561587, 0.200204635, 0.19885782, 0.197521065, 0.196194293, 0.19487743, 0.193570399, 0.192273127, 0.19098554, 0.189707563, 0.188439124, 0.187180149, 0.185930567, 0.184690306, 0.183459294, 0.182237461, 0.181024737, 0.179821051, 0.178626335, 0.177440519, 0.176263535, 0.175095315, 0.173935792, 0.172784898, 0.171642567, 0.170508733, 0.16938333, 0.168266293, 0.167157558, 0.166057059, 0.164964734, 0.163880519, 0.162804351, 0.161736168, 0.160675908, 0.159623508, 0.158578909, 0.157542048, 0.156512867, 0.155491306, 0.154477304, 0.153470803, 0.152471745, 0.151480071, 0.150495724, 0.149518647, 0.148548783, 0.147586076, 0.146630469, 0.145681907, 0.144740336, 0.143805699, 0.142877944, 0.141957016, 0.141042862, 0.140135428, 0.139234663, 0.138340513, 0.137452928, 0.136571854, 0.135697243, 0.134829041, 0.133967201, 0.133111671, 0.132262402, 0.131419345, 0.130582451, 0.129751671, 0.128926959, 0.128108265, 0.127295544, 0.126488747, 0.125687829, 0.124892743, 0.124103444, 0.123319885, 0.122542022, 0.121769811, 0.121003206, 0.120242164, 0.119486641, 0.118736594, 0.117991979, 0.117252754, 0.116518877, 0.115790306, 0.115066999, 0.114348914, 0.113636011, 0.112928249, 0.112225587, 0.111527986, 0.110835406, 0.110147807, 0.109465151, 0.108787398, 0.108114511, 0.10744645, 0.106783179, 0.106124659, 0.105470853, 0.104821725, 0.104177238, 0.103537355, 0.10290204, 0.102271258, 0.101644973, 0.10102315, 0.100405754, 0.09979275, 0.099184104, 0.098579782, 0.09797975, 0.097383975, 0.096792423, 0.096205061, 0.095621857, 0.095042778, 0.094467792, 0.093896867, 0.093329972, 0.092767075, 0.092208144, 0.091653149, 0.09110206, 0.090554845, 0.090011475, 0.08947192, 0.088936151, 0.088404136, 0.087875849, 0.087351259, 0.086830338};\nfloat init_value = 95.05;\n\nAudioInputI2S            i2s1;           //xy=204.00000381469727,247.00000381469727\nAudioMixer4              mixer1;         //xy=402,248\nAudioAnalyzeFFT1024      fft1024_1;      //xy=635.0000076293945,249.00000381469727\nAudioConnection          patchCord1(i2s1, 0, mixer1, 0);\nAudioConnection          patchCord2(i2s1, 1, mixer1, 1);\nAudioConnection          patchCord3(mixer1, fft1024_1);\n// GUItool: end automatically generated code\n\nAudioControlWM8960 wm8960;\n\n// which input on the audio shield will be used?\n#ifndef SEEED_WIO_TERMINAL \nconst int myInput = AUDIO_INPUT_LINEIN;\n#else\nconst int myInput = AUDIO_INPUT_MIC;\n#endif\n\nvoid setup(void) {\n    tft.init();\n    tft.setRotation(0);\n    Serial.begin(57600); // For debug\n    spr.createSprite(240,160);\n    tft.fillScreen(TFT_WHITE);\n    tft.setTextColor(TFT_BLACK, TFT_RED);\n    tft.setFreeFont(&FreeSansBoldOblique9pt7b);\n    tft.drawString("dB value guidance", 40, 40); \n    tft.setTextColor(TFT_BLACK, TFT_YELLOW);\n    tft.setFreeFont(&FreeSansBoldOblique9pt7b);\n    tft.drawString("0 - 25 dB Whisper", 20, 80); \n    tft.drawString("25 - 50 dB Quite library", 20, 110); \n    tft.drawString("50 - 75 dB Loud Music", 20, 140); \n    tft.drawString("75 - 100 dB Motorcycle", 20, 170); \n    delay(5000);\n    tft.fillScreen(TFT_WHITE);\n\n    analogMeter(); // Draw analogue meter\n\n    updateTime = millis(); // Next update time\n\n    analogReadResolution(16);\n  \n    AudioMemory(60);\n   \n    fft1024_1.windowFunction(AudioWindowHanning1024);\n\n    wm8960.enable();\n    wm8960.inputSelect(myInput);\n\n\n}\n\nvoid loop() {\n\n  if (fft1024_1.available()) {\n      magnitude = 0;\n      dB_holder = 0;\n      float v[512] = {0};\n      \n      for (i=0; i<512; i++) {\n        v[i] = fft1024_1.read(i) * a_weight[i];\n        magnitude = magnitude + sq(v[i]);\n      }\n      magnitude = sqrt(magnitude);\n      dB_holder = log10f(magnitude) * 20  + init_value;\n      \n  }\nSerial.println(dB_holder); // f[23] = 1kHz, f[82] = 3.5kHz, f[252] = 12kHz\n\n// #########################################################################\n// dispaly the line charts\n// #########################################################################\n    spr.fillSprite(TFT_WHITE);\n    if (data.size() == max_size) {\n        data.pop();//this is used to remove the first read variable\n    }\n    data.push(dB_holder); //read variables and store in data\n\n    spr2.createSprite(40, 40);\n    spr2.fillSprite(TFT_WHITE);\n    spr2.setTextColor(TFT_BLACK, TFT_WHITE);\n    spr2.setFreeFont(&FreeSansBoldOblique18pt7b);\n    //char buf_2[0]; dtostrf(dB_holder, 2, 1, buf_2);\n    spr2.drawNumber(dB_holder, 0, 0); \n    spr2.pushSprite(80, 140); \n    spr2.deleteSprite();\n    \n    //Settings for the line graph title\n    auto header =  text(7, 0)\n                .value("dB")\n                .valign(vcenter)\n                .width(tft.width())\n                .thickness(2);\n \n    header.height(header.font_height() * 1.1);\n    header.draw(); //Header height is the twice the height of the font\n \n  //Settings for the line graph\n    auto content = line_chart(8, header.height()); //(x,y) where the line graph begins\n         content\n                .height(tft.height() - header.height() * 12) //actual height of the line chart\n                .width(tft.width() - content.x() * 2) //actual width of the line chart\n                .based_on(0.0) //Starting point of y-axis, must be a float\n                .show_circle(true) //drawing a cirle at each point, default is on.\n                .value(data) //passing through the data to line graph\n                .color(TFT_PURPLE) //Setting the color for the line\n                .draw();\n                 \n    spr.pushSprite(0, 190);\n    delay(50);\n\n// #########################################################################\n\n    if (updateTime <= millis()) {\n        updateTime = millis() + LOOP_PERIOD;\n        int d;\n        d += 4;\n        if (d >= 360) {\n            d = 0;\n        }\n        plotNeedle(dB_holder, 0);\n    }\n}\n\n// #########################################################################\n//  Draw the analogue meter on the screen\n// #########################################################################\nvoid analogMeter() {\n    // Meter outline\n    tft.fillRect(0, 0, 239, 126, TFT_GREY);\n    tft.fillRect(5, 3, 230, 119, TFT_WHITE);\n    tft.setTextColor(TFT_BLACK);  // Text colour\n\n    // Draw ticks every 5 degrees from -50 to +50 degrees (100 deg. FSD swing)\n    for (int i = -50; i < 51; i += 5) {\n        // Long scale tick length\n        int tl = 15;\n\n        // Coodinates of tick to draw\n        float sx = cos((i - 90) * 0.0174532925);\n        float sy = sin((i - 90) * 0.0174532925);\n        uint16_t x0 = sx * (100 + tl) + 120;\n        uint16_t y0 = sy * (100 + tl) + 140;\n        uint16_t x1 = sx * 100 + 120;\n        uint16_t y1 = sy * 100 + 140;\n\n        // Coordinates of next tick for zone fill\n        float sx2 = cos((i + 5 - 90) * 0.0174532925);\n        float sy2 = sin((i + 5 - 90) * 0.0174532925);\n        int x2 = sx2 * (100 + tl) + 120;\n        int y2 = sy2 * (100 + tl) + 140;\n        int x3 = sx2 * 100 + 120;\n        int y3 = sy2 * 100 + 140;\n\n        // Yellow zone limits\n        if (i >= -50 && i < 0) {\n          tft.fillTriangle(x0, y0, x1, y1, x2, y2, TFT_GREEN);\n          tft.fillTriangle(x1, y1, x2, y2, x3, y3, TFT_GREEN);\n        }\n\n        // Green zone limits\n        if (i >= 0 && i < 25) {\n            tft.fillTriangle(x0, y0, x1, y1, x2, y2, TFT_YELLOW);\n            tft.fillTriangle(x1, y1, x2, y2, x3, y3, TFT_YELLOW);\n        }\n\n        // Orange zone limits\n        if (i >= 25 && i < 50) {\n            tft.fillTriangle(x0, y0, x1, y1, x2, y2, TFT_RED);\n            tft.fillTriangle(x1, y1, x2, y2, x3, y3, TFT_RED);\n        }\n\n        // Short scale tick length\n        if (i % 25 != 0) {\n            tl = 8;\n        }\n\n        // Recalculate coords incase tick lenght changed\n        x0 = sx * (100 + tl) + 120;\n        y0 = sy * (100 + tl) + 140;\n        x1 = sx * 100 + 120;\n        y1 = sy * 100 + 140;\n\n        // Draw tick\n        tft.drawLine(x0, y0, x1, y1, TFT_BLACK);\n\n        // Check if labels should be drawn, with position tweaks\n        if (i % 25 == 0) {\n            // Calculate label positions\n            x0 = sx * (100 + tl + 10) + 120;\n            y0 = sy * (100 + tl + 10) + 140;\n            switch (i / 25) {\n                case -2: tft.drawCentreString("0", x0, y0 - 12, 2); break;\n                case -1: tft.drawCentreString("25", x0, y0 - 9, 2); break;\n                case 0: tft.drawCentreString("50", x0, y0 - 6, 2); break;\n                case 1: tft.drawCentreString("75", x0, y0 - 9, 2); break;\n                case 2: tft.drawCentreString("100", x0, y0 - 12, 2); break;\n            }\n        }\n\n        // Now draw the arc of the scale\n        sx = cos((i + 5 - 90) * 0.0174532925);\n        sy = sin((i + 5 - 90) * 0.0174532925);\n        x0 = sx * 100 + 120;\n        y0 = sy * 100 + 140;\n        // Draw scale arc, don\'t draw the last part\n        if (i < 50) {\n            tft.drawLine(x0, y0, x1, y1, TFT_BLACK);\n        }\n    }\n\n    //tft.drawString("dB", 5 + 230 - 40, 119 - 20, 2); // Units at bottom right\n    tft.drawCentreString("dB", 120, 80, 4); // Comment out to avoid font 4\n    tft.drawRect(5, 3, 230, 119, TFT_BLACK); // Draw bezel line\n\n    tft.setTextColor(TFT_BLACK, TFT_WHITE);\n    tft.setFreeFont(&FreeSansBoldOblique18pt7b);\n    tft.drawString(" dB",120,140);\n    \n    plotNeedle(0, 0); // Put meter needle at 0\n}\n  \n\n\n// #########################################################################\n// Update needle position\n// This function is blocking while needle moves, time depends on ms_delay\n// 10ms minimises needle flicker if text is drawn within needle sweep area\n// Smaller values OK if text not in sweep area, zero for instant movement but\n// does not look realistic... (note: 100 increments for full scale deflection)\n// #########################################################################\nvoid plotNeedle(int value, byte ms_delay) {\n    if (value < -10) {\n        value = -10;    // Limit value to emulate needle end stops\n    }\n    if (value > 110) {\n        value = 110;\n    }\n\n    // Move the needle util new value reached\n    while (!(value == old_analog)) {\n        if (old_analog < value) {\n            old_analog++;\n        } else {\n            old_analog--;\n        }\n\n        if (ms_delay == 0) {\n            old_analog = value;    // Update immediately id delay is 0\n        }\n\n        float sdeg = map(old_analog, -10, 110, -150, -30); // Map value to angle\n        // Calcualte tip of needle coords\n        float sx = cos(sdeg * 0.0174532925);\n        float sy = sin(sdeg * 0.0174532925);\n\n        // Calculate x delta of needle start (does not start at pivot point)\n        float tx = tan((sdeg + 90) * 0.0174532925);\n\n        // Erase old needle image\n        tft.drawLine(120 + 20 * ltx - 1, 140 - 20, osx - 1, osy, TFT_WHITE);\n        tft.drawLine(120 + 20 * ltx, 140 - 20, osx, osy, TFT_WHITE);\n        tft.drawLine(120 + 20 * ltx + 1, 140 - 20, osx + 1, osy, TFT_WHITE);\n\n        // Re-plot text under needle\n        tft.setTextColor(TFT_BLACK);\n        tft.drawCentreString("dB", 120, 80, 4); // // Comment out to avoid font 4\n\n        // Store new needle end coords for next erase\n        ltx = tx;\n        osx = sx * 98 + 120;\n        osy = sy * 98 + 140;\n\n        // Draw the needle in the new postion, magenta makes needle a bit bolder\n        // draws 3 lines to thicken needle\n        tft.drawLine(120 + 20 * ltx - 1, 140 - 20, osx - 1, osy, TFT_RED);\n        tft.drawLine(120 + 20 * ltx, 140 - 20, osx, osy, TFT_MAGENTA);\n        tft.drawLine(120 + 20 * ltx + 1, 140 - 20, osx + 1, osy, TFT_RED);\n\n        // Slow needle down slightly as it approaches new postion\n        if (abs(old_analog - value) < 10) {\n            ms_delay += ms_delay / 5;\n        }\n        // Wait before next update\n        delay(ms_delay);\n    }\n}\n\n')))}p.isMDXComponent=!0}}]);