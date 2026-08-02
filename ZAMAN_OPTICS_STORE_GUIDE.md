# Zaman Optics Store Structure Guide

Last updated: August 2, 2026

## Peachmart Review Summary

Peachmart focuses on simple product-category shopping plus strong educational and trust content.

Observed category structure:

| Area | Peachmart Pattern | Zaman Optics Recommendation |
|---|---|---|
| Core shop | Screen glasses, sunglasses, blue cut glasses, transition glasses, intelligent glasses | Eyeglasses, Sunglasses, Blue Light Glasses, Transition Glasses, Contact Lenses |
| Gender | Male glasses, female glasses, unisex products | Men, Women, Unisex, Kids filters and optional collections |
| Lens use case | Screen protection, transition, prescription/non-prescription | Lens type and lens material selection on product page |
| Product attributes | Frame material, frame shape, gender, size, trend | Required product metafields and Search & Discovery filters |
| Trust content | Reviews, delivery policy, money-back promise, payment trust | Reviews, WhatsApp help, Pakistan delivery, prescription support, secure online checkout |

Sources reviewed:

- Peachmart homepage indexed content: https://peachmart.pk/
- Peachmart blue cut/screen category: https://peachmart.pk/blue-cut-screen-protection-glasses
- Peachmart product example with attributes: https://peachmart.pk/product/screen-glasses-1719

## Collections to Create

### Primary Navigation Collections

Create these first because they are used in header, homepage, and product mode logic:

| Collection | Handle | Type | Rule |
|---|---|---|---|
| Eyeglasses | `eyeglasses` | Manual or automated | Product type = Eyeglasses |
| Sunglasses | `sunglasses` | Manual or automated | Product type = Sunglasses |
| Blue Light Glasses | `blue-light-glasses` | Manual or automated | Product type = Blue Light Glasses |
| Kids Glasses | `kids-glasses` | Manual or automated | Product type = Kids Glasses |
| Contact Lenses | `contact-lenses` | Manual or automated | Product type = Contact Lenses |

### Lens/Use-Case Collections

These copy Peachmart's strongest discovery patterns without making the store too complex:

| Collection | Handle | Rule |
|---|---|---|
| Transition Glasses | `transition-glasses` | Tag or metafield = Photochromic / Transition |
| Screen Glasses | `screen-glasses` | Tag or metafield = Blue Cut |
| Power Free Frames | `power-free-frames` | Product mode = standard or tag = Power Free |
| Prescription Sunglasses | `prescription-sunglasses` | Product type = Sunglasses and prescription_ready = true |
| New Arrivals | `new-arrivals` | Created in last 30/60 days or manual |
| Best Sellers | `best-sellers` | Manual until real sales data exists |

### Optional Filter Landing Collections

Use these later for SEO pages:

| Collection | Handle |
|---|---|
| Men's Glasses | `mens-glasses` |
| Women's Glasses | `womens-glasses` |
| Round Glasses | `round-glasses` |
| Square Glasses | `square-glasses` |
| Aviator Glasses | `aviator-glasses` |
| Metal Frames | `metal-frames` |
| Acetate Frames | `acetate-frames` |

## Required Product Metafields

Create these under **Shopify Admin > Settings > Custom data > Products**.

| Name | Namespace and key | Type | Example Values | Filter? |
|---|---|---|---|---|
| Product Mode | `custom.product_mode` | Single line text | `prescription`, `standard` | No |
| Frame Shape | `custom.frame_shape` | Single line text | Round, Square, Rectangle, Aviator, Cat Eye | Yes |
| Material | `custom.material` | Single line text | Metal, Acetate, Plastic, TR90 | Yes |
| Gender | `custom.gender` | Single line text | Men, Women, Unisex, Kids | Yes |
| Size | `custom.size` | Single line text | Narrow, Medium, Wide | Yes |
| Lens Use | `custom.lens_use` | Single line text | Prescription, Screen, Sun, Fashion | Yes |
| Prescription Ready | `custom.prescription_ready` | True/false | true | Optional |

## Recommended Extra Metafields

| Name | Namespace and key | Type |
|---|---|---|
| Frame Color | `custom.frame_color` | Single line text |
| Lens Color | `custom.lens_color` | Single line text |
| Lens Width | `custom.lens_width` | Number integer |
| Bridge Width | `custom.bridge_width` | Number integer |
| Temple Length | `custom.temple_length` | Number integer |
| Rim Type | `custom.rim_type` | Single line text |
| Trend | `custom.trend` | Single line text |

## Product Upload Checklist

For each product:

1. Add a clear title: `Zaman "Visionary" Square`.
2. Add product type: Eyeglasses, Sunglasses, Blue Light Glasses, Kids Glasses, Contact Lenses.
3. Add vendor: Zaman Optics.
4. Add collection.
5. Add 4-6 images:
   - front product photo
   - angle photo
   - side photo
   - detail photo
   - optional lifestyle photo
6. Add SKU: example `ZO-EYE-SQ-001-BLK`.
7. Add price in PKR.
8. Fill required metafields.
9. Add fallback tags matching filter values:
   - `Square`
   - `Acetate`
   - `Unisex`
   - `Medium`
10. Add SEO title and meta description.

## How Filters Work

The collection template supports two systems:

1. **Native Shopify filters**
   - Install Shopify Search & Discovery.
   - Enable filters for:
     - `custom.frame_shape`
     - `custom.material`
     - `custom.gender`
     - `custom.size`
     - `custom.lens_use`
   - Shopify will output real filter URLs like `filter.p.m.custom.frame_shape=Square`.

2. **Fallback tag filters**
   - These appear only when native filters are unavailable and matching collection tags exist.
   - Tags must match the visible values exactly.

If only Availability and Price appear, Search & Discovery is installed but the product metafield filters are not enabled yet.

Use native filters for launch. Keep tags as a safety fallback.

## Product Page Logic

| Product Type | `custom.product_mode` | Product Page |
|---|---|---|
| Eyeglasses | `prescription` | Shows prescription lens workflow |
| Blue Light Glasses | `prescription` | Shows prescription lens workflow |
| Kids Glasses | `prescription` | Shows prescription lens workflow |
| Sunglasses | `standard` | Shows normal add to cart |
| Contact Lenses | `standard` | Shows normal add to cart |

Prescription line item properties captured:

- Order type
- Prescription method
- OD SPH, CYL, Axis
- OS SPH, CYL, Axis
- PD
- Lens type
- Lens material
- Coatings
- Estimated configuration total
- Lens pricing status

## Recommended Homepage Order

1. Hero
2. Category grid
3. Lens options
4. How it works
5. Best sellers
6. Why choose us
7. Verified reviews, once genuine customer feedback is available
8. FAQ

## Launch Admin Tasks

1. Create required collections.
2. Create required product metafields.
3. Install Search & Discovery.
4. Enable metafield filters.
5. Upload real product/category photos.
6. Add real WhatsApp number.
7. Configure supported checkout payment methods and only mention exact names after they are live.
8. Configure Pakistan shipping zones.
9. Place one test order and confirm line item properties appear in Shopify Admin.
10. Connect priced lens add-ons before treating the configuration estimate as the Shopify checkout total.
