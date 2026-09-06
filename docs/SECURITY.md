# TIMBER — Security Guidelines

## Secrets
Never commit `.env`, `.env.local`, API keys, database passwords, Razorpay secrets, webhook secrets, shipping credentials, private tokens, or service-account credentials. Use deployment secret storage. Commit only `.env.example` with empty placeholders.

## Authentication & authorization
Use a maintained authentication solution. Hash passwords only through a vetted library/provider. Protect sessions, validate authorization on the server, and enforce admin roles server-side. Never rely on hidden UI controls for authorization.

## Input and output
Validate all request payloads, query parameters, route parameters, uploaded metadata, and webhook bodies at trust boundaries. Use Prisma/parameterized database access to reduce SQL injection risk. Avoid unsafe HTML rendering and sanitize/encode untrusted content to prevent XSS.

## CSRF and sessions
Use framework/provider protections where available and evaluate CSRF requirements for state-changing cookie-authenticated requests. Use secure, HttpOnly, appropriately scoped cookies when cookie sessions are used. Avoid exposing tokens to client JavaScript unnecessarily.

## Payments
Client totals are never authoritative. Recalculate product prices, discounts, shipping, and stock on the server. Create payment orders server-side. Verify Razorpay signatures and webhooks using the secret. Make payment/order transitions idempotent and reject replay or mismatched events.

## Webhooks
Authenticate provider webhooks using their documented signature mechanism. Validate event structure, timestamps/idempotency where available, and process events safely. Do not expose webhook secrets to the browser.

## Rate limiting and abuse
Add rate limits to login, account recovery, search-heavy endpoints, coupon attempts, checkout/payment endpoints, and sensitive admin operations before production. Prefer provider/CDN controls where practical.

## Admin protection
Admin routes and server actions require explicit authorization. Sensitive changes such as price, stock, order status, refunds, and roles should be auditable. Never expose admin APIs merely because a route is difficult to discover.

## Data protection
Collect only necessary customer data. Do not log passwords, payment secrets, authentication tokens, or full sensitive payment details. Minimize personal data in application logs and error reports.

## Dependencies and deployment
Keep dependencies minimal and maintained. Review security advisories, lock dependency versions through the package manager, use HTTPS in production, and keep production environment variables outside source control.

## Security checklist before launch
- Secrets scan passes and repository history contains no credentials.
- Authentication/session strategy reviewed.
- Admin authorization tested server-side.
- Payment signature/webhook verification tested.
- Inventory and order writes are transactional/idempotent where required.
- Validation and output encoding reviewed.
- Rate limiting added to sensitive flows.
- Security headers/deployment configuration reviewed.
- Dependency audit passes or documented exceptions exist.
- Logs contain no secrets or unnecessary personal data.
