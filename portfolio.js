const esc = (value) => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const safeUrl = value => { try { const url = new URL(value); return url.protocol === 'https:' ? url.href : null; } catch { return null; } };
const workGrid = document.querySelector('#work-grid');
if (workGrid) {
  const works = window.PORTFOLIO_WORK || [];
  workGrid.innerHTML = works.map(work => `<article class="work-card" data-category="${esc(work.category)}" id="${esc(work.id)}">
    <div class="work-visual visual-${esc(work.id)}"><span class="work-index">${esc(work.number)} / SELECTED WORK</span><strong>${esc(work.metric)}</strong><span>${esc(work.metricLabel)}</span><div class="visual-rule" aria-hidden="true"></div></div>
    <div class="work-body"><p class="eyebrow">${esc(work.label)}</p><h3>${esc(work.title)}</h3><p>${esc(work.summary)}</p><div class="tags">${work.stack.map(tag => `<span>${esc(tag)}</span>`).join('')}</div>
    <details><summary>Explore case study<span aria-hidden="true">+</span></summary><div class="case-content"><h4>The business question</h4><p>${esc(work.question)}</p><h4>My approach</h4><p>${esc(work.approach)}</p><h4>The result</h4><p>${esc(work.result)}</p><p class="evidence">${esc(work.evidence)}</p></div></details></div></article>`).join('');
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    let count = 0;
    workGrid.querySelectorAll('[data-category]').forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; if (!card.hidden) count++; });
    document.querySelector('#filter-status').textContent = `${count} case ${count === 1 ? 'study' : 'studies'} shown`;
  }));
}
const reports = (window.PORTFOLIO_REPORTS || []).filter(report => safeUrl(report.url));
const reportGrid = document.querySelector('#report-grid');
if (reportGrid && reports.length) {
  document.querySelector('#report-gallery').hidden = false;
  reportGrid.innerHTML = reports.map(report => `<article class="report-card">${report.image ? `<img src="${esc(report.image)}" alt="${esc(report.imageAlt || report.title)}" loading="lazy" width="1900" height="1127">` : ''}<div class="work-body"><p class="eyebrow">${esc(report.tool)}</p><h3>${esc(report.title)}</h3><p>${esc(report.question)}</p><h4>Approach</h4><p>${esc(report.approach)}</p><h4>What to explore</h4><p>${esc(report.insight)}</p><a class="text-link" href="${esc(safeUrl(report.url))}" target="_blank" rel="noopener noreferrer">Open interactive report <span class="sr-only">(opens in a new tab)</span></a></div></article>`).join('');
}
const toggle = document.querySelector('#navToggle');
const navigation = document.querySelector('#primary-nav');
if (toggle && navigation) {
  const closeMenu = () => { toggle.setAttribute('aria-expanded', 'false'); navigation.classList.remove('is-open'); };
  toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('is-open', open); });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
}
document.querySelectorAll('[data-year]').forEach(item => { item.textContent = new Date().getFullYear(); });

