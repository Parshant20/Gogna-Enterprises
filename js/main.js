/**
 * Gogna Enterprises - Iron & Steel Trading
 * Main Shared JavaScript (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  highlightActiveNav();
  initGlobalEnquiryModal();
  initSmoothScroll();
});

/**
 * Mobile Navigation Toggle
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('navToggleBtn');
  const mobileNav = document.getElementById('mobileNav');
  
  if (!toggleBtn || !mobileNav) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = mobileNav.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    
    // Change hamburger icon to X
    const svg = toggleBtn.querySelector('svg');
    if (svg) {
      if (isOpen) {
        svg.innerHTML = `
          <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        `;
      } else {
        svg.innerHTML = `
          <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        `;
      }
    }
  });

  // Close mobile nav when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && !toggleBtn.contains(e.target) && mobileNav.classList.contains('open')) {
      mobileNav.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/**
 * Active navigation highlight based on current page
 */
function highlightActiveNav() {
  const currentPath = window.location.pathname;
  const page = currentPath.split('/').pop() || 'index.html';

  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    
    // match index.html or empty path for home
    if ((page === '' || page === 'index.html') && (href === 'index.html' || href === './' || href === '/')) {
      link.classList.add('active');
    } else if (href === page || href === `./${page}`) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Global Enquiry Modal System
 */
function initGlobalEnquiryModal() {
  const modal = document.getElementById('enquiryModal');
  if (!modal) return;

  const closeBtns = modal.querySelectorAll('[data-close-modal]');
  const enquiryForm = document.getElementById('globalEnquiryForm');
  const productSelect = document.getElementById('enquiryProductSelect');

  // Trigger buttons across page
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-enquiry]');
    if (trigger) {
      e.preventDefault();
      const product = trigger.getAttribute('data-product') || '';
      if (productSelect && product) {
        // Pre-select product if present in options or set custom
        let matched = false;
        for (let i = 0; i < productSelect.options.length; i++) {
          if (productSelect.options[i].value.toLowerCase() === product.toLowerCase()) {
            productSelect.selectedIndex = i;
            matched = true;
            break;
          }
        }
        if (!matched && product) {
          // Set to closest or add option
          const newOpt = new Option(product, product, true, true);
          productSelect.add(newOpt);
        }
      }
      openModal(modal);
    }
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => closeModal(modal));
  });

  // Backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal(modal);
    }
  });

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) {
      closeModal(modal);
    }
  });

  // Enquiry form submission
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nameInput = document.getElementById('enquiryName');
      const emailInput = document.getElementById('enquiryEmail');
      const phoneInput = document.getElementById('enquiryPhone');
      const reqInput = document.getElementById('enquiryReq');

      let isValid = true;

      // Simple validation
      if (!nameInput.value.trim()) {
        showFieldError(nameInput, 'Please enter your full name');
        isValid = false;
      } else {
        clearFieldError(nameInput);
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        showFieldError(emailInput, 'Please enter a valid business email');
        isValid = false;
      } else {
        clearFieldError(emailInput);
      }

      const phoneRegex = /^[0-9+\s\-()]{8,15}$/;
      if (!phoneRegex.test(phoneInput.value.trim())) {
        showFieldError(phoneInput, 'Please enter a valid phone number (min 8 digits)');
        isValid = false;
      } else {
        clearFieldError(phoneInput);
      }

      if (isValid) {
        const productName = (productSelect && productSelect.value) ? productSelect.value : 'Steel Products';
        const submitBtn = enquiryForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
            <path d="M12 2a10 10 0 0 1 10 10"/>
          </svg>
          Submitting RFQ...
        `;

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          closeModal(modal);
          enquiryForm.reset();
          showToast(`RFQ Received! Our sales desk will contact you with wholesale pricing for ${productName} within 2 hours.`, 'success');
        }, 800);
      }
    });
  }
}

function openModal(modal) {
  modal.classList.add('is-active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  modal.classList.remove('is-active');
  document.body.style.overflow = '';
}

function showFieldError(input, msg) {
  const group = input.closest('.form-group');
  if (group) {
    group.classList.add('has-error');
    input.classList.add('is-invalid');
    let errEl = group.querySelector('.form-error-msg');
    if (errEl) errEl.textContent = msg;
  }
}

function clearFieldError(input) {
  const group = input.closest('.form-group');
  if (group) {
    group.classList.remove('has-error');
    input.classList.remove('is-invalid');
  }
}

/**
 * Toast Notification Helper
 */
function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'success' ? 'toast-success' : ''}`;
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${type === 'success' ? '#16a34a' : '#ea580c'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      ${type === 'success' 
        ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>' 
        : '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'}
    </svg>
    <div>
      <div style="font-weight: 700; margin-bottom: 2px;">${type === 'success' ? 'Quote Request Sent' : 'Notification'}</div>
      <div style="font-size: 0.8125rem; color: #cbd5e1;">${message}</div>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

/**
 * Smooth anchor scrolling
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Export for other scripts if needed
window.showToast = showToast;
