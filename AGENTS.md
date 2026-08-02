# Zaman Optics Technical Reference

## Project Overview

- Brand: Zaman Optics
- Location: Gujar Khan, Pakistan
- Platform: Shopify Dawn theme with custom Liquid/CSS/JS
- Goal: Premium eyewear store with a prescription lens configuration flow on product pages.

## Critical Commands

```bash
shopify theme dev --store zaman-optics-2.myshopify.com
shopify theme pull
shopify theme push
git status
git add .
git commit -m "Update storefront functionality"
git push origin main
```

Confirm the active Shopify store URL before using Shopify CLI. Older notes may reference `zaman-optics.myshopify.com`, while the working store context references `zaman-optics-2.myshopify.com`.

## Design Tokens

- Primary Accent: `#0F766E`
- Accent Hover: `#0B5F59`
- Primary Black: `#1D1D1F`
- Surface Gray: `#F5F5F7`
- Canvas White: `#FFFFFF`
- Border Radius: `10px`
- UI Feel: premium, minimalist, spacious, restrained shadows.

## Product Modes

### Prescription Mode

Applies to eyeglasses, blue light glasses, and kids glasses.

Built behavior:
- Frame Only / With Prescription toggle
- Manual prescription entry or upload
- Lens type selection
- Lens material selection
- Optional coatings
- Live quoted total
- Shopify line item properties for order admin

### Standard Mode

Applies to sunglasses.

Built behavior:
- Standard product information
- Variant picker if needed
- Quantity selector
- Add to Cart / dynamic checkout
- No prescription form

## Pricing Limitation

Line item properties do not change Shopify checkout price. Lens upgrade charging should be implemented with variants, add-on products, or a Shopify pricing/options app.

## Pakistan Localization

Prioritize:
- PKR / Rs
- Secure online payments
- Supported checkout payment methods
- Credit/debit cards where available
- WhatsApp support
- Pakistan shipping

## Key Reference

See `website-prd.md` for the product requirements and `README.md` for implementation status.
