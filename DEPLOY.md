# Deployment Guide

## Overview

This project uses a CI/CD pipeline via GitHub Actions to automatically build and deploy to cPanel via FTP.

**Production URL:** [https://try-nui.al-warid.web.id](https://try-nui.al-warid.web.id)

## Architecture

```
main branch (push)
    │
    ▼
GitHub Actions (build job)
    │
    ├─ npm ci
    ├─ npm run build
    └─ push dist/ → build branch
          │
          ▼
GitHub Actions (deploy-ftp job)
    │
    └─ FTP upload → cPanel (try-nui.al-warid.web.id/)
```

## Prerequisites

- Node.js 18+ (CI uses Node.js 20)
- cPanel hosting with FTP access
- GitHub repository: [Warid27/try-nui](https://github.com/Warid27/try-nui)

## GitHub Secrets (Required)

Configure these secrets in **GitHub → Settings → Secrets and variables → Actions**:

| Secret | Description |
|--------|-------------|
| `FTP_SERVER` | FTP server hostname or IP |
| `FTP_USERNAME` | FTP username |
| `FTP_PASSWORD` | FTP password |

> `GITHUB_TOKEN` is automatically provided by GitHub Actions — no manual setup needed.

## Automatic Deployment

Deployment is triggered automatically on every push to `main`:

```bash
git push origin main
```

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
1. Check out the repository
2. Install dependencies (`npm ci`)
3. Build the project (`npm run build`)
4. Push build output to the `build` branch
5. FTP upload the build to the cPanel server

You can also trigger deployment manually from the **Actions** tab → **Build & Deploy to cPanel** → **Run workflow**.

## Manual Deployment

If you need to deploy without CI/CD:

### Option 1: Upload via cPanel File Manager

```bash
npm run build
```

1. Log in to cPanel
2. Open **File Manager**
3. Navigate to `public_html/` (or your target directory)
4. Upload **all contents** from the `dist/` folder
5. Enable HTTPS: **cPanel → SSL/TLS → Let's Encrypt**

### Option 2: Upload via FTP

```bash
npm run build
```

Use any FTP client (FileZilla, WinSCP, etc.):
- **Host:** Your FTP server address
- **Username:** Your FTP username
- **Password:** Your FTP password
- **Remote directory:** `/try-nui.al-warid.web.id/`
- Upload **all contents** of the `dist/` folder

### Option 3: Manual GitHub Actions Trigger

1. Go to [Actions tab](https://github.com/Warid27/try-nui/actions)
2. Select **Build & Deploy to cPanel**
3. Click **Run workflow**
4. Select `main` branch
5. Click **Run workflow**

## Build Output

The production build outputs to `dist/`:

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
└── [other static assets]
```

- Single bundle (no code splitting) for simple deployment
- Minified with esbuild
- No sourcemaps in production

## HTTPS Setup

HTTPS is **required** for camera access (MediaPipe needs `getUserMedia`).

1. In cPanel, go to **SSL/TLS**
2. Select **Let's Encrypt** (free)
3. Enable for your domain
4. Force HTTPS redirect in `.htaccess` (optional):

```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## Troubleshooting

### FTP deploy fails with "530 Login incorrect"
- Verify `FTP_USERNAME` and `FTP_PASSWORD` secrets are correct
- Check if FTP account is active in cPanel

### Site loads but camera doesn't work
- Ensure HTTPS is enabled (camera requires secure context)
- Check browser permissions for camera access
- Verify the site is served over `https://`, not `http://`

### Build fails in CI
- Check the [Actions tab](https://github.com/Warid27/try-nui/actions) for error logs
- Ensure `package-lock.json` is committed (required for `npm ci`)
- Verify Node.js version compatibility

### Old build still showing after deploy
- Clear browser cache (Ctrl+Shift+R)
- Check that FTP upload completed successfully
- Verify the `build` branch has the latest commit
