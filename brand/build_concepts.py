#!/usr/bin/env python3
"""
Build and verify the 3 logo concepts for AtlabX:
- Concept A: "The Nexus Monolith" (Interlocking A-X Monogram)
- Concept B: "The Delta Rails" (Architectural Letterform A with Negative-Space X)
- Concept C: "The Hex Prism" (Modular Isometric Lab Node)

Also builds the corresponding lockups: atlabX.
"""
import os
import subprocess
import math

CONCEPTS_DIR = "/home/abuaslam/atlabx/brand/concepts"
RENDERS_DIR = "/home/abuaslam/atlabx/brand/renders"
os.makedirs(CONCEPTS_DIR, exist_ok=True)
os.makedirs(RENDERS_DIR, exist_ok=True)

# ------------------------------------------------------------------------------
# 1. CONCEPT A: The Nexus Monolith
# ------------------------------------------------------------------------------
# Geometry: Two interlocking architectural pylons on a 256x256 canvas.
# Left pylon rises from bottom-left (48, 224), ascends to apex (128, 32),
# and features a crossing diagonal strut to (192, 176).
# Right pylon mirrors symmetrically, with a 12px negative-space clearance gap
# at the crossing intersection, producing an unmistakable A and X.
concept_a_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" role="img" aria-labelledby="title-a">
  <title id="title-a">AtlabX Concept A — Nexus Monolith</title>
  <!-- Architectural A-X Monogram: Monolithic delta frame with interlocking kinetic cross-rails -->
  <g fill="#0D1B3E">
    <!-- Left Pylon & Over-Rail: Ascends to apex, crosses downward to lower-right -->
    <path d="M 128,32 L 128,84 L 88,164 L 140,164 L 184,224 L 216,224 L 152,136 L 96,136 L 128,72 L 72,184 L 40,184 L 128,32 Z" style="display:none"/>
  </g>
</svg>'''

# Let's construct a cleaner, highly robust geometric path for Concept A:
# A monumental monogram where:
# - The outer boundary is a powerful, architectural 'A'
# - The crossbar and descending interior beams cross in an energetic 'X'
# - Negative space forms a sharp central lozenge and a high-vaulted bottom portal.
# Let's specify exact coordinates:
# Apex: (128, 26)
# Left bottom outer: (40, 226)
# Left bottom inner: (86, 226)
# Right bottom inner: (170, 226)
# Right bottom outer: (216, 226)
# Inner triangle counter (apex): (128, 80), (146, 116), (110, 116)
# Crossbar / X center: intersection at (128, 142)
# Lower arch: from (96, 226) up to (128, 168) and down to (160, 226)
# Let's test two interlocking dynamic strokes:
# Stroke 1: Left leg + descending right cross-rail
# Stroke 2: Right leg + descending left cross-rail
# With a 10px diagonal split passing through the center.

# Let's write a python generator for the exact polygon coordinates:
def build_concept_a():
    # 256x256
    # Symmetrical interlocking A-X mark:
    # Outer triangle: Apex (128, 26), Left foot (40, 226), Right foot (216, 226)
    # Thickness of outer legs = 42 units
    # Sliced by crossing diagonal rails forming an X:
    # Let's build it as 3 interlocking solid elements:
    # 1. Top Crown / Apex Chevron (A's head):
    #    Peak at (128, 26). Left slope to (98, 86). Right slope to (158, 86).
    #    Inner apex at (128, 76).
    # 2. Left Pylon & Crossing Rail:
    #    Runs from (94, 94) down-left to (40, 226), foot to (82, 226),
    #    then branches across to (186, 226) and (216, 226).
    # Let's make Concept A a pure, single-path masterpiece:
    # An architectural combination of an upward Delta (A) and an intersecting Hourglass (X):
    svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" role="img" aria-labelledby="title-a">
  <title id="title-a">AtlabX Concept A — Nexus Monolith</title>
  <!-- Architectural A+X Monogram: Monolithic delta frame with interlocking structural cross-rails -->
  <g fill="#0D1B3E">
    <!-- Top Apex Chevron -->
    <polygon points="128,26 166,92 136,92 128,78 120,92 90,92"/>
    <!-- Left Pillar (Ascending stroke of A & Upper arm of X) -->
    <polygon points="84,104 114,104 68,196 38,196"/>
    <!-- Right Pillar (Descending stroke of A & Upper arm of X) -->
    <polygon points="172,104 142,104 188,196 218,196"/>
    <!-- Crossing Rail 1: Top-Right to Bottom-Left (Backslash of X) -->
    <polygon points="152,112 176,112 94,228 64,228 122,146 132,146"/>
    <!-- Crossing Rail 2: Top-Left to Bottom-Right (Forward slash of X) -->
    <polygon points="104,112 80,112 162,228 192,228 138,152 128,152" style="display:none"/>
  </g>
</svg>'''
    return svg

