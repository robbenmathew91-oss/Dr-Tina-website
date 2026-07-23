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
          <img src="${faculty.photo || 'assets/images/placeholder.svg'}" alt="${faculty.name}" class="profile-photo" loading="lazy" />
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
        <img src="${student.photo || 'assets/images/placeholder.svg'}" alt="${student.name}" class="student-photo" loading="lazy" />
      </div>
      <div class="student-info">
        <h3 class="student-name">${student.name}</h3>
        <p class="student-role">${student.role}</p>
        <p class="student-year">Joined the Salguero Lab in ${student.joined_lab || student.yearStarted}</p>
        ${student.degree ? `<p class="student-degree-info" style="font-size: 0.85rem; color: var(--primary); font-weight: 500; margin-bottom: 4px;">${student.degree}, ${student.degree_institution} (${student.degree_year})</p>` : ''}
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
      <div class="alumni-flex-container" style="display: flex; gap: 15px; align-items: flex-start;">
        ${alumnus.photo ? `
          <div class="alumni-photo-container" style="flex-shrink: 0; width: 60px; height: 60px; border-radius: 50%; overflow: hidden; border: 1px solid var(--border);">
            <img src="${alumnus.photo}" alt="${alumnus.name}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" />
          </div>
        ` : ''}
        <div style="flex-grow: 1;">
          <div class="alumni-header">
            <h3 class="alumni-name">${alumnus.name}, <span class="alumni-degree">${alumnus.degree}</span></h3>
            <span class="alumni-year">Class of ${alumnus.graduationYear}</span>
          </div>
          <div class="alumni-body">
            <p class="alumni-joined" style="font-size: 0.85rem; color: var(--light-gray); margin-bottom: 2px;">Joined the Salguero Lab in ${alumnus.joined_lab}</p>
            <p class="alumni-graduated" style="font-size: 0.85rem; color: var(--light-gray); margin-bottom: 4px;">Graduated in ${alumnus.graduated_year}</p>
            ${alumnus.degree_institution ? `<p class="alumni-degree-info" style="font-size: 0.85rem; color: var(--primary); font-weight: 500; margin-bottom: 6px;">${alumnus.degree}, ${alumnus.degree_institution} (${alumnus.degree_year})</p>` : ''}
            ${alumnus.thesisTitle ? `<p class="alumni-thesis"><strong>Thesis:</strong> "${alumnus.thesisTitle}"</p>` : ''}
            <p class="alumni-current"><strong>Current:</strong> ${alumnus.currentPosition}</p>
            ${alumnus.linkedin ? `<a href="${alumnus.linkedin}" class="alumni-linkedin-link" target="_blank" rel="noopener">LinkedIn Profile &rarr;</a>` : ''}
          </div>
        </div>
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
  const highlightAuthor = (authors) => {
    const regex = /(Tina T\. Salguero|Tina Salguero|T\. T\. Salguero|T\. Salguero|Salguero, T\. T\.|Salguero, T\.|Trnka, T\. M\.|T\. M\. Trnka|Trnka, T\.)/g;
    return authors.replace(regex, '<strong>$1</strong>');
  };

  const keywordsList = (pub.keywords || [])
    .map(kw => `<span class="pub-keyword">${kw}</span>`)
    .join('');

  return `
    <div class="publication-card ${pub.featured ? 'featured-pub' : ''}" id="publication-${pub.id}" data-featured="${pub.featured || false}">
      ${pub.featured ? '<div class="pub-featured-tag">★ Featured Publication</div>' : ''}
      
      <div class="pub-meta-row">
        <div class="pub-badges">
          <span class="pub-badge category-badge">${pub.research_category}</span>
          <span class="pub-badge type-badge">${pub.publication_type}</span>
          <span class="pub-year-badge">${pub.year}</span>
        </div>
        
        <!-- Future Ready Placeholder: Altmetric and Citation Count -->
        <div class="pub-future-metrics">
          <span class="pub-metric-badge citation-count-stub" title="Citations (Coming Soon)">
            <svg viewBox="0 0 24 24" class="metric-icon" style="width: 14px; height: 14px; fill: currentColor; display: inline-block; vertical-align: middle; margin-right: 3px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            <span class="stub-val">--</span>
          </span>
          <span class="pub-metric-badge altmetric-stub" title="Altmetric (Coming Soon)">
            <span class="altmetric-donut-stub" style="width: 12px; height: 12px; border-radius: 50%; border: 2px solid var(--primary); display: inline-block; vertical-align: middle; margin-right: 3px;"></span>
            <span class="stub-val">--</span>
          </span>
        </div>
      </div>

      <h3 class="pub-title">${pub.title}</h3>
      <p class="pub-authors">${highlightAuthor(pub.authors)}</p>
      
      <p class="pub-journal-details">
        <span class="pub-journal-name">${pub.journal}</span>${pub.volume ? `, <strong>Vol. ${pub.volume}</strong>` : ''}${pub.issue ? `, Issue ${pub.issue}` : ''}${pub.pages ? `, Pages ${pub.pages}` : ''}
      </p>

      <div class="pub-actions">
        <a href="https://doi.org/${pub.doi}" class="pub-link-btn" target="_blank" rel="noopener" aria-label="DOI Link for ${pub.title}">
          DOI: ${pub.doi}
        </a>
        <a href="${pub.link}" class="pub-link-btn read-btn" target="_blank" rel="noopener" aria-label="Read paper: ${pub.title}">
          Read Paper &rarr;
        </a>
        
        ${pub.abstract ? `
          <button class="pub-toggle-btn abstract-btn" onclick="toggleDetails('pub-abstract-${pub.id}')" aria-expanded="false" aria-controls="pub-abstract-${pub.id}">
            View Abstract
          </button>
        ` : ''}
        
        ${keywordsList ? `
          <button class="pub-toggle-btn keywords-btn" onclick="toggleDetails('pub-keywords-${pub.id}')" aria-expanded="false" aria-controls="pub-keywords-${pub.id}">
            Keywords
          </button>
        ` : ''}
      </div>

      <!-- Expandable Abstract Panel -->
      ${pub.abstract ? `
        <div class="pub-abstract-panel hidden" id="pub-abstract-${pub.id}">
          <hr style="border: 0; border-top: 1px solid var(--border); margin: 10px 0;" />
          <p class="abstract-text"><strong>Abstract:</strong> ${pub.abstract}</p>
        </div>
      ` : ''}

      <!-- Expandable Keywords Panel -->
      ${keywordsList ? `
        <div class="pub-keywords-panel hidden" id="pub-keywords-${pub.id}">
          <hr style="border: 0; border-top: 1px solid var(--border); margin: 10px 0;" />
          <div class="pub-keywords-list">
            <strong>Keywords:</strong> ${keywordsList}
          </div>
        </div>
      ` : ''}

      <!-- Future Ready Placeholder: Citation & Bibliography export hooks -->
      <div class="pub-future-actions" style="margin-top: 12px; display: flex; gap: 15px; font-size: 0.75rem; color: var(--light-gray);">
        <button class="export-bibtex-stub" onclick="alert('BibTeX export is coming soon!')" style="background: none; border: none; padding: 0; color: var(--primary); cursor: pointer; text-decoration: underline; font-size: 0.75rem;">
          Cite (BibTeX)
        </button>
        <button class="copy-apa-stub" onclick="alert('ACS/APA Citation copy is coming soon!')" style="background: none; border: none; padding: 0; color: var(--primary); cursor: pointer; text-decoration: underline; font-size: 0.75rem;">
          Copy Citation
        </button>
        <a href="#" class="pdf-download-stub" onclick="alert('PDF download is coming soon!'); return false;" style="color: var(--primary); text-decoration: underline;">
          Download PDF
        </a>
      </div>
    </div>
  `;
}

