# AtlabX — Brand Identity & Logo Guidelines

## 1. The Brand Identity
* **Operating Entity:** Abuaslam Tech Lab (operating as AtlabX)
* **Domain:** Software development studio & fintech infrastructure based in Zaria, Nigeria.
* **Core Mark:** **The Lab Prism** (Option C) — an isometric hexagonal tech node composed of five directional structural planes. In front elevation, it forms an architectural gateway and foundation (**A**); in isometric perspective, it forms a dynamic computational multiplier and financial transfer rail (**X**).
* **Symbolism:** Represents engineering discipline, modular code architecture, and high-performance financial systems built for the African continent.

---

## 2. Core Master Assets
All production-ready vectors and exported assets are maintained in `brand/dist/` and `public/`:

| Asset File | Format | Usage |
|---|---|---|
| `atlabx-symbol.svg` | SVG | Primary brand symbol (Deep Navy `#0D1B3E` & Brand Navy `#1F4285`) |
| `atlabx-symbol-mono.svg` | SVG | Single-color version for mono applications (`#0D1B3E`) |
| `atlabx-symbol-white.svg` | SVG | Reversed white symbol for dark backgrounds & media overlays |
| `atlabx-symbol-small.svg` | SVG | Scale-optimized cut with widened negative-space channels for 16–32 px sizes |
| `atlabx-logo-horizontal.svg` | SVG | Primary horizontal lockup for light surfaces (websites, headers, invoices) |
| `atlabx-logo-horizontal-dark.svg` | SVG | Reversed horizontal lockup for dark surfaces and terminal interfaces |
| `atlabx-logo-stacked.svg` | SVG | Centered vertical lockup for badges, cards, square media, and signage |
| `atlabx-logo-stacked-dark.svg` | SVG | Centered vertical lockup for dark containers |
| `favicon.ico` | Multi-size ICO | 16 px, 32 px, 48 px legacy browser tab icon |
| `favicon.svg` | Modern SVG | Crisp vector favicon for modern browsers with automatic dark mode support |
| `apple-touch-icon.png` | 180×180 PNG | iOS home screen bookmark |
| `icon-192.png` & `icon-512.png` | PNG | Progressive Web App & Android launch icons |
| `site.webmanifest` | JSON | PWA manifest specifying icon paths and theme color |

---

## 3. Clear Space & Minimum Sizes

### Clear Space Rule
Maintain a clear margin around the symbol and lockups equal to **$X$** on all four sides, where **$X$** is the height of the central isometric diamond core. No text, graphic rules, or secondary logos may enter this perimeter.

```
       +-------------------------------+
       |             [ X ]             |
       |     +-------------------+     |
       | [X] |    ATLABX LOGO    | [X] |
       |     +-------------------+     |
       |             [ X ]             |
       +-------------------------------+
```

### Minimum Sizing
* **Horizontal Lockup:** Minimum width of **120 px** (digital) or **32 mm** (print).
* **Master Symbol:** Minimum size of **24 px × 24 px**.
* **Favicon / App Icon:** For sizes below 24 px (e.g. 16 px browser tabs), always use `atlabx-symbol-small.svg` or `favicon.ico` to prevent channel closure.

---

## 4. Official Color Palette

| Token | HEX | RGB | CMYK | Usage |
|---|---|---|---|---|
| **Deep Navy (Bedrock)** | `#0D1B3E` | `13, 27, 62` | `79, 56, 0, 76` | Primary brand ink, apex roof, central core |
| **Brand Navy (Rails)** | `#1F4285` | `31, 66, 133` | `77, 50, 0, 48` | Pylons, keystone, primary UI buttons & links |
| **Accent Light** | `#B0BCD6` | `176, 188, 214` | `18, 12, 0, 16` | Dark mode highlight, card borders, secondary text |
| **Surface Off-White** | `#F7F8FB` | `247, 248, 251` | `2, 1, 0, 2` | Web background, card surfaces |
| **Pure White** | `#FFFFFF` | `255, 255, 255` | `0, 0, 0, 0` | Reversed marks, high-contrast text |

### Approved Color Pairings
* **On White / Light Surface (`#FFFFFF`, `#F7F8FB`):** Use `atlabx-logo-horizontal.svg` or `atlabx-symbol.svg`.
* **On Deep Navy (`#0D1B3E`, `#152D5C`):** Use `atlabx-logo-horizontal-dark.svg` or `atlabx-symbol-white.svg`.
* **On Photography / Video:** Use the single-color white mark placed over low-noise, dark areas.

---

## 5. Typography Standards
* **Wordmark Construction:** Custom geometric sans letterforms drawn as vector paths with tight kerning (`letter-spacing: -0.03em`), matching `Inter` Bold / Extra Bold.
* **Interface Font:** `Inter` (system fallback: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`).
* **Code / Terminal:** `JetBrains Mono`, `Fira Code`, or `monospace`.

---

## 6. Prohibited Usages (Don'ts)
* **Do not stretch or distort** the mark disproportionately.
* **Do not recolor** the facets using unapproved gradients, neon shades, or arbitrary tints.
* **Do not rotate** the hexagon off its vertical 90° axis.
* **Do not add shadows, drop-glows, or bevels** to the vector files.
* **Do not retype** the wordmark in a standard system font and attempt to pair it with the symbol manually; always use the locked vector master.
