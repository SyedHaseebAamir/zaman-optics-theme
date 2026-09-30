# Zaman Optics Shopify Theme

Custom Shopify/Dawn theme for **Zaman Optics**, an optical retailer in Gujar Khan, Punjab, Pakistan.

The theme is built around a premium minimalist eyewear shopping experience with a product-page prescription lens workflow, collection filtering, Pakistan payment trust cues, and guide pages for lens, size, and prescription education.

## Current Status

### September 30 Inner Pages Update
- Shared inner-page styling in `assets/zaman-pages.css`: readable guide typography, consistent headings and gutters, restrained cards, clearer contact layout, and a two-column mobile footer.
- FAQ and prescription-guide accordions share an accessible handler that also initializes after theme-editor section reloads.
- Contact form accepts international phone formatting and requires an email and message. Validation was tested without sending a support message.
- Search filter-reset links URL-encode search terms and retain product-only results. Empty search results offer a link back to the catalog.
- Created the missing published About page with the `about` template in Shopify.
- Desktop (1440px) and mobile (390px) preview checks cover About, Contact, FAQ, guides, search, collection directory, cart, and 404. Full-theme validation still reports pre-existing locale and legacy-template issues.
- An isolated browser session verified product search, add to cart, line-item properties, quantity changes, and removal. No checkout or contact message was submitted.

### September 30 Navigation Update
- Removed the lower header navigation strip in favour of the side menu.
- Added Men and Women groups with gender-tagged eyeglasses/sunglasses links and separate unisex links, plus Kids and Contact Lenses navigation.
- Category carousel lists all published collections, with arrow controls, native touch scrolling, and responsive card widths.
- Homepage includes Eyeglasses, Sunglasses, Kids, Blue Screen Glasses, Contact Lenses, New Arrivals, and Best Sellers sections.
- Created and published the Contact Lenses collection (automatic `Contact Lenses` tag rule) and Blue Screen Glasses collection (Digital Lite and Focus Modern).
- All 20 contact-lens products remain drafts. Its homepage section shows an availability enquiry until products are published; it then displays product cards automatically.
- Liquid validation and JavaScript syntax checks passed. Preview checks confirmed slider movement, submenu links, all section headings, and no horizontal page overflow on mobile.
- GitHub publication and Shopify deployment are separate. Confirm the live theme contains the latest files before declaring an update live.

Last updated: August 2, 2026

### Built
- Premium global design system in `assets/premium-design.css`
- Custom two-row desktop header and mobile drawer
- Dismissible announcement bar
- Homepage hero, category grid, featured products, lens education, shopping guide, trust section, optional verified reviews, and FAQ
- Custom collection page with left filter sidebar, mobile filter drawer, sort controls, and premium product cards
- Product page mode detection:
  - `prescription` for eyeglasses, blue light glasses, and kids glasses
  - `standard` for sunglasses
- Prescription workflow with:
  - Frame Only / With Prescription toggle
  - Manual prescription entry for OD/OS SPH, CYL, Axis, and PD
  - Prescription file upload
  - Lens type, lens material, and coating options
  - Configurable lens-price estimate
  - Shopify line item properties for order admin visibility
- Cart page displays line item properties and payment trust badges
- Static guide templates:
  - Lens guide
  - Size guide
  - Prescription guide
  - FAQ
  - About
  - Contact uses Dawn contact form with Zaman styling
- Branded 404 page
- Footer with shop/help/contact links and Pakistan payment badges

### Important Shopify Limitation

The prescription workflow stores an **estimated configuration total** and all selected options as line item properties. Shopify line item properties do not change the checkout price by themselves. Prescription checkout therefore returns customers to the cart and clearly explains what the Shopify total includes.

To charge lens upgrades automatically, use one of these approaches:
- Create paid lens-upgrade variants
- Add hidden lens add-on products to cart
- Use a Shopify product options/pricing app

The current implementation is intentionally honest: it captures the configuration and quoted total for staff confirmation.

## Development

```bash
shopify theme dev --store zaman-optics-2.myshopify.com
shopify theme pull
shopify theme push
```

If the store URL has changed, confirm it before running Shopify CLI commands.

## Git Workflow

```bash
git status
git add .
git commit -m "Update storefront functionality"
git push origin main
```

## Key Files

| Area | Files |
|---|---|
| Global design | `assets/premium-design.css`, `assets/base.css` |
| Header | `sections/header.liquid`, `assets/zaman-header.css` |
| Homepage | `templates/index.json`, `sections/image-banner.liquid`, `sections/category-grid.liquid`, `sections/featured-products.liquid`, `sections/why-choose-us.liquid`, `sections/reviews.liquid`, `sections/faq.liquid` |
| Collections | `sections/main-collection-product-grid.liquid` |
| Product page | `sections/main-product.liquid`, `snippets/buy-buttons.liquid`, `snippets/prescription-workflow.liquid`, `assets/section-prescription.css` |
| Cart | `sections/main-cart-items.liquid`, `sections/main-cart-footer.liquid` |
| Static pages | `sections/page-lens-guide.liquid`, `sections/page-size-guide.liquid`, `sections/page-prescription-guide.liquid`, `sections/page-faq.liquid`, `sections/page-about.liquid` |
| Footer | `sections/footer.liquid`, `assets/footer-custom.css` |
| Product upload/admin setup | `PRODUCT_UPLOAD_GUIDE.md` |
| Store structure guide | `ZAMAN_OPTICS_STORE_GUIDE.md`, `ZAMAN_OPTICS_STORE_GUIDE.pdf` |

## Design Rules

- Primary accent: `#0F766E`
- Primary black: `#1D1D1F`
- Surface gray: `#F5F5F7`
- Canvas white: `#FFFFFF`
- Border radius: `10px`
- UI feel: minimalist, premium, spacious, soft shadows

## Admin Tasks Still Required

- Configure Shopify Search & Discovery and enable every metafield filter; the current live store exposes only Availability and Price
- Confirm product metafields are populated consistently
- Configure Pakistan shipping zones
- Enable the store's supported checkout payment methods
- Use generic storefront copy such as "secure online payments available" unless a method is confirmed live
- Upload real hero, category, and product photography
- Add confirmed WhatsApp number, email, and opening hours through the theme editor
- Replace every zero-priced product before launch
- Test a complete live order from product page to Shopify Admin

## Product Upload Rules

Use `PRODUCT_UPLOAD_GUIDE.md` when adding products. At minimum, each product needs a product type, collection, price, two images, fallback tags, and these required metafields:

- `custom.product_mode`
- `custom.frame_shape`
- `custom.material`
- `custom.gender`
- `custom.size`