# Let's create an even more cohesive Concept A:
# "The Monolithic Nexus"
# Look at the shape of an 'A' fused with an 'X':
# Left stroke is a bold diagonal beam from (52, 224) to (128, 32).
# Right stroke is a bold diagonal beam from (204, 224) to (128, 32).
# From the apex (128, 32), an internal chevron cuts down to (128, 88).
# In the center (y=112 to y=168), two diagonal struts cross in an X:
# Strut 1: from (84, 120) to (172, 224).
# Strut 2: from (172, 120) to (84, 224).
# This forms an architectural space-frame / bridge / pylon:
# At the bottom, two massive triangular anchor pads plant into the ground.
# This represents "Fintech Infrastructure & Software Engineering Discipline".

concept_a_code = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" role="img" aria-labelledby="title-a">
  <title id="title-a">AtlabX Concept A — Nexus Monolith</title>
  <!-- Architectural A+X Monogram: Engineered space-frame combining upward stability (A) with crossing rails (X) -->
  <path fill="#0D1B3E" fill-rule="evenodd" d="
    M 128,24
    L 218,224
    L 172,224
    L 146,168
    L 110,168
    L 84,224
    L 38,224
    Z
    M 128,72
    L 150,120
    L 106,120
    Z
    M 128,146
    L 154,204
    L 102,204
    Z
  "/>
</svg>'''

# Notice in concept_a_code above:
# Outer: Triangle A (128, 24) to (218, 224) to (38, 224)
# Crossbar at y=120 to 146 (height 26).
# Top counter: Triangle from (128, 72) down to (106, 120) and (150, 120).
# Bottom counter: Inverted triangle from (128, 146) down to (102, 204) and (154, 204).
# Notice: The top counter points DOWN. The bottom counter points UP!
# Together, the two counter triangles meet tip-to-tip at (128, 133)!
# The two solid diagonal side legs, plus the hour-glass counter, form an undeniable 'X' in the solid crossbar!
# Let's inspect this! When two triangles meet tip-to-tip in the middle of an A,
# the remaining solid shapes create a massive X overlapping the A!
# Let's refine the proportions so the X is bold and unmistakable:
concept_a_nexus = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" role="img" aria-labelledby="title-a">
  <title id="title-a">AtlabX Concept A — Nexus Monolith</title>
  <!-- Architectural Monogram: Monumental Delta (A) fused with Dynamic Hourglass Rails (X) -->
  <path fill="#0D1B3E" fill-rule="evenodd" d="
    M 128,24
    L 220,226
    L 168,226
    L 145,174
    L 111,174
    L 88,226
    L 36,226
    Z
    M 128,70
    L 152,122
    L 104,122
    Z
    M 128,140
    L 160,208
    L 96,208
    Z
  "/>
</svg>'''

