/**
 * Gogna Enterprises - Iron & Steel Trading
 * Contact Form Validation & Handler (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  const fields = {
    name: document.getElementById('contactName'),
    email: document.getElementById('contactEmail'),
    phone: document.getElementById('contactPhone'),
    company: document.getElementById('contactCompany'),
    subject: document.getElementById('contactSubject'),
    message: document.getElementById('contactMessage')
  };

  // Real-time validation on blur/input
  if (fields.name) {
    fields.name.addEventListener('blur', () => validateName(fields.name));
    fields.name.addEventListener('input', () => {
      if (fields.name.classList.contains('is-invalid')) validateName(fields.name);
    });
  }

  if (fields.email) {
    fields.email.addEventListener('blur', () => validateEmail(fields.email));
    fields.email.addEventListener('input', () => {
      if (fields.email.classList.contains('is-invalid')) validateEmail(fields.email);
    });
  }

  if (fields.phone) {
    fields.phone.addEventListener('blur', () => validatePhone(fields.phone));
    fields.phone.addEventListener('input', () => {
      if (fields.phone.classList.contains('is-invalid')) validatePhone(fields.phone);
    });
  }

  if (fields.message) {
    fields.message.addEventListener('blur', () => validateMessage(fields.message));
    fields.message.addEventListener('input', () => {
      if (fields.message.classList.contains('is-invalid')) validateMessage(fields.message);
    });
  }

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateName(fields.name);
    const isEmailValid = validateEmail(fields.email);
    const isPhoneValid = validatePhone(fields.phone);
    const isMessageValid = validateMessage(fields.message);

    if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
          <path d="M12 2a10 10 0 0 1 10 10"/>
        </svg>
        Sending Inquiry...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        const customerName = fields.name.value.trim();
        contactForm.reset();

        // Clear all validation states
        Object.values(fields).forEach(input => {
          if (input) {
            input.classList.remove('is-invalid');
            const group = input.closest('.form-group');
            if (group) group.classList.remove('has-error');
          }
        });

        // Show friendly success confirmation
        const alertBox = document.getElementById('contactSuccessAlert');
        if (alertBox) {
          alertBox.style.display = 'block';
          alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          setTimeout(() => {
            alertBox.style.display = 'none';
          }, 8000);
        }

        if (window.showToast) {
          window.showToast(`Thank you, ${customerName}! Your inquiry has been sent to Gogna Enterprises sales team.`, 'success');
        }
      }, 750);
    } else {
      // Focus first invalid input
      const firstInvalid = contactForm.querySelector('.is-invalid');
      if (firstInvalid) firstInvalid.focus();
    }
  });

  function validateName(input) {
    if (!input) return true;
    const val = input.value.trim();
    if (!val || val.length < 2) {
      setError(input, 'Please enter your full name (minimum 2 characters)');
      return false;
    }
    clearError(input);
    return true;
  }

  function validateEmail(input) {
    if (!input) return true;
    const val = input.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(val)) {
      setError(input, 'Please enter a valid email address (e.g., name@company.com)');
      return false;
    }
    clearError(input);
    return true;
  }

  function validatePhone(input) {
    if (!input) return true;
    const val = input.value.trim();
    const regex = /^[0-9+\s\-()]{8,16}$/;
    if (!regex.test(val)) {
      setError(input, 'Please enter a valid contact phone number (min 8 digits)');
      return false;
    }
    clearError(input);
    return true;
  }

  function validateMessage(input) {
    if (!input) return true;
    const val = input.value.trim();
    if (!val || val.length < 10) {
      setError(input, 'Please describe your requirement in at least 10 characters');
      return false;
    }
    clearError(input);
    return true;
  }

  function setError(input, message) {
    const group = input.closest('.form-group');
    if (group) {
      group.classList.add('has-error');
      input.classList.add('is-invalid');
      const errEl = group.querySelector('.form-error-msg');
      if (errEl) errEl.textContent = message;
    }
  }

  function clearError(input) {
    const group = input.closest('.form-group');
    if (group) {
      group.classList.remove('has-error');
      input.classList.remove('is-invalid');
    }
  }
});
