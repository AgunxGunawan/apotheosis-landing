document.addEventListener('DOMContentLoaded', () => {
    // 0. Immersive Preloader
    initPreloader();

    // 1. Navigation Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Hamburger Menu
    initMobileMenu();

    // 2. Canvas Runic Particle System
    initRuneCanvas();

    // 3. Scroll Reveal Animation
    initScrollReveal();

    // 4. Character Codex Switcher
    initCharacterCodex();

    // 5. Cauldron Interactive Hotspots
    initCauldronNodes();

    // 6. Story Season Switcher
    initStorySwitcher();

    // 7. Premium Cursor Trail
    initCursorTrail();

    // 8. Gallery Filter and Lightbox
    initGalleryFilter();
    initLightbox();

    // 9. Character Database Search
    initRegistrySearch();
});

// Canvas Particle System
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

// Scroll Reveal
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Trigger once
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => revealOnScroll.observe(el));
}

// Character Switcher
function initCharacterCodex() {
    const navButtons = document.querySelectorAll('.char-nav-btn');
    const panes = document.querySelectorAll('.char-pane');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const charId = btn.getAttribute('data-character');

            // Pause all currently playing videos
            panes.forEach(pane => {
                const video = pane.querySelector('video');
                if (video) {
                    video.pause();
                }
            });

            // Update Nav buttons state
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update Display Panes state
            panes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.id === `char-${charId}`) {
                    pane.classList.add('active');
                    
                    // Attempt to play the video inside active pane
                    const video = pane.querySelector('video');
                    if (video) {
                        video.currentTime = 0;
                        video.play().catch(error => {
                            console.log(`Video auto-play for ${charId} prevented/failed. Fallback visual shown.`, error);
                        });
                    }
                }
            });
        });
    });

    // Try playing the video in the default active character panel
    const defaultActivePane = document.querySelector('.char-pane.active');
    if (defaultActivePane) {
        const video = defaultActivePane.querySelector('video');
        if (video) {
            video.play().catch(() => {});
        }
    }
}

// Cauldron Interactive Nodes
function initCauldronNodes() {
    const nodes = document.querySelectorAll('.cauldron-node');
    const detailTitle = document.getElementById('cauldron-node-title');
    const detailTag = document.getElementById('cauldron-node-tag');
    const detailDesc = document.getElementById('cauldron-node-desc');

    // Data for nodes
    const nodeData = {
        '1': {
            title: 'Nine Dragons Cauldron (九龙鼎)',
            tag: 'Sumber Kekuatan Rahasia Luo Zheng',
            desc: 'Kuali raksasa misterius di dalam tubuh Luo Zheng yang menampung sembilan jiwa naga purba. Kuali ini memproses semua bentuk senjata spiritual dan energi yang dikonsumsi Luo Zheng untuk ditempa langsung menjadi kekuatan murni fisik dan menyalakan sisik naga emas di tubuhnya.'
        },
        '2': {
            title: 'Bronze Dragon Scales (Sisik Naga Perunggu)',
            tag: 'Sistem Pertahanan Fisik Tertinggi',
            desc: 'Tahap awal dari pemurnian tubuh naga. Luo Zheng mengkonsumsi senjata magis untuk menyalakan sisik naga perunggu di bawah kulitnya. Ketika diaktifkan, pertahanan fisiknya meningkat ratusan kali lipat, memungkinkannya menahan serangan langsung dari kultivator tingkat tinggi.'
        },
        '3': {
            title: 'Gold Dragon Power (Kekuatan Naga Emas)',
            tag: 'Energi Serangan Kehancuran',
            desc: 'Dengan melepaskan kekuatan dari kuali naga purba di jiwanya, Luo Zheng dapat menyalurkan kekuatan penghancur naga emas dalam setiap pukulannya. Satu pukulan fisiknya mampu menghancurkan gunung dan menembus ruang hampa.'
        },
        '4': {
            title: 'Weapon Tempering (Pemurnian Tubuh Senjata)',
            tag: 'Kultivasi Fisik Unik Luo Zheng',
            desc: 'Tidak seperti kultivator biasa yang menyerap Qi dunia untuk diakumulasikan di Dantian, Luo Zheng secara harfiah melatih tubuhnya seperti menempa pedang. Kuali di jiwanya menyerap racun, api naga, dan energi pedang musuh untuk memperkuat struktur tulangnya.'
        }
    };

    nodes.forEach(node => {
        node.addEventListener('click', () => {
            const nodeId = node.getAttribute('data-node');

            // Update active state
            nodes.forEach(n => n.classList.remove('active'));
            node.classList.add('active');

            // Fade detail text out and in with new content
            const card = document.querySelector('.cauldron-details-card');
            card.style.opacity = '0.3';
            card.style.transform = 'translateY(5px)';
            card.style.transition = 'all 0.3s ease';

            setTimeout(() => {
                const data = nodeData[nodeId];
                if (data) {
                    detailTitle.textContent = data.title;
                    detailTag.textContent = data.tag;
                    detailDesc.textContent = data.desc;
                }
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 300);
        });
    });
}

// Story Highlights Switcher
function initStorySwitcher() {
    const buttons = document.querySelectorAll('.story-tab-btn');
    const panels = document.querySelectorAll('.story-panel');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const seasonId = btn.getAttribute('data-season');

            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            panels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.id === `season-${seasonId}`) {
                    panel.classList.add('active');
                }
            });
        });
    });
}

