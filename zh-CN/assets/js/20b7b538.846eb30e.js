"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[23266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[u]="string"==typeof e?e:a,o[1]=d;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const r={description:"Seeeduino ADK Main Board",title:"Seeeduino ADK Main Board",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino_ADK_Main_Board",last_update:{date:"1/31/2023",author:"shuxu hu"}},o=void 0,d={unversionedId:"Sensor/Seeeduino Series/Seeeduino_ADK_Main_Board",id:"Sensor/Seeeduino Series/Seeeduino_ADK_Main_Board",title:"Seeeduino ADK Main Board",description:"Seeeduino ADK Main Board",source:"@site/docs/Sensor/Seeeduino Series/Seeeduino_ADK_Main_Board.md",sourceDirName:"Sensor/Seeeduino Series",slug:"/Seeeduino_ADK_Main_Board",permalink:"/zh-CN/Seeeduino_ADK_Main_Board",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Seeeduino Series/Seeeduino_ADK_Main_Board.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"2023\u5e741\u670831\u65e5",frontMatter:{description:"Seeeduino ADK Main Board",title:"Seeeduino ADK Main Board",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino_ADK_Main_Board",last_update:{date:"1/31/2023",author:"shuxu hu"}}},l={},s=[{value:"Specifications",id:"specifications",level:2},{value:"Interface",id:"interface",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Using MicroBridge",id:"using-microbridge",level:3},{value:"Using Google ADK",id:"using-google-adk",level:3},{value:"As Mega 2560",id:"as-mega-2560",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/Seeeduino_ADK_Main_Board.jpeg",alt:"enter image description here"})),(0,a.kt)("p",null,'The Android 3.1 platform (also backported to Android 2.3.4) introduces Android Open Accessory support, which allows external USB hardware (an Android USB accessory) to interact with an Android-powered device in a special "accessory" mode. Based on the Google\u2019s ADK reference design, we merged advantages of Seeeduino into our Seeeduino ADK Main Board.'),(0,a.kt)("p",null,"Now connect Seeeduino ADK Main Board to your Android mobile device and get started developing your custom accessory."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/seeeduino-adk-main-board-p-846.html?cPath=6_8"},"SKU:ARD52028P")),(0,a.kt)("h2",{id:"specifications"},"Specifications"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Android Open Accessories development Kit (ADK) compatible (Android v2.3.4 and above)  ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Works with Android Debug Bridge (ADB) using MicroBridge (Android v1.5 and above)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Simply works like an Arduino Mega with an integrated USB Shield")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Operating voltage: 5v/3v3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Input voltage: 6V - 18V")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Digital I/O\xa0: 50")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Analog inputs: 16")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"PWM outputs: 14")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Hardware serial ports (UART): 4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"I2C: 1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Hardware SPI (up to 8Mbps): 1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On board USB host(MAX3421)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On board USB slave(FT232RL)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Build-in 3.3V-500mA LDO power regulator."))),(0,a.kt)("h2",{id:"interface"},"Interface"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/Seeeduino_ADK_Parts.jpg",alt:"enter image description here"}),"\nSeeeduino ADK Salient Features"),(0,a.kt)("p",null,"Seeeduino ADK Hardware blocks are listed below:\nA: Micro USB Socket, connect main board to PC. Used for uploading sketch using Arduino IDE.\nB: Slide switch, to choose operating or I/O voltage: 3.3V or 5V\nC: USB A Plug, connect to Android Mobile Device.\nD: JST Conector / DC Jack, for external DC power supply. Do not connect PC while using external DC.\nE: Reset Button, conveniently  placed at the side to allow using reset while using shields.\nF: I/O pins\nG: ICSP\uff0cfor programming Arduino Bootloader using AVR ICSP\nH: breakouts pins of Max3421E GPIO\nI: breakouts pins of FT232RL"),(0,a.kt)("h2",{id:"demonstration"},"Demonstration"),(0,a.kt)("p",null,"The following image illustrates an application example of ",(0,a.kt)("strong",{parentName:"p"},"Seeeduino ADK Main Board")," with an Android Mobile. It runs the demo application based on MicroBridge provided illustrated this page. All basic electronic components are taken from ",(0,a.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/Arduino_Sidekick_Basic_Kit/"},"Arduino Sidekick Basic Kit")," ."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/SeeeduinoADK_Setup.jpg",alt:"enter image description here"}),"\nSeeeduino ADK Main Board and Android Mobile Connection"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/ADK_Demo.jpg",alt:"enter image description here"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Uploading Firmware")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Set the VCC slide switch to 5V.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Connect the Seeeduino ADK Main Board - Micro USB to PC USB port.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Set the Board type in Arduino IDE to ",(0,a.kt)("strong",{parentName:"p"},"Arduino Mega 2560"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Compile the Demo Sketch and upload to Main Board.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Android App")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install Android Platform Development Software.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Import the demo Android app to Eclipse Workspace.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Connect the mobile device to PC and upload the application")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Connect the mobile to ADK Main Board.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Enable ADB in your Mobile device if not already enabled. This is only for MicroBridge.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Push the Reset button."))),(0,a.kt)("h3",{id:"using-microbridge"},"Using MicroBridge"),(0,a.kt)("p",null,"The sample applications and library are available in the resources section. The following Arduino Sketch and Android code are commented well explaining the usage."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SeeeduinoADKDemo.pde")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"//Seeeduino ADK Demo using Niels Brouwers' MicroBridge library.\n//Connect a LED to D12 and a variable resistor(POT) to A0\n\n#include <SPI.h>\n#include <Adb.h>\n\n// Adb connection.\nConnection * connection;\n\n// Elapsed time for ADC sampling. The rate at which ADC value is sent to Android device.\nlong lastTime;\n\n//State of LED. Initially OFF.\nuint8_t LEDState=0;\n\n// Event handler for the shell connection.\n// This event handler is called whenever data is sent from Android Device to Seeeduino ADK.\n// Any data / command to be sent to I/O of ADK has to be handled here.\n//\n// For eg: 1.Controlling an ouput port 2.Interacting with a device connected\n// to ADK via IIC or Serial Port.\n\nvoid adbEventHandler(Connection * connection, adb_eventType event, uint16_t length, uint8_t * data)\n{\n\n  // In this example Data packets contain one byte and it decides the state of a LED connected to D12\n  // The size of data is predetermined for this application. Android device also uses the same size.\n\n  if (event == ADB_CONNECTION_RECEIVE)\n  {\n     if(LEDState != data[0])\n     {\n         digitalWrite(12, data[0]);   // Change the state of LED\n         Serial.println(data[0],DEC);\n         LEDState = data[0];          // Store the State of LED\n     }\n  }\n\n}\n\nvoid setup()\n{\n  //Serial port debug purpose\n  Serial.begin(57600);\n\n  // Note start time\n  lastTime = millis();\n\n  // Set Digital pin 12 (LED is connected) as output\n  pinMode(12,OUTPUT);\n\n  // Initialise the ADB subsystem.  \n  ADB::init();\n\n  // Open an ADB stream to the phone's shell. Auto-reconnect. Use any unused port number eg:4568\n  connection = ADB::addConnection(\"tcp:4568\", true, adbEventHandler);  \n\n}\n\nvoid loop()\n{\n  //Check if ADC needs to be sampled.\n  if ((millis() - lastTime) > 20)\n  {\n    //Read ADC value\n    uint16_t data = analogRead(A0);\n\n    //Send the ADC value to Android device as two bytes of data.\n    connection->write(2,(uint8_t*)&data);\n    lastTime = millis();\n  }\n\n  // Poll the ADB subsystem.\n  ADB::poll();\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Android Application"),(0,a.kt)("li",{parentName:"ul"},"Download the complete Android application from ",(0,a.kt)("a",{parentName:"li",href:"http://garden.seeedstudio.com/images/1/1b/SeeeduinoADKDemo-App.zip"},"Seeeduino ADK Demo application package"),". The main java file is listed below with usage comments\xa0:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'/* Application demonstrates the interaction between Seeeduino ADK and Android Device\n * using Niels Brouwers\' MicroBridge library.\n *\n * Android Device: Any device with Android v1.5 which supports ADB(Android Debug Bridge).   \n *  \n * This application uses a very simple (or a trivial) design to make it understandable.\n *\n * Overview:\n * 1.Seeeduino ADK Main Board periodically samples Analog Channel 0 and sends it\n *   to Android Device for display. This value is displayed using a TextView and SeekBar Widgets\n *\n * 2.Android device controls the state of a LED connected to Digital Pin 12 of ADK Main Board.\n *   A Button Widget used for this.\n *\n * Microbridge uses ADB based client-server implementation. The Server code that runs on Android\n * device runs in a separate thread. Hence any update to UI widgets value has to be carried out\n * in UI thread. This application uses XML based UI creation as it is easier for adding addition\n * UI Widgets.\n *\n */\npackage com.seeedstudio.SeeeduinoADKDemo;\n\nimport java.io.IOException;\n\nimport org.microbridge.server.AbstractServerListener;\nimport org.microbridge.server.Server;\n\nimport android.view.View;\nimport android.view.Window;\nimport android.view.View.OnClickListener;\nimport android.app.Activity;\nimport android.os.AsyncTask;\nimport android.os.Bundle;\nimport android.util.Log;\nimport android.widget.SeekBar;\nimport android.widget.TextView;\nimport android.widget.Button;\n\n\npublic class SeeeduinoADKDemo extends Activity implements OnClickListener {\n    private int adcSensorValue=10;\n\n    //UI Widgets\n    TextView tvAdcvalue;\n    SeekBar sbAdcValue;\n    Button bOutPutLED;\n\n    boolean LEDState = false ; //initially OFF\n\n    // Create TCP server (based on  MicroBridge LightWeight Server).\n    // Note: This Server runs in a separate thread.\n    Server server = null;\n\n    /** Called when the activity is first created. */\n    @Override\n    public void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        requestWindowFeature(Window.FEATURE_NO_TITLE);\n        setContentView(R.layout.main);\n\n        bOutPutLED = (Button) findViewById(R.id.buttonOuputLED);\n        bOutPutLED.setOnClickListener(this);\n\n\n        // Create TCP server (based on  MicroBridge LightWeight Server)\n        try\n        {\n            server = new Server(4568); //Use the same port number used in ADK Main Board firmware\n            server.start();         \n        } catch (IOException e)\n        {\n            Log.e("Seeeduino ADK", "Unable to start TCP server", e);\n            System.exit(-1);\n        }\n\n        server.addListener(new AbstractServerListener() {\n\n            @Override\n            public void onReceive(org.microbridge.server.Client client, byte[] data)\n            {\n\n                if (data.length<2) return;\n                adcSensorValue = (data[0] & 0xff) | ((data[1] & 0xff) << 8);\n\n                //Any update to UI can not be carried out in a non UI thread like the one used\n                //for Server. Hence runOnUIThread is used.\n                runOnUiThread(new Runnable() {\n                    @Override\n                    public void run() {\n                        new UpdateData().execute(adcSensorValue);\n\n                    }\n                });\n\n            }\n\n        });  \n\n    }   //End of TCP Server code\n\n    // UpdateData Asynchronously sends the value received from ADK Main Board.\n    // This is triggered by onReceive()\n    class UpdateData extends AsyncTask<Integer, Integer, String> {\n        // Called to initiate the background activity\n        @Override\n        protected String doInBackground(Integer... sensorValue) {\n\n            //Init SeeekBar Widget to display ADC sensor value in SeekBar\n            //Max value of SeekBar is set to 1024\n            SeekBar sbAdcValue = (SeekBar) findViewById(R.id.sbADCValue);           \n            sbAdcValue.setProgress(sensorValue[0]);    \n            return (String.valueOf(sensorValue[0]));  //This goes to result\n\n        }\n\n        // Called when there\'s a status to be updated\n        @Override\n        protected void onProgressUpdate(Integer... values) {\n            super.onProgressUpdate(values);\n            // Not used in this case\n        }\n\n        // Called once the background activity has completed\n        @Override\n        protected void onPostExecute(String result) {\n            //Init TextView Widget to display ADC sensor value in numeric.\n            TextView tvAdcvalue = (TextView) findViewById(R.id.tvADCValue);\n            tvAdcvalue.setText(String.valueOf(result));\n\n        }\n    }\n\n    //Called when the LED button is clicked\n    @Override\n    public void onClick(View v) {\n        byte data;\n\n\n        // Toggle the state of LED\n        if(LEDState == true)\n        {\n            LEDState = false;\n            data = 0;\n            bOutPutLED.setText("LED Off");\n        }\n        else\n        {\n            LEDState = true;\n            data = 1;\n            bOutPutLED.setText("LED On");\n        }\n\n        try\n        {\n            //Send the state of LED to ADK Main Board as a byte\n            server.send(new byte[] {(byte) data});\n        } catch (IOException e)\n        {\n            Log.e("Seeeduino ADK", "problem sending TCP message", e);\n        }\n\n    }\n\n}\n')),(0,a.kt)("h3",{id:"using-google-adk"},"Using Google ADK"),(0,a.kt)("p",null,"Visit ",(0,a.kt)("strong",{parentName:"p"},"Android ADK Developer page")," for complete documentation on how to use Accessory API."),(0,a.kt)("h3",{id:"as-mega-2560"},"As Mega 2560"),(0,a.kt)("p",null,"Seeeduino ADK Main Board can be used as Seeeduino Mega 2560. It also works well with GROVE System. The Grove - Base Shield can be used to connect the numerous Grove modules available."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/Seeeduino_ADK_MainBoard_With_Stem_Base_Shield.jpg",alt:"enter image description here"})),(0,a.kt)("p",null,"And following is a demo showing 2.8%27%27 TFT Touch Shield working with Seeeduino ADK Main Board.\n",(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/ADKMainBoard_TFTTouchShield_PhotoframeDemo.jpg",alt:"enter image description here"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Connect Seeeduino ADK Main Board to 2.8%27%27 TFT Touch Shield")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Format SD card in FAT mode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Set the operating voltage slide switch to 3.3V")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Copy few 24-bit Bitmap Images (.bmp) files of 240 x 320 size to SD Card. Few samples are present in ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/wiki/images/1/11/Tftbmp_demo.zip"},"bmp demo application archive"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Connect the SD card / microSD Card Adapter (with a microSD card) as shown in the illustration to ",(0,a.kt)("strong",{parentName:"p"},"Seeeduino ADK Main Board")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/TFT_Touch_Shield_photoframe.png",alt:"enter image description here"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Download and install ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/wiki/images/6/6e/Tft_touch_libraries.zip"},"TFT Touch Library"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Download ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/adafruit/SD"},"SD Card")," library and install it to Arduino folder.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Compile and upload ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/wiki/images/1/11/Tftbmp_demo.zip"},"this")," sketch."))),(0,a.kt)("p",null,"Output:\n",(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/TFT_Touch_Shield_PhotoframeDemo.jpg",alt:"enter image description here"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Refer ",(0,a.kt)("strong",{parentName:"p"},"2.8'' TFT Touch Shield")," for more information.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Oleg Mazurov of  ",(0,a.kt)("strong",{parentName:"p"},"Circuits@Home")," is the one who originally designed USB Host Shield based on MAX3421E. This was adapted by Google's ADK Referece Board. His site has tons of information and code examples to use MAX3421E based USB Host Shield to with USB keyboard, Mouse, Bluetooth Dongle, Wii Remote, etc."))),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://wiki.seeedstudio.com/images/1/1a/Seeeduino_ADK_0.9b_final_Eagle_files.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Library]")," ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/images/1/19/MicroBridge-ModifiedForSeeeduinoADK.zip"},"Modified MicroBridge Arduino Library")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Library]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/res/Adb_for_Arduino1.0.zip"},"Modified MicroBridge Arduino Library for Arduino1.0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Demo]"),(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/images/1/1b/SeeeduinoADKDemo-App.zip"},"Seeeduino Demo - Android App")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[PDF]"),(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/images/6/67/Seeeduino_ADK_0.9b_final_Scehmatic.pdf"},"Seeeduino ADK Eagle Schematic PDF")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/images/1/1a/Seeeduino_ADK_0.9b_final_Eagle_files.zip"},"Seeeduino ADK Eagle Schematic and Board Files")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Accessory]"),(0,a.kt)("a",{parentName:"li",href:"http://developer.android.com/guide/topics/usb/adk.html"},"Android Open Accessory Development Kit Page")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[MicroBridge]"),(0,a.kt)("a",{parentName:"li",href:"http://blogs.unpad.ac.id/dominodiaz/"},"MicroBridge Page")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[USB]"),(0,a.kt)("a",{parentName:"li",href:"http://adrian-fh98.web.unair.ac.id/"},"Game controllers using USB Host Shield"))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);