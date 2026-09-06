# TIMBER

Modern men's fashion ecommerce for the Indian market.

## Status
Phase 0 — project foundation. Documentation and repository scaffolding are being established. The production storefront, database, authentication, payments, shipping, and admin systems are **not implemented yet**.

## Product vision
TIMBER aims to provide a premium, modern, masculine, and accessible shopping experience for Indian men, beginning with T-shirts, shirts, trousers, jeans, cargos, and co-ords.

## Technology direction
- Next.js + React + TypeScript
- Tailwind CSS
- PostgreSQL + Prisma
- Secure authentication (provider to be selected during implementation)
- Razorpay for Indian payments
- Shipping provider such as Shiprocket, to be finalized
- Vercel-compatible deployment direction

## Documentation
- [Product Requirements](docs/PRD.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Roadmap](docs/ROADMAP.md)
- [Security](docs/SECURITY.md)
- [Contributing](docs/CONTRIBUTING.md)

## Planned structure
```text
app/ components/ data/ lib/ prisma/ public/ types/ tests/ docs/ .github/ .env.example
```

## Environment
Copy `.env.example` to `.env.local` during implementation and provide values locally. Never commit secrets.

## Development
Implementation commands will be added when the application scaffold is introduced. Do not add unnecessary dependencies during Phase 0.

## Branding
TRIPR is used only as inspiration for ecommerce UX quality. TIMBER must use original branding, copy, visuals, code, and product content.

## Security warning
Never commit `.env`, `.env.local`, API keys, database credentials, payment secrets, webhook secrets, or private tokens.

## License
To be decided before public production release.
