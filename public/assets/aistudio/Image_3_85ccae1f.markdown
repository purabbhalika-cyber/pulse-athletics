---
name: Pulse Athletics
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1b1b1d'
  surface-container: '#201f21'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#c5c9ac'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#303032'
  outline: '#8f9378'
  outline-variant: '#444932'
  surface-tint: '#b0d500'
  primary: '#ffffff'
  on-primary: '#2a3400'
  primary-container: '#caf300'
  on-primary-container: '#596c00'
  inverse-primary: '#536600'
  secondary: '#c8c5cc'
  on-secondary: '#303035'
  secondary-container: '#47464c'
  on-secondary-container: '#b6b4bb'
  tertiary: '#ffffff'
  on-tertiary: '#2f3034'
  tertiary-container: '#e3e2e7'
  on-tertiary-container: '#636469'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#caf300'
  primary-fixed-dim: '#b0d500'
  on-primary-fixed: '#171e00'
  on-primary-fixed-variant: '#3e4c00'
  secondary-fixed: '#e4e1e8'
  secondary-fixed-dim: '#c8c5cc'
  on-secondary-fixed: '#1b1b20'
  on-secondary-fixed-variant: '#47464c'
  tertiary-fixed: '#e3e2e7'
  tertiary-fixed-dim: '#c6c6cb'
  on-tertiary-fixed: '#1a1b1f'
  on-tertiary-fixed-variant: '#46464b'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
typography:
  display-xl:
    fontFamily: Barlow Condensed
    fontSize: 96px
    fontWeight: '800'
    lineHeight: 96px
    letterSpacing: -0.02em
  display-xl-mobile:
    fontFamily: Barlow Condensed
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.01em
  display-lg:
    fontFamily: Barlow Condensed
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.01em
  display-lg-mobile:
    fontFamily: Barlow Condensed
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: 0em
  headline-lg:
    fontFamily: Barlow Condensed
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: 0.01em
  headline-md:
    fontFamily: Barlow Condensed
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0.02em
  title-lg:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  label-md:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
  stat-mono:
    fontFamily: Barlow Condensed
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.01em
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system delivers an elite, adrenaline-charged atmosphere rooted in urban training, precision performance, and late-night strength conditioning. The visual language blends High-Contrast Bold minimalism with brutalist technical utility: high-voltage energy without visual clutter.

### Audience & Mood
Targeted at dedicated urban athletes, boutique fitness enthusiasts, and high-performers. The interface evokes discipline, kinetic energy, exclusivity, and raw mechanical precision. 

### Visual Tenets
- **Precision Darkness:** Deep, layered near-black canvases eliminate glare and direct focus strictly to performance metrics and kinetic actions.
- **Electric Tension:** Electric lime is deployed sparingly but aggressively as an intentional trigger for primary actions, records, and active state indicators.
- **Structural Tension:** Monolithic display scales, dense layout divisions, and hairline container grids deliver an editorial, architectural presence.

## Colors

The palette operates in strict dark mode, anchored by deep charcoal foundations punctuated by pure electric lime.

### Palette Architecture
- **Primary (`#D4FF00`):** Electric Lime. Reserved for dominant CTAs, key training metrics, live class status, and active states. Never used for large surface backgrounds or passive iconography.
- **Secondary (`#242429`):** Elevated charcoal slate. Used for hover states, active segment backgrounds, and card elevations.
- **Tertiary (`#8E8E93`):** Technical muted gray. Used for metadata, column headers, disabled states, and secondary labels.
- **Neutral Canvas (`#121214` & `#0B0B0C`):** Base layer surfaces. `#0B0B0C` anchors root backgrounds, while `#121214` shapes primary containers and structural modules.
- **Foreground / Text (`#F4F4F5`):** Off-white base text, calibrated for high-contrast legibility against deep dark substrates without optical vibration.

### Border Rules
Structural separation relies on hairline borders using `rgba(255, 255, 255, 0.08)`. Never use solid opaque light grays for dividers or framing.

## Typography

The typographic hierarchy pairs the aggressive, condensed sports-performance energy of **Barlow Condensed** for commanding displays and stats with the clean, engineered precision of **Geist** for body copy and navigational metadata.

### Hierarchy & Treatment
- **Display & Headlines:** Set in Barlow Condensed. Utilize uppercase transformations on `display-xl`, `display-lg`, and `headline-lg` to reinforce athletic impact and structural authority.
- **Body:** Geist set at 400 weight delivers maximum optical clarity across dark backgrounds. Keep paragraph widths strictly controlled (under 65 characters) to preserve rapid readability.
- **Labels & Overlines:** Set in Geist uppercase with extended tracking (`0.04em` to `0.08em`) for telemetry data, workout tags, duration counters, and studio zones.

## Layout & Spacing

