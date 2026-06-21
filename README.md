# ktnaOS

A system-level Spicetify extension and theme pack that transforms Spotify into a cool terminal!

**NOTE: This theme is designed to be installed LOCALLY.** The Spicetify Marketplace bundling breaks the execution order of the Javascript payloads. Follow the manual installation guide below.

## Manual Installation Guide

### Step 1: Install the Theme Files
1. Download or clone this repository to your computer.
2. Open your Spicetify Themes folder:
   - Windows: `%appdata%\spicetify\Themes`
   - Linux: `~/.config/spicetify/Themes`
   - macOS: `~/spicetify_data/Themes`
3. Create a new folder inside `Themes` and name it exactly: `ktnaOS`.
4. Copy the following files from this repository into your new `ktnaOS` folder:
   - `theme.js`
   - `user.css`
   - `color.ini`

### Step 2: Install the Terminal Extension
1. Open your Spicetify Extensions folder:
   - Windows: `%appdata%\spicetify\Extensions`
   - Linux: `~/.config/spicetify/Extensions`
   - macOS: `~/spicetify_data/Extensions`
2. Copy `ktnaos.js` from this repository into the `Extensions` folder.

### Step 3: Apply Configuration
Open your terminal (PowerShell, Bash, etc.) and run the following commands sequentially to hook the payloads into Spicetify:

```bash
spicetify config current_theme ktnaOS
spicetify config extensions ktnaos.js
spicetify config inject_theme_js 1
spicetify apply
```

### Step 4: Access the Terminal
Once Spotify restarts:
- Click the **Computer icon** in your bottom playbar to open the ktnaOS Terminal overlay.
- Use commands like `exe skip`, `exe pause`, `exe play`, or `exe vol 50` in the bottom input box.
- Use the **Palette icon** in your topbar to access the quick Theme Swapper.


#### ALSO PLEASEEEE ADD ME ON DISCORD FOR BUGS OR ANY FEATURE REOCOMMENDATIONS!

### mat.sys

#### you can also add me to donate ig...
### PLSS IM POOR
