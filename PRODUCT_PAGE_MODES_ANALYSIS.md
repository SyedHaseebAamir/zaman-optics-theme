# Product Page Modes Implementation Analysis

## Overview
The Zaman Optics product page needs to support two distinct user experiences:
1. **Prescription Mode** - For Eyeglasses, Blue Light, Kids products (with multi-step lens selection)
2. **Standard Mode** - For Sunglasses (simple add-to-cart)

---

## Current Product Page Architecture

### Main Files
- **`templates/product.json`** (1 line - single JSON config)
  - Defines product template structure with sections and blocks
  - Main section: `main-product` type
  - Blocks: vendor, title, price, variant_picker, quantity_selector, buy_buttons, description, share, rating, complementary

- **`sections/main-product.liquid`** (2269 lines)
  - Root element: `<product-info>` custom element
  - Key data attributes:
    - `data-product-id="{{ product.id }}"`
    - `data-url="{{ product.url }}"`
    - `data-section="{{ section.id }}"`
  - Block system: Iterates through `section.blocks` with case statements
  - Related snippets: `product-variant-picker`, `buy-buttons`, `product-media-gallery`

- **`snippets/buy-buttons.liquid`** (152 lines)
  - Wraps product form in `<product-form>` custom element
  - Contains form with `id: product_form_id`
  - Hidden input with variant ID: `name="id"`
  - Submit button: `id="ProductSubmitButton-{{ section_id }}"`
  - Dynamic checkout payment button support

- **`assets/product-form.js`** (143+ lines)
  - Custom `product-form` element
  - Handles form submission via `onSubmitHandler()`
  - Posts to `routes.cart_add_url`
  - Publishes cart update events via PUB_SUB_EVENTS

---

## Mode Detection Strategy

### Recommended Approach: Product Metafield + Collections

Shopify products can have:
1. **Collections** - Already used in theme (e.g., `product.collections`)
2. **Metafields** - Custom data fields (e.g., `product.metafields.custom.product_mode`)
3. **Product Type** - Existing Shopify field
4. **Tags** - Existing Shopify field

**Best Practice**: Use product metafield `custom.product_mode` for explicit control
- Value: `"prescription"` or `"standard"`
- Fallback: Check collections/tags if metafield empty
- Default: "standard" mode

### Implementation Locations for Mode Detection

1. **In `main-product.liquid` (top of file)**
   ```liquid
   {% assign product_mode = product.metafields.custom.product_mode.value | default: 'standard' %}
   ```

2. **In Product Form Submission**
   - Modify `buy-buttons.liquid` to conditionally render prescription workflow
   - Create wrapper logic before standard cart submission

---

## Prescription Mode Workflow

### Components Needed

#### 1. Lens Selection Section
- **File**: `sections/lens-selector.liquid` (NEW)
- **Purpose**: Multi-step lens customization form
- **Steps**:
  - Step 1: Lens Type (Single Vision, Progressive, Bifocal)
  - Step 2: Lens Material (Glass, Plastic, Polycarbonate)
  - Step 3: Coatings (Anti-glare, Blue Light, UV Protection)
  - Step 4: Summary & Confirmation

#### 2. Prescription Form Snippet
- **File**: `snippets/prescription-form.liquid` (NEW)
- **Purpose**: Collects prescription data
- **Fields**:
  - OD (Right Eye): SPH, CYL, AXIS
  - OS (Left Eye): SPH, CYL, AXIS
  - PD (Pupillary Distance)
  - Upload prescription document (optional)

#### 3. Modified Buy Buttons for Prescription
- **File**: `snippets/buy-buttons.liquid` (MODIFIED)
- **Conditional Logic**:
  - Check `product_mode`
  - If "prescription": Show prescription workflow before add-to-cart
  - If "standard": Show standard add-to-cart

#### 4. Product Page JavaScript Logic
- **File**: `assets/product-mode.js` (NEW)
- **Purpose**: Handle mode-specific behaviors
- **Functions**:
  - Initialize prescription form validation
  - Handle step progression
  - Store prescription data in form hidden fields
  - Validate before cart submission

