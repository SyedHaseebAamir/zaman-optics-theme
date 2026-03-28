# Product Page Modes - Implementation Checklist

## Phase 1: Foundation & Detection ✅ (COMPLETED)

- [x] **1.1** - Add mode detection logic to `main-product.liquid`
  - Added Liquid variable to detect product mode
  - Defaults to "standard" if not set
  - Documented metafield naming convention
  - ✅ DONE: Lines 1-37 of main-product.liquid

- [x] **1.2** - Update buy-buttons.liquid wrapper
  - Added conditional rendering based on mode
  - Routes to prescription view or standard view
  - Passes mode flag to child components
  - ✅ DONE: Fully refactored buy-buttons.liquid with mode detection

- [x] **1.3** - Create mode documentation
  - Explained how to set product mode in Shopify admin
  - Documented metafield structure
  - Provided merchant setup guide
  - ✅ DONE: PRODUCT_PAGE_MODES_ANALYSIS.md created

---

## Phase 2: Prescription Components ✅ (COMPLETED)

- [x] **2.1** - Create `sections/lens-selector.liquid` → `snippets/prescription-workflow.liquid`
  - Multi-step interface (4 steps)
  - Step 1: Prescription data collection (OD/OS)
  - Step 2: Lens Type and Material selection
  - Step 3: Coatings/Treatments selection
  - Step 4: Summary/Review
  - Step navigation buttons (Previous/Next/Complete)
  - Progress indicator
  - ✅ DONE: 450+ lines in prescription-workflow.liquid

- [x] **2.2** - Create `snippets/prescription-form.liquid`
  - Integrated into prescription-workflow.liquid
  - Prescription data input fields (SPH, CYL, AXIS)
  - Right Eye (OD) and Left Eye (OS) sections
  - Pupillary Distance (PD) field
  - Form validation helper structure
  - ✅ DONE: Complete form structure with all required fields