// Mobile Hamburger Menu
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger-btn');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
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

// Gallery Category Filter
function initGalleryFilter() {
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active class
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');

                // Add transition out
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                item.style.transition = 'all 0.3s ease';

                setTimeout(() => {
                    if (filterValue === 'all' || category === filterValue) {
                        item.classList.remove('hidden');
                        // Trigger reflow
                        item.offsetHeight; 
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    } else {
                        item.classList.add('hidden');
                    }
                }, 300);
            });
        });
    });
}

// Lightbox Modal Codex
function initLightbox() {
    const lightbox = document.getElementById('gallery-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const closeBtn = document.querySelector('.lightbox-close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (!lightbox || !closeBtn) return;

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.getAttribute('data-title');
            const desc = item.getAttribute('data-desc');
            const imageSrc = item.getAttribute('data-image');

            lightboxImg.src = imageSrc;
            lightboxTitle.textContent = title;
            lightboxDesc.textContent = desc;

            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // prevent background scrolling
        });
    });

    closeBtn.addEventListener('click', closeLightbox);
    
    // Close on click outside content
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-content-wrapper')) {
            closeLightbox();
        }
    });

    // Close on ESC key press
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto'; // restore scrolling
        setTimeout(() => {
            lightboxImg.src = '';
        }, 400); // clear source after transition finishes
    }
}

// Character Database Search Filter
function initRegistrySearch() {
    const searchInput = document.getElementById('registry-search');
    const cards = document.querySelectorAll('.registry-card');

    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase().trim();

        cards.forEach(card => {
            const name = card.getAttribute('data-name').toLowerCase();
            if (name.includes(value)) {
                card.classList.remove('hidden');
                // Optional simple fade in
                card.style.opacity = '1';
            } else {
                card.classList.add('hidden');
            }
        });
    });
}

// Immersive Preloader Handler
function initPreloader() {
    const preloader = document.getElementById('preloader');
    const statusText = document.getElementById('preloader-status');
    if (!preloader) return;

    // List of cultivation-themed status transitions
    const statuses = [
        "Gathering Soul Qi...",
        "Tempering Celestial Body...",
        "Unlocking Nine Dragons...",
        "Sensing Heavenly Dao...",
        "Ascending to Divinity..."
    ];
    let currentIndex = 0;

    // Cycle text animation
    const textInterval = setInterval(() => {
        if (currentIndex < statuses.length - 1) {
            currentIndex++;
            if (statusText) {
                statusText.textContent = statuses[currentIndex];
            }
        }
    }, 400);

    // Lock page scrolling while loading
    document.body.style.overflow = 'hidden';

    // Fade out preloader when window fully loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            clearInterval(textInterval);
            if (statusText) {
                statusText.textContent = "Ascending to Divinity...";
            }
            // Fade out overlay
            preloader.classList.add('fade-out');
            // Restore scrolling
            document.body.style.overflow = '';
        }, 1000);
    });
}
