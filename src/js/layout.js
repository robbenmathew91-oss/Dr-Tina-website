/**
 * Dynamic Layout Injector Module
 * Generates and mounts consistent Header, Nav, and Footer across all pages.
 * Detects URL to dynamically highlight the active page.
 */

const NAV_LINKS = [
  { href: 'index.html', label: 'Home' },
  { href: 'research.html', label: 'Research' },
  { href: 'people.html', label: 'People' },
  { href: 'publications.html', label: 'Publications' },
  { href: 'projects.html', label: 'Projects' },
  { href: 'funding.html', label: 'Funding' },
  { href: 'news.html', label: 'News' },
  { href: 'gallery.html', label: 'Gallery' },
  { href: 'join.html', label: 'Join' },
  { href: 'contact.html', label: 'Contact' }
];

document.addEventListener('DOMContentLoaded', () => {
  injectHeader();
  injectFooter();
});

/**
 * Injects the global navigation header.
 */
function injectHeader() {
  const container = document.getElementById('header-container');
  if (!container) return;

  // Determine current active filename
  const path = window.location.pathname;
  let currentPage = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

  // Build nav link elements
  const linksHtml = NAV_LINKS.map(link => {
    const isActive = currentPage === link.href ? 'active' : '';
    return `<li class="nav-item ${isActive}"><a href="${link.href}">${link.label}</a></li>`;
  }).join('');

  container.innerHTML = `
    <header class="header-wrapper">
      <div class="header-container">
        <a href="index.html" class="logo-link" aria-label="Salguero Lab Home">
          <span class="logo-title">Salguero Research Group</span>
          <span class="logo-sub">University of Georgia</span>
        </a>
        <button class="mobile-nav-toggle" id="mobile-nav-toggle" aria-expanded="false" aria-label="Toggle Navigation Menu">
          ☰
        </button>
        <nav class="nav-bar" aria-label="Main Website Navigation">
          <ul class="nav-links" id="nav-links-list">
            ${linksHtml}
          </ul>
        </nav>
      </div>
    </header>
  `;

  // Bind responsive hamburger toggle event
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const navList = document.getElementById('nav-links-list');
  if (toggleBtn && navList) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navList.classList.toggle('mobile-open');
      toggleBtn.innerHTML = isOpen ? '✕' : '☰';
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
}

/**
 * Injects the global academic footer.
 */
function injectFooter() {
  const container = document.getElementById('footer-container');
  if (!container) return;

  container.innerHTML = `
    <footer class="footer-wrapper">
      <div class="footer-container">
        <div class="footer-info">
          <h4>Salguero Research Group</h4>
          <p>We are a materials chemistry laboratory at the University of Georgia, specializing in inorganic materials synthesis, nanosheet exfoliation, and advanced characterization.</p>
          <p class="py-4">
            📍 <strong>Chemistry Building</strong><br />
            University of Georgia<br />
            140 Cedar Street, Athens, GA 30602
          </p>
        </div>
        <div class="footer-links">
          <h4>Sitemap</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="research.html">Research Overview</a></li>
            <li><a href="people.html">Group Members</a></li>
            <li><a href="publications.html">Publications</a></li>
            <li><a href="projects.html">Technical Projects</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Resources</h4>
          <ul>
            <li><a href="funding.html">Funding & Grants</a></li>
            <li><a href="news.html">News & Updates</a></li>
            <li><a href="gallery.html">Lab Gallery</a></li>
            <li><a href="join.html">Join the Lab</a></li>
            <li><a href="contact.html">Contact Information</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Salguero Research Group. University of Georgia. All rights reserved.</p>
        <p class="py-4">Developed for the University of Georgia Department of Chemistry.</p>
      </div>
    </footer>
  `;
}
