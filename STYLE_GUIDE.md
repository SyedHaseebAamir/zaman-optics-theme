# Zaman Optics Style Guide

## Brand Feel

Zaman Optics should feel premium, clean, local, trustworthy, and easy to shop. The interface should support repeated shopping tasks, not look like a generic landing page.

## Color Tokens

```css
--zaman-accent: #0F766E;
--zaman-accent-dark: #0B5F59;
--zaman-accent-soft: #F0FDFA;
--zaman-black: #1D1D1F;
--zaman-muted: #6E6E73;
--zaman-border: #E8E8ED;
--zaman-surface: #F5F5F7;
--zaman-white: #FFFFFF;
```

## Usage

- Use `#0F766E` for primary CTAs, active states, focus rings, and small accents.
- Use `#1D1D1F` for headings and primary text.
- Use white cards on warm gray or white page backgrounds.
- Avoid orange and old blue accents. They do not belong in the current brand system.
- Use neutral borders and restrained shadows on card hover.

## Shape and Elevation

- Buttons: `10px`
- Inputs: `10px`
- Cards: `10px` to `16px`
- Large panels: `16px` to `22px`
- Product images: soft gray/warm surface background with `object-fit: contain`

## Buttons

Primary:
- Teal background
- White text
- 10px radius
- Slight lift on hover

Secondary:
- White background
- Black border/text
- Black background and white text on hover

Black CTA:
- Use for strong purchase actions where contrast is needed, such as Add to Cart in the prescription flow.

## Product Cards

Product cards should:
- Keep full eyewear frame visible
- Use contained product imagery
- Show price clearly in black
- Use teal only for active and CTA accents
- Avoid cropped frame images

## Prescription Flow

The prescription flow should be clear and compact:
- Frame Only and With Prescription options first
- Manual/upload prescription entry
- Lens type, material, coatings
- Estimated configuration total shown before Add to Cart
- All selected options saved as line item properties
- Lens prices must be connected to variants, add-on products, or an options app before checkout can charge them

## Pakistan Localization

Use:
- PKR / Rs
- Secure online payments available
- Available payment methods shown at checkout
- Pakistan delivery
- WhatsApp support
- Delivery across Pakistan

Avoid:
- Dollar pricing
- International shipping copy unless actually supported
- Virtual try-on claims unless implemented
