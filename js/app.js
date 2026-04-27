/**
 * Landing Page Application
 * Senior Fullstack Developer - I.S.C. José Gregorio Hernández Trejo
 * Architecture: Modular, Vanilla JS (No dependencies)
 */

// ==========================================
// 1. NAVIGATION & SMOOTH SCROLL
// ==========================================

class Navigation {
  constructor() {
    this.navLinks = document.querySelectorAll('nav a[href^="#"]');
    this.sections = document.querySelectorAll('section[id]');
    this.init();
  }

  init() {
    // Smooth scroll on nav links
    this.navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          this.updateActiveLink(link);
        }
      });
    });

    // Update active link on scroll
    window.addEventListener('scroll', () => this.updateActiveOnScroll());
  }

  updateActiveLink(link) {
    this.navLinks.forEach((l) => l.classList.remove('active'));
    link.classList.add('active');
  }

  updateActiveOnScroll() {
    let activeSection = null;

    this.sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection = section.id;
      }
    });

    if (activeSection) {
      this.navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${activeSection}`) {
          link.classList.add('active');
        }
      });
    }
  }
}

// ==========================================
// 2. CONTACT FORM HANDLING
// ==========================================

class ContactForm {
  constructor() {
    this.form = document.querySelector('[data-purpose="contact-form-container"] form');
    this.init();
  }

  init() {
    if (this.form) {
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = {
      name: this.form.querySelector('#name').value,
      email: this.form.querySelector('#email').value,
      message: this.form.querySelector('#message').value,
    };

    // Validation
    if (!this.validate(formData)) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }

    // Simulate form submission (in production, use fetch API)
    console.log('Formulario enviado:', formData);

    // Show success message
    this.showSuccessMessage();

    // Reset form
    this.form.reset();

    // In production, send to backend:
    // this.submitToBackend(formData);
  }

  validate(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      data.name.trim().length > 0 &&
      emailRegex.test(data.email) &&
      data.message.trim().length > 10
    );
  }

  showSuccessMessage() {
    const button = this.form.querySelector('button[type="submit"]');
    const originalText = button.textContent;

    button.textContent = '✓ Mensaje enviado con éxito';
    button.style.backgroundColor = '#00E676';
    button.style.color = '#000';

    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = '';
      button.style.color = '';
    }, 3000);
  }

  async submitToBackend(data) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar el mensaje. Intenta más tarde.');
    }
  }
}

// ==========================================
// 3. INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================================

class AnimationObserver {
  constructor() {
    this.options = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };
    this.observer = new IntersectionObserver((entries) => this.handleIntersection(entries), this.options);
    this.init();
  }

  init() {
    // Observe all cards and sections for fade-in animations
    const animatableElements = document.querySelectorAll(
      '[data-purpose="benefit-card"], [data-purpose="partner-logo"], .product-card, article'
    );

    animatableElements.forEach((el) => this.observer.observe(el));
  }

  handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fade-in-up 0.6s ease-out forwards';
        this.observer.unobserve(entry.target);
      }
    });
  }
}

// ==========================================
// 4. HEADER SCROLL BEHAVIOR
// ==========================================

class HeaderScroll {
  constructor() {
    this.header = document.querySelector('nav');
    this.lastScrollTop = 0;
    this.init();
  }

  init() {
    window.addEventListener('scroll', () => this.handleScroll());
  }

  handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      this.header?.classList.add('glass-effect');
    } else {
      this.header?.classList.remove('glass-effect');
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For future hide-on-scroll features
  }
}

// ==========================================
// 5. MOBILE MENU (Future Enhancement)
// ==========================================

class MobileMenu {
  constructor() {
    this.mobileMenuBtn = document.querySelector('[data-purpose="mobile-menu-btn"]');
    this.mobileMenu = document.querySelector('[data-purpose="mobile-menu"]');
    this.init();
  }

  init() {
    if (this.mobileMenuBtn && this.mobileMenu) {
      this.mobileMenuBtn.addEventListener('click', () => this.toggleMenu());
    }
  }

  toggleMenu() {
    this.mobileMenu.classList.toggle('hidden');
  }
}

// ==========================================
// 6. PRODUCT SHOWCASE INTERACTIONS
// ==========================================

class ProductShowcase {
  constructor() {
    this.productCards = document.querySelectorAll('.product-card');
    this.init();
  }

  init() {
    this.productCards.forEach((card) => {
      const caseStudyLink = card.querySelector('[data-purpose="case-study-link"]');
      if (caseStudyLink) {
        caseStudyLink.addEventListener('click', (e) => {
          e.preventDefault();
          this.showProductDetails(card);
        });
      }
    });
  }

  showProductDetails(card) {
    const productName = card.querySelector('h3').textContent;
    console.log(`Showing details for: ${productName}`);

    // In a full implementation, open a modal or navigate to a product page
    alert(`Detalles de: ${productName}\n\nEn construcción: Case study disponible pronto.`);
  }
}

// ==========================================
// 7. PERFORMANCE: LAZY LOAD IMAGES
// ==========================================

class LazyLoadImages {
  constructor() {
    this.images = document.querySelectorAll('img[data-src]');
    this.init();
  }

  init() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        });
      });

      this.images.forEach((img) => imageObserver.observe(img));
    }
  }
}

// ==========================================
// 8. UTILITY: SMOOTH ANCHOR LINKS
// ==========================================

function setupAnchorLinks() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}

// ==========================================
// 9. APP INITIALIZATION
// ==========================================

class App {
  constructor() {
    this.init();
  }

  init() {
    // Initialize modules
    new Navigation();
    new ContactForm();
    new AnimationObserver();
    new HeaderScroll();
    new MobileMenu();
    new ProductShowcase();
    new LazyLoadImages();

    setupAnchorLinks();

    console.log('📱 Landing Page Initialized');
    console.log('👨‍💼 I.S.C. José Gregorio Hernández Trejo - Senior Fullstack Developer');
    console.log('🎯 Consultoría de Software & Transformación Digital para PYMES');
  }
}

// ==========================================
// 10. BOOTSTRAP APP ON DOM READY
// ==========================================

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new App();
  });
} else {
  new App();
}
