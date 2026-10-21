# 运镜规范与场面调度（Camera & Staging）

> 本文件用于沉淀 AI 影视生成中的摄影机运动规范、重力物理力学与镜头叙事逻辑。宿主分享的优秀运镜手法与提示词结构在此持续归档。

---

## 1. 镜头运镜撰写“五大基石法则”

在向 Runway、Luma、Kling 等视频生成模型下达运镜提示词时，按以下 5 条逻辑结构组织：

1. **机位初始状态与景别（Start Frame & Shot Size）**：明确镜头开始时的视角（如：`Extreme close-up`, `Medium shot`, `Low angle`）。
2. **单一核心运动动势（Primary Camera Motion）**：明确单一维度的相机运动轨迹，避免同时混合 3 种以上剧烈运动（如：`Slow push-in`, `Smooth tracking shot left-to-right`, `Steadicam follow`）。
3. **主体动作与相对位移（Subject Motion & Interaction）**：明确画面中角色的物理动作，且动作必须符合力学逻辑与惯性。
4. **终点帧构图（End Frame Composition）**：提示镜头运动在何处停止或过渡到什么构图（如：`settling on a tight close-up of their trembling hands`）。
5. **运动速率与阻尼感（Motion Speed & Momentum）**：控制运动节奏，拒绝机械匀速，加入减速或平稳阻尼词汇（如：`slow deliberate momentum`, `gradual deceleration`）。

---

## 2. 消除 AI “漂浮感”与赋予物理重量

- **接触面与支撑反作用力**：
  - 脚踩地面、手扶桌面时，必须描述微小的材质形变或压迫痕迹（如：`heavy boots crushing gravel with slight dust kicking up`）。
- **重力与惯性沉浮**：
  - 角色在起步、急停或转身时，头部与身体躯干存在微小的惯性延迟（`natural secondary motion of hair and fabric following momentum`）。
- **呼吸感而非机械静止**：
  - 即使是静止镜头，也应注入微弱的呼吸感或手持微晃（`subtle handheld camera organic drift`, `natural physiological sway`），防止画面宛如定格死人。

---

## 3. 经典电影级运镜词汇库（实战中英文对照）

| 运镜手法 | 英文提示词推荐 | 视听情绪与适用场景 |
| :--- | :--- | :--- |
| **缓推推进** | `slow deliberate slow push-in, dolly in` | 强化紧张感、聚焦角色心理变化或重大发现 |
| **缓拉后退** | `slow smooth dolly-out revealing surrounding environment` | 孤独感、宿命感，或展现主体在宏大空间中的渺小 |
| **低机位跟随** | `low-angle tracking shot following walking footsteps` | 压迫感、行进动力、英雄感或悬疑追踪 |
| **环绕运镜** | `controlled 90-degree orbit around the subject` | 时空凝固、内心抉择瞬间，注意控制幅度不超过 180 度以防变形 |
| **主观视线推进** | `first-person POV slow forward movement, subtle head-bob` | 沉浸感、第一视角探索未知危险环境 |
