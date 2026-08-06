# NUI Hand Tracking

[![GitHub](https://img.shields.io/badge/GitHub-Warid27%2Ftry--nui-181717?logo=github)](https://github.com/Warid27/try-nui)

Real-time hand tracking Natural User Interface using MediaPipe Tasks Vision and Three.js. Control a cyberpunk particle system with hand gestures through your webcam.

**Live Demo:** [try-nui.al-warid.web.id](https://try-nui.al-warid.web.id)

## Prerequisites

- Node.js 18+
- Modern browser with webcam (Chrome recommended)
- HTTPS required for camera access (works locally on localhost)

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for Production

```bash
npm run build
```

Output will be in `dist/` folder.

## Deployment

This project is deployed to **cPanel** via GitHub Actions CI/CD pipeline:

1. Push to `main` triggers automatic build
2. Build artifacts are pushed to a `build` branch
3. FTP deployment uploads to the production server

| Platform | URL |
|----------|-----|
| GitHub | [github.com/Warid27/try-nui](https://github.com/Warid27/try-nui) |
| Production | [try-nui.al-warid.web.id](https://try-nui.al-warid.web.id) |

For detailed deployment setup, manual deployment, and troubleshooting, see **[DEPLOY.md](DEPLOY.md)**.

## Gesture Controls

| Gesture | Action |
|---------|--------|
| ✋ Open Palm | Expand particles / Attract toward hand |
| ✊ Closed Fist | Shrink particles / Repel from hand |
| 🤏 Pinch | Freeze particles / Trigger pulse effect |
| 👆 Hand Movement | Move particle system in X/Y |

## Debug Mode

Debug mode is ON by default. It shows the hand skeleton overlay, FPS, current gesture, confidence score, handedness, and positions.

Toggle it with the eye icon button in the top-right corner.

## Tech Stack

- **MediaPipe Tasks Vision** — hand tracking and gesture recognition
- **Three.js** — 3D particle rendering
- **Vite** — build tool
- **Vanilla JS** — no frameworks

## License

MIT
