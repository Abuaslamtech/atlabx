#!/usr/bin/env python3
"""
Production Brand Kit Builder for AtlabX (Option C: The Lab Prism)
"""
import os
import re
import subprocess
import xml.etree.ElementTree as ET

DIST_DIR = "/home/abuaslam/atlabx/brand/dist"
WEB_DIR = "/home/abuaslam/atlabx/brand/dist/web"
os.makedirs(DIST_DIR, exist_ok=True)
os.makedirs(WEB_DIR, exist_ok=True)

# ------------------------------------------------------------------------------
# 1. Master Symbols
# ------------------------------------------------------------------------------

# Master Two-Tone Brand Symbol
symbol_color = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" role="img" aria-labelledby="title-sym">
  <title id="title-sym">AtlabX — The Lab Prism Symbol</title>
  <g>
    <!-- Top Face / Apex Roof (Deep Navy) -->
    <polygon fill="#0D1B3E" points="128,28 214.6,78 178.6,98.8 128,69.6 77.4,98.8 41.4,78"/>
    <!-- Left Ascending Pylon (Brand Navy) -->
    <polygon fill="#1F4285" points="41.4,92 77.4,112.8 77.4,178 41.4,157.2"/>
    <!-- Right Descending Pylon (Brand Navy) -->
    <polygon fill="#1F4285" points="214.6,92 214.6,157.2 178.6,178 178.6,112.8"/>
    <!-- Central Isometric Diamond Core (Deep Navy) -->
    <polygon fill="#0D1B3E" points="128,86 162.6,106 162.6,146 128,166 93.4,146 93.4,106"/>
    <!-- Bottom Arch & Foundation Keystone (Brand Navy) -->
    <polygon fill="#1F4285" points="128,180 162.6,160 162.6,200 128,220 93.4,200 93.4,160"/>
  </g>
</svg>'''

# Monochrome Single-Color Symbol
symbol_mono = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" role="img" aria-labelledby="title-sym-mono">
  <title id="title-sym-mono">AtlabX — The Lab Prism (Mono)</title>
  <g fill="#0D1B3E">
    <polygon points="128,28 214.6,78 178.6,98.8 128,69.6 77.4,98.8 41.4,78"/>
    <polygon points="41.4,92 77.4,112.8 77.4,178 41.4,157.2"/>
    <polygon points="214.6,92 214.6,157.2 178.6,178 178.6,112.8"/>
    <polygon points="128,86 162.6,106 162.6,146 128,166 93.4,146 93.4,106"/>
    <polygon points="128,180 162.6,160 162.6,200 128,220 93.4,200 93.4,160"/>
  </g>
</svg>'''

# Dark Mode / Reversed White Symbol
symbol_white = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" role="img" aria-labelledby="title-sym-white">
  <title id="title-sym-white">AtlabX — The Lab Prism (White)</title>
  <g fill="#FFFFFF">
    <polygon points="128,28 214.6,78 178.6,98.8 128,69.6 77.4,98.8 41.4,78"/>
    <polygon points="41.4,92 77.4,112.8 77.4,178 41.4,157.2"/>
    <polygon points="214.6,92 214.6,157.2 178.6,178 178.6,112.8"/>
    <polygon points="128,86 162.6,106 162.6,146 128,166 93.4,146 93.4,106"/>
    <polygon points="128,180 162.6,160 162.6,200 128,220 93.4,200 93.4,160"/>
  </g>
</svg>'''

# Small-Size Cut for Favicons / 16-32px (slightly enlarged channels so gaps never close)
symbol_small = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" role="img" aria-labelledby="title-sym-small">
  <title id="title-sym-small">AtlabX — The Lab Prism (Small-Size Cut)</title>
  <g fill="#0D1B3E">
    <!-- Top Face / Apex Roof -->
    <polygon points="128,24 216,75 176,98 128,70 80,98 40,75"/>
    <!-- Left Ascending Pylon -->
    <polygon points="38,92 74,113 74,176 38,155"/>
    <!-- Right Descending Pylon -->
    <polygon points="218,92 218,155 182,176 182,113"/>
    <!-- Central Core -->
    <polygon points="128,86 160,105 160,145 128,164 96,145 96,105"/>
    <!-- Bottom Keystone -->
    <polygon points="128,180 160,161 160,199 128,218 96,199 96,161"/>
  </g>
</svg>'''

# ------------------------------------------------------------------------------
# 2. Extract Clean Wordmark Vectors
# ------------------------------------------------------------------------------

# Wordmark Light: "atlab" in #0D1B3E, "X" in #1F4285
# Wordmark Dark:  "atlab" in #FFFFFF, "X" in #B0BCD6
with open("/home/abuaslam/atlabx/brand/concepts/concept-c-lockup.svg") as f:
    orig_lockup = f.read()

# Extract the wordmark paths from the earlier audited lockup
wm_match = re.search(r'<g id="wordmark"[^>]*>(.*?)</g>', orig_lockup, re.DOTALL)
wm_light_inner = wm_match.group(1).strip()

# Create dark mode version of wordmark paths
wm_dark_inner = wm_light_inner.replace('#0d1b3e', '#FFFFFF').replace('#0D1B3E', '#FFFFFF').replace('#1f4285', '#B0BCD6').replace('#1F4285', '#B0BCD6')

# ------------------------------------------------------------------------------
# 3. Assemble Horizontal and Stacked Lockups
# ------------------------------------------------------------------------------

