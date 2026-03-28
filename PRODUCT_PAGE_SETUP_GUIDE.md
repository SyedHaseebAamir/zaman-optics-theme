# Product Page Modes - Merchant Setup Guide

## Overview

The Zaman Optics theme now supports two distinct product page experiences:

1. **Prescription Mode** - Multi-step lens selection form for Eyeglasses, Blue Light, and Kids products
2. **Standard Mode** - Simple variant picker and add-to-cart (default for Sunglasses)

This guide explains how to set up and configure products to use each mode.

---

## Quick Start

### Setting a Product to Prescription Mode

1. Go to **Shopify Admin > Products**
2. Select the product to edit
3. Scroll to **Metafields** section
4. Look for namespace **`custom`** and key **`product_mode`**
5. Set the value to: `prescription`
6. Click **Save**

### Setting a Product to Standard Mode

1. Go to **Shopify Admin > Products**
2. Select the product to edit
3. Scroll to **Metafields** section
4. Set **`custom.product_mode`** to: `standard`
5. Click **Save**

*Or leave empty - Standard is the default if not specified.*

---

## Product Mode Detection

The theme uses a smart detection system with fallback options:

### Priority Order:
1. **Metafield** - `product.metafields.custom.product_mode` (highest priority)
2. **Collection** - Checks if product is in "Prescription Products", "Eyeglasses", "Blue Light", or "Kids" collections
3. **Default** - "standard" mode (lowest priority)

### Recommendation:
Use **metafield approach** for explicit control. It's the most reliable and gives you exact control per product.

---

## Prescription Mode Details

### What It Includes

When a product is set to **Prescription Mode**, customers see a 4-step form:

#### Step 1: Prescription Data
Customers enter their prescription values:
- **Right Eye (OD):**
  - SPH (Sphere) - Required
  - CYL (Cylinder) - Optional
  - AXIS - Optional
  
- **Left Eye (OS):**
  - SPH (Sphere) - Required
  - CYL (Cylinder) - Optional
  - AXIS - Optional
  
- **Pupillary Distance (PD)** - Required (in mm)

#### Step 2: Lens Type & Material
- **Lens Type:** Single Vision, Progressive, Bifocal
- **Lens Material:** Plastic, Polycarbonate, High Index, Glass

#### Step 3: Coatings & Treatments
- Anti-Glare Coating (checkbox)
- Blue Light Protection (checkbox)
- UV Protection (checkbox)
- Scratch Resistant (checkbox)

#### Step 4: Review
Summary of all entered information before adding to cart.

### Cart Display

After adding to cart, prescription details appear as **Line Item Properties** visible to:
- Customers in cart/checkout
- Merchants in order details
- Fulfillment team

Example:
```
Product: Classic Eyeglasses
OD SPH: -2.50
OS SPH: -1.75
Lens Type: Progressive
Lens Material: Polycarbonate
Anti-Glare Coating: Yes
```

---

## Standard Mode Details

### What It Includes

Default product page with:
- Variant picker (color, size, style, etc.)
- Quantity selector
- Add to cart button
- Dynamic checkout button (if enabled)
- Pickup availability
- All existing product page blocks

No prescription form is shown.

---

## Recommended Product Categorization

### Use Prescription Mode For:
- Eyeglasses/Spectacles
- Blue Light Glasses
- Kids Eyeglasses
- Progressive Lenses
- Prescription Sunglasses (optional)

### Use Standard Mode For:
- Sunglasses (non-prescription)
- Accessories (cases, lens cleaners, etc.)
- Contact lenses
- Gift cards
- Any non-eyeglass products

---

## Setting Up Collections (Alternative Method)

If you prefer collection-based detection instead of metafields:

### Create Collections for Prescription Products:

1. Go to **Shopify Admin > Collections**
2. Click **Create collection**
3. Name it: **"Prescription Products"** (or "Eyeglasses", "Blue Light", "Kids")
4. Add products to this collection
5. The theme will automatically detect and show prescription form

**Note:** Metafield takes priority. If both are set, metafield wins.

---

## Step-by-Step Setup Example

### Example 1: Setting Up Eyeglasses Product as Prescription Mode

1. Navigate to: **Shopify Admin > Products > Classic Eyeglasses**

2. Scroll down to find **Metafields** section
   - If you don't see Metafields, you may need to create the custom namespace first

3. Create metafield if needed:
   - **Namespace:** `custom`
   - **Key:** `product_mode`
   - **Type:** Single line text

4. Set the value: `prescription`

5. Click **Save product**

6. Visit the product page in your store - you should now see the 4-step form instead of a regular variant picker

### Example 2: Setting Up Sunglasses Product as Standard Mode

1. Navigate to: **Shopify Admin > Products > Classic Sunglasses**

2. Leave the metafield empty (or set to `standard`)

3. Click **Save product**

4. The product page will show the standard add-to-cart form

---

## Using Variants with Prescription Mode

Prescription mode works alongside variants! Customers can still:
- Select from multiple frames (variants)
- Choose prescription parameters
- Pick coatings

### How It Works:

