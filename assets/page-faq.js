(() => {
  // Shared by both guides, including sections reloaded by the theme editor.
  if (window.zamanFaqInitialized) return;
  window.zamanFaqInitialized = true;
  const selector = '.faq-accordion__trigger, .prescription-faq__trigger';
  let nextId = 0;
  function initialize(root = document) {
    root.querySelectorAll(selector).forEach((trigger) => {
      const panel = trigger.nextElementSibling;
      if (!panel) return;
      trigger.type = 'button';
      if (!trigger.id) trigger.id = `zaman-faq-trigger-${++nextId}`;
      if (!panel.id) panel.id = `${trigger.id}-panel`;
      trigger.setAttribute('aria-controls', panel.id);
      panel.setAttribute('aria-labelledby', trigger.id);
      panel.hidden = trigger.getAttribute('aria-expanded') !== 'true';
    });
  }
  function setExpanded(trigger, expanded) {
    trigger.setAttribute('aria-expanded', String(expanded));
    trigger.nextElementSibling.hidden = !expanded;
  }
  document.addEventListener('click', (event) => {
    const trigger = event.target.closest(selector);
    if (!trigger || !trigger.nextElementSibling) return;
    const expanded = trigger.getAttribute('aria-expanded') === 'true';
    trigger.closest('.faq-accordion, .prescription-faq')?.querySelectorAll(selector)
      .forEach((other) => setExpanded(other, false));
    setExpanded(trigger, !expanded);
  });
  function openHash() {
    const item = document.getElementById(window.location.hash.slice(1));
    const trigger = item?.matches(selector) ? item : item?.querySelector(selector);
    if (trigger) setExpanded(trigger, true);
  }
  function ready() { initialize(); openHash(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready, { once: true });
  else ready();
  document.addEventListener('shopify:section:load', (event) => initialize(event.target));
  window.addEventListener('hashchange', openHash);
})();
