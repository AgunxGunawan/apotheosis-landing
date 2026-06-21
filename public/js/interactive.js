let isVideoMuted = true; // Global sound state preference

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
                        video.muted = isVideoMuted; // Enforce global sound preference
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
            video.muted = isVideoMuted; // Enforce global sound preference
            video.play().catch(() => {});
        }
    }

    // Initialize sound toggle controls
    initCharacterSound();

    // Initialize Video Slider controls
    initVideoSlider();
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
                card.style.opacity = '1';
            } else {
                card.classList.add('hidden');
            }
        });
    });
}

// Character Video Sound Toggle Controller
function initCharacterSound() {
    const soundButtons = document.querySelectorAll('.sound-toggle-btn');
    const panes = document.querySelectorAll('.char-pane');

    soundButtons.forEach(btn => {
        const pane = btn.closest('.char-pane');
        if (!pane) return;
        const video = pane.querySelector('video');
        
        if (video) {
            const source = video.querySelector('source');
            const hideBtn = () => {
                btn.style.display = 'none';
            };

            // Hide toggle button if video load fails (showing fallback)
            video.addEventListener('error', hideBtn);
            if (source) {
                source.addEventListener('error', hideBtn);
            }

            // Sync state on load
            video.addEventListener('loadedmetadata', () => {
                video.muted = isVideoMuted;
                updateSoundIcons(btn, isVideoMuted);
            });

            // Fallback: If metadata is already loaded
            if (video.readyState >= 1) {
                video.muted = isVideoMuted;
                updateSoundIcons(btn, isVideoMuted);
            }

            // Toggle sound action
            btn.addEventListener('click', (e) => {
                e.stopPropagation(); // prevent panel event bubbles
                isVideoMuted = !isVideoMuted;

                // Sync all video elements to match
                panes.forEach(p => {
                    const v = p.querySelector('video');
                    const b = p.querySelector('.sound-toggle-btn');
                    if (v) {
                        v.muted = isVideoMuted;
                        // If unmuted and active pane, try playing
                        if (!isVideoMuted && v.paused && p.classList.contains('active')) {
                            v.play().catch(() => {});
                        }
                    }
                    if (b) {
                        updateSoundIcons(b, isVideoMuted);
                    }
                });
            });
        } else {
            btn.style.display = 'none';
        }
    });

    function updateSoundIcons(btn, isMuted) {
        const mutedIcon = btn.querySelector('.sound-icon-muted');
        const unmutedIcon = btn.querySelector('.sound-icon-unmuted');
        if (mutedIcon && unmutedIcon) {
            if (isMuted) {
                mutedIcon.style.display = 'block';
                unmutedIcon.style.display = 'none';
            } else {
                mutedIcon.style.display = 'none';
                unmutedIcon.style.display = 'block';
            }
        }
    }
}

// Character Video Slider Controller
function initVideoSlider() {
    const mediaContainers = document.querySelectorAll('.char-media-container');

    mediaContainers.forEach(container => {
        const videosStr = container.getAttribute('data-videos');
        if (!videosStr) return;

        const videos = videosStr.split(',');
        const controls = container.querySelector('.video-slider-controls');
        
        if (videos.length <= 1) {
            if (controls) controls.style.display = 'none';
            return;
        } else {
            if (controls) controls.style.display = 'flex';
        }

        const charId = container.getAttribute('data-char');
        const videoElement = container.querySelector('video');
        if (!videoElement) return;
        const sourceElement = videoElement.querySelector('source');
        if (!sourceElement) return;
        const prevBtn = container.querySelector('.prev-btn');
        const nextBtn = container.querySelector('.next-btn');

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                let currentIndex = parseInt(container.getAttribute('data-current-index')) || 0;
                currentIndex = (currentIndex - 1 + videos.length) % videos.length;
                container.setAttribute('data-current-index', currentIndex);
                changeVideo(currentIndex);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                let currentIndex = parseInt(container.getAttribute('data-current-index')) || 0;
                currentIndex = (currentIndex + 1) % videos.length;
                container.setAttribute('data-current-index', currentIndex);
                changeVideo(currentIndex);
            });
        }

        function changeVideo(index) {
            const newSrc = `public/assets/videos/characters/${charId}/${videos[index]}`;
            const wasPlaying = !videoElement.paused;
            
            sourceElement.src = newSrc;
            videoElement.load();
            videoElement.muted = isVideoMuted;
            
            // Try to play if it was playing before, or if it's the active pane
            const pane = container.closest('.char-pane');
            if (wasPlaying || (pane && pane.classList.contains('active'))) {
                videoElement.play().catch(err => {
                    console.log('Video play interrupted: ', err);
                });
            }
        }
    });
}

