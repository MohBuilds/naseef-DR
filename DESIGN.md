---
name: Naseef Abdulquadri
description: A documentary portfolio of medical education and community experience
colors:
  light-bg: "#f9fafb"
  light-surface: "#f0f2f5"
  light-ink: "#20262f"
  light-muted: "#626b78"
  light-line: "#d9dee5"
  light-accent: "#315acd"
  light-accent-soft: "#e7edff"
  light-button-ink: "#fff"
  dark-bg: "#15181d"
  dark-surface: "#1d2229"
  dark-ink: "#edf0f4"
  dark-muted: "#abb3c1"
  dark-line: "#353d49"
  dark-accent: "#9bb7ff"
  dark-accent-soft: "#263655"
  dark-button-ink: "#15181d"
typography:
  display:
    fontFamily: '"Hanken Grotesk", sans-serif'
    fontSize: "clamp(4.1rem, 7.5vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: '"Hanken Grotesk", sans-serif'
    fontSize: "clamp(2.2rem, 4.1vw, 3.65rem)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.035em"
  title:
    fontSize: "1.65rem"
    fontWeight: 500
    lineHeight: 1.22
    letterSpacing: "-0.025em"
  body:
    fontFamily: '"Hanken Grotesk", sans-serif'
    fontSize: "1rem"
    lineHeight: 1.65
  label:
    fontSize: "0.8125rem"
rounded:
  dialog: "8px"
  toast: "6px"
  appearance: "30px"
  circular: "50%"
spacing:
  inline: "15px"
  column: "30px"
  section: "112px"
  section-mobile: "72px"
components:
  inline-link:
    textColor: "{colors.light-accent}"
    typography: "0.875rem"
    height: "44px"
    padding: "0"
  appearance-choice:
    width: "33px"
    height: "33px"
    rounded: "{rounded.circular}"
  appearance-choice-selected:
    backgroundColor: "{colors.light-ink}"
    textColor: "{colors.light-bg}"
  gallery:
    backgroundColor: "{colors.light-bg}"
    textColor: "{colors.light-ink}"
    rounded: "{rounded.dialog}"
    padding: "22px 28px 20px"
    width: "min(1000px, 94vw)"
---

# Design System: Naseef Abdulquadri

## Overview

**Creative North Star: "The Documentary Contact Sheet"**

A quiet, contemporary portfolio gives real community photographs and clear professional context room to speak. Oversized, close-set typography establishes the person; rectangular photographic sequences and thin rules organize the evidence. White and charcoal appearances share the same hierarchy and geometry.

The visual voice is mature, direct, and community-minded. Preserve the accurate medical-student identity and supplied photographic material when extending the system.

**Key Characteristics:**
- One self-hosted variable sans-serif family.
- Cool blue emphasis against restrained neutral grounds.
- Flat, rule-separated sections and rectangular photographs.
- Persistent light, dark, and device appearance choices.

## Colors

Cool neutrals carry the page, with blue reserved for emphasis and interaction. Frontmatter records the theme pairs; CSS custom properties are the runtime source of truth.

### Primary

Blue emphasis (`light-accent` / `dark-accent`) marks the name punctuation, links, active navigation underline, selection, and focus. The two accent-soft tokens are declared in CSS but currently have no visible consumer; retain them as existing implementation tokens rather than inventing a component role.

### Neutral

Page ground (`bg`), inset ground (`surface`), main text (`ink`), secondary text (`muted`), and separator (`line`) each have light and dark variants. `button-ink` provides selection foreground. Dark photographic overlays and the dialog backdrop retain fixed charcoal transparency independently of the theme.

**The Paired Appearance Rule.** Extend semantic theme variables together so the same component geometry and hierarchy survive both appearances.

## Typography

**Display Font:** Hanken Grotesk, sans-serif fallback.
**Body Font:** Hanken Grotesk, sans-serif fallback.

The local Latin WOFF2 supports normal weights (100–900), uses swap display, and is preloaded. Close tracking gives large names and headings a compact editorial character; ordinary prose remains open and readable.

### Hierarchy

