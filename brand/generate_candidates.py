#!/usr/bin/env python3
"""
Generate and render logo concept candidates for AtlabX.
"""
import os
import subprocess

OUT_DIR = "/home/abuaslam/atlabx/brand/concepts"
os.makedirs(OUT_DIR, exist_ok=True)

# ------------------------------------------------------------------------------
# Concept A: "The Nexus Monolith" (Interlocking A-X Monogram)
# A bold architectural monogram where the structural legs of the 'A' cross in the
# center to form a high-conviction 'X'.
# ------------------------------------------------------------------------------
concept_a_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" role="img" aria-labelledby="title-a">
  <title id="title-a">AtlabX — Concept A: Nexus Monolith</title>
  <!-- Architectural Monogram fusing A (Apex Foundation) with X (Exchange Rails) -->
  <g fill="#0D1B3E">
    <!-- Top Apex Chevron (The Peak of A) -->
    <polygon points="128,28 172,96 138,96 128,80 118,96 84,96"/>
    <!-- Left Pylon to Right Base (Backslash Rail of X & Leg of A) -->
    <polygon points="98,76 128,124 128,148 76,228 36,228 100,130 76,92"/>
    <!-- Right Pylon to Left Base (Forward Slash Rail of X & Leg of A) -->
    <polygon points="158,76 180,92 156,130 220,228 180,228 128,148 128,124"/>
    <!-- Central Cross-Tie Bridge (Completing A & Interlocking X) -->
    <polygon points="128,110 146,138 128,166 110,138"/>
  </g>
</svg>'''

# Let's also build a refined, single-compound-path version of Concept A with continuous flow:
concept_a_refined = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" role="img" aria-labelledby="title-a">
  <title id="title-a">AtlabX — Concept A: Nexus Monolith</title>
  <!-- Architectural Monogram: Interlocking A and X with shared geometric center -->
  <g fill="#0D1B3E">
    <!-- Main Left-leaning Pylon (Apex down to right foot via central cross) -->
    <path d="M 128,28 L 176,104 L 142,104 L 128,82 L 114,104 L 80,104 Z"/>
    <!-- Diagonal Crossing Beam 1: Top-Left to Bottom-Right -->
    <path d="M 72,92 L 106,92 L 184,212 L 218,212 L 140,92 L 174,92 L 226,228 L 172,228 L 128,160 L 84,228 L 30,228 Z" style="display:none"/>
  </g>
</svg>'''

# Let's test a very clean, iconic geometric construction for Concept A:
# Two symmetrical overlapping folded ribbons forming an A with an internal X.
concept_a_pure = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" role="img" aria-labelledby="title-a">
  <title id="title-a">AtlabX — Concept A: The Nexus Monolith</title>
  <!-- Architectural A+X Monogram: Monumental delta frame with diagonal crossing rails -->
  <path fill="#0D1B3E" fill-rule="evenodd" d="
    M 128,24
    L 216,224
    L 168,224
    L 146,172
    L 110,172
    L 88,224
    L 40,224
    Z
    M 128,76
    L 142,110
    L 114,110
    Z
    M 102,138
    L 154,138
    L 128,198
    Z
  "/>
</svg>'''

# Wait, let's make Concept A truly ownable and unique, not just a plain A with triangles.
# Let's look at how A and X can interlock dynamically:
# Imagine two bold diagonal beams (the X) where the top arms are connected by an apex chevron,
# and where the crossing point has an optical negative space gate.
concept_a_interlock = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" role="img" aria-labelledby="title-a">
  <title id="title-a">AtlabX — Concept A: Nexus Monolith</title>
  <!-- Architectural A-X Monogram: Two interlocking structural pillars forming an A with dynamic X cross-bracing -->
  <g fill="#0D1B3E">
    <!-- Left Pillar & Forward Rail -->
    <polygon points="128,26 128,68 76,148 116,148 168,228 212,228 128,100 80,100 128,26" style="display:none"/>
  </g>
</svg>'''

print("Writing concept candidate generator...")
