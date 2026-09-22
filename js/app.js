/**
 * Duddu Pragna Chelsiya - Portfolio Interactive Engine
 * Handles dynamic content population, scroll effects, navigation, and user interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize dynamic content from data.js
  initSkills();
  initProjects();
  initExperience();
  initCertifications();
  initEducation();
  initResearch();
  
  // Initialize interactive behaviors
  initNavigation();
  initScrollEffects();
  initContactForm();
  initBackToTop();
  initSmoothScroll();
});

/* ==========================================================================
   SVG Icon Helper Utilities
   ========================================================================== */
function getIconSvg(name) {
  const icons = {
    code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    layout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
    database: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    'bar-chart-2': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
    tool: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
    cpu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
    'message-square': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
    globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    'trending-up': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
    cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
    award: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
    externalLink: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`
  };
  return icons[name] || icons.code;
}

/* ==========================================================================
   1. Dynamic Skills Rendering
   ========================================================================== */
function initSkills() {
  const container = document.getElementById('skills-grid-container');
  if (!container || !PORTFOLIO_DATA.skillCategories) return;

  container.innerHTML = PORTFOLIO_DATA.skillCategories.map(cat => `
    <div class="skill-category-card reveal">
      <div class="skill-card-header">
        <div class="skill-card-icon">
          ${getIconSvg(cat.icon)}
        </div>
        <h3>${cat.category}</h3>
      </div>
      <div class="skill-pills-list">
        ${cat.skills.map(skill => `<span class="skill-pill">${skill}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   2. Dynamic Projects Rendering
   ========================================================================== */
function initProjects() {
  const container = document.getElementById('projects-grid-container');
  if (!container || !PORTFOLIO_DATA.projects) return;

  container.innerHTML = PORTFOLIO_DATA.projects.map(proj => {
    const highlightItems = proj.highlights.map(h => `
      <li>
        ${getIconSvg('check')}
        <span>${h}</span>
      </li>
    `).join('');

    const techTags = proj.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');

    const actionButtons = proj.links && proj.links.length > 0 ? proj.links.map(l => `
      <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="project-btn project-btn-primary" aria-label="${l.label}">
        <span>${l.label}</span>
        ${getIconSvg('externalLink')}
      </a>
    `).join('') : `
      <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 500;">Verified Case Study & Analytics</span>
    `;

    return `
      <article class="project-card reveal" id="project-${proj.id}">
        <div class="project-header">
          <div class="project-meta-top">
            <span class="project-badge">${proj.badge}</span>
          </div>
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-subtitle">${proj.subtitle}</p>
        </div>

        <p class="project-description">${proj.description}</p>

        <ul class="project-highlights-list">
          ${highlightItems}
        </ul>

        <div class="project-technologies">
          ${techTags}
        </div>

        <div class="project-actions">
          ${actionButtons}
        </div>
      </article>
    `;
  }).join('');
}

/* ==========================================================================
   3. Dynamic Experience Rendering
   ========================================================================== */
function initExperience() {
  const container = document.getElementById('experience-container');
  if (!container || !PORTFOLIO_DATA.experience) return;

  container.innerHTML = PORTFOLIO_DATA.experience.map(exp => `
    <div class="experience-card reveal">
      <div class="exp-header">
        <div class="exp-role-info">
          <h3>${exp.role}</h3>
          <h4>${exp.organization}</h4>
        </div>
        <span class="exp-badge-period">${exp.badge}</span>
      </div>

      <p class="exp-description">${exp.description}</p>

      <ul class="exp-points-list">
        ${exp.points.map(pt => `
          <li>
            ${getIconSvg('check')}
            <span>${pt}</span>
          </li>
        `).join('')}
      </ul>

      <div class="exp-tech-stack">
        ${exp.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   4. Dynamic Certifications Rendering
   ========================================================================== */
function initCertifications() {
  const container = document.getElementById('certifications-grid-container');
  if (!container || !PORTFOLIO_DATA.certifications) return;

  container.innerHTML = PORTFOLIO_DATA.certifications.map(cert => {
    const certAction = cert.certificateUrl ? `
      <a href="${cert.certificateUrl}" target="_blank" rel="noopener noreferrer" class="btn-view-cert" aria-label="View ${cert.title} Certificate">
        <span>View Certificate</span>
        ${getIconSvg('externalLink')}
      </a>
    ` : `
      <span class="cert-category-tag">${cert.category}</span>
    `;

    return `
      <div class="cert-card reveal">
        <div class="cert-top">
          <div class="cert-icon-wrapper">
            ${getIconSvg(cert.icon)}
          </div>
          <div class="cert-info">
            <h4>${cert.title}</h4>
            <span class="cert-issuer">${cert.issuer}</span>
          </div>
        </div>

        <div class="cert-footer">
          <span class="cert-category-tag">${cert.category}</span>
          ${certAction}
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   5. Dynamic Education Rendering
   ========================================================================== */
function initEducation() {
  const container = document.getElementById('education-grid-container');
  if (!container || !PORTFOLIO_DATA.education) return;

  container.innerHTML = PORTFOLIO_DATA.education.map(edu => `
    <div class="education-card reveal">
      <div class="edu-header">
        <span class="edu-period-badge">${edu.period}</span>
        <h3 class="edu-degree">${edu.degree}</h3>
        <p class="edu-institution">${edu.institution}</p>
      </div>

      <div class="edu-score-box">
        <span class="edu-score-label">${edu.scoreLabel}</span>
        <span class="edu-score-value">${edu.score}</span>
      </div>

      <p class="edu-details">${edu.details}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   6. Dynamic Research Rendering
   ========================================================================== */
function initResearch() {
  const container = document.getElementById('research-container');
  if (!container || !PORTFOLIO_DATA.research) return;

  container.innerHTML = PORTFOLIO_DATA.research.map(res => `
    <div class="research-card reveal">
      <div class="research-header">
        <span class="research-type-tag">${res.type}</span>
        <h3 class="research-title">${res.title}</h3>
      </div>
      <p class="research-summary">${res.summary}</p>

      <div class="research-topics">
        ${res.topics.map(topic => `<span class="topic-pill">${topic}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   7. Navigation, ScrollSpy, and Mobile Menu
   ========================================================================== */
function initNavigation() {
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-toggle-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const desktopLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll Header Blur & ScrollSpy
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // ScrollSpy active state
    let currentSectionId = 'home';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    desktopLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentSectionId}`);
    });

    mobileLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentSectionId}`);
    });
  }, { passive: true });

  // Mobile Drawer Toggle
  function toggleDrawer(open) {
    const isOpen = open !== undefined ? open : !mobileDrawer.classList.contains('open');
    mobileDrawer.classList.toggle('open', isOpen);
    drawerBackdrop.classList.toggle('open', isOpen);
    mobileToggle.classList.toggle('open', isOpen);
    mobileToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  mobileToggle.addEventListener('click', () => toggleDrawer());
  drawerBackdrop.addEventListener('click', () => toggleDrawer(false));

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleDrawer(false));
  });
}

/* ==========================================================================
   8. Scroll Reveal Observer
   ========================================================================== */
function initScrollEffects() {
  const revealElements = document.querySelectorAll('.reveal');
  
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('active'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  });

  revealElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   9. Smooth Scrolling
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* ==========================================================================
   10. Back to Top Button
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   11. Contact Form Direct Mailer
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const subject = document.getElementById('form-subject').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill in all required fields.');
      return;
    }

    const bodyText = `Sender: ${name} (${email})\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(subject || 'Portfolio Inquiry from ' + name)}&body=${encodeURIComponent(bodyText)}`;

    showToast('Opening your email client to send message...');
    window.location.href = mailtoUrl;
    form.reset();
  });
}

/* ==========================================================================
   12. Toast Notification Helper
   ========================================================================== */
function showToast(message) {
  const toast = document.getElementById('toast-message');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
