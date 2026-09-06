# TIMBER — Technical Architecture

## Architecture direction
TIMBER will start as a modular Next.js application using React, TypeScript, and Tailwind CSS. Next.js server-side capabilities will host application/backend behavior initially. PostgreSQL with Prisma is the planned persistence layer. This is intentionally a modular monolith, not a microservice system.

## Layers
- **Presentation:** App Router pages, layouts, accessible reusable components.
- **Application/domain:** product, cart, checkout, order, account, and admin use cases separated from UI.
- **Infrastructure:** Prisma/PostgreSQL, authentication provider, Razorpay, and future shipping provider adapters.
- **Shared:** validation, types, formatting, and small utilities.

## Planned structure
```text
app/                 routes, layouts, API/server endpoints
components/          reusable UI grouped by domain
 data/                seed/static development data when appropriate
lib/db/              Prisma/database access
lib/auth/            authentication integration
lib/payments/        payment gateway adapter
lib/shipping/        shipping adapter
lib/validations/     shared schemas and input validation
lib/utils/           small framework-independent utilities
prisma/              schema, migrations, seed
public/               original/licensed static assets
types/                shared domain types
tests/                unit, integration, e2e
docs/                 durable project documentation
```

## Data principles
Products are catalog entities; ProductVariant is the sellable unit for SKU, size, color, price, and stock. Orders must snapshot commercially relevant values so historical orders do not change when catalog data changes. Inventory operations must be transactional and server-controlled.

## API/server principles
Prefer server actions or route handlers where appropriate. Keep payment, inventory, pricing, coupon, and authorization decisions on the server. Validate external input at boundaries. Keep provider-specific code behind small adapters so payment/shipping vendors can be changed later.

## Authentication
Provider to be selected during implementation. Sessions/tokens must be handled with a secure, documented strategy. Admin authorization must be explicit and server-enforced.

## Payments
Razorpay is the planned primary gateway. Create payment orders server-side, verify signatures/webhooks server-side, and make order/payment transitions idempotent. Never accept a client-reported successful payment as proof of settlement.

## Shipping
A shipping adapter will isolate Shiprocket or another provider. The final provider is a product/operations decision, not an architectural dependency baked into the UI.

## Caching and performance
Use Next.js rendering/caching deliberately. Cache public catalog data where safe; never cache personalized account, cart, checkout, payment, or authorization-sensitive responses incorrectly.

## Observability
Before launch, add structured server logging, actionable error reporting, audit events for sensitive admin/order/payment operations, and basic business metrics. Avoid logging secrets or unnecessary personal data.

## Environment
Configuration is supplied through environment variables. `.env.example` documents names only. Production secrets belong in the deployment secret manager.

## Testing architecture
Unit tests cover pure business logic; integration tests cover database/server boundaries; E2E tests cover critical customer and admin journeys. Payment integrations should use test credentials/sandbox behavior in non-production environments.

## Phase 0 decision
No production framework scaffold or runtime dependencies are forced into the repository yet because the requested phase is foundation/documentation. The next implementation phase should create the Next.js TypeScript application and validate the chosen dependency versions before adding domain infrastructure.
