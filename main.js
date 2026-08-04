// === IMPORTS ===
import { GestureRecognizer, FilesetResolver } from '@mediapipe/tasks-vision';
import * as THREE from 'three';

// === DOM REFERENCES ===
const video = document.getElementById('webcam');
const webglCanvas = document.getElementById('webgl-canvas');
const debugCanvas = document.getElementById('debug-canvas');
const debugPanel = document.getElementById('debug-panel');
const debugToggle = document.getElementById('debug-toggle');
const gestureGuide = document.getElementById('gesture-guide');
const loadingOverlay = document.getElementById('loading');
const errorToast = document.getElementById('error-toast');

const fpsValue = document.getElementById('fps-value');
const gestureValue = document.getElementById('gesture-value');
const confidenceValue = document.getElementById('confidence-value');
const handednessValue = document.getElementById('handedness-value');
const handposValue = document.getElementById('handpos-value');
const targetposValue = document.getElementById('targetpos-value');

const debugCtx = debugCanvas.getContext('2d');

// === CONFIGURATION ===
const CONFIG = {
  particleCount: 1500,
  particleRadius: 5,
  particleSize: 0.05,
  cameraZ: 10,
  fov: 60,
  bgColor: 0x0a0a0f,
  pinchThreshold: 0.05,
  lerpSpeed: 0.08,
  returnSpeed: 0.03,
  expandForce: 0.06,
  contractForce: 0.04,
  particleColors: [
    new THREE.Color(0x00ffff), // cyan
    new THREE.Color(0xff00ff), // magenta
    new THREE.Color(0x00ff41), // green
  ],
  wasmUrl: 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@1.0.1/wasm',
  modelUrl: 'https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task',
};

// === APPLICATION STATE ===
const state = {
  gestureRecognizer: null,
  isRunning: false,
  debugVisible: true,

  // Current gesture info
  currentGesture: 'None',
  currentConfidence: 0,
  currentHandedness: '--',
  handPosition: { x: 0, y: 0 },
  targetPosition: { x: 0, y: 0 },
  hasHand: false,

  // FPS tracking
  frameCount: 0,
  fpsLastTime: performance.now(),
  currentFps: 0,

  // Particle effects
  currentScale: 1.0,
  targetScale: 1.0,
  pinchFrozen: false,
  pinchPulseTime: 0,
  pinchFlashOpacity: 0,

  // Attract/repel target in 3D space
  attractPoint: new THREE.Vector3(0, 0, 0),
};

// === ERROR HANDLING ===
function showError(message) {
  console.error('[NUI]', message);
  if (errorToast) {
    errorToast.textContent = message;
    errorToast.classList.add('visible');
    setTimeout(() => {
      errorToast.classList.remove('visible');
    }, 5000);
  }
}

function hideLoading() {
  if (loadingOverlay) {
    loadingOverlay.style.opacity = '0';
    loadingOverlay.style.pointerEvents = 'none';
    setTimeout(() => {
      loadingOverlay.style.display = 'none';
    }, 500);
  }
}

// === WEBCAM SETUP ===
async function initWebcam() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    throw new Error('Camera requires HTTPS. Your browser blocked access on insecure context.');
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'user', width: 640, height: 480 },
    });
    video.srcObject = stream;

    return new Promise((resolve, reject) => {
      video.onloadeddata = () => {
        video.play();
        resolve();
      };
      video.onerror = () => reject(new Error('Failed to load webcam video stream'));
      // Timeout after 10s
      setTimeout(() => reject(new Error('Webcam initialization timed out')), 10000);
    });
  } catch (err) {
    if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
      throw new Error('Camera permission denied. Please allow camera access and reload.');
    }
    if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
      throw new Error('No camera found. Please connect a webcam and reload.');
    }
    throw new Error(`Camera error: ${err.message}`);
  }
}

