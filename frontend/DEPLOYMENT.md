# Deploying Space Venture to Railway

This guide covers deploying the **Next.js** frontend, **Strapi** CMS, and **PostgreSQL** on Railway.

## Overview

- **Next.js** (this repo root) → one Railway service
- **Strapi** (`/strapi` folder) → second Railway service  
- **PostgreSQL** → Railway Postgres plugin or add-on

## 1. PostgreSQL on Railway

1. In your Railway project, click **+ New** → **Database** → **PostgreSQL**.
2. After creation, open the Postgres service and copy the **`DATABASE_URL`** (or individual vars) from the **Variables** / **Connect** tab.

## 2. Deploy Strapi

1. **+ New** → **GitHub Repo** (or **Local**). Choose the same repo; set **Root Directory** to `strapi`.
2. Set **Build Command**: `npm install && npm run build`
3. Set **Start Command**: `npm run start`
4. In **Variables**, add (from Strapi `.env.example` and Railway Postgres):

| Variable | Example / Note |
|----------|----------------|
| `HOST` | `0.0.0.0` |
| `PORT` | Railway sets this; often `1337` or use `PORT` from Railway |
| `DATABASE_CLIENT` | `postgres` |
| `DATABASE_URL` | From Railway Postgres (e.g. `postgres://user:pass@host:port/railway`) |
| `DATABASE_SSL` | `true` (Railway uses SSL) |
| `APP_KEYS` | 4 comma-separated keys (e.g. `openssl rand -base64 32` x4) |
| `API_TOKEN_SALT` | Random string |
| `ADMIN_JWT_SECRET` | Random string |
| `TRANSFER_TOKEN_SALT` | Random string |
| `JWT_SECRET` | Random string |
| `PUBLIC_URL` | Your Strapi URL (e.g. `https://your-strapi.up.railway.app`) |

5. Deploy. After first deploy, open `https://your-strapi.up.railway.app/admin` and create the admin user.
6. Copy the **public Strapi URL** (e.g. `https://your-strapi.up.railway.app`) for the Next.js app.

## 3. Deploy Next.js

1. **+ New** → **GitHub Repo**. Root Directory: leave empty (repo root).
2. Build: `npm install && npm run build` (or use default).
3. Start: `npm run start` (or default).
4. In **Variables** add:

| Variable | Example |
|----------|--------|
| `NEXT_PUBLIC_STRAPI_URL` | `https://your-strapi.up.railway.app` (no trailing slash) |

5. Deploy. Your frontend will use this URL to call Strapi APIs.

## 4. CORS (Strapi)

If your Next.js app is on a different domain, add that domain to Strapi CORS in `strapi/config/middlewares.ts`:

```ts
origin: ['http://localhost:3000', 'https://your-nextjs.up.railway.app'],
```

Then redeploy Strapi.

## 5. Local development

- **Next.js**: copy `.env.example` to `.env.local`, set `NEXT_PUBLIC_STRAPI_URL=http://localhost:1337`.
- **Strapi**: copy `strapi/.env.example` to `strapi/.env`. For local DB use `DATABASE_CLIENT=sqlite` and `DATABASE_FILENAME=.tmp/data.db`, or point to a local Postgres. Run `npm run develop` in `strapi/`.

## Quick env checklist

**Strapi (Railway)**  
- `DATABASE_CLIENT=postgres`  
- `DATABASE_URL` from Railway Postgres  
- `APP_KEYS`, `API_TOKEN_SALT`, `ADMIN_JWT_SECRET`, `TRANSFER_TOKEN_SALT`, `JWT_SECRET`  
- `PUBLIC_URL` = Strapi public URL  
- `HOST=0.0.0.0`

**Next.js (Railway)**  
- `NEXT_PUBLIC_STRAPI_URL` = Strapi public URL
