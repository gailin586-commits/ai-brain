---
name: scene-mp
description: "场景MP（影视数字接景与超写实CG场景资产管线）：专用于电影级Matte Painting、蓝幕/绿幕摄影棚实入射击数字接景、3D白模到超写实空镜的受控多阶段转换。严格锁定3D空间透视与构图基准，深度解耦与融合实拍置景微观表面、宏观自然地质及真实光学天候，分阶段执行白模大形重构、置景表面置换、全要素电影母图生成与局部高精光影精修，杜绝搓衣板分格、片场噪音污染与AI塑料感。"
---

# 场景MP · 影视数字接景与超写实场景资产管线 (Scene Matte Painting Pipeline)

本技能专为**影视级数字接景（Matte Painting / Set Extension）、大尺度地质空镜资产制作、以及从 3D 白模到超写实成片的受控转换**而设计。

它将传统好莱坞/院线视效工业的接景管线（Layout 白模 → Lookdev 材质开发 → Matte Painting 绘制 → Comp 缝合）完整映射并驯化为 AI 的多阶段精准控图工作流，彻底解决 AI 生成中的“构图失控、地质假分格、搓衣板纹理、片场噪音污染、光影平淡及全图重绘像素蠕动”等致命硬伤。

用户可直接说：“**调用场景MP**”、“**场景MP**”或提出任何数字接景/白模写实化资产需求。

---

## 一、 第一核心准则：客观专业指正与方案优化

在执行任何场景 MP 任务时，必须以**电影视效物理因果律、地质运动学规律与 AI 扩散生成逻辑**为唯一准绳：
1. **严禁盲目顺从**：当用户的参考图存在片场环境污染（蓝幕反光、威亚、灯架）、白模本身带有等距几何硬伤（如人工阶梯/搓衣板）、或者试图用全图重绘代替局部接戏时，**必须第一时间明确指出问题与技术隐患，严禁迎合顺从**。
2. **必须提供工业级替代方案**：指出问题的同时，必须给出可落地的解耦方案（如前置硬裁切、选区局部重绘 Inpainting、正负向提示词物理翻译）。

---

## 二、 参考图职责与分工解耦体系 (Reference Image De-coupling)

在电影数字接景管线中，**多张参考图绝不混用，严禁全图加权杂交**。每张图必须拥有独立、排他的工程职责：

| 参考图角色 | 核心职责（必须采纳） | 严格排除与禁止项（严禁采纳） | 关键工程避坑要求 |
| :--- | :--- | :--- | :--- |
| **图1：3D 白模 / 空间基准**<br>`[Spatial & Layout Baseline]` | • 16:9 画幅、摄影机高度、俯仰角与焦距<br>• 画面透视、景别与地平线/云海高度线<br>• 主体岩体轮廓、连续性、朝向与遮挡关系<br>• 远景山体层层后退的层次与树位锚点 | • 不供表面画法与分格（若白模有假台阶需清除）<br>• 不供材质贴图、不供色彩、不供最终影调 | 白模决定空间生死。一旦确定，后续阶段**严禁全图重绘破坏远景山脊与地平线**。 |
| **图2：实拍置景 / 接戏基准**<br>`[Physical Set Practical Spec]` | • 摄影棚实体假山的微观表面质感<br>• 片状剥落的岩皮、密而浅的横向节理<br>• 崩口、剥蚀浅凹坑、风化钝棱与粗糙度<br>• 阴影凹陷处的曲率脏迹与风化水渍 | • **严禁引入**：棚顶、钢架桁架、吊灯、电缆<br>• **严禁引入**：蓝幕/绿幕、威亚吊索、地面布料、人员<br>• 不供整体块体排列方式、不供机位透视 | **【强制前置操作】** 必须对图2执行**硬裁切（Crop）**，切除 80% 的片场环境，仅保留 100% 纯粹的置景岩石，杜绝蓝光溢色与线条污染！ |
| **图3：宏观地质范本**<br>`[Macro Tectonic Geology]` | • 真实自然大山体的巨型板块连续性<br>• 少数几道深长贯通上下的大主节理（纵向劈裂）<br>• 宽达数十米无分格的完整平整盘面<br>• 崖顶完整断面线与天然重力崩落体量 | • 不搬入其山峰构图、机位、地平线与前景<br>• 不照搬其植被密度与山顶人工建筑 | 确立“纵向大板块为主，横向微剥落为辅”的地质层级，调解置景假山与天然花岗岩的地质冲突。 |
| **图4：光学与天候来源**<br>`[Optics, Atmosphere & Grade]` | • 晴朗高空的纯净天蓝渐变与天顶衰减<br>• 5200K 暖白日光与 5600K 摄影机自然白平衡<br>• 真实空气透视的连续衰减（远处暗部被散射抬起）<br>• 植被真实色彩（低饱和橄榄绿/暗墨绿）与明暗差异 | • 不供山体布局、机位、透视与构图<br>• 不照搬无云天气（保留图1云海高度）<br>• 不将画面整体调成俗套的糖水风景明信片 | 确立电影级曝光宽容度（ARRI Alexa LogC / 胶片高光滚降），拒绝逐区域提亮与假锐化。 |

