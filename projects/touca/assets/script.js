/* ========================================================================
   TOUCAゼミ合宿 in 米沢 2026 ｜ 共通スクリプト
   1) Fade-in on scroll (IntersectionObserver)
   ======================================================================== */
(function() {
  'use strict';

  // ----- Fade-in on scroll -----
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('in-view'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.fade-in').forEach(el => io.observe(el));
})();
