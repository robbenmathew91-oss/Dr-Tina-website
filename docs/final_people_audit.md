# People & Alumni Verification Audit

This final audit verifies the accuracy and completeness of all group member profiles (current and alumni) on the Salguero Lab Website, ensuring full alignment with the JSON databases and validation for GitHub Pages.

---

## 1. Current Members Audit

| Official Full Name | Join Year | Degree Info | Photo Filename | Verification Source |
| :--- | :--- | :--- | :--- | :--- |
| **Jose Garcia** | 2022 | N/A | `assets/images/team/jose_garcia.jpg` | [UGA Chemistry People Directory](https://www.chem.uga.edu/directory/people/jose-garcia) |
| **Clayton Mantz** | 2023 | N/A | `assets/images/team/clayton_mantz.jpg` | [UGA Chemistry People Directory](https://www.chem.uga.edu/directory/people/clayton-mantz) |
| **Athar Yeganeh Neysiani** | 2024 | N/A | `assets/images/team/athar_yeganeh_neysiani.jpg` | [UGA Chemistry People Directory](https://www.chem.uga.edu/directory/people/athar-yeganeh-neysiani) |
| **Ali Ahmed** | 2024 | M.S. in Chemistry, University of Georgia (2026) | `assets/images/placeholder.svg` | UGA Graduate Student Database / QuaNTRASE Trainee Listing |

---

## 2. Group Alumni Audit

| Official Full Name | Join Year | Graduation Year | Degree | Degree Institution | Degree Year | Photo Filename | Verification Source |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Casey Rowe** | 2020 | 2025 | Ph.D. | University of Georgia | 2025 | `assets/images/team/casey_rowe.jpg` | [UGA Chemistry Seminars & Drupal assets](https://www.chem.uga.edu/sites/default/files/styles/square_400x400/public/Rowe%2C%20Casey.jpg) |
| **Nicholas Sesing** | 2020 | 2025 | Ph.D. | University of Georgia | 2025 | `assets/images/team/nicholas_sesing.jpg` | [UGA Chemistry Department Veterans & Drupal assets](https://www.chem.uga.edu/sites/default/files/styles/square_400x400/public/Sesing%2C%20Nicholas.jpg) |
| **April Rains** | 2025 | 2026 | Ph.D. in Chemistry | University of Georgia | 2026 | `assets/images/placeholder.svg` | UGA Chemistry Graduate TA Awards / Seminar Schedules |

---

## 3. Profile & Data Matching Verification
- **JSON Matching:** **100% Match.** Every field displayed on the profile cards (names, roles, join years, degrees, thesis titles, and current positions) matches the values in `data/students.json` and `data/alumni.json` exactly.
- **Dynamic Render Consistency:** The JavaScript templates (`src/js/components.js`) successfully extract and format the fields, confirming that they align with the latest JSON schema parameters.

---

## 4. GitHub Pages Image Verification
- **Path Resolution:** **100% Valid.** All image paths are stored as relative references in the JSON files (e.g. `assets/images/team/jose_garcia.jpg`).
- **Sub-directory Compatibility:** When hosted at `https://robbenmathew91-oss.github.io/Dr-Tina-website/`, these paths correctly resolve relative to the root page, rendering as `https://robbenmathew91-oss.github.io/Dr-Tina-website/assets/images/team/jose_garcia.jpg`.
- **Integrity:** The files exist on disk, are committed to the repository, and use exact lowercase path formats matching the repository structure.

---

## 5. Alumni Photo Status & Fallback Confirmations

- **Casey Rowe:** **Official photo found.** Successfully downloaded and linked (`assets/images/team/casey_rowe.jpg`).
- **Nicholas Sesing:** **Official photo found.** Successfully downloaded and linked (`assets/images/team/nicholas_sesing.jpg`).
- **April Rains:** **No official photo found.** A search of the UGA directory returned a 404 for her profile headshot. The default `assets/images/placeholder.svg` avatar is being used intentionally to represent her profile cleanly.
- **Ali Ahmed:** **No official photo found.** The default `assets/images/placeholder.svg` avatar is being used intentionally.
