# SetGRPO project page

Project page for **SetGRPO: Set-Valued Group Relative Policy Optimization**.

- Code: https://github.com/ArcadiaDream/SetGRPO
- Built on the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template) (Nerfies), CC BY-SA 4.0.

## Local preview

```bash
python -m http.server 8000
# open http://localhost:8000
```

## Structure

```
.
├── index.html              # all page content
├── static/
│   ├── css/
│   │   ├── bulma.min.css   # layout framework
│   │   ├── index.css       # template overrides
│   │   └── setgrpo.css     # SetGRPO-specific styles
│   ├── js/
│   │   └── index.js        # "More Research" dropdown only
│   └── images/             # paper figures (see images/README.md)
├── sitemap.xml
├── .nojekyll               # serve static files as-is on GitHub Pages
└── CONTENT_TODO.md         # what still needs to be filled in
```

## Editing

- Page content: `index.html`.
- Navigation, figures, captions: `static/css/setgrpo.css`.
- Figures: `static/images/`, filenames listed in `static/images/README.md`.

## Conventions

- The page is self-hosted apart from Google Fonts. Do not add CDN dependencies:
  Google-hosted scripts are unreachable on some networks and take the whole
  page's JavaScript down with them. Icons are inline SVG for this reason.
- Bump the `?v=` query on `setgrpo.css` and `index.js` whenever either file
  changes, otherwise browsers keep serving the cached copy.
- Bump `<lastmod>` in `sitemap.xml` on content changes.
