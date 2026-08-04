# NUI Hand Tracking

Real-time hand tracking Natural User Interface using MediaPipe Tasks Vision and Three.js. Control a cyberpunk particle system with hand gestures through your webcam.

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

## Deploy to cPanel

1. Run `npm run build`
2. Upload **all contents** of the `dist/` folder to your `public_html` directory
3. Enable HTTPS via cPanel → SSL/TLS → Let's Encrypt (free)
4. No server-side configuration needed — it's fully static

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
