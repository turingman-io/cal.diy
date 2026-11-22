# Running Cal.diy locally

## Requirements

- Docker and Docker Compose (for the local Postgres)
- Node.js 22 and Yarn 4 (`corepack enable`)
- openssl

## Start

1. `yarn`
2. `cp .env.example .env`, then set:
   - `NEXTAUTH_SECRET` to the output of `openssl rand -base64 32`
   - `CALENDSO_ENCRYPTION_KEY` to the output of `openssl rand -base64 24`
3. `yarn dx` starts a local Postgres, applies the migrations and seeds test users.
4. `yarn dev` serves the app at http://localhost:3000.

## Test users (seeded by `yarn dx`)

| Email | Password | Notes |
|---|---|---|
| `free@example.com` | `free` | free user |
| `pro@example.com` | `pro` | pro user, has event types and bookings |
| `trial@example.com` | `trial` | trial user |
| `admin@example.com` | `ADMINadmin2022!` | admin |
| `onboarding@example.com` | `onboarding` | onboarding not finished |

## Conventions

- Timezone UTC, locale en-US (booking slots depend on the timezone).
- Calendar, video and payment integrations are not configured.
