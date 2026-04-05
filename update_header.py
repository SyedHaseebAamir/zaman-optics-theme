import os

header_liquid_code = """<link rel="stylesheet" href="{{ 'section-header.css' | asset_url }}" media="print" onload="this.media='all'">

<!-- ANNOUNCEMENT BAR -->
{% if section.settings.announcement_text != blank %}
<div class="announcement-bar" id="announcementBar">
  <span>{{ section.settings.announcement_text }}</span>
  <button class="announcement-close" 
          onclick="document.getElementById('announcementBar').style.display='none'"
          aria-label="Close">✕</button>
</div>
{% endif %}

<!-- MAIN HEADER ROW -->
<header class="site-header">
  <div class="site-header-inner">

    <!-- LOGO -->
    <a href="/" class="site-logo">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="16" r="7" stroke="#FF8C00" stroke-width="2.5" fill="none"/>
        <circle cx="22" cy="16" r="7" stroke="#FF8C00" stroke-width="2.5" fill="none"/>
        <line x1="16" y1="12" x2="16" y2="20" stroke="#FF8C00" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
      <div class="logo-text">
        <span class="logo-name">Zaman Optics</span>
        <span class="logo-sub">Premium Eyewear</span>
      </div>
    </a>

    <!-- SEARCH -->
    <form action="/search" method="get" class="site-search" role="search">
      <input type="search" name="q" placeholder="Search for glasses, frames, lenses..." class="site-search-input" autocomplete="off" aria-label="Search">
      <button type="submit" class="site-search-btn" aria-label="Search">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#FFFFFF" stroke-width="2.5">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35" stroke-linecap="round"/>
        </svg>
      </button>
    </form>

    <!-- RIGHT SIDE -->
    <div class="site-header-right">
      <div class="header-phone">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#FF8C00" stroke-width="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/>
        </svg>
        <div>
          <span class="phone-num">+92 XXX XXXXXXX</span>
          <span class="phone-sub">Mon–Sat 10am–8pm</span>
        </div>
      </div>

      <a href="/account" class="header-icon-btn" aria-label="Account">
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#1A1A1A" stroke-width="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      </a>

      <a href="/cart" class="header-cart-btn" aria-label="Cart">
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#1A1A1A" stroke-width="2">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
        {% if cart.item_count > 0 %}
        <span class="cart-count">{{ cart.item_count }}</span>
        {% endif %}
      </a>
    </div>

  </div>
</header>

<!-- ORANGE NAV BAR -->
<nav class="orange-nav" aria-label="Main navigation">
  <div class="orange-nav-inner">
    <a href="/" class="orange-nav-link">Home</a>
    <a href="/collections/eyeglasses" class="orange-nav-link">Eyeglasses</a>
    <a href="/collections/sunglasses" class="orange-nav-link">Sunglasses</a>
    <a href="/collections/blue-light-glasses" class="orange-nav-link">Blue Light Glasses</a>
    <a href="/collections/kids-glasses" class="orange-nav-link">Kids Glasses</a>
    <a href="/collections/contact-lenses" class="orange-nav-link">Contact Lenses</a>
    <a href="/pages/lens-guide" class="orange-nav-link">Lens Guide</a>
    <a href="/pages/contact" class="orange-nav-link">Contact</a>
  </div>
</nav>

<!-- MOBILE HEADER -->
<header class="mobile-header">
  <button class="mobile-burger" onclick="openMobileMenu()" aria-label="Open menu">
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#1A1A1A" stroke-width="2.5">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  </button>
  <a href="/" class="mobile-logo-text">Zaman Optics</a>
  <a href="/cart" class="mobile-cart-icon">
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#1A1A1A" stroke-width="2">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
    {% if cart.item_count > 0 %}
    <span class="cart-count">{{ cart.item_count }}</span>
    {% endif %}
  </a>
</header>

<!-- MOBILE DRAWER -->
<div class="mobile-overlay" id="mobileOverlay" onclick="closeMobileMenu()"></div>
<div class="mobile-drawer" id="mobileDrawer">
  <div class="drawer-top">
    <span class="drawer-title">Menu</span>
    <button onclick="closeMobileMenu()" class="drawer-close">✕</button>
  </div>
  <form action="/search" method="get" class="drawer-search">
    <input type="search" name="q" placeholder="Search frames..." class="drawer-search-input">
  </form>
  <div class="drawer-section-label">Collections</div>
  <a href="/collections/eyeglasses" class="drawer-link">👓 Eyeglasses</a>
  <a href="/collections/sunglasses" class="drawer-link">🕶️ Sunglasses</a>
  <a href="/collections/blue-light-glasses" class="drawer-link">💻 Blue Light Glasses</a>
  <a href="/collections/kids-glasses" class="drawer-link">👦 Kids Glasses</a>
  <a href="/collections/contact-lenses" class="drawer-link">👁️ Contact Lenses</a>
  <div class="drawer-divider"></div>
  <div class="drawer-section-label">Pages</div>
  <a href="/" class="drawer-link">🏠 Home</a>
  <a href="/pages/lens-guide" class="drawer-link">🔬 Lens Guide</a>
  <a href="/pages/size-guide" class="drawer-link">📏 Size Guide</a>
  <a href="/pages/faq" class="drawer-link">❓ FAQ</a>
  <a href="/pages/contact" class="drawer-link">📞 Contact</a>
  <div class="drawer-divider"></div>
  <a href="/account" class="drawer-link">👤 My Account</a>
  <a href="/cart" class="drawer-link">
    🛒 Cart ({{ cart.item_count }})
  </a>
</div>

<script>
function openMobileMenu() {
  document.getElementById('mobileDrawer').classList.add('open');
  document.getElementById('mobileOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  document.getElementById('mobileDrawer').classList.remove('open');
  document.getElementById('mobileOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function() {
  const path = window.location.pathname;
  document.querySelectorAll('.orange-nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === path || (href !== '/' && path.startsWith(href))) {
        link.classList.add('active');
      }
    });
});
</script>

{% schema %}
{
  "name": "Header",
  "settings": [
    {
      "type": "text",
      "id": "announcement_text",
      "label": "Announcement Text",
      "default": "Free shipping on orders over $50"
    }
  ]
}
{% endschema %}
"""

