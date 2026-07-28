// Render PROJECTS
const projectGrid = document.getElementById('projectGrid');
if (projectGrid && typeof PROJECTS !== 'undefined') {
  projectGrid.innerHTML = PROJECTS.map(p => `
    <div class="project-card">
      <div class="project-head">
        <span>${escapeHtml(p.sheet)}</span>
        <span>${escapeHtml(p.status)} · ${escapeHtml(p.year)}</span>
      </div>
      <div class="project-body">
        <h3 class="project-name">${escapeHtml(p.name)}</h3>
        <ul class="project-highlights">
          ${p.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join('')}
        </ul>
        <div class="tag-row">
          ${p.stack.map(s => `<span class="tag">${escapeHtml(s)}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// Render ARTICLES
const articleList = document.getElementById('articleList');
if (articleList && typeof ARTICLES !== 'undefined') {
  articleList.innerHTML = ARTICLES
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map(a => `
      <a class="article-item" href="${a.url}">
        <span class="article-date">${formatDate(a.date)}</span>
        <div>
          <span class="article-tag">${escapeHtml(a.tag)}</span>
          <h3 class="article-title">${escapeHtml(a.title)}</h3>
          <p class="article-excerpt">${escapeHtml(a.excerpt)}</p>
        </div>
        <span class="article-go">Read &#8594;</span>
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

// Footer year + last-updated stamp
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const lastUpdatedEl = document.getElementById('lastUpdated');
if (lastUpdatedEl) {
  lastUpdatedEl.textContent = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('nav-links--open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}
