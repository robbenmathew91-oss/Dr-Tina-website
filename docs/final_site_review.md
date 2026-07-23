# Comprehensive Design and UX Review Report

This report presents a thorough UX, accessibility, and content audit of the Salguero Research Group website. The site has been evaluated against leading university research group sites (MIT, Stanford, Berkeley, Georgia Tech) from the perspective of five core user personas.

---

## 1. Persona-Based UX Evaluation

### Persona 1: Prospective Ph.D. Student
- **User Goal:** Understand the group's research scope, active student culture, post-graduation student outcomes (alumni placement), and clear instructions on how to apply.
- **Audited Performance:** 
  - *Strengths:* The redesigned `research.html` and `people.html` pages provide clear pictures of active research thrusts and student rosters. The `join.html` page explicitly lists qualifications.
  - *Gaps:* Lacks "Day in the Life" descriptions, visual highlights of actual lab workspaces in the gallery (mostly placeholders), and student publications are not explicitly highlighted in their profiles.

### Persona 2: Research Collaborator
- **User Goal:** Fast lookups of specific techniques, experimental apparatus specs, synthesis strengths, and active scientific partnerships.
- **Audited Performance:**
  - *Strengths:* The interactive tabs on `research.html` show explicit techniques (e.g. Aberration-Corrected STEM) and link to Oak Ridge or Georgia Tech collaborators.
  - *Gaps:* Collaborator directories are static. There are no guidelines or forms for external researchers requesting chemical materials or scheduling shared instrument runs.

### Persona 3: Academic Faculty Member
- **User Goal:** Review peer publications, check academic standing (citation counts, research scope), and identify overlapping research interests.
- **Audited Performance:**
  - *Strengths:* The redesigned `publications.html` page is exemplary, allowing fast search, sorting, and multi-faceted filtering.
  - *Gaps:* Stubs for Altmetrics, citation counts, and BibTeX citation export are not yet functional.

### Persona 4: Funding Agency Reviewer
- **User Goal:** Assess current grant utilization, track publication outputs linked to specific awards, and verify the PI's leadership in the field.
- **Audited Performance:**
  - *Strengths:* The relational links in the research cards show exactly which publications and projects were funded by which awards.
  - *Gaps:* The `funding.html` page is a simple table without background descriptions, links to official grant abstract pages, or highlight stories showing the milestones achieved per grant.

### Persona 5: General Visitor
- **User Goal:** Understand what the lab does at a high, non-technical level.
- **Audited Performance:**
  - *Strengths:* Clean, readable typography and modern layouts.
  - *Gaps:* The homepage lacks a visual high-level summary or infographic translating materials science terms (e.g. "Weyl semimetals") into general concepts.

---

## 2. Competitive Analysis vs. Leading University Sites

| Criteria | Leading Labs (MIT, Stanford, Berkeley) | Salguero Lab Website | Gap Analysis |
| :--- | :--- | :--- | :--- |
| **Aesthetics** | Curated dark modes, glassmorphism, responsive masonry grids, high-res group photos. | Professional crimson-red UGA theme, clean grids, layout consistency. | Looks clean, but can be improved with real high-resolution images of synthesis setups instead of basic svg placeholders. |
| **Relational Data** | Advanced cross-linking between papers, instruments, members, and grants. | Redesigned Publications & Research pages have active relational mappings. | The projects page (`projects.html`) and funding page (`funding.html`) are currently under-linked. |
| **Future Ready** | Direct PDF previews, auto-citation copy, ORCID stream ingestion. | Layout stubs are designed and structured in HTML/CSS. | Stubs must be programmatically backed by REST APIs. |

---

## 3. Individual Page Audits and Scoring (1–10)

### 1. Home Page (`index.html`) — **Score: 7/10**
- *Review:* Clean landing grid, but lacks visual excitement. The hero section is static text.
- *Recommendations:* Add a background gradient or micro-animation of nanosheet assembly. Replace the welcome text with a compelling, visual lab overview.

### 2. Research Overview (`research.html`) — **Score: 9.5/10**
- *Review:* Flagship page. Highly relational, visually distinct cards, detailed accordion sections, and a clean milestones timeline.
- *Recommendations:* Add real images of synthesized crystals instead of `placeholder.svg`.

### 3. Technical Projects (`projects.html`) — **Score: 6.5/10**
- *Review:* The layout uses simple cards that display summaries. It lacks the relational mapping that the Research page has.
- *Recommendations:* Redesign this page to dynamically pull and display related publications and funding from the database.

### 4. People & Alumni Roster (`people.html`) — **Score: 8/10**
- *Review:* Clear separation of active researchers and alumni. Profile cards list join years and student degrees.
- *Recommendations:* Add links to ORCID profiles or thesis PDF links for graduated alumni.

### 5. Publications Bibliography (`publications.html`) — **Score: 9.8/10**
- *Review:* Exceptional. Features instant multi-faceted search, year/category/type filters, page navigation, and bolded investigator names.
- *Recommendations:* None. Ready to be populated with the remaining 72 bibliography entries.

### 6. Grants & Funding (`funding.html`) — **Score: 5/10**
- *Review:* A basic grid table listing active awards. This is the weakest page in terms of storytelling.
- *Recommendations:* Redesign to show active projects linked to each grant, visual summaries of funded outcomes, and links to official agency award pages.

### 7. Lab Gallery (`gallery.html`) — **Score: 6/10**
- *Review:* Visual grids are responsive, but they contain mostly placeholders.
- *Recommendations:* Implement a filter by category (e.g. "Equipment", "Outreach", "Group Photos") and add actual photo files.

### 8. News & Events (`news.html`) — **Score: 7.5/10**
- *Review:* Clean chronological listing of group events.
- *Recommendations:* Add small thumbnail images for major news milestones to make the cards more engaging.

### 9. Join the Lab (`join.html`) — **Score: 8/10**
- *Review:* Comprehensive instructions for prospective undergraduates, graduates, and postdocs.
- *Recommendations:* Add a dynamic FAQ accordion answering common questions about visas, funding, and rotative projects.

### 10. Contact & Location (`contact.html`) — **Score: 8.5/10**
- *Review:* Clean contact list, directions, and an interactive embedded Google Map.
- *Recommendations:* Add a visual photo of the Chemistry building entrance to guide visitors physically.

---

## 4. Prioritized Recommendations

### Critical (Must Fix Before Deployment)
1. **Broken Placeholders:** Replace the generic `placeholder.svg` in `research.html` and `projects.html` with real micrographs or lab photos to preserve scientific credibility.
2. **Publications Database Population:** Import the remaining 72 verified papers into `data/publications.json` now that the pagination and filter engine is tested.

### Important (Next Development Phase)
1. **Grants Page Redesign:** Restructure `funding.html` to match the relational card layout used in `research.html`, highlighting the exact scientific output of each award.
2. **Technical Projects Linkage:** Dynamically link publications and funding on the `projects.html` detail cards, avoiding raw text statements.

### Optional (Future Enhancements)
1. **Ingest Active API Feeds:** Connect the Altmetric and Scopus citation stubs on publication cards to real REST endpoints for real-time impact numbers.
2. **BibTeX Generator:** Implement a client-side BibTeX text generator so visitors can copy citation blocks with a single click.
