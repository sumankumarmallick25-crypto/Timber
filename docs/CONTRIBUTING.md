# Contributing to TIMBER

## Workflow
Use small, focused changes. Inspect existing work before editing. Keep documentation and implementation aligned.

## Branches
- `main` — stable/default branch
- `develop` — integration branch when the team adopts it
- `feature/*` — new functionality
- `fix/*` — bug fixes
- `refactor/*` — structural/code-quality changes

For a solo early-stage workflow, working directly on `main` may be acceptable for small documentation changes, but feature work should move to branches once implementation begins.

## Commits
Use Conventional Commit-style messages, for example:
- `chore: initialize TIMBER project structure`
- `docs: add product requirements`
- `feat: add product collection grid`
- `fix: prevent duplicate cart items`
- `test: cover checkout validation`

Avoid meaningless messages such as `update`, `changes`, or `test`.

## Pull requests
Keep PRs focused. Describe the problem, solution, testing performed, and any known limitations. Do not merge unfinished work simply to make the repository appear complete.

## Code quality
Use TypeScript safely, meaningful names, reusable components, clear separation of UI and business logic, and minimal duplication. Avoid giant components and unnecessary abstractions.

## Testing
Add or update tests for behavior that matters. Critical commerce flows must have automated coverage before production. Run lint/type checks/tests appropriate to the change.

## Environment
Use `.env.local` for local secrets and `.env.example` as the documented template. Never commit credentials.

## Design and content
TIMBER must maintain its own visual identity. Do not copy TRIPR assets, code, product text, HTML/CSS, or scraped content. Use original or properly licensed assets.

## Review checklist
Before requesting review: documentation updated, tests added where applicable, no secrets, no unrelated changes, accessibility considered, mobile behavior considered, and known limitations documented.
