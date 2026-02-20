# Space Venture – Strapi CMS

Strapi 4 headless CMS for the Space Venture project. Configured for **PostgreSQL** (Railway) and **SQLite** (local dev).

## Local setup

1. **Install dependencies** (from this folder):
   ```bash
   cd strapi
   npm install
   ```

2. **Environment**: Copy `.env.example` to `.env` and fill in.
   - For local dev you can use SQLite:
     ```env
     DATABASE_CLIENT=sqlite
     DATABASE_FILENAME=.tmp/data.db
     ```
   - Generate secrets (e.g. `openssl rand -base64 32` for each):
     - `APP_KEYS` (four comma-separated keys)
     - `API_TOKEN_SALT`
     - `ADMIN_JWT_SECRET`
     - `TRANSFER_TOKEN_SALT`
     - `JWT_SECRET`

3. **Run**:
   ```bash
   npm run develop
   ```
   Then open http://localhost:1337/admin and create the first admin user.

## Railway

See the root **DEPLOYMENT.md** for deploying this app and Next.js with PostgreSQL on Railway.

## Scripts

- `npm run develop` – Dev server with admin UI
- `npm run build` – Build admin panel
- `npm run start` – Production start (use after `build`)
