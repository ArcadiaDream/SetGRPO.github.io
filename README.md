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
│   │   ├── *.min.css       # template styles (Bulma etc.)
│   │   ├── index.css       # template overrides
│   │   └── setgrpo.css     # SetGRPO-specific styles
│   ├── js/                 # template scripts
│   └── images/             # paper figures (see images/README.md)
├── .nojekyll               # serve static files as-is on GitHub Pages
└── CONTENT_TODO.md         # what still needs to be filled in
```

## Editing

- Page content: `index.html`, search for `TODO(phase-2)`.
- Colors, cards, placeholders: `static/css/setgrpo.css`.
- Figures: `static/images/`, filenames listed in `static/images/README.md`.
