# Release Candidate Report — Salguero Research Group Website

**Date:** July 23, 2026  
**Branch:** `content-integration`  
**Audit Scope:** Full production readiness evaluation of all 10 pages

---

## Overall Website Score: **78 / 100**

The website is architecturally sound with a well-designed JSON-driven relational database, consistent component system, and professional academic aesthetic. Critical functional bugs (broken collapsible drawers) have been fixed in this audit. The main gaps are SEO metadata, placeholder images, and missing real photography.

---

## Page-by-Page Scores

| Page | Score | Status |
|------|-------|--------|
| Home (`index.html`) | 82 | Ready with minor polish |
| Research (`research.html`) | 80 | Ready |
| Publications (`publications.html`) | 85 | Ready |
| Projects (`projects.html`) | 76 | Fixed — was broken |
| Funding (`funding.html`) | 76 | Fixed — was broken |
| News (`news.html`) | 76 | Fixed — was broken |
| Gallery (`gallery.html`) | 72 | Ready with caveats |
| People (`people.html`) | 80 | Ready |
| Join (`join.html`) | 78 | Ready |
| Contact (`contact.html`) | 82 | Ready |

---

## Critical Issues (Must Fix Before Launch)

### ✅ FIXED: `toggleDetails()` undefined on 3 pages
- **Pages affected:** `projects.html`, `funding.html`, `news.html`
- **Symptom:** Clicking "Explore Scientific Workflow & Relations", "Explore Linked Projects & Publications", or "Read Full Post →" threw `ReferenceError: toggleDetails is not defined`
- **Root cause:** These pages were redesigned with custom inline rendering but never imported `renderer.js`, which defines `window.toggleDetails`
- **Fix applied:** Added `import './src/js/renderer.js';` to all three pages

### ✅ FIXED: Placeholder name "Jane Doe" in events.json
- **Location:** `data/events.json`, event `event-2026-07-28`
- **Issue:** Fictitious name displayed on the Join page's upcoming events timeline
- **Fix applied:** Replaced with "TBD" placeholder indicating the defense will be announced

### ✅ FIXED: Missing `robots.txt`
- **Issue:** No `robots.txt` file existed for search engine crawling
- **Fix applied:** Created `robots.txt` with `Allow: /` and sitemap reference

### ✅ FIXED: Missing `sitemap.xml`
- **Issue:** No XML sitemap existed for search engine indexing
- **Fix applied:** Created `sitemap.xml` with all 10 pages and priority weighting

---

## High Priority Issues (Should Fix Before Launch)

### 1. No OpenGraph or Twitter Card meta tags on any page
- **Impact:** Social media shares (LinkedIn, Twitter, Facebook) will show generic previews with no title, description, or image
- **Recommendation:** Add `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `twitter:card`, `twitter:title`, `twitter:description` to every page's `<head>`

### 2. Placeholder images used extensively (16 references)
- **Breakdown:**
  - Gallery: 4 items use `placeholder.svg`
  - News: 6 items use `placeholder.svg`
  - Projects: 2 items use `placeholder.svg`
  - Research themes: 2 items use `placeholder.svg`
  - Students: 1 member (Ali Ahmed) uses `placeholder.svg`
  - Alumni: 1 member (April Rains) uses `placeholder.svg`
- **Impact:** The site looks incomplete in image-heavy sections
- **Recommendation:** Replace with real lab photography or professional stock images before public launch

### 3. No canonical URLs on any page
- **Impact:** Potential duplicate content issues in search engines
- **Recommendation:** Add `<link rel="canonical" href="...">` to each page

---

## Medium Priority Issues

### 4. No favicon
- **Impact:** Browser tabs show generic icon; looks unprofessional
- **Recommendation:** Add a UGA-themed or lab-branded favicon

### 5. Contact form has no backend
- **Impact:** Form submission simulates success but does not actually send any data
- **Recommendation:** Integrate with Formspree, Google Forms, or a similar service before going live, or clearly label it as "Email us directly" with a mailto link

---

## Minor Polish Items

### 7. Typography consistency
- All pages use the same font stack (Inter + Outfit) ✓
- Heading hierarchy is correct (`h1` → `h2` → `h3`) on all pages ✓
- Minor: Some inline styles duplicate CSS variables — these could be consolidated

### 8. Mobile responsiveness
- Navigation hamburger toggle works correctly ✓
- `grid-cols-3` and `grid-cols-4` filters collapse to single column on mobile via `@media` queries
- Minor: Gallery lightbox prev/next buttons are functional but small on mobile (40px)

### 9. Accessibility
- All pages have `lang="en"` ✓
- `aria-label` attributes present on search inputs, filters, and navigation ✓
- `aria-expanded` attributes on toggle buttons ✓
- `role="dialog"` on lightbox ✓
- Minor: Some filter `<select>` elements could benefit from explicit `<label>` elements rather than just `aria-label`

### 10. Performance
- All images use `loading="lazy"` ✓
- No external JS frameworks — pure vanilla JS ✓
- CSS is a single file (`main.css`) ✓
- Google Fonts loaded with `preconnect` hints ✓
- Minor: Consider adding `<meta http-equiv="X-UA-Compatible" content="IE=edge">` for legacy browser compatibility

### 11. Code quality
- No `console.log` statements in production code ✓
- Validation warnings are properly namespaced to `console.warn` ✓
- All JSON files parse correctly ✓
- No duplicate IDs across 38 unique database records ✓
- All cross-referencing relational IDs resolve correctly ✓
- All local HTML hyperlinks resolve to existing files ✓

---

## Data Integrity Summary

| Database | Records | Valid JSON | Relations OK |
|----------|---------|-----------|-------------|
| `faculty.json` | 1 | ✓ | N/A |
| `students.json` | 4 | ✓ | ✓ |
| `alumni.json` | 3 | ✓ | ✓ |
| `publications.json` | 6 | ✓ | ✓ |
| `projects.json` | 2 | ✓ | ✓ |
| `grants.json` | 2 | ✓ | ✓ |
| `news.json` | 6 | ✓ | ✓ |
| `gallery.json` | 6 | ✓ | ✓ |
| `research.json` | 2 themes | ✓ | ✓ |
| `collaborators.json` | 2 | ✓ | ✓ |
| `events.json` | 3 | ✓ | N/A |

**Total unique IDs:** 38  
**Duplicate IDs:** 0  
**Broken relational references:** 0  
**Broken HTML links:** 0

---

## Cross-Linking Verification

| Source Page | Links to Research | Links to Projects | Links to Funding | Links to News | Links to Gallery | Links to People | Links to Publications |
|-------------|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Research | ✓ | ✓ | ✓ | — | — | — | ✓ |
| Projects | — | ✓ | ✓ | — | — | — | ✓ |
| Funding | — | ✓ | ✓ | — | — | — | ✓ |
| News | — | ✓ | ✓ | ✓ | — | ✓ | ✓ |
| Gallery | ✓ | ✓ | — | ✓ | ✓ | ✓ | ✓ |

---

## Recommendations Before Merging to Main

1. **Add OpenGraph + Twitter meta tags** to all 10 pages (High Priority)
2. **Replace placeholder images** with real lab photography (High Priority)
3. **Add canonical URLs** to each page (High Priority)
4. **Add a favicon** (Medium Priority)
5. **Integrate contact form backend** or convert to mailto (Medium Priority)
6. **Import remaining ~75 publications** into `publications.json` (Content — separate phase)
7. **Review events.json** for any other placeholder content (Minor)
8. **Consider adding a 404.html page** for GitHub Pages (Minor)

