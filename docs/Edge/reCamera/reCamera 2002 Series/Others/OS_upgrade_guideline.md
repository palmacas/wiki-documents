---
description: reCamera Warranty
title: OS Upgrade Guideline
keywords:
  - Edge
  - reCamera
  - recamera
  - Operating system
image: https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-4.png
slug: /os_upgrade_guideline
last_update:
  date: 2/11/2024
  author: Parker Hu
---

# OS Upgrade Guideline
Connect the recamera to your computer using the type-c cable, and go to `http://192.168.42.1/#/system` in your computer's browser to configure your device's network.
Click `System` Configuration, and if a new firmware is released, click `Apply` to upgrade the device system.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image.png" /></div>
Wait for the progress bar to complete.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-1.png" /></div>
Click `Restart` to complete the system upgrade.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-2.png" /></div>
The system will automatically check if there is a new version of firmware that can be updated.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-3.png" /></div>

## Switch and upgrade the system by command

You can check out the latest version of the [reCamera OS here.](https://github.com/Seeed-Studio/reCamera-OS)

Manually update the latest OTA firmware:
```bash
#Upgrade to the latest firmware version
/mnt/system/upgrade.sh latest https://github.com/Seeed-Studio/reCamera-OS/releases/latest 
#Switch to the version of the system you want to use
/mnt/system/upgrade.sh latest https://github.com/Seeed-Studio/reCamera-OS/releases/tag/0.1.4

/mnt/system/upgrade.sh start
```

Manually update the specified version of OTA firmware. You can also update the system version in your branch.

```bash
/mnt/system/upgrade.sh latest https://github.com/Seeed-Studio/reCamera-OS/releases/download/0.1.3/sg2002_reccamera_emmc_md5sum.txt #Replace it with your branch link

/mnt/system/upgrade.sh start
```

Update the firmware manually using the local ota package. The ota firmware can be [downloaded here](https://github.com/Seeed-Studio/reCamera-OS/releases/).


```bash
/mnt/system/upgrade.sh start sg2002_reCamera_0.1.3_emmc_ota.zip
```
:::note
If you don't have enough permissions to dump files into recamera, you can can change system files to be readable or writable by typing `rootfs_rw on/off`.
:::

Manually restore factory Settings.

```bash
/mnt/system/upgrade.sh recovery
```

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