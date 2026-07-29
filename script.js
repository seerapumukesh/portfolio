// ---------- Projects ----------
const projectGrid = document.getElementById('projectGrid');
if (projectGrid && typeof PROJECTS !== 'undefined') {
  projectGrid.innerHTML = PROJECTS.map(p => `
    <div class="project-card reveal">
      <div class="project-top">
        <span class="status-pill status-pill--live">${escapeHtml(p.status)}</span>
        <span class="project-year">${escapeHtml(p.year)}</span>
      </div>
      <h3 class="project-name">${escapeHtml(p.name)}</h3>
      <ul class="project-highlights">
        ${p.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join('')}
      </ul>
      <div class="tag-row">${p.stack.map(s => `<span class="tag">${escapeHtml(s)}</span>`).join('')}</div>
    </div>
  `).join('');
}

// ---------- Blog ----------
const blogGrid = document.getElementById('blogGrid');
if (blogGrid && typeof ARTICLES !== 'undefined') {
  blogGrid.innerHTML = ARTICLES
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map(a => `
      <a class="blog-card reveal" href="${a.url}">
        <span class="blog-tag">${escapeHtml(a.tag)}</span>
        <h3 class="blog-title">${escapeHtml(a.title)}</h3>
        <p class="blog-excerpt">${escapeHtml(a.excerpt)}</p>
        <div class="blog-meta"><span>${formatDate(a.date)}</span><span class="blog-go">Read →</span></div>
      </a>
    `).join('');
}

// ---------- Skills filter ----------
const skillFilters = document.getElementById('skillFilters');
const skillCloud = document.getElementById('skillCloud');
if (skillFilters && skillCloud && typeof SKILLS !== 'undefined') {
  const cats = ['All', ...new Set(SKILLS.map(s => s.cat))];
  skillFilters.innerHTML = cats.map((c, i) => `
    <button type="button" class="filter-btn${i === 0 ? ' is-active' : ''}" data-cat="${escapeHtml(c)}">${escapeHtml(c)}</button>
  `).join('');
  skillCloud.innerHTML = SKILLS.map(s => `
    <span class="skill-chip" data-cat="${escapeHtml(s.cat)}">${escapeHtml(s.name)}</span>
  `).join('');

  skillFilters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    skillFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const cat = btn.dataset.cat;
    skillCloud.querySelectorAll('.skill-chip').forEach(chip => {
      chip.hidden = !(cat === 'All' || chip.dataset.cat === cat);
    });
  });
}

// ---------- helpers ----------
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

// ---------- footer year ----------
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---------- mobile nav ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('nav-links--open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('nav-links--open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));
}

// ---------- scroll reveal ----------
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}

// ---------- animated stat counters ----------
const statEls = document.querySelectorAll('.stat-num');
if ('IntersectionObserver' in window && statEls.length) {
  const counted = new WeakSet();
  const statIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted.has(entry.target)) {
        counted.add(entry.target);
        animateCount(entry.target);
      }
    });
  }, { threshold: 0.4 });
  statEls.forEach(el => statIo.observe(el));
} else {
  statEls.forEach(el => {
    el.textContent = el.dataset.count + (el.dataset.suffix || '');
  });
}

function animateCount(el) {
  const target = parseInt(el.dataset.count, 10) || 0;
  const suffix = el.dataset.suffix || '';
  const duration = 1200;
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const val = Math.round(target * eased);
    el.innerHTML = val + (suffix ? `<span class="suffix">${suffix}</span>` : '');
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
