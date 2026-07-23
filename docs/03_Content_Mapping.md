# Content Mapping & Integration Guide

This document defines how the content within `Salguero_Research_Dossier.md` maps directly to the JSON databases (`data/`) and visual pages in the website. It outlines the specific data source sections, what should be displayed, what should be omitted for layout clarity, and prioritized deliverables.

---

## 1. Content Mapping Directory

The following table maps each page of the Salguero Lab Website to its respective database, dossier sections, rendering components, and priority:

| Page | JSON Files | Claude Dossier Sections | Displayed Components | Priority |
| :--- | :--- | :--- | :--- | :--- |
| **Home** | `faculty.json`<br>`news.json` | **Section 1:** Faculty Profile<br>**Section 2:** Research Themes<br>**Section 8:** News | PI biography excerpt, core research thrusts overview, affiliations list, and the 2 most recent news card cards. | **High** |
| **Research** | `projects.json`<br>`grants.json` | **Section 2:** Themes, Questions, Materials, and Techniques | Narrative of three main scientific areas (synthesis, exfoliation, superlattices), active project grid, and sponsor lists. | **High** |
| **People** | `faculty.json`<br>`students.json`<br>`alumni.json` | **Section 1:** Biography / Education<br>**Section 6:** Roster<br>**Section 7:** Alumni | PI biography, graduate student grid, undergraduate assistant grid, and alumni outcomes table. | **High** |
| **Projects** | `projects.json` | **Section 3:** Research Projects (1–9) | Detailed technical project cards, status badges, funding sponsor notes, and expandable description details. | **Medium** |
| **Publications** | `publications.json` | **Section 5:** Landmark, Review, and Chronological Papers | Search bar, topic tags, sorting dropdown, list of publications, DOI links, and abstract expander accordions. | **High** |
| **Funding** | `grants.json` | **Section 4:** Research Funding | Active/completed grant cards, award numbers, funding agency details, dates, and amounts. | **Medium** |
| **News** | `news.json` | **Section 8:** News | Chronological news feed cards, publishing dates, summaries, and expander toggles for full text. | **Medium** |
| **Gallery** | `gallery.json` | **Section 13:** Images | Photo gallery cards with category selector filters (Group, Research, Lab Life) and hover caption overlays. | **Medium** |
| **Join** | `events.json` | **Section 15:** Recommendations<br>**Section 9:** Presentations | Recruitment instructions per candidate level (Grad, Undergrad, Postdoc), application criteria, and lab event timeline. | **High** |
| **Contact** | `faculty.json`<br>`collaborators.json` | **Section 1:** Contact Table<br>**Section 2:** Collaborators | Contact address, PI phone & email, south campus Google Map, inquiry form, and collaborator profile cards. | **High** |

---

## 2. Page-by-Page Integration Specifications

### Home Page
- **JSON Data Sources:** `faculty.json`, `news.json`
- **Dossier Source:** Section 1 (Biography excerpt), Section 2 (General research interests), Section 8 (News items).
- **Content to Include:** High-level welcome paragraph introducing materials chemistry, research interests badges, academic affiliations (Chemistry department, GEM, CAIS), and a quick preview of the latest news.
- **Content to Omit:** Full educational timeline, granular lists of materials studied, complete lists of publications, and financial grant values.

### Research Page
- **JSON Data Sources:** `projects.json` (summarized), `grants.json` (sponsors)
- **Dossier Source:** Section 2 (Themes, Scientific Questions, Materials studied, Techniques), Section 3 (Projects overview).
- **Content to Include:** Scientific summaries of synthesis, exfoliation, and superlattice assemblies, a list of materials studied, and overview cards for active research projects.
- **Content to Omit:** Personal bio details, alumni list, contact email form, and full publications list.

### People Page
- **JSON Data Sources:** `faculty.json`, `students.json`, `alumni.json`
- **Dossier Source:** Section 1 (Biography & Education), Section 6 (Current Students), Section 7 (Alumni).
- **Content to Include:** Dr. Salguero's headshot, biography, and academic history; separate grids for graduate researchers and undergraduate assistants; table of alumni listing degree and current positions.
- **Content to Omit:** Project descriptions, publications bibliography, news feed, and map elements.

