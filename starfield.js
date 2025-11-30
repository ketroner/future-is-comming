// Animated Starfield with Parallax effect
class Starfield {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.stars = [];
    this.depth = 512; // more depth for smoother parallax
    this.speed = 0.7; // slower base speed for calmer effect
    
    this.resizeCanvas();
    this.initStars();
    
    window.addEventListener('resize', () => this.resizeCanvas());
    this.animate();
  }
  
  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  
  initStars() {
    this.stars = [];
    // Fewer stars and slower baseline speed for calmer effect
    for (let i = 0; i < 120; i++) {
      // vz is per-star velocity; scaled so nearer stars move faster
      const base = this.speed * (0.6 + Math.random() * 0.8);
      this.stars.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        z: Math.random() * this.depth,
        vz: base
      });
    }
  }
  
  drawStar(star) {
    const scale = 1 - star.z / this.depth;
    const radius = scale * 2;
    const opacity = scale * 0.8;
    
    // Screen position (perspective projection)
    const cx = (star.x - this.canvas.width / 2) * scale + this.canvas.width / 2;
    const cy = (star.y - this.canvas.height / 2) * scale + this.canvas.height / 2;
    
    this.ctx.fillStyle = `rgba(200, 220, 255, ${opacity})`;
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    this.ctx.fill();
    
    // Draw star tail (motion blur for far stars moving toward us)
    if (scale > 0.3) {
      this.ctx.strokeStyle = `rgba(150, 180, 255, ${opacity * 0.5})`;
      this.ctx.lineWidth = radius * 0.5;
      this.ctx.beginPath();
      const prevZ = star.z - star.vz * 2;
      const prevScale = 1 - prevZ / this.depth;
      const prevCx = (star.x - this.canvas.width / 2) * prevScale + this.canvas.width / 2;
      const prevCy = (star.y - this.canvas.height / 2) * prevScale + this.canvas.height / 2;
      this.ctx.moveTo(prevCx, prevCy);
      this.ctx.lineTo(cx, cy);
      this.ctx.stroke();
    }
  }
  
  animate() {
    // Clear with a subtle overlay for mild trails (low alpha keeps motion smooth)
    this.ctx.fillStyle = 'rgba(7, 7, 10, 0.12)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Update and draw stars
    this.stars.forEach(star => {
      star.z -= star.vz;
      
      // Recycle star if it reaches camera
      if (star.z <= 0) {
        star.z = this.depth;
        star.x = Math.random() * this.canvas.width;
        star.y = Math.random() * this.canvas.height;
      }
      
      this.drawStar(star);
    });
    
    requestAnimationFrame(() => this.animate());
  }
}

// Initialize starfield when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('starfield-canvas');
  if (canvas) {
    new Starfield(canvas);
  }
});
