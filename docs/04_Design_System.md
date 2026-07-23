# Design System: Salguero Lab Website

This document defines the typography, color system, grid layout, custom CSS variables, and UI component standards to ensure a cohesive and modern user interface compatible with the University of Georgia (UGA) brand.

---

## 1. Color Palette (UGA Brand Compatible)
To fit in with the official UGA brand identity, the site uses a palette focused on Bulldog Red, Arch Black, and coordinating metallics/neutrals, alongside modern secondary accent hues for digital visual appeal.

### Primary Colors
- **UGA Red (Primary Accent):** `#CC0000` (High contrast, used for buttons, links, active states)
- **Arch Black (Primary Text / Headers):** `#000000` (Used for header texts, primary backgrounds in dark sections)
- **Classic White (Primary BG):** `#FFFFFF` (Main page backgrounds for readability)

### Secondary Colors
- **Chapel Bell Silver (Borders / Accents):** `#D3D3D3` or `#E0E0E0` (Used for borders, dividers, subtle backgrounds)
- **Herty Field Green (Secondary Accent):** `#006633` (Use for success indicators, grant updates, or secondary highlights)
- **Deep Steel Blue (Interactive Hover):** `#1E293B` (Used for secondary buttons and text highlights)

### Neutral Scale
- **Dark Neutral (Body Text):** `#222222` (High-contrast body copy)
- **Muted Gray (Subtitles / Metadata):** `#666666` (Used for secondary details like publication authors)
- **Off-White (Section Backgrounds):** `#F8F9FA` (Used to separate page sections)

---

## 2. Typography
Typography should be modern, clean, and highly readable.
- **Font Stack (Headings):** `'Outfit'`, `'Inter'`, system-ui, -apple-system, sans-serif.
- **Font Stack (Body Copy):** `'Inter'`, system-ui, -apple-system, sans-serif.

| Level | Size | Weight | Line Height | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **H1** | `2.5rem` / `40px` | `700` (Bold) | `1.2` | Main page titles (one per page) |
| **H2** | `1.75rem` / `28px` | `600` (Semi-Bold) | `1.3` | Section headings |
| **H3** | `1.25rem` / `20px` | `600` (Semi-Bold) | `1.4` | Card titles, subsection headings |
| **Body** | `1.0rem` / `16px` | `400` (Regular) | `1.6` | Paragraph body copy |
| **Caption**| `0.875rem` / `14px`| `400` (Regular) | `1.4` | Metadata, publication links, footnotes |

---

## 3. Grids & Layouts
- **Max Width:** Content should be constrained to a max-width of `1200px` with horizontal padding.
- **Grid Layout:** Standard 12-column responsive layout or flexible CSS Grid for dashboard-style items (e.g., student cards, research projects).
- **Spacing Scale:** Modular spacing based on factors of 8px (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`) for padding and margins.

---

## 4. UI Components Specifications
All interactive elements should support rich micro-animations (transitions of 0.2s ease-in-out).

### Buttons
- **Primary Button:** Solid background color (`UGA Red`), white text, border-radius `6px`. Hover state scale `1.02` with slight shadow change.
- **Secondary Button:** Outlined (`Chapel Bell Silver`), dark text. Hover state shifts background to very light gray.

### Cards
- **Project & Student Cards:** Border `1px solid #E0E0E0`, background white, border-radius `8px`, transition-duration `0.3s`. Hover state adds box-shadow and translates up `2px` for a modern 3D depth effect.

---

## 5. Responsive Design Breakpoints
- **Mobile (Vertical):** `< 480px` (Single column layouts, hamburger menu)
- **Tablet / Mobile (Horizontal):** `481px` to `768px` (2-column grids, compact margins)
- **Desktop:** `769px` to `1200px` (Multi-column grids, full navigation bar)
- **Large Screen:** `> 1201px` (Max container constraint)
