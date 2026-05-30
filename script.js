/* ============================================================
   NETFLIX CLONE — MAIN SCRIPT
   ============================================================ */

/* ── Sign-In Modal ─────────────────────────────────────── */
const signInToggle  = document.getElementById('signInToggle');
const loginOverlay  = document.getElementById('loginOverlay');
const loginClose    = document.getElementById('loginClose');
const loginForm     = document.getElementById('loginForm');

if (signInToggle) {
  signInToggle.addEventListener('click', () => {
    if (loginOverlay) loginOverlay.classList.add('show');
  });
}

if (loginClose) {
  loginClose.addEventListener('click', () => {
    if (loginOverlay) loginOverlay.classList.remove('show');
  });
}

if (loginOverlay) {
  loginOverlay.addEventListener('click', (e) => {
    if (e.target === loginOverlay) {
      loginOverlay.classList.remove('show');
    }
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Demo: redirect to profiles page on any sign-in
    window.location.href = 'profies.htm';
  });
}

/* ── Email Signup Forms ────────────────────────────────– */
function handleEmailForm(formId, inputId) {
  const form  = document.getElementById(formId);
  const input = document.getElementById(inputId);
  if (!form || !input) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      alert('Please enter your email address.');
    } else if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
    } else {
      alert('Welcome! This is a demo — sign-up is not live.');
      input.value = '';
    }
  });
}

handleEmailForm('heroForm', 'heroEmail');
handleEmailForm('faqForm',  'faqEmail');

/* ── Navbar Scroll Effect (landing page) ────────────────– */
const navEl = document.querySelector('.nav');
if (navEl) {
  window.addEventListener('scroll', () => {
    navEl.classList.toggle('nav__black', window.scrollY >= 100);
  });
}

/* ── Close video overlay on Escape ─────────────────────– */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (loginOverlay) loginOverlay.classList.remove('show');
  }
});
