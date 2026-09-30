const grid = document.getElementById('blogGrid');
if(grid && typeof ARTICLES !== 'undefined') {
 const escape = value => { const el=document.createElement('span'); el.textContent=value; return el.innerHTML; };
 grid.innerHTML = ARTICLES.slice().sort((a,b)=>b.date.localeCompare(a.date)).map(a=>`<a class="blog-card" href="${escape(a.url)}"><span class="blog-tag">${escape(a.tag)}</span><h3 class="blog-title">${escape(a.title)}</h3><p class="blog-excerpt">${escape(a.excerpt)}</p><div class="blog-meta"><span>${new Date(a.date+'T12:00:00Z').toLocaleDateString('en-US',{year:'numeric',month:'short',timeZone:'UTC'})}</span><span>Read note</span></div></a>`).join('');
}