#### 5. Prescription Styling
- **File**: `assets/section-prescription.css` (NEW)
- **Styles**:
  - Step indicator (progress bar)
  - Form styling with brand colors
  - Button states for step navigation
  - Responsive layout (mobile-first)

---

## Implementation Steps

### Phase 1: Foundation (Metafield Setup & Detection)
1. ✅ Analyze current structure (DONE)
2. Document metafield requirements
3. Add mode detection logic to `main-product.liquid`

### Phase 2: Prescription Components (NEW)
1. Create `sections/lens-selector.liquid`
2. Create `snippets/prescription-form.liquid`
3. Create `assets/section-prescription.css`
4. Create `assets/product-mode.js`

### Phase 3: Form Integration
1. Modify `snippets/buy-buttons.liquid` for conditional rendering
2. Add validation logic for prescription data
3. Update form submission to include prescription fields

### Phase 4: Standard Mode Enhancements (Optional)
1. Apply brand colors to existing buy buttons
2. Enhance variant picker styling
3. Optimize quantity selector

### Phase 5: Testing & Documentation
1. Test mode detection
2. Test prescription workflow end-to-end
3. Create setup guide for merchants

---

## Key Technical Considerations

### 1. Product Form Structure
```liquid
Current Form ID: product-form-{{ section.id }}
Hidden Input: name="id" value="{{ variant_id }}"
```

For prescription mode, we need to:
- Add hidden inputs for prescription data
- Validate all fields before submission
- Prevent submission if required fields missing

### 2. Block System Compatibility
- **Variant Picker**: Show in both modes (may be customized)
- **Quantity Selector**: Show in both modes
- **Buy Buttons**: Different rendering per mode
- **Description**: Show in both modes

### 3. Data Storage Strategy
```html
<!-- Prescription data hidden inputs -->
<input type="hidden" name="attributes[Lens Type]" value="">
<input type="hidden" name="attributes[Right Eye SPH]" value="">
<input type="hidden" name="attributes[Right Eye CYL]" value="">
<!-- ... etc ... -->
```

These will appear as "Line item properties" in cart/orders.

### 4. Cart Display
- Line item properties will be visible in cart
- Can show prescription summary in order confirmation
- Fulfillment team can see custom lens data

---

## File Structure Overview

```
sections/
  └── main-product.liquid (MODIFY - add mode detection)
  └── lens-selector.liquid (NEW - multi-step form)

snippets/
  └── buy-buttons.liquid (MODIFY - conditional rendering)
  └── prescription-form.liquid (NEW - prescription data collection)

assets/
  └── product-form.js (NO CHANGE - works with new structure)
  └── product-mode.js (NEW - mode-specific behavior)
  └── section-prescription.css (NEW - styling)

templates/
  └── product.json (NO CHANGE - handles all modes)
```

---

## Configuration for Merchants

### To Set Up Prescription Mode for a Product:

1. Go to Shopify Admin > Products > [Product Name]
2. Scroll to "App sections" or "Metafields"
3. Find or create `custom.product_mode` metafield
4. Set value to `"prescription"`
5. Save product

### For Collections-Based Approach (Alternative):
1. Create collection "Prescription Products"
2. Add Eyeglasses, Blue Light, Kids products
3. In `main-product.liquid`, check if product in this collection

---

## Next Steps

1. **Confirm metafield approach** with merchant
2. **Design prescription form UX** - mock up steps
3. **Create lens-selector.liquid component**
4. **Implement validation logic**
5. **Test end-to-end workflow**
6. **Add merchant setup documentation**

---

## Notes

- Metafield approach is most flexible and scalable
- Line item properties make prescription data visible throughout order flow
- Can add email notification with prescription summary
- Future: Could integrate with lab fulfillment system
- Keeping standard mode unchanged ensures no disruption to existing flow
