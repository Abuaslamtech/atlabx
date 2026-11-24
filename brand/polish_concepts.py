#!/usr/bin/env python3
"""
Polish and perfect all symbols and lockups.
"""
import os
import re
import xml.etree.ElementTree as ET

BASE_DIR = "/home/abuaslam/atlabx/brand"
CONCEPTS_DIR = os.path.join(BASE_DIR, "concepts")

# 1. Fix concept-a-symbol single near-miss angle:
# In Rail 2 polygon:
# polygon points="180,112 148,112 134,130 148,148 170,118"
# Let's change the cut to:
# polygon points="180,112 148,112 134,130 148,148 172,116"
# From (172, 116) to (180, 112): dx = 8, dy = -4 (atan2(-4, 8) = -26.56° - no near miss!).
# Or even cleaner:
# polygon points="180,112 148,112 134,130 148,148 176,112" (straight back to top line, triangle cut!).

symbol_a = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" role="img" aria-labelledby="title-a">
  <title id="title-a">AtlabX Concept A — Nexus Monolith</title>
  <!-- Architectural A+X Monogram: Monolithic Delta Frame with Interlocking Kinetic Rails -->
  <g fill="#0D1B3E">
    <!-- Top Apex Chevron (Crown of A) -->
    <polygon points="128,24 186,96 150,96 128,68 106,96 70,96"/>
    <!-- Left Pylon Outer Leg (Anchoring A) -->
    <polygon points="66,112 36,224 68,224 94,146"/>
    <!-- Right Pylon Outer Leg (Anchoring A) -->
    <polygon points="190,112 162,146 188,224 220,224"/>
    <!-- Foreground Crossing Rail (Backslash of X: Top-Left to Bottom-Right) -->
    <polygon points="76,112 108,112 196,224 164,224"/>
    <!-- Background Crossing Rail (Forward Slash of X: Top-Right to Bottom-Left with 14px clearance) -->
    <polygon points="180,112 148,112 134,130 148,148 176,112"/>
    <polygon points="122,162 108,180 74,224 106,224 136,182"/>
  </g>
</svg>'''

# 2. Symbol B is already 100/100:
symbol_b = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" role="img" aria-labelledby="title-b">
  <title id="title-b">AtlabX Concept B — Delta Rails</title>
  <!-- Precision Letterform: Monolithic Delta A with 45° crossing fintech rails carving an X -->
  <g fill="#0D1B3E">
    <!-- Top Apex Chevron (Head of A) -->
    <polygon points="128,24 184,80 152,80 128,56 104,80 72,80"/>
    <!-- Left Structural Pylon -->
    <polygon points="64,92 96,92 42,226 10,226"/>
    <!-- Right Structural Pylon -->
    <polygon points="192,92 246,226 214,226 160,92"/>
    <!-- Central Kinetic Core (Precision Lozenge) -->
    <polygon points="128,96 156,138 128,180 100,138"/>
    <!-- Foundation Anchor Base -->
    <polygon points="84,198 172,198 156,226 100,226"/>
  </g>
</svg>'''

# 3. Symbol C is 99/100:
symbol_c = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" role="img" aria-labelledby="title-c">
  <title id="title-c">AtlabX Concept C — The Lab Prism</title>
  <!-- Modular Tech Node: Isometric hexagonal prism embodying Lab modularity and A+X geometry -->
  <g fill="#0D1B3E">
    <!-- Top Face / Apex Cap (Forms apex of A) -->
    <polygon points="128,28 214.6,78 178.6,98.8 128,69.6 77.4,98.8 41.4,78"/>
    <!-- Left Ascending Pylon (Left leg of A & bottom-left rail of X) -->
    <polygon points="41.4,92 77.4,112.8 77.4,178 41.4,157.2"/>
    <!-- Right Descending Pylon (Right leg of A & bottom-right rail of X) -->
    <polygon points="214.6,92 214.6,157.2 178.6,178 178.6,112.8"/>
    <!-- Central Isometric Diamond Node -->
    <polygon points="128,86 162.6,106 162.6,146 128,166 93.4,146 93.4,106"/>
    <!-- Bottom Arch & Foundation Keystone -->
    <polygon points="128,180 162.6,160 162.6,200 128,220 93.4,200 93.4,160"/>
  </g>
</svg>'''

# Save the polished symbols
with open(os.path.join(CONCEPTS_DIR, "concept-a-symbol.svg"), "w") as f:
    f.write(symbol_a)
with open(os.path.join(CONCEPTS_DIR, "concept-b-symbol.svg"), "w") as f:
    f.write(symbol_b)
with open(os.path.join(CONCEPTS_DIR, "concept-c-symbol.svg"), "w") as f:
    f.write(symbol_c)

# Clean wordmark path from sodipodi/inkscape metadata
with open("/tmp/wordmark_path.svg") as f:
    wm_text = f.read()

# Strip any sodipodi or inkscape attributes
wm_clean = re.sub(r'\s*(?:sodipodi|inkscape):[a-zA-Z0-9\-]+="[^"]*"', '', wm_text)
# Extract inner path tags
paths = re.findall(r'<path[^>]+/>', wm_clean)
wm_paths = "\n    ".join(paths)

# Clean lockups with perfectly balanced viewBox="0 0 760 256":
# Symbol scaled to 180x180, centered vertically at x=36, y=38
# Wordmark placed at x=248, y=42
def make_clean_lockup(symbol_svg_str, title_id, title_text):
    s_tree = ET.fromstring(symbol_svg_str)
    s_elements = ""
    for elem in s_tree:
        if elem.tag.endswith("title"):
            continue
        s_elements += ET.tostring(elem, encoding="unicode")
    
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 256" width="760" height="256" role="img" aria-labelledby="{title_id}">
  <title id="{title_id}">{title_text}</title>
  <!-- Brand Symbol -->
  <g id="symbol" transform="translate(36, 38) scale(0.703)">
    {s_elements}
  </g>
  <!-- Wordmark: atlabX -->
  <g id="wordmark" transform="translate(240, 42)">
    {wm_paths}
  </g>
</svg>'''

with open(os.path.join(CONCEPTS_DIR, "concept-a-lockup.svg"), "w") as f:
    f.write(make_clean_lockup(symbol_a, "title-lk-a", "AtlabX — Concept A Horizontal Lockup"))

with open(os.path.join(CONCEPTS_DIR, "concept-b-lockup.svg"), "w") as f:
    f.write(make_clean_lockup(symbol_b, "title-lk-b", "AtlabX — Concept B Horizontal Lockup"))

with open(os.path.join(CONCEPTS_DIR, "concept-c-lockup.svg"), "w") as f:
    f.write(make_clean_lockup(symbol_c, "title-lk-c", "AtlabX — Concept C Horizontal Lockup"))

print("Polished all files.")
