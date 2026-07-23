/**
 * Reusable HTML Web Components Template Generator
 * Pure functions returning responsive, semantic HTML strings.
 * All functions handle missing fields gracefully by omitting layout containers.
 */

/**
 * Render Faculty profile banner and biography
 */
export function FacultyProfile(faculty) {
  const educationList = (faculty.education || [])
    .map(edu => `<li class="edu-item"><strong>${edu.degree}</strong> - ${edu.institution} (${edu.year})</li>`)
    .join('');

  const interestsList = (faculty.researchInterests || [])
    .map(interest => `<span class="interest-badge">${interest}</span>`)
    .join('');

  return `
    <div class="faculty-profile" id="faculty-profile-${faculty.name.replace(/\s+/g, '-').toLowerCase()}">
      <div class="profile-header-grid">
        <div class="profile-image-container">
          <img src="${faculty.photo || 'assets/images/placeholder.jpg'}" alt="${faculty.name}" class="profile-photo" loading="lazy" />
        </div>
        <div class="profile-details-container">
          <h1 class="faculty-name">${faculty.name}</h1>
          <p class="faculty-title">${faculty.title}</p>
          <p class="faculty-affiliation">${faculty.department}, ${faculty.institution}</p>
          
          <div class="contact-info-block">
            ${faculty.office ? `<p><strong>Office:</strong> ${faculty.office}</p>` : ''}
            ${faculty.phone ? `<p><strong>Phone:</strong> ${faculty.phone}</p>` : ''}
            ${faculty.email ? `<p><strong>Email:</strong> <a href="mailto:${faculty.email}">${faculty.email}</a></p>` : ''}
          </div>

          <div class="profile-social-links">
            ${faculty.googleScholar ? `<a href="${faculty.googleScholar}" class="social-link scholar" target="_blank" rel="noopener">Google Scholar</a>` : ''}
            ${faculty.orcid ? `<a href="${faculty.orcid}" class="social-link orcid" target="_blank" rel="noopener">ORCID</a>` : ''}
          </div>
        </div>
      </div>

      <div class="profile-body">
        <section class="bio-section">
          <h2>Biography</h2>
          <p>${faculty.biography}</p>
        </section>

        ${interestsList ? `
          <section class="interests-section">
            <h2>Research Interests</h2>
            <div class="interests-grid">${interestsList}</div>
          </section>
        ` : ''}

        ${educationList ? `
          <section class="education-section">
            <h2>Education</h2>
            <ul class="education-list">${educationList}</ul>
          </section>
        ` : ''}
      </div>
    </div>
  `;
}

/**
 * Render Student Profile Card
 */
export function StudentCard(student) {
  return `
    <div class="student-card" id="student-${student.id}">
      <div class="student-photo-wrapper">
        <img src="${student.photo || 'assets/images/placeholder.jpg'}" alt="${student.name}" class="student-photo" loading="lazy" />
      </div>
      <div class="student-info">
        <h3 class="student-name">${student.name}</h3>
        <p class="student-role">${student.role}</p>
        <p class="student-year">Joined Lab: ${student.yearStarted}</p>
        <p class="student-focus">${student.projectFocus}</p>
        
        <div class="student-links">
          <a href="mailto:${student.email}" class="btn-icon email" title="Contact ${student.name}">Email</a>
          ${student.linkedin ? `<a href="${student.linkedin}" class="btn-icon linkedin" target="_blank" rel="noopener" title="${student.name} on LinkedIn">LinkedIn</a>` : ''}
        </div>
      </div>
    </div>
  `;
}

/**
 * Render Alumni List Item
 */
export function AlumniCard(alumnus) {
  return `
    <div class="alumni-card-item" id="alumni-${alumnus.id}">
      <div class="alumni-header">
        <h3 class="alumni-name">${alumnus.name}, <span class="alumni-degree">${alumnus.degree}</span></h3>
        <span class="alumni-year">Class of ${alumnus.graduationYear}</span>
      </div>
      <div class="alumni-body">
        ${alumnus.thesisTitle ? `<p class="alumni-thesis"><strong>Thesis:</strong> "${alumnus.thesisTitle}"</p>` : ''}
        <p class="alumni-current"><strong>Current:</strong> ${alumnus.currentPosition}</p>
        ${alumnus.linkedin ? `<a href="${alumnus.linkedin}" class="alumni-linkedin-link" target="_blank" rel="noopener">LinkedIn Profile &rarr;</a>` : ''}
      </div>
    </div>
  `;
}

/**
 * Render Research Project Card
 */
export function ProjectCard(project) {
  const statusClass = project.status.toLowerCase() === 'active' ? 'status-active' : 'status-completed';
  const tagsList = (project.tags || []).map(tag => `<span class="project-tag">${tag}</span>`).join('');

  return `
    <article class="project-card" id="project-${project.id}">
      ${project.image ? `
        <div class="project-image-container">
          <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy" />
        </div>
      ` : ''}
      <div class="project-content">
        <div class="project-header">
          <span class="project-status ${statusClass}">${project.status}</span>
          <h3 class="project-title">${project.title}</h3>
        </div>
        <p class="project-summary">${project.summary}</p>
        
        <div class="project-tags-row">${tagsList}</div>
        
        ${project.funding ? `<p class="project-funding"><strong>Funding Support:</strong> ${project.funding}</p>` : ''}

        <button class="btn btn-secondary btn-sm project-more-btn" onclick="toggleDetails('project-desc-${project.id}')">
          View Project Details
        </button>
        
        <div class="project-description-full hidden" id="project-desc-${project.id}">
          <hr />
          <p>${project.detailedDescription}</p>
        </div>
      </div>
    </article>
  `;
}

/**
 * Render Publication Reference Card
 */
