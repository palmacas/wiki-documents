---
description: Bluetooth usage with Seeed Studio XIAO MG24.
title: Seeed Studio XIAO MG24 Bluetooth usage
keywords:
- MG24
- xiao
- ble
- bluetooth
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_mg24_bluetooth
last_update:
  date: 02/8/2025
  author: Hugo
---

# Bluetooth Usage with Seeed Studio XIAO MG24

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO MG24</th>
			<th>Seeed Studio XIAO MG24 Sense</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop0.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

The Seeed Studio XIAO MG24 is a robust development board that supports Bluetooth LE 5.3 and Bluetooth mesh, making it an ideal choice for a wide array of IoT applications requiring wireless connectivity. Leveraging its exceptional RF performance, the XIAO MG24 delivers reliable, high-speed wireless communication over various distances, making it a versatile solution for both short-range and long-range applications. In this tutorial, we will explore the fundamental features of the XIAO MG24's Bluetooth capabilities, including how to scan for nearby Bluetooth devices, establish a Bluetooth connection, and transmit and receive data over that connection.

:::tip
PB04 is used to select between using the built-in antenna or an external antenna. Before that, you need to set PB05 high level to turn on this function. If PB04 is set low level, it uses the built-in antenna; if it set to high level, it uses the external antenna. Default is low level. If you want to set it high, you can refer the code below.
```cpp
#define RF_SW_PW_PIN PB5
#define RF_SW_PIN PB4

void setup() {
  // turn on this antenna function
  pinMode(RF_SW_PW_PIN, OUTPUT);  
  digitalWrite(RF_SW_PW_PIN, HIGH);

  delay(100);

  // HIGH -> Use external antenna / LOW -> Use built-in antenna
  pinMode(RF_SW_PIN, OUTPUT);  
  digitalWrite(RF_SW_PIN, HIGH);
```
:::

## Bluetooth Low Energy (BLE) Usage

Bluetooth Low Energy, BLE for short, is a power-conserving variant of Bluetooth. BLE’s primary application is short distance transmission of small amounts of data (low bandwidth). Unlike Bluetooth that is always on, BLE remains in sleep mode constantly except for when a connection is initiated.

Due to its properties, BLE is suitable for applications that need to exchange small amounts of data periodically running on a coin cell. For example, BLE is of great use in healthcare, fitness, tracking, beacons, security, and home automation industries.

This makes it consume very low power. BLE consumes approximately 100x less power than Bluetooth (depending on the use case).

About the BLE part of XIAO MG24, we will introduce its use in the following sections.

