---
description: 11
title: Jetson Orin Nano 开发者套件初始设置指南
keywords:
  - Jetson Orin Nano Developer Kit
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-Nano-Developer-Kit/jetson-orin-nano-dev-kit.webp
slug: /cn/initial_setup_jon
last_update:
  date: 1/14/2025
  author: Yuguo
---

# Jetson Orin Nano 开发者套件初始设置指南

> **来源说明**：  
> 本文翻译自 [Jetson AI Lab 的 Jetson Orin Nano 开发者套件初始设置指南](https://www.jetson-ai-lab.com/initial_setup_jon.html)。原文内容由 Jetson AI Lab 提供。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Initial_Setup_Guide_for_Jetson_Orin_Nano_Developer_Kit/NVIDIA-JetsonOrin-3QTR-Front-Left_800px.png" style={{width:400, height:'auto'}} />
</div>

:::note 注意
本指南是对官方 [**Jetson Orin Nano Developer Kit 入门指南的补充**](https://developer.nvidia.com/embedded/learn/get-started-jetson-orin-nano-devkit)。
:::

The NVIDIA® <span class="blobLightGreen4">Jetson Orin Nano™ Developer Kit</span> 是开始本地生成式 AI 评估和开发之旅的完美套件。

随着 2024 年 12 月的软件更新 (**JetPack 6.1 (rev.1)**)，这款先进的边缘计算机性能提升了高达 70%，使其成为生成式 AI 时代的更加强大的平台。

本篇指南展示了从开箱、需要更新固件、在 SD 卡上刷入最新 JetPack 6.1 (rev. 1) 镜像，到初始软件设置的完整流程，这样您就可以准备好进行本网站列出的教程和其他 AI 项目。

## 检查您的硬件清单

安装 Jetson Orin Nano 开发套件需要或非常需要以下物品 <br />
如果您的库存中没有，请先安排好，再返回本指南.

:::note 下面的内容产品包装中未包含，是您需要或者想要准备的

### 存储

- ☐ microSD 卡（64GB 或更大）
- ☐ NVMe SSD（可自行选择，但强烈推荐用于跟随本网站的教程）

<div style={{textAlign:'left'}}>
  <img src="https://files.seeedstudio.com/wiki/Initial_Setup_Guide_for_Jetson_Orin_Nano_Developer_Kit/microsd_64gb.png" style={{width:150, height:'auto'}} />
</div>

<div style={{textAlign:'left'}}>
  <img src="https://files.seeedstudio.com/wiki/Initial_Setup_Guide_for_Jetson_Orin_Nano_Developer_Kit/ssd_nvme_1tb.png" style={{width:600, height:'auto'}} />
</div>

### 访问终端的方式

您需要以下任意一套:

- ☐ 显示器端口线、支持显示器和键盘
- ☐ HDMI线和HDMI接口的显示器（或电视）以及 键盘
- ☐ [USB转TTL线 :octicons-link-external-16:](https://www.adafruit.com/product/954) (Advanced)

:::

## 打开包装盒

:::info 盒子里包含的内容

### ✅ Jetson Orin Nano 开发者套件

<div style={{textAlign:'left'}}>
  <img src="https://files.seeedstudio.com/wiki/Initial_Setup_Guide_for_Jetson_Orin_Nano_Developer_Kit/NVIDIA-JetsonOrin-3QTR-Front-Left_800px.png" style={{width:256, height:'auto'}} />
</div>

    Jetson Orin Nano 开发者套件由 Jetson Orin Nano 模块 (enlarged SO-DIMM form factor), 载板组成.

    它被设计为使用**microSD** 卡为主要存储, 因此模块（有一个大黑色散热器和风扇）在模块底部有一个 microSD 卡插槽.

### ✅ 19V 直流电源适配器

:::

## 整体流程

:::info Jetson Orin Nano 初始设置流程图

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Initial_Setup_Guide_for_Jetson_Orin_Nano_Developer_Kit/jetson-orin-nano-initial-setup-flowchart.svg" style={{width:256, height:'auto'}} />
</div>

:::
<!-- ??? 实例 "E更详细的流程图（适用于所有固件版本)"

    另一张图片. -->

## 1️⃣ 检查 Jetson UEFI 固件版本 > `36.3`

您的 Jetson Orin Nano 开发者套件可能在出厂时已经刷入了最新固件（"Jetson UEFI 固件" 在 QSPI-NOR 闪存上）.

如果没有，我们需要通过一系列程序来升级到最新固件。（幸运的是，我们现在可以在 Jetson 上完成这一切，这意味着我们不再需要使用一个 Ubuntu 电脑！）

因此，让我们首先检查您的 Jetson UEFI 固件版本.<br />
您可以采用以下方法之一.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="连接显示器" label="连接显示器">

1. 将您的显示器和键盘连接到开发者套件.
2. 通过电源适配器来打开开发者套件
3. 反复按键盘上的 `esc` 键，尤其是在 NVIDIA 标志启动画面首次出现在显示器上后
4. 看到 UEFI 设置菜单屏幕
5. 检查顶部第三行（在 "Not specified" 下面），这应该是 Jetson UEFI 固件的版本号

</TabItem>

<TabItem value="Headless" label="Headless">

1. 将 USB 到 TTL 串行电缆连接到载板上的 `J14` "按钮" 头的以下引脚，该头位于 Jetson 模块下方.
        - `RXD` (Pin 3) :Adafruit 适配器电缆(绿色)
        - `TXD` (Pin 4) :Adafruit 适配器电缆(白色)
        - `GND` (Pin 7) :Adafruit 适配器电缆(黑色)
    > 有关详细信息，请参阅 [Jetson Orin Nano 开发者套件载板规格](https://developer.nvidia.com/embedded/downloads#?search=Carrier%20Board%20Specification&tx=$product,jetson_orin_nano).
2. 在您的 PC 上，运行您的控制台监视程序并打开 USB 串行端口.
3. 通过插入捆绑的直流电源适配器来给开发者套件供电
4. 在 PC 控制台上，反复按键盘上的`esc`键，尤其是在 NVIDIA 标志启动画面首次出现在显示器上后
5. 您应该看到 UEFI 设置菜单屏幕
6. 检查顶部第三行（在 "Not specified" 下面），这应该是 Jetson UEFI 固件的版本号

</TabItem>

<TabItem value="😁I'm feeling lucky" label="😁I'm feeling lucky">

您可以跳至 [***6️⃣ 使用 JetPack 6.x SD 卡启动***](#6%EF%B8%8F⃣-使用-jetpack-6x-sd-卡启动)，并尝试运气看看您的 Jetson 是否能够启动您的 Jetson Orin Nano 开发者套件到初始软件设置（OEM-config）.

如果您在 3 分钟内没有看到 Ubuntu 桌面（仍处于黑屏状态），则表示该设备具有旧的 UEFI 固件。

:::warning 警告
不要在黑屏状态下停留太久。

累积的启动失败可能会触发 L4T 启动器始终启动到恢复内核。

如果发生这种情况，即使切换到正确的 JetPack 5.1.3 SD 卡映像，它也不会从 SD 卡启动，直到我们手动更改 L4T 启动器设置。
:::

</TabItem>
</Tabs>

## 确定是否需要 QSPI 更新

:::warning 注意

根据您在上一步找到的固件版本选择适当的标签.

如果您发现您的 Jetson Orin Nano 需要更新其固件以运行 JetPack 6.x，请点击 Firmware < 36.0 标签，然后将出现额外的步骤 2 到 5 .

如果您知道您的 Jetson Orin Nano 已经拥有最新固件，请停留在 Firmware 36.x 标签上，并跳至下一节([***6️⃣ 使用 JetPack 6.x SD 卡启动***](#6%EF%B8%8F⃣-使用-jetpack-6x-sd-卡启动)
:::

<Tabs>
<TabItem value="固件 < 36.0" label="固件 < 36.0">
你的 Jetson Orin Nano **需要** 更新固件，才能使 JetPack 6.x SD 卡正常工作。

执行以下步骤（2 到 5）。

## 2️⃣ 使用 JetPack 5.1.3 SD 卡启动以安排固件更新

首先，我们需要运行 JetPack 5.1.3，以便其 `nvidia-l4t-bootloader` 包激活其引导加载程序/固件更新器，从而在下次重启时自动运行固件更新。

1. 在您的电脑上下载 SD 卡镜像

    在电脑上从官方下载 Jetson Orin Nano Developer Kit 的 JetPack 5.1.3 镜像 [JetPack 5.1.3 页面](https://developer.nvidia.com/embedded/jetpack-sdk-513) 或以下直接链接按钮下载 JetPack 5.1.3 镜像，用于 Jetson Orin Nano 开发者套件.

    :::warning 注意

    NVIDIA 在 2024 年 5 月 28 日更新了 JetPack 5.1.3 镜像，因为旧版本存在一些问题，以下过程无法正常工作。<br />因此，请下载并使用最新镜像（新文件名为 **JP513-orin-nano-sd-card-image_b29.zip**)。
    :::
    [Jetson Orin Nano 开发者套件 - JetPack 5.1.3 镜像](https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v5.0/jp513-orin-nano-sd-card-image.zip)

2. 使用 Balena Etcher 将镜像刷入 SD 卡

    如果您的 PC 上没有 Balena Etcher，请从 [Balena 官方网站](https://etcher.balena.io/)下载.

    <div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Initial_Setup_Guide_for_Jetson_Orin_Nano_Developer_Kit/balena_etcher.png" style={{width:600, height:'auto'}} />
    </div>

3. 将已刷入的 microSD 卡插入 Jetson 模块的插槽中

    <div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Initial_Setup_Guide_for_Jetson_Orin_Nano_Developer_Kit/jetson-orin-nano-dev-kit-sd-slot.png" style={{width:400, height:'auto'}} />
    </div>

4. 开机

   通过插入直流电源适配器来打开 **已插入 JetPack 5.1.3 SD 卡** 的 Jetson Orin Nano 开发者套件。

5. 完成初始软件设置(`oem-config`)

    :::info 信息

    JetPack 5.1.3 SD 卡有可能在连接的显示器上不显示任何桌面 UI（显示器保持黑色）。

    它仍会在后台安排 UEFI 固件更新，因此当您重新启动设备时，它很可能会在下次启动时执行固件更新。

    因此，如果发生这种情况，请跳到下一步（3️⃣-2）。
    :::

6. 确保已安排固件更新.

    一旦 Jetson 启动进入 Jetson Linux 系统，后台服务会自动运行以安排固件更新（如果需要），在下次启动过程中执行。

    一旦您看到以下内容，或者在开机后等待大约 5 分钟以确保安排完成，请重启。

    <Tabs>
    <TabItem value="GUI" label="GUI">

    <div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Initial_Setup_Guide_for_Jetson_Orin_Nano_Developer_Kit/nvidia-l4t-bootloader-post-install-notification.png" style={{width:400, height:'auto'}} />
    </div>

    </TabItem>
    <TabItem value="CUI" label="CUI">

    ```bash
    $ sudo systemctl status nv-l4t-bootloader-config
    [sudo] password for jetson: 
    ● nv-l4t-bootloader-config.service - Configure bootloader service
        Loaded: loaded (/etc/systemd/system/nv-l4t-bootloader-config.service; enabled; vendor preset: enabled)
        Active: inactive (dead) since Fri 2024-05-03 13:36:13 PDT; 1min 57s ago
        Process: 11439 ExecStart=/opt/nvidia/l4t-bootloader-config/nv-l4t-bootloader-config.sh -v (code=exited, status=0/SUCCESS)
    Main PID: 11439 (code=exited, status=0/SUCCESS)
    ```

    </TabItem>
    </Tabs>

## 3️⃣ 重启并观察固件更新（至 `5.0`）

1. 重启

    重启您的 Jetson Orin Nano 开发者套件。

    <Tabs>
    <TabItem value="GUI" label="GUI">

    在 Ubuntu 桌面上点击电源图标并选择 "**重启...**"。

    </TabItem>
    <TabItem value="CUI" label="CUI">

    ```bash
    sudo reboot
    ```

    </TabItem>
    </Tabs>

2. 观察固件更新

    您应该在启动过程中看到以下内容。

    <Tabs>
    <TabItem value="带显示器" label="带显示器">

    <div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Initial_Setup_Guide_for_Jetson_Orin_Nano_Developer_Kit/fw-update_from_36-3-0.jpg" style={{width:600, height:'auto'}} />
    </div>

    </TabItem>
    <TabItem value="Headless (serial)" label="Headless (serial)">

    <div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Initial_Setup_Guide_for_Jetson_Orin_Nano_Developer_Kit/fw_update_4.1-to-5.0.png" style={{width:600, height:'auto'}} />
    </div>

    </TabItem>
    </Tabs>

    完成后，您将启动进入 JetPack 5.1.3（再一次），底层固件更新为 `5.0-35550185`。

## 4️⃣ 运行 QSPI 更新器包以安排 QSPI 更新

现在您的 UEFI 固件已更新为 35.5.0（= JetPack 5.1.3），它能够更新整个 QSPI 内容，使其为 JetPack 6.x 做好准备。  

我们将运行一个特殊工具，以便在下次启动时自动运行整个 QSPI 更新。

1. 再次检查您的固件版本是否是最新版本 `35.5.0`( = JetPack 5.1.3)

    一旦它重新启动回 Jetson Linux 系统，在 Jetson 终端上运行以下命令:

    ```bash
    sudo nvbootctrl dump-slots-info
    ```

    您应该看到类似以下内容  **当前版本** 显示为 `35.5.0`。

    ``` { .yaml .no-select }
    Current version: 35.5.0
    Capsule update status: 0
    Current bootloader slot: A
    Active bootloader slot: A
    num_slots: 2
    slot: 0,             status: normal
    slot: 1,             status: normal
    ```

2. 安装 QSPI 更新器 Debian 包以触发整个 QSPI 更新

    在 Jetson 终端上运行以下命令:

    ```bash
    sudo apt-get install nvidia-l4t-jetson-orin-nano-qspi-updater
    ```

    安装 `nvidia-l4t-jetson-orin-nano-qspi-updater` 会自动运行其脚本，以安排在下次启动过程中执行另一次（最终）固件更新，从而使固件为 JetPack 6.x 做好准备。

## 5️⃣ 重启，观察 QSPI 更新，并关闭电源

1. 重启

    一旦安排了 QSPI 更新，请重启您的 Jetson Orin Nano 开发者套件。

2. 观察更新

    您可以在启动过程中观察 QSPI 更新。

3. 关闭电源

    更新完成后，它会重启并尝试启动，但如果 **您不将 SD 卡更换为 JetPack 6.x 的**. 

    因此，您只需通过断开直流电源适配器来关闭开发者套件的电源即可。

    :::danger 警告

    这部分可能会显得非常令人困惑，因为无论是连接的显示器还是调试 UART 都没有显示任何明确的消息，说明接下来需要采取什么行动。

    这里发生的情况是，Jetson 的固件（位于 QSPI-NOR 闪存中）现在已经更新，准备好了 JetPack 6.x SD 卡，但它现在与留在 Jetson 模块插槽中的 JetPack 5.1.3 SD 卡不兼容，因此在重启后它会在启动过程中卡住。

    因此，这个启动停止（或无限重启）没有任何问题. <br />
    只需关闭设备电源并插入新 SD 卡即可。
    :::

</TabItem>

<TabItem value="Firmware 36.x" label="Firmware 36.x">

> 您的 Jetson Orin Nano 已经拥有最新固件，已准备好使用 JetPack 6.x SD 卡。<br />
> 跳至下一节 ([***6️⃣ 使用 JetPack 6.x SD 卡启动***](#6%EF%B8%8F⃣-使用-jetpack-6x-sd-卡启动))

</TabItem>
</Tabs>

## 6️⃣ 使用 JetPack 6.x SD 卡启动

一旦我们知道板载固件已更新且已准备好使用 JetPack 6.x，我们就可以使用 JetPack 6 的 microSD 卡启动 Jetson Orin Nano 开发者套件.

1. 在您的 PC 上下载 SD 卡镜像

    在电脑上，从官方下载 Jetson Orin Nano Developer Kit 的最新 JetPack 6.x 镜像[JetPack page](https://developer.nvidia.com/embedded/jetpack)

    [Jetson Orin Nano Developer Kit - JetPack 6.1 (rev. 1) image](https://developer.nvidia.com/downloads/embedded/L4T/r36_Release_v4.0/jp61-rev1-orin-nano-sd-card-image.zip)

2. 使用 Balena Etcher 将镜像刷入 SD 卡

    将您的 microSD 卡插入 PC 的 SD 卡插槽，并使用 Balena Etcher 将您刚刚下载的镜像刷入 SD 卡.

    如果您的 PC 上没有 Balena Etcher，请从 [Balena官方网站](https://etcher.balena.io/)下载.

    <div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Initial_Setup_Guide_for_Jetson_Orin_Nano_Developer_Kit/balena_etcher.png" style={{width:600, height:'auto'}} />
    </div>

3. 将 **JetPack 6.x** microSD 卡插入 Jetson 模块的插槽中

    <div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Initial_Setup_Guide_for_Jetson_Orin_Nano_Developer_Kit/jetson-orin-nano-dev-kit-sd-slot.png" style={{width:600, height:'auto'}} />
    </div>

4. 通过插入直流电源适配器来开机

5. 完成初始软件设置 (`oem-config`)

6. 确保已安排固件更新。

    JetPack 6.1 （rev 1） SD 卡将在下一个（第 3 个也是最后一个）重启周期中自动安排另一个固件/引导加载程序更新。

    <Tabs>
    <TabItem value="GUI" label="GUI">

    <div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Initial_Setup_Guide_for_Jetson_Orin_Nano_Developer_Kit/nvidia-l4t-bootloader-post-install-notification.png" style={{width:400, height:'auto'}} />
    </div>

    </TabItem>
    <TabItem value="CUI" label="CUI">

    ```bash
    $ sudo systemctl status nv-l4t-bootloader-config
    [sudo] password for jetson: 
    ● nv-l4t-bootloader-config.service - Configure bootloader service
        Loaded: loaded (/etc/systemd/system/nv-l4t-bootloader-config.service; enabled; vendor preset: enabled)
        Active: inactive (dead) since Fri 2024-05-03 13:36:13 PDT; 1min 57s ago
        Process: 11439 ExecStart=/opt/nvidia/l4t-bootloader-config/nv-l4t-bootloader-config.sh -v (code=exited, status=0/SUCCESS)
    Main PID: 11439 (code=exited, status=0/SUCCESS)
    ```

    </TabItem>
    </Tabs>

## 7️⃣ 重新启动并观察固件更新至36.4.2版本

1. 删除旧的电源配置文件

    :::warning 注意
    如果您的 Jetson Orin Developer Kit 之前运行的是 **JetPack 6.0** 或 **JetPack 6.1** ，请在最终登录后执行以下命令并重新启动设备。这可确保 **MAXN** 性能模式在您的系统上可用。
    :::

    我们需要删除旧的 power 配置，为引入 Super config 做准备。

    ```bash
    sudo rm -rf /etc/nvpmodel.conf
    ```

2. 重新启动您的 Jetson Orin Nano 开发者套件（使用 JetPack 6.1（rev.1）SD 卡），以触发最终的固件更新（更新至 36.4.2）。

    <Tabs>
    <TabItem value="GUI" label="GUI">

    在 Ubuntu 桌面上点击电源图标并选择 "**重启...**"。

    </TabItem>
    <TabItem value="CUI" label="CUI">

    ```bash
    sudo reboot
    ```

    </TabItem>
    </Tabs>

3. 观察固件更新

    在启动过程中，您应该会看到以下内容。

    <Tabs>
    <TabItem value="带显示器" label="带显示器">

    <div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Initial_Setup_Guide_for_Jetson_Orin_Nano_Developer_Kit/fw-update_from_36-3-0.jpg" style={{width:600, height:'auto'}} />
    </div>

    </TabItem>
    </Tabs>

    完成后，您将再次启动进入 JetPack 6.1（rev.1），并且底层固件已更新至 36.4.2，这将解锁超级性能。

## 8️⃣ 解锁超级性能

:::warning 注意

如果您的 Jetson Orin 开发者套件之前运行的是 **JetPack 6.0** 或 **JetPack 6.1**，请在最终登录后执行以下命令并重启您的设备。这可以确保 **MAXN** 性能模式在您的系统上可用.

```bash
sudo rm -rf /etc/nvpmodel.conf
```
:::

### 切换到 MAXN 模式

请注意，默认的功耗模式为  **15W**. <br />
要切换到新的功耗模式并解锁增加的性能，请按照以下步骤操作:

1. 点击当前功耗模式 (**15W**)方法是点击 Ubuntu 桌面顶部栏右侧的 NVIDIA 图标.
2. 从菜单中选择  **功耗模式** .
3. 选择 **MAXN** 以启用最大性能.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/Initial_Setup_Guide_for_Jetson_Orin_Nano_Developer_Kit/jons_power-mode-to-maxn.png" style={{width:300, height:'auto'}} />
</div>

## 9️⃣ 在 JetPack 6.x 上开始开发

🎊 **恭喜!** <br />
您的 Jetson Orin Nano 开发者套件已使用 JetPack 6.x SD 卡设置完毕，您已准备好在 JetPack 6.x 上进行开发.

## 下一步

### NVMe SSD 安装

查看[此页面](https://www.jetson-ai-lab.com/tips_ssd-docker.html)用以安装 NVMe SSD 并设置 Docker.

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们的产品体验尽可能顺畅。我们提供几种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>