The layout model is driven by a rigid 12-column fluid grid system engineered for precision data density and full-bleed visual framing.

### Breakpoints & Adaptability
- **Desktop (1280px+):** 12 columns, 1.5rem gutters, 3rem margins, max content constraint of 1440px. High-density data dashboards, schedule timelines, and coach directories align precisely across 3-, 4-, or 6-column spans.
- **Tablet (768px - 1279px):** 8 columns, 1.25rem gutters, 2rem margins. Multi-column cards collapse to alternating 2-up modules.
- **Mobile (< 768px):** 4 columns, 1rem gutters, 1.25rem margins. Stack all structural blocks into vertical single-column lanes. Schedule calendars convert into horizontal snap-scrolling rail segments.

### Spacing Dynamics
Maintain a rhythmic cadence using the `space-*` scale. Component padding relies on compact vertical gaps coupled with expansive horizontal margins to evoke architectural stability.

## Elevation & Depth

This design system rejects heavy, diffused blur shadows in favor of a flat, architectural layering system driven by tonal shifts, fine-gauge borders, and localized electric glow.

### Depth Stratification
1. **Base Layer (`#0B0B0C`):** The default canvas floor.
2. **Surface Layer (`#121214`):** Cards, scheduling blocks, media wrappers, and drawers. Framed with `1px solid rgba(255, 255, 255, 0.08)`.
3. **Elevated Surface (`#1A1A1E`):** Hover states, popovers, pinned tooltips, and modal trays. Outlined with `1px solid rgba(255, 255, 255, 0.12)`.

### High-Voltage Accents & Glow
Elevations tied to the primary electric lime accent utilize sharp optical focus:
- Active state focus rings: `0 0 0 1px #D4FF00`.
- Live or active class nodes: A tight, controlled radial glow using `box-shadow: 0 0 20px rgba(212, 255, 0, 0.15)`. Avoid diffuse or soft light scattering.

## Shapes

The design system employs a strictly sharp, angular shape language (`roundedness: 0`). 

### Edge Rules
- **0px Radius:** Buttons, inputs, modal containers, badges, and image framing retain razor-sharp corners (0px border-radius). This enforces an uncompromising, mechanical, brutalist-athletic attitude.
- **Precision Miters:** When badges or cards feature cutaways, use precise 45-degree chamfered clips (`clip-path: polygon(...)`) rather than rounded radii.
- **Dividers:** Clean, razor-sharp 1px horizontal and vertical rules run uninterrupted across the grid.

## Components

### Buttons
- **Primary:** Background `#D4FF00`, text `#0B0B0C`, uppercase `label-md`, font weight 600, sharp 0px corners, horizontal padding `1.75rem`, vertical padding `0.875rem`. Hover shifts background to `#F4F4F5` with instantaneous transition (150ms ease).
- **Secondary / Outline:** Background transparent, border `1px solid rgba(255, 255, 255, 0.2)`, text `#F4F4F5`. Hover shifts border to `#D4FF00` and text to `#D4FF00`.
- **Ghost:** Text `#F4F4F5`, transparent fill, no border. Hover sets text to `#D4FF00` with an animated 1px underline.

### Cards
- Built on `#121214` surface background with `1px solid rgba(255, 255, 255, 0.08)`.
- Sharp corners, padding `space-lg`.
- Hover triggers border shift to `rgba(255, 255, 255, 0.25)` or an optional top edge highlight of `2px solid #D4FF00`.

### Form Inputs & Text Fields
- Background `#0B0B0C`, border `1px solid rgba(255, 255, 255, 0.12)`, text `#F4F4F5`, placeholder `#8E8E93`.
- Active focus state: border immediately changes to `1px solid #D4FF00` with zero outline offset.
- Labels sit above input in `label-sm` uppercase, color `#8E8E93`.

### Chips & Badges
- **Status Chips:** Sharp rectangles, height 24px, padding 0 8px, background `#1A1A1E`, border `1px solid rgba(255, 255, 255, 0.08)`, typography `label-sm` uppercase.
- **Active / Alert Chips:** Background `rgba(212, 255, 0, 0.1)`, text `#D4FF00`, border `1px solid #D4FF00`.

### Checkboxes & Radios
- Sharp 18x18px square containers with `1px solid rgba(255, 255, 255, 0.2)`. 
- Checked state fills with `#D4FF00`, icon/dot renders in `#0B0B0C`.

### Studio-Specific Components
- **Class Schedule Slot:** Split-cell layout with sharp borders. Left quadrant features large `headline-md` time, center features class title and trainer name, right quadrant hosts spot availability and a compact secondary CTA.
- **Heart Rate / Effort Meter:** Hairline segment bar graphs with active fill utilizing solid `#D4FF00`.
- **Roster / Trainer Bio Strip:** High-contrast desaturated imagery that shifts to full contrast color on card hover, paired with an electric lime hover indicator.