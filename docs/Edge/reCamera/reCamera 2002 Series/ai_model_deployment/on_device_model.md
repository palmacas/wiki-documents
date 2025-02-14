---
description: Supported models by default
title: On Device Models
keywords:
  - Edge
  - reCamera
  - model
  - computer vision
image: https://files.seeedstudio.com/wiki/reCamera/013.jpg
slug: /recamera_on_device_models
last_update:
  date: 02/14/2025
  author: Dawn Yao
---

There are other models that you can replace:


| Model                              | Description                                                  | Download Link                                                |
| ---------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| yolo11n_cv181x_int8.cvimodel       | [Ultralytics](https://www.ultralytics.com/) [YOLO11](https://github.com/ultralytics/ultralytics) | [Yolo11n Download](https://files.seeedstudio.com/wiki/reCamera/models/yolo11n_cv181x_int8.cvimodel) |
| yolov8n_cv181x_int8.cvimodel       | Ultralytics YOLOv8                                           | [Yolov8n Download](https://files.seeedstudio.com/wiki/reCamera/models/yolov8n_cv181x_int8.cvimodel) |
| person_cv181x_int8.cvimodel        | Person recognition model                                     | [Person Detect Download](https://files.seeedstudio.com/wiki/reCamera/models/person_cv181x_int8.cvimodel) |
| gender_cv181x_int8.cvimodel        | Human Gender Identification Models                           | [Gender Detect Download](https://files.seeedstudio.com/wiki/reCamera/models/gender_cv181x_int8.cvimodel) |
| gesture_cv181x_int8.cvimodel       | Hand gesture recognition                                     | [Gesture Detect Download](https://files.seeedstudio.com/wiki/reCamera/models/gesture_cv181x_int8.cvimodel) |
| digital_meter_cv181x_int8.cvimodel | Digit recognition model                                      | [Digital Detect Download](https://files.seeedstudio.com/wiki/reCamera/models/digital_meter_cv181x_int8.cvimodel) |

Yolo11n model classes:

```json
person, bicycle, car, motorcycle, airplane, bus, train, truck, boat, traffic light, fire hydrant, stop sign, parking meter, bench, bird, cat, dog, horse, sheep, cow, elephant, bear, zebra, giraffe, backpack, umbrella, handbag, tie, suitcase, frisbee, skis, snowboard, sports ball, kite, baseball bat, baseball glove, skateboard, surfboard, tennis racket, bottle, wine glass, cup, fork, knife, spoon, bowl, banana, apple, sandwich, orange, broccoli, carrot, hot dog, pizza, donut, cake, chair, couch, potted plant, bed, dining table, toilet, tv, laptop, mouse, remote, keyboard, cell phone, microwave, oven, toaster, sink, refrigerator, book, clock, vase, scissors, teddy bear, hair drier, toothbrush
```

We also provided a build-in dashboard UI example where you can preview the video stream, change the desire models. You can freely twist and integrate with your own application. [More work in progress...]