# 项目主页待补清单

首页文字已按 arXiv:2610.36807 填好，现在只剩图片和少量信息。

## 1. 图片（`static/images/`）

命名约定见 `static/images/README.md`。页面里对应位置都已经留好，替换时把整段
`<div class="setgrpo-placeholder ...">…</div>` 换成 `<img src="static/images/xxx.png" alt="…">`。

- [ ] `preliminary.png` — Figure 1：分数分歧传播 + 策略几何影响局部更新
- [ ] `framework.png` — Figure 2：三个模块总览
- [ ] `results-main.png` — 主结果表（Qwen3.5 / Llama3.2）
- [ ] `risk-calibration.png` — 风险校准曲线与选定阈值
- [ ] `ablation.png` — 消融
- [ ] `social_preview.png` — 1200×630 分享预览
- [ ] `favicon.ico` — 目前还是模板自带的希伯来大学图标，建议替换

## 2. 待确认的文字

- [ ] 作者单位：现在只写了姓名 + † / * 脚注，没有上标单位。确认后补 `<sup>` 与单位行。
- [ ] 若论文后续中稿，把 `<div class="setgrpo-venue">arXiv 2026</div>` 改成会议名（如 `NeurIPS 2026`），
      并同步 `index.html` 顶部 meta 与 `og:title`。
- [ ] 主结果表里的逐 benchmark 数字：确认用截图还是原生 HTML 表格。
- [ ] Figure 2 的题注：核对与论文 Fig. 2 caption 一致。

## 3. 发布相关

- [ ] 在 GitHub 新建 `ArcadiaDream/SetGRPO.github.io` 仓库
- [ ] 推送本目录，Settings → Pages 选择 `main` / root
- [ ] 站点地址确认为 `https://arcadiadream.github.io/SetGRPO.github.io/`
- [ ] 启用后，把代码仓库 README 里被注释掉的 Project Page 徽章打开
- [ ] 若换成自定义域名，同步修改 `index.html` 的 `og:url`

## 4. 可选增强

- [ ] Teaser 视频或 GIF
- [ ] 每个模块的小示意图
- [ ] 交互式结果表（HTML table 便于复制数字）
