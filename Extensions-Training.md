# Training Extensions

## Aesthetic Gradients
https://github.com/AUTOMATIC1111/stable-diffusion-webui-aesthetic-gradients

Create an embedding from one or few pictures and use it to apply their style to generated images.

![firefox_FgKg9dx9eF](https://user-images.githubusercontent.com/20920490/197466300-6b042bcf-5cba-4600-97d7-ad2652875706.png)


## Dreambooth
https://github.com/d8ahazard/sd_dreambooth_extension

Dreambooth in the UI. Refer to the project readme for tuning and configuration requirements. Includes [LoRA](https://github.com/cloneofsimo/lora) (Low Rank Adaptation)

Based on ShivamShiaro's repo.

![image](https://user-images.githubusercontent.com/1633844/201434706-2c2744ba-082e-427e-9f8d-af03de204583.png)




## Dataset Tag Editor
https://github.com/toshiaki1729/stable-diffusion-webui-dataset-tag-editor

[日本語 Readme](https://github.com/toshiaki1729/stable-diffusion-webui-dataset-tag-editor/blob/main/README-JP.md)

This is an extension to edit captions in training dataset for [Stable Diffusion web UI by AUTOMATIC1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui).

It works well with text captions in comma-separated style (such as the tags generated by DeepBooru interrogator).

Caption in the filenames of images can be loaded, but edited captions can only be saved in the form of text files.

![picture](https://github.com/toshiaki1729/stable-diffusion-webui-dataset-tag-editor/blob/main/ss01.png)

## training-picker
https://github.com/Maurdekye/training-picker

Adds a tab to the webui that allows the user to automatically extract keyframes from video, and manually extract 512x512 crops of those frames for use in model training.

![image](https://user-images.githubusercontent.com/2313721/199614791-1f573573-a2e2-4358-836d-5655825077e1.png)

**Installation**

- Install [AUTOMATIC1111's Stable Diffusion Webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui)
- Install [ffmpeg](https://ffmpeg.org/) for your operating system
- Clone this repository into the extensions folder inside the webui
- Drop videos you want to extract cropped frames from into the training-picker/videos folder

## Embeddings editor
https://github.com/CodeExplode/stable-diffusion-webui-embedding-editor

Allows you to manually edit textual inversion embeddings using sliders.

![image](https://user-images.githubusercontent.com/98228077/208331138-cdfe8f43-78f7-499e-b746-c42355ee8d6d.png)

## DreamArtist
https://github.com/7eu7d7/DreamArtist-sd-webui-extension

Towards Controllable One-Shot Text-to-Image Generation via Contrastive Prompt-Tuning.

![image](https://user-images.githubusercontent.com/98228077/208331536-069783ae-32f7-4897-8c1b-94e0ae14f9cd.png)

## WD 1.4 Tagger
https://github.com/toriato/stable-diffusion-webui-wd14-tagger

Uses a trained model file, produces WD 1.4 Tags. Model link - https://mega.nz/file/ptA2jSSB#G4INKHQG2x2pGAVQBn-yd_U5dMgevGF8YYM9CR_R1SY

![image](https://user-images.githubusercontent.com/98228077/208331569-2cf82c5c-f4c3-4181-84bd-2bdced0c2cff.png)

## Merge Board
https://github.com/bbc-mc/sdweb-merge-board

Multiple lane merge support(up to 10). Save and Load your merging combination as Recipes, which is simple text.

![image](https://user-images.githubusercontent.com/98228077/208331651-09a0d70e-1906-4f80-8bc1-faf3c0ca8fad.png)

also see:\
https://github.com/Maurdekye/model-kitchen

## embedding-inspector
https://github.com/tkalayci71/embedding-inspector

Inspect any token(a word) or Textual-Inversion embeddings and find out which embeddings are similar. You can mix, modify, or create the embeddings in seconds. Much more intriguing options have since been released, see [here.](https://github.com/tkalayci71/embedding-inspector#whats-new)

![image](https://user-images.githubusercontent.com/98228077/209546038-3f4206bf-2c43-4d58-bf83-6318ade393f4.png)

## Model Converter
https://github.com/Akegarasu/sd-webui-model-converter

Model convert extension, supports convert fp16/bf16 no-ema/ema-only safetensors.

## Hypernetwork-Monkeypatch-Extension
https://github.com/aria1th/Hypernetwork-MonkeyPatch-Extension

Extension that provides additional training features for hypernetwork training, and supports multiple hypernetworks.

![image](https://user-images.githubusercontent.com/35677394/212069329-7f3d427f-efad-4424-8dca-4bec010ea429.png)

## Merge Block Weighted
https://github.com/bbc-mc/sdweb-merge-block-weighted-gui

Merge models with separate rate for each 25 U-Net block (input, middle, output).

## Custom Diffusion
https://github.com/guaneec/custom-diffusion-webui

Custom Diffusion is, in short, finetuning-lite with TI, instead of tuning the whole model. Similar speed and memory requirements to TI and supposedly gives better results in less steps.

## Embedding Merge
https://github.com/klimaleksus/stable-diffusion-webui-embedding-merge

Merging Textual Inversion embeddings at runtime from string literals.
