(() => {
  if (window.zoStorefrontInitialized) return;
  window.zoStorefrontInitialized = true;
  const triggers = new WeakMap();
  function initCarousels(root = document) {
    root.querySelectorAll('[data-zo-carousel]').forEach((carousel) => {
      if (carousel.dataset.ready) return;
      carousel.dataset.ready = 'true';
      const track = carousel.querySelector('.zo-category-slider');
      const previous = carousel.querySelector('[data-zo-slide="-1"]');
      const next = carousel.querySelector('[data-zo-slide="1"]');
      const update = () => {
        previous.disabled = track.scrollLeft <= 1;
        next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
      };
      carousel.querySelectorAll('[data-zo-slide]').forEach((button) => button.addEventListener('click', () => {
        track.scrollBy({left: Number(button.dataset.zoSlide) * (track.clientWidth + 24), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
      }));
      track.addEventListener('scroll', update, {passive: true});
      const observer = new ResizeObserver(update);
      observer.observe(track);
      const section = carousel.closest('.shopify-section');
      section?.addEventListener('shopify:section:unload', () => observer.disconnect(), {once: true});
      update();
    });
  }
  initCarousels();
  document.addEventListener('shopify:section:load', (event) => initCarousels(event.target));
  document.addEventListener('click', (event) => {
    const opener = event.target.closest('[data-zo-open]');
    if (opener) {
      const dialog = document.getElementById(opener.dataset.zoOpen);
      if (!dialog || dialog.open) return;
      triggers.set(dialog, opener);
      dialog.showModal();
      opener.setAttribute('aria-expanded', 'true');
      document.documentElement.classList.add('zo-dialog-open');
    }
    const closer = event.target.closest('[data-zo-close]');
    if (closer) closer.closest('dialog')?.close();
    if (event.target.matches('dialog.zo-drawer')) {
      const rect = event.target.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) event.target.close();
    }
  });
  document.addEventListener('close', (event) => {
    if (!event.target.matches('dialog.zo-drawer')) return;
    if (!document.querySelector('dialog[open]')) document.documentElement.classList.remove('zo-dialog-open');
    const trigger = triggers.get(event.target);
    trigger?.setAttribute('aria-expanded', 'false');
    trigger?.focus();
  }, true);
  document.addEventListener('shopify:section:unload', () => {
    document.documentElement.classList.remove('zo-dialog-open');
  });
  if (typeof subscribe === 'function' && typeof PUB_SUB_EVENTS !== 'undefined') {
    subscribe(PUB_SUB_EVENTS.cartUpdate, () => {
      fetch((window.Shopify?.routes?.root || '/') + 'cart.js')
        .then((response) => response.ok ? response.json() : Promise.reject())
        .then((cart) => document.querySelectorAll('[data-zo-cart-count]').forEach((badge) => {
          badge.textContent = cart.item_count;
          badge.hidden = cart.item_count === 0;
        })).catch(() => {});
    });
  }
})();
