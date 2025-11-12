(function(){
  const root = document.documentElement;
  const menuBtn = document.getElementById('heroMenuBtn');
  const menu = document.getElementById('heroMenu');
  const themeToggle = document.getElementById('heroThemeToggle');
  const menuIcon = menuBtn?.querySelector('.menu-icon');
  const closeIcon = menuBtn?.querySelector('.close-icon');
  
  let isMenuOpen = false;
  let isLightMode = false;

  // Menu toggle
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      menu.style.display = isMenuOpen ? 'block' : 'none';
      if (menuIcon && closeIcon) {
        menuIcon.style.display = isMenuOpen ? 'none' : 'block';
        closeIcon.style.display = isMenuOpen ? 'block' : 'none';
      }
    });

    // Close menu when clicking links
    menu.querySelectorAll('.hero-menu-link').forEach(link => {
      link.addEventListener('click', () => {
        isMenuOpen = false;
        menu.style.display = 'none';
        if (menuIcon && closeIcon) {
          menuIcon.style.display = 'block';
          closeIcon.style.display = 'none';
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (isMenuOpen && !menu.contains(e.target) && !menuBtn.contains(e.target)) {
        isMenuOpen = false;
        menu.style.display = 'none';
        if (menuIcon && closeIcon) {
          menuIcon.style.display = 'block';
          closeIcon.style.display = 'none';
        }
      }
    });
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

