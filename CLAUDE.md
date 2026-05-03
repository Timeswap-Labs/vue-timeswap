@AGENTS.md

## Claude Code

- Use the path-scoped frontend rules under `.claude/rules/frontend/` for Next.js App Router work, responsive layout, reusable layout primitives, accessibility, and web3 frontend implementation.
- `.agents/rules/` mirrors the same canonical rule files from `.claude/rules/`, so update the canonical `.claude` rule tree rather than maintaining two separate copies.
- After meaningful UI changes, proactively use the `responsive-reviewer`, `a11y-reviewer`, and `design-system-guard` agents as appropriate.
- Prefer shared layout primitives in `src/lib/ui/layout.tsx` for `Container`, `Section`, `Box`, `Grid`, `Row`, and `Column` patterns instead of repeating long inline layout class chains.
