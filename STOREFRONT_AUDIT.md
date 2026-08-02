# Storefront Audit

Last reviewed: August 2, 2026

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
- Tested desktop and mobile pages did not create horizontal overflow.

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

## Shopify Admin Work Still Required

1. In Search & Discovery > Filters, add `custom.frame_shape`, `custom.material`, `custom.gender`, and `custom.size`. The live audit exposed only Availability and Price.
2. Fill those metafields on every applicable product using the standardized values in `PRODUCT_UPLOAD_GUIDE.md`.
3. Enter real prices for all products. `Zaman "Solstice" Aviator` and `Zaman "Urban" Round` were observed at Rs 0.
4. Confirm lens and coating prices, then enter them in **Buy buttons > Prescription quote prices**.
5. Connect lens charges to variants, add-on products, or a product-options app. Line-item properties cannot change checkout price.
6. Create `/pages/about` and assign the `page.about` template. The route currently returns 404.
7. Add confirmed phone/WhatsApp, email, and opening hours to the Contact and Footer settings.
8. Verify Contact Lenses, New Arrivals, and Best Sellers collections exist for the header links.
9. Configure Pakistan shipping and supported checkout payment methods.
10. Place one real test order and verify properties, upload, shipping, payment, email, and Shopify Admin details.

## Pricing Constraint

The theme can calculate and store an estimated lens configuration, but Shopify checkout charges product and variant prices only. Do not describe the estimate as a paid checkout total until priced add-ons are connected.
