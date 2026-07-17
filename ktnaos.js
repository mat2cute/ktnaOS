(function injectInstantBoot() {
    if (!document.body) {
        setTimeout(injectInstantBoot, 10);
        return;
    }
    if (document.getElementById("ktna-global-boot")) return;

    var bootOverlay = document.createElement("div");
    bootOverlay.id = "ktna-global-boot";

    var sweepKatana = [
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣶⡄",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡿⣿⡃",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⢿⣻⠇⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⠋⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣶⣳⡽⠇⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠏⢻⣿⡇⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠃⡴⠋⠉⠁⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠞⢠⡞⠁⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⢃⣴⠏⠁⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠎⣠⣾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡔⢃⣴⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠊⣰⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⣠⡾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⣡⡾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⣡⡾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⣠⠞⣡⡾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⡠⢊⣠⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⢀⡴⣊⡴⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠠⠶⠥⠾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
    ].join("\n");

    var savedBg = localStorage.getItem("ktnaos-theme-bg") || "#0d0d0d";
    var savedText = localStorage.getItem("ktnaos-theme-text") || "#ffffff";
    var savedButton = localStorage.getItem("ktnaos-theme-button") || "#00ffcc";
    var currentTheme = localStorage.getItem("ktnaos-theme");

    if (currentTheme === "Sora") {
        bootOverlay.innerHTML = '<div class="boot-katana" style="color: ' + savedButton + ' !important; font-size: 14px; white-space: pre-wrap;">' + atob("ICAgX19fX18gX19fXyAgX19fXyAgICAgIF8gICAgCiAgLyBfX18vLyBfXyBcXHwgIF8gXFwgICAgLyBcXCAgIAogIFxcX19fIFxcIHwgIHwgfCB8XykgfCAgLyBfIFxcICAKICAgX19fKSB8IHxffCB8ICBfIDwgIC8gX19fIFxcIAogIHxfX19fLyBcXF9fXy98X3wgXFxfXFwvXy8gICBcXF9cXA==") + '</div><div class="boot-text" style="color: ' + savedText + ' !important;">sora</div>';
    } else {
        bootOverlay.innerHTML = '<div class="boot-katana" style="color: ' + savedButton + ' !important;">' + sweepKatana + '</div><div class="boot-text" style="color: ' + savedText + ' !important;">ktna</div>';
    }
    
    bootOverlay.setAttribute("style", "position: fixed !important; top: 0 !important; left: 0 !important; width: 100vw !important; height: 100vh !important; background: " + savedBg + " !important; z-index: 2147483647 !important; display: flex !important; flex-direction: column !important; gap: 32px !important; justify-content: center !important; align-items: center !important; pointer-events: none !important; transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), backdrop-filter 1s ease !important; backdrop-filter: blur(20px) !important; opacity: 1 !important; visibility: visible !important; overflow: hidden !important;");
    document.body.appendChild(bootOverlay);

    var appRoot = document.querySelector(".Root") || document.getElementById("main") || document.body.firstElementChild;
    if (appRoot && appRoot !== bootOverlay) {
        appRoot.style.opacity = "0";
        appRoot.style.transform = "scale(0.92)";
        appRoot.style.filter = "blur(15px)";
        appRoot.style.transition = "opacity 1.5s ease, transform 1.5s cubic-bezier(0.2, 0.8, 0.2, 1), filter 1.5s ease";
    }

    setTimeout(function() {
        bootOverlay.style.opacity = "0";
        bootOverlay.style.transform = "scale(1.1)";
        if (appRoot && appRoot !== bootOverlay) {
            appRoot.style.opacity = "1";
            appRoot.style.transform = "scale(1)";
            appRoot.style.filter = "blur(0px)";
        }
        setTimeout(function() { bootOverlay.remove(); }, 1500);
    }, 3500);
})();

