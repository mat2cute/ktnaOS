// ---- ASCII VISUALIZER (LOW RAM) ----
(function ClackVisualizer() {
    const playbar = document.querySelector(".main-nowPlayingBar-container") || document.querySelector(".Root__now-playing-bar");
    if (!playbar || !Spicetify || !Spicetify.Player) {
        setTimeout(ClackVisualizer, 500);
        return;
    }

    if (document.getElementById("clack-visualizer-ascii")) return;

    const computedStyle = window.getComputedStyle(playbar);
    if (computedStyle.position === 'static') {
        playbar.style.position = 'relative';
    }

    const asciiWrapper = document.createElement("div");
    asciiWrapper.id = "clack-visualizer-ascii";
    asciiWrapper.style.position = "absolute";
    asciiWrapper.style.bottom = "100%";
    asciiWrapper.style.left = "0";
    asciiWrapper.style.width = "100%";
    asciiWrapper.style.height = "16px";
    asciiWrapper.style.pointerEvents = "none";
    asciiWrapper.style.zIndex = "10";
    asciiWrapper.style.overflow = "hidden";
    asciiWrapper.style.whiteSpace = "pre";
    asciiWrapper.style.fontFamily = "'Cascadia Code', Consolas, monospace";
    asciiWrapper.style.fontSize = "12px";
    asciiWrapper.style.lineHeight = "16px";
    asciiWrapper.style.color = "var(--spice-button-active)";
    asciiWrapper.style.opacity = "0.7";
    asciiWrapper.style.textShadow = "0 0 5px currentColor";

    playbar.appendChild(asciiWrapper);

    let isPlaying = Spicetify.Player.isPlaying();
    Spicetify.Player.addEventListener("onplaypause", function () {
        isPlaying = Spicetify.Player.isPlaying();
    });

    const chars = [" ", "▂", "▃", "▄", "▅", "▆", "▇", "█"];
    let numBars = 150;
    
    function resize() {
        numBars = Math.floor(asciiWrapper.clientWidth / 7.2);
        if (numBars < 10) numBars = 100;
    }
    
    let resizeTimeout;
    window.addEventListener("resize", function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resize, 200);
    });
    resize();

    setInterval(function renderAscii() {
        if (!isPlaying) {
            asciiWrapper.innerText = new Array(numBars).fill(" ").join("");
            return;
        }
        let str = "";
        for (let i = 0; i < numBars; i++) {
            let ht = Math.floor(Math.random() * chars.length);
            if (Math.random() > 0.6) ht = Math.floor(Math.random() * 3); // Weight it down slightly
            if (i < 5 || i > numBars - 5) ht = Math.floor(Math.random() * 3);
            str += chars[ht];
        }
        asciiWrapper.innerText = str;
    }, 1000 / 15); // Clamped to 15 FPS
})();

// ---- NOW PLAYING AMBIENCE GLOW ----
(function ClackNPVAmbience() {
    function injectGlow() {
        var coverArt = document.querySelector('.main-nowPlayingWidget-coverArt .cover-art img') || document.querySelector('.main-nowPlayingView-coverArt img');
        if (!coverArt) return;

        var glowContainer = document.getElementById('clack-npv-ambience');
        if (!glowContainer) {
            glowContainer = document.createElement('div');
            glowContainer.id = 'clack-npv-ambience';
            glowContainer.style.cssText = 'position:absolute;top:-10%;left:-10%;width:120%;height:120%;filter:blur(20px);opacity:0.8;z-index:-1;background-size:cover;background-position:center;pointer-events:none;transition:background-image 0.5s ease;';

            var parent = coverArt.closest('.main-nowPlayingWidget-coverArt') || coverArt.closest('.main-nowPlayingView-coverArt');
            if (parent) {
                parent.style.position = 'relative';
                parent.style.zIndex = '1';
                parent.appendChild(glowContainer);
            }
        }

        if (glowContainer.style.backgroundImage !== 'url("' + coverArt.src + '")') {
            glowContainer.style.backgroundImage = 'url("' + coverArt.src + '")';
        }
    }

    if (Spicetify && Spicetify.Player) {
        Spicetify.Player.addEventListener('songchange', function() { setTimeout(injectGlow, 100); });
        setTimeout(injectGlow, 500);
    } else {
        setTimeout(ClackNPVAmbience, 500);
    }
})();