- **Display:** frontmatter default for the name; tablet uses `clamp(4rem, 8vw, 5.8rem)` and mobile `clamp(3.5rem, 12.5vw, 5.8rem)`.
- **Headline:** frontmatter default for section headings; contact headings use a larger contextual clamp.
- **Title:** frontmatter default for tertiary headings; experience headings enlarge to (2.35rem), then (2rem) at tablet/mobile sizes.
- **Body:** inherited base line height; long body columns use (1.85), experience and interest paragraphs (1.8). Lead text uses (1.65rem / 1.4), falling to (1.4rem) on mobile.
- **Label:** secondary metadata commonly uses the frontmatter label size; mobile metadata can use (0.75rem). Labels retain ordinary sentence case.

## Layout

The desktop container is `min(1240px, calc(100% - 112px))`. Section rhythm uses the frontmatter spacing values, with asymmetric text/image grids and full-width separating rules. The sticky header is (86px) high. The opening photographic sequence uses (1.65fr 1fr .85fr), a (9px) gap, and (300px) height.

At **1500px and above**, the opening sequence grows to (360px), with increased hero top spacing. At **1100px and below**, container gutters become (36px) per side, grid gaps tighten, and education entries stack internally. At **760px and below**, gutters become (20px), section spacing becomes mobile scale, the header becomes two rows (102px), major grids stack, and the sequence shows two images at (255px) height. The third photograph remains in the full gallery. At **360px and below**, the introductory action stacks and the sequence becomes (225px) high.

## Elevation & Depth

There are no box shadows. Tonal surfaces, one-pixel rules, imagery, and the modal backdrop establish separation. The sticky header remains opaque; the native dialog overlays the document with a fixed translucent charcoal backdrop (`#05080de8`).

**The Flat Surface Rule.** Use tonal contrast and rules for section structure rather than adding decorative elevation.

## Shapes

Photographs and content sections have square corners. Rounded geometry belongs to the compact appearance group, circular icon controls, the subtly rounded viewer, and the status toast. Preserve this distinction rather than applying a shared card radius to documentary images.

## Components

### Text actions

Inline links use blue, semibold text, a small inline SVG, and a (44px) minimum height. Hover underlines apply to inline anchors; the copy action changes text tone. There is no filled primary call-to-action button or input field in the current build.

### Appearance control

A thin pill outline contains three circular icon buttons: light, dark, and device. The selected choice reverses page ink and ground and exposes `aria-pressed`. The default is device; validated choices persist under `naseef-appearance` in local storage. Device mode tracks operating-system changes, and storage events synchronize tabs. Storage failures leave session controls usable. The head script applies the theme before the stylesheet loads.

### Navigation

Visible anchor navigation stays available on mobile in the second header row. Active section state uses `aria-current="location"`, ink text, and a blue underline, updated through IntersectionObserver when available.

### Photographic sequence and viewer

Photo buttons crop with `object-fit: cover`; presentation filters reduce saturation, with a further brightness reduction in dark mode. Hover restores saturation and scales to (1.025). The viewer displays five supplied photographs with `object-fit: contain` and no photographic filter, preserving the complete image. Native dialog modality, labelled controls, left/right arrow browsing, Escape close, outside click close, and opener focus restoration support exploration. Its image area is (62dvh), reduced to (52dvh) on mobile.

### Disclosure and feedback

The personal video sits inside native details/summary, loads no video before interaction, and pauses when collapsed. Clipboard feedback uses a polite live status toast for (3500ms), including an email-link fallback message if copying fails.

### Focus and motion

Anchors, buttons, summary, and video receive a (2px) accent focus outline offset by (5px); photographic buttons use a (3px) offset. The page includes a focus-revealed skip link. The sequence reveals once over (1s) using `cubic-bezier(.16,1,.3,1)`. Photo filter/scale transitions use (.6s / .9s); appearance state transitions use (.2s). Reduced-motion preference disables all animations and transitions and switches smooth scrolling to automatic. Print styles use a light, simplified text-first layout.

## Do's and Don'ts

### Do:
- **Do** use the semantic light/dark pairs for new surfaces.
- **Do** keep photographs rectangular and offer the complete image in the viewer.
- **Do** preserve visible keyboard focus and reduced-motion behavior.
- **Do** use real supplied material and accurate student status.

### Don't:
- **Don't** introduce decorative shadows into the flat section hierarchy.
- **Don't** convert photographic sequences into rounded generic cards.
- **Don't** infer clinical qualifications, impact counts, or testimonials from visual presentation.

Not canonized: the supplied video has no transcript; that content limitation is disclosed in the page and is not a reusable accessibility rule. This document records source behavior, not a claim of exhaustive runtime or accessibility verification.
