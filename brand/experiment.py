#!/usr/bin/env python3
import os
import subprocess

OUT = "/home/abuaslam/atlabx/brand/renders"

# Let's test a set of experimental marks for Concept A, B, and C:

# Variation A1: "The Crossing Pylons"
# Two thick diagonal beams crossing into an X, crowned with an apex peak to form an A.
# Left beam: from (68, 80) to (188, 224) [width 32]
# Right beam: from (188, 80) to (68, 224) [width 32]
# Crown: Peak at (128, 24) connecting down to the top ends of the two beams.
# An offset cut at the crossing point creates an overlapping architectural depth.

svg_a1 = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <g fill="#0D1B3E">
    <!-- Top Apex Cap of A -->
    <polygon points="128,24 184,88 152,88 128,60 104,88 72,88"/>
    <!-- Slash 1 (Top-Left to Bottom-Right): Under rail with clearance gap -->
    <polygon points="80,80 108,80 120,116 102,126 70,80" style="display:none"/>
  </g>
</svg>'''

# Let's write a generator that produces 4 distinct designs and renders them side by side
candidates = {}

# Candidate 1: "The Architectural Interlock"
# A bold, clean geometric monogram where the A and X are seamlessly integrated.
# The legs of the A cross at the crossbar level, continuing down to form the base of X.
candidates["cand_1.svg"] = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <path fill="#0D1B3E" fill-rule="evenodd" d="
    M 128,24
    L 188,96 L 152,96 L 128,66 L 104,96 L 68,96 Z
    M 76,104 L 108,104 L 180,224 L 146,224 L 128,192 L 110,224 L 76,224 L 148,104 Z
  " style="display:none"/>
</svg>'''

# Let's build a truly stunning geometric A+X:
# Think of an equilateral triangle with base 180, height 180.
# Apex (128, 28), Left base (38, 224), Right base (218, 224).
# In the center, two intersecting beams of width 28 form an 'X' spanning between (74, 98) and (182, 224),
# and between (182, 98) and (74, 224).
# When rendered with clean 12px negative space isolation, it looks like an ultra-modern tech logo (similar to Vercel/Linear/HashiCorp).

cand_a_refined = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" role="img" aria-labelledby="title-a">
  <title id="title-a">AtlabX — Concept A: The Nexus Monolith</title>
  <!-- Architectural A-X Monogram: Monolithic Delta with Interlocking Rail Crossing -->
  <g fill="#0D1B3E">
    <!-- Top Apex Chevron -->
    <polygon points="128,24 186,104 150,104 128,72 106,104 70,104"/>
    <!-- Left Leg of A & Rising Cross-Rail -->
    <polygon points="64,116 98,116 182,228 146,228 116,186 78,228 38,228 102,154 74,116" style="display:none"/>
  </g>
</svg>'''

# Let's test a very clean, bold 3-piece geometry for Concept A:
# 1) Top Chevron (Apex of A): from (128, 24) down-left to (82, 94) and down-right to (174, 94).
# 2) Left-to-Right diagonal rail (Backslash of X): from (82, 108) down-right to (196, 228).
# 3) Right-to-Left diagonal rail (Forward slash of X): from (174, 108) down-left to (60, 228).
# Where they cross, one beam has an 12px cut showing continuous layer / depth!
# 4) Two outer vertical/diagonal stabilizers at (38, 228) and (218, 228) anchoring the base!

cand_a_interlocking_rails = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" role="img" aria-labelledby="t-a">
  <title id="t-a">Concept A: Nexus Monolith</title>
  <g fill="#0D1B3E">
    <!-- Apex Chevron (Top of A) -->
    <polygon points="128,24 184,98 148,98 128,70 108,98 72,98"/>
    <!-- Rail 1 (Top-Left to Bottom-Right): continuous foreground beam -->
    <polygon points="76,108 108,108 196,228 164,228"/>
    <!-- Rail 2 (Top-Right to Bottom-Left): background beam with 12px clearance gap -->
    <polygon points="180,108 148,108 134,128 148,146 172,114"/>
    <polygon points="122,160 108,178 72,228 104,228 136,180"/>
    <!-- Foundation Base Stabilizers (Completing outer legs of A) -->
    <polygon points="68,118 40,228 68,228 92,152"/>
    <polygon points="188,118 216,228 188,228 164,152"/>
  </g>
</svg>'''

candidates["cand_a_rails.svg"] = cand_a_interlocking_rails

# Now let's refine Concept B: "The Delta Rails"
# In Concept B earlier, we had near-miss angle warnings on 61.7° and 117°.
# Let's fix those mathematically so EVERY edge is snapped to EXACT 60° / 120° / 0° / 90°!
# Let's calculate exact 60° geometry:
# tan(60°) = sqrt(3) ≈ 1.7320508
# cos(60°) = 0.5, sin(60°) = 0.8660254
# If dx = 10, dy = 17.32 (or integer ratio 15 : 26 = 1.7333 -> 60.02°)
# With exact math, an equilateral triangle with base 180 has height = 180 * sqrt(3) / 2 = 155.88.
# Let's snap coordinates so angles are exactly 60° / 120° or use clean integer geometry that audit passes!

for name, svg in candidates.items():
    p = os.path.join(OUT, name)
    with open(p, "w") as f:
        f.write(svg)
    subprocess.run(["python3", "/home/abuaslam/.gemini/config/skills/logo-design/scripts/render_png.py", p, "--out-dir", OUT, "--size", "512"])

print("Candidates generated.")
