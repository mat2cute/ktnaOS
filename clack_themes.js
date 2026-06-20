(function ClackThemes() {
    const topbar = document.querySelector(".main-topBar-topbarContentRight") || document.querySelector(".main-topBar-historyButtons") || document.querySelector(".main-topBar-container") || document.querySelector(".Root__top-bar header");
    
    if (!topbar || !Spicetify || !Spicetify.showNotification) {
        setTimeout(ClackThemes, 500);
        return;
    }

    const themes = {
        "Cyberpunk Neon": {
            main: "#0d0d0d",
            sidebar: "#0d0d0d",
            player: "#0d0d0d",
            text: "#ffffff",
            subtext: "#aaaaaa",
            button: "#fcee0a",
            "button-active": "#00ffcc",
            "button-disabled": "#121212",
            "tab-active": "#00ffcc",
            notification: "#00ffcc",
            "notification-error": "#ff0000",
            misc: "#333333",
            "border-active": "#00ffcc",
            "border-inactive": "#333333",
            header: "#ff007f",
            highlight: "#1a1a1a",
            banner: "#ff007f",
            accent: "#fcee0a",
            "accent-active": "#00ffcc",
            "accent-inactive": "#121212"
        },
        "Matrix Green": {
            main: "#000000",
            sidebar: "#000000",
            player: "#000000",
            text: "#00ff00",
            subtext: "#00aa00",
            button: "#00ff00",
            "button-active": "#00ff00",
            "button-disabled": "#0a1a0a",
            "tab-active": "#00ff00",
            notification: "#00ff00",
            "notification-error": "#ff0000",
            misc: "#003300",
            "border-active": "#00ff00",
            "border-inactive": "#003300",
            header: "#004400",
            highlight: "#001100",
            banner: "#00ff00",
            accent: "#00ff00",
            "accent-active": "#00ff00",
            "accent-inactive": "#0a1a0a"
        },
        "Vampire Stealth": {
            main: "#000000",
            sidebar: "#000000",
            player: "#000000",
            text: "#6b6b6b",
            subtext: "#404040",
            button: "#400000",
            "button-active": "#800000",
            "button-disabled": "#050505",
            "tab-active": "#400000",
            notification: "#800000",
            "notification-error": "#ff0000",
            misc: "#1a1a1a",
            "border-active": "#400000",
            "border-inactive": "#1a1a1a",
            header: "#1a1a1a",
            highlight: "#0a0a0a",
            banner: "#400000",
            accent: "#400000",
            "accent-active": "#800000",
            "accent-inactive": "#050505"
        },
        "Phishing Blue": {
            main: "#000511",
            sidebar: "#000511",
            player: "#000511",
            text: "#cce6ff",
            subtext: "#66b3ff",
            button: "#00ffff",
            "button-active": "#0099ff",
            "button-disabled": "#001a33",
            "tab-active": "#0099ff",
            notification: "#00ffff",
            "notification-error": "#ff0000",
            misc: "#003366",
            "border-active": "#0099ff",
            "border-inactive": "#003366",
            header: "#003366",
            highlight: "#001122",
            banner: "#00ffff",
            accent: "#00ffff",
            "accent-active": "#0099ff",
            "accent-inactive": "#001a33"
        }
    };

    const themeNames = Object.keys(themes);
    let currentThemeIndex = 0;

    function applyTheme(name) {
        const theme = themes[name];
        const root = document.documentElement;
        
        for (const [key, value] of Object.entries(theme)) {
            root.style.setProperty(`--spice-${key}`, value);
            var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
            if (rgb) {
                root.style.setProperty(`--spice-rgb-${key}`, `${parseInt(rgb[1], 16)},${parseInt(rgb[2], 16)},${parseInt(rgb[3], 16)}`);
            }
        }
        Spicetify.showNotification("ClackOS: Injected " + name);
    }

    if (document.getElementById("clackos-theme-swapper")) return;

    const btn = document.createElement("button");
    btn.id = "clackos-theme-swapper";
    btn.style.background = "transparent";
    btn.style.border = "none";
    btn.style.color = "var(--spice-text, #fff)";
    btn.style.cursor = "pointer";
    btn.style.width = "32px";
    btn.style.height = "32px";
    btn.style.display = "flex";
    btn.style.alignItems = "center";
    btn.style.justifyContent = "center";
    btn.style.marginRight = "8px";
    btn.title = "ClackOS Theme Swapper";

    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.05 0 1.95-.89 1.95-1.95 0-.47-.19-.92-.53-1.29-.31-.34-.51-.81-.51-1.32 0-1.07.89-1.95 1.95-1.95h2.18c2.97 0 5.37-2.4 5.37-5.37C22 7.03 17.52 2 12 2zm-4.5 9c-.83 0-1.5-.67-1.5-1.5S6.67 8 7.5 8 9 8.67 9 9.5 8.33 11 7.5 11zm3-3c-.83 0-1.5-.67-1.5-1.5S9.67 5 10.5 5 12 5.67 12 6.5 11.33 8 10.5 8zm3 0c-.83 0-1.5-.67-1.5-1.5S12.67 5 13.5 5 15 5.67 15 6.5 14.33 8 13.5 8zm3 3c-.83 0-1.5-.67-1.5-1.5S15.67 8 16.5 8 18 8.67 18 9.5 17.33 11 16.5 11z"/></svg>`;

    btn.onclick = () => {
        currentThemeIndex = (currentThemeIndex + 1) % themeNames.length;
        applyTheme(themeNames[currentThemeIndex]);
    };

    const profileNode = document.querySelector(".main-userWidget-box");
    if (profileNode && profileNode.parentNode) {
        profileNode.parentNode.insertBefore(btn, profileNode);
    } else {
        topbar.appendChild(btn);
    }

})();
