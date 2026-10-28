# SetGRPO 项目页与仓库门面 · 进度

参考对象：

- 项目页：https://lee-zixu.github.io/COMBINER.github.io/ （Academic Project Page Template）
- 代码仓库：https://github.com/iLearn-Lab/TIP26-COMBINER

论文：https://arxiv.org/abs/2610.36807
代码：https://github.com/ArcadiaDream/SetGRPO

本地产物：

- 站点：`C:\Users\31044\Desktop\SetGRPO.github.io`
- 代码：`C:\Users\31044\Desktop\SetGRPO`

---

## 阶段 0 · 素材 ✅

已从 arXiv 取得：标题、作者、†/* 脚注、摘要、benchmark 与模型族、风险与同底座对比数字。
仍缺：作者单位、论文原图。

## 阶段 1 · 站点骨架 ✅

导航、Hero、卡片网格、占位框、移动端断点、FontAwesome 字体补齐。

## 阶段 2 · 主页内容 ✅（图待补）

已写入：

- 标题 `SetGRPO: Calibrating Grader-Induced Policy Optimization`，venue chip 为 `arXiv 2026`
- 作者 6 人，`†` 项目负责人（Zixu Li）、`*` 通讯作者（Yupeng Hu），与论文脚注一致
- 链接：arXiv / PDF / Code / BibTeX
- 摘要：按 arXiv 原文分三段，三个模块名加粗
- 新增 `Why Score Discrepancies Propagate` 小节，对应论文 Section 3 的 preliminary study
- 方法三卡片：按论文表述重写
- 实验：十个 benchmark / 三个领域、Qwen3.5 与 Llama3.2、同底座 57.56（+1.50）与 +1.47、
  `τ_sel = 0.25`、`β = 0.08`、ECR 0.0548 / 0.0554
- BibTeX：`@misc` + eprint 字段

待补：5 处图片占位、作者单位、Figure 2 题注与论文核对。

## 阶段 3 · 仓库 README ✅

`C:\Users\31044\Desktop\SetGRPO\README.md` 重写为 TIP26-COMBINER 同构：
标题 + 作者 + 徽章 + Introduction + News + Key Features + Pipeline + Repository Structure +
Installation + Quick Start + Experiment Results + What Is Not Shipped + Citation +
Acknowledgements + Contact + License。

所有命令与目录都对应仓库中真实存在的文件；项目页徽章先以注释保留，等 Pages 上线再打开。

## 阶段 4 · 仓库工程化 ✅

- 新增 `CITATION.cff`（software + preferred-citation 两段）
- `.gitignore` 复核：已有 `__pycache__/`、`*.py[cod]`、`checkpoints/`、`outputs/`、`.env`
- `git ls-files` 复核：没有已跟踪的 `.pyc`，无需清理

## 阶段 5 · 发布（等你操作）

1. 新建 `ArcadiaDream/SetGRPO.github.io`（public）
2. 推送 `C:\Users\31044\Desktop\SetGRPO.github.io`
3. Settings → Pages → `main` / root
4. 访问 `https://arcadiadream.github.io/SetGRPO.github.io/` 验收
5. 验收通过后，把 README 里注释掉的 Project Page 徽章打开

## 剩余清单

见 `CONTENT_TODO.md`：主要是 7 张图、作者单位、venue 后续更新。