// ---- DATA INJECTION SCANNER (CLEAN GLITCH) ----
(function KtnaDataScanner() {
    function triggerScan() {
        setTimeout(function () {
            var artContainer = document.querySelector('.main-nowPlayingWidget-coverArt') || document.querySelector('.main-nowPlayingView-coverArt');
            if (!artContainer) return;

            artContainer.classList.remove('ktna-glitch-active');
            void artContainer.offsetWidth; // Force reflow
            artContainer.classList.add('ktna-glitch-active');
        }, 50);
    }

    if (Spicetify && Spicetify.Player) {
        Spicetify.Player.addEventListener('songchange', triggerScan);
        Spicetify.Player.addEventListener('onplaypause', triggerScan);
    } else {
        setTimeout(KtnaDataScanner, 500);
    }
})();

// ---- COSMIC VOID BACKGROUND ----
(function CosmicBackground() {
    var canvas = document.createElement('canvas');
    canvas.id = 'ktna-cosmic-bg';
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:999999;pointer-events:none;display:none;mix-blend-mode:screen;';
    document.body.appendChild(canvas);

    var ctx = canvas.getContext('2d');
    var stars = [];
    var shootingStars = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        stars = [];
        for (var i = 0; i < 300; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 1.5,
                twinkle: Math.random(),
                speed: (Math.random() * 0.05) + 0.01
            });
        }
    }

    let resizeTimeout2;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout2);
        resizeTimeout2 = setTimeout(resize, 100);
    });
    resize();

    let animationId = null;
    function draw() {
        if (document.body.getAttribute('data-ktna-theme') !== 'Cosmic Void') {
            canvas.style.display = 'none';
            animationId = null;
            return;
        }
        canvas.style.display = 'block';

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // draw distant planet
        ctx.fillStyle = "rgba(255,255,255,0.03)";
        ctx.beginPath();
        ctx.arc(canvas.width * 0.85, canvas.height * 0.25, 200, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(255,255,255,0.02)";
        ctx.beginPath();
        ctx.arc(canvas.width * 0.85, canvas.height * 0.25, 220, 0, Math.PI * 2);
        ctx.fill();

        // draw stars
        ctx.fillStyle = "#ffffff";
        for (var i = 0; i < stars.length; i++) {
            var s = stars[i];
            s.twinkle += s.speed;
            var opacity = Math.abs(Math.sin(s.twinkle)) * 0.8 + 0.2;
            ctx.globalAlpha = opacity;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;

        // shooting stars
        if (Math.random() < 0.01) {
            shootingStars.push({
                x: Math.random() * canvas.width,
                y: 0,
                len: Math.random() * 80 + 30,
                speed: Math.random() * 15 + 10,
                angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1)
            });
        }

        ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
        ctx.lineWidth = 1;
        for (var i = shootingStars.length - 1; i >= 0; i--) {
            var ss = shootingStars[i];
            ctx.beginPath();
            ctx.moveTo(ss.x, ss.y);
            ctx.lineTo(ss.x - Math.cos(ss.angle) * ss.len, ss.y - Math.sin(ss.angle) * ss.len);
            ctx.stroke();
            ss.x += Math.cos(ss.angle) * ss.speed;
            ss.y += Math.sin(ss.angle) * ss.speed;
            if (ss.y > canvas.height || ss.x > canvas.width) {
                shootingStars.splice(i, 1);
            }
        }
        
        animationId = requestAnimationFrame(draw);
    }

    new MutationObserver(function() {
        if (document.body.getAttribute('data-ktna-theme') === 'Cosmic Void') {
            if (!animationId) draw();
        }
    }).observe(document.body, { attributes: true, attributeFilter: ['data-ktna-theme'] });

    if (document.body.getAttribute('data-ktna-theme') === 'Cosmic Void') {
        draw();
    }
})();

