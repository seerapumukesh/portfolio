// Render PROJECTS
const projectGrid = document.getElementById('projectGrid');
if (projectGrid && typeof PROJECTS !== 'undefined') {
  projectGrid.innerHTML = PROJECTS.map(p => `
    <a class="project-card" href="${p.url}" target="_blank" rel="noopener">
      <div class="project-card-top">
        <span class="project-name">${escapeHtml(p.name)}</span>
        <span class="project-status ${p.status === 'archived' ? 'project-status--archived' : ''}">${escapeHtml(p.status)}</span>
      </div>
      <p class="project-tagline">${escapeHtml(p.tagline)}</p>
      <p class="project-desc">${escapeHtml(p.description)}</p>
      <div class="tag-row">
        ${p.stack.map(s => `<span class="tag">${escapeHtml(s)}</span>`).join('')}
      </div>
      <span class="project-year">${escapeHtml(p.year)}</span>
    </a>
  `).join('');
}

// Render ARTICLES
const articleList = document.getElementById('articleList');
if (articleList && typeof ARTICLES !== 'undefined') {
  articleList.innerHTML = ARTICLES
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map(a => `
      <a class="article-item" href="${a.url}" target="_blank" rel="noopener">
        <div>
          <span class="article-date">${formatDate(a.date)}</span>
          <span class="article-tag">${escapeHtml(a.tag)}</span>
        </div>
        <div>
          <h3 class="article-title">${escapeHtml(a.title)}</h3>
          <p class="article-excerpt">${escapeHtml(a.excerpt)}</p>
        </div>
      </a>
    `).join('');
}

function formatDate(iso) {
  const d = new Date(iso);
  if (isNaN(d)) return iso;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav toggle (progressive enhancement — nav links are hidden below 860px;
// this reveals them as a simple dropdown)
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('nav-links--open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}
