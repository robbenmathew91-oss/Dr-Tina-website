/**
 * DOM Renderer & Coordinator Module
 * Orchestrates sorting, filtering, empty state injection, and rendering of lists.
 */

// Bind the accordion toggle globally to window, so inline button 'onclick' event attributes can access it.
window.toggleDetails = function(elementId) {
  const panel = document.getElementById(elementId);
  if (panel) {
    panel.classList.toggle('hidden');
  }
};

// Global Citation Export Utilities
window.copyCitation = function(authors, title, journal, year, volume, issue, pages, doi) {
  let citation = `${authors}. "${title}." ${journal}`;
  if (year) citation += ` (${year})`;
  if (volume) citation += `, Vol. ${volume}`;
  if (issue) citation += `, Issue ${issue}`;
  if (pages) citation += `, pp. ${pages}`;
  if (doi) citation += `. https://doi.org/${doi}`;
  citation += '.';

  navigator.clipboard.writeText(citation).then(() => {
    alert(`Citation copied to clipboard:\n\n${citation}`);
  }).catch(() => {
    prompt('Copy citation:', citation);
  });
};

window.exportBibTeX = function(id, authors, title, journal, year, volume, issue, pages, doi) {
  const citeKey = id.replace(/[^a-zA-Z0-9-]/g, '');
  let bib = `@article{${citeKey},\n`;
  bib += `  author = {${authors}},\n`;
  bib += `  title = {{${title}}},\n`;
  bib += `  journal = {${journal}},\n`;
  if (year) bib += `  year = {${year}},\n`;
  if (volume) bib += `  volume = {${volume}},\n`;
  if (issue) bib += `  number = {${issue}},\n`;
  if (pages) bib += `  pages = {${pages}},\n`;
  if (doi) bib += `  doi = {${doi}},\n`;
  bib += `  url = {https://doi.org/${doi}}\n`;
  bib += `}`;

  prompt('Copy BibTeX entry:', bib);
};

window.openNewsLightbox = function(imageSrc, caption) {
  let modal = document.getElementById('news-lightbox-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'news-lightbox-modal';
    modal.style.cssText = 'position: fixed; inset: 0; background: rgba(0,0,0,0.85); z-index: 9999; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px;';
    modal.innerHTML = `
      <div style="position: relative; max-width: 900px; width: 100%; text-align: center;">
        <button onclick="document.getElementById('news-lightbox-modal').style.display='none'" style="position: absolute; top: -40px; right: 0; background: none; border: none; color: #fff; font-size: 2rem; cursor: pointer;">&times;</button>
        <img id="news-lightbox-img" src="" alt="" style="max-width: 100%; max-height: 80vh; border-radius: 8px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); object-fit: contain;" />
        <p id="news-lightbox-caption" style="color: #fff; font-size: 0.95rem; margin-top: 15px; font-style: italic;"></p>
      </div>
    `;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });
    document.body.appendChild(modal);
  }
  document.getElementById('news-lightbox-img').src = imageSrc;
  document.getElementById('news-lightbox-caption').textContent = caption;
  modal.style.display = 'flex';
};

window.shareNewsArticle = function(title, itemId) {
  const shareUrl = `${window.location.origin}${window.location.pathname}#news-${itemId}`;
  if (navigator.share) {
    navigator.share({
      title: title,
      url: shareUrl
    }).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert(`Article link copied to clipboard:\n\n${shareUrl}`);
    }).catch(() => {
      prompt('Copy article link:', shareUrl);
    });
  } else {
    prompt('Copy article link:', shareUrl);
  }
};

/**
 * Standard utility to inject HTML markup into a target container.
 * @param {string} selector - CSS selector of the parent target container
 * @param {string} htmlMarkup - String containing the structured HTML markup
 */
export function injectMarkup(selector, htmlMarkup) {
  const container = document.querySelector(selector);
  if (!container) {
    console.error(`[Renderer Error] Target container matching selector "${selector}" was not found in the document DOM.`);
    return false;
  }
  container.innerHTML = htmlMarkup;
  return true;
}

/**
 * Render a list of data models dynamically with custom sorting and empty state handling.
 * @param {Object} options - Configurations
 * @param {string} options.selector - CSS container selector (e.g. '#publications-list')
 * @param {Array} options.items - Array of data objects
 * @param {Function} options.componentFn - Reusable template function from components.js
 * @param {Function} [options.sortFn] - Optional sorting compare function
 * @param {string} [options.emptyMessage] - Message to display if array is empty
 * @returns {boolean} - Success status
 */
export function renderList({
  selector,
  items,
  componentFn,
  sortFn = null,
  emptyMessage = "No entries available at this time."
}) {
  const container = document.querySelector(selector);
  if (!container) {
    console.warn(`[Renderer Warning] Container selector "${selector}" not found. Skipping list render.`);
    return false;
  }

  // Gracefully handle missing or empty collections
  if (!items || !Array.isArray(items) || items.length === 0) {
    container.innerHTML = `
      <div class="empty-state-card">
        <p class="empty-state-message">${emptyMessage}</p>
      </div>
    `;
    return true;
  }

  // Clone item list to avoid modifying the original array out of order
  let renderableItems = [...items];

  // Apply sorting if a sorting function is provided
  if (sortFn && typeof sortFn === 'function') {
    renderableItems.sort(sortFn);
  }

  // Compile individual elements into a single markup string
  const compiledHtml = renderableItems.map(item => componentFn(item)).join('\n');
  container.innerHTML = compiledHtml;
  return true;
}

/**
 * Sorting Utilities
 */
export const SortFunctions = {
  // Sort string dates (YYYY-MM-DD) chronologically (earlier dates first)
  datesAscending: (a, b) => new RegExp(/^\d{4}-\d{2}-\d{2}$/).test(a.date) && new RegExp(/^\d{4}-\d{2}-\d{2}$/).test(b.date)
    ? new Date(a.date) - new Date(b.date)
    : 0,

  // Sort string dates (YYYY-MM-DD) in reverse chronological order (latest first)
  datesDescending: (a, b) => new RegExp(/^\d{4}-\d{2}-\d{2}$/).test(a.date) && new RegExp(/^\d{4}-\d{2}-\d{2}$/).test(b.date)
    ? new Date(b.date) - new Date(a.date)
    : 0,

  // Sort publications in reverse chronological order (latest year first), then alphabetically by title
  publicationsDefault: (a, b) => {
    const yearA = parseInt(a.year, 10) || 0;
    const yearB = parseInt(b.year, 10) || 0;
    if (yearB !== yearA) {
      return yearB - yearA; // Latest year first
    }
    return a.title.localeCompare(b.title); // Alphabetical secondary sort
  },

  // Sort students alphabetically by name
  alphabeticalByName: (a, b) => a.name.localeCompare(b.name),

  // Sort alumni reverse-chronologically by graduation year
  alumniDefault: (a, b) => {
    const yearA = parseInt(a.graduationYear, 10) || 0;
    const yearB = parseInt(b.graduationYear, 10) || 0;
    if (yearB !== yearA) {
      return yearB - yearA;
    }
    return a.name.localeCompare(b.name);
  },

  // Sort grants by status (Active first), then by duration descending
  grantsDefault: (a, b) => {
    if (a.status === b.status) {
      return b.duration.localeCompare(a.duration);
    }
    return a.status === 'Active' ? -1 : 1;
  }
};
