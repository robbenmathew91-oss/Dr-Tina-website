# Dr. Tina Salguero Research Group Website

This project is the official website for Dr. Tina Salguero's research group at the University of Georgia (UGA). The website highlights the group's research areas, publications, team members, active grants, and news.

## Folder Structure

The project has the following folder structure:

```text
Dr-Tina-Website/
├── .gitignore               # Git ignore rules
├── README.md                # Project overview and structure documentation
├── assets/                  # Media files used throughout the project
│   ├── icons/               # SVGs and UI icon assets
│   ├── images/              # Photos (faculty, team, lab, research)
│   └── videos/              # Lab demo and animation video clips
├── components/              # Reusable layout and interactive components
├── data/                    # JSON data files for content population
│   ├── alumni.json          # Group alumni information
│   ├── collaborators.json   # External research group collaborators
│   ├── events.json          # Lab calendar, group meetings, and defenses
│   ├── faculty.json         # Principal Investigator (PI) information
│   ├── gallery.json         # Lab and research gallery media metadata
│   ├── grants.json          # Funded research grants data
│   ├── news.json            # Lab news and announcements
│   ├── projects.json        # Research project descriptions and details
│   ├── publications.json    # Peer-reviewed journal publications
│   ├── students.json        # Current graduate and undergraduate student info
│   └── schemas/             # JSON Schemas defining validation models
│       ├── alumni.schema.json
│       ├── collaborators.schema.json
│       ├── events.schema.json
│       ├── faculty.schema.json
│       ├── gallery.schema.json
│       ├── grants.schema.json
│       ├── news.schema.json
│       ├── projects.schema.json
│       ├── publications.schema.json
│       └── students.schema.json
├── docs/                    # Documentation and planning resources
│   ├── 01_Project_Plan.md   # Project scope, timeline, and goals
│   ├── 02_Research_Dossier.md# Group research areas and lab information
│   ├── 03_Site_Architecture.md# Information architecture and site map
│   ├── 04_Design_System.md  # Typography, color palette, and visual identity
│   ├── 05_Content_Checklist.md# Checklist for gathering site assets and content
│   ├── 06_Development_Log.md# Chronological log of development progress
│   ├── 07_Content_Strategy.md# Rules/best practices for writing, updating, and SEO/a11y
│   └── 08_Student_Maintenance_Guide.md# Operations manual for student webmasters
├── public/                  # Static assets served directly from the root
├── scripts/                 # Utility scripts (e.g. data validation, building)
├── src/                     # Source code files (HTML, CSS, JavaScript)
│   └── js/                  # Reusable ES Modules for dynamic page rendering
│       ├── loader.js        # Dynamic JSON data loading and failure fallbacks
│       ├── validator.js     # Client-side required-field schema validator
│       ├── components.js    # Modular HTML template generators for UI
│       └── renderer.js      # Mounts components, handles empty states & sorting
└── styles/                  # Styling files (variables, base styles)
```

## Getting Started

Refer to [01_Project_Plan.md](file:///Users/ali/Dr%20Tina%20Website/docs/01_Project_Plan.md) for the implementation strategy and timeline. Details on page structure, database structures, and maintenance are detailed in [03_Site_Architecture.md](file:///Users/ali/Dr%20Tina%20Website/docs/03_Site_Architecture.md), [04_Design_System.md](file:///Users/ali/Dr%20Tina%20Website/docs/04_Design_System.md), and [08_Student_Maintenance_Guide.md](file:///Users/ali/Dr%20Tina%20Website/docs/08_Student_Maintenance_Guide.md).
