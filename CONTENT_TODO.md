# 项目主页待补清单

首页文字与图都已按 arXiv:2610.36807 落位，下面只剩少量待确认项。

## 1. 已完成

- [x] `logo.png` — 页首 logo（900×270，取自论文封面标识），目前只用于 `og:image`
- [x] `intro-panel-a.png` / `intro-panel-b.png` — Figure 1 两个分面，由 `SetGRPO-copy/assets` 的 SVG 转出
- [x] `framework.png` — Figure 2 显示版（2000×614，取自 PDF 内嵌原图）
- [x] `framework-full.png` — Figure 2 原始分辨率（7283×2237），点图在新窗口打开
- [x] 图片卡片：白底圆角容器，窄屏（≤900px）内横向滚动而不是压缩图内文字
- [x] `table1-main-results.png` / `table2-same-backbone.png` — 主结果与同底座对比
- [x] `fig3-training-dynamics.png` / `fig4-risk-calibration.png` — 训练动态与风险校准
- [x] `table5-ablation.png` / `table6-efficiency.png` — 消融与效率
- [x] 作者单位与 † / ✉ 脚注，六位作者主页全部挂链接
- [x] `og:image` / `twitter:image` 指向 `logo.png`（此前引用的 `social_preview.png` 不存在）
- [x] 导航栏 More Research 下拉，14 篇同组论文，桌面悬停 / 移动端点击展开
- [x] 页脚访客地图已移除（免注册计数服务均不可用）
- [x] `favicon.ico` — 取自 logo 的图形标记，四档尺寸（16/32/48/64）+ `favicon-192.png` + `apple-touch-icon.png`
- [x] 根目录 `LICENSE` — CC BY-SA 4.0 全文，与页脚声明一致
- [x] 内容核对：单位、Figure 1/2 图注已按 arXiv:2610.36807 原文修正

## 2. 待确认

- [ ] 若论文中稿，把 H1 前缀 `[arXiv'26]` 改成会议名，并同步顶部 meta 与 `og:title`
- [ ] 主结果表目前是论文截图；如需可复制数字，再换原生 HTML 表格
- [ ] 实验区只放了 Table 1 / 2 / 5 / 6，编号跳过 Table 3（训练配置）与 Table 4（覆盖率与风险记录），读者可能疑惑
- [ ] Figure 只放了 1–4，论文另有 Figure 5–10 及附录图，是否需要补 1–2 张（如 Figure 10 的 policy drift 验证）

## 3. 发布相关

- [x] 仓库 `ArcadiaDream/SetGRPO.github.io` 已建，Pages 走 `main` / root
- [x] 站点地址 `https://arcadiadream.github.io/SetGRPO.github.io/`
- [x] 页面已去掉 Google CDN 依赖（jQuery / FontAwesome / academicons 全部移除），仅剩 Google Fonts
- [ ] 启用后把代码仓库 README 里被注释掉的 Project Page 徽章打开
- [ ] 若换成自定义域名，同步修改 `index.html` 的 `og:url` 与 `sitemap.xml`

## 4. 可选增强

- [ ] Teaser 视频或 GIF
- [ ] 每个模块的小示意图
- [ ] 交互式结果表
- [ ] 自托管 Noto Sans（国内访问 `fonts.googleapis.com` 可能失败，字体退回系统无衬线）
- [ ] 压缩大图：`framework-full.png` 1.2MB、`framework.png` 503KB，可转 WebP
