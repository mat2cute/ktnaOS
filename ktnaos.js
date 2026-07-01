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

    bootOverlay.innerHTML = '<div class="boot-katana" style="color: ' + savedButton + ' !important;">' + sweepKatana + '</div><div class="boot-text" style="color: ' + savedText + ' !important;">ktna</div>';
    
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
    
    var neoUptime = 0;
    setInterval(function() {
        neoUptime++;
        if (!document.body.classList.contains("is-idle")) return;

        var m = Math.floor(neoUptime / 60);
        var s = neoUptime % 60;
        
        var themeName = localStorage.getItem("ktnaos-theme") || "ktnaOS";
        var userName = localStorage.getItem("ktnaos-user") || "user";
        var isPlaying = Spicetify.Player.isPlaying();
        var vol = Math.floor(Spicetify.Player.getVolume() * 100);
        
        var blockGrid = '<span style="color:var(--spice-main)">████</span> <span style="color:var(--spice-sidebar)">████</span> <span style="color:var(--spice-player)">████</span> <span style="color:var(--spice-button)">████</span> <span style="color:var(--spice-button-active)">████</span> <span style="color:var(--spice-text)">████</span> <span style="color:var(--spice-subtext)">████</span>';

        var specs = userName + "@ktnaOS\n-------------\n<b>OS:</b> ktnaOS\n<b>Kernel:</b> spicetify :)\n<b>Uptime:</b> " + m + "m " + s + "s\n<b>Packages:</b> .ktna\n<b>Shell:</b> meowmium\n<b>Resolution:</b> " + window.innerWidth + "x" + window.innerHeight + "\n<b>WM:</b> ktna-spotify\n<b>Theme:</b> " + themeName + "\n<b>CPU:</b> ktna core imeow @ 9.12 GHz\n<b>Audio:</b> " + vol + "%\n<b>Discord:</b> mat.sys\n\n" + blockGrid;
        
        if (themeName === "Sora") {
            neoFetchContainer.style.width = "100vw";
            neoFetchContainer.style.height = "100vh";
            neoFetchContainer.style.top = "0";
            neoFetchContainer.style.left = "0";
            neoFetchContainer.style.transform = "none";
            neoFetchContainer.innerHTML = '<div style="width: 100vw; height: 100vh; background: url(\'data:image/jpeg;base64,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\') center/cover no-repeat; z-index: 100000; position: fixed; top: 0; left: 0;"></div>';
        } else {
            neoFetchContainer.innerHTML = '<div class="katana-logo">' + katanaAscii + '</div><div class="specs-list">' + specs + '</div>';
        }
    }, 1000);

    console.log("[ktnaOS] Extension loaded successfully");
})();




