// Header hides while scrolling down and returns on any scroll up.
document.addEventListener('DOMContentLoaded', () => {
  const hdr = document.querySelector('.site-hdr');
  if (!hdr) return;
  let lastY = window.scrollY;
  let ticking = false;
  const update = () => {
    const y = window.scrollY;
    const delta = y - lastY;
    if (y <= hdr.offsetHeight || hdr.contains(document.activeElement)) hdr.classList.remove('away');
    else if (delta > 6) hdr.classList.add('away');
    else if (delta < -6) hdr.classList.remove('away');
    if (Math.abs(delta) > 6) lastY = y;
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  hdr.addEventListener('focusin', () => hdr.classList.remove('away'));
});
