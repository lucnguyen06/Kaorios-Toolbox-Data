/**
 * Kaorios Toolbox - Interactive Landing Page Logic
 * Features: 14-Screens Spotlight & Gallery, Filter Tabs, Lightbox Slider, Mobile Nav & Scroll FX
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. Mobile Menu Toggle
  // ==========================================================================
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // ==========================================================================
  // 2. Header Scroll Effect & Back-to-Top Button
  // ==========================================================================
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

  // ==========================================================================
  // 3. Complete Dataset of All 14 App Screenshots
  // ==========================================================================
  const screensData = [
    {
      id: '01',
      src: 'Toolbox-screenshots/01-main-home-screen.png',
      category: 'core',
      categoryLabel: 'Core Dashboard',
      title: 'Home Dashboard — Real-time Device Diagnostics',
      desc: 'Real-time hardware statistics at your fingertips: RAM utilization, storage metrics, battery health and charge state, chipset identification (Snapdragon SM8850), live weather, and OS build info.',
      bullets: [
        'Live RAM and internal storage consumption meters',
        'Battery health, temperature, and charging status telemetry',
        'Customizable cosmic galaxy header theme',
        'Detailed manufacturer, brand, and device identifiers'
      ]
    },
    {
      id: '02',
      src: 'Toolbox-screenshots/02-navigation-menu.png',
      category: 'core',
      categoryLabel: 'System Tools Hub',
      title: 'System Tools Hub — Master Control Center',
      desc: 'Central command center providing immediate access to Integrity Fix, Features manager, Spoofing App, Payload Dumper, FPS & CPU HUD overlay, and Hidden features.',
      bullets: [
        'Instant access to all core tweaking modules',
        'Data version indicator with real-time update notifications',
        'Live Keybox verification status: Keybox Working!',
        'Clean, accessible layout with dark mode aesthetic'
      ]
    },
    {
      id: '03',
      src: 'Toolbox-screenshots/03-content-list.png',
      category: 'integrity',
      categoryLabel: 'Play Integrity',
      title: 'Play Integrity — Target App Manager & PIF',
      desc: 'Granular package selection and PIF configuration. Choose target applications that require custom Keybox attestation such as Google Play Services (GMS), Google Wallet, and Google Play Store.',
      bullets: [
        'Target list management: add, delete, or reconfigure apps',
        'Independent key assignment modes: Auto, Leaf, or Gen',
        'Export, Import, Save, and Reload PIF configurations',
        'Automatic updates with optional manual fine-tuning'
      ]
    },
    {
      id: '04',
      src: 'Toolbox-screenshots/04-post-details.png',
      category: 'integrity',
      categoryLabel: 'Play Integrity',
      title: 'Keybox XML & Security Patch Level',
      desc: 'Direct inspection of the injected Keybox certificate, active DeviceID (e.g. Nothing-73d32da724db), ECDSA algorithm verification, and security patch date alignment.',
      bullets: [
        'Verify active DeviceID signature matching valid attestation certificates',
        'Inspect ECDSA and RSA key validation counts',
        'Synchronize system security patch level dates seamlessly',
        'One-click Import & Export for fast Keybox certificate swapping'
      ]
    },
    {
      id: '05',
      src: 'Toolbox-screenshots/05-app-settings.png',
      category: 'tweaks',
      categoryLabel: 'System Tweaks',
      title: 'Features Manager — Global System Switches',
      desc: 'Master switches to activate system tweaks: Spoof GMS, Spoof Google Play Store, Spoof Keybox, Google Photos unlimited backup, Game build spoofing, and Disable Secure Flag.',
      bullets: [
        'Spoof GMS & Play Store with custom build properties',
        'Unlock unlimited original-quality photo backup for Google Photos',
        'Spoof game builds to unlock exclusive 90Hz/120Hz modes',
        'Bypass screenshot restrictions in all apps with Disable Secure Flag'
      ]
    },
    {
      id: '06',
      src: 'Toolbox-screenshots/06-profile-info.png',
      category: 'tweaks',
      categoryLabel: 'System Tweaks',
      title: 'Advanced UI Toggles & Visual Controls',
      desc: 'Subtle system enhancements including hiding the orientation rotation suggestion icon, visual touch points feedback, and system-wide screenshot allowance.',
      bullets: [
        'Keybox for all apps option with Leaf and Gen algorithm modes',
        'Hide annoying bottom-left rotation suggestion icon',
        'Toggle visual feedback for touch points on screen',
        'Safe system-level framework hooks with zero lag'
      ]
    },
    {
      id: '07',
      src: 'Toolbox-screenshots/07-advanced-search.png',
      category: 'games',
      categoryLabel: 'Game Spoofing',
      title: 'Per-App Game Spoofing — High-FPS Profiles',
      desc: 'Configure custom JSON hardware properties for specific titles including Free Fire MAX, Messenger, Liên Quân Mobile, and PUBG Mobile to unlock top-tier graphics and framerates.',
      bullets: [
        'Per-app property isolation: 2 props for Free Fire, 5 props for PUBG',
        'Unlock ultra graphics presets and 90/120 FPS frame caps',
        'Import & Export game spoof JSON configs for easy sharing',
        'Auto import presets tailored for popular competitive games'
      ]
    },
    {
      id: '08',
      src: 'Toolbox-screenshots/08-category-filter.png',
      category: 'payload',
      categoryLabel: 'Payload Dumper',
      title: 'Payload Dumper — On-Device OTA Partition Extractor',
      desc: 'Unpack payload.bin firmware archives directly on your phone. Extract critical partition images (boot.img, init_boot.img, recovery.img, vbmeta.img) from local files or remote URLs.',
      bullets: [
        'Extract OTA files from local storage or direct download URLs',
        'Full archive metadata inspection: file size, security patch level, name',
        'Selectively dump individual partitions without extracting the full ROM',
        'Zero PC required — perform firmware patching directly on Android'
      ]
    },
    {
      id: '09',
      src: 'Toolbox-screenshots/09-reading-interface.png',
      category: 'games',
      categoryLabel: 'Performance HUD',
      title: 'FPS & CPU Overlay — Live Performance HUD',
      desc: 'Floating in-game HUD telemetry displaying real-time FPS frame rates, CPU cores utilization, and device temperatures with Shizuku or direct Root permission support.',
      bullets: [
        'Real-time floating overlay over any game or benchmark app',
        'Monitor instantaneous frame rate drops and CPU throttling',
        'Compatible with both Shizuku (non-root) and direct Root access',
        'Low resource footprint to ensure zero gameplay disruption'
      ]
    },
    {
      id: '10',
      src: 'Toolbox-screenshots/10-favorites-bookmark.png',
      category: 'payload',
      categoryLabel: 'Anti-Detection',
      title: 'Hidden Features — Stealth & Anti-Detection',
      desc: 'Advanced privacy and stealth controls: hide Developer Options / ADB status from banking apps, and hide the installed app list to defeat intrusive root detection scans.',
      bullets: [
        'Hide Developer Status from selected sensitive applications',
        'Hide App List: prevent apps from scanning your installed root packages',
        'Targeted per-app stealth configuration',
        'Bypass advanced root and modification detection algorithms'
      ]
    },
    {
      id: '11',
      src: 'Toolbox-screenshots/11-comments-reviews.png',
      category: 'ui',
      categoryLabel: 'UI Themes',
      title: 'App Appearance — Visual Theme Styles',
      desc: 'Choose how Kaorios Toolbox renders its visual cards: Floating elevation, Smooth Gradient backdrops, or translucent Liquid Glass blur aesthetics.',
      bullets: [
        'Floating card style with elevated dimensional shadows',
        'Gradient mode with rich cosmic color transitions',
        'Liquid Glass mode with dynamic frosted glassmorphic blur',
        'Instantly applied without needing to restart the app'
      ]
    },
    {
      id: '12',
      src: 'Toolbox-screenshots/12-share-connect.png',
      category: 'ui',
      categoryLabel: 'UI Themes',
      title: 'Introduction Screen — Layout Styles',
      desc: 'Personalize the device introduction presentation card with design languages inspired by OxygenOS or HyperOS system aesthetics.',
      bullets: [
        'OxygenOS style: clean, minimalist typography and subtle card dividers',
        'HyperOS style: modern rounded glass tiles with vivid iconography',
        'Adapts seamlessly to your device hardware information',
        'Toggle layout styles with a single tap'
      ]
    },
    {
      id: '13',
      src: 'Toolbox-screenshots/13-notifications-updates.png',
      category: 'ui',
      categoryLabel: 'Personalization',
      title: 'Profile & Avatar Customization',
      desc: 'Personalize your in-app identity by selecting an avatar from your gallery, inputting a custom Telegram username, or syncing your Telegram profile picture.',
      bullets: [
        'Choose avatar photo directly from your local device gallery',
        'Quickly link your Telegram profile using username or t.me URL',
        'Toggle option to show or hide the avatar icon logo',
        'Saves your identity across all application modules'
      ]
    },
    {
      id: '14',
      src: 'Toolbox-screenshots/14-recent-history.png',
      category: 'ui',
      categoryLabel: 'Personalization',
      title: 'Card Wallpaper & Video Backgrounds',
      desc: 'Customize the prominent Home screen card with custom background images, animated looping videos, or the default cosmic galaxy artwork.',
      bullets: [
        'Pick custom high-resolution photos from your device gallery',
        'Support for dynamic looping video wallpapers',
        'One-tap restore to the signature Kaorios cosmic galaxy artwork',
        'Hardware-accelerated rendering for zero battery drain'
      ]
    }
  ];

  // ==========================================================================
  // 4. Render 14-Screens Gallery Grid
  // ==========================================================================
  const galleryGrid = document.getElementById('gallery-grid');
  let currentActiveId = '01';

  function renderGallery(filterCategory = 'all') {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';

    const filtered = filterCategory === 'all' 
      ? screensData 
      : screensData.filter(s => s.category === filterCategory);

    filtered.forEach(screen => {
      const card = document.createElement('div');
      card.className = `gallery-card ${screen.id === currentActiveId ? 'active-card' : ''}`;
      card.setAttribute('data-id', screen.id);
      card.setAttribute('title', `Click to view ${screen.title}`);

      card.innerHTML = `
        <div class="gallery-card-thumb">
          <img src="${screen.src}" alt="${screen.title}" loading="lazy">
        </div>
        <h4 class="gallery-card-title">${screen.title.split('—')[0].trim()}</h4>
        <span class="gallery-card-cat">${screen.categoryLabel}</span>
      `;

      card.addEventListener('click', () => {
        setSpotlight(screen.id);
        openLightboxById(screen.id);
      });

      galleryGrid.appendChild(card);
    });
  }

  // ==========================================================================
  // 5. Spotlight Display Switcher
  // ==========================================================================
  const showcaseImg = document.getElementById('showcase-img');
  const showcaseBadge = document.getElementById('showcase-badge');
  const showcaseTitle = document.getElementById('showcase-title');
  const showcaseDesc = document.getElementById('showcase-desc');
  const showcaseList = document.getElementById('showcase-list');
  const showcaseFrame = document.getElementById('showcase-frame');

  function setSpotlight(screenId) {
    currentActiveId = screenId;
    const data = screensData.find(s => s.id === screenId);
    if (!data) return;

    // Highlight active card in gallery
    document.querySelectorAll('.gallery-card').forEach(c => {
      if (c.getAttribute('data-id') === screenId) {
        c.classList.add('active-card');
      } else {
        c.classList.remove('active-card');
      }
    });

    // Smooth transition in spotlight frame
    if (showcaseFrame) {
      showcaseFrame.style.opacity = '0.3';
      showcaseFrame.style.transform = 'scale(0.97)';
    }

    setTimeout(() => {
      if (showcaseImg) showcaseImg.src = data.src;
      if (showcaseBadge) showcaseBadge.textContent = data.categoryLabel;
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
    }, 160);
  }

  // Bind category filter tabs
  const tabButtons = document.querySelectorAll('.tab-btn[data-category]');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-category');
      renderGallery(cat);

      // Set spotlight to first screen in this category
      const firstInCat = cat === 'all' 
        ? screensData[0] 
        : screensData.find(s => s.category === cat);
      if (firstInCat) setSpotlight(firstInCat.id);
    });
  });

  // ==========================================================================
  // 6. Lightbox Modal with Full-Screen Slider & Controls
  // ==========================================================================
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  let currentLightboxIndex = 0;

  function openLightboxByIndex(index) {
    if (index < 0) index = screensData.length - 1;
    if (index >= screensData.length) index = 0;
    currentLightboxIndex = index;

    const screen = screensData[index];
    if (lightboxImg && screen) {
      lightboxImg.src = screen.src;
      if (lightboxTitle) lightboxTitle.textContent = screen.title;
      if (lightboxCounter) lightboxCounter.textContent = `${index + 1} / ${screensData.length}`;

      lightboxModal.classList.add('active');
      lightboxModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function openLightboxById(screenId) {
    const idx = screensData.findIndex(s => s.id === screenId);
    if (idx !== -1) openLightboxByIndex(idx);
  }

  function closeLightbox() {
    if (lightboxModal) {
      lightboxModal.classList.remove('active');
      lightboxModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', () => openLightboxByIndex(currentLightboxIndex - 1));
  if (lightboxNext) lightboxNext.addEventListener('click', () => openLightboxByIndex(currentLightboxIndex + 1));

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!lightboxModal.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') openLightboxByIndex(currentLightboxIndex - 1);
      if (e.key === 'ArrowRight') openLightboxByIndex(currentLightboxIndex + 1);
    });
  }

  // Bind clicks on Hero phone cards
  const heroCardHome = document.getElementById('card-hero-home');
  const heroCardTools = document.getElementById('card-hero-tools');

  if (heroCardHome) {
    heroCardHome.addEventListener('click', () => openLightboxById('01'));
  }
  if (heroCardTools) {
    heroCardTools.addEventListener('click', () => openLightboxById('02'));
  }
  if (showcaseFrame) {
    showcaseFrame.addEventListener('click', () => openLightboxById(currentActiveId));
  }

  // Initialize gallery and spotlight
  renderGallery('all');
  setSpotlight('01');
});
