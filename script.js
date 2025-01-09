const canvas = document.getElementById("waveCanvas");
const ctx = canvas.getContext("2d");

let waves = [];
const waveCount = 5; // Number of waves
const waveSpeed = 0.02; // Speed of wave movement
const amplitude = 40; // Height of the waves
const frequency = 0.01; // Frequency of the waves
const colors = ["#ff007c", "#00fff7", "#1a1aff", "#ff9900", "#ff00ff"]; // Colors for waves

// Resize canvas to fit window
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Initialize wave positions
for (let i = 0; i < waveCount; i++) {
  waves.push({
    phase: Math.random() * Math.PI * 2,
    offsetY: (canvas.height / waveCount) * i + amplitude,
    color: colors[i % colors.length],
  });
}

// Draw waves
function drawWaves() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  waves.forEach((wave, index) => {
    ctx.beginPath();
    ctx.strokeStyle = wave.color;
    ctx.lineWidth = 2;
    for (let x = 0; x < canvas.width; x++) {
      const y =
        Math.sin(x * frequency + wave.phase) * amplitude +
        wave.offsetY;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
    wave.phase += waveSpeed; // Move the wave
  });

  requestAnimationFrame(drawWaves);
}

// Start animation
drawWaves();
