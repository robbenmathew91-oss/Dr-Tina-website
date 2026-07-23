# Content Strategy: Salguero Lab Website

This document defines the rules and best practices for writing, updating, and optimizing content for the Salguero Lab Website.

---

## 1. Editorial Voice & Tone
To ensure the website represents the University of Georgia (UGA) and the research group professionally, all copy must follow these guidelines:
- **Tone:** Academic, professional, yet inviting and accessible to prospective students.
- **Voice:** Active and clear. Avoid overly dense jargon when describing high-level project goals (especially on the Home and Research landing pages).
- **Perspective:** Third-person ("The Salguero Research Group focuses on...") or professional first-person plural ("We synthesize...") where appropriate.

---

## 2. Content Update Schedule
Keeping the website fresh is key to recruiting and maintain academic relevance:

| Section | Update Frequency | Responsible Party | Description |
| :--- | :--- | :--- | :--- |
| **Team Roster** | Semi-annually (Start of Fall/Spring) | Lead Graduate Student / PI | Add incoming members, update degrees, archive alumni. |
| **Publications** | As published (Within 1 week of acceptance) | Primary Author / PI | Update `publications.json` with citations, DOI, and abstract. |
| **Research / Projects**| Annually or upon new grant award | PI / Project Leads | Update active statuses, add new project descriptions. |
| **News / Blog** | Monthly or bi-monthly | Rotating Lab Member | Showcase awards, graduations, conferences, and outreach. |
| **Gallery** | Quarterly | Social Coordinator / Members | Upload high-quality group/lab photos with captions. |

---

## 3. Media & Image Standards
To ensure fast load times and clean presentation:
- **Formats:** Use `WebP` or `AVIF` for photographs, and `SVG` for icons and structural graphics.
- **Sizing:**
  - *PI Headshot:* 400 x 400px (1:1 aspect ratio square).
  - *Student Headshots:* 300 x 300px (1:1 aspect ratio square).
  - *Project / News Images:* 800 x 500px (16:10 or 16:9 ratio).
- **Compression:** Compress all images using tools like TinyPNG or webp encoders before uploading to keep page load times under 2 seconds.

---

## 4. SEO & Accessibility (a11y) Rules
Ensure the site reaches academic colleagues and is fully inclusive:
- **Alt Text:** Every image tag `<img>` must contain a detailed `alt` attribute (e.g., `alt="Dr. Tina Salguero standing in the chemistry laboratory holding a sample vial"` instead of `alt="PI"`).
- **Semantic Structure:** Use heading elements (`<h1>` through `<h6>`) in sequential order. Do not skip heading levels for styling purposes.
- **Contrast:** Ensure all text passes WCAG 2.1 AA contrast requirements against background colors.
- **Metadata:** Each page must have unique `<title>` and `<meta name="description">` tags matching the page's core focus.
