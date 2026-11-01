/**
 * Gogna Enterprises - Iron & Steel Trading
 * Demo Login Script & Frontend Validation (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('loginEmail');
  const passwordInput = document.getElementById('loginPassword');
  const togglePassBtn = document.getElementById('togglePasswordBtn');
  const autofillBtn = document.getElementById('autofillDemoCreds');
  
  const loginFormView = document.getElementById('loginFormView');
  const loggedInView = document.getElementById('loggedInView');
  const logoutBtn = document.getElementById('demoLogoutBtn');
  const userDisplayEmail = document.getElementById('userDisplayEmail');

  // Check existing session in sessionStorage
  const currentDemoUser = sessionStorage.getItem('gogna_demo_user');
  if (currentDemoUser) {
    showLoggedInState(currentDemoUser);
  }

  // Show/Hide Password Toggle
  if (togglePassBtn && passwordInput) {
    togglePassBtn.addEventListener('click', () => {
      const isPassword = passwordInput.getAttribute('type') === 'password';
      passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
      togglePassBtn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
      
      const svg = togglePassBtn.querySelector('svg');
      if (svg) {
        if (isPassword) {
          // Eye Off icon
          svg.innerHTML = `
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
            <line x1="1" y1="1" x2="23" y2="23"/>
          `;
        } else {
          // Eye icon
          svg.innerHTML = `
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          `;
        }
      }
    });
  }

  // Quick Autofill Demo Credentials
  if (autofillBtn && emailInput && passwordInput) {
    autofillBtn.addEventListener('click', (e) => {
      e.preventDefault();
      emailInput.value = 'demo@gognaenterprises.com';
      passwordInput.value = 'Steel2026!';
      clearError(emailInput);
      clearError(passwordInput);
      if (window.showToast) {
        window.showToast('Demo credentials applied: demo@gognaenterprises.com', 'info');
      }
    });
  }

  // Real-time validation
  if (emailInput) {
    emailInput.addEventListener('blur', () => validateEmail(emailInput));
    emailInput.addEventListener('input', () => {
      if (emailInput.classList.contains('is-invalid')) validateEmail(emailInput);
    });
  }

  if (passwordInput) {
    passwordInput.addEventListener('blur', () => validatePassword(passwordInput));
    passwordInput.addEventListener('input', () => {
      if (passwordInput.classList.contains('is-invalid')) validatePassword(passwordInput);
    });
  }

  // Form Submission
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isEmailValid = validateEmail(emailInput);
      const isPassValid = validatePassword(passwordInput);

      if (isEmailValid && isPassValid) {
        const submitBtn = loginForm.querySelector('button[type="submit"]');
        const origText = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
            <path d="M12 2a10 10 0 0 1 10 10"/>
          </svg>
          Authenticating (Demo)...
        `;

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = origText;

          const userEmail = emailInput.value.trim();
          sessionStorage.setItem('gogna_demo_user', userEmail);
          showLoggedInState(userEmail);

          if (window.showToast) {
            window.showToast(`Welcome back, ${userEmail}! Demo session started successfully.`, 'success');
          }
        }, 700);
      }
    });
  }

  // Logout Handler
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('gogna_demo_user');
      if (loggedInView) loggedInView.style.display = 'none';
      if (loginFormView) loginFormView.style.display = 'block';
      if (loginForm) loginForm.reset();
      if (window.showToast) {
        window.showToast('You have logged out of the demo portal.', 'info');
      }
    });
  }

  function showLoggedInState(email) {
    if (loginFormView) loginFormView.style.display = 'none';
    if (loggedInView) {
      loggedInView.style.display = 'block';
      if (userDisplayEmail) userDisplayEmail.textContent = email;
    }
  }

  function validateEmail(input) {
    const val = input.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(val)) {
      setError(input, 'Please enter a valid business email address');
      return false;
    }
    clearError(input);
    return true;
  }

  function validatePassword(input) {
    const val = input.value;
    if (!val || val.length < 6) {
      setError(input, 'Password must be at least 6 characters long');
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
