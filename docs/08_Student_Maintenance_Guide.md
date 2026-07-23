# Student Maintenance Guide: Salguero Lab Website

Welcome to the Salguero Lab Website code repository! This website is designed with a **data-driven architecture**, meaning that the layout, design, and rendering logic are completely separate from the actual scientific and personal content.

As a student webmaster or researcher updating the site, **you do not need to modify any HTML code to update the website's contents.** You only need to edit structured JSON files.

---

## 1. Quick Update Cheat Sheet

Here is a map of what files to edit for typical content updates:

| Update Task | File to Modify | Image/Asset Destination |
| :--- | :--- | :--- |
| **Add/Edit Student Profiles** | [students.json](file:///Users/ali/Dr%20Tina%20Website/data/students.json) | Upload square headshot to `assets/images/team/` |
| **Graduate/Archive Alumnus** | [students.json](file:///Users/ali/Dr%20Tina%20Website/data/students.json) (Remove) & [alumni.json](file:///Users/ali/Dr%20Tina%20Website/data/alumni.json) (Add) | N/A (Optional LinkedIn update) |
| **Add New Paper / Publication** | [publications.json](file:///Users/ali/Dr%20Tina%20Website/data/publications.json) | N/A |
| **Add New Research Grant** | [grants.json](file:///Users/ali/Dr%20Tina%20Website/data/grants.json) | N/A |
| **Add News/Announcement** | [news.json](file:///Users/ali/Dr%20Tina%20Website/data/news.json) | Upload optional thumbnail to `assets/images/news/` |
| **Add Event/Group Meeting** | [events.json](file:///Users/ali/Dr%20Tina%20Website/data/events.json) | N/A |
| **Add Photo to Gallery** | [gallery.json](file:///Users/ali/Dr%20Tina%20Website/data/gallery.json) | Upload photo to `assets/images/gallery/` |
| **Add Research Collaborator**| [collaborators.json](file:///Users/ali/Dr%20Tina%20Website/data/collaborators.json) | Upload logo to `assets/images/collaborators/` |
| **Update PI (Dr. Salguero) Info**| [faculty.json](file:///Users/ali/Dr%20Tina%20Website/data/faculty.json) | Upload photo to `assets/images/` |

---

## 2. Real-Time Editing with JSON Schemas

To ensure you don't make syntax errors or forget required fields, every JSON file points to a JSON Schema file located in the `data/schemas/` directory using the `"$schema"` property:

```json
{
  "$schema": "./schemas/students.schema.json",
  "students": [ ... ]
}
```

### Setup Auto-Validation in Editors (VS Code / Cursor / etc.)
1. Open the project folder in your code editor.
2. The editor will automatically read the `"$schema"` property.
3. If you make a typo in a property name, miss a required field (like `email`), or use the wrong data type, the editor will highlight the line in **red/yellow** with an explanatory warning.
4. You can hover over property names in the JSON files to see tooltips explaining what each field does.

---

## 3. Guide: Adding a New Student

1. Take a high-resolution square-cropped photo of the new member (300 x 300px works best) and save it in `assets/images/team/` as `firstname_lastname.jpg`.
2. Open `data/students.json`.
3. Add a new object block at the end of the `students` list:

```json
{
  "id": "new-student-slug",
  "name": "Jane Miller",
  "role": "Graduate Researcher",
  "yearStarted": "2026",
  "projectFocus": "Synthesizing inorganic nanosheets for solar cell layers.",
  "email": "jmiller@uga.edu",
  "linkedin": "https://linkedin.com/in/janemiller",
  "photo": "assets/images/team/jane_miller.jpg"
}
```

*Note: Make sure to place a comma after the preceding closing brace `},`.*

---

## 4. Guide: Adding a New Publication

1. Open `data/publications.json`.
2. Locate the most recent entry at the top of the `"publications"` array (the list is automatically sorted by year, but keeping them chronological in the file helps with organization).
3. Insert a new block:

```json
{
  "id": "pub-2026-02",
  "title": "A New Methodology for Nanosheet Lamination",
  "authors": "Doe, J., and Salguero, T.",
  "journal": "Nature Materials",
  "volume": "15",
  "pages": "100-112",
  "year": "2026",
  "doi": "10.1038/nmatXXXX",
  "link": "https://doi.org/10.1038/nmatXXXX",
  "abstract": "This abstract will be displayed in the collapsible accordion panel on the Publications page.",
  "tags": ["Nanosheets", "Synthesis"]
}
```

---

## 5. Troubleshooting Data Errors

If the website content does not load, loads partially, or does not update after saving your changes:

1. **Check JSON Formatting:** Go to a free online checker like [JSONLint](https://jsonlint.com/) and paste your JSON file contents to verify you didn't miss a comma `,` or double quote `"`.
2. **Open Browser Developer Tools:**
   - In Google Chrome or Microsoft Edge, press `F12` or right-click the page and select **Inspect**.
   - Navigate to the **Console** tab.
3. **Inspect Logs:**
   - **Validation Warnings:** Our validator module prints detailed warnings if you miss fields or type things incorrectly (e.g. `[Validation Warning] [Schema: student] Item "John Smith" is missing required field: "email"`).
   - **Network Errors:** The data loader will log if it cannot locate a file (e.g., `[Data Loader] Failed to load "gallery.json" ... Status 404`).
