# Storefront Audit

Last reviewed: August 3, 2026

## Scope Checked

- Homepage on desktop and mobile
- Header, mobile menu, search, navigation, cart link, and footer
- Collection grid, sorting, desktop filters, and mobile filter drawer
- Standard and prescription product modes
- Frame-only and prescription add-to-cart flows
- Cart properties, quantities, removal links, and totals
- Search, collection list, contact, guides, FAQ, cart, and 404 templates
- Responsive overflow and page heading structure

## Confirmed Working

- Main navigation and collection links route correctly.
- Search returns products and exposes Shopify sort/filter forms.
- Collection sorting preserves active query parameters.
- Frame-only products add to cart.
- Prescription values and lens selections are submitted as line-item properties.
- Prescription properties appear in the cart and Shopify order data.
- Search forms submit directly to Shopify's product search results.

## Fixes Applied

- Added safe destinations for empty hero, lens-card, and FAQ links.
- Removed unconfirmed contact details from customer-facing templates.
- Hid placeholder reviews and unverifiable business statistics by default.
- Added safe copy migration for the old trust claims.
- Prevented zero-priced products from being purchased accidentally.
- Made lens-price estimates configurable instead of hard-coded.
- Added required upload validation and disabled inactive prescription fields.
- Removed irrelevant prescription properties from frame-only cart items.
- Changed prescription Buy Now behavior to review the cart first.
- Added a cart notice explaining Shopify totals and lens estimates.
- Improved keyboard and ARIA behavior for mobile navigation and filters.
- Removed duplicate announcement and Contact page headings.
- Rebalanced the product gallery and purchase panel to prevent prescription controls from overflowing.
- Added responsive prescription cards, consistent product headings, and a metafield-powered frame details table.
- Added tag-backed shape, material, gender, and size filters whenever Shopify native filters are unavailable.
- Made navigation conditional so missing collections and pages do not create dead links.
- Limited header and drawer search to products and preserved Shopify's search prefix behavior.

## Connected Admin Findings

- The connected shop is `zaman-optics-2.myshopify.com` on Shopify Basic with PKR currency.
- The catalog contains 10 active products and five collections.
- `custom.product_mode` is the only merchant-owned product metafield definition currently present.
- `custom.frame_shape`, `custom.material`, `custom.gender`, and `custom.size` are not yet defined.
- Existing product tags use prefixed values such as `Shape: Square`, with some size tags containing a trailing period.
- Blue Screen Glasses and Contact Lenses collections are missing.
- `Zaman "Midnight" Square`, `Zaman "Solstice" Aviator`, and `Zaman "Urban" Round` are active at Rs 0.
- Product types and SKUs are blank across the current catalog.

## Shopify Admin Work Still Required

1. Create `custom.frame_shape`, `custom.material`, `custom.gender`, and `custom.size`, then add them in Search & Discovery > Filters. The live audit exposed only Availability and Price.
2. Fill those metafields on every applicable product using the standardized values in `PRODUCT_UPLOAD_GUIDE.md`.
3. Enter real prices for all products. `Zaman "Midnight" Square`, `Zaman "Solstice" Aviator`, and `Zaman "Urban" Round` are active at Rs 0.
4. Confirm lens and coating prices, then enter them in **Buy buttons > Prescription quote prices**.
5. Connect lens charges to variants, add-on products, or a product-options app. Line-item properties cannot change checkout price.
6. Create `/pages/about` and assign the `page.about` template. The route currently returns 404.
7. Add confirmed phone/WhatsApp, email, and opening hours to the Contact and Footer settings.
8. Create Blue Screen Glasses and Contact Lenses collections. New Arrivals and Best Sellers already exist.
9. Configure Pakistan shipping and supported checkout payment methods.
10. Place one real test order and verify properties, upload, shipping, payment, email, and Shopify Admin details.

## Pricing Constraint

The theme can calculate and store an estimated lens configuration, but Shopify checkout charges product and variant prices only. Do not describe the estimate as a paid checkout total until priced add-ons are connected.
