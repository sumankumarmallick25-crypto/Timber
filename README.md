# TIMBER

Modern men's fashion ecommerce for India.

## Phase 1 — Storefront foundation

The repository now contains the first real Next.js storefront layer: a responsive editorial homepage, shop collection route, metadata, design tokens, loading state, 404 state, typed sample product data, and ESLint/TypeScript/Tailwind configuration.

### Current status

- **Implemented:** storefront UI foundation and original TIMBER visual direction.
- **Not implemented yet:** database, Prisma schema, authentication, real product persistence, cart state, checkout, Razorpay, shipping, admin, reviews, coupons, and production observability.
- **Important:** GitHub edits have been made directly, but this connector cannot run `npm install`, `npm run lint`, or `npm run build` inside the repository. A lockfile has therefore not been generated here. Before deployment, install dependencies locally/CI and commit the generated lockfile.

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS v4
- PostgreSQL + Prisma (planned for Phase 2)
- Razorpay (planned for checkout)

## Development

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

See `docs/PRD.md`, `docs/ARCHITECTURE.md`, and `docs/ROADMAP.md` for the durable product plan.
