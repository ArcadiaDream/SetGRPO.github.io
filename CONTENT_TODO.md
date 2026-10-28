# 项目主页待补清单

首页文字与图都已按 arXiv:2610.36807 落位，下面只剩少量待确认项。

## 1. 已完成

- [x] `logo.png` — 页首 logo（900×270，取自论文封面标识）
- [x] `intro-panel-a.png` / `intro-panel-b.png` — Figure 1 两个分面，由 `SetGRPO-copy/assets` 的 SVG 转出
- [x] `framework.png` — Figure 2 显示版（2000×614，取自 PDF 内嵌原图）
- [x] `framework-full.png` — Figure 2 原始分辨率（7283×2237），点图在新窗口打开
- [x] 图片卡片：白底圆角容器，窄屏（≤900px）内横向滚动而不是压缩图内文字
- [x] `table1-main-results.png` / `table2-same-backbone.png` — 主结果与同底座对比
- [x] `fig3-training-dynamics.png` / `fig4-risk-calibration.png` — 训练动态与风险校准
- [x] `table5-ablation.png` / `table6-efficiency.png` — 消融与效率
- [x] 作者单位与 † / ✉ 脚注
- [x] `og:image` / `twitter:image` 指向 `logo.png`（此前引用的 `social_preview.png` 不存在）

## 2. 待确认

- [ ] 若论文中稿，把 `<div class="setgrpo-venue">arXiv 2026</div>` 改成会议名，并同步顶部 meta 与 `og:title`
- [ ] `favicon.ico` 仍是模板自带图标，可换成 logo 的方形版本
- [ ] 主结果表目前是论文截图；如需可复制数字，再换原生 HTML 表格

## 3. 发布相关

- [x] 仓库 `ArcadiaDream/SetGRPO.github.io` 已建，Pages 走 `main` / root
- [x] 站点地址 `https://arcadiadream.github.io/SetGRPO.github.io/`
- [ ] 启用后把代码仓库 README 里被注释掉的 Project Page 徽章打开
- [ ] 若换成自定义域名，同步修改 `index.html` 的 `og:url`

## 4. 可选增强

- [ ] Teaser 视频或 GIF
- [ ] 每个模块的小示意图
- [ ] 交互式结果表
