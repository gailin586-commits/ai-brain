# AI Shared Brain（个人数字大脑与跨 AI 协作中枢）

> **给所有读取本仓库的 AI Agent（反重力 Antigravity / Cortex / GroundingBot / Cursor / Claude Code）的系统级指令：**  
> 本仓库是宿主（用户）的核心外挂大脑与知识中枢。任何接入、读取或在此工作空间运行的 AI，在回答前必须按需查阅本仓库中的对应文档，并在宿主指示或遇到特定业务场景时，**主动识别并提醒宿主调用对应的专属 Skill**。

---

## 🧭 核心索引与文件导航

| 文件/目录 | 定位与核心内容 | 读取时机 |
| :--- | :--- | :--- |
| **[`skills/`](./skills/)** | **【通用全量 Skill 库（50套）】**：涵盖影视分镜、打斗调度、照片转人脸资产、海外短剧出海、剧本改编、模型 CLI 等 | **遇到相关场景时必须主动提醒并按规范调用** |
| **[`projects/final-stage/`](./projects/final-stage/)** | **【《最终关卡·猛攻机坝》专属生产档案】**：文学剧本 V3、正式分镜表、01–04 提示词与改动实录 | 制作、返修、对接 AZ8/LibTV 镜头时查阅 |
| **[`preferences.md`](./preferences.md)** | **最高协作宪法**：沟通准则、严禁迎合、硬伤直批与回答红线 | **每次对话开始前必须严格遵循** |
| **[`profile.md`](./profile.md)** | 个人背景、AI 影视师核心身份、主力工具链与长期目标 | 涉及技术选型、工作流或长期规划时查阅 |
| **[`projects.md`](./projects.md)** | 当前活跃项目看板（最终关卡、海外短剧、数字大脑） | 涉及具体项目制作或任务排期时查阅 |
| **[`memory-log.md`](./memory-log.md)** | 动态记忆日志：按日期沉淀关键决策、灵感与重要突破 | 记录更新时追加，或回顾过往决策时查阅 |
| **[`cinematic/`](./cinematic/)** | AI 影视工业级资产专区（三视图/四视图、运镜、高质量 Prompt） | 编写镜头提示词、资产设计、分镜推演时查阅 |
| **[`cinematic/visual-quality.md`](./cinematic/visual-quality.md)** | 顶级出图十大检查维度（9.9/10画质控制、空间/光源/材质防塑料感） | 出图、调优 Prompt、质检视觉方案前必读 |
| **[`dashboard.html`](./dashboard.html)** | 大脑具象化全景中枢与 10 大维度自检器 | 本地双击浏览器直开，或随时可视化巡检 |

---

## ⚡ 核心技能地图与场景主动触发规范（Scene-to-Skill Routing）

所有接入本大脑的 AI，当在用户输入或上下文中识别到以下特定场景时，**必须主动提醒宿主并按技能规范提供方案**：

### 1. 影视与动作调度类
- **`final-stage-director`**：提及《最终关卡》、猛攻机坝、张米洋、全片通用视听规范时调用。
- **`cinematic-shot-designer`**：设计专业电影级镜头语言，执行“一镜一职、三段式物理机位、必含微距、背景相对运动、镜头呼吸微颤”。
- **`cinematic-combat-designer`**：动作打斗分镜，执行“动作因果闭环、空间轴线锁定、一镜一招防融化、Speed Ramp 变速机制、受力反馈真实无伤过审”。
- **`photo-to-face-asset`**：用户上传真实人物照片并要求转 AI 角色人脸资产（A正面 / B 3/4侧 / C 90°正侧），自适应成人 vs 幼童骨相。
- **`zy-cinematic-realism`** / **`wangshu-mj-prompt`** / **`oriental-mythic-realism`**：实拍级电影概念、MJ电影质感提示词、东方神话写实场景。

### 2. 海外剧与微短剧工业化全流程（海外短剧血液）
- **`short-drama-director`**：短剧/漫剧工业化编剧与视听导演总控（六道前置锁 + 动作定档）。
- **`sd-overseas-engine`**：海外剧剧本专精（非中文正文、北美真实口语、文化对白校准）。
- **`short-drama`**：微短剧爆款题材模板、四层反派体系与出海英文格式。
- **`write-screenplay`**：长篇小说一键转译专业剧本（支持国内/出海双模式，≤60集压缩）。
- **`sd-combat-engine` / `sd-real-engine` / `sd-xuanhuan-engine`**：写实搏击、警匪追逐、玄幻仙侠打戏专精。

### 3. 画布生产与 CLI 操作
- **`az8-cli`**：AZ8 Studio 画布操作、项目创建、节点配置、Workflow 生成与媒体管理。
- **`libtv-cli`**：LibTV 画布命令行操作、节点管理、素材连线。

---

## 🚀 一键云端同步机制

运行本地目录下的同步脚本即可自动推送至 GitHub 私有仓库：
```powershell
.\sync.ps1
```
或在终端执行标准 git 提交：
```bash
git add .
git commit -m "Update brain knowledge & skills"
git push
```
