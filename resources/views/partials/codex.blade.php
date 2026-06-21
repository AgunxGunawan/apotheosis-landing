<!-- Character Codex Section -->
<section id="characters" class="characters-section reveal">
    <div class="container">
        <div class="section-header">
            <h2>Character Codex</h2>
            <div class="sub-title">Para Pengendali Takdir di Apotheosis</div>
            <div class="divider"></div>
        </div>

        <div class="character-grid">
            <!-- Navigation Tabs -->
                <button class="char-nav-btn active" data-character="luo_zheng">
                    <div class="char-btn-info">
                        <span class="char-btn-name">Luo Zheng</span>
                        <span class="char-btn-title">Main Character</span>
                    </div>
                    <span class="char-btn-symbol">☯</span>
                </button>
                <button class="char-nav-btn" data-character="ning_yudie">
                    <div class="char-btn-info">
                        <span class="char-btn-name">Ning Yudie</span>
                        <span class="char-btn-title">Cloud Palace Leader</span>
                    </div>
                    <span class="char-btn-symbol">❄</span>
                </button>
                <button class="char-nav-btn" data-character="yun_luo">
                    <div class="char-btn-info">
                        <span class="char-btn-name">Yun Luo</span>
                        <span class="char-btn-title">Mysterious Avatar</span>
                    </div>
                    <span class="char-btn-symbol">⚡</span>
                </button>
                <button class="char-nav-btn" data-character="su_lingyun">
                    <div class="char-btn-info">
                        <span class="char-btn-name">Su Lingyun</span>
                        <span class="char-btn-title">Mountain Sea Mentor</span>
                    </div>
                    <span class="char-btn-symbol">📜</span>
                </button>
                <button class="char-nav-btn" data-character="tianqiong">
                    <div class="char-btn-info">
                        <span class="char-btn-name">Tianqiong</span>
                        <span class="char-btn-title">Dragon Sovereign Spirit</span>
                    </div>
                    <span class="char-btn-symbol">🐉</span>
                </button>
                <button class="char-nav-btn" data-character="huo_yuner">
                    <div class="char-btn-info">
                        <span class="char-btn-name">Huo Yun'er</span>
                        <span class="char-btn-title">Phoenix Princess</span>
                    </div>
                    <span class="char-btn-symbol">🔥</span>
                </button>
                <button class="char-nav-btn" data-character="xun">
                    <div class="char-btn-info">
                        <span class="char-btn-name">Xun</span>
                        <span class="char-btn-title">Fiend Queen</span>
                    </div>
                    <span class="char-btn-symbol">⚔</span>
                </button>
                <button class="char-nav-btn" data-character="mu_mingxue">
                    <div class="char-btn-info">
                        <span class="char-btn-name">Mu Mingxue</span>
                        <span class="char-btn-title">Divine Saint</span>
                    </div>
                    <span class="char-btn-symbol">✨</span>
                </button>
            </div>

            <!-- Display Codex Content -->
            <div class="character-display">
                <!-- Luo Zheng -->
                <div class="char-pane active" id="char-luo_zheng">
                    <div class="char-details">
                        <h3>Luo Zheng (罗征)</h3>
                        <span class="char-identity">The Divine Body Tempering Master</span>
                        <p class="char-desc">
                            Pewaris klan Luo yang jatuh menjadi budak tambang. Dengan takdir gigihnya, ia menyatukan tubuhnya dengan naskah emas kuno yang memungkinkan fisiknya bertindak sebagai senjata magis yang terus berevolusi. Menolak menyerah pada takdir semesta demi menyelamatkan adiknya, Luo Yan.
                        </p>
                        <div class="char-stats">
                            <div class="stat-item">
                                <span class="stat-label">Cultivation Level</span>
                                <span class="stat-val">Divine Sea / World Lord</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Weapon / Element</span>
                                <span class="stat-val">Bronze Dragon Body & Stars Shield</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">First Appearance</span>
                                <span class="stat-val">Donghua Ep 1 | Novel Ch 1</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Aura Color</span>
                                <span class="stat-val">Gold & Crimson</span>
                            </div>
                        </div>
                    </div>
                    <div class="char-media-container theme-luo_zheng" data-char="luo_zheng" data-videos="video.mp4" data-current-index="0">
                        <video class="char-video" loop muted playsinline>
                            <source src="{{ asset('assets/videos/characters/luo_zheng/video.mp4') }}" type="video/mp4">
                        </video>
                        <div class="video-slider-controls">
                            <button class="video-nav-btn prev-btn" style="display:none;">◀</button>
                            <button class="video-nav-btn next-btn" style="display:none;">▶</button>
                        </div>
                        <button class="sound-toggle-btn" aria-label="Toggle Sound">
                            <svg class="sound-icon-muted" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <line x1="23" y1="9" x2="17" y2="15"></line>
                                <line x1="17" y1="9" x2="23" y2="15"></line>
                            </svg>
                            <svg class="sound-icon-unmuted" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: none;">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                            </svg>
                        </button>
                        <div class="char-video-fallback" style="background-image: url('{{ asset('assets/images/bg_gold.jpg') }}')">
                            <i>☯</i>
                            <span>Upload Portrait Video (video.mp4)</span>
                        </div>
                    </div>
                </div>

                <!-- Ning Yudie -->
                <div class="char-pane" id="char-ning_yudie">
                    <div class="char-details">
                        <h3>Ning Yudie (宁雨蝶)</h3>
                        <span class="char-identity">Palace Master of Cloud Sect</span>
                        <p class="char-desc">
                            Pemimpin dari sekte Cloud Palace yang sangat dihormati di benua bawah. Menguasai hukum es murni dan kupu-kupu salju surgawi. Memiliki kepribadian yang dingin namun luluh setelah Luo Zheng berulang kali mempertaruhkan nyawa untuk melindunginya.
                        </p>
                        <div class="char-stats">
                            <div class="stat-item">
                                <span class="stat-label">Cultivation Level</span>
                                <span class="stat-val">Soul Realm / Divine Sea</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Weapon / Element</span>
                                <span class="stat-val">Glacial Butterfly Sword & Ice element</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">First Appearance</span>
                                <span class="stat-val">Donghua Ep 26 | Novel Ch 180</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Aura Color</span>
                                <span class="stat-val">Teal & Glacial Blue</span>
                            </div>
                        </div>
                    </div>
                    <div class="char-media-container theme-ning_yudie" data-char="ning_yudie" data-videos="video.mp4,video_1.mp4" data-current-index="0">
                        <video class="char-video" loop muted playsinline>
                            <source src="{{ asset('assets/videos/characters/ning_yudie/video.mp4') }}" type="video/mp4">
                        </video>
                        <div class="video-slider-controls">
                            <button class="video-nav-btn prev-btn">◀</button>
                            <button class="video-nav-btn next-btn">▶</button>
                        </div>
                        <button class="sound-toggle-btn" aria-label="Toggle Sound">
                            <svg class="sound-icon-muted" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <line x1="23" y1="9" x2="17" y2="15"></line>
                                <line x1="17" y1="9" x2="23" y2="15"></line>
                            </svg>
                            <svg class="sound-icon-unmuted" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: none;">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                            </svg>
                        </button>
                        <div class="char-video-fallback" style="background-image: url('{{ asset('assets/images/bg_ice.jpg') }}')">
                            <i>❄</i>
                            <span>Upload Portrait Video (video.mp4)</span>
                        </div>
                    </div>
                </div>

                <!-- Yun Luo -->
                <div class="char-pane" id="char-yun_luo">
                    <div class="char-details">
                        <h3>Yun Luo (云落)</h3>
                        <span class="char-identity">The Mysterious Overseer Avatar</span>
                        <p class="char-desc">
                            Proyeksi fisik misterius dari salah satu dewa terkuat dari dunia atas. Ia menyamar di benua bawah untuk memantau bakat luar biasa dan menyelidiki rahasia semesta bawah. Ia menjadi mentor bayangan yang membimbing Luo Zheng memahami hukum spasial dan dimensi.
                        </p>
                        <div class="char-stats">
                            <div class="stat-item">
                                <span class="stat-label">Cultivation Level</span>
                                <span class="stat-val">True Divinity (Avatar)</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Weapon / Element</span>
                                <span class="stat-val">Void Needle & Spasial Laws</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">First Appearance</span>
                                <span class="stat-val">Donghua Ep 35 | Novel Ch 250</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Aura Color</span>
                                <span class="stat-val">Deep Purple & Indigo</span>
                            </div>
                        </div>
                    </div>
                    <div class="char-media-container theme-yun_luo" data-char="yun_luo" data-videos="video.mp4,video_1.mp4,video_2.mp4" data-current-index="0">
                        <video class="char-video" loop muted playsinline>
                            <source src="{{ asset('assets/videos/characters/yun_luo/video.mp4') }}" type="video/mp4">
                        </video>
                        <div class="video-slider-controls">
                            <button class="video-nav-btn prev-btn">◀</button>
                            <button class="video-nav-btn next-btn">▶</button>
                        </div>
                        <button class="sound-toggle-btn" aria-label="Toggle Sound">
                            <svg class="sound-icon-muted" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <line x1="23" y1="9" x2="17" y2="15"></line>
                                <line x1="17" y1="9" x2="23" y2="15"></line>
                            </svg>
                            <svg class="sound-icon-unmuted" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: none;">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                            </svg>
                        </button>
                        <div class="char-video-fallback" style="background-image: url('{{ asset('assets/images/bg_hero.jpg') }}')">
                            <i>⚡</i>
                            <span>Upload Portrait Video (video.mp4)</span>
                        </div>
                    </div>
                </div>

                <!-- Su Lingyun -->
                <div class="char-pane" id="char-su_lingyun">
                    <div class="char-details">
                        <h3>Su Lingyun (苏灵韵)</h3>
                        <span class="char-identity">Royal Teacher of Mountain Sea Sect</span>
                        <p class="char-desc">
                            Guru pertama Luo Zheng di Mountain Sea Sect. Ia juga merupakan putri dari keluarga kekaisaran benua timur. Meskipun memiliki keterbatasan kultivasi dibanding karakter dunia atas, ia selalu berdedikasi tinggi demi keselamatan Luo Zheng di awal masa latihannya.
                        </p>
                        <div class="char-stats">
                            <div class="stat-item">
                                <span class="stat-label">Cultivation Level</span>
                                <span class="stat-val">Zhaodan / Core Realm</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Weapon / Element</span>
                                <span class="stat-val">Royal Sword / Wind Laws</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">First Appearance</span>
                                <span class="stat-val">Donghua Ep 4 | Novel Ch 22</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Aura Color</span>
                                <span class="stat-val">Emerald Green & Amber</span>
                            </div>
                        </div>
                    </div>
                    <div class="char-media-container theme-su_lingyun" data-char="su_lingyun" data-videos="video.mp4,video_1.mp4" data-current-index="0">
                        <video class="char-video" loop muted playsinline>
                            <source src="{{ asset('assets/videos/characters/su_lingyun/video.mp4') }}" type="video/mp4">
                        </video>
                        <div class="video-slider-controls">
                            <button class="video-nav-btn prev-btn">◀</button>
                            <button class="video-nav-btn next-btn">▶</button>
                        </div>
                        <button class="sound-toggle-btn" aria-label="Toggle Sound">
                            <svg class="sound-icon-muted" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <line x1="23" y1="9" x2="17" y2="15"></line>
                                <line x1="17" y1="9" x2="23" y2="15"></line>
                            </svg>
                            <svg class="sound-icon-unmuted" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: none;">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                            </svg>
                        </button>
                        <div class="char-video-fallback" style="background-image: url('{{ asset('assets/images/bg_mountains.jpg') }}')">
                            <i>📜</i>
                            <span>Upload Portrait Video (video.mp4)</span>
                        </div>
                    </div>
                </div>

                <!-- Tianqiong -->
                <div class="char-pane" id="char-tianqiong">
                    <div class="char-details">
                        <h3>Tianqiong (天穹)</h3>
                        <span class="char-identity">The Ancestral Dragon Soul</span>
                        <p class="char-desc">
                            Jiwa naga primordial raksasa yang disegel di dalam Nine Dragons Cauldron di dalam kesadaran Luo Zheng. Roh naga ini memberikan kekuatan fisik luar biasa melalui pembentukan sisik naga surgawi dan membimbing Luo Zheng mengontrol warisan hukum naga purba.
                        </p>
                        <div class="char-stats">
                            <div class="stat-item">
                                <span class="stat-label">Cultivation Level</span>
                                <span class="stat-val">Ancestral Dragon Sovereign</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Weapon / Element</span>
                                <span class="stat-val">Sovereign Dragon Roar / Soul Element</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">First Appearance</span>
                                <span class="stat-val">Donghua Ep 12 | Novel Ch 50</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Aura Color</span>
                                <span class="stat-val">Deep Gold & Blood Red</span>
                            </div>
                        </div>
                    </div>
                    <div class="char-media-container theme-tianqiong" data-char="tianqiong" data-videos="video.mp4,video_1.mp4" data-current-index="0">
                        <video class="char-video" loop muted playsinline>
                            <source src="{{ asset('assets/videos/characters/tianqiong/video.mp4') }}" type="video/mp4">
                        </video>
                        <div class="video-slider-controls">
                            <button class="video-nav-btn prev-btn">◀</button>
                            <button class="video-nav-btn next-btn">▶</button>
                        </div>
                        <button class="sound-toggle-btn" aria-label="Toggle Sound">
                            <svg class="sound-icon-muted" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <line x1="23" y1="9" x2="17" y2="15"></line>
                                <line x1="17" y1="9" x2="23" y2="15"></line>
                            </svg>
                            <svg class="sound-icon-unmuted" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: none;">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                            </svg>
                        </button>
                        <div class="char-video-fallback" style="background-image: url('{{ asset('assets/images/bg_gold.jpg') }}')">
                            <i>🐉</i>
                            <span>Upload Portrait Video (video.mp4)</span>
                        </div>
                    </div>
                </div>

                <!-- Huo Yun'er -->
                <div class="char-pane" id="char-huo_yuner">
                    <div class="char-details">
                        <h3>Huo Yun'er (火允儿)</h3>
                        <span class="char-identity">Divine Princess of the Phoenix Clan</span>
                        <p class="char-desc">
                            Pewaris berdarah phoenix murni dari Klan Api Kuno di dunia atas. Ia memiliki temperamen yang berapi-api namun setia kawan. Setelah diselamatkan oleh Luo Zheng dalam petualangan di Makam Dewa Kuno, ia bersumpah mendampingi Luo Zheng melawan penindasan takdir.
                        </p>
                        <div class="char-stats">
                            <div class="stat-item">
                                <span class="stat-label">Cultivation Level</span>
                                <span class="stat-val">Divine Sea / World Lord (God Realm)</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Weapon / Element</span>
                                <span class="stat-val">Vermilion Phoenix Bow / Sacred Fire</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">First Appearance</span>
                                <span class="stat-val">Donghua Season 3 | Novel Ch 650</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Aura Color</span>
                                <span class="stat-val">Rose Gold & Intense Flame</span>
                            </div>
                        </div>
                    </div>
                    <div class="char-media-container theme-huo_yuner" data-char="huo_yuner" data-videos="video.mp4,video_1.mp4" data-current-index="0">
                        <video class="char-video" loop muted playsinline>
                            <source src="{{ asset('assets/videos/characters/huo_yuner/video.mp4') }}" type="video/mp4">
                        </video>
                        <div class="video-slider-controls">
                            <button class="video-nav-btn prev-btn">◀</button>
                            <button class="video-nav-btn next-btn">▶</button>
                        </div>
                        <button class="sound-toggle-btn" aria-label="Toggle Sound">
                            <svg class="sound-icon-muted" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <line x1="23" y1="9" x2="17" y2="15"></line>
                                <line x1="17" y1="9" x2="23" y2="15"></line>
                            </svg>
                            <svg class="sound-icon-unmuted" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: none;">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                            </svg>
                        </button>
                        <div class="char-video-fallback" style="background-image: url('{{ asset('assets/images/bg_hero.jpg') }}')">
                            <i>🔥</i>
                            <span>Upload Portrait Video (video.mp4)</span>
                        </div>
                    </div>
                </div>

                <!-- Xun -->
                <div class="char-pane" id="char-xun">
                    <div class="char-details">
                        <h3>Xun (熏)</h3>
                        <span class="char-identity">Fiend Queen</span>
                        <p class="char-desc">
                            Ratu dari Klan Fiend yang bersemayam sebagai roh pedang di dalam Pedang Hitam Luo Zheng. Ia membimbing Luo Zheng dalam menguasai Hukum Pembantaian.
                        </p>
                        <div class="char-stats">
                            <div class="stat-item">
                                <span class="stat-label">Cultivation Level</span>
                                <span class="stat-val">Divine Sea</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Weapon / Element</span>
                                <span class="stat-val">Black Sword & Slaughter Laws</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">First Appearance</span>
                                <span class="stat-val">Donghua Ep 18</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Aura Color</span>
                                <span class="stat-val">Dark Red & Black</span>
                            </div>
                        </div>
                    </div>
                    <div class="char-media-container theme-xun" data-char="xun" data-videos="video.mp4" data-current-index="0">
                        <video class="char-video" loop muted playsinline>
                            <source src="{{ asset('assets/videos/characters/xun/video.mp4') }}" type="video/mp4">
                        </video>
                        <div class="video-slider-controls">
                            <button class="video-nav-btn prev-btn" style="display:none;">◀</button>
                            <button class="video-nav-btn next-btn" style="display:none;">▶</button>
                        </div>
                        <button class="sound-toggle-btn" aria-label="Toggle Sound">
                            <svg class="sound-icon-muted" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <line x1="23" y1="9" x2="17" y2="15"></line>
                                <line x1="17" y1="9" x2="23" y2="15"></line>
                            </svg>
                            <svg class="sound-icon-unmuted" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: none;">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                            </svg>
                        </button>
                        <div class="char-video-fallback" style="background-image: url('{{ asset('assets/images/bg_hero.jpg') }}')">
                            <i>⚔</i>
                            <span>Upload Portrait Video (video.mp4)</span>
                        </div>
                    </div>
                </div>

                <!-- Mu Mingxue -->
                <div class="char-pane" id="char-mu_mingxue">
                    <div class="char-details">
                        <h3>Mu Mingxue (沐茗雪)</h3>
                        <span class="char-identity">Divine Saint</span>
                        <p class="char-desc">
                            Seorang saintes agung dengan kekuatan cahaya murni yang menjadi salah satu sosok terkuat di dunianya.
                        </p>
                        <div class="char-stats">
                            <div class="stat-item">
                                <span class="stat-label">Cultivation Level</span>
                                <span class="stat-val">Divine Realm</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Weapon / Element</span>
                                <span class="stat-val">Light Laws</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">First Appearance</span>
                                <span class="stat-val">Donghua Season 3</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Aura Color</span>
                                <span class="stat-val">White & Silver</span>
                            </div>
                        </div>
                    </div>
                    <div class="char-media-container theme-mu_mingxue" data-char="mu_mingxue" data-videos="video.mp4,video_1.mp4" data-current-index="0">
                        <video class="char-video" loop muted playsinline>
                            <source src="{{ asset('assets/videos/characters/mu_mingxue/video.mp4') }}" type="video/mp4">
                        </video>
                        <div class="video-slider-controls">
                            <button class="video-nav-btn prev-btn">◀</button>
                            <button class="video-nav-btn next-btn">▶</button>
                        </div>
                        <button class="sound-toggle-btn" aria-label="Toggle Sound">
                            <svg class="sound-icon-muted" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <line x1="23" y1="9" x2="17" y2="15"></line>
                                <line x1="17" y1="9" x2="23" y2="15"></line>
                            </svg>
                            <svg class="sound-icon-unmuted" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: none;">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                            </svg>
                        </button>
                        <div class="char-video-fallback" style="background-image: url('{{ asset('assets/images/bg_hero.jpg') }}')">
                            <i>✨</i>
                            <span>Upload Portrait Video (video.mp4)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