// === MEDIAPIPE GESTURE RECOGNIZER SETUP ===
async function initGestureRecognizer() {
  try {
    console.log('[NUI] Loading WASM from:', CONFIG.wasmUrl);
    const vision = await FilesetResolver.forVisionTasks(CONFIG.wasmUrl);
    console.log('[NUI] WASM loaded, creating GestureRecognizer...');
    const recognizer = await GestureRecognizer.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: CONFIG.modelUrl,
        delegate: 'GPU',
      },
      runningMode: 'VIDEO',
      numHands: 2,
    });
    console.log('[NUI] GestureRecognizer created successfully');
    return recognizer;
  } catch (err) {
    const errMsg = err instanceof Error ? err.message : String(err);
    console.error('[NUI] MediaPipe init error:', err);
    throw new Error(`MediaPipe init failed: ${errMsg}`);
  }
}

// === THREE.JS SCENE SETUP ===
let scene, camera, renderer, particleGeometry, particleSystem;
let originalPositions;
let particleVelocities;

function initThreeScene() {
  // Renderer
  renderer = new THREE.WebGLRenderer({
    canvas: webglCanvas,
    antialias: true,
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(CONFIG.bgColor, 1);

  // Camera
  camera = new THREE.PerspectiveCamera(
    CONFIG.fov,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.z = CONFIG.cameraZ;

  // Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(CONFIG.bgColor);

  // Particle Geometry
  particleGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(CONFIG.particleCount * 3);
  const colors = new Float32Array(CONFIG.particleCount * 3);
  originalPositions = new Float32Array(CONFIG.particleCount * 3);
  particleVelocities = new Float32Array(CONFIG.particleCount * 3);

  for (let i = 0; i < CONFIG.particleCount; i++) {
    const i3 = i * 3;

    // Random point in sphere
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = CONFIG.particleRadius * Math.cbrt(Math.random());

    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    positions[i3] = x;
    positions[i3 + 1] = y;
    positions[i3 + 2] = z;

    originalPositions[i3] = x;
    originalPositions[i3 + 1] = y;
    originalPositions[i3 + 2] = z;

    particleVelocities[i3] = 0;
    particleVelocities[i3 + 1] = 0;
    particleVelocities[i3 + 2] = 0;

    // Random color from palette
    const color = CONFIG.particleColors[Math.floor(Math.random() * CONFIG.particleColors.length)];
    colors[i3] = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // Points Material with additive blending for glow
  const particleMaterial = new THREE.PointsMaterial({
    size: CONFIG.particleSize,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    transparent: true,
    opacity: 0.9,
    sizeAttenuation: true,
  });

  particleSystem = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particleSystem);
}

// === GESTURE → PARTICLE EFFECT MAPPING ===

function isPinching(landmarks) {
  if (!landmarks || landmarks.length === 0) return false;
  const hand = landmarks[0];
  if (!hand || hand.length < 9) return false;

  const thumbTip = hand[4];
  const indexTip = hand[8];
  const dx = thumbTip.x - indexTip.x;
  const dy = thumbTip.y - indexTip.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < CONFIG.pinchThreshold;
}

function updateParticles() {
  if (!particleGeometry) return;

  const positions = particleGeometry.attributes.position.array;

  // Determine current effect mode
  let effect = 'idle';
  if (state.pinchFrozen) {
    effect = 'pinch';
  } else if (state.currentGesture === 'Open_Palm' && state.hasHand) {
    effect = 'attract';
  } else if (state.currentGesture === 'Pointing_Up' && state.hasHand) {
    effect = 'rise';
  }

  // Scale animation
  if (effect === 'attract') {
    state.targetScale = THREE.MathUtils.lerp(state.targetScale, 1.3, 0.02);
  } else if (effect === 'repel') {
    state.targetScale = THREE.MathUtils.lerp(state.targetScale, 0.6, 0.02);
  } else if (effect === 'rise') {
    state.targetScale = THREE.MathUtils.lerp(state.targetScale, 1.15, 0.02);
  } else if (effect === 'pinch') {
    state.targetScale = THREE.MathUtils.lerp(state.targetScale, 1.0, 0.03);
  } else {
    state.targetScale = THREE.MathUtils.lerp(state.targetScale, 1.0, CONFIG.returnSpeed);
  }
  state.currentScale = THREE.MathUtils.lerp(state.currentScale, state.targetScale, 0.1);

  // Pinch pulse / ripple
  if (state.pinchFrozen) {
    const elapsed = (performance.now() - state.pinchPulseTime) / 1000;
    if (elapsed < 0.5) {
      const pulse = Math.sin(elapsed * Math.PI * 8) * 0.15;
      state.currentScale += pulse;
    } else {
      state.pinchFrozen = false;
      state.pinchFlashOpacity = 0;
    }
  }

  for (let i = 0; i < CONFIG.particleCount; i++) {
    const i3 = i * 3;
    let px = positions[i3];
    let py = positions[i3 + 1];
    let pz = positions[i3 + 2];

    const ox = originalPositions[i3];
    const oy = originalPositions[i3 + 1];
    const oz = originalPositions[i3 + 2];

    // Target position based on effect
    let tx, ty, tz;

    if (effect === 'attract') {
      // Expand outward but also lean toward hand position in 3D
      const spread = 1.2;
      tx = ox * spread + state.attractPoint.x * 0.3;
      ty = oy * spread + state.attractPoint.y * 0.3;
      tz = oz * spread;
    } else if (effect === 'repel') {
      // Contract inward, pushed away from hand
      const contraction = 0.3;
      const dx = px - state.attractPoint.x;
      const dy = py - state.attractPoint.y;
      const repelDist = Math.sqrt(dx * dx + dy * dy) + 0.01;
      const repelStrength = Math.min(1.0 / repelDist, 2.0);
      tx = ox * contraction + dx * repelStrength * 0.2;
      ty = oy * contraction + dy * repelStrength * 0.2;
      tz = oz * contraction;
    } else if (effect === 'rise') {
      // Particles drift upward
      tx = ox;
      ty = oy + 2.0;
      tz = oz;
    } else {
      // Idle: drift back to original
      tx = ox;
      ty = oy;
      tz = oz;
    }

    if (effect !== 'pinch') {
      // Lerp toward target
      const speed = effect === 'idle' ? CONFIG.returnSpeed : CONFIG.lerpSpeed;
      positions[i3] = THREE.MathUtils.lerp(px, tx, speed);
      positions[i3 + 1] = THREE.MathUtils.lerp(py, ty, speed);
      positions[i3 + 2] = THREE.MathUtils.lerp(pz, tz, speed);
    }
    // Pinch: freeze in place (no movement)
  }

  // Apply overall scale
  particleSystem.scale.setScalar(state.currentScale);

  particleGeometry.attributes.position.needsUpdate = true;

  // Ambient rotation
  particleSystem.rotation.y += 0.001;
}

// === PINCH TRIGGER ===
function onPinchDetected() {
  if (!state.pinchFrozen) {
    state.pinchFrozen = true;
    state.pinchPulseTime = performance.now();
    state.pinchFlashOpacity = 1.0;
  }
}

// === DEBUG CANVAS OVERLAY ===
function drawDebugOverlay(landmarks) {
  if (!debugCanvas || !debugCtx) return;

  const w = debugCanvas.width;
  const h = debugCanvas.height;

  debugCtx.clearRect(0, 0, w, h);

  if (!landmarks || landmarks.length === 0) return;

  const hand = landmarks[0];
  if (!hand) return;

  // Draw connections
  const connections = GestureRecognizer.HAND_CONNECTIONS;
  debugCtx.strokeStyle = '#00ffff';
  debugCtx.lineWidth = 2;
  debugCtx.shadowColor = '#00ffff';
  debugCtx.shadowBlur = 6;

  for (const conn of connections) {
    const start = hand[conn.start];
    const end = hand[conn.end];
    if (!start || !end) continue;

    debugCtx.beginPath();
    debugCtx.moveTo(start.x * w, start.y * h);
    debugCtx.lineTo(end.x * w, end.y * h);
    debugCtx.stroke();
  }

  // Draw landmarks
  debugCtx.fillStyle = '#ff00ff';
  debugCtx.shadowColor = '#ff00ff';
  debugCtx.shadowBlur = 8;

  for (let i = 0; i < hand.length; i++) {
    const lm = hand[i];
    const cx = lm.x * w;
    const cy = lm.y * h;
    const radius = i === 4 || i === 8 ? 5 : 3; // Bigger dots for thumb/index tips

    debugCtx.beginPath();
    debugCtx.arc(cx, cy, radius, 0, Math.PI * 2);
    debugCtx.fill();
  }

  // Reset shadow
  debugCtx.shadowBlur = 0;
}

// === DEBUG PANEL UPDATES ===
function updateDebugPanel() {
  if (!state.debugVisible) return;

  // FPS
  const now = performance.now();
  state.frameCount++;
  const elapsed = now - state.fpsLastTime;
  if (elapsed >= 500) {
    state.currentFps = Math.round((state.frameCount / elapsed) * 1000);
    state.frameCount = 0;
    state.fpsLastTime = now;
    if (fpsValue) fpsValue.textContent = state.currentFps;
  }

  // Gesture name (readable)
  let gestureDisplay = 'Idle';
  if (state.pinchFrozen) {
    gestureDisplay = 'Pinch';
  } else if (state.currentGesture === 'Open_Palm') {
    gestureDisplay = 'Open Palm';
  } else if (state.currentGesture === 'Thumb_Up') {
    gestureDisplay = 'Thumb Up';
  } else if (state.currentGesture === 'Thumb_Down') {
    gestureDisplay = 'Thumb Down';
  } else if (state.currentGesture === 'Victory') {
    gestureDisplay = 'Victory';
  } else if (state.currentGesture === 'Pointing_Up') {
    gestureDisplay = 'Pointing Up';
  } else if (state.currentGesture === 'ILoveYou') {
    gestureDisplay = 'I Love You';
  }
  if (gestureValue) gestureValue.textContent = gestureDisplay;

  // Confidence
  if (confidenceValue) {
    confidenceValue.textContent = state.hasHand
      ? `${Math.round(state.currentConfidence * 100)}%`
      : '--';
  }

  // Handedness
  if (handednessValue) {
    handednessValue.textContent = state.hasHand ? state.currentHandedness : '--';
  }

  // Hand position
  if (handposValue) {
    if (state.hasHand) {
      handposValue.textContent = `X: ${state.handPosition.x.toFixed(2)}, Y: ${state.handPosition.y.toFixed(2)}`;
    } else {
      handposValue.textContent = '--';
    }
  }

  // Target position (Three.js world coords)
  if (targetposValue) {
    targetposValue.textContent = `X: ${state.targetPosition.x.toFixed(1)}, Y: ${state.targetPosition.y.toFixed(1)}`;
  }
}

// === DEBUG TOGGLE ===
function initDebugToggle() {
  if (!debugToggle) return;

  debugToggle.addEventListener('click', () => {
    state.debugVisible = !state.debugVisible;
    const hiddenClass = 'hidden';

    if (state.debugVisible) {
      debugPanel?.classList.remove(hiddenClass);
      debugCanvas?.classList.remove(hiddenClass);
      gestureGuide?.classList.remove(hiddenClass);
    } else {
      debugPanel?.classList.add(hiddenClass);
      debugCanvas?.classList.add(hiddenClass);
      gestureGuide?.classList.add(hiddenClass);
    }
  });
}

// === RESIZE HANDLING ===
function onWindowResize() {
  const w = window.innerWidth;
  const h = window.innerHeight;

  camera.aspect = w / h;
  camera.updateProjectionMatrix();

  renderer.setSize(w, h);

  if (debugCanvas) {
    debugCanvas.width = w;
    debugCanvas.height = h;
  }
}

// === MEDIAPIPE RECOGNITION PER FRAME ===
function recognizeFrame() {
  if (!state.gestureRecognizer || !state.isRunning) return;

  try {
    const result = state.gestureRecognizer.recognizeForVideo(video, performance.now());

    const landmarks = result.landmarks;
    const gestures = result.gestures;
    const handedness = result.handedness;
    const handCount = landmarks ? landmarks.length : 0;

    if (handCount === 0) {
      state.currentGesture = 'None';
      state.currentConfidence = 0;
      state.currentHandedness = '--';
      state.hasHand = false;
      state.handPosition.x = 0;
      state.handPosition.y = 0;
      state.targetPosition.x = 0;
      state.targetPosition.y = 0;
      state.attractPoint.set(0, 0, 0);
      drawDebugOverlay([]);
      return;
    }

    // Use first hand for gesture detection
    if (gestures && gestures.length > 0 && gestures[0].length > 0) {
      const topGesture = gestures[0][0];
      state.currentGesture = topGesture.categoryName;
      state.currentConfidence = topGesture.score;
    } else {
      state.currentGesture = 'None';
      state.currentConfidence = 0;
    }

    // Handedness — show all detected hands
    const hands = [];
    if (handedness) {
      for (let i = 0; i < handedness.length; i++) {
        if (handedness[i] && handedness[i].length > 0) {
          hands.push(handedness[i][0].categoryName);
        }
      }
    }
    state.currentHandedness = hands.length > 0 ? hands.join(', ') : '--';

    // Average hand position from all hands
    let avgX = 0, avgY = 0;
    for (let i = 0; i < handCount; i++) {
      avgX += landmarks[i][0].x;
      avgY += landmarks[i][0].y;
    }
    avgX /= handCount;
    avgY /= handCount;

    state.hasHand = true;
    state.handPosition.x = avgX;
    state.handPosition.y = avgY;

    const worldX = (1.0 - avgX) * 10 - 5;
    const worldY = -(avgY * 10 - 5);
    state.targetPosition.x = worldX;
    state.targetPosition.y = worldY;
    state.attractPoint.set(worldX, worldY, 0);

    // Check pinch on any hand
    let pinching = false;
    for (let i = 0; i < handCount; i++) {
      if (isPinching([landmarks[i]])) {
        pinching = true;
        break;
      }
    }
    if (pinching) onPinchDetected();

    drawDebugOverlay(landmarks);
  } catch (err) {
    console.warn('[NUI] Frame recognition error:', err.message);
  }
}

// === RENDER LOOP ===
function animate() {
  requestAnimationFrame(animate);

  // Run gesture recognition
  recognizeFrame();

  // Update particle system
  updateParticles();

  // Render Three.js scene
  renderer.render(scene, camera);

  // Update debug panel values
  updateDebugPanel();
}

// === INITIALIZATION ===
async function init() {
  try {
    // 1. Initialize Three.js scene (no dependencies)
    initThreeScene();

    // Set initial debug canvas size
    if (debugCanvas) {
      debugCanvas.width = window.innerWidth;
      debugCanvas.height = window.innerHeight;
    }

    // 2. Initialize webcam
    await initWebcam();

    // 3. Initialize MediaPipe Gesture Recognizer
    state.gestureRecognizer = await initGestureRecognizer();

    // 4. Set up debug toggle
    initDebugToggle();

    // 5. Window resize listener
    window.addEventListener('resize', onWindowResize);

    // 6. Start the render loop
    state.isRunning = true;

    // Hide loading overlay
    hideLoading();

    // Start animation loop
    animate();
  } catch (err) {
    showError(err.message);
    hideLoading();
  }
}

// === LAUNCH ===
init();