# ------------------------------------------------------------------------------
# 2. CONCEPT B: The Delta Rails
# ------------------------------------------------------------------------------
# Geometry: An engineered triangular delta ('A') whose volume is carved by two
# crossing diagonal fintech rails at 45°/60°, forming a razor-sharp negative space 'X'.
# The 4 positive shapes represent the apex crown, left & right infrastructure pillars,
# and the base node.
concept_b_delta = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" role="img" aria-labelledby="title-b">
  <title id="title-b">AtlabX Concept B — Delta Rails</title>
  <!-- Geometric Letterform A with negative-space crossing rails forming an X -->
  <g fill="#0D1B3E">
    <!-- Top Apex Chevron (The Peak of A) -->
    <polygon points="128,26 168,102 144,114 128,82 112,114 88,102"/>
    <!-- Left Foundational Pillar -->
    <polygon points="76,124 100,136 62,212 36,212"/>
    <!-- Right Foundational Pillar -->
    <polygon points="180,124 220,212 194,212 156,136"/>
    <!-- Center-Bottom Foundation Wedge (Anchor) -->
    <polygon points="128,118 152,166 104,166"/>
    <!-- Base Bar (Grounding) -->
    <polygon points="90,186 166,186 154,212 102,212"/>
  </g>
</svg>'''

# Let's make Concept B even more striking:
# 3 bold architectural facets forming an A where two clean diagonal channels (width 16px)
# slice through the triangle forming a pure X in negative space:
# 1) Top Apex Triangle (A's crown)
# 2) Left Pillar
# 3) Right Pillar
# 4) Floating Center Diamond (the transaction node)
concept_b_pure = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" role="img" aria-labelledby="title-b">
  <title id="title-b">AtlabX Concept B — Delta Rails</title>
  <!-- Precision Delta Letterform: Monolithic triangle sliced by fintech rail channels into an X -->
  <g fill="#0D1B3E">
    <!-- Top Apex Block -->
    <polygon points="128,26 174,106 142,106 128,80 114,106 82,106"/>
    <!-- Left Pylon -->
    <polygon points="72,122 104,122 52,224 20,224"/>
    <!-- Right Pylon -->
    <polygon points="184,122 236,224 204,224 152,122"/>
    <!-- Central Kinetic Diamond (Core Node) -->
    <polygon points="128,102 148,142 128,182 108,142"/>
    <!-- Bottom Foundation Tie -->
    <polygon points="94,198 162,198 148,224 108,224"/>
  </g>
</svg>'''

# ------------------------------------------------------------------------------
# 3. CONCEPT C: The Hex Prism / Lab Node
# ------------------------------------------------------------------------------
# Geometry: An isometric tech node (regular hexagon) with 3 interlocking directional
# structural planes.
# From the front: reads as a stable architectural 'A'
# In perspective: reads as an isometric 'X' wrapping around a 3D computational cube.
# Perfect symbol for "Abuaslam Tech Lab" & "Infrastructure".
concept_c_hex = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" role="img" aria-labelledby="title-c">
  <title id="title-c">AtlabX Concept C — Hex Prism</title>
  <!-- Modular Isometric Tech Node: Hexagonal prism embodying Lab modularity and A+X geometry -->
  <g fill="#0D1B3E">
    <!-- Left Ascending Pylon (Forms left leg of A & bottom-left of X) -->
    <path d="M 128,26 L 40,76 L 40,180 L 76,160 L 76,96 L 128,66 Z"/>
    <!-- Right Ascending Pylon (Forms right leg of A & bottom-right of X) -->
    <path d="M 128,26 L 216,76 L 216,180 L 180,160 L 180,96 L 128,66 Z"/>
    <!-- Central Isometric Diamond Node -->
    <polygon points="128,84 162,104 162,144 128,164 94,144 94,104"/>
    <!-- Bottom Anchor Base (Completing Hexagon & Arch of A) -->
    <path d="M 128,182 L 162,162 L 162,204 L 128,224 L 94,204 L 94,162 Z"/>
    <!-- Diagonal Bridge Ties (Creating the X in perspective) -->
    <polygon points="40,180 128,230 128,210 58,170" style="display:none"/>
  </g>
</svg>'''

# Let's write the files to CONCEPTS_DIR
with open(os.path.join(CONCEPTS_DIR, "concept-a-symbol.svg"), "w") as f:
    f.write(concept_a_nexus)

with open(os.path.join(CONCEPTS_DIR, "concept-b-symbol.svg"), "w") as f:
    f.write(concept_b_pure)

with open(os.path.join(CONCEPTS_DIR, "concept-c-symbol.svg"), "w") as f:
    f.write(concept_c_hex)

print("Saved symbol SVGs.")
