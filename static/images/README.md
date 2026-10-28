# 图片目录

论文原图放到这个目录，文件名按下面约定命名，`index.html` 里已经留好了对应的位置。

| 文件名 | 用途 | 页面位置 |
| --- | --- | --- |
| `framework.png` | 框架总览图 | Method → Framework |
| `ablation.png` | 消融实验 | Experiments |
| `risk-coverage.png` | 风险/覆盖率曲线 | Experiments |
| `results-*.png` | 各 benchmark 主表 | Experiments（可多张） |
| `social_preview.png` | 社交预览图，1200×630 | 只在 meta 标签中使用 |
| `favicon.ico` | 站点图标 | 浏览器标签页 |

建议：

- PNG 或 WebP，单张宽度 1600–2400 px，避免超过 1 MB。
- 表格类图导出时保留白底，字重不要太细，缩到页面宽度后仍然可读。
- 替换 `index.html` 里的占位块时，把整段 `<div class="setgrpo-placeholder ...">...</div>` 换成
  `<img src="static/images/xxx.png" alt="...">`，并在下面补一句 `<p class="setgrpo-caption">`。

模板自带示例图（`carousel1.jpg` 等）没有被页面引用，可以直接删除。