/**
 * Render Grant Card
 */
export function GrantCard(grant, relations = {}) {
  const statusClass = grant.status.toLowerCase() === 'active' ? 'status-active' : 'status-completed';
  
  const techniquesList = (grant.techniques || [])
    .map(t => `<span class="technique-tag">${t}</span>`)
    .join('');

  const applicationsList = (grant.applications || [])
    .map(a => `<span class="application-tag">${a}</span>`)
    .join('');

  // Resolve dynamic relationships from parameters
  const linkedProjects = relations.projects || [];
  const linkedPublications = relations.publications || [];
  const linkedCollaborators = relations.collaborators || [];

  const projectsMarkup = linkedProjects.length > 0
    ? linkedProjects.map(p => `
        <div style="font-size: 0.85rem; margin-bottom: 6px; padding: 8px; border: 1px dashed var(--border); border-radius: 4px; background: var(--bg-offset);">
          <strong>${p.title}</strong>
        </div>
      `).join('')
    : '';

  const publicationsMarkup = linkedPublications.length > 0
    ? `<ul style="list-style: none; padding-left: 0; margin-bottom: 0;">` + 
      linkedPublications.map(pub => `
        <li style="font-size: 0.85rem; margin-bottom: 6px; line-height: 1.3;">
          "${pub.title}" (<em>${pub.journal}</em>, ${pub.year})
        </li>
      `).join('') + `</ul>`
    : '';

  const collaboratorsMarkup = linkedCollaborators.length > 0
    ? linkedCollaborators.map(c => `
        <div style="font-size: 0.82rem; color: var(--light-gray); margin-bottom: 4px;">
          • ${c.name} (${c.institution})
        </div>
      `).join('')
    : '';

  return `
    <div class="grant-card ${grant.status.toLowerCase()}" id="grant-${grant.id}">
      <div class="grant-header">
        <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 10px;">
          <span class="grant-status ${statusClass}">${grant.status}</span>
          <span class="pub-badge category-badge" style="text-transform: uppercase;">${grant.research_theme || 'Research'}</span>
        </div>
        <h3 class="grant-title" style="font-family: var(--font-heading); color: var(--dark); font-size: 1.25rem; margin-top: 5px; margin-bottom: 10px; line-height: 1.3;">
          ${grant.title}
        </h3>
      </div>

      <div class="grant-agency-row" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; border-bottom: 1px solid var(--border); padding-bottom: 10px;">
        <div>
          <p style="margin: 0; font-size: 0.95rem; font-weight: 600; color: var(--dark-gray);">${grant.agency}</p>
          <p style="margin: 0; font-size: 0.8rem; color: var(--light-gray);">Award #: ${grant.grantNumber || 'N/A'} | PI: ${grant.principalInvestigator}</p>
        </div>
        <div class="grant-agency-logo-stub" style="width: 45px; height: 45px; border-radius: 50%; background: #ECEFF1; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700; color: var(--light-gray);" title="${grant.agency}">
          ${grant.agency.split(' ')[0]}
        </div>
      </div>

      <div class="grant-body">
        <p style="font-size: 0.92rem; line-height: 1.5; color: var(--dark-gray); margin-bottom: 12px;">
          ${grant.summary}
        </p>

        <div style="margin-bottom: 12px; font-size: 0.9rem; color: var(--dark-gray); background: #FFFDF0; border-left: 2px solid #D4AF37; padding: 8px 12px; border-radius: 0 4px 4px 0;">
          <strong>Scientific Impact:</strong> ${grant.scientific_impact}
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;" class="theme-cols-2">
          <div>
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--light-gray); text-transform: uppercase;">Enabled Techniques</span>
            <div class="techniques-list" style="margin-top: 5px;">${techniquesList}</div>
          </div>
          <div>
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--light-gray); text-transform: uppercase;">Enabled Applications</span>
            <div class="applications-list" style="margin-top: 5px;">${applicationsList}</div>
          </div>
        </div>

        <!-- Collapsible Relationships Panel -->
        <button class="pub-toggle-btn" onclick="toggleDetails('grant-details-panel-${grant.id}')" style="margin-top: 5px;" aria-expanded="false" aria-controls="grant-details-panel-${grant.id}">
          Explore Linked Projects & Publications
        </button>

        <div class="pub-abstract-panel hidden" id="grant-details-panel-${grant.id}">
          <hr style="border: 0; border-top: 1px solid var(--border); margin: 10px 0;" />
          
          ${projectsMarkup ? `
            <div style="margin-bottom: 12px;">
              <span style="font-size: 0.78rem; font-weight: 700; color: var(--light-gray); text-transform: uppercase; display: block; margin-bottom: 5px;">Supported Lab Projects</span>
              ${projectsMarkup}
            </div>
          ` : ''}

          ${publicationsMarkup ? `
            <div style="margin-bottom: 12px;">
              <span style="font-size: 0.78rem; font-weight: 700; color: var(--light-gray); text-transform: uppercase; display: block; margin-bottom: 5px;">Resulting Publications</span>
              ${publicationsMarkup}
            </div>
          ` : ''}

          ${collaboratorsMarkup ? `
            <div>
              <span style="font-size: 0.78rem; font-weight: 700; color: var(--light-gray); text-transform: uppercase; display: block; margin-bottom: 5px;">Key Collaborations</span>
              ${collaboratorsMarkup}
            </div>
          ` : ''}
        </div>
      </div>

      <!-- Future Ready Placeholder: Annual Reports, Award Amount details -->
      <div class="pub-future-actions" style="margin-top: 15px; display: flex; gap: 15px; font-size: 0.72rem; color: var(--light-gray); border-top: 1px dashed var(--border); padding-top: 10px;">
        <span><strong>Funding Amount:</strong> ${grant.amount || 'N/A'}</span>
        <span>•</span>
        <button class="export-bibtex-stub" onclick="alert('Annual Reports download is coming soon!')" style="background: none; border: none; padding: 0; color: var(--primary); cursor: pointer; text-decoration: underline; font-size: 0.72rem;">
          Annual Reports
        </button>
        <span>•</span>
        <button class="copy-apa-stub" onclick="alert('Official Agency project link is coming soon!')" style="background: none; border: none; padding: 0; color: var(--primary); cursor: pointer; text-decoration: underline; font-size: 0.72rem;">
          Agency Award Page
        </button>
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
