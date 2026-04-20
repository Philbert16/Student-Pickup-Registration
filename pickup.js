feather.replace();

// Enable/disable continue button based on consent checkbox
const consentCheckbox = document.getElementById("consent-checkbox");
const acceptConsentBtn = document.getElementById("accept-consent-btn");

consentCheckbox.addEventListener("change", function () {
  acceptConsentBtn.disabled = !this.checked;
});

// Show form when consent is accepted
acceptConsentBtn.addEventListener("click", function () {
  document.getElementById("consent-section").classList.add("hidden");
  document.getElementById("pickup-form").classList.remove("hidden");
  resizeSignatureCanvas();
});

// Camera functionality
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const captureBtn = document.getElementById("capture-btn");
const retakeBtn = document.getElementById("retake-btn");
const context = canvas.getContext("2d");
let stream = null;

// Access the device camera
async function initCamera() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (err) {
    console.error("Error accessing camera: ", err);
    alert("Could not access the camera. Please check permissions.");
  }
}

// Capture the photo
captureBtn.addEventListener("click", function () {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  video.classList.add("hidden");
  canvas.classList.remove("hidden");
  captureBtn.classList.add("hidden");
  retakeBtn.classList.remove("hidden");
});

// Retake photo
retakeBtn.addEventListener("click", function () {
  canvas.classList.add("hidden");
  video.classList.remove("hidden");
  captureBtn.classList.remove("hidden");
  retakeBtn.classList.add("hidden");
});

// Initialize camera on page load
window.addEventListener("load", initCamera);
window.addEventListener("resize", resizeSignatureCanvas);

// Signature Pad Functionality
const canvasSignature = document.getElementById("signature-pad");
const clearSignatureBtn = document.getElementById("clear-signature-btn");
const ctx = canvasSignature.getContext("2d");
let isDrawing = false;

function resizeSignatureCanvas() {
  const rect = canvasSignature.getBoundingClientRect();
  if (rect.width === 0 || rect.height === 0) return;

  const ratio = window.devicePixelRatio || 1;
  canvasSignature.width = rect.width * ratio;
  canvasSignature.height = rect.height * ratio;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
}

// Set up canvas styling
resizeSignatureCanvas();

// Drawing functions
function startDrawing(e) {
  if (e.type.includes("touch")) {
    e.preventDefault();
  }
  isDrawing = true;
  draw(e); // For touch devices
}

function stopDrawing() {
  isDrawing = false;
  ctx.beginPath(); // Prevent connecting lines
}

function draw(e) {
  if (!isDrawing) return;
  if (e.type.includes("touch")) {
    e.preventDefault();
  }

  const rect = canvasSignature.getBoundingClientRect();
  let x, y;

  if (e.type.includes("touch")) {
    const touch = e.touches[0] || e.changedTouches[0];
    x = touch.clientX - rect.left;
    y = touch.clientY - rect.top;
  } else {
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}

// Event listeners for mouse
canvasSignature.addEventListener("mousedown", startDrawing);
canvasSignature.addEventListener("mousemove", draw);
canvasSignature.addEventListener("mouseup", stopDrawing);
canvasSignature.addEventListener("mouseout", stopDrawing);

// Event listeners for touch
canvasSignature.addEventListener("touchstart", startDrawing);
canvasSignature.addEventListener("touchmove", draw);
canvasSignature.addEventListener("touchend", stopDrawing);

// Clear signature
clearSignatureBtn.addEventListener("click", function () {
  ctx.clearRect(0, 0, canvasSignature.width, canvasSignature.height);
});