# Horizontal Lockup (Light Mode)
lockup_h_light = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 256" width="760" height="256" role="img" aria-labelledby="title-lk-h">
  <title id="title-lk-h">AtlabX Horizontal Logo</title>
  <!-- Brand Symbol -->
  <g id="symbol" transform="translate(36, 38) scale(0.703)">
    <polygon fill="#0D1B3E" points="128,28 214.6,78 178.6,98.8 128,69.6 77.4,98.8 41.4,78"/>
    <polygon fill="#1F4285" points="41.4,92 77.4,112.8 77.4,178 41.4,157.2"/>
    <polygon fill="#1F4285" points="214.6,92 214.6,157.2 178.6,178 178.6,112.8"/>
    <polygon fill="#0D1B3E" points="128,86 162.6,106 162.6,146 128,166 93.4,146 93.4,106"/>
    <polygon fill="#1F4285" points="128,180 162.6,160 162.6,200 128,220 93.4,200 93.4,160"/>
  </g>
  <!-- Wordmark: atlabX -->
  <g id="wordmark" transform="translate(240, 42)">
    {wm_light_inner}
  </g>
</svg>'''

# Horizontal Lockup (Dark Mode)
lockup_h_dark = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 256" width="760" height="256" role="img" aria-labelledby="title-lk-hd">
  <title id="title-lk-hd">AtlabX Horizontal Logo (Dark Mode)</title>
  <!-- Brand Symbol -->
  <g id="symbol" transform="translate(36, 38) scale(0.703)">
    <polygon fill="#FFFFFF" points="128,28 214.6,78 178.6,98.8 128,69.6 77.4,98.8 41.4,78"/>
    <polygon fill="#B0BCD6" points="41.4,92 77.4,112.8 77.4,178 41.4,157.2"/>
    <polygon fill="#B0BCD6" points="214.6,92 214.6,157.2 178.6,178 178.6,112.8"/>
    <polygon fill="#FFFFFF" points="128,86 162.6,106 162.6,146 128,166 93.4,146 93.4,106"/>
    <polygon fill="#B0BCD6" points="128,180 162.6,160 162.6,200 128,220 93.4,200 93.4,160"/>
  </g>
  <!-- Wordmark: atlabX -->
  <g id="wordmark" transform="translate(240, 42)">
    {wm_dark_inner}
  </g>
</svg>'''

# Stacked Lockup (Light Mode)
# Canvas: 512×440
lockup_s_light = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 440" width="512" height="440" role="img" aria-labelledby="title-lk-s">
  <title id="title-lk-s">AtlabX Stacked Logo</title>
  <!-- Centered Symbol (scale 0.82, centered at x=256) -->
  <g id="symbol" transform="translate(151, 24) scale(0.82)">
    <polygon fill="#0D1B3E" points="128,28 214.6,78 178.6,98.8 128,69.6 77.4,98.8 41.4,78"/>
    <polygon fill="#1F4285" points="41.4,92 77.4,112.8 77.4,178 41.4,157.2"/>
    <polygon fill="#1F4285" points="214.6,92 214.6,157.2 178.6,178 178.6,112.8"/>
    <polygon fill="#0D1B3E" points="128,86 162.6,106 162.6,146 128,166 93.4,146 93.4,106"/>
    <polygon fill="#1F4285" points="128,180 162.6,160 162.6,200 128,220 93.4,200 93.4,160"/>
  </g>
  <!-- Wordmark centered underneath -->
  <g id="wordmark" transform="translate(34, 252) scale(0.92)">
    {wm_light_inner}
  </g>
</svg>'''

# Stacked Lockup (Dark Mode)
lockup_s_dark = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 440" width="512" height="440" role="img" aria-labelledby="title-lk-sd">
  <title id="title-lk-sd">AtlabX Stacked Logo (Dark Mode)</title>
  <!-- Centered Symbol -->
  <g id="symbol" transform="translate(151, 24) scale(0.82)">
    <polygon fill="#FFFFFF" points="128,28 214.6,78 178.6,98.8 128,69.6 77.4,98.8 41.4,78"/>
    <polygon fill="#B0BCD6" points="41.4,92 77.4,112.8 77.4,178 41.4,157.2"/>
    <polygon fill="#B0BCD6" points="214.6,92 214.6,157.2 178.6,178 178.6,112.8"/>
    <polygon fill="#FFFFFF" points="128,86 162.6,106 162.6,146 128,166 93.4,146 93.4,106"/>
    <polygon fill="#B0BCD6" points="128,180 162.6,160 162.6,200 128,220 93.4,200 93.4,160"/>
  </g>
  <!-- Wordmark centered underneath -->
  <g id="wordmark" transform="translate(34, 252) scale(0.92)">
    {wm_dark_inner}
  </g>
</svg>'''

# ------------------------------------------------------------------------------
# 4. Save All Master Files
# ------------------------------------------------------------------------------

files_to_save = {
    "atlabx-symbol.svg": symbol_color,
    "atlabx-symbol-mono.svg": symbol_mono,
    "atlabx-symbol-white.svg": symbol_white,
    "atlabx-symbol-small.svg": symbol_small,
    "atlabx-logo-horizontal.svg": lockup_h_light,
    "atlabx-logo-horizontal-dark.svg": lockup_h_dark,
    "atlabx-logo-stacked.svg": lockup_s_light,
    "atlabx-logo-stacked-dark.svg": lockup_s_dark,
}

for name, content in files_to_save.items():
    path = os.path.join(DIST_DIR, name)
    with open(path, "w") as f:
        f.write(content)

print(f"Saved {len(files_to_save)} master SVG files to {DIST_DIR}.")
