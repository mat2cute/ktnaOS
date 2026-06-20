
(function clackosExtension() {
    if (!Spicetify || !Spicetify.Topbar || !Spicetify.React || !Spicetify.ReactDOM || !Spicetify.showNotification) {
        setTimeout(clackosExtension, 300);
        return;
    }
    const themes = {
        "Cyberpunk Neon": {
            main: "#0d0d0d", sidebar: "#0d0d0d", player: "#0d0d0d",
            text: "#ffffff", subtext: "#aaaaaa", button: "#fcee0a",
            "button-active": "#00ffcc", "button-disabled": "#121212",
            "tab-active": "#00ffcc", notification: "#00ffcc",
            "notification-error": "#ff0000", misc: "#333333",
            "border-active": "#00ffcc", "border-inactive": "#333333",
            header: "#ff007f", highlight: "#1a1a1a", banner: "#ff007f",
            accent: "#fcee0a", "accent-active": "#00ffcc", "accent-inactive": "#121212"
        },
        "Matrix Green": {
            main: "#000000", sidebar: "#000000", player: "#000000",
            text: "#00ff00", subtext: "#00aa00", button: "#00ff00",
            "button-active": "#00ff00", "button-disabled": "#0a1a0a",
            "tab-active": "#00ff00", notification: "#00ff00",
            "notification-error": "#ff0000", misc: "#003300",
            "border-active": "#00ff00", "border-inactive": "#003300",
            header: "#004400", highlight: "#001100", banner: "#00ff00",
            accent: "#00ff00", "accent-active": "#00ff00", "accent-inactive": "#0a1a0a"
        },
        "Vampire Stealth": {
            main: "#000000", sidebar: "#000000", player: "#000000",
            text: "#6b6b6b", subtext: "#404040", button: "#400000",
            "button-active": "#800000", "button-disabled": "#050505",
            "tab-active": "#400000", notification: "#800000",
            "notification-error": "#ff0000", misc: "#1a1a1a",
            "border-active": "#400000", "border-inactive": "#1a1a1a",
            header: "#1a1a1a", highlight: "#0a0a0a", banner: "#400000",
            accent: "#400000", "accent-active": "#800000", "accent-inactive": "#050505"
        },
        "Phishing Blue": {
            main: "#000511", sidebar: "#000511", player: "#000511",
            text: "#cce6ff", subtext: "#66b3ff", button: "#00ffff",
            "button-active": "#0099ff", "button-disabled": "#001a33",
            "tab-active": "#0099ff", notification: "#00ffff",
            "notification-error": "#ff0000", misc: "#003366",
            "border-active": "#0099ff", "border-inactive": "#003366",
            header: "#003366", highlight: "#001122", banner: "#00ffff",
            accent: "#00ffff", "accent-active": "#0099ff", "accent-inactive": "#001a33"
        }
    };

    const themeNames = Object.keys(themes);
    let currentThemeIndex = 0;

    function applyTheme(name) {
        const theme = themes[name];
        const root = document.documentElement;
        for (const [key, value] of Object.entries(theme)) {
            root.style.setProperty("--spice-" + key, value);
            const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
            if (rgb) {
                root.style.setProperty("--spice-rgb-" + key, parseInt(rgb[1], 16) + "," + parseInt(rgb[2], 16) + "," + parseInt(rgb[3], 16));
            }
        }
        Spicetify.showNotification("ClackOS: Injected " + name);
    }
    new Spicetify.Topbar.Button(
        "ClackOS Theme Swapper",
        "enhance",
        function() {
            currentThemeIndex = (currentThemeIndex + 1) % themeNames.length;
            applyTheme(themeNames[currentThemeIndex]);
        },
        false,
        true
    );
    var overlay = document.createElement("div");
    overlay.id = "clack-dashboard-overlay";
    overlay.style.cssText = "position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#000;z-index:999999;display:none;overflow-y:auto;padding:64px 32px;box-sizing:border-box;";
    document.body.appendChild(overlay);
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && overlay.style.display !== "none") {
            overlay.style.display = "none";
        }
    });

    const React = Spicetify.React;
    const ReactDOM = Spicetify.ReactDOM;

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

    class ClackOSDashboard extends React.Component {
        constructor(p) {
            super(p);
            this.state = { items: [] };
        }
        componentDidMount() {
            var self = this;
            if (Spicetify.Platform && Spicetify.Platform.RootlistAPI) {
                Spicetify.Platform.RootlistAPI.getContents().then(function(rootlist) {
                    var items = rootlist.items || rootlist;
                    self.setState({ items: items.filter(function(i) { return i.type === "playlist"; }).slice(0, 30) });
                }).catch(function(e) { console.error("ClackOS:", e); });
            }
        }
        render() {
            var header = "   ____  __    ___    ________  __  ____  _____\n  / __ \\/ /   /   |  / ____/ //_/ / __ \\/ ___/\n / / / / /   / /| | / /   / ,<   / / / /\\__ \\ \n/ /_/ / /___/ ___ |/ /___/ /| | / /_/ /___/ / \n\\____/_____/_/  |_|\\____/_/ |_| \\____//____/  \n\n>> SYSTEM_AUTH: VERIFIED\n>> ACCESSING TARGET DATA_GRID...\n";

            return React.createElement("div", { style: { fontFamily: "var(--font-family,monospace)", color: "var(--spice-text,#fff)" } },
                React.createElement("button", {
                    onClick: function() { overlay.style.display = "none"; },
                    style: { position: "fixed", top: "32px", right: "32px", background: "transparent", border: "none", color: "var(--spice-text,#fff)", cursor: "pointer", fontSize: "32px", zIndex: 100000 }
                }, "\u00d7"),
                React.createElement("pre", { style: { fontSize: "14px", color: "var(--spice-banner,#f0f)", marginBottom: "32px", lineHeight: "1.2" } }, header),
                React.createElement("h2", { style: { marginBottom: "16px", color: "var(--spice-button-active,#0fc)" } }, ">> RECENT_TARGETS"),
                React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px" } },
                    this.state.items.map(function(item, i) {
                        return React.createElement(DashboardCard, {
                            key: (item.uri || "") + i,
                            title: item.name || "Unknown",
                            subtitle: (item.owner && item.owner.name) || "Playlist",
                            image: (item.images && item.images[0] && item.images[0].url) || null,
                            uri: item.uri || item.link
                        });
                    })
                )
            );
        }
    }

    ReactDOM.render(React.createElement(ClackOSDashboard, null), overlay);
    new Spicetify.Topbar.Button(
        "ClackOS Terminal",
        "computer",
        function() {
            overlay.style.display = overlay.style.display === "none" ? "block" : "none";
        },
        false,
        true
    );

    console.log("[ClackOS] Extension loaded successfully");
})();
