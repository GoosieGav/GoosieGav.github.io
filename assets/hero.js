(function(){
  const root = document.documentElement;
  const themeToggle = document.getElementById('heroThemeToggle');
  const signature = document.getElementById('heroSignature');
  const tubelightNav = document.getElementById('tubelightNav');
  
  let isLightMode = false;

  // Hide signature on scroll
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (signature) {
      if (currentScroll > 100) {
        signature.classList.add('hidden');
      } else {
        signature.classList.remove('hidden');
      }
    }
    
    lastScroll = currentScroll;
  });

  // Tubelight navbar active state
  if (tubelightNav) {
    const navLinks = tubelightNav.querySelectorAll('a');
    const navIndicator = tubelightNav.querySelector('.nav-indicator');
    const navWrapper = tubelightNav.querySelector('.nav-links');

    function moveIndicator(target){
      if(!navIndicator || !navWrapper || !target) return;
      const targetRect = target.getBoundingClientRect();
      const wrapperRect = navWrapper.getBoundingClientRect();
      const width = targetRect.width;
      const left = targetRect.left - wrapperRect.left;
      navIndicator.style.setProperty('--indicator-x', `${left}px`);
      navIndicator.style.setProperty('--indicator-scale', width);
    }

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        moveIndicator(link);
      });
    });

    window.addEventListener('resize', () => {
      const active = tubelightNav.querySelector('a.active');
      moveIndicator(active);
    });

    // Update active state on scroll
    const sections = Array.from(navLinks).map(link => {
      const href = link.getAttribute('href');
      return href.startsWith('#') ? document.querySelector(href) : null;
    }).filter(Boolean);

    window.addEventListener('scroll', () => {
      const scrollPos = window.pageYOffset + 150;
      
      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(l => l.classList.remove('active'));
            navLinks[index]?.classList.add('active');
            moveIndicator(navLinks[index]);
          }
        }
      });
    });

    // Initialize indicator position
    const initialActive = tubelightNav.querySelector('a.active') || navLinks[0];
    moveIndicator(initialActive);
  }

  // Theme toggle
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      isLightMode = !isLightMode;
      if (isLightMode) {
        root.classList.add('hero-light');
      } else {
        root.classList.remove('hero-light');
      }
    });
  }

  // Smooth scroll for hero scroll button
  const scrollBtn = document.querySelector('.hero-scroll');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // Also smooth scroll for menu links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#hero') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Intersection Observer for blur animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.filter = 'blur(0)';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.blur-text').forEach(el => {
    observer.observe(el);
  });
})();

