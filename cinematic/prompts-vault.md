# 工业级实战 Prompt 与参数库（Prompts Vault）

> 本文件用于沉淀经实测效果优秀的 AI 影视提示词、特定场景/光影配方及平台参数。

---

## 1. 结构化影视提示词标准公式（通用范式）

一个具备高信噪比、能够精准被多模态大模型理解的提示词，遵循以下 6 层递进结构：

```text
[主镜头景别与运镜] + [核心主体与生理状态] + [微表情与具体微动作] + [场景环境与空间深度] + [光影动机与色彩体系] + [光学质感与摄影机规格]
```

### 示例模版（电影级写实画面）
> **Prompt**: `Medium close-up shot, slow push-in. A tired detective in his late 40s with rugged facial stubble and visible eye fatigue, holding a weathered leather notebook under trembling fingers. Rain-slicked dimly lit alleyway at 3 AM, steam billowing from a nearby manhole vent in the background. Practical sodium-vapor street lamp casting harsh amber overhead light, deep realistic falloff shadows with cool blue ambient fill. Shot on 35mm anamorphic lens, Arri Alexa Mini, subtle organic film grain, shallow depth of field, photorealistic cinematic realism. --no oversaturated, 3d render, plastic skin, video game, anime, blur, extra limbs`

---

## 2. 负向提示词词库（防 AI 感与防塑料感红线）

无论在 Midjourney、Flux 还是各种视频模型，加入以下控制词可大幅抑制“一眼假”的塑料感：

```text
oversaturated, glossy skin, plastic doll look, octane render, unreal engine 5, 3d render, excessive airbrushing, airbrushed textures, bad anatomy, deformed limbs, floating objects, jittery movement, uncanny valley, watermark, bad hands, symmetrical alien eyes
```

---

## 3. 宿主实测优质 Prompt 归档专区

> *(每次宿主在对话中提供测试满意的镜头 Prompt 时，由 AI 追加记录到下方)*

- **【归档项 001】**：（待追加）