// ---- GLASSMORPHIC DASHBOARD ----
(function KtnaDashboard() {
    function injectDashboard() {
        var sidebar = document.querySelector('.Root__right-sidebar');
        if (!sidebar) {
            setTimeout(injectDashboard, 1000);
            return;
        }
        
        if (sidebar.style.position !== 'relative' && sidebar.style.position !== 'absolute') {
            sidebar.style.position = 'relative';
        }

        var dashboard = document.getElementById('ktna-tui-dashboard');
        if (!dashboard) {
            dashboard = document.createElement('div');
            dashboard.id = 'ktna-tui-dashboard';
            dashboard.style.cssText = 'position:absolute;top:15px;left:0;width:100%;height:calc(100% - 15px);background:var(--spice-main);color:var(--spice-text);display:flex;flex-direction:column;font-family:"Cascadia Code", Consolas, monospace;padding:20px;box-sizing:border-box;overflow:hidden;z-index:999; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;';

            // Track Info Container (Glassmorphic Cards)
            var trackInfo = document.createElement('div');
            trackInfo.id = 'ktna-glass-trackinfo';
            trackInfo.style.cssText = 'flex:1;display:flex;flex-direction:column;gap:20px;overflow-y:auto;z-index:1; padding-right:5px;';
            dashboard.appendChild(trackInfo);

            sidebar.appendChild(dashboard);
        }

        // Metadata Updater
        function updateMetadata() {
            var infoDiv = document.getElementById('ktna-glass-trackinfo');
            var dash = document.getElementById('ktna-tui-dashboard');
            if (!infoDiv || !dash) return;

            if (!Spicetify.Player || !Spicetify.Player.data) return;
            var track = Spicetify.Player.data.track || Spicetify.Player.data.item || Spicetify.Player.data;
            if (!track || !track.metadata) return;
            
            var meta = track.metadata;
            var title = meta.title || "UNKNOWN";
            var artist = meta.artist_name || "UNKNOWN";
            var duration = meta.duration || "0";
            var popularity = meta.popularity || "0";
            var album = meta.album_title || "UNKNOWN";
            var release = meta.release_date || "UNKNOWN";
            var explicit = meta.is_explicit === "true" ? "YES" : "NO";
            var hasLyrics = meta.has_lyrics === "true" ? "YES" : "NO";
            
            var image = meta.image_url || "";
            if (image.indexOf("spotify:image:") === 0) image = "https://i.scdn.co/image/" + image.split(":")[2];

            var colorAccent = getComputedStyle(document.documentElement).getPropertyValue('--spice-button-active').trim() || '#00FF00';
            var colorAlert = getComputedStyle(document.documentElement).getPropertyValue('--spice-notification-error').trim() || '#FF0000';
            var colorMuted = getComputedStyle(document.documentElement).getPropertyValue('--spice-subtext').trim() || '#888888';

            var tuiGlassCard = 'background:transparent; border:1px dashed var(--spice-button-active); padding:15px; position:relative; overflow:hidden; font-family:"Cascadia Code", Consolas, monospace; color:var(--spice-text);';

            var titleStr = title.length > 24 ? title.substring(0, 22) + '..' : title;
            var albumStr = album.length > 20 ? album.substring(0, 18) + '..' : album;

            infoDiv.innerHTML = `
                <div style="${tuiGlassCard} display:flex; flex-direction:column; align-items:center; gap:15px; border-top: 3px solid ${colorAccent};">
                    <div style="position:absolute; top:8px; left:12px; font-size:10px; color:${colorMuted}; font-weight:bold; letter-spacing:1px;">[ARTWORK_FEED]</div>
                    
                    <div style="position:relative; width:180px; height:180px; margin-top:20px; border:1px solid var(--spice-button-active);">
                        <img src="${image}" style="width:100%; height:100%; object-fit:cover;" />
                        <!-- TUI Scanner Corners -->
                        <div style="position:absolute; top:0; left:0; width:15px; height:15px; border-top:2px solid ${colorAccent}; border-left:2px solid ${colorAccent};"></div>
                        <div style="position:absolute; top:0; right:0; width:15px; height:15px; border-top:2px solid ${colorAccent}; border-right:2px solid ${colorAccent};"></div>
                        <div style="position:absolute; bottom:0; left:0; width:15px; height:15px; border-bottom:2px solid ${colorAccent}; border-left:2px solid ${colorAccent};"></div>
                        <div style="position:absolute; bottom:0; right:0; width:15px; height:15px; border-bottom:2px solid ${colorAccent}; border-right:2px solid ${colorAccent};"></div>
                    </div>
                    
                    <div style="display:flex; flex-direction:column; align-items:center; text-align:center; width:100%; margin-top:5px;">
                        <span style="font-weight:900; font-size:15px; color:var(--spice-text); letter-spacing:0.5px;">> ${titleStr} _</span>
                        <span style="font-size:11px; color:${colorAccent}; margin-top:4px; text-transform:uppercase; font-weight:bold; letter-spacing:1px; opacity:0.8;">${artist}</span>
                    </div>
                </div>

                <div style="${tuiGlassCard} display:flex; flex-direction:column; gap:12px;">
                    <div style="font-size:11px; font-weight:bold; color:${colorAccent}; border-bottom:1px dashed var(--spice-border-active); padding-bottom:8px; margin-bottom:4px; text-transform:uppercase; letter-spacing:2px; display:flex; justify-content:space-between; align-items:center;">
                        <span>[SYS_DATA]</span>
                    </div>
                    
                    <div style="display:flex; justify-content:space-between; font-size:11px; padding:2px 0;">
                        <span style="color:var(--spice-subtext);">+ ALBUM:</span>
                        <span style="color:var(--spice-text); font-weight:bold;">${albumStr}</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; font-size:11px; padding:2px 0;">
                        <span style="color:var(--spice-subtext);">+ RELEASE:</span>
                        <span style="color:var(--spice-text); font-weight:bold;">${release}</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; font-size:11px; padding:2px 0;">
                        <span style="color:var(--spice-subtext);">+ POPULARITY:</span>
                        <span style="color:${colorAccent}; font-weight:bold;">[ ${popularity}% ]</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; font-size:11px; padding:2px 0;">
                        <span style="color:var(--spice-subtext);">+ EXPLICIT:</span>
                        <span style="color:${explicit === 'YES' ? colorAlert : 'var(--spice-text)'}; font-weight:bold;">${explicit}</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; font-size:11px; padding:2px 0;">
                        <span style="color:var(--spice-subtext);">+ LYRICS:</span>
                        <span style="color:${hasLyrics === 'YES' ? 'var(--spice-text)' : colorMuted}; font-weight:bold;">${hasLyrics}</span>
                    </div>
                    
                    <div style="margin-top:12px; font-size:10px; color:${colorAccent}; background:transparent; padding:8px; border:1px solid var(--spice-border-active); display:flex; justify-content:space-between; align-items:center;">
                        <span style="font-weight:bold;">MEM_ALLOC</span>
                        <div style="display:flex; align-items:center; gap:5px;">
                            <span style="letter-spacing:-1px;">[<span style="color:${colorAccent};">█████████</span><span style="color:var(--spice-border-active);">█████</span>]</span>
                            <span style="color:var(--spice-text); font-weight:bold;">OK</span>
                        </div>
                    </div>
                </div>
            `;

        Spicetify.Player.addEventListener('songchange', updateMetadata);
        updateMetadata();
    }
    
    if (Spicetify && Spicetify.Player) {
        injectDashboard();
    } else {
        setTimeout(injectDashboard, 500);
    }
})();
