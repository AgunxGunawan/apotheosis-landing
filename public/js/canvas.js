// Canvas Runic Particle System
function initRuneCanvas() {
    const canvas = document.getElementById('rune-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
        width = (canvas.width = window.innerWidth);
        height = (canvas.height = window.innerHeight);
    });

    // Cultivation symbols/runes (Chinese characters representing elements/runes in Apotheosis)
    const runes = ['金', '木', '水', '火', '土', '雷', '风', '冰', '魂', '劍', '☯', '🐉'];
    const particles = [];
    const particleCount = 45;

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.size = Math.random() * 12 + 8;
            this.alpha = Math.random() * 0.4 + 0.1;
            this.rune = runes[Math.floor(Math.random() * runes.length)];
            this.fadeDirection = Math.random() > 0.5 ? 0.005 : -0.005;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Fade in and out
            this.alpha += this.fadeDirection;
            if (this.alpha > 0.5) {
                this.alpha = 0.5;
                this.fadeDirection = -0.005;
            } else if (this.alpha < 0.05) {
                this.alpha = 0.05;
                this.fadeDirection = 0.005;
            }

            // Boundary wrap
            if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
                this.reset();
            }
        }

        draw() {
            ctx.save();
            ctx.fillStyle = `rgba(212, 175, 55, ${this.alpha})`;
            ctx.font = `${this.size}px serif`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#d4af37';
            ctx.fillText(this.rune, this.x, this.y);
            ctx.restore();
        }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Connect particles with thin lines
    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
                if (dist < 180) {
                    const alpha = (1 - dist / 180) * 0.07;
                    ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
                    ctx.lineWidth = 0.6;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        
        drawConnections();
        requestAnimationFrame(animate);
    }

    animate();
}

// Premium Cursor Trail
function initCursorTrail() {
    const canvas = document.getElementById('cursor-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
        width = (canvas.width = window.innerWidth);
        height = (canvas.height = window.innerHeight);
    });

    const particles = [];
    let lastX = 0;
    let lastY = 0;
    let currentTheme = 'default';

    // Mouse movement listener
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Check distance to throttle
        const dist = Math.hypot(mouseX - lastX, mouseY - lastY);
        if (dist > 8) {
            // Determine active theme based on section
            detectActiveTheme(e.target);

            createParticle(mouseX, mouseY);
            lastX = mouseX;
            lastY = mouseY;
        }
    });

    function detectActiveTheme(target) {
        // If we are in the character display section
        const charSection = document.getElementById('characters');
        if (charSection && charSection.contains(target)) {
            // Find which character is active
            const activePane = document.querySelector('.char-pane.active');
            if (activePane) {
                const id = activePane.id;
                if (id.includes('luo_zheng')) currentTheme = 'luo_zheng';
                else if (id.includes('ning_yudie')) currentTheme = 'ning_yudie';
                else if (id.includes('yun_luo')) currentTheme = 'yun_luo';
                else if (id.includes('su_lingyun')) currentTheme = 'su_lingyun';
                else if (id.includes('tianqiong')) currentTheme = 'tianqiong';
                else if (id.includes('huo_yuner')) currentTheme = 'huo_yuner';
            }
        } else {
            currentTheme = 'default';
        }
    }

    const themeColors = {
        default: '#d4af37', // Gold
        luo_zheng: '#d4af37', // Emperor Gold
        ning_yudie: '#00e5ff', // Glacial Teal
        yun_luo: '#9d4edd', // Mystic Purple
        su_lingyun: '#00ff88', // Emerald wind
        tianqiong: '#ff5500', // Crimson naga fire
        huo_yuner: '#ff4081'  // Phoenix pink/red
    };

    function createParticle(x, y) {
        const color = themeColors[currentTheme] || themeColors.default;
        
        // Add multiple particles for extra rich visual trail
        const count = currentTheme === 'default' ? 1 : 2;
        for (let i = 0; i < count; i++) {
            particles.push({
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5 - 0.5, // slightly drifting upwards
                size: Math.random() * 5 + 2,
                alpha: 1.0,
                color: color,
                theme: currentTheme,
                life: 1.0,
                decay: Math.random() * 0.03 + 0.015,
                rotation: Math.random() * Math.PI * 2,
                rotSpeed: (Math.random() - 0.5) * 0.1
            });
        }
    }

    function drawButterfly(ctx, x, y, size, rotation, color) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);
        ctx.fillStyle = color;
        ctx.beginPath();
        // Left wings
        ctx.ellipse(-size * 0.5, -size * 0.3, size * 0.5, size * 0.7, Math.PI / 6, 0, Math.PI * 2);
        ctx.ellipse(-size * 0.4, size * 0.3, size * 0.3, size * 0.5, -Math.PI / 6, 0, Math.PI * 2);
        // Right wings
        ctx.ellipse(size * 0.5, -size * 0.3, size * 0.5, size * 0.7, -Math.PI / 6, 0, Math.PI * 2);
        ctx.ellipse(size * 0.4, size * 0.3, size * 0.3, size * 0.5, Math.PI / 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    function drawSpark(ctx, x, y, size, rotation, color) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        // Vertical line
        ctx.moveTo(0, -size);
        ctx.lineTo(0, size);
        // Horizontal line
        ctx.moveTo(-size, 0);
        ctx.lineTo(size, 0);
        ctx.stroke();
        ctx.restore();
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.rotation += p.rotSpeed;
            p.life -= p.decay;

            if (p.life <= 0) {
                particles.splice(i, 1);
                continue;
            }

            ctx.shadowBlur = 10;
            ctx.shadowColor = p.color;

            // Draw based on character theme
            if (p.theme === 'ning_yudie') {
                // Butterfly dust for Yudie
                ctx.globalAlpha = p.life * 0.8;
                drawButterfly(ctx, p.x, p.y, p.size * 1.5, p.rotation, p.color);
            } else if (p.theme === 'huo_yuner' || p.theme === 'tianqiong') {
                // Fiery sparks for fire/dragon theme
                ctx.globalAlpha = p.life;
                drawSpark(ctx, p.x, p.y, p.size * 1.8, p.rotation, p.color);
            } else {
                // Round energy sparks for Luo Zheng, Su Lingyun, Yun Luo, and default
                ctx.globalAlpha = p.life;
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        ctx.shadowBlur = 0; // reset shadow
        requestAnimationFrame(animate);
    }

    animate();
}
