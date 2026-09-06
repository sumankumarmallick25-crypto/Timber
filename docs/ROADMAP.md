# TIMBER — Development Roadmap

## Phase 0 — Project Foundation
Repository structure, PRD, architecture, security, contribution rules, environment documentation, and README. **Current phase.**

## Phase 1 — Storefront UI
Scaffold Next.js/TypeScript/Tailwind. Build original TIMBER design system, header/navigation, homepage, shop grid, responsive filters/sorting, product cards, product detail shell, policies, and accessible mobile flows using development data.

## Phase 2 — Product System
Introduce PostgreSQL/Prisma, category/product/variant/image models, seed data, catalog queries, variant-level inventory foundations, and server-side product validation.

## Phase 3 — Cart & Wishlist
Implement guest/authenticated cart persistence, variant-aware quantities, wishlist, pricing display, and server-side cart validation.

## Phase 4 — Authentication
Add secure authentication, profiles, addresses, account pages, sessions, authorization, and protected account/admin boundaries.

## Phase 5 — Checkout & Razorpay
Build checkout, server-side pricing/stock checks, coupon foundations, Razorpay order creation and signature/webhook verification, idempotency, and payment failure handling.

## Phase 6 — Orders & Shipping
Implement order lifecycle, customer order history, shipment adapter, tracking, cancellations/returns/refunds foundations, and transactional inventory updates.

## Phase 7 — Admin Dashboard
Products, variants, inventory, categories, orders, customers, coupons, returns/refunds, and operational analytics with strict admin authorization and auditability.

## Phase 8 — Reviews, Coupons & Advanced Features
Reviews, richer search, recommendations, recently viewed, promotions, advanced coupon restrictions, and additional customer experience features.

## Phase 9 — Testing, Security & Performance
Expand unit/integration/E2E coverage, security review, accessibility audit, Core Web Vitals optimization, observability, error handling, and production readiness checks.

## Phase 10 — Production Launch
Production infrastructure, domain, payment/shipping production credentials, backups, monitoring, analytics, legal/policy verification, operational runbooks, launch checklist, and post-launch iteration.

### Delivery rule
Each phase should produce a coherent, testable increment. Do not mark a feature complete merely because its UI exists; backend validation, failure paths, security, and tests must be included when applicable.
