(function(){
  // Intersection Observer for reveal animations
  const observer = new IntersectionObserver((entries)=>{
    for (const entry of entries){
      if (entry.isIntersecting){
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    }
  },{threshold:0.12});
  document.querySelectorAll('.reveal-on-scroll').forEach(el=>observer.observe(el));

  // Carousel
  const track = document.querySelector('.carousel-track');
  if (!track) return;
  const items = Array.from(track.querySelectorAll('.carousel-item'));
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const dotsEl = document.querySelector('.carousel-dots');
  let index = 0;
  let autoTimer = 0;

  function updateDots(){
    dotsEl.innerHTML = '';
    items.forEach((_,i)=>{
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', `Go to slide ${i+1}`);
      if (i===index) b.setAttribute('aria-current','true');
      b.addEventListener('click',()=>goTo(i));
      dotsEl.appendChild(b);
    });
  }
  function goTo(i){
    index = (i+items.length)%items.length;
    track.scrollTo({left: items[index].offsetLeft, behavior:'smooth'});
    updateDots();
    restartAuto();
  }
  function next(){ goTo(index+1); }
  function prev(){ goTo(index-1); }

  prevBtn && prevBtn.addEventListener('click', prev);
  nextBtn && nextBtn.addEventListener('click', next);
  updateDots();

  function restartAuto(){
    clearInterval(autoTimer);
    autoTimer = setInterval(next, 4000);
  }
  restartAuto();

  // Touch gestures
  let startX = 0, dx = 0;
  track.addEventListener('touchstart', (e)=>{
    startX = e.touches[0].clientX; dx = 0; clearInterval(autoTimer);
  }, {passive:true});
  track.addEventListener('touchmove', (e)=>{
    dx = e.touches[0].clientX - startX;
  }, {passive:true});
  track.addEventListener('touchend', ()=>{
    if (Math.abs(dx) > 40){ dx < 0 ? next() : prev(); }
    restartAuto();
  });

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const lbImg = lightbox.querySelector('.lightbox-img');
  const lbClose = lightbox.querySelector('.lightbox-close');
  const lbPrev = lightbox.querySelector('.lightbox-prev');
  const lbNext = lightbox.querySelector('.lightbox-next');

  function openLightbox(i){
    index = i;
    lbImg.src = items[index].src;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden','false');
  }
  function closeLightbox(){
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden','true');
  }
  items.forEach((img,i)=>{
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', ()=>openLightbox(i));
  });
  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', ()=>{ prev(); lbImg.src = items[index].src; });
  lbNext.addEventListener('click', ()=>{ next(); lbImg.src = items[index].src; });
  document.addEventListener('keydown', (e)=>{
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft'){ prev(); lbImg.src = items[index].src; }
    if (e.key === 'ArrowRight'){ next(); lbImg.src = items[index].src; }
  });
})();


