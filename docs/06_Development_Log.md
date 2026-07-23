# Development Log: Salguero Lab Website

This document registers chronological development updates, architecture decisions, bug fixes, and change logs.

---

## 1. Activity Log

| Date | Developer | Activity Type | Description |
| :--- | :--- | :--- | :--- |
| **2026-07-23** | Antigravity AI | Project Init | Created the directory structure, placeholders, and documentation scaffolding. |
| *Pending* | - | Design System | Populate design specifications (colors, typography assets). |
| *Pending* | - | Data Entry | Populate JSON databases with initial research group data. |
| *Pending* | - | Boilerplate Setup | Initialize HTML template, CSS styling variables, and JS utilities. |
| *Pending* | - | Responsive Build | Implement layouts for Home, Team, Projects, Publications, and Contact. |
| *Pending* | - | QA & Audit | Performance checking, accessibility (a11y) adjustments, and cross-browser styling fixes. |

---

## 2. Technical Decisions Log

### Decision 1: Client-Side JSON Data Architecture
- **Date:** 2026-07-23
- **Status:** Approved
- **Rationale:** Storing team roster, publications, and projects in structured JSON files in the `data/` directory allows for easy database updates without modifying HTML files directly. This decouples the structure from the content, allowing future transition to a CMS if needed, while remaining simple enough to be run locally or hosted statically (e.g., on UGA's hosting server).

### Decision 2: Vanilla CSS & HTML5 Stack
- **Date:** 2026-07-23
- **Status:** Approved
- **Rationale:** Avoids modern framework bloat (no React/Vue dependency unless explicitly required later). It keeps the loading speeds fast, ensures excellent search engine optimization (SEO), and provides robust performance under UGA's standard static web servers.
