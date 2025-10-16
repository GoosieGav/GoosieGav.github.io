(function(){
  // Global maintenance redirect (except for maintenance.html itself)
  try{
    var isMaintenance = /maintenance\.html(\?.*)?$/.test(location.pathname) || location.pathname.endsWith('/') && location.href.includes('maintenance=true');
    if (!isMaintenance && typeof window !== 'undefined'){
      // Toggle this flag to enable/disable maintenance across all routes
      var MAINTENANCE_MODE = true;
      if (MAINTENANCE_MODE){
        var target = (location.pathname.startsWith('/projects/') || location.pathname.endsWith('portfolio.html')) ? '../maintenance.html' : 'maintenance.html';
        location.replace(target + '?v=1');
        return;
      }
    }
  }catch(e){}
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');

  const preferred = localStorage.getItem('theme')
    || (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  function apply(theme){
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
    if(btn) btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  }
  apply(preferred);

  if (btn){
    btn.addEventListener('click', () => {
      apply(root.classList.contains('dark') ? 'light' : 'dark');
    });
  }

  // Simple portfolio filtering
  const chips = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('[data-tags]');
  chips.forEach(chip=>{
    chip.addEventListener('click',()=>{
      const f = chip.dataset.filter;
      chips.forEach(c=>c.classList.remove('active'));
      chip.classList.add('active');
      cards.forEach(card=>{
        const tags = (card.dataset.tags||'').split(',').map(s=>s.trim());
        const show = f==='all' || tags.includes(f);
        card.style.display = show ? '' : 'none';
      });
    });
  });
})();

