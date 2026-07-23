# SEO Audit & Implementation Report

## Overview
This document details the production SEO optimization pass for the **Salguero Research Group** website at the University of Georgia.

---

## 1. Summary of Optimizations
All **10 pages** of the website have been enhanced with comprehensive, unique metadata:

- Unique, descriptive `<title>` tags following standard academic branding (`[Page Title] | Salguero Research Group`).
- Tailored `<meta name="description">` strings summarizing page-specific content.
- Canonical `<link rel="canonical">` links anchored to `https://robbenmathew91-oss.github.io/Dr-Tina-website/`.
- Full **OpenGraph** metadata (`og:title`, `og:description`, `og:url`, `og:type`, `og:image`).
- Full **Twitter Card** metadata (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`).
- JSON-LD **Structured Data** (`EducationalOrganization` & `ResearchGroup`) on the main landing page.

---

## 2. Page-by-Page Metadata Inventory

| Page | Title | Image Asset | Canonical URL |
| :--- | :--- | :--- | :--- |
| `index.html` | Salguero Research Group | Inorganic & Materials Chemistry \| UGA | `tina_salguero.jpg` | `https://robbenmathew91-oss.github.io/Dr-Tina-website/index.html` |
| `research.html` | Research Themes & Vision \| Salguero Research Group | `nsf_microscope_slide1.jpg` | `https://robbenmathew91-oss.github.io/Dr-Tina-website/research.html` |
| `publications.html` | Publications \| Salguero Research Group | `tina_salguero.jpg` | `https://robbenmathew91-oss.github.io/Dr-Tina-website/publications.html` |
| `projects.html` | Research Projects \| Salguero Research Group | `nsf_microscope_slide1.jpg` | `https://robbenmathew91-oss.github.io/Dr-Tina-website/projects.html` |
| `funding.html` | Research Funding & Grants \| Salguero Research Group | `tina_salguero.jpg` | `https://robbenmathew91-oss.github.io/Dr-Tina-website/funding.html` |
| `news.html` | News & Events \| Salguero Research Group | `tina_salguero.jpg` | `https://robbenmathew91-oss.github.io/Dr-Tina-website/news.html` |
| `gallery.html` | Lab Gallery \| Salguero Research Group | `nsf_microscope_slide1.jpg` | `https://robbenmathew91-oss.github.io/Dr-Tina-website/gallery.html` |
| `people.html` | Group Members \| Salguero Research Group | `tina_salguero.jpg` | `https://robbenmathew91-oss.github.io/Dr-Tina-website/people.html` |
| `join.html` | Join the Group \| Salguero Research Group | `tina_salguero.jpg` | `https://robbenmathew91-oss.github.io/Dr-Tina-website/join.html` |
| `contact.html` | Contact & Map \| Salguero Research Group | `tina_salguero.jpg` | `https://robbenmathew91-oss.github.io/Dr-Tina-website/contact.html` |

---

## 3. Webmaster & Indexing Files
- **`robots.txt`**: Configured to allow all user-agents to crawl public pages and explicitly references `sitemap.xml`.
- **`sitemap.xml`**: Valid XML indexing all 10 site routes with appropriate `<changefreq>` and priority values.

---

## 4. Recommendations for Future Maintenance
1. **Domain Migration**: If custom domain mapping is performed (e.g. `salguerogroup.chem.uga.edu`), update base canonical URLs across all pages and inside `sitemap.xml`.
2. **Dynamic Social Cards**: For featured news items or high-impact publications, generate dynamic social card previews.
