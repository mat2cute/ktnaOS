(function ClackVisualizer() {
    const playbar = document.querySelector(".main-nowPlayingBar-container") || document.querySelector(".Root__now-playing-bar");
    if (!playbar || !Spicetify || !Spicetify.Player) {
        setTimeout(ClackVisualizer, 500);
        return;
    }

    if (document.getElementById("clack-visualizer")) return;
    const computedStyle = window.getComputedStyle(playbar);
    if (computedStyle.position === 'static') {
        playbar.style.position = 'relative';
    }
    const canvas = document.createElement("canvas");
    canvas.id = "clack-visualizer";
    canvas.style.position = "absolute";
    canvas.style.bottom = "100%";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "64px";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "10";
    canvas.style.opacity = "0.8";
    
    playbar.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    
    let isPlaying = Spicetify.Player.isPlaying();
    let animFrame;
    let bars = [];
    let numBars = 100;
    Spicetify.Player.addEventListener("onplaypause", () => {
        isPlaying = Spicetify.Player.isPlaying();
        if (isPlaying) {
            renderLoop();
        }
    });

    function resize() {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        numBars = Math.floor(canvas.width / 12);
        bars = new Array(numBars).fill(0);
    }
    window.addEventListener("resize", resize);
    resize();
    function renderLoop() {
        if (!isPlaying) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const rawColor = getComputedStyle(document.documentElement).getPropertyValue('--spice-button-active').trim() || '#00ffcc';
            ctx.fillStyle = rawColor;
            for (let i = 0; i < numBars; i++) {
                ctx.fillRect(i * 12, canvas.height - 4, 10, 4);
            }
            return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const rawColor = getComputedStyle(document.documentElement).getPropertyValue('--spice-button-active').trim() || '#00ffcc';
        ctx.fillStyle = rawColor;

        const barWidth = 10;
        const gap = 2;
        const maxHt = canvas.height;

        for (let i = 0; i < numBars; i++) {
            let targetHt = Math.random() * maxHt;
            if (Math.random() > 0.3) {
                targetHt = Math.random() * (maxHt * 0.4);
            }
            if (i < 5 || i > numBars - 5) {
                targetHt = Math.random() * (maxHt * 0.2);
            }
            bars[i] += (targetHt - bars[i]) * 0.3;
            const chunkSize = 4;
            let blockHeight = Math.floor(bars[i] / chunkSize) * chunkSize;
            if (blockHeight < chunkSize) blockHeight = chunkSize; 
            for (let y = 0; y < blockHeight; y += chunkSize + 1) {
                ctx.fillRect(i * (barWidth + gap), maxHt - y - chunkSize, barWidth, chunkSize);
            }
        }

        animFrame = requestAnimationFrame(renderLoop);
    }

    if (isPlaying) {
        renderLoop();
    } else {
        setTimeout(renderLoop, 100); 
    }
})();
