# Handoff

## Project

This repository contains two Vinext/Next.js sites deployed together with Docker Compose and Caddy.

- Root app: DrunKitten, S&E LAB, DrunKitten Production, and the new content manager.
- Nested app: `darren-khaw-site`, the Darren Khaw portfolio.

## Ports

Public ports:

- `80` HTTP, handled by Caddy.
- `443` HTTPS TCP, handled by Caddy.
- `443/udp` HTTPS/HTTP3, handled by Caddy.

Internal Docker-only ports:

- `drunkitten:3000` for the root DrunKitten app.
- `darren-khaw:3000` for the Darren Khaw portfolio app.

The two app containers do not publish port `3000` directly to the internet. Caddy receives public traffic on ports `80` and `443`, then reverse-proxies to each app on Docker's internal network.

Domain routing in `Caddyfile`:

- `drunkitten.com` and `www.drunkitten.com` -> `drunkitten:3000`
- `darrenk.drunkitten.com` -> `darren-khaw:3000`

## Server Setup

1. Point DNS records to the server IP.

   - `drunkitten.com`
   - `www.drunkitten.com`
   - `darrenk.drunkitten.com`

2. Open these firewall ports on the server.

   - `80/tcp`
   - `443/tcp`
   - `443/udp`

3. Install Docker and Docker Compose on the server.

4. Clone or upload this repository to the server.

5. From the repository root, start the stack.

   ```bash
   docker compose up -d --build
   ```

6. Check logs if needed.

   ```bash
   docker compose logs -f caddy
   docker compose logs -f drunkitten
   docker compose logs -f darren-khaw
   ```

7. Restart after future code updates.

   ```bash
   docker compose up -d --build
   ```

## Required Environment / Bindings

The new content manager and database-backed content need a D1 binding named `DB`.

Current config files:

- Root app: `.openai/hosting.json` has `"d1": "DB"`.
- Darren app: `darren-khaw-site/.openai/hosting.json` has `"d1": "DB"`.

The manager page also checks `ADMIN_EMAILS`. Set it to a comma-separated list of approved manager email addresses.

Example:

```env
ADMIN_EMAILS=darren@example.com,another-admin@example.com
```

Important: plain Docker Compose does not automatically provide Cloudflare D1. If deploying outside the OpenAI/Cloudflare hosting environment, the next agent should confirm how Vinext is expected to receive a D1-compatible `DB` binding in production. Without `DB`, public pages fall back where possible, but saving new manager content will fail.

## What Was Updated

### Database-backed content

Added content tables for:

- `achievements`
- `original_songs`

The migration is in:

- `drizzle/0000_content_management.sql`

The shared root data helpers are in:

- `db/schema.ts`
- `db/content.ts`

The Darren sub-site has its own achievement helpers in:

- `darren-khaw-site/db/schema.ts`
- `darren-khaw-site/db/content.ts`

Why: achievements and songs should be managed through data instead of editing page code every time.

### Management page

Added:

- `app/manage/page.tsx`
- `app/manage/ManageClient.tsx`
- `app/manage/auth.ts`

Manager route:

- `/manage`

It lets an approved manager add:

- DarrenK achievements with English and Chinese title/details/award.
- Ranking type as either `Ranking` or `Global Ranking`.
- Picture URLs.
- DrunKitten Production original songs.

API routes:

- `app/api/manage/achievements/route.ts`
- `app/api/manage/songs/route.ts`

Why: the owner can update website content without changing code.

### Darren Khaw achievements

Added shared achievement rendering:

- `darren-khaw-site/app/AchievementCard.tsx`

Updated pages to read achievements from the database:

- `darren-khaw-site/app/page.tsx`
- `darren-khaw-site/app/zh/page.tsx`
- `darren-khaw-site/app/achievements/page.tsx`
- `darren-khaw-site/app/zh/achievements/page.tsx`

The Water Cube achievement remains as fallback data in `darren-khaw-site/db/content.ts`.

Why: current content stays visible even if the database is empty or unavailable, while future achievements can come from the manager.

### DrunKitten Production original songs

Added shared song card:

- `app/production/SongCard.tsx`

Added song archive pages:

- `app/production/songs/page.tsx`
- `app/zh/production/songs/page.tsx`

Updated Production pages:

- `app/production/page.tsx`
- `app/zh/production/page.tsx`

Behavior:

- Production homepage shows one or two songs upfront.
- Full archive pages show all songs.
- If there are no songs, the section shows `Coming Soon`.
- Song credits are shown in English or the song's original language on both English and Chinese pages.

Why: this matches the Darren achievement pattern and keeps song data manageable through the database.

### Styling

Added styles for:

- Manager page forms and lists.
- Original song preview cards.
- Original song archive pages.

File:

- `app/globals.css`

## Verification Done

Root app build was verified with:

```powershell
.\node_modules\.bin\vinext.CMD build
```

Darren sub-site build was verified from `darren-khaw-site` with:

```powershell
..\node_modules\.bin\vinext.CMD build
```

Both builds completed successfully.

`npm run build` did not run directly on Windows because the package script uses Unix-style environment variable syntax:

```bash
WRANGLER_LOG_PATH=.wrangler/wrangler.log vinext build
```

On Linux servers and inside the Dockerfiles, that syntax is expected to work.

Lint was not cleaned up as part of this task. Existing lint noise includes generated `dist` files and pre-existing Next/React lint rules. Build success is the current verification signal.

## Notes For The Next Agent

- Do not remove the database fallback achievement unless real seed data is confirmed in production.
- Confirm D1 binding behavior before relying on `/manage` in a non-Cloudflare/non-OpenAI-hosted Docker server.
- `ADMIN_EMAILS` must be configured or `/manage` will reject all users.
- The repository currently tracks some generated files such as `darren-khaw-site/dist` and `.pnpm-store`; avoid deleting them unless the owner asks for repo cleanup.
- If adding image uploads later, this project currently only stores image URLs. It does not upload files to R2 or local storage.
