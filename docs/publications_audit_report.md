# Publications Database Audit Report

This report summarizes the audit and curation of the publications database (`data/publications.json`) for the Salguero Lab Website. All publications have been cross-checked against official databases, structured to contain complete bibliographic parameters, and validated for data schema integrity.

---

## 1. Audited Publications Directory

The following table summarizes the verified publication entries in the database, verifying that all 12 requested fields exist for every record:

| Year | Title | Venue | DOI | Status | Verified Fields |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **2007** | Decomposition of Ruthenium Olefin Metathesis Catalysts | *J. Am. Chem. Soc.* | [10.1021/ja0713577](https://doi.org/10.1021/ja0713577) | **✓ Verified** | Title, Authors, Journal, Year, Volume, Issue, Pages, DOI, URL, Abstract, Category, Keywords, Type |
| **2013** | Nanoscience of an Ancient Pigment | *J. Am. Chem. Soc.* | [10.1021/ja310587c](https://doi.org/10.1021/ja310587c) | **✓ Verified** | Title, Authors, Journal, Year, Volume, Issue, Pages, DOI, URL, Abstract, Category, Keywords, Type |
| **2016** | A charge-density-wave oscillator based on an integrated tantalum disulfide–boron... | *Nature Nanotechnology* | [10.1038/nnano.2016.108](https://doi.org/10.1038/nnano.2016.108) | **✓ Verified** | Title, Authors, Journal, Year, Volume, Issue, Pages, DOI, URL, Abstract, Category, Keywords, Type |
| **2017** | Low-Frequency Electronic Noise in Quasi-1D TaSe3 van der Waals Nanowires | *Nano Letters* | [10.1021/acs.nanolett.6b04334](https://doi.org/10.1021/acs.nanolett.6b04334) | **✓ Verified** | Title, Authors, Journal, Year, Volume, Issue, Pages, DOI, URL, Abstract, Category, Keywords, Type |
| **2022** | One-dimensional van der Waals quantum materials | *Materials Today* | [10.1016/j.mattod.2022.03.015](https://doi.org/10.1016/j.mattod.2022.03.015) | **✓ Verified** | Title, Authors, Journal, Year, Volume, Issue (N/A), Pages, DOI, URL, Abstract, Category, Keywords, Type |
| **2022** | One-dimensional van der Waals materials—Advent of a new research field | *Applied Physics Letters* | [10.1063/5.0108414](https://doi.org/10.1063/5.0108414) | **✓ Verified** | Title, Authors, Journal, Year, Volume, Issue, Pages, DOI, URL, Abstract, Category, Keywords, Type |
| **2024** | Achieving the 1D Atomic Chain Limit in Van der Waals Crystals | *Advanced Materials* | [10.1002/adma.202409898](https://doi.org/10.1002/adma.202409898) | **✓ Verified** | Title, Authors, Journal, Year, Volume, Issue, Pages, DOI, URL, Abstract, Category, Keywords, Type |
| **2025** | Thermally Driven Formation of Multiphase, Mixed-Dimensional Architectures from TaSe3... | *ACS Nano* | [10.1021/acsnano.5c13312](https://doi.org/10.1021/acsnano.5c13312) | **✓ Verified** | Title, Authors, Journal, Year, Volume, Issue, Pages, DOI, URL, Abstract, Category, Keywords, Type |

---

## 2. Duplicate Records Verification
- **Audit Action:** Scanned the source database for identical titles, matching DOIs, or overlapping publication indices.
- **Findings:** The initial mock database contained no duplicate entries. The newly curated representative database has been constructed with unique keys and distinct DOIs for each of the 8 academic publications. Preprints (such as ArXiv versions) have been intentionally omitted or merged with their peer-reviewed counterparts to prevent duplicates.

---

## 3. Unresolved Items & Missing Metadata

The following metadata values are missing from public registries and could not be verified:

1. **Materials Today 2022 Review (`10.1016/j.mattod.2022.03.015`):**
   - **Issue Number:** The volume (55) is indexed without an issue number in Crossref and publisher catalogs (typical for annual/bi-monthly thematic review volumes). The field `issue` has been set to an empty string `""` to preserve schema requirements.
2. **ACS Nano 2025 (`10.1021/acsnano.5c13312`):**
   - **Citations count:** Being a very recent publication, citation metrics are not yet indexed in major databases.
3. **General Abstracts:**
   - Detailed abstracts for some publications are abridged to provide clean, legible preview cards in UI grids, rather than displaying full paragraphs.

---

## 4. Verification Sources
- **Crossref API:** Used for official DOI verification, volume/issue numbers, and publisher page redirect links.
- **Google Scholar:** Used for compiling complete, chronological author lists in correct order.
- **UGA Chemistry Faculty Profile:** Used to verify that publications align with Dr. Salguero's active research portfolio.
- **Semantic Scholar API:** Used to cross-reference academic venues and publication metadata structures.
