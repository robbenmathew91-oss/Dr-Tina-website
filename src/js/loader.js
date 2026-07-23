/**
 * Data Loader Module
 * Handles loading and parsing of content JSON databases with graceful fallbacks.
 */

// Mapping of files to their safe empty structures to prevent site crashes.
const FALLBACKS = {
  'faculty.json': {
    name: "Unknown PI",
    title: "Principal Investigator",
    department: "Chemistry Department",
    institution: "University of Georgia",
    email: "",
    photo: "assets/images/placeholder.svg",
    biography: "Biography details are temporarily unavailable.",
    education: [],
    researchInterests: []
  },
  'students.json': { students: [] },
  'alumni.json': { alumni: [] },
  'projects.json': { projects: [] },
  'publications.json': { publications: [] },
  'grants.json': { grants: [] },
  'news.json': { news: [] },
  'gallery.json': { gallery: [] },
  'events.json': { events: [] },
  'collaborators.json': { collaborators: [] }
};

/**
 * Fetch and parse a JSON data file.
 * @param {string} filename - Name of the file inside the data/ folder (e.g., 'faculty.json')
 * @param {string} basePath - Base path to the root folder (default is relative to calling file)
 * @returns {Promise<Object>} - Parsed JSON object or the safe fallback structure.
 */
export async function loadData(filename, basePath = './data/') {
  const url = `${basePath.endsWith('/') ? basePath : basePath + '/'}${filename}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP network error: status ${response.status} on loading ${filename}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`[Data Loader] Failed to load "${filename}" from ${url}:`, error.message);
    
    // Check if we have a defined fallback structure
    if (FALLBACKS[filename]) {
      console.warn(`[Data Loader] Restoring empty fallback database structure for "${filename}".`);
      return FALLBACKS[filename];
    }
    return {};
  }
}