export function PublicationCard(pub) {
  const tagsList = (pub.tags || []).map(tag => `<span class="pub-tag-badge">${tag}</span>`).join('');
  const detailsString = `${pub.journal}${pub.volume ? `, Vol. ${pub.volume}` : ''}${pub.pages ? `, Pages ${pub.pages}` : ''} (${pub.year})`;

  return `
    <div class="publication-card" id="publication-${pub.id}">
      <div class="pub-meta-row">
        <span class="pub-year-badge">${pub.year}</span>
        <div class="pub-tags-list">${tagsList}</div>
      </div>
      
      <h3 class="pub-title">${pub.title}</h3>
      <p class="pub-authors">${pub.authors}</p>
      <p class="pub-journal-details">${detailsString}</p>
      
      <div class="pub-actions">
        <a href="${pub.link}" class="pub-link-btn" target="_blank" rel="noopener">DOI: ${pub.doi}</a>
        ${pub.abstract ? `
          <button class="pub-abstract-btn" onclick="toggleDetails('pub-abstract-${pub.id}')">
            Show Abstract
          </button>
        ` : ''}
      </div>

      ${pub.abstract ? `
        <div class="pub-abstract-panel hidden" id="pub-abstract-${pub.id}">
          <p class="abstract-text">${pub.abstract}</p>
        </div>
      ` : ''}
    </div>
  `;
}

/**
 * Render Grant Card
 */
export function GrantCard(grant) {
  const statusClass = grant.status.toLowerCase() === 'active' ? 'status-active' : 'status-completed';
  return `
    <div class="grant-card" id="grant-${grant.id}">
      <div class="grant-header">
        <span class="grant-status ${statusClass}">${grant.status}</span>
        <h3 class="grant-title">${grant.title}</h3>
      </div>
      <div class="grant-details-grid">
        <p><strong>Funding Agency:</strong> ${grant.agency}</p>
        ${grant.grantNumber ? `<p><strong>Award Number:</strong> ${grant.grantNumber}</p>` : ''}
        ${grant.amount ? `<p><strong>Award Amount:</strong> ${grant.amount}</p>` : ''}
        <p><strong>Duration:</strong> ${grant.duration}</p>
        <p><strong>PI:</strong> ${grant.principalInvestigator}</p>
      </div>
    </div>
  `;
}

/**
 * Render News Card
 */
export function NewsCard(item) {
  const dateFormatted = new Date(item.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  return `
    <article class="news-card" id="news-${item.id}">
      ${item.image ? `
        <div class="news-image-wrapper">
          <img src="${item.image}" alt="${item.title}" class="news-image" loading="lazy" />
        </div>
      ` : ''}
      <div class="news-card-content">
        <time class="news-date" datetime="${item.date}">${dateFormatted}</time>
        <h3 class="news-title">${item.title}</h3>
        <p class="news-excerpt">${item.excerpt}</p>
        
        <button class="btn btn-link news-read-btn" onclick="toggleDetails('news-body-${item.id}')">
          Read Article &darr;
        </button>

        <div class="news-body-full hidden" id="news-body-${item.id}">
          <hr />
          <div class="news-detailed-text">${item.content}</div>
          ${item.link ? `<p class="news-external-link"><a href="${item.link}" target="_blank" rel="noopener">Official Press Release &rarr;</a></p>` : ''}
        </div>
      </div>
    </article>
  `;
}

/**
 * Render Gallery Item
 */
export function GalleryItem(photo) {
  return `
    <div class="gallery-card" id="gallery-${photo.id}" data-category="${photo.category}">
      <div class="gallery-image-wrapper">
        <img src="${photo.url}" alt="${photo.caption}" class="gallery-image" loading="lazy" />
        <div class="gallery-overlay">
          <span class="gallery-category-badge">${photo.category}</span>
          <p class="gallery-caption">${photo.caption}</p>
          <time class="gallery-date">${new Date(photo.date).getFullYear()}</time>
        </div>
      </div>
    </div>
  `;
}

/**
 * Render Timeline Item (for Events / History)
 */
export function TimelineItem(event) {
  const dateFormatted = new Date(event.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  return `
    <div class="timeline-node" id="event-${event.id}">
      <div class="timeline-marker type-${event.type.toLowerCase().replace(/\s+/g, '-')}"></div>
      <div class="timeline-content-card">
        <div class="timeline-header">
          <span class="event-type-badge">${event.type}</span>
          <time class="event-date">${dateFormatted}</time>
        </div>
        <h3 class="event-title">${event.title}</h3>
        ${event.time || event.location ? `
          <div class="event-meta-info">
            ${event.time ? `<span>🕒 ${event.time}</span>` : ''}
            ${event.location ? `<span>📍 ${event.location}</span>` : ''}
          </div>
        ` : ''}
        <p class="event-description">${event.description}</p>
      </div>
    </div>
  `;
}

/**
 * Render Collaborator Card
 */
export function CollaboratorCard(collab) {
  return `
    <div class="collaborator-card" id="collaborator-${collab.id}">
      ${collab.logo ? `
        <div class="collab-logo-container">
          <img src="${collab.logo}" alt="${collab.institution} Logo" class="collab-logo" loading="lazy" />
        </div>
      ` : ''}
      <div class="collab-info">
        <h3 class="collab-inst">${collab.institution}</h3>
        <p class="collab-name">Partner: <strong>${collab.name}</strong></p>
        ${collab.location ? `<p class="collab-loc">${collab.location}</p>` : ''}
        <p class="collab-focus">${collab.focus}</p>
        ${collab.website ? `<a href="${collab.website}" class="collab-link" target="_blank" rel="noopener">Visit Lab Website &rarr;</a>` : ''}
      </div>
    </div>
  `;
}
