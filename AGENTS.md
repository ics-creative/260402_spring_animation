# AGENTS

## Goal

Keep every demo easy to scan in a few seconds.
Prefer deleting code to abstracting it.

## Core Rules

- Be simple first.
- Do not add structure, wrappers, helpers, or tokens unless they clearly reduce repeated code.
- If something is used once, keep it local.
- If something is shared, prefer an existing pattern in `examples/common.css` before adding a new one.

## HTML

- Use the smallest meaningful element.
- Do not use `section` without real sectioning meaning.
- Do not keep meaningless attributes such as unnecessary `type="button"` or `type="module"`.
- Avoid redundant accessibility attributes.
- For icon-only buttons, keep the accessible name clear.
- No aria better than bad aria.

## CSS

- CSS nesting is required. Keep related selectors inside the parent block.
- Reuse existing color tokens. Do not add near-duplicate tokens.
- Color variables must use the `--color-*` prefix.
- Prefer simple values over overly precise ones.
- Use `color-mix(in oklab, ...)` when mixing colors.
- Keep shared styles in `examples/common.css`.
- Keep comments short and only for non-obvious shared rules.

## JavaScript

- Write code for readability, not cleverness.
- Prefer top-level `function` declarations.
- If a function is defined inside another function, prefer an arrow function.
- Avoid generic helpers when the demo only needs one direct path.
- Keep JSDoc short and in English.
- Omit useless tags like `@returns {void}`.

## Comments

- Comments must add information, not restate names.
- Keep comments in English.
- For inline SVG markers, prefer short symbolic comments such as `<!-- 📈 -->`.
- If a JSDoc is one sentence, keep it on one line.

## File Naming

- Demo file names should be as short as possible while still clear.
- Prefer names like `11_dialog.html`, not `11_launch_dialog.html`.

## Verification

- Run `npm run fix` after edits and before finishing.
- Open changed demos in a browser and verify the actual motion and layout.
- Remove temporary scripts, screenshots, and validation files before finishing.