1. **Variant Selection** - Choose frame style (color, size)
2. **Prescription Form** - Enter lens details
3. **Submit** - Both variant and prescription data add to cart

The cart will show:
```
Product: Classic Eyeglasses (Matte Black, Medium)
- OD SPH: -2.50
- Lens Type: Progressive
- Lens Material: Polycarbonate
```

---

## Troubleshooting

### Prescription Form Not Appearing

**Problem:** Product set to prescription mode but regular form still shows

**Solutions:**
1. Clear browser cache and reload
2. Check metafield is set to exactly `prescription` (lowercase)
3. Check no spacing before/after the value
4. If using collections, verify product is in the right collection
5. Preview in a different browser

### Prescription Data Not in Cart

**Problem:** Customer enters prescription but data doesn't appear in cart

**Solutions:**
1. Check product form submission completed without errors
2. Verify all required fields were filled (SPH for both eyes, PD)
3. Check JavaScript console for errors (F12 > Console tab)
4. Ensure product-mode.js loaded (check network tab)

### Missing Metafield Section

**Problem:** No Metafields section visible in product editor

**Solutions:**
1. Go to **Settings > Metafields > Manage namespaces and keys**
2. Verify `custom` namespace exists
3. Add `product_mode` key if missing:
   - Namespace: `custom`
   - Name: `product_mode`
   - Type: `Single line text`
4. Refresh product page editor

---

## Customization Options

### Changing Step Labels

Edit translations in Shopify admin:
- **Settings > Language > Edit locale**
- Search for `products.prescription`
- Update labels as needed

Example labels to customize:
- `products.prescription.step_1_label`
- `products.prescription.step_2_label`
- `products.prescription.button_next`
- `products.prescription.button_previous`

### Hiding Optional Fields

To make fields optional or required, edit `snippets/prescription-workflow.liquid`:
- Remove `required` attribute from field to make it optional
- Add `required` attribute to field to make it required

### Adding Additional Coatings

Edit **Step 3** in `snippets/prescription-workflow.liquid` to add more coating options:

```liquid
<label class="prescription-form__checkbox-label">
  <input
    type="checkbox"
    name="attributes[My New Coating]"
    value="Yes"
    class="prescription-form__checkbox"
  >
  <span class="prescription-form__checkbox-text">
    {{ 'products.prescription.coating_new' | t: default: 'My New Coating' }}
  </span>
</label>
```

---

## Order Management

### Viewing Prescription Data in Orders

1. Go to **Shopify Admin > Orders**
2. Click on an order containing a prescription product
3. Scroll to **Line items** section
4. Click the arrow to expand product details
5. Prescription data appears under **Properties**

Example:
```
Classic Eyeglasses
  OD SPH: -2.50
  OD CYL: -1.00
  OD AXIS: 45
  OS SPH: -2.75
  OS CYL: -0.75
  OS AXIS: 130
  PD: 62.0
  Lens Type: Progressive
  Lens Material: Polycarbonate
  Anti-Glare Coating: Yes
  Blue Light Protection: Yes
```

### Exporting Prescription Data

Use **Shopify Admin > Orders > Export** to download orders with prescription details in CSV format.

---

## Performance Notes

- **Prescription Mode** adds ~5KB JavaScript (lazy loaded)
- **Styling** adds ~8KB CSS (minified and gzipped ~2KB)
- No impact on Standard Mode products
- Form validation is client-side (instant feedback)

---

## FAQ

**Q: Can I use prescription mode for sunglasses?**
A: Yes! Set any product to prescription mode. Just note that not all sunglasses customers may have prescriptions.

**Q: What if a customer enters invalid prescription values?**
A: The form validates required fields (SPH, PD) and won't allow submission if empty. Optional fields like CYL and AXIS can be left blank.

**Q: Can prescription data be edited after purchase?**
A: Only by contacting customer service. The form data is stored in the order line item properties.

**Q: Is prescription data secure?**
A: Yes. Data is stored as line item properties in Shopify and encrypted like all order data.

**Q: Can I add a file upload for prescription documents?**
A: This requires custom development. Contact support for enhancement requests.

**Q: Does this work with the Shopify mobile app?**
A: The prescription form is web-based. It works on mobile browsers but may look different on the mobile app.

---

## Support

For issues or customization requests, please:
1. Check this guide's Troubleshooting section
2. Review code comments in implementation files
3. Contact the development team with:
   - Product URL
   - Screenshot of issue
   - Browser/device information
   - Steps to reproduce

---

## Files Modified/Created

**Main Files:**
- `sections/main-product.liquid` - Mode detection logic
- `snippets/buy-buttons.liquid` - Conditional rendering
- `snippets/prescription-workflow.liquid` - Prescription form (NEW)
- `assets/section-prescription.css` - Prescription styling (NEW)
- `assets/product-mode.js` - Prescription logic (NEW)

**Documentation:**
- `PRODUCT_PAGE_MODES_ANALYSIS.md` - Technical overview
- `PRODUCT_MODES_IMPLEMENTATION_CHECKLIST.md` - Development checklist
- This file - Merchant setup guide

---

**Last Updated:** March 2026
**Version:** 1.0
**Status:** Ready for Production