- [Some fundamental concepts](#some-fundamental-concepts) -- We will first get to know some concepts that may be used frequently in BLE in order to help us understand the execution process and thinking of BLE programs.
- [BLE Scanner](#ble-scanner) -- This section will explain how to search for nearby Bluetooth devices and print them out in the serial monitor.
<!-- - [BLE server/client](#ble-serverclient) -- This section will explain how to use XIAO ESP32C6 as Server and Client to send and receive specified data messages. It will also use to receive or send messages from the phone to XIAO. -->
<!-- - [BLE Sensor Data Exchange](#ble-sensor-data-exchange) -- This is the last section of the full tutorial where we will go through a sensor example to explain how to send the sensor data through BLE. -->

### Some fundamental concepts

#### Server and Client

With Bluetooth Low Energy, there are two types of devices: the server and the client. The XIAO MG24 can act either as a client or as a server.

The server advertises its existence, so it can be found by other devices, and contains the data that the client can read. The client scans the nearby devices, and when it finds the server it is looking for, it establishes a connection and listens for incoming data. This is called point-to-point communication.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/ble.png" style={{width:800, height:'auto'}}/></div>

#### Attribute

Attribute is actually a piece of data. Each Bluetooth device is used to provide a service, and the service is a collection of data, the collection can be called a database, each entry in the database is an Attribute, so here I translate Attribute into data entries. You can imagine a Bluetooth device as a table, each row inside the table is an Attribute.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/52.png" style={{width:600, height:'auto'}}/></div>

#### GATT

When two Bluetooth devices establish a connection, they need a protocol to determine how to communicate. GATT (Generic Attribute Profile) is such a protocol that defines how data is transmitted between Bluetooth devices.

In the GATT protocol, the functions and properties of a device are organized into structures called services, characteristics, and descriptors. A service represents a set of related functions and features provided by a device. Each service can include multiple characteristics, which define a certain property or behavior of the service, such as sensor data or control commands. Each characteristic has a unique identifier and a value, which can be read or written to communicate. Descriptors are used to describe metadata of characteristics, such as format and access permission of characteristic values.

By using the GATT protocol, Bluetooth devices can communicate in different application scenarios, such as transmitting sensor data or controlling remote devices.

#### BLE Characteristic

ATT, full name attribute protocol. In the end, ATT is composed of a group of ATT commands, that is, request and response commands, ATT is also the uppermost layer of the Bluetooth null packet, that is, ATT is where we analyze the Bluetooth packet the most.

ATT command, formally known as ATT PDU (Protocol Data Unit). It includes 4 categories: read, write, notify and indicate. These commands can be divided into two types: if it requires a response, then it will be followed by a request; on the contrary, if it only requires an ACK but not a response, then it will not be followed by a request. 

Service and Characteristic are defined in the GATT layer. The Service side provides the Service, the Service is the data, and the data is the attribute, and the Service and Characteristic are the logical presentation of the data, or the data that the user can see are eventually transformed into the Service and Characteristic.

Let's take a look at what the service and characteristic look like from a mobile perspective. nRF Connect is an application that shows us very visually how each packet should look like.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/62.png" style={{width:400, height:'auto'}}/></div>

As you can see, in the Bluetooth specification, each specific Bluetooth application is composed of multiple Services, and each Service is composed of multiple Characteristics. A Characteristic consists of a UUID, Properties, and a Value.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/50.png" style={{width:300, height:'auto'}}/></div>

Properties are used to describe the types and permissions of operations on a characteristic, such as whether it supports read, write, notify, and so on. This is similar to the four categories included in an ATT PDU.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/51.png" style={{width:800, height:'auto'}}/></div>

#### UUID

Each service, characteristic and descriptor have an UUID (Universally Unique Identifier). An UUID is a unique 128-bit (16 bytes) number. For example:

```
ea094cbd-3695-4205-b32d-70c1dea93c35
```

There are shortened UUIDs for all types, services, and profiles specified in the [SIG (Bluetooth Special Interest Group)](https://www.bluetooth.com/specifications/gatt/services). But if your application needs its own UUID, you can generate it using this [UUID generator website](https://www.uuidgenerator.net/).

### BLE Scanner

Creating a XIAO MG24 BLE scanner is simple. The following is a sample program to create a scanner.

```cpp
/*
   BLE scan example

   The example scans for other BLE devices and prints out the address, RSSI, channel and name for each found device.

   Find out more on the Silabs BLE API usage at: https://docs.silabs.com/bluetooth/latest/bluetooth-stack-api/

   This example only works with the 'BLE (Silabs)' protocol stack variant.

   Compatible boards:
   - Arduino Nano Matter
   - SparkFun Thing Plus MGM240P
   - xG27 DevKit
   - xG24 Explorer Kit
   - xG24 Dev Kit
   - BGM220 Explorer Kit
   - Ezurio Lyra 24P 20dBm Dev Kit
   - Seeed Studio XIAO MG24 (Sense)

   Author: Tamas Jozsi (Silicon Labs)
 */
#define RF_SW_PW_PIN PB5
#define RF_SW_PIN PB4

void setup() {
  Serial.begin(115200);
}

void loop() {
  
}

static String get_complete_local_name_from_ble_advertisement(sl_bt_evt_scanner_legacy_advertisement_report_t* response);

/**************************************************************************/ /**
 * Bluetooth stack event handler
 * Called when an event happens on BLE the stack
 *
 * @param[in] evt Event coming from the Bluetooth stack
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t* evt) {
  static uint32_t scan_report_num = 0u;
  sl_status_t sc;

  switch (SL_BT_MSG_ID(evt->header)) {
    // This event is received when the BLE device has successfully booted
    case sl_bt_evt_system_boot_id:
      // Print a welcome message
      Serial.begin(115200);

      // turn on this antenna function
      pinMode(RF_SW_PW_PIN, OUTPUT); 
      digitalWrite(RF_SW_PW_PIN, HIGH);

      delay(100);
      // HIGH -> Use external antenna / LOW -> Use built-in antenna
      pinMode(RF_SW_PIN, OUTPUT); 
      digitalWrite(RF_SW_PIN, HIGH);

      Serial.println();
      Serial.println("Silicon Labs BLE scan example");
      Serial.println("BLE stack booted");
      // Start scanning for other BLE devices
      sc = sl_bt_scanner_set_parameters(sl_bt_scanner_scan_mode_active,  // mode
                                        16,                              // interval (value * 0.625 ms)
                                        16);                             // window (value * 0.625 ms)
      app_assert_status(sc);
      sc = sl_bt_scanner_start(sl_bt_scanner_scan_phy_1m,
                               sl_bt_scanner_discover_generic);
      app_assert_status(sc);
      Serial.println("Started scanning...");
      break;

    // This event is received when we scan the advertisement of another BLE device
    case sl_bt_evt_scanner_legacy_advertisement_report_id:
      scan_report_num++;
      Serial.print(" -> #");
      Serial.print(scan_report_num);
      Serial.print(" | Address: ");
      for (int i = 5; i >= 0; i--) {
        Serial.printf("%02x", evt->data.evt_scanner_legacy_advertisement_report.address.addr[i]);
        if (i > 0) {
          Serial.print(":");
        }
      }
      Serial.print(" | RSSI: ");
      Serial.print(evt->data.evt_scanner_legacy_advertisement_report.rssi);
      Serial.print(" dBm");
      Serial.print(" | Channel: ");
      Serial.print(evt->data.evt_scanner_legacy_advertisement_report.channel);
      Serial.print(" | Name: ");
      Serial.println(get_complete_local_name_from_ble_advertisement(&(evt->data.evt_scanner_legacy_advertisement_report)));
      break;

    // Default event handler
    default:
      Serial.print("BLE event: 0x");
      Serial.println(SL_BT_MSG_ID(evt->header), HEX);
      break;
  }
}

/**************************************************************************/ /**
 * Finds the complete local name in BLE advertisements
 *
 * @param[in] response BLE response event received from scanning
 *
 * @return The complete local name if found, "N/A" otherwise
 *****************************************************************************/
static String get_complete_local_name_from_ble_advertisement(sl_bt_evt_scanner_legacy_advertisement_report_t* response) {
  int i = 0;
  // Go through the response data
  while (i < (response->data.len - 1)) {
    uint8_t advertisement_length = response->data.data[i];
    uint8_t advertisement_type = response->data.data[i + 1];

    // If the length exceeds the maximum possible device name length
    if (advertisement_length > 29) {
      continue;
    }

    // Type 0x09 = Complete Local Name, 0x08 Shortened Name
    // If the field type matches the Complete Local Name
    if (advertisement_type == 0x09) {
      // Copy the device name
      char device_name[advertisement_length + 1];
      memcpy(device_name, response->data.data + i + 2, advertisement_length);
      device_name[advertisement_length] = '\0';
      return String(device_name);
    }
    // Jump to next advertisement record
    i = i + advertisement_length + 1;
  }
  return "N/A";
}

#ifndef BLE_STACK_SILABS
#error "This example is only compatible with the Silicon Labs BLE stack. Please select 'BLE (Silabs)' in 'Tools > Protocol stack'."
#endif
```

:::tip
It should be noted that 'BLE (Silabs)' in 'Tools > Protocol stack' needs to be selected before compilation.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/tool_select.png" style={{width:800, height:'auto'}}/></div>
:::

Now you can select XIAO MG24 motherboard and upload the program. If the program runs smoothly, open the serial monitor and set the baud rate to 115200, you can see the following result.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/scan_result.png" style={{width:700, height:'auto'}}/></div>

This program prints out the name, MAC address, Channel and signal of the scanned Bluetooth device.

#### Program annotation

This example demonstrates how to scan for nearby Bluetooth Low Energy (BLE) devices using the Silicon Labs BLE stack, printing the address, RSSI (Received Signal Strength Indicator), channel, and name of each discovered device.

The code begins by defining an event handler function`sl_bt_on_event`, which processes various Bluetooth Low Energy (BLE) events generated by the BLE stack. This function uses a switch statement to differentiate between event types, such as when the BLE device boots up and when it receives advertisement reports from nearby devices. Upon receiving the boot event, it initializes the serial communication, configures GPIO pins for antenna control, and starts scanning for BLE devices with specified parameters.

When the scanning process detects an advertisement report from a BLE device, the `sl_bt_evt_scanner_legacy_advertisement_report_id` case is triggered. In this case, the function increments a counter for each detected device and extracts key information, including the device's address, RSSI, channel, and local name. It utilizes the helper function `get_complete_local_name_from_ble_advertisement` to retrieve the complete name of the device from the advertisement data, which is then printed to the serial output.

The helper function`get_complete_local_name_from_ble_advertisement`, iterates through the advertisement data to locate the complete local name field. It checks each advertisement record for the type that corresponds to the complete local name and returns it as a string. If the complete name is not found, the function returns "N/A." This systematic approach allows the application to effectively discover and identify nearby BLE devices, providing valuable information during the scanning process.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