### Projects Page
- **JSON Data Sources:** `projects.json`
- **Dossier Source:** Section 3 (Projects list 1–9, including completed/past work).
- **Content to Include:** Detailed project cards showing technical description, status (Active/Completed), funding sources, and scientific tags.
- **Content to Omit:** General lab news, student bios, publications database.

### Publications Page
- **JSON Data Sources:** `publications.json`
- **Dossier Source:** Section 5 (All indexed papers and reviews).
- **Content to Include:** Fully searchable chronological publications list, scientific tags (e.g. *Nanosheets*, *Synthesis*), direct DOI links, and abstract drawer accordions.
- **Content to Omit:** PI biography, grant award amounts, student roster, maps.

### Funding Page
- **JSON Data Sources:** `grants.json`
- **Dossier Source:** Section 4 (Research Funding table).
- **Content to Include:** Cards detailing active/completed federal grants (NSF, DOE, NRT), award amounts, award codes, and project summaries.
- **Content to Omit:** Lab photo gallery, student descriptions, publication search form.

### News Page
- **JSON Data Sources:** `news.json`
- **Dossier Source:** Section 8 (News database).
- **Content to Include:** Feed of all news posts (awards, accepted publications, graduation) sorted latest first, with date headings and expander drawers for detailed text.
- **Content to Omit:** Detailed contact forms, PI education timeline, active grant numbers.

### Gallery Page
- **JSON Data Sources:** `gallery.json`
- **Dossier Source:** Section 13 (UGA and GEM image sources).
- **Content to Include:** Photo grid filterable by Category (Group, Research, Lab Life), showing captions and photography years on hover overlays.
- **Content to Omit:** Heavy text descriptions, publication lists, contact details.

### Join Page
- **JSON Data Sources:** `events.json`
- **Dossier Source:** Section 15 (Recruitment details), Section 12 (Advising/Teaching), Section 9 (Timeline milestones).
- **Content to Include:** Actionable guides for graduate, undergraduate, and postdoc applicants; specific dossier requirements for email inquiries; and an active timeline showing upcoming group meetings, dissertation defenses, and seminars.
- **Content to Omit:** Detailed project descriptions, full publications list, partner institution logos.

### Contact Page
- **JSON Data Sources:** `faculty.json`, `collaborators.json`
- **Dossier Source:** Section 1 (Contact info), Section 2 (Key Collaborators list).
- **Content to Include:** Office and lab room numbers, email, phone, embedded Google Map of the Chemistry building, inquiry email form, and collaborator cards.
- **Content to Omit:** PI biography, active grant funding, news feed.

---

## 3. Missing Data for Future Collection

The following content is absent from the public dossier and **must be requested directly from Dr. Salguero or lab members** in future development phases:

1. **Current Team Profiles:**
   - Exact years when current graduate students (Jose Garcia, Clayton Mantz, Athar Yeganeh Neysiani, Ali Ahmed, April Rains) joined the group.
   - Specific thesis research summaries and LinkedIn/ORCID profiles for all current students.
   - Headshots for Ali Ahmed and April Rains.
2. **Alumni Placements:**
   - Degrees earned, graduation years, and current positions/employers for Timothy Pope, Gregory Neher, Casey Rowe, and Darrah Johnson-McDaniel.
3. **Media & Imagery:**
   - High-quality landscape group photo of the current research team.
   - Interior photos of the new wet-chemistry laboratory spaces in iSTEM-2.
   - High-quality, copyright-cleared scanning electron microscope (SEM) or atomic force microscope (AFM) images of materials synthesized in the lab for the Gallery page.
4. **Partner Collaborator Assets:**
   - Permission to use logos for Oak Ridge National Laboratory, UC Riverside, and Georgia Tech on the Contact page.
5. **Historical Details:**
   - Specific start and end dates for Dr. Salguero's tenure-track milestones.
   - Complete lists of undergraduate researchers who have passed through the lab.