css_code = """
/* ===== ANNOUNCEMENT BAR ===== */
.announcement-bar {
  background: #1A1A1A;
  color: #FFFFFF;
  text-align: center;
  padding: 9px 40px;
  font-size: 13px;
  font-weight: 500;
  position: relative;
  letter-spacing: 0.2px;
}
.announcement-close {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #FFFFFF;
  font-size: 16px;
  cursor: pointer;
  opacity: 0.7;
  line-height: 1;
}
.announcement-close:hover { opacity: 1; }

/* ===== MAIN HEADER ===== */
.site-header {
  background: #FFFFFF;
  border-bottom: 1px solid #E8E8E8;
  padding: 0 40px;
  height: 70px;
}
.site-header-inner {
  display: flex;
  align-items: center;
  gap: 28px;
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
}

/* LOGO */
.site-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}
.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}
.logo-name {
  font-size: 18px;
  font-weight: 800;
  color: #1A1A1A;
  letter-spacing: -0.3px;
}
.logo-sub {
  font-size: 10px;
  color: #FF8C00;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
}

/* SEARCH */
.site-search {
  flex: 1;
  display: flex;
  border: 2px solid #E8E8E8;
  border-radius: 10px;
  overflow: hidden;
  max-width: 560px;
  transition: border-color 0.2s;
}
.site-search:focus-within {
  border-color: #FF8C00;
  box-shadow: 0 0 0 3px rgba(255,140,0,0.1);
}
.site-search-input {
  flex: 1;
  padding: 11px 16px;
  border: none;
  outline: none;
  font-size: 14px;
  color: #1A1A1A;
  background: #FFFFFF;
}
.site-search-input::placeholder { color: #AAAAAA; }
.site-search-btn {
  padding: 0 20px;
  background: #FF8C00;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  flex-shrink: 0;
}
.site-search-btn:hover { background: #E07800; }

/* RIGHT ICONS */
.site-header-right {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
}
.header-phone {
  display: flex;
  align-items: center;
  gap: 8px;
}
.phone-num {
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: #1A1A1A;
  line-height: 1.2;
}
.phone-sub {
  display: block;
  font-size: 10px;
  color: #999999;
}
.header-icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  text-decoration: none;
  transition: background 0.2s;
}
.header-icon-btn:hover { background: #FFF3E0; }
.header-cart-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  text-decoration: none;
  border: 2px solid #E8E8E8;
  transition: all 0.2s;
}
.header-cart-btn:hover {
  border-color: #FF8C00;
  background: #FFF3E0;
}
.cart-count {
  position: absolute;
  top: -6px;
  right: -6px;
  background: #FF8C00;
  color: #FFFFFF;
  font-size: 10px;
  font-weight: 800;
  min-width: 18px;
  height: 18px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  border: 2px solid #FFFFFF;
}

/* ===== ORANGE NAV BAR ===== */
.orange-nav {
  background: #FF8C00;
  position: sticky;
  top: 0;
  z-index: 200;
}
.orange-nav-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  gap: 4px;
  flex-wrap: nowrap;
  overflow-x: auto;
  scrollbar-width: none;
}
.orange-nav-inner::-webkit-scrollbar { display: none; }
.orange-nav-link {
  display: inline-flex;
  align-items: center;
  padding: 13px 16px;
  font-size: 14px;
  font-weight: 600;
  color: #FFFFFF !important;
  text-decoration: none !important;
  white-space: nowrap;
  transition: background 0.2s;
  border-radius: 0;
  position: relative;
}
.orange-nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 16px;
  right: 16px;
  height: 2px;
  background: #FFFFFF;
  opacity: 0;
  transition: opacity 0.2s;
}
.orange-nav-link:hover {
  background: rgba(0,0,0,0.12);
  color: #FFFFFF !important;
  text-decoration: none !important;
}
.orange-nav-link:hover::after { opacity: 1; }
.orange-nav-link.active {
  background: rgba(0,0,0,0.15);
  color: #FFFFFF !important;
}
.orange-nav-link.active::after { opacity: 1; }

/* ===== HIDE DESKTOP ON MOBILE ===== */
.mobile-header { display: none; }
.mobile-overlay { display: none; }
.mobile-drawer { display: none; }

/* ===== MOBILE STYLES ===== */
@media (max-width: 768px) {
  .site-header,
  .orange-nav,
  .announcement-bar { display: none; }

  .mobile-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    height: 58px;
    background: #FFFFFF;
    border-bottom: 2px solid #FF8C00;
    position: sticky;
    top: 0;
    z-index: 300;
  }
  .mobile-burger {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
  }
  .mobile-burger:hover { background: #FFF3E0; }
  .mobile-logo-text {
    font-size: 18px;
    font-weight: 800;
    color: #1A1A1A;
    text-decoration: none;
  }
  .mobile-cart-icon {
    position: relative;
    padding: 8px;
    display: flex;
    text-decoration: none;
  }
  .mobile-cart-icon .cart-count {
    top: 2px;
    right: 2px;
  }

  /* OVERLAY */
  .mobile-overlay {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
    z-index: 400;
  }
  .mobile-overlay.open { display: block; }

  /* DRAWER */
  .mobile-drawer {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 290px;
    height: 100vh;
    background: #FFFFFF;
    z-index: 500;
    overflow-y: auto;
    transform: translateX(-100%);
    transition: transform 0.28s ease;
  }
  .mobile-drawer.open { transform: translateX(0); }
  .drawer-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 20px;
    background: #FF8C00;
  }
  .drawer-title {
    font-size: 16px;
    font-weight: 800;
    color: #FFFFFF;
  }
  .drawer-close {
    background: rgba(255,255,255,0.2);
    border: none;
    color: #FFFFFF;
    font-size: 18px;
    width: 32px;
    height: 32px;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .drawer-search {
    padding: 14px 16px;
    border-bottom: 1px solid #F0F0F0;
  }
  .drawer-search-input {
    width: 100%;
    padding: 10px 14px;
    border: 1.5px solid #E8E8E8;
    border-radius: 8px;
    font-size: 14px;
    outline: none;
    box-sizing: border-box;
  }
  .drawer-search-input:focus { border-color: #FF8C00; }
  .drawer-section-label {
    padding: 14px 16px 6px;
    font-size: 10px;
    font-weight: 800;
    color: #999999;
    text-transform: uppercase;
    letter-spacing: 1.2px;
  }
  .drawer-link {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 13px 16px;
    font-size: 15px;
    font-weight: 500;
    color: #1A1A1A;
    text-decoration: none;
    border-bottom: 1px solid #F8F8F8;
    transition: all 0.15s;
  }
  .drawer-link:hover {
    background: #FFF3E0;
    color: #FF8C00;
    padding-left: 22px;
    text-decoration: none;
  }
  .drawer-divider {
    height: 8px;
    background: #F5F5F5;
    border-top: 1px solid #EEEEEE;
    border-bottom: 1px solid #EEEEEE;
    margin: 4px 0;
  }
}

/* Button visibility fixes */
/* Hero buttons */
.btn-primary {
  background: #FF8C00 !important;
  color: #FFFFFF !important;
  border-color: #FF8C00 !important;
}
.btn-primary:hover {
  background: #E07800 !important;
  color: #FFFFFF !important;
}

/* Secondary button — outline style */
.btn-secondary {
  background: transparent !important;
  color: #1A1A1A !important;
  border: 2px solid #1A1A1A !important;
}
.btn-secondary:hover {
  background: transparent !important;
  color: #FF8C00 !important;
  border-color: #FF8C00 !important;
}

/* Prescription form next button */
.rx-btn-next {
  background: #FF8C00 !important;
  color: #FFFFFF !important;
}
.rx-btn-next:hover {
  background: #E07800 !important;
  color: #FFFFFF !important;
}

/* Add to cart button */
.rx-btn-add-to-cart {
  background: #1A1A1A !important;
  color: #FFFFFF !important;
}

/* Any button with orange background site-wide */
[style*="background: #FF8C00"],
[style*="background:#FF8C00"] {
  color: #FFFFFF !important;
}

/* Filter apply button */
.price-apply {
  background: #FF8C00 !important;
  color: #FFFFFF !important;
}

/* Category card shop now link */
.cat-card-link {
  color: #FF8C00 !important;
}

/* Active filter tags */
.active-filter-tag {
  background: #FFF3E0 !important;
  border-color: #FF8C00 !important;
  color: #1A1A1A !important;
}
"""

with open("sections/header.liquid", "w", encoding="utf-8") as f:
    f.write(header_liquid_code)

with open("assets/section-header.css", "w", encoding="utf-8") as f:
    f.write(css_code)

print("Files successfully updated!")