- [x] **2.3** - Create `assets/section-prescription.css`
  - Step indicator styling with progress tracking
  - Form input styling (brand colors #FF8C00)
  - Button styles for step navigation
  - Mobile responsive layout
  - Transitions between steps
  - Success/error states
  - Accessibility features (prefers-reduced-motion, high contrast)
  - ✅ DONE: 700+ lines of premium CSS

- [x] **2.4** - Create `assets/product-mode.js`
  - PrescriptionWorkflow custom element class
  - Step progression logic (next/previous)
  - Form validation per step
  - Data persistence via form fields
  - Event handling and DOM updates
  - Integration with product-form
  - Review section auto-update
  - ✅ DONE: 350+ lines of JavaScript with full functionality

---

## Phase 3: Form Integration (IN PROGRESS)

- [x] **3.1** - Modify `snippets/buy-buttons.liquid`
  - Added mode detection at top
  - Conditional Liquid rendering
  - Prescription mode branch routes to prescription-workflow
  - Standard mode branch (existing form)
  - ✅ DONE: Full refactor with dual mode support

- [ ] **3.2** - Add hidden input fields
  - Create mechanism to inject prescription data into cart form
  - Use Shopify line item properties (attributes[...])
  - Validate all required fields filled before submission
  - (PARTIALLY DONE - prescription-workflow.liquid has all fields)

- [ ] **3.3** - Update form submission
  - Attach prescription data to form before submit
  - Validate in JavaScript before actual form submission
  - Show error messages if validation fails
  - Disable submit button during validation
  - (PARTIALLY DONE - product-mode.js handles validation)

---

## Phase 4: Styling & UX (NOT STARTED)

- [ ] **4.1** - Apply brand colors to prescription UI
  - Primary buttons: #FF8C00 (orange)
  - Form inputs: #F5F5F5 background, #E8E8E8 borders
  - Text: #1A1A1A
  - Border radius: 10px

- [ ] **4.2** - Create step progress visual
  - Numbered steps (1, 2, 3, 4)
  - Completed step highlighting
  - Current step emphasis
  - Linear progress bar

- [ ] **4.3** - Add form field styling
  - Input focus states
  - Error state highlighting
  - Helper text styling
  - Optional field indicators

- [ ] **4.4** - Mobile responsiveness
  - Stack form fields vertically
  - Full-width buttons
  - Adjust step indicator for small screens
  - Touch-friendly button sizing (44px+ height)

---

## Phase 5: Testing (NOT STARTED)

- [ ] **5.1** - Functional testing
  - Test mode detection (prescription vs standard)
  - Test all form validation rules
  - Test step navigation (forward/back)
  - Test form submission with prescription data
  - Test cart display of line item properties

- [ ] **5.2** - Browser compatibility
  - Chrome/Edge (latest)
  - Firefox (latest)
  - Safari (latest)
  - Mobile browsers

- [ ] **5.3** - Edge cases
  - Variant selection with prescription
  - Quantity adjustments
  - Back button navigation
  - Form field clearing

- [ ] **5.4** - Data integrity
  - Verify prescription data in cart
  - Verify prescription data in order
  - Test with multiple variants
  - Test duplicate line item properties

---

## Phase 6: Documentation (NOT STARTED)

- [ ] **6.1** - Merchant documentation
  - Product Page Modes Setup Guide
  - How to enable prescription mode
  - How to configure lens options
  - Troubleshooting guide

- [ ] **6.2** - Developer documentation
  - Code comments for all new files
  - Technical architecture overview
  - Future enhancement suggestions
  - Known limitations

- [ ] **6.3** - Update STYLE_GUIDE.md
  - Add prescription form styling specs
  - Document new CSS classes
  - Add step indicator specifications

---

## Priority Matrix

**High Priority - Must Have:**
- Mode detection logic
- Basic prescription form with fields
- Form validation
- Cart submission with prescription data
- Mobile responsive layout

**Medium Priority - Should Have:**
- Multi-step interface with progress
- Detailed field validation messages
- CSS styling with brand colors
- Lens selector customization UI

**Low Priority - Nice to Have:**
- File upload for prescription image
- Prescription template presets
- Advanced validation rules
- Order confirmation email customization

---

## Current Status

**Completed:**
- ✅ CSS brand system (base.css, premium-design.css)
- ✅ Hero section enhancements
- ✅ Architecture analysis & documentation
- ✅ Phase 1: Foundation & Detection (main-product.liquid, buy-buttons.liquid, documentation)
- ✅ Phase 2: Prescription Components (prescription-workflow.liquid, section-prescription.css, product-mode.js)

**In Progress:**
- 🔄 Phase 3: Form Integration (3.1 complete, 3.2-3.3 in progress)

**Next:**
- 📋 Complete Phase 3: Form Integration
- 📋 Phase 4: Styling & UX
- 📋 Phase 5: Testing
- 📋 Phase 6: Documentation

---

## File Dependencies

```
main-product.liquid
  ↓ (uses mode detection)
buy-buttons.liquid (MODIFIED)
  ├── /prescription/ path
  │   ├── lens-selector.liquid (NEW)
  │   ├── prescription-form.liquid (NEW)
  │   └── product-mode.js (NEW)
  │       └── section-prescription.css (NEW)
  └── /standard/ path
      └── existing form structure
```

---

## Testing Checklist Template

### For Each Product Type:
- [ ] Prescription Mode Products (Eyeglasses, Blue Light, Kids)
  - [ ] Product loads with prescription form
  - [ ] All form fields visible and functional
  - [ ] Step navigation works
  - [ ] Validation prevents empty submissions
  - [ ] Data adds to cart correctly
  - [ ] Cart shows prescription details

- [ ] Standard Mode Products (Sunglasses)
  - [ ] Product loads with normal form
  - [ ] Variant selection works
  - [ ] Quantity selection works
  - [ ] Add to cart works normally
  - [ ] No prescription fields in cart

---

## Notes

- Keep all existing functionality intact for standard mode
- Use progressive enhancement (works without JS, better with JS)
- Ensure accessibility (ARIA labels, keyboard navigation)
- Mobile-first CSS approach
- Reuse existing premium-design.css components where possible