---

## 三、 四阶段标准化生产管线 (Standard 4-Stage Pipeline)

在场景 MP 工作流中，严禁试图“一段长咒语一步出图”。必须遵循严谨的**四步资产接力流程**：

```
[阶段一：白模骨架修整] ──> [阶段二：置景微观表面置换] ──> [阶段三：写实电影母图生成] ──> [阶段四：高精局部精修与调色]
   (消除假台阶/立大形)           (填入实拍岩石凹凸微起伏)         (融合地质/日光/云海全要素)         (消砂纸噪点/拉大光比/锁空间)
```

---

### 阶段一：白模骨架与大形重构 (Clay Blockout Refinement)
* **目标**：以图1（旧白模）为空间基准，以图3（真实绝壁照片）为地质范本，清除旧白模上的等距阶梯、搓衣板分格与密密麻麻的小碎块，建立**数块巨大、贯通上下、内部无分格的 3D AO 素模**。
* **执行方式**：
  1. 采用纯素模材质语言：`Clay render, ambient occlusion pass, monochromatic neutral grey matte material, untextured`。
  2. 严格使用 **选区局部重绘（Mask Inpainting）**：仅涂抹左侧崖壁区域，将右侧远景山脊与云海 100% 冻结。
  3. 正向语言强调构造断裂：`colossal monolithic vertical granite slabs, seamless continuous rock face from top to bottom, only 2 to 3 deep vertical joint fissures, tens of meters wide tectonic rock planes`。
  4. 专用负向严格屏蔽人造几何：`horizontal terraces, staircase pattern, brick grid, repetitive ridges, washboard ripples, textures, colors`。

---

### 阶段二：置景微观表面置换 (Surface Displacement Pass on Clay)
* **目标**：在保持阶段一巨型盘面大形不变的前提下，将图2（片场实拍置景）的真实岩皮剥落、浅节理、崩口凹坑填入盘面内部，**仍输出无色彩贴图的素模**。
* **执行硬伤防范**：
  1. **严禁直接输入未裁切的影棚全景**：必须裁切至纯岩石表面。
  2. **严禁在素模阶段使用色彩词汇**：禁用 `moss`（苔藓）、`water stain`（水渍），改用 3D 渲染器语言：`curvature occlusion, micro-cavities, weathered blunt edges, porous granite roughness, cavity ambient darkening`。
  3. 强调“表面起伏而非切块”：明确定位为毫米/厘米级的表面凹凸（Micro-relief），绝不将盘面重新切成碎块。

---

### 阶段三：写实电影级场景母图 (Photorealistic Master Render)
* **目标**：全面汇流——以通过批准的白模为空间锚点，注入图2置景微观质感、图3天然巨型地质、图4晴空日光与大气衰减，生成第一版**可直接进入影视资产库的彩色全景母图**。
* **关键控制项**：
  1. **地质层级调解**：明确“垂直构造为主（Primary Faults），横向剥蚀为辅（Tertiary Flaking）”，防止出现千层酥或砖墙感。
  2. **天光与反射系统**：
     * 直射光：左上 10~11 点钟，仰角 30~40° 暖白侧顺光；
     * 天空补光：开阔背光面由天空漫射提供通透冷灰，严禁压成死黑；
     * 环境反弹：主要来自谷底厚云海的大面积向上散射，赋予岩壁下部柔和暖灰，阻断片场蓝幕反光。
  3. **植被自然落位**：松树仅在裂隙与积土台地成簇生长（2~5株一组），盘面中央纯裸岩，叶色为低饱和墨绿/灰橄榄绿。

---

### 阶段四：高精局部精修与光影调色 (LookDev & High-Precision Polish)
* **目标**：解决母图中残留的“程序化噪点/砂纸感”、光影动态范围偏平、以及空气层不够深邃的问题，完成**最后 10% 的院线级质感跃迁**。
* **致命红线（行百里者半九十）**：
  * **【严禁全图黑盒重绘】**：母图中的远山轮廓、云海分界线、树冠枝丫已完全成立。全图重绘会导致微观像素蠕动（Pixel Creeping），使实拍跟踪与接景穿帮。
* **标准施工法则**：
  1. **光影与反差增强（Curve / Contrast Punch）**：拉开受光面与深沟槽的明暗跨度，加深主节理与深坑的遮蔽（AO），消除灰蒙蒙的平淡感。
  2. **岩壁选区高频重绘（Masked Inpaint Detail Pass）**：仅框选岩壁受光面，重绘幅度控制在 0.35~0.45，注入真实花岗岩大片解理面与钝棱，洗去均匀砂纸颗粒。
  3. **空气衰减连续性核查**：确认远山暗部被高空薄霾光连续抬起，近景黑位扎实，中远景反差收敛。

