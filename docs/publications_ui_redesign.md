# Publications UI Redesign & Architecture Specification

This document details the design system, data model expansions, performance engineering, and future integration points implemented for the redesigned Publications Portal on the Salguero Lab Website.

---

## 1. Design Decisions & Visual Layout

The redesigned Publications page implements a modern, premium academic aesthetics tailored to leading research groups (MIT, Stanford, Georgia Tech):
- **Visual Hierarchy:** Featured publications are pinned to a dedicated highlighted section at the top of the page. They are styled with a warm gold/yellow offset background (`#FFFDF0`) and a subtle golden left border (`#D4AF37`) to indicate their landmark status.
- **Card Metadata Badges:** Each card displays color-coded badges for its Category (e.g., `2D Materials`, `Catalysis` in light UGA red) and type (e.g., `Journal Article`, `Review` in grey), alongside a dark-grey badge showing the publishing year.
- **Author Highlighting:** Tina Salguero's name is dynamically parsed and bolded across all variations (`Tina T. Salguero`, `Tina Salguero`, `T. T. Salguero`, `T. Salguero`, `Salguero, T. T.`, `Salguero, T.`, `Trnka, T. M.`, `T. M. Trnka`, `Trnka, T.`) to allow readers to immediately spot group leadership.
- **Interactive Accordions:** Detailed abstracts and keyword arrays are tucked into tidy, expandable panels (`toggleDetails`) that keep the listing compact and clean.

---

## 2. Multi-Faceted Filter & Search Engine

To support scaling up to 100+ publications without page lag, we engineered a custom client-side filter engine:
- **Instant Search:** Evaluates the search string against Title, Authors, Journal, DOI, and individual Keywords.
- **Combined Filtering:** The search bar works together with four dropdown selectors (Year, Research Category, Publication Type, Journal). Dropping down any filter updates the matching list instantly.
- **Active Pills:** Every active filter generates a pill indicator (e.g. `Year: 2024`). Users can click the "×" on any pill to clear that filter, or click "Clear All" to reset the entire search state.
- **Sort Ordering:** Sorts matching results by:
  - Newest First (default, year descending)
  - Oldest First (year ascending)
  - Journal Name (alphabetical by journal, then year descending)
  - Title (alphabetical A-Z)

---

## 3. Scalability & Performance

- **Pagination Engine:** Rather than rendering all 80+ DOM elements at once, the list is paginated. Page size defaults to 10 and can be adjusted by the user (10, 20, 50). This maintains a lightweight DOM footprint (minimal rendering cost) and prevents scroll lag.
- **Responsive Layout:** Responsive CSS Grid structures adjust filter selectors from a single horizontal bar on desktop to a stacked grid configuration on mobile.
- **Zero Build Overhead:** The page is fully static and served on GitHub Pages without a compile step or framework runtimes.

---

## 4. Extended Data Model

The JSON schema and databases were updated to support the following properties for every publication:
1. `featured` (boolean): Flag to prioritize the paper in the top section.
2. `research_category` (string): Primary topic area (e.g., `Chalcogenides`, `Catalysis`).
3. `keywords` (array of strings): Specific materials or techniques for deep search matching.
4. `publication_type` (string): Label indicating the document type (`Journal Article`, `Review`).
5. `issue` (string): Journal issue number.

---

## 5. Future Extension Points

The HTML markup and components contain styled placeholders ("stubs") and hooks ready for integration in the next deployment phases:
- **BibTeX Citation Export:** Elements are prepared with `export-bibtex-stub` triggers to download raw citation records.
- **ACS/APA Copy-to-Clipboard:** Buttons are prepared with clipboard copy stubs.
- **PDF Downloads:** Local file storage hooks (`pdf-download-stub`) are pre-styled.
- **Altmetric & Citation Counts:** Structured visual containers (`citation-count-stub` and `altmetric-stub`) are positioned in the top-right metadata area of each card to hook into public Altmetric or Scopus APIs.
- **ORCID Sync:** Prepared to draw dynamically from ORCID record streams in subsequent database upgrades.