(function ktnaOSExtension() {
    if (!Spicetify || !Spicetify.Topbar || !Spicetify.React || !Spicetify.ReactDOM || !Spicetify.showNotification || !Spicetify.PopupModal) {
        setTimeout(ktnaOSExtension, 300);
        return;
    }
    const React = Spicetify.React;
    const ReactDOM = Spicetify.ReactDOM;
    const themes = {
        "Catppuccin": {
            main: "#1e1e2e", sidebar: "#1e1e2e", player: "#181825",
            text: "#cdd6f4", subtext: "#bac2de", button: "#cba6f7",
            "button-active": "#f5c2e7", "button-disabled": "#313244",
            "tab-active": "#cba6f7", notification: "#89b4fa",
            "notification-error": "#f38ba8", misc: "#45475a",
            "border-active": "#cba6f7", "border-inactive": "#313244",
            header: "#1e1e2e", highlight: "#313244", banner: "#cba6f7",
            accent: "#cba6f7", "accent-active": "#f5c2e7", "accent-inactive": "#313244"
        },
        "Cyberpunk": {
            main: "#0d0d0d", sidebar: "#0d0d0d", player: "#0d0d0d",
            text: "#ffffff", subtext: "#aaaaaa", button: "#fcee0a",
            "button-active": "#00ffcc", "button-disabled": "#121212",
            "tab-active": "#00ffcc", notification: "#00ffcc",
            "notification-error": "#ff0000", misc: "#333333",
            "border-active": "#00ffcc", "border-inactive": "#333333",
            header: "#ff007f", highlight: "#1a1a1a", banner: "#ff007f",
            accent: "#fcee0a", "accent-active": "#00ffcc", "accent-inactive": "#121212"
        },
        "Matrix": {
            main: "#000000", sidebar: "#000000", player: "#000000",
            text: "#00ff00", subtext: "#00aa00", button: "#00ff00",
            "button-active": "#00ff00", "button-disabled": "#0a1a0a",
            "tab-active": "#00ff00", notification: "#00ff00",
            "notification-error": "#ff0000", misc: "#003300",
            "border-active": "#00ff00", "border-inactive": "#003300",
            header: "#004400", highlight: "#001100", banner: "#00ff00",
            accent: "#00ff00", "accent-active": "#00ff00", "accent-inactive": "#0a1a0a"
        },
        "Vampire": {
            main: "#000000", sidebar: "#000000", player: "#000000",
            text: "#6b6b6b", subtext: "#404040", button: "#400000",
            "button-active": "#800000", "button-disabled": "#050505",
            "tab-active": "#400000", notification: "#800000",
            "notification-error": "#ff0000", misc: "#1a1a1a",
            "border-active": "#400000", "border-inactive": "#1a1a1a",
            header: "#1a1a1a", highlight: "#0a0a0a", banner: "#400000",
            accent: "#400000", "accent-active": "#800000", "accent-inactive": "#050505"
        },
        "Ocean": {
            main: "#000511", sidebar: "#000511", player: "#000511",
            text: "#cce6ff", subtext: "#66b3ff", button: "#00ffff",
            "button-active": "#0099ff", "button-disabled": "#001a33",
            "tab-active": "#0099ff", notification: "#00ffff",
            "notification-error": "#ff0000", misc: "#003366",
            "border-active": "#0099ff", "border-inactive": "#003366",
            header: "#003366", highlight: "#001122", banner: "#00ffff",
            accent: "#00ffff", "accent-active": "#0099ff", "accent-inactive": "#001a33"
        },
        "Sunset": {
            main: "#000000", sidebar: "#000000", player: "#000000",
            text: "#ffaa00", subtext: "#cc8800", button: "#ff8c00",
            "button-active": "#ff4500", "button-disabled": "#1a0f00",
            "tab-active": "#ff4500", notification: "#ff8c00",
            "notification-error": "#ff0000", misc: "#331a00",
            "border-active": "#ff8c00", "border-inactive": "#331a00",
            header: "#ff4500", highlight: "#1a0f00", banner: "#ff8c00",
            accent: "#ff8c00", "accent-active": "#ff4500", "accent-inactive": "#1a0f00"
        },
        "Violet": {
            main: "#050014", sidebar: "#050014", player: "#050014",
            text: "#ffb3ff", subtext: "#cc66ff", button: "#ff00ff",
            "button-active": "#b026ff", "button-disabled": "#1a0033",
            "tab-active": "#ff00ff", notification: "#b026ff",
            "notification-error": "#ff0000", misc: "#2a004d",
            "border-active": "#ff00ff", "border-inactive": "#2a004d",
            header: "#8a2be2", highlight: "#1a0033", banner: "#ff00ff",
            accent: "#ff00ff", "accent-active": "#b026ff", "accent-inactive": "#1a0033"
        },
        "Light": {
            main: "#ffffff", sidebar: "#ffffff", player: "#ffffff",
            text: "#000000", subtext: "#4a5568", button: "#000000",
            "button-active": "#1a202c", "button-disabled": "#e2e8f0",
            "tab-active": "#000000", notification: "#000000",
            "notification-error": "#ff0000", misc: "#edf2f7",
            "border-active": "#000000", "border-inactive": "#e2e8f0",
            header: "#1a202c", highlight: "#f7fafc", banner: "#000000",
            accent: "#000000", "accent-active": "#1a202c", "accent-inactive": "#e2e8f0"
        },
        "Crimson": {
            main: "#1a1c1a", sidebar: "#1a1c1a", player: "#1a1c1a",
            text: "#8b948b", subtext: "#5c635c", button: "#cc0000",
            "button-active": "#ff0000", "button-disabled": "#0f110f",
            "tab-active": "#cc0000", notification: "#ff0000",
            "notification-error": "#ff6666", misc: "#2a2c2a",
            "border-active": "#cc0000", "border-inactive": "#2a2c2a",
            header: "#cc0000", highlight: "#1f221f", banner: "#cc0000",
            accent: "#cc0000", "accent-active": "#ff0000", "accent-inactive": "#0f110f"
        },
        "Blackout": {
            main: "#000000", sidebar: "#000000", player: "#000000",
            text: "#ffffff", subtext: "#cccccc", button: "#ffffff",
            "button-active": "#ffffff", "button-disabled": "#111111",
            "tab-active": "#ffffff", notification: "#ffffff",
            "notification-error": "#ff0000", misc: "#000000",
            "border-active": "#ffffff", "border-inactive": "#000000",
            header: "#ffffff", highlight: "#0a0a0a", banner: "#ffffff",
            accent: "#ffffff", "accent-active": "#ffffff", "accent-inactive": "#111111"
        },
        "Midnight": {
            main: "#010108", sidebar: "#010108", player: "#010108",
            text: "#dcdcf2", subtext: "#8c8ca6", button: "#fcee0a",
            "button-active": "#ffffff", "button-disabled": "#050514",
            "tab-active": "#ffffff", notification: "#ffffff",
            "notification-error": "#ff0000", misc: "#05051a",
            "border-active": "#ffffff", "border-inactive": "#05051a",
            header: "#ffffff", highlight: "#020211", banner: "#ffffff",
            accent: "#ffffff", "accent-active": "#ffffff", "accent-inactive": "#050514"
        },
        "Nord": {
            main: "#2e3440", sidebar: "#2e3440", player: "#2e3440",
            text: "#eceff4", subtext: "#d8dee9", button: "#8fbcbb",
            "button-active": "#88c0d0", "button-disabled": "#3b4252",
            "tab-active": "#88c0d0", notification: "#88c0d0",
            "notification-error": "#bf616a", misc: "#434c5e",
            "border-active": "#81a1c1", "border-inactive": "#434c5e",
            header: "#eceff4", highlight: "#3b4252", banner: "#8fbcbb",
            accent: "#81a1c1", "accent-active": "#88c0d0", "accent-inactive": "#3b4252"
        },
        "Dracula": {
            main: "#282a36", sidebar: "#282a36", player: "#282a36",
            text: "#f8f8f2", subtext: "#6272a4", button: "#bd93f9",
            "button-active": "#ff79c6", "button-disabled": "#44475a",
            "tab-active": "#ff79c6", notification: "#ff79c6",
            "notification-error": "#ff5555", misc: "#44475a",
            "border-active": "#bd93f9", "border-inactive": "#44475a",
            header: "#f8f8f2", highlight: "#44475a", banner: "#bd93f9",
            accent: "#bd93f9", "accent-active": "#ff79c6", "accent-inactive": "#44475a"
        },
        "Gruvbox": {
            main: "#282828", sidebar: "#282828", player: "#282828",
            text: "#ebdbb2", subtext: "#a89984", button: "#fabd2f",
            "button-active": "#fe8019", "button-disabled": "#3c3836",
            "tab-active": "#fe8019", notification: "#fabd2f",
            "notification-error": "#cc241d", misc: "#504945",
            "border-active": "#d79921", "border-inactive": "#504945",
            header: "#ebdbb2", highlight: "#3c3836", banner: "#fabd2f",
            accent: "#d79921", "accent-active": "#fe8019", "accent-inactive": "#3c3836"
        },
        "Tokyo Night": {
            main: "#1a1b26", sidebar: "#1a1b26", player: "#1a1b26",
            text: "#c0caf5", subtext: "#9aa5ce", button: "#7aa2f7",
            "button-active": "#7dcfff", "button-disabled": "#16161e",
            "tab-active": "#7dcfff", notification: "#7dcfff",
            "notification-error": "#f7768e", misc: "#292e42",
            "border-active": "#7aa2f7", "border-inactive": "#292e42",
            header: "#c0caf5", highlight: "#1f2335", banner: "#7aa2f7",
            accent: "#7aa2f7", "accent-active": "#7dcfff", "accent-inactive": "#16161e"
        },
        "Tokyo Night Light": {
            main: "#d5d6db", sidebar: "#d5d6db", player: "#d5d6db",
            text: "#343b58", subtext: "#565f89", button: "#34548a",
            "button-active": "#0f4b6e", "button-disabled": "#e9e9ed",
            "tab-active": "#0f4b6e", notification: "#0f4b6e",
            "notification-error": "#8c4351", misc: "#c4c8da",
            "border-active": "#34548a", "border-inactive": "#c4c8da",
            header: "#343b58", highlight: "#cbccd1", banner: "#34548a",
            accent: "#34548a", "accent-active": "#0f4b6e", "accent-inactive": "#e9e9ed"
        },
        "Sakura Blossom": {
            main: "#fffdfd", sidebar: "#fffdfd", player: "#fffdfd",
            text: "#5c4e5c", subtext: "#a38ba3", button: "#ffb7c5",
            "button-active": "#ff8da1", "button-disabled": "#f4eef4",
            "tab-active": "#ff8da1", notification: "#ff8da1",
            "notification-error": "#d63c5e", misc: "#faeefa",
            "border-active": "#ffb7c5", "border-inactive": "#f4eef4",
            header: "#5c4e5c", highlight: "#fcf4fc", banner: "#ffb7c5",
            accent: "#ffb7c5", "accent-active": "#ff8da1", "accent-inactive": "#f4eef4"
        },
        "Neon": {
            main: "#000000", sidebar: "#000000", player: "#000000",
            text: "#85d03a", subtext: "#468232", button: "#9c27b0",
            "button-active": "#e040fb", "button-disabled": "#1a1a1a",
            "tab-active": "#e040fb", notification: "#e040fb",
            "notification-error": "#d50000", misc: "#111111",
            "border-active": "#9c27b0", "border-inactive": "#111111",
            header: "#85d03a", highlight: "#0a0a0a", banner: "#9c27b0",
            accent: "#9c27b0", "accent-active": "#e040fb", "accent-inactive": "#1a1a1a"
        },
        "Sora": {
            main: "#282a2e", sidebar: "#1f2124", player: "#151618",
            text: "#e6e8eb", subtext: "#8c929d", button: "#ff4100",
            "button-active": "#ff6229", "button-disabled": "#36393f",
            "tab-active": "#ff6229", notification: "#ff4100",
            "notification-error": "#cc0000", misc: "#1f2124",
            "border-active": "#ff4100", "border-inactive": "#40444b",
            header: "#ffffff", highlight: "#36393f", banner: "#ff4100",
            accent: "#ff4100", "accent-active": "#ff6229", "accent-inactive": "#36393f"
        },
        "Adaptive": {
            main: "#010108", sidebar: "#010108", player: "#010108",
            text: "#ffffff", subtext: "#888888", button: "#ffffff",
            "button-active": "#ffffff", "button-disabled": "#333333",
            "tab-active": "#ffffff", notification: "#ffffff",
            "notification-error": "#ff0000", misc: "#111111",
            "border-active": "#ffffff", "border-inactive": "#222222",
            header: "#ffffff", highlight: "#1a1a1a", banner: "#ffffff",
            accent: "#ffffff", "accent-active": "#ffffff", "accent-inactive": "#222222"
        },
        "Matrix": {
            main: "#0D0D0D", sidebar: "#0D0D0D", player: "#0D0D0D",
            text: "#00FF41", subtext: "#008F11", button: "#00FF41",
            "button-active": "#00FF41", "button-disabled": "#003B00",
            "tab-active": "#00FF41", notification: "#00FF41",
            "notification-error": "#e22134", misc: "#003B00",
            "border-active": "#00FF41", "border-inactive": "#003B00",
            header: "#003B00", highlight: "#008F11", banner: "#00FF41",
            accent: "#00FF41", "accent-active": "#00FF41", "accent-inactive": "#000000"
        },
        "Cyberpunk Red": {
            main: "#000000", sidebar: "#000000", player: "#000000",
            text: "#FFFFFF", subtext: "#B8B8B8", button: "#FCEE0A",
            "button-active": "#00FFFF", "button-disabled": "#111111",
            "tab-active": "#00FFFF", notification: "#00FFFF",
            "notification-error": "#FF003C", misc: "#333333",
            "border-active": "#FF003C", "border-inactive": "#333333",
            header: "#333333", highlight: "#FF003C", banner: "#FCEE0A",
            accent: "#FCEE0A", "accent-active": "#00FFFF", "accent-inactive": "#111111"
        },
        "Dracula": {
            main: "#282a36", sidebar: "#282a36", player: "#282a36",
            text: "#f8f8f2", subtext: "#6272a4", button: "#bd93f9",
            "button-active": "#ff79c6", "button-disabled": "#44475a",
            "tab-active": "#ff79c6", notification: "#8be9fd",
            "notification-error": "#ff5555", misc: "#44475a",
            "border-active": "#bd93f9", "border-inactive": "#44475a",
            header: "#44475a", highlight: "#44475a", banner: "#bd93f9",
            accent: "#bd93f9", "accent-active": "#ff79c6", "accent-inactive": "#282a36"
        },
        "Nord": {
            main: "#2E3440", sidebar: "#2E3440", player: "#2E3440",
            text: "#ECEFF4", subtext: "#D8DEE9", button: "#88C0D0",
            "button-active": "#8FBCBB", "button-disabled": "#3B4252",
            "tab-active": "#8FBCBB", notification: "#EBCB8B",
            "notification-error": "#BF616A", misc: "#3B4252",
            "border-active": "#81A1C1", "border-inactive": "#3B4252",
            header: "#434C5E", highlight: "#4C566A", banner: "#88C0D0",
            accent: "#88C0D0", "accent-active": "#8FBCBB", "accent-inactive": "#2E3440"
        },
        "Monokai": {
            main: "#2d2a2e", sidebar: "#2d2a2e", player: "#2d2a2e",
            text: "#fcfcfa", subtext: "#939293", button: "#fc9867",
            "button-active": "#ab9df2", "button-disabled": "#403e41",
            "tab-active": "#ab9df2", notification: "#78dce8",
            "notification-error": "#ff6188", misc: "#403e41",
            "border-active": "#ab9df2", "border-inactive": "#403e41",
            header: "#403e41", highlight: "#727072", banner: "#a9dc76",
            accent: "#fc9867", "accent-active": "#ab9df2", "accent-inactive": "#2d2a2e"
        },
        "Gruvbox Dark": {
            main: "#282828", sidebar: "#282828", player: "#282828",
            text: "#ebdbb2", subtext: "#a89984", button: "#fabd2f",
            "button-active": "#b8bb26", "button-disabled": "#3c3836",
            "tab-active": "#b8bb26", notification: "#83a598",
            "notification-error": "#fb4934", misc: "#3c3836",
            "border-active": "#8ec07c", "border-inactive": "#3c3836",
            header: "#504945", highlight: "#665c54", banner: "#d3869b",
            accent: "#fabd2f", "accent-active": "#b8bb26", "accent-inactive": "#282828"
        },
        "Synthwave": {
            main: "#262335", sidebar: "#262335", player: "#262335",
            text: "#ffffff", subtext: "#848bbd", button: "#f92aad",
            "button-active": "#f92aad", "button-disabled": "#34294f",
            "tab-active": "#f92aad", notification: "#36f9f6",
            "notification-error": "#fe4450", misc: "#34294f",
            "border-active": "#f92aad", "border-inactive": "#34294f",
            header: "#34294f", highlight: "#34294f", banner: "#36f9f6",
            accent: "#f92aad", "accent-active": "#f92aad", "accent-inactive": "#262335"
        },
        "Blood Moon": {
            main: "#050000", sidebar: "#050000", player: "#050000",
            text: "#ff9999", subtext: "#880000", button: "#ff0000",
            "button-active": "#d90000", "button-disabled": "#2a0000",
            "tab-active": "#d90000", notification: "#ff3333",
            "notification-error": "#ffffff", misc: "#2a0000",
            "border-active": "#ff0000", "border-inactive": "#2a0000",
            header: "#1a0000", highlight: "#4a0000", banner: "#ff0000",
            accent: "#ff0000", "accent-active": "#d90000", "accent-inactive": "#0a0000"
        },
        "Hacker": {
            main: "#000000", sidebar: "#000000", player: "#000000",
            text: "#00ff00", subtext: "#007700", button: "#00ff00",
            "button-active": "#00ff00", "button-disabled": "#111111",
            "tab-active": "#00ff00", notification: "#00ff00",
            "notification-error": "#ff0000", misc: "#111111",
            "border-active": "#00ff00", "border-inactive": "#111111",
            header: "#111111", highlight: "#222222", banner: "#00ff00",
            accent: "#00ff00", "accent-active": "#00ff00", "accent-inactive": "#000000"
        },
        "Outrun": {
            main: "#0D0221", sidebar: "#0D0221", player: "#0D0221",
            text: "#FFFFFF", subtext: "#970FF2", button: "#FF007F",
            "button-active": "#FF9900", "button-disabled": "#261447",
            "tab-active": "#FF9900", notification: "#2DE2E6",
            "notification-error": "#F6019D", misc: "#261447",
            "border-active": "#FF007F", "border-inactive": "#261447",
            header: "#261447", highlight: "#FF3864", banner: "#00FFFF",
            accent: "#FF007F", "accent-active": "#FF9900", "accent-inactive": "#0D0221"
        },
        "Liquid Glass": {
            main: "#081018", sidebar: "#081018", player: "#081018",
            text: "#E0F2FE", subtext: "#7DD3FC", button: "#38BDF8",
            "button-active": "#0284C7", "button-disabled": "#0C4A6E",
            "tab-active": "#0284C7", notification: "#7DD3FC",
            "notification-error": "#F07178", misc: "#0C4A6E",
            "border-active": "#38BDF8", "border-inactive": "#0C4A6E",
            header: "#0C4A6E", highlight: "#0EA5E9", banner: "#38BDF8",
            accent: "#38BDF8", "accent-active": "#0284C7", "accent-inactive": "#081018"
        },
        "Material Ocean": {
            main: "#0F111A", sidebar: "#0F111A", player: "#0F111A",
            text: "#FFFFFF", subtext: "#A6ACCD", button: "#00BCD4",
            "button-active": "#009688", "button-disabled": "#1A1C29",
            "tab-active": "#009688", notification: "#C3E88D",
            "notification-error": "#F07178", misc: "#1A1C29",
            "border-active": "#82AAFF", "border-inactive": "#1A1C29",
            header: "#1A1C29", highlight: "#717CB4", banner: "#00BCD4",
            accent: "#00BCD4", "accent-active": "#009688", "accent-inactive": "#0F111A"
        }
    };

    let customTheme = localStorage.getItem("ktnaos-custom-theme");
    try {
        customTheme = customTheme ? JSON.parse(customTheme) : null;
    } catch (e) { customTheme = null; }

    themes["Custom"] = customTheme || {
        main: "#000000", sidebar: "#000000", player: "#000000",
        text: "#ffffff", subtext: "#aaaaaa", button: "#ffffff",
        "button-active": "#ff00ff", "button-disabled": "#333333",
        "tab-active": "#ff00ff", notification: "#ff00ff",
        "notification-error": "#ff0000", misc: "#222222",
        "border-active": "#ff00ff", "border-inactive": "#222222",
        header: "#ff00ff", highlight: "#111111", banner: "#ff00ff",
        accent: "#ff00ff", "accent-active": "#ffffff", "accent-inactive": "#333333"
    };

    const themeNames = Object.keys(themes);
    let currentThemeIndex = 0;

    function applyTheme(name, quiet) {
        document.body.setAttribute("data-ktna-theme", name);
        localStorage.setItem("ktnaos-theme", name);
        const theme = themes[name];
        if (theme) {
            localStorage.setItem("ktnaos-theme-bg", theme.main);
            localStorage.setItem("ktnaos-theme-text", theme.text);
            localStorage.setItem("ktnaos-theme-button", theme["button-active"]);
        }
        const root = document.documentElement;
        for (const [key, value] of Object.entries(theme)) {
            root.style.setProperty("--spice-" + key, value);
            const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
            if (rgb) {
                root.style.setProperty("--spice-rgb-" + key, parseInt(rgb[1], 16) + "," + parseInt(rgb[2], 16) + "," + parseInt(rgb[3], 16));
            }
        }
        if (!quiet) Spicetify.showNotification("ktnaOS: Injected " + name);

        if (name === "Adaptive") {
            var track = Spicetify.Player.data ? (Spicetify.Player.data.track || Spicetify.Player.data.item || Spicetify.Player.data) : null;
            if (track && track.metadata && track.metadata.image_url) {
                extractAlbumColor(track.metadata.image_url);
            }
        } else {
            var spotifyNative = ["--background-base", "--background-highlight", "--background-press", "--background-elevated-base", "--background-elevated-highlight", "--background-elevated-press", "--background-tinted-base", "--background-tinted-highlight", "--background-tinted-press"];
            spotifyNative.forEach(key => {
                root.style.removeProperty(key);
            });
        }
    }

    var dynamicImageCanvas = document.createElement("canvas");
    var dynamicImageCtx = dynamicImageCanvas.getContext("2d");

    function extractAlbumColor(imgUrl) {
        if (!imgUrl) return;
        if (imgUrl.indexOf("spotify:image:") === 0) {
            imgUrl = "https://i.scdn.co/image/" + imgUrl.split(":")[2];
        }
        document.documentElement.style.setProperty("--current-album-art", 'url("' + imgUrl + '")');
        var img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = function() {
            try {
                dynamicImageCanvas.width = img.width;
                dynamicImageCanvas.height = img.height;
                dynamicImageCtx.drawImage(img, 0, 0);
                var data = dynamicImageCtx.getImageData(0, 0, img.width, img.height).data;
                var r = 0, g = 0, b = 0, count = 0;
                for (var i = 0; i < data.length; i += 4 * 15) { 
                    if (data[i] + data[i+1] + data[i+2] > 700) continue; 
                    if (data[i] + data[i+1] + data[i+2] < 50) continue;
                    r += data[i]; g += data[i+1]; b += data[i+2];
                    count++;
                }
                if (count > 0) {
                    r = Math.floor(r / count);
                    g = Math.floor(g / count);
                    b = Math.floor(b / count);
                } else {
                    r = 255; g = 255; b = 255; 
                }

                var max = Math.max(r, g, b);
                if (max > 0 && max < 255) {
                    var mult = 255 / max;
                    r = Math.floor(r * mult * 0.9);
                    g = Math.floor(g * mult * 0.9);
                    b = Math.floor(b * mult * 0.9);
                }

                var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).padStart(6, '0');
                
                var bgR = Math.floor(r * 0.25);
                var bgG = Math.floor(g * 0.25);
                var bgB = Math.floor(b * 0.25);
                var bgHex = "#" + ((1 << 24) + (bgR << 16) + (bgG << 8) + bgB).toString(16).slice(1).padStart(6, '0');

                var root = document.documentElement;
                var overrides = ["button", "button-active", "tab-active", "notification", "border-active", "banner", "accent", "accent-active", "header"];
                overrides.forEach(key => {
                    root.style.setProperty("--spice-" + key, hex);
                    root.style.setProperty("--spice-rgb-" + key, r + "," + g + "," + b);
                });
                
                var bgOverrides = ["main", "sidebar", "player", "highlight"];
                bgOverrides.forEach(key => {
                    root.style.setProperty("--spice-" + key, bgHex);
                    root.style.setProperty("--spice-rgb-" + key, bgR + "," + bgG + "," + bgB);
                });
                
                var spotifyNative = ["--background-base", "--background-highlight", "--background-press", "--background-elevated-base", "--background-elevated-highlight", "--background-elevated-press", "--background-tinted-base", "--background-tinted-highlight", "--background-tinted-press"];
                spotifyNative.forEach(key => {
                    root.style.setProperty(key, bgHex);
                });
            } catch (err) {
                Spicetify.showNotification("ktnaOS CORS Error: " + err.message);
                console.error("ktnaOS: Canvas CORS error extracting color", err);
            }
        };
        img.onerror = function() {
            Spicetify.showNotification("ktnaOS Image Load Error: " + imgUrl);
        };
        img.src = imgUrl;
    }

    function updateAlbumArtBg() {
        try {
            var track = Spicetify.Player.data ? (Spicetify.Player.data.track || Spicetify.Player.data.item || Spicetify.Player.data) : null;
            if (track && track.metadata && (track.metadata.image_xlarge_url || track.metadata.image_url)) {
                let imgUrl = track.metadata.image_xlarge_url || track.metadata.image_url;
                if (imgUrl.startsWith("spotify:image:")) {
                    imgUrl = "https://i.scdn.co/image/" + imgUrl.replace("spotify:image:", "");
                }
                document.documentElement.style.setProperty("--ktna-bg-image", "url('" + imgUrl + "')");
            }
        } catch (e) {}
    }

    function triggerExtraction() {
        updateAlbumArtBg();
        if (localStorage.getItem("ktnaos-theme") !== "Adaptive") return;
        setTimeout(function() {
            var track = Spicetify.Player.data ? (Spicetify.Player.data.track || Spicetify.Player.data.item || Spicetify.Player.data) : null;
            if (track && track.metadata && track.metadata.image_url) {
                extractAlbumColor(track.metadata.image_url);
            } else {
                Spicetify.showNotification("ktnaOS: No image metadata found.");
            }
        }, 100);
    }

    Spicetify.Player.addEventListener("songchange", triggerExtraction);
    setTimeout(updateAlbumArtBg, 1500);

    var savedTheme = localStorage.getItem("ktnaos-theme");
    if (savedTheme && themes[savedTheme]) {
        currentThemeIndex = themeNames.indexOf(savedTheme);
        applyTheme(savedTheme, true);
    } else {
        applyTheme(themeNames[0], true);
    }

    class CustomThemeEditor extends React.Component {
        constructor(props) {
            super(props);
            this.state = { ...themes["Custom"] };
        }
        render() {
            const keys = Object.keys(themes["Custom"]);
            return React.createElement("div", { style: { padding: "16px", maxHeight: "60vh", overflowY: "auto", display: "flex", flexDirection: "column", gap: "16px" } },
                React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" } },
                    keys.map(k => 
                        React.createElement("div", { key: k, style: { display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(255,255,255,0.05)", padding: "8px 12px", borderRadius: "8px" } },
                            React.createElement("span", { style: { color: "var(--spice-text)", fontSize: "14px", fontFamily: "monospace" } }, k),
                            React.createElement("input", {
                                type: "color",
                                value: this.state[k],
                                onChange: (e) => {
                                    this.setState({ [k]: e.target.value });
                                    // Live preview injection
                                    document.documentElement.style.setProperty("--spice-" + k, e.target.value);
                                },
                                style: { background: "transparent", border: "none", cursor: "pointer", width: "40px", height: "40px", padding: 0 }
                            })
                        )
                    )
                ),
                React.createElement("div", { style: { display: "flex", gap: "12px", marginTop: "16px" } },
                    React.createElement("button", {
                        onClick: () => {
                            themes["Custom"] = { ...this.state };
                            localStorage.setItem("ktnaos-custom-theme", JSON.stringify(this.state));
                            applyTheme("Custom");
                            Spicetify.PopupModal.hide();
                        },
                        style: { flex: 1, padding: "12px", background: "var(--spice-button-active)", color: "var(--spice-main)", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer", fontFamily: "monospace" }
                    }, "> SAVE & INJECT"),
                    React.createElement("button", {
                        onClick: () => {
                            applyTheme(localStorage.getItem("ktnaos-theme") || "Cyberpunk"); // Revert live preview
                            if (this.props.onBack) this.props.onBack();
                        },
                        style: { flex: 1, padding: "12px", background: "transparent", border: "2px solid var(--spice-button-active)", color: "var(--spice-text)", borderRadius: "8px", fontWeight: "bold", cursor: "pointer", fontFamily: "monospace" }
                    }, "> ABORT")
                )
            );
        }
    }

    class ThemeChooser extends React.Component {
        render() {
            return React.createElement("div", {
                style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px", padding: "16px", maxHeight: "60vh", overflowY: "auto" }
            }, themeNames.map(name => 
                React.createElement("div", {
                    key: name,
                    onClick: () => {
                        if (name === "Custom") {
                            Spicetify.PopupModal.hide();
                            setTimeout(() => {
                                Spicetify.PopupModal.display({
                                    title: "Custom Theme Builder",
                                    content: React.createElement(CustomThemeEditor, {
                                        onBack: () => {
                                            Spicetify.PopupModal.hide();
                                            setTimeout(() => {
                                                Spicetify.PopupModal.display({
                                                    title: "ktnaOS Theme Chooser",
                                                    content: React.createElement(ThemeChooser, null),
                                                    isLarge: true
                                                });
                                            }, 350);
                                        }
                                    }),
                                    isLarge: true
                                });
                            }, 350);
                            return;
                        }
                        applyTheme(name);
                        currentThemeIndex = themeNames.indexOf(name);
                        Spicetify.PopupModal.hide();
                    },
                    style: {
                        background: themes[name].main,
                        border: `2px solid ${name === "Custom" ? "var(--spice-button-active)" : themes[name]['border-active']}`,
                        borderRadius: "8px",
                        padding: "16px",
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                        alignItems: "center",
                        borderStyle: name === "Custom" ? "dashed" : "solid"
                    }
                },
                React.createElement("span", { style: { color: name === "Custom" ? "var(--spice-button-active)" : themes[name].text, fontWeight: "bold", fontSize: "14px", textAlign: "center", whiteSpace: "nowrap" } }, name === "Custom" ? "+ CUSTOM THEME" : name),
                React.createElement("div", { style: { display: "flex", gap: "8px" } },
                    React.createElement("div", { style: { width: "16px", height: "16px", borderRadius: "50%", background: themes[name].button } }),
                    React.createElement("div", { style: { width: "16px", height: "16px", borderRadius: "50%", background: themes[name].header } }),
                    React.createElement("div", { style: { width: "16px", height: "16px", borderRadius: "50%", background: themes[name].banner } })
                )
                )
            ));
        }
    }

    new Spicetify.Playbar.Button(
        "ktna themes!",
        "enhance",
        function() {
            Spicetify.PopupModal.display({
                title: "ktnaOS Theme Chooser",
                content: React.createElement(ThemeChooser, null),
                isLarge: true
            });
        },
        false,
        false,
        true
    );

    var overlay = document.createElement("div");
    overlay.id = "ktna-dashboard-overlay";
    overlay.style.cssText = "position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:var(--spice-main,#000);z-index:999999;display:none;overflow-y:auto;padding:64px 32px;box-sizing:border-box;";
    document.body.appendChild(overlay);

    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && overlay.style.display !== "none") {
            overlay.style.display = "none";
        }
    });

    function DashboardCard(props) {
        return React.createElement("div", {
            style: {
                background: "transparent",
                border: "1px dashed var(--spice-border-inactive,#333)",
                padding: "16px",
                cursor: "pointer",
                transition: "all 0.1s ease"
            },
            onMouseEnter: function(e) {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.borderColor = "var(--spice-border-active,#0f0)";
                e.currentTarget.style.boxShadow = "0 0 10px var(--spice-button-active,#0f0)";
            },
            onMouseLeave: function(e) {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "var(--spice-border-inactive,#333)";
                e.currentTarget.style.boxShadow = "none";
            },
            onClick: function() {
                if (props.uri) {
                    Spicetify.Platform.History.push(props.uri);
                    overlay.style.display = "none";
                }
            }
        },
            props.image ? React.createElement("img", { src: props.image, style: { width: "100%", aspectRatio: "1/1", objectFit: "cover", marginBottom: "12px", filter: "grayscale(80%) contrast(1.2)" } }) : null,
            React.createElement("div", { style: { fontWeight: "bold", fontSize: "14px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: "var(--spice-text,#fff)" } }, "> " + props.title),
            React.createElement("div", { style: { color: "var(--spice-subtext,#aaa)", fontSize: "12px", marginTop: "4px" } }, props.subtitle)
        );
    }
    class SystemWidgets extends React.Component {
        constructor(p) {
            super(p);
            this.state = { rx: 0, tx: 0, cpu: 12, mem: 41, uptime: 0, artists: [] };
            this.loop = null;
        }
        componentDidMount() {
            var self = this;
            this.loop = setInterval(function() {
                self.setState({
                    rx: Math.floor(Math.random() * 900) + 100,
                    tx: Math.floor(Math.random() * 500) + 50,
                    cpu: Math.floor(Math.random() * 30) + 10,
                    mem: Math.floor(Math.random() * 5) + 40,
                    uptime: self.state.uptime + 1
                });
            }, 1000);
            
            if (Spicetify.Platform && Spicetify.Platform.RootlistAPI) {
                Spicetify.Platform.RootlistAPI.getContents().then(function(res) {
                    var items = res.items || res;
                    var lists = items.filter(i => i.type === "playlist" && i.images && i.images.length > 0).slice(0, 3);
                    self.setState({ artists: lists });
                }).catch(function(e) { console.error("ktnaOS widget error:", e); });
            }
        }
        componentWillUnmount() {
            if (this.loop) clearInterval(this.loop);
        }
        render() {
            var boxStyle = { border: "1px dashed var(--spice-border-active)", padding: "16px", background: "rgba(0,0,0,0.3)" };
            var labelStyle = { color: "var(--spice-subtext)", marginBottom: "8px", fontSize: "12px", textTransform: "uppercase" };
            var valStyle = { color: "var(--spice-button-active)", fontSize: "24px", fontFamily: "monospace" };
            
            var track = Spicetify.Player.data ? (Spicetify.Player.data.track || Spicetify.Player.data.item || Spicetify.Player.data) : null;
            var isPlaying = Spicetify.Player.isPlaying();
            var vol = Math.floor(Spicetify.Player.getVolume() * 100);
            
            var m = Math.floor(this.state.uptime / 60);
            var s = this.state.uptime % 60;
            var upStr = m + "m " + s + "s";
            
            return React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "32px" } },
                React.createElement("div", { style: boxStyle },
                    React.createElement("div", { style: labelStyle }, "SYS_LOAD"),
                    React.createElement("div", { style: valStyle }, "CPU: " + this.state.cpu + "%"),
                    React.createElement("div", { style: valStyle }, "RAM: " + this.state.mem + "%"),
                    React.createElement("div", { style: { color: "var(--spice-subtext)", marginTop: "8px", fontSize: "12px" } }, "UPTIME: " + upStr)
                ),
                React.createElement("div", { style: boxStyle },
                    React.createElement("div", { style: labelStyle }, "NET_TRAFFIC"),
                    React.createElement("div", { style: valStyle }, "RX: " + this.state.rx + " kb/s"),
                    React.createElement("div", { style: valStyle }, "TX: " + this.state.tx + " kb/s"),
                    React.createElement("div", { style: { color: "var(--spice-subtext)", marginTop: "8px", fontSize: "12px" } }, "STATE: SECURE")
                ),
                React.createElement("div", { style: boxStyle },
                    React.createElement("div", { style: labelStyle }, "AUDIO_ENGINE"),
                    React.createElement("div", { style: valStyle }, isPlaying ? "ACTIVE" : "STANDBY"),
                    React.createElement("div", { style: valStyle }, "VOL: " + vol + "%"),
                    React.createElement("div", { style: { color: "var(--spice-subtext)", marginTop: "8px", fontSize: "12px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, "TARGET: " + (track ? (track.uri || track.link) : "NONE"))
                ),
                React.createElement("div", { style: { ...boxStyle, gridColumn: "span 3" } },
                    React.createElement("div", { style: labelStyle }, "LOCAL_LIBRARY_CACHE [INSTANT]"),
                    React.createElement("div", { style: { display: "flex", gap: "16px", marginTop: "12px" } },
                        this.state.artists.length > 0 ? this.state.artists.map((a, i) => 
                            React.createElement("div", { key: i, style: { display: "flex", alignItems: "center", gap: "12px", flex: 1, background: "rgba(255,255,255,0.05)", padding: "8px", borderRadius: "4px" } },
                                React.createElement("img", { src: a.images && a.images[0] ? a.images[0].url : "", style: { width: "40px", height: "40px", borderRadius: "4px", filter: "grayscale(100%) opacity(0.8)" } }),
                                React.createElement("div", { style: { color: "var(--spice-text)", fontSize: "14px", fontWeight: "bold", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, a.name)
                            )
                        ) : React.createElement("div", { style: { color: "var(--spice-subtext)", fontSize: "12px" } }, "READING_DISK...")
                    )
                )
            );
        }
    }

    class TheGridVisualizer extends React.Component {
        constructor(p) {
            super(p);
            this.canvasRef = React.createRef();
            this.animationId = null;
        }
        componentDidMount() {
            var canvas = this.canvasRef.current;
            var ctx = canvas.getContext("2d");
            var width = canvas.width;
            var height = canvas.height;
            var cols = 70;
            var rows = 25;
            var time = 0;
            
            var draw = () => {
                if (!this.canvasRef.current) return;
                ctx.clearRect(0, 0, width, height);
                
                var isPlaying = Spicetify.Player.isPlaying();
                var intensity = isPlaying ? 1.0 : 0.05;
                time += (isPlaying ? 0.08 : 0.01);
                
                var primary = getComputedStyle(document.documentElement).getPropertyValue('--spice-button-active').trim() || '#0f0';
                
                ctx.strokeStyle = primary;
                ctx.lineWidth = 1.2;
                
                var cellW = width / (cols - 1);
                var cellH = height / (rows - 1);
                
                var progress = Spicetify.Player.getProgress() || 0;
                var beat = Math.sin(progress / 150) * intensity;
                var subBeat = Math.cos(progress / 50) * intensity;
                
                for(var i=0; i<rows - 1; i++) {
                    ctx.beginPath();
                    for(var j=0; j<cols; j++) {
                        var distCenter = Math.abs(j - cols/2) / (cols/2);
                        var wave = Math.sin(time + j*0.3 + i*0.4) * 25 * (1 - distCenter) * intensity;
                        var spike = (Math.random() > 0.85 ? (Math.random() * 45 * beat * (1 - distCenter)) : 0) + (subBeat * 8 * (1 - distCenter));
                        
                        var x = j * cellW;
                        var y = (i * cellH) + wave - spike;
                        
                        // 3D Perspective Projection
                        var perspective = 0.3 + (i / rows) * 0.7;
                        x = (x - width/2) * perspective + width/2;
                        y = y * perspective + (height * (1-perspective) * 0.5);
                        
                        // Apply extreme depth fading
                        ctx.globalAlpha = Math.max(0.05, perspective * 1.5 - 0.5);
                        
                        if (j === 0) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);
                    }
                    ctx.stroke();
                }
                this.animationId = requestAnimationFrame(draw);
            };
            draw();
        }
        componentWillUnmount() {
            if (this.animationId) cancelAnimationFrame(this.animationId);
        }
        render() {
            return React.createElement("canvas", {
                ref: this.canvasRef,
                width: 1200,
                height: 400,
                style: { width: "100%", height: "400px", filter: "drop-shadow(0 0 12px var(--spice-button-active))", marginBottom: "32px", opacity: 0.9, background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.5) 100%)", borderRadius: "12px" }
            });
        }
    }

    class KtnaOSDashboard extends React.Component {
        constructor(p) {
            super(p);
            this.state = { items: [], headerFrame: 0, lyrics: null, logs: [] };
            this.fetchLyrics = this.fetchLyrics.bind(this);
            this.snifferLoop = null;
            this.logRef = React.createRef();
        }
        appendLog(msg, color) {
            this.setState(prev => {
                var newLogs = [...prev.logs, { text: msg, color: color || "var(--spice-text)" }];
                if (newLogs.length > 15) newLogs = newLogs.slice(newLogs.length - 15);
                return { logs: newLogs };
            });
        }
        fetchLyrics() {
            var self = this;
            var track = Spicetify.Player.data ? (Spicetify.Player.data.track || Spicetify.Player.data.item || Spicetify.Player.data) : null;
            if (track && track.uri && Spicetify.CosmosAsync) {
                Spicetify.CosmosAsync.get("wg://lyrics/v1/track/" + track.uri).then(function(res) {
                    if (res && res.lines) {
                        self.setState({ lyrics: res.lines });
                    } else {
                        self.setState({ lyrics: null });
                    }
                }).catch(function(e) {
                    self.setState({ lyrics: null });
                });
            } else {
                self.setState({ lyrics: null });
            }
        }
        componentDidMount() {
            var self = this;
            Spicetify.Player.addEventListener("songchange", this.fetchLyrics);
            this.fetchLyrics();
            setTimeout(function() {
                self.setState({ headerFrame: 1 });
                setTimeout(function() {
                    self.setState({ headerFrame: 2 });
                }, 150);
            }, 2500);
        }
        componentDidUpdate() {
            if (this.logRef.current) {
                this.logRef.current.scrollTop = this.logRef.current.scrollHeight;
            }
        }
        componentWillUnmount() {
            Spicetify.Player.removeEventListener("songchange", this.fetchLyrics);
            if (this.snifferLoop) clearInterval(this.snifferLoop);
        }
        render() {
            var logoKtna = [
                "  _    _                 ____   _____ ",
                " | |  | |               / __ \\ / ____|",
                " | | _| |_ _ __   __ _ | |  | | (___  ",
                " | |/ / __| '_ \\ / _` || |  | |\\___ \\ ",
                " |   <| |_| | | | (_| || |__| |____) |",
                " |_|\\_\\\\__|_| |_|\\__,_| \\____/|_____/ "
            ].join("\n");
            
            var logoGlitch = [
                "  X    /                 ____   X____ ",
                " | \\  | \\               / __ \\ / X___|",
                " / / _| /_ / __   __ / | |  | | (___  ",
                " | \\/ / __| '_ \\ / X` || X  | |\\___ \\ ",
                " /   <\\ |_/ / | | (_/ || /__| X____) |",
                " \\_|\\_\\\\__\\_| /_|\\__,_| \\____/|_____/ "
            ].join("\n");
            var logoKatana = [
                "⣾⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
                "⢸⡈⠻⢤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
                "⠀⢹⡀⠈⠙⡲⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
                "⠀⠀⠙⢦⣄⠀⠈⠏⡳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
                "⠀⠀⠀⠀⠈⠑⢤⢀⠀⠁⠋⠗⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
                "⠀⠀⠀⠀⠀⠀⠀⠁⠢⡂⢔⠠⢀⠁⠋⠗⣲⣄⠀⣠⣠⣼⠶⣦⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠌⣔⣉⣐⣠⢀⡈⣾⡿⠉⡀⣠⣴⡾⢿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⠛⣾⠗⣿⣷⣶⣿⣿⣿⣷⣦⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⡇⠉⢿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣆⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣴⡿⠟⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣶⣦⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠲⣾⣟⠛⠋⠛⠻⢿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣷⣶⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⢿⣶⣤⣄⡀⠀⠀⠀⠀",
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠻⢿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⣖⣦⡀",
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠿⢿⣿⣿⣿⣿⣟⣿⣿⣿⣿⠃",
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠻⠿⣿⣿⣿⡟⠁⠀"
            ].join("\n");

            var logoSora = atob("ICAgX19fX18gX19fXyAgX19fXyAgICAgIF8gICAgCiAgLyBfX18vLyBfXyBcXHwgIF8gXFwgICAgLyBcXCAgIAogIFxcX19fIFxcIHwgIHwgfCB8XykgfCAgLyBfIFxcICAKICAgX19fKSB8IHxffCB8ICBfIDwgIC8gX19fIFxcIAogIHxfX19fLyBcXF9fXy98X3wgXFxfXFwvXy8gICBcXF9cXA==");

            var currentTheme = localStorage.getItem("ktnaos-theme");
            var currentLogo = logoKtna;
            
            if (currentTheme === "Sora") {
                currentLogo = logoSora;
            } else {
                if (this.state.headerFrame === 1) currentLogo = logoGlitch;
                if (this.state.headerFrame === 2) currentLogo = logoKatana;
            }

            var header = currentLogo;

            var terminalInput = React.createElement("div", { style: { position: "fixed", bottom: "32px", left: "32px", width: "calc(100vw - 64px)", background: "rgba(0,0,0,0.9)", backdropFilter: "blur(8px)", padding: "16px", border: "1px solid var(--spice-button-active)", display: "flex", flexDirection: "column", boxSizing: "border-box", zIndex: 10000 } },
                React.createElement("div", { ref: this.logRef, style: { height: "120px", overflowY: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end", marginBottom: "12px", fontFamily: "monospace", fontSize: "14px", borderBottom: "1px dashed var(--spice-border-active)", paddingBottom: "12px" } },
                    this.state.logs.map((l, i) => React.createElement("div", { key: i, style: { color: l.color, marginTop: "4px", opacity: (i / this.state.logs.length) } }, l.text))
                ),
                React.createElement("div", { style: { display: "flex", alignItems: "center" } },
                    React.createElement("span", { style: { color: "var(--spice-button-active)", marginRight: "12px", fontWeight: "bold", fontSize: "16px", fontFamily: "monospace" } }, "ktnaOS>"),
                    React.createElement("input", {
                        autoFocus: true,
                        style: { background: "transparent", border: "none", color: "var(--spice-text)", width: "100%", outline: "none", fontFamily: "monospace", fontSize: "16px" },
                        placeholder: "exe [cmd] (try: exe help, exe skip, exe vol 50)",
                        onKeyDown: (e) => {
                            if (e.key === "Enter") {
                                var val = e.currentTarget.value.trim();
                                if (val.startsWith("exe ")) {
                                    var cmd = val.substring(4).trim().split(" ");
                                    var action = cmd[0];
                                    if (action === "skip" || action === "next") { Spicetify.Player.next(); this.appendLog("ktnaOS: skipped to next track", "var(--spice-button-active)"); }
                                    else if (action === "back" || action === "prev") { Spicetify.Player.back(); this.appendLog("ktnaOS: skipped to previous track", "var(--spice-button-active)"); }
                                    else if (action === "pause") { Spicetify.Player.pause(); this.appendLog("ktnaOS: playback paused", "var(--spice-button-active)"); }
                                    else if (action === "play") { Spicetify.Player.play(); this.appendLog("ktnaOS: playback resumed", "var(--spice-button-active)"); }
                                    else if (action === "vol" && cmd[1]) { Spicetify.Player.setVolume(parseFloat(cmd[1]) / 100); this.appendLog("ktnaOS: volume set to " + cmd[1] + "%", "var(--spice-button-active)"); }
                                    else if (action === "usermod" && cmd[1]) {
                                        localStorage.setItem("ktnaos-user", cmd[1]);
                                        this.appendLog("ktnaOS: user updated to " + cmd[1], "var(--spice-button-active)");
                                    }
                                    else if (action === "screensaver" && cmd[1]) {
                                        var opt = cmd[1].toLowerCase();
                                        if (opt === "on" || opt === "off") {
                                            localStorage.setItem("ktnaos-screensaver-enabled", opt);
                                            this.appendLog("ktnaOS: screensaver " + opt, "var(--spice-button-active)");
                                            window.dispatchEvent(new Event("ktnaos-config-update"));
                                        }
                                    }
                                    else if (action === "timeout" && cmd[1]) {
                                        var secs = parseInt(cmd[1]);
                                        if (!isNaN(secs) && secs > 0) {
                                            localStorage.setItem("ktnaos-screensaver-timeout", secs * 1000);
                                            this.appendLog("ktnaOS: timeout set to " + secs + "s", "var(--spice-button-active)");
                                            window.dispatchEvent(new Event("ktnaos-config-update"));
                                        }
                                    else if (action === "screensaver" && cmd[1] && cmd[1].toLowerCase() === "set" && cmd[2]) {
                                        var artName = cmd.slice(2).join(" ").toLowerCase().replace('.txt', '').trim();
                                        localStorage.setItem("ktnaos-screensaver-art", artName);
                                        this.appendLog("ktnaOS: screensaver art set to [" + artName + "]", "var(--spice-button-active)");
                                    }
                                    }
                                    else if (action === "help") {
                                        this.appendLog("ktnaOS cmds: exe help, exe skip/prev, exe play/pause, exe vol [0-100], exe usermod [name], exe screensaver [on|off], exe timeout [seconds]", "var(--spice-button-active)");
                                    }
                                    else this.appendLog("ktnaOS: Unknown command '" + action + "'", "var(--spice-error, #e22134)");
                                } else if (val) {
                                    this.appendLog("ktnaOS: Invalid syntax. Use 'exe [cmd]'", "var(--spice-error, #e22134)");
                                }
                                e.currentTarget.value = "";
                            }
                        }
                    })
                )
            );

            return React.createElement("div", { style: { fontFamily: "var(--font-family,monospace)", color: "var(--spice-text,#fff)", paddingBottom: "200px" } },
                React.createElement("button", {
                    onClick: function() {
                        if (!document.fullscreenElement) {
                            document.documentElement.requestFullscreen();
                        } else {
                            if (document.exitFullscreen) {
                                document.exitFullscreen();
                            }
                        }
                    },
                    style: { position: "fixed", top: "84px", right: "80px", background: "transparent", border: "none", color: "var(--spice-text,#fff)", cursor: "pointer", fontSize: "24px", zIndex: 1000000 }
                }, "⛶"),
                React.createElement("button", {
                    onClick: function() { overlay.style.display = "none"; },
                    style: { position: "fixed", top: "80px", right: "32px", background: "transparent", border: "none", color: "var(--spice-text,#fff)", cursor: "pointer", fontSize: "32px", zIndex: 1000000 }
                }, "\u00d7"),
                React.createElement("div", { style: { display: "flex", justifyContent: "center", width: "100%" } },
                    React.createElement("pre", { style: { fontSize: "16px", color: "var(--spice-banner,#f0f)", marginBottom: "32px", lineHeight: "1.2", transition: "all 0.1s ease", whiteSpace: "pre-wrap", wordWrap: "break-word" } }, header)
                ),
                React.createElement(TheGridVisualizer, null),
                terminalInput
            );
        }
    }

    ReactDOM.render(React.createElement(KtnaOSDashboard, null), overlay);
    new Spicetify.Playbar.Button(
        "ktnaOS Terminal",
        "computer",
        function() {
            overlay.style.display = overlay.style.display === "none" ? "block" : "none";
        },
        false,
        false,
        true
    );
    try {
        if (Spicetify.Platform && Spicetify.Platform.ConfigAPI) {
            Spicetify.Platform.ConfigAPI.setProvider("sentry", false);
            Spicetify.Platform.ConfigAPI.setProvider("telemetry", false);
            Spicetify.Platform.ConfigAPI.setProvider("enable-right-sidebar", false);
        }
    } catch (e) {
        console.warn("ktnaOS: Could not disable telemetry bloat");
    }
    let idleTimer;
    let forceIdle = false;
    function resetIdle(e) {
        if (forceIdle) {
            if (e && e.type === "mousemove") return;
            forceIdle = false;
        }
        document.body.classList.remove("is-idle");
        clearTimeout(idleTimer);
        
        var isEnabled = localStorage.getItem("ktnaos-screensaver-enabled") !== "off";
        if (!isEnabled) return;
        
        var timeoutMs = parseInt(localStorage.getItem("ktnaos-screensaver-timeout")) || 120000;
        idleTimer = setTimeout(() => {
            document.body.classList.add("is-idle");
        }, timeoutMs);
    }
    document.addEventListener("mousemove", resetIdle);
    document.addEventListener("keydown", resetIdle);
    document.addEventListener("mousedown", resetIdle);
    window.addEventListener("ktnaos-config-update", resetIdle);
    resetIdle();

    Spicetify.SVGIcons["katana-btn"] = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13"/><path d="M22 2c0 2-1 3-3 3"/><path d="M8 16l-6 6"/><path d="M6 14l4 4"/></svg>';
    new Spicetify.Playbar.Button(
        "ktna konsole",
        "katana-btn",
        function() {
            forceIdle = true;
            document.body.classList.add("is-idle");
        },
        false,
        false,
        true
    );
    var neoFetchContainer = document.createElement("div");
    neoFetchContainer.id = "ktna-neofetch";
    document.body.appendChild(neoFetchContainer);
    
    var katanaLines = [
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⢀⣶⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠀⢀⡴⡂⢠⣾⡇⠀⣠⣴⣿⠁⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣻⣤⣟⣿⣷⣿⣿⣷⣾⣿⢿⣧⣤⣶⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣟⣷⢿⣷⣯⣿⣷⠿⡝⢗⣷⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⣟⡎⣻⢚⣷⣝⣿⣿⡯⣏⣿⣿⣟⣿⢟⣟⣳⡖⡲⡶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠿⢆⡿⢛⠻⣿⢋⡾⢯⣏⢒⡳⠻⣷⣙⣻⣦⡯⡠⠼⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⣵⣈⣟⠻⠞⢷⣡⢛⣓⣜⢻⣿⢥⣷⡷⡟⣝⣿⣦⣾⡞⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⢿⡳⡮⣧⣯⠻⣾⣽⢿⣞⣳⢷⣶⣶⣯⢳⣷⢿⣳⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡤⣧⣾⠿⣗⢰⠽⣽⣲⣭⣻⡿⣯⢿⣷⣝⣏⣿⣧⣞⠉⠙⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⢠⣷⡿⡿⣼⡎⣽⣷⢗⣏⣿⣿⡽⢿⣿⣟⠧⣭⡿⢿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠟⣱⣭⡅⣽⢢⣬⢝⣛⡟⣾⣧⣳⠲⣿⠾⢊⡪⣤⢛⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠺⠣⢮⠯⠴⢺⠿⠓⡟⠸⡘⠛⢓⡷⣢⢺⢺⠕⠀⠐⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⢏⠼⢤⣶⢳⢕⣷⡾⣖⣸⣛⣳⣎⣻⣦⣬⣇⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡾⠷⠟⠙⠛⠈⠉⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠓⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠖⠃⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡇⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠲⠶⢤⣤⣄⣀⣀⣀⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣇⣀⢀⠤⡤⠔⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠛⠧⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⠜⠓⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣶⣿⣿⣿⣿⣶⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⢰⠃⠀⠀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡿⠟⣉⠭⠤⠤⠤⠤⠍⣉⠛⢿⣿⠀⠀⠀⠀⠀⠀⠀⠀⢰⠃⠀⠀⠸⡀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⢠⡟⠀⠀⠀⢱⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢤⡈⠀⠀⠀⠀⠀⠀⡀⡾⠀⠀⠀⣰⠟⣶⣤⡀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⣼⠁⠀⠀⠀⠈⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⢄⠀⠀⠀⠀⠀⠀⠀⠀⠄⣢⠋⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⡴⠃⣴⡿⢋⣿⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⢰⠇⠀⠀⠀⠀⠀⢻⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠒⠲⢶⠀⡖⠒⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠃⢀⡾⢁⣼⡿⣡⡿⠃⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⡞⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡃⢰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣠⠟⢠⣾⠟⣰⡿⡇⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⣸⠃⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠋⣠⣿⢏⣼⡟⠀⢻⡀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⢠⡏⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⠃⣴⡿⢣⣾⠏⠀⠀⠈⢧⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⡾⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡞⢁⣼⡟⣡⣿⠃⠀⠀⠀⠀⠸⡆⠀⠀⠀⠀",
        "⠀⠀⠀⣼⠃⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠏⢠⣾⠟⣴⡿⠁⠀⠀⠀⠀⣀⣀⣽⡀⠀⠀⠀",
        "⠀⠀⠠⣯⣀⣀⣀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠃⣠⣿⢋⣼⣿⣥⡴⠶⠒⠉⢿⣿⡿⠋⠀⠀⠀⠀",
        "⠀⠀⠀⠙⠿⣿⣿⠛⠓⠒⠦⣤⣀⣸⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣠⣤⣤⣤⣤⣶⣶⣶⣶⣶⣤⣤⡼⠁⣰⡿⢣⣾⣿⡟⠁⠀⠀⠀⠀⠘⣏⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⢈⡟⠀⠀⠀⠀⠈⢻⣿⡇⠀⢀⣀⣤⣤⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢀⣼⡟⣱⣿⣿⣿⣷⣤⣀⠀⠀⠀⠀⠸⡆⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⢸⠃⠀⠀⠀⠀⣀⣼⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⣴⠏⣴⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⢿⡀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⢀⡟⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⢀⣾⢋⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠸⣇⠀⠀⠀⠀",
        "⠀⠀⠀⠀⣸⠃⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⣠⡿⢡⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⢻⠀⠀⠀⠀",
        "⠀⠀⠀⠀⡟⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⣴⡟⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀",
        "⠀⠀⠀⢸⠃⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣠⣾⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⣇⠀⠀⠀",
        "⠀⠀⠀⡎⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⡿⠟⠛⡿⠋⠉⡿⠋⠉⠀⡼⠉⠀⠀⠋⠁⠀⠰⠋⠀⠀⡿⠁⠀⢸⠁⠈⢹⠋⠉⢻⠟⠛⣿⣇⠀⠀⠀⠀⠀⠀⢹⠀⠀⠀",
        "⠀⠀⢠⡇⠀⠀⠀⠀⠀⠀⢸⣿⠏⠀⠞⠀⠀⠘⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠘⠀⠀⡿⢹⡀⠀⠀⠀⠀⠀⢸⡆⠀⠀",
        "⠀⠀⢸⠀⠀⠀⠀⠀⠀⢀⡟⢻⢀⣀⣀⣀⣀⣤⣤⣤⣴⣤⣤⣤⣤⣤⣤⣶⠶⣦⣶⣶⣶⣶⣦⣤⣤⣤⣤⠤⣶⣶⡶⢤⣤⣤⣶⣾⡃⠀⢧⠀⠀⠀⠀⠀⠈⡇⠀⠀",
        "⠀⠀⡿⠀⠀⠀⠀⠀⠀⣸⣱⠟⢻⠟⠛⠙⠟⠉⠉⠛⠁⠀⠘⠋⠀⢀⡾⠃⢀⣾⣿⣿⠟⠉⠃⠀⠀⠸⠀⠀⠀⠑⠀⠀⠀⠇⠀⠈⣿⠀⠸⡆⠀⠀⠀⠀⠀⣿⠀⠀",
        "⠀⢰⡇⠀⠀⠀⠀⠀⢀⠏⣟⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣠⠟⠀⣠⣿⣿⣿⣏⣀⣤⣄⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⠀⢀⠟⠀⠀⢻⣀⣤⣴⣶⣿⣿⣿⡄",
        "⠀⣸⣅⣀⣀⣀⣀⣀⣼⠀⠛⢶⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⣼⠟⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⡇",
        "⢀⣿⣿⣿⣿⣿⣿⣿⣿⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⢀⣾⢫⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⡇",
        "⠸⠿⠿⠿⠿⠿⠿⠿⠿⠀⠼⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠟⠀⠠⠿⠱⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠆⠀⠻⠿⠿⠿⠿⠿⠿⠿⠇"
    ];
    var katanaAscii = katanaLines.join("\n");
    
    // Default art is what was already here (Sasuke/Katana)
    var activeAscii = katanaAscii;
    var lastFetchedArt = null;
    
    // Bundled Art Dictionary
    const bundledArt = {"augh":"⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣰⣆⡀⠀⠀⠀⠀\r\n⠀⠀⠀⣠⣿⢿⣧⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠟⠻⢿⣄⠀⠀⠀\r\n⠀⠀⠀⣿⣧⣸⡏⠻⢿⣆⠀⠀⠀⢠⣴⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣯⡓⡌⢻⣧⡀⠀\r\n⠀⠀⠀⢻⣿⣿⠣⢦⣹⣿⣶⣤⣰⡾⠿⣋⢿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣼⣇⡀⢴⣾⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣦⣦⡀⠀⠀⣿⡱⢈⠆⣹⣷⠀\r\n⠀⠀⠀⠀⠙⣿⣰⣽⡏⢄⡂⣬⣿⠿⣐⣿⠿⠃⠀⠀⠀⠀⠀⠀⢀⢠⣴⣾⣿⡷⠿⠿⠿⢿⣷⣶⣤⣀⡀⠀⠀⠀⠀⠀⠀⢰⣿⠡⡘⢿⡆⢀⣿⠧⠷⠞⣼⣿⠀\r\n⠀⠀⠀⠀⠀⢿⣧⠣⡜⢲⡙⡙⢄⠣⣼⠏⠀⠀⠀⠀⠀⠀⠀⣠⣿⡿⣿⣿⣥⣆⠰⠦⣼⣬⣭⣭⣉⡝⣻⢷⣤⡀⠀⠀⠀⠘⠻⣧⡘⢼⣿⡿⠿⣡⠒⡨⢹⣾⠀\r\n⠀⠀⠀⠀⠀⠘⣿⡣⢜⡹⠤⡑⠌⡒⣿⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣟⠻⣏⠝⡻⡔⢣⢌⠭⣍⢋⠟⣷⡎⢎⡝⣿⣆⠀⠀⠀⠨⣿⡱⣈⠭⣑⠡⢆⡓⢷⢆⣿⠇\r\n⠀⠀⠀⠀⠀⠀⠸⣟⢦⢹⡂⠜⢦⣵⣻⠄⠀⠀⠀⢀⣾⡟⢏⢧⠒⣌⣧⣹⣾⣿⣿⣿⣾⣿⣶⣍⡚⢤⠛⡴⢊⡼⢹⣧⠀⠀⣀⣿⣕⡂⢖⡈⣲⠥⢎⣹⣿⠛⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠙⢧⡧⡘⢌⢺⣿⠛⠂⠀⠀⢀⣿⡿⢸⢌⡲⣹⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡝⡰⢋⠴⣃⠿⣷⠀⠀⠛⢿⣧⢢⢑⢣⣾⣿⠟⠁⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠳⠚⠿⠋⠀⠀⠀⠀⣾⢯⡑⡣⢎⢶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡵⣉⠖⣡⠞⣿⣆⠀⠀⠀⠙⠓⠛⠛⠋⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⣿⡧⢣⠕⣊⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⢌⡚⢤⢋⣼⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡱⣉⠮⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⢚⡌⢎⣼⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡱⢌⣾⣿⣿⣿⣿⣿⣿⡿⢟⠩⢋⠿⢻⣿⣿⣿⣿⣿⣿⣿⣣⠜⣣⢿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣧⣚⣼⣿⣿⣿⣿⣿⢛⡐⢊⡱⢈⢆⡱⢈⢿⣿⣿⣿⣿⣿⣷⢫⢶⣿⡃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⡷⣿⣿⣿⣿⡿⣉⠦⡡⢇⡐⢣⢂⠦⡉⢦⡙⣿⣿⣿⣿⡿⣭⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣹⣿⡿⡏⡴⢡⢎⡱⢊⡜⣡⢎⠲⣉⢦⡱⣍⢻⣿⣿⣿⣽⣿⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠿⢿⣾⣿⣜⡶⣉⠞⡶⣩⠶⣱⢎⡵⢋⡶⣹⣜⣧⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢹⢻⣾⣽⡖⣥⢳⣥⣾⢱⡏⣾⣷⣾⡟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⠛⠛⠛⠛⠛⠛⠛⠋⠙⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠠⠀⠤⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","black hole":"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠖⠃⠀⠀⠀⡁⠀⠀⠀⠀⠀⠐⠆⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⢔⡤⠊⠁⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠁⠀⠀⠘⠁⢀⠀⠀⠀⠀⢈⠓⠂⠠⡄⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣶⠿⠞⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠒⠁⠀⠠⡚⠁⢀⣙⣀⣈⡩⠬⢁⠀⢑⠶⠤⡆⠤⡀⠀⠀⠀⠀⠀⠀⢀⠴⢲⣋⣽⣷⠟⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⢠⠀⠀⣶⠃⠗⣡⣶⣮⣿⡿⠿⠿⢿⣿⣷⣶⣤⣤⠤⠴⠦⠬⣤⣤⠄⣉⠉⠝⢲⣿⡷⠻⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠁⡀⡸⠁⣰⣿⡿⠛⠋⣁⡀⠤⠤⢄⡀⠈⠛⢯⣿⣟⣾⣶⣶⣮⣭⣵⣾⣿⣟⠿⠉⢨⠖⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠀⢠⠳⡧⣻⡿⠋⢀⠒⠉⠀⠀⠀⠀⠀⠀⠉⠢⠀⠀⠙⠛⣻⣿⣿⣿⢿⣿⣿⠟⡱⠖⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⢠⣧⠓⣾⣿⠁⠀⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⢦⣠⣾⣿⠿⣿⣿⣿⡿⣫⠏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠂⢃⣸⣿⠇⢠⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣿⠟⢿⠁⠸⡿⣿⣯⡶⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⢘⡄⠘⣿⣿⠀⠸⡀⠀⠀⠀⠀⠀⢀⣀⣴⣾⣿⡿⡟⡋⠐⡇⠀⢸⣿⣿⠃⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢡⠘⢰⣿⡿⡆⠀⣇⠀⣀⣠⣤⣶⣿⢷⢟⠻⠀⠈⠀⠀⠀⡇⠀⣼⣿⣿⠂⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠔⢀⡴⢯⣾⠟⡏⢀⣠⣿⣿⣿⣟⢟⡋⠅⠘⠉⠀⠀⠀⠀⢀⠀⠁⢠⣿⣟⠃⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠞⣻⣷⡿⢙⣩⣶⡿⠿⠛⠉⠑⢡⡁⠀⠀⠀⠀⠀⠀⢀⠔⠁⠀⣰⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣡⣾⣥⣾⢫⡦⠾⠛⠙⠉⠀⠀⢀⣀⠀⠈⠙⠓⠦⠤⠤⠀⠘⠁⢀⡤⣾⡿⠏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠔⣴⣾⣿⣿⢟⢝⠢⠃⢀⣤⢴⣾⣮⣷⣶⢿⣶⡤⣐⡀⠀⣠⣤⢶⣪⣿⣿⡿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⡀⣦⣾⡿⡛⠵⠺⢈⡠⠶⠿⠥⠥⡭⠉⠉⢱⡛⠻⠿⣿⣿⣿⣿⣿⠿⠿⠿⠟⠭⠛⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⢀⢴⠕⣋⠝⠕⠐⠀⠔⠉⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠁⠉⠁⠁⠁⠁⠈⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","golden gate":"                                         ^^\r\n    ^^      ..                                       ..\r\n            []                                       []\r\n          .:[]:_          ^^                       ,:[]:.\r\n        .: :[]: :-.                             ,-: :[]: :.\r\n      .: : :[]: : :`._                       ,.': : :[]: : :.\r\n    .: : : :[]: : : : :-._               _,-: : : : :[]: : : :.\r\n_..: : : : :[]: : : : : : :-._________.-: : : : : : :[]: : : : :-._\r\n_:_:_:_:_:_:[]:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:[]:_:_:_:_:_:_\r\n!!!!!!!!!!!![]!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!![]!!!!!!!!!!!!!\r\n^^^^^^^^^^^^[]^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^[]^^^^^^^^^^^^^\r\n            []                                       []\r\n            []                                       []\r\n            []                                       []\r\n ~~^-~^_~^~/  \\~^-~^~_~^-~_^~-^~_^~~-^~_~^~-~_~-^~_^/  \\~^-~_~^-~~-\r\n~ _~~- ~^-^~-^~~- ^~_^-^~~_ -~^_ -~_-~~^- _~~_~-^_ ~^-^~~-_^-~ ~^\r\n   ~ ^- _~~_-  ~~ _ ~  ^~  - ~~^ _ -  ^~-  ~ _  ~~^  - ~_   - ~^_~\r\n     ~-  ^_  ~^ -  ^~ _ - ~^~ _   _~^~-  _ ~~^ - _ ~ - _ ~~^ -\r\n      ~^ -_ ~^^ -_ ~ _ - _ ~^~-  _~ -_   ~- _ ~^ _ -  ~ ^-\r\n            ~^~ - _ ^ - ~~~ _ - _ ~-^ ~ __- ~_ - ~  ~^_-\r\n                ~ ~- ^~ -  ~^ -  ~ ^~ - ~~  ^~ - ~","heart":"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣞⠏⠚⠛⢟⠻⣷⣄⠀⠀⠀⣰⡾⠟⡿⠛⠓⠯⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⡿⠊⠀⣀⣤⣾⣆⣈⣻⣷⣐⣾⣏⣀⣼⣷⣄⣀⠀⠙⢿⣗⣄⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⢀⣴⣟⠞⠁⠀⣠⠟⠋⠛⠻⢿⣿⣿⠿⣿⣿⣿⠟⠛⠉⠹⣷⡀⠀⢻⣮⣦⡀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⢠⡿⢙⠞⠀⠀⢠⠏⠀⠀⠀⠀⠀⠉⠉⠀⠈⠉⠁⠀⠀⠀⠀⠹⣧⠀⠀⠻⡳⡽⡄⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⣜⠇⡞⠀⠀⠀⣸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣱⡄⠀⠀⢳⢡⢱⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⡼⠁⠀⠁⠀⠀⢠⣼⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⠁⠀⠀⠀⠀⢣⢣⠀⠀⠀⠀\r\n⠀⠀⠀⢰⡟⠀⠀⠀⠀⠀⠀⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⠆⠀⠀⠀⠀⠘⡮⣆⠀⠀⠀\r\n⠀⠀⠀⣿⠃⠀⠀⠀⠀⠀⠀⣻⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⠀⠀⠀⠀⠀⠀⢸⢻⠀⠀⠀\r\n⠀⠀⠀⣿⠘⠀⠀⠀⠀⠀⣠⣿⣿⣻⠿⣿⣦⣀⠀⠀⠀⠀⠀⣀⣴⢿⠿⣿⣧⢿⣆⠀⠀⠀⠀⠀⢸⡾⡀⠀⠀\r\n⠀⢀⡾⠋⠀⠀⠀⠀⡴⣸⣿⣯⣬⣅⣀⠀⠙⠻⣿⣦⣠⣴⡿⠟⠋⠁⠀⢨⣴⣿⣿⣷⡄⠀⠀⠀⠀⢿⡳⡀⠀\r\n⢠⣿⠁⠀⠀⠀⠀⠀⣵⠟⠁⠐⠂⠉⠙⠻⣶⡄⢈⣿⣿⣿⠀⢀⣠⠾⠟⠉⠀⠒⠂⠻⣷⠀⠀⠀⠀⠀⠹⡟⣄\r\n⠘⢿⡂⠀⠀⠀⠀⣾⡟⠀⠀⠀⠀⠀⠀⠀⠈⠻⢿⡿⠋⠻⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠻⣷⡄⠀⠀⠀⢀⡵⠋\r\n⠀⠀⠈⠐⠤⣤⣶⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣷⣠⠴⠒⠉⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠁⠀⠀⠀⠀⠀","homer simpson":"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⡤⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠙⠏⠙⠙⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀⠀⠀⠀⠀⠀⠸⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠁⠀⠀⠀⠀⠀⢀⣠⣄⡀⠀⠀⢸⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⣇⣄⣀⠀⠀⠀⢰⠋⠁⢀⣿⡏⠉⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣍⠙⠯⠉⠹⠄⠀⠀⠈⠓⠦⠼⢛⠉⢻⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣆⠼⠃⡀⠀⠀⠀⢀⣠⠴⠒⠚⠋⠙⠛⠛⠃⠙⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣹⠏⠁⠀⠀⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡇⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡇⠀⠀⠀⡸⠁⢀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠟⠁⠀⠀⠀⣇⠐⠚⠳⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣇⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⠀⠀⠀⠀⠀⠹⣄⠀⠀⠀⠈⠉⠙⠒⠒⠒⠦⣤⡤⡤⠟⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⢀⣀⣤⠤⢾⠀⠀⠀⠀⠀⠀⠀⠈⠓⠦⣄⣀⠀⠀⢀⣘⡿⠟⠁⠉⠙⠲⣄⡀⢀⣀⡀⠀⠀⠀\r\n⠀⢀⣀⣀⡴⠚⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠁⠀⠀⠸⣆⠀⠀⠈⠙⠋⢱⡓⢒⡆⠀\r\n⠀⢻⡭⠙⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⠄⠀⠀⠘⣆⠀⠀⠀⠀⠘⠂⠘⣻⡶\r\n⠀⣞⣡⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢤⡀⣠⣶⡤⣄⠀⢀⠀⠈⠙⠀⣀⣀⣶⣿⠀⠀⠀⣀⣀⣀⢀⣹⡄\r\n⠀⠀⠸⠤⢾⠀⢀⣴⣤⣄⣀⣀⡀⠀⠀⠀⠀⠙⠓⠛⠷⠚⠋⠉⠀⠀⠀⠀⠀⠈⠙⣧⠤⠖⠋⠁⠀⠈⠉⠀⠀\r\n⠀⠀⠀⠀⠘⠒⠋⣼⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢧⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⢸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣇⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠈⢷⡦⢤⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡀⠀⠀⠀⠀⡜⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⣠⠾⠛⢭⡓⠻⠽⣽⣒⣲⠤⠤⢤⣤⣀⣀⣀⣀⣀⣀⣀⣀⣤⣤⣤⣤⡴⠁⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⢀⡴⠋⠁⠀⠀⠀⠉⣳⠖⠤⠤⣬⣉⣉⣙⣓⠒⠒⠒⠒⣲⣶⠖⠛⢉⣉⡭⠟⠉⠓⢦⡀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⢸⠀⠧⠲⡤⠤⠖⠋⠁⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠉⠉⠉⠉⠳⢤⣀⠀⠀⠀⠀⠳⡄⠀⠀⠀⠀\r\n⠀⠀⠀⠈⢧⠀⣠⡧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣴⠂⠀⢀⡧⠀⠀⠀⠀\r\n⢀⣀⠀⢀⣬⠇⠀⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣟⠀⣠⠞⠀⠀⠀⠀⠀\r\n⢸⣥⣍⣁⣠⢴⠒⠚⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣛⠈⠓⠦⣄⣴⣦⠀⠀","leaning tower":"                          |         \r\n       +                _./_         \r\n __:_._|               | .  |        \r\n      / \\             | . . ;        \r\n ____/   \\          |---...__        \r\n     |   |          \"---...__|       \r\n     |   |         :  | | |  ;       \r\n     |   |         :        \"        \r\n ____|   |         \"---...__;        \r\n    /     \\       :  | | |  ;        \r\n __/       \\      : | | |  \"         \r\n   |   |   |      \"---...__;         \r\n   |   |   |     :  | | |  ;         \r\n   |   |   |     : | | |  \"          \r\n   |   |   |     \"---...__;          \r\n   | 8 | 8 |    :  | | |  ;          \r\n___|_8_|_8_|____:_|#|#|#|_;lka____   \r\n                                     \r\n","sakuras":"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡤⠒⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠖⠋⠀⠀⠀⢻⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢴⠾⠑⢦⡞⠃⠀⠀⠀⠀⠀⣼⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣯⠌⠀⠀⠀⢳⠀⠀⠀⠀⠀⢠⠧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢇⠀⢀⡔⠋⠻⠚⣆⢀⣀⡠⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⡝⠆⠀⠀⠀⠁⡧⠆⠈⢣⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡄⠉⠉⠉⠒⠢⢄⡀⠀⠀⠀⠀⠀⢹⣼⡀⢀⣀⠜⠃⠀⠀⢺⡃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢧⠀⠀⠀⠀⠀⠀⠙⢶⠀⠀⠀⠀⣾⠿⠛⠙⠢⠤⠤⠤⠒⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⢀⢾⠢⠴⠤⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣇⠀⠀⠀⠀⠀⠀⠈⡇⠀⠀⢠⡿⠄⠀⠀⠀⠀⢀⡷⡒⠒⠲⢤⡀⠀⢀⣠⢀⣀⣠⠀⠀⠀⠀\r\n⠀⠀⠀⠀⢠⠋⠀⢠⠀⠀⠀⠙⣆⣀⡤⠤⠤⣄⡀⠀⠀⠈⢦⡀⡀⠀⠀⠀⢀⡏⢀⣴⠟⠁⠀⠀⠀⠀⢀⡜⠀⠀⡄⠀⠀⢙⡞⠁⠀⠀⢀⠈⢦⠀⠀⠀\r\n⠀⠀⠀⠀⡇⠀⠀⠨⡄⠀⠀⢀⠜⠃⠀⠀⠀⠈⠉⣱⡆⠀⠀⠉⠓⠲⠶⠶⣮⣠⡾⠃⠀⠀⠀⠀⠀⠀⠈⣇⠀⠀⠰⡀⠀⢸⠀⢠⢀⠔⠁⠀⠈⣶⠀⠀\r\n⠀⠀⠀⠀⢳⡀⠀⠀⣰⣤⣄⡌⣄⢀⢀⠠⠒⠁⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⡟⣿⠉⠀⠀⠀⠀⠀⠀⢀⡴⠼⠦⠄⡀⠡⣰⣼⠻⣾⠟⣀⠀⢀⡼⠈⠀⠀\r\n⠀⠀⢀⡔⠋⠉⠓⢺⢽⡝⣦⣺⢁⣴⡊⠀⣀⠀⠀⣰⠛⠀⠀⠀⠀⠀⠀⢰⡿⠃⠀⠀⠀⠀⠀⠀⢰⡇⠀⠀⠀⠀⠀⠱⡯⡖⠛⡤⣺⡟⠋⠉⠙⠢⡀⠀\r\n⠀⢠⠯⠀⠀⠀⠀⢈⡯⢮⣏⣸⣗⠛⠏⠉⠀⠉⠙⢦⡀⠀⠀⠀⠀⠀⢠⣻⠋⠀⠀⠀⠀⠀⠀⠀⣞⠁⠀⠉⠁⠀⣨⠽⠛⢿⢿⣽⠓⠟⢄⡀⠀⠀⢳⡀\r\n⠠⣞⠒⠀⠈⠉⠉⠀⠷⡜⢱⠙⡴⣧⡒⠠⢀⠀⠀⠀⣧⠀⠀⠀⠀⢠⣷⠃⠀⠀⢀⣀⣤⣴⡶⠿⠛⠳⢤⣀⠀⡰⠁⠀⠀⠆⠀⠙⡆⠀⠀⠈⠁⢀⣘⡤\r\n⠀⠀⠑⣅⡄⠀⠀⣀⡴⠁⠌⠛⠹⣀⠀⠀⠀⠀⠀⠀⣸⠀⠀⢀⡴⣣⣷⣶⡾⠽⠿⣫⠭⠤⢤⡀⠀⠀⠀⠈⠉⢳⠀⠀⠸⠀⠀⠀⣸⠦⠤⠤⠔⠊⠀⠀\r\n⠀⠀⠀⠀⠉⠉⡏⠀⠀⣘⠀⠀⠀⠙⣦⢄⣠⣀⡴⠋⠁⢀⡴⣿⠟⠉⠁⠀⠀⠀⠀⡇⠀⠀⠀⠈⢢⡄⠀⠀⠀⠈⢮⡂⡀⠀⢀⡴⠃⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠳⡠⡀⠃⠀⠀⢀⡜⡞⣆⠀⠀⢀⣤⢞⡵⠟⠁⠀⠀⠀⠀⠀⠀⠀⠸⡄⠀⠀⠀⠀⢧⠀⠀⠀⠀⠀⠈⠗⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠈⢦⠦⠔⠒⠉⠀⡟⢸⠒⣋⡥⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢶⡀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠞⠁⣩⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠓⠢⢼⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠖⢋⡠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⣖⠋⣡⡔⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⢸⠃⣴⠗⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⢠⠏⣸⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⣰⠃⢠⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⢀⠞⠁⢀⠞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⢀⣴⣫⠤⠖⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","star wars":"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠶⠶⠿⢿⣿⣿⣿⣿⣷⣶⣶⣶⣤⣤⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣴⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠛⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠛⠋⠛⠛⠻⢿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣠⣴⣾⣿⣿⣿⣷⣶⣤⡈⠙⢿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠙⢿⣿⣿⣿⣿⣆⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠈⢻⣿⣿⣿⣿⣧⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠈⢿⣿⣿⣿⣿⣇⠀⠀\r\n⠀⠀⠀⠀⠀⠀⣤⣤⣤⣤⣤⣤⣤⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⣿⣿⣿⣿⣿⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡆⢸⣿⣿⣿⣿⣿⡄⠀\r\n⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠉⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⢹⣿⣿⣿⣿⣿⣆⣠⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⣿⣿⣿⣿⣿⣷⠀\r\n⠀⠀⢰⣶⡆⠀⠀⠀⠀⢀⣀⣀⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢰⣿⣿⣿⣿⣿⣿⡆\r\n⢀⠀⢸⣿⣧⣰⣶⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⣾⣿⣿⣿⣿⣿⣿⣇\r\n⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿\r\n⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣈⠉⠛⠛⠛⠛⢉⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⡿⢋\r\n⣶⣌⡛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⣋⣥⣾⡿\r\n⠙⢿⣿⣷⣶⣬⣙⡛⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠟⢛⣉⣥⣴⣾⣿⣿⣿⣿⡇\r\n⠀⠀⠙⣿⡟⢿⣿⣿⣿⣷⣶⣦⣬⣭⣉⣙⣛⣛⠛⠻⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠛⢛⣛⣛⣋⣩⣭⣭⣤⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃\r\n⠀⠀⠀⣿⡇⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀\r\n⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀\r\n⠀⠀⠀⠀⠀⢠⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠸⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣠⣤⣤⣤⣤⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠛⠛⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠛⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠉⠉⢉⣭⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⢿⣿⣿⣿⣿⣿⠿⠿⠟⠛⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀","stars":"⠀⠀⠀⢸⣦⡀⠀⠀⠀⠀⢀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⢸⣏⠻⣶⣤⡶⢾⡿⠁⠀⢠⣄⡀⢀⣴⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⣀⣼⠷⠀⠀⠁⢀⣿⠃⠀⠀⢀⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠴⣾⣯⣅⣀⠀⠀⠀⠈⢻⣦⡀⠒⠻⠿⣿⡿⠿⠓⠂⠀⠀⢀⡇⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠉⢻⡇⣤⣾⣿⣷⣿⣿⣤⠀⠀⣿⠁⠀⠀⠀⢀⣴⣿⣿⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠸⣿⡿⠏⠀⢀⠀⠀⠿⣶⣤⣤⣤⣄⣀⣴⣿⡿⢻⣿⡆⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠟⠁⠀⢀⣼⠀⠀⠀⠹⣿⣟⠿⠿⠿⡿⠋⠀⠘⣿⣇⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⢳⣶⣶⣿⣿⣇⣀⠀⠀⠙⣿⣆⠀⠀⠀⠀⠀⠀⠛⠿⣿⣦⣤⣀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⣹⣿⣿⣿⣿⠿⠋⠁⠀⣹⣿⠳⠀⠀⠀⠀⠀⠀⢀⣠⣽⣿⡿⠟⠃\r\n⠀⠀⠀⠀⠀⢰⠿⠛⠻⢿⡇⠀⠀⠀⣰⣿⠏⠀⠀⢀⠀⠀⠀⣾⣿⠟⠋⠁⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⠀⠀⣰⣿⣿⣾⣿⠿⢿⣷⣀⢀⣿⡇⠁⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⠉⠁⠀⠀⠀⠀⠙⢿⣿⣿⠇⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀","zelda":"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣿⣿⣿⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠷⠶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⣀⣀⠀⠀⣶⣦⣼⣿⣿⣿⣿⣿⣿⡟⠛⠋⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⣠⣾⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⢀⣠⣾⣿⣿⣿⣿⣿⣟⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⣶⣿⡟⣹⡟⣴⢻⣷⠘⠿⣷⡈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⣿⡿⠐⢋⣴⣋⣯⣽⣷⣦⣤⠤⣾⣿⣿⣿⣿⣿⣿⠻⢿⣿⣿⣿⣿⣿⣶⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⢹⣿⣒⡻⠟⣿⣨⣿⠉⠉⠐⣲⣿⣿⣿⣿⣿⣿⣿⠀⠀⠉⠙⠛⠻⢿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠈⣿⣷⡤⣢⢹⠉⣣⣠⣭⣽⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣾⣿⣦⣤⣤⣬⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠘⣿⣿⢿⣡⡆⡤⣭⢟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠉⠛⣿⣷⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⣽⣿⣷⣅⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠈⠛⠈⠙⠷⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⣼⣿⠏⠙⠿⣿⣿⣿⡿⠛⠻⣿⣿⣿⣿⣿⣿⣿⡿⠛⠋⢹⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⢰⡿⠃⠀⠀⠀⠈⠙⠋⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⡇⠀⠀⠈⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⢦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣿⣿⣿⣿⣷⠀⠀⠀⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⢦⣄⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⡆⠀⣾⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠶⣄⡀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣄⠘⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠒⠄\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣧⠸⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⡆⠙⠻⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⡷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"};

    var neoUptime = 0;
    
    // Quick update function
    const updateScreensaverArt = () => {
        let requestedArt = localStorage.getItem("ktnaos-screensaver-art") || "default";
        
        if (requestedArt === "default") {
            activeAscii = katanaAscii;
        } else if (bundledArt[requestedArt]) {
            activeAscii = bundledArt[requestedArt];
        } else {
            activeAscii = "ERROR 404:\nScreensaver '" + requestedArt + "' not found.\nFallback engaged.\n\n" + katanaAscii;
        }
    };

    setInterval(function() {
        neoUptime++;
        if (!document.body.classList.contains("is-idle")) return;

        // Try to update art if changed
        updateScreensaverArt();

        var m = Math.floor(neoUptime / 60);
        var s = neoUptime % 60;
        
        var themeName = localStorage.getItem("ktnaos-theme") || "ktnaOS";
        var userName = localStorage.getItem("ktnaos-user") || "user";
        var isPlaying = Spicetify.Player.isPlaying();
        var vol = Math.floor(Spicetify.Player.getVolume() * 100);
        
        var blockGrid = '<span style="color:var(--spice-main)">█</span> <span style="color:var(--spice-sidebar)">█</span> <span style="color:var(--spice-player)">█</span> <span style="color:var(--spice-button)">█</span> <span style="color:var(--spice-button-active)">█</span> <span style="color:var(--spice-text)">█</span> <span style="color:var(--spice-subtext)">█</span>';

        var specs = userName + "@ktnaOS\n-------------\n<b>OS:</b> ktnaOS\n<b>Kernel:</b> spicetify :)\n<b>Uptime:</b> " + m + "m " + s + "s\n<b>Packages:</b> .ktna\n<b>Shell:</b> meowmium\n<b>Resolution:</b> " + window.innerWidth + "x" + window.innerHeight + "\n<b>WM:</b> ktna-spotify\n<b>Theme:</b> " + themeName + "\n<b>CPU:</b> ktna core imeow @ 9.12 GHz\n<b>Audio:</b> " + vol + "%\n<b>Discord:</b> mat.sys\n\n" + blockGrid;
        
        neoFetchContainer.innerHTML = '<div class="katana-logo" style="white-space: pre;">' + activeAscii + '</div><div class="specs-list">' + specs + '</div>';
    }, 1000);

    console.log("[ktnaOS] Extension loaded successfully");
})();

