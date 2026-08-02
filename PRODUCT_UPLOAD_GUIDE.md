# Product Upload Guide

Use this checklist when adding products to Zaman Optics. Consistent product data is what makes collection filters, prescription mode, search, and order handling work correctly.

## Product Basics

Add these fields for every product:

| Field | What to Enter | Example |
|---|---|---|
| Title | Clear product name with shape/category | Visionary Square Eyeglasses |
| Vendor | Store or supplier name | Zaman Optics |
| Product type | Main selling category | Eyeglasses, Sunglasses, Blue Light Glasses, Kids Glasses |
| Description | Material, fit, use case, lens compatibility, care notes | Lightweight square acetate frame with prescription lens support |
| Price | Final frame price in PKR | Rs 2,500 |
| Compare-at price | Only if on sale | Rs 3,200 |
| SKU | Internal stock code | ZO-EYE-SQ-001-BLK |
| Inventory | Track stock where possible | 8 in stock |
| Collections | Add to the correct collection | Eyeglasses |
| Tags | Add fallback filter tags | Square, Acetate, Unisex, Medium |
| SEO title/meta | Short search-friendly copy | Square Eyeglasses in Pakistan - Zaman Optics |

## Product Images

Upload 4 to 6 images when possible:

1. Front product image on white or light gray background.
2. Angled product image. This becomes the hover image on collection cards.
3. Side/temple image.
4. Close-up of hinge/material.
5. Optional model or lifestyle image.
6. Optional packaging/accessories image.

Keep the first image clean and centered so the full frame is visible. The theme uses contained product images on collection cards, so transparent PNG or high-quality JPG/WebP files work well.

Never publish a product at `Rs 0`. The theme blocks purchasing and displays “Price coming soon” for zero-priced products, but the correct launch fix is to enter the confirmed selling price.

## Required Metafields

Create these product metafield definitions in Shopify Admin under **Settings > Custom data > Products**.

| Name | Namespace and key | Type | Values |
|---|---|---|---|
| Product Mode | `custom.product_mode` | Single line text | `prescription` or `standard` |
| Frame Shape | `custom.frame_shape` | Single line text | Round, Square, Rectangle, Aviator, Cat Eye |
| Material | `custom.material` | Single line text | Metal, Acetate, Plastic |
| Gender | `custom.gender` | Single line text | Men, Women, Unisex, Kids |
| Size | `custom.size` | Single line text | Small, Medium, Wide |

Use these values exactly so Search & Discovery filters stay clean.

## Recommended Extra Metafields

These are not required for the current theme, but they help customers and can be used later for richer product pages and filters.

| Name | Namespace and key | Type | Example |
|---|---|---|---|
| Frame Color | `custom.frame_color` | Single line text | Black |
| Lens Color | `custom.lens_color` | Single line text | Gray |
| Lens Width | `custom.lens_width` | Number integer | 52 |
| Bridge Width | `custom.bridge_width` | Number integer | 18 |
| Temple Length | `custom.temple_length` | Number integer | 140 |
| Rim Type | `custom.rim_type` | Single line text | Full Rim |
| Face Shape | `custom.face_shape` | Single line text | Oval, Round |
| Prescription Ready | `custom.prescription_ready` | True/false | true |

## Product Mode Rules

Use `custom.product_mode = prescription` for:

- Eyeglasses
- Blue Light Glasses
- Kids Glasses

Use `custom.product_mode = standard` for:

- Sunglasses

If a product is in the sunglasses collection, the theme should show the normal Shopify purchase buttons. If it is in prescription mode, the lens workflow appears and saves prescription/lens data as line item properties.

## Filter Setup

The collection sidebar supports two filter systems:

1. **Shopify native filters** using Search & Discovery. This is the proper launch setup.
2. **Fallback tag filters** only when native filters are unavailable and matching product tags exist.

For the proper setup:

1. Install **Shopify Search & Discovery**.
2. Open **Search & Discovery > Filters**.
3. Add product metafield filters for:
   - `custom.frame_shape`
   - `custom.material`
   - `custom.gender`
   - `custom.size`
4. Keep Shopify price filter enabled.
5. Make sure every product has those metafield values filled.

Installing Search & Discovery is not enough by itself. If the collection page shows only Availability and Price, the four product metafield filters have not yet been enabled in the app.

For fallback filtering, also add tags that match the visible filter values exactly, for example:

```text
Square, Acetate, Unisex, Medium
```

## Example Product

| Field | Value |
|---|---|
| Title | Urban Round Eyeglasses |
| Product type | Eyeglasses |
| Collection | Eyeglasses |
| Price | Rs 2,800 |
| Tags | Round, Metal, Unisex, Medium |
| `custom.product_mode` | prescription |
| `custom.frame_shape` | Round |
| `custom.material` | Metal |
| `custom.gender` | Unisex |
| `custom.size` | Medium |
| `custom.lens_width` | 50 |
| `custom.bridge_width` | 19 |
| `custom.temple_length` | 142 |

## Upload Quality Check

Before publishing a product:

- Product has at least two images.
- Product is assigned to the right collection.
- `custom.product_mode` is filled.
- Required filter metafields are filled.
- Matching fallback tags are added.
- Price and inventory are correct.
- No active variant has a zero price.
- SEO title and meta description are filled.
- Prescription products show the lens workflow on the product page.
