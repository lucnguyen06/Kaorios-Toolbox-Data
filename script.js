/**
 * Kaorios Toolbox - Interactive Landing Page Logic
 * Features: Screenshot Showcase Switcher, Lightbox Zoom, Mobile Nav & Scroll FX
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking any nav link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // 2. Header Scroll Effect & Back-to-Top Button
  const siteHeader = document.getElementById('site-header');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if (siteHeader) {
      if (scrollPos > 30) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollPos > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 3. Interactive Showcase Tab Switcher
  const tabHome = document.getElementById('tab-btn-home');
  const tabTools = document.getElementById('tab-btn-tools');
  const showcaseImg = document.getElementById('showcase-img');
  const showcaseTitle = document.getElementById('showcase-title');
  const showcaseDesc = document.getElementById('showcase-desc');
  const showcaseList = document.getElementById('showcase-list');
  const showcaseFrame = document.getElementById('showcase-frame');

  const showcaseData = {
    home: {
      img: 'Toolbox-screenshots/Homenew.png?v=2',
      title: 'Home Dashboard — Real-time Device Diagnostics',
      desc: 'Comprehensive hardware telemetry at your fingertips: RAM utilization, storage metrics, battery health and charge state, chipset identification (Snapdragon SM8850), live weather, and OS build information.',
      bullets: [
        'Live RAM and storage capacity consumption indicators',
        'Battery temperature and charging status telemetry',
        'Customizable galaxy cosmic header theme',
        'Detailed manufacturer, brand, and device identifiers'
      ]
    },
    tools: {
      img: 'Toolbox-screenshots/Toolsnew.png?v=2',
      title: 'System Tools — Comprehensive Fixes & Utilities',
      desc: 'Your complete toolkit for Android system mastery: bypass Play Integrity, configure per-app spoofing, unlock high-FPS modes, extract OTA payloads, and monitor performance.',
      bullets: [
        '100% Play Integrity pass: MEETS_BASIC, DEVICE, and STRONG',
        'Per-app model & build property spoofing manager',
        'On-device Payload Dumper for OTA partition extraction',
        'Real-time floating FPS, CPU load, and refresh rate HUD',
        'Hidden features: Hide Developer Options and app lists'
      ]
    }
  };

  function updateShowcase(tabKey) {
    const data = showcaseData[tabKey];
    if (!data) return;

    // Smooth fade effect
    if (showcaseFrame) {
      showcaseFrame.style.opacity = '0.3';
      showcaseFrame.style.transform = 'scale(0.97)';
    }

    setTimeout(() => {
      if (showcaseImg) showcaseImg.src = data.img;
      if (showcaseTitle) showcaseTitle.textContent = data.title;
      if (showcaseDesc) showcaseDesc.textContent = data.desc;
      
      if (showcaseList) {
        showcaseList.innerHTML = data.bullets
          .map(b => `<li><span class="bullet-check">✓</span> ${b}</li>`)
          .join('');
      }

      if (showcaseFrame) {
        showcaseFrame.style.opacity = '1';
        showcaseFrame.style.transform = 'scale(1)';
      }
    }, 180);
  }

  if (tabHome && tabTools) {
    tabHome.addEventListener('click', () => {
      tabHome.classList.add('active');
      tabTools.classList.remove('active');
      updateShowcase('home');
    });

    tabTools.addEventListener('click', () => {
      tabTools.classList.add('active');
      tabHome.classList.remove('active');
      updateShowcase('tools');
    });
  }

  // 4. Lightbox Modal for Screenshots
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  function openLightbox(src) {
    if (lightboxModal && lightboxImg) {
      lightboxImg.src = src;
      lightboxModal.classList.add('active');
      lightboxModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLightbox() {
    if (lightboxModal) {
      lightboxModal.classList.remove('active');
      lightboxModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // Bind zoom to hero phones and showcase frame
  const heroCardHome = document.getElementById('card-hero-home');
  const heroCardTools = document.getElementById('card-hero-tools');

  if (heroCardHome) {
    heroCardHome.addEventListener('click', () => {
      const img = heroCardHome.querySelector('img');
      if (img) openLightbox(img.src);
    });
  }

  if (heroCardTools) {
    heroCardTools.addEventListener('click', () => {
      const img = heroCardTools.querySelector('img');
      if (img) openLightbox(img.src);
    });
  }

  if (showcaseFrame) {
    showcaseFrame.addEventListener('click', () => {
      const img = showcaseFrame.querySelector('img');
      if (img) openLightbox(img.src);
    });
  }
});
