(() => {
  function initCollection() {
    const form = document.getElementById('ZCF');
    if (!form || form.dataset.initialized) return;
    form.dataset.initialized = 'true';
    const sidebar = document.getElementById('zamanSidebar');
    const overlay = document.getElementById('zamanFilterOverlay');
    const trigger = document.querySelector('.zcoll-filter-toggle');
    const mobile = window.matchMedia('(max-width: 989px)');
    function syncSidebar() {
      sidebar.inert = mobile.matches && !sidebar.classList.contains('zcoll-sidebar--open');
      if (!mobile.matches) window.zamanCloseFilter(false);
    }
    window.zamanOpenFilter = () => {
      sidebar.inert = false;
      sidebar.classList.add('zcoll-sidebar--open');
      overlay.classList.add('zcoll-overlay--open');
      trigger.setAttribute('aria-expanded', 'true');
      sidebar.setAttribute('role', 'dialog');
      sidebar.setAttribute('aria-modal', 'true');
      document.documentElement.classList.add('zo-dialog-open');
      sidebar.querySelector('.zcoll-sidebar-close').focus();
    };
    window.zamanCloseFilter = (restoreFocus = true) => {
      sidebar.classList.remove('zcoll-sidebar--open');
      overlay.classList.remove('zcoll-overlay--open');
      trigger.setAttribute('aria-expanded', 'false');
      sidebar.removeAttribute('role');
      sidebar.removeAttribute('aria-modal');
      document.documentElement.classList.remove('zo-dialog-open');
      sidebar.inert = mobile.matches;
      if (restoreFocus && mobile.matches) trigger.focus();
    };
    window.zamanApplySort = (value) => {
      const url = new URL(window.location.href);
      url.searchParams.set('sort_by', value);
      url.searchParams.delete('page');
      window.location.assign(url);
    };
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const min = form.querySelector('[name="filter.v.price.gte"]');
      const max = form.querySelector('[name="filter.v.price.lte"]');
      if (min && max && min.value !== '' && max.value !== '' && Number(min.value) > Number(max.value)) {
        max.setCustomValidity('Maximum price must be equal to or greater than the minimum.');
      }
      if (!form.reportValidity()) return;
      const tags = Array.from(form.querySelectorAll('.zcf-tag-filter:checked')).map((input) => input.dataset.tagHandle);
      const url = new URL(form.dataset.collectionUrl + (tags.length ? '/' + tags.map(encodeURIComponent).join('+') : ''), location.origin);
      const params = new URLSearchParams();
      for (const [key, value] of new FormData(form)) {
        if (String(value).trim()) params.append(key, value);
      }
      url.search = params.toString();
      window.location.assign(url);
    });
    form.addEventListener('input', () => form.querySelectorAll('input[type="number"]').forEach((input) => input.setCustomValidity('')));
    form.addEventListener('change', (event) => {
      if (!event.target.matches('.zcf-tag-filter') || !event.target.checked) return;
      // Shopify tag URLs use AND logic. One fallback value per group avoids impossible combinations.
      event.target.closest('.zcf-group').querySelectorAll('.zcf-tag-filter').forEach((input) => {
        if (input !== event.target) input.checked = false;
      });
    });
    sidebar.addEventListener('keydown', (event) => {
      if (!mobile.matches || !sidebar.classList.contains('zcoll-sidebar--open')) return;
      if (event.key === 'Escape') { event.preventDefault(); window.zamanCloseFilter(); }
      if (event.key !== 'Tab') return;
      const focusable = Array.from(sidebar.querySelectorAll('a,button,input,summary,select')).filter((el) => !el.disabled && el.getClientRects().length);
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });
    mobile.addEventListener('change', syncSidebar);
    syncSidebar();
  }
  initCollection();
  document.addEventListener('shopify:section:load', initCollection);
})();