---

## 四、 工业级提示词组织脚手架 (Prompt Scaffold)

### 1. 阶段一 / 阶段二：3D 素模提示词模板 (Clay / AO Pass)
```markdown
[3D Render Type]: Clay render, ambient occlusion pass, 3D viewport preview, monochromatic neutral grey matte stone material, untextured surface.
[Composition & Geometry]: 16:9 aerial panoramic perspective, massive monolithic vertical sheer cliff on the left occupying half frame, colossal unsegmented tectonic granite plates tens of meters wide, seamless vertical continuity from bottom to top edge, only 2-3 deep primary fault crevices, vast smooth rock planes.
[Surface Micro-Relief]: Flaking weathered rock crust, subtle fine horizontal fissures, sparse shallow chipping craters, rounded eroded blunt edges, porous stone micro-roughness, ambient occlusion in deep cavities without segmenting into separate blocks.
[Environment & Light]: Layered volumetric sea of clouds in valley floor, receding mountain peaks in right distance, single soft key light from top-left, realistic ambient occlusion shadows in crevices, strictly no specular glare.
[Negative Prompt]: textures, colors, photorealistic, green, blue, foliage, horizontal terraces, staircase pattern, brick grid, washboard ripples, noisy details, glossy, plastic.
```

### 2. 阶段三 / 阶段四：写实彩色母图提示词模板 (Photorealistic Master Pass)
```markdown
[Cinematic Profile]: Cinematic wide-angle establishing shot, 16:9 aspect ratio, live-action film VFX matte painting quality, ARRI Alexa color balance, natural film dynamic range.
[Environment & Camera]: 85mm full-frame perspective, colossal monolithic sheer granite cliff on the left towering from bottom to top, vast smooth valley sea of clouds with volumetric daylight response, receding dramatic granite peaks in the right distance.
[Geological Surface]: Giant tectonic granite slabs, massive continuous vertical fault plates, subtle horizontal weathered flaking rock crust, natural chipped fissures and craters, porous stone roughness, matte diffuse granite with subtle warm ochre mineral veins, seamless large rock faces.
[Vegetation & Foliage]: Ancient pine trees anchored naturally in rock crevices and ledges in clusters of 3-5, low-saturation deep olive-green and muted moss green, organic branch occlusion, bare rock on main plates.
[Lighting & Optics]: Crisp 5200K daylight side-lighting from top-left (10-11 o'clock, 35° elevation), realistic cool grey sky ambient bounce in open shadows, bright upward ambient bounce from cloud sea, deep crevices naturally dark without dead black, atmospheric haze contrast compression on distant peaks, gradient clear blue sky with thin horizon stratus clouds.
[Negative Prompt]: blue screen, studio lights, trusses, wires, rigging, actors, walkway, boardwalk, railings, tourists, repetitive steps, staircase terraces, brick pattern, washboard ridges, 3d render look, procedural noise, oversaturated, plastic shine.
```

---

## 五、 十道质量验收门 (Quality Gates)

在交付任何阶段产物前，必须按以下顺序逐条核对：
1. **构图基准门**：16:9 画幅、机位俯仰、长焦压缩感、左侧巨崖占据画幅比例是否与图1绝对一致？
2. **结构大面板门**：左侧巨崖是否为少数几块数十米宽的连续大板块？是否彻底消除了等距横条与小碎砖？
3. **主节理控制门**：主沟槽是否为个位数且纵向贯通上下？大部分崖面是否保留为完整的平整盘面？
4. **表面微观内容门**：岩石表面是否有真实的片状剥落、崩口凹坑与风化钝棱？这些内容是否仅作为微起伏而非切块？
5. **片场污染清零门**：是否彻底消除了摄影棚桁架、吊灯、电缆、威亚线条、蓝幕/绿幕反射及人造构筑物？
6. **光向一致性门**：直射主光是否严格来自左上方（10-11 点）？阴影走向是否统一？有无违背物理的悬浮发光？
7. **暗部层次门**：深沟槽与背光面是否通透？是否有天空冷灰补光与云海漫反射？严禁死黑或全图染蓝。
8. **空气纵深衰减门**：视线穿过的空气层越多，远山反差是否连续收敛？暗部是否被天光自然抬起？
9. **植被生态合理门**：松树是否仅长在有积土的缝隙平台？叶色是否为克制的低饱和橄榄绿/墨绿？
10. **防全图漂移门**：在后期精修阶段，是否采用了局部重绘（Inpaint）而非全图重绘？远山边缘与跟踪基准是否坚固不移？
