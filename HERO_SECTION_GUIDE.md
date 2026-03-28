# Premium Hero Section for Zaman Optics

## Overview

The image-banner section has been enhanced with premium styling specifically designed for an optical/eyewear store. The updates include:

- **Large, bold headline text** with professional typography
- **Elegant subheadline** for tagline/description
- **Brand orange CTA button** (#FF8C00) with premium hover effects
- **Clean, minimalist spacing** throughout
- **Responsive design** for mobile, tablet, and desktop

## Features

### Typography

#### Headline
- **Font Weight**: 700 (Bold)
- **Letter Spacing**: -0.02em (tighter for premium feel)
- **Line Height**: 1.1 (tight, confident spacing)
- **Color**: #1A1A1A (dark text for contrast)
- **Responsive**: Scales with heading size options (h0-hxxl)

#### Subheadline/Tagline
- **Font Size**: 1.2rem (mobile) - 1.2rem (desktop)
- **Line Height**: 1.6 (breathing room)
- **Color**: rgba(26, 26, 26, 0.75) (slightly subdued)
- **Letter Spacing**: 0.3px (professional spacing)
- **Style Options**: body, subtitle, caption-with-letter-spacing

### Call-to-Action Button

#### Primary Button (Orange)
```css
Background: #FF8C00
Color: #FFFFFF (white)
Border Radius: 10px
Box Shadow: 0 4px 12px rgba(255, 140, 0, 0.15)
Hover Color: #E67E00 (darker orange)
Hover Shadow: 0 8px 20px rgba(255, 140, 0, 0.25)
Hover Effect: translateY(-2px) lift
```

#### Secondary Button
```css
Background: rgba(245, 245, 245, 0.95) (light gray)
Color: #1A1A1A (dark text)
Border: 1px solid #E8E8E8 (light gray border)
Border Radius: 10px
Hover Background: #F5F5F5
Hover Border: #FF8C00 (orange accent)
Hover Shadow: 0 4px 12px rgba(0, 0, 0, 0.05)
```

### Spacing

#### Mobile (< 750px)
- Box Padding: 2.5rem horizontal, 1.5rem vertical
- Heading Margin Bottom: 1.2rem
- Text Margin Bottom: 1.5rem
- Button Container Gap: 1rem (stacked vertically)
- Button Width: 100% (full width on mobile)

#### Tablet (750px - 989px)
- Box Padding: 4rem horizontal, 3rem vertical
- Heading Margin Bottom: 1.5rem
- Text Margin Bottom: 2.5rem
- Button Container Gap: 1.5rem
- Max Box Width: 75% (centered)

#### Desktop (990px+)
- Box Padding: 5rem horizontal, 4rem vertical
- Heading Margin Bottom: 2rem
- Text Margin Bottom: 3rem
- Button Container Gap: 2rem
- Max Box Width: 80% (centered)

## How to Use

### Section Settings

The section supports the following configuration options:

#### Image Settings
- **Image**: Primary background image for the hero
- **Image 2**: Optional second image (side-by-side layout)
- **Image Height**: adapt, small, medium, large
- **Image Overlay Opacity**: 0-100% transparency control
- **Image Behavior**: none, ambient (parallax), fixed, zoom-in

#### Content Position
- **Desktop Position**: top-left, top-center, top-right, middle-left, middle-center (recommended), middle-right, bottom-left, bottom-center, bottom-right
- **Desktop Alignment**: left, center (recommended), right
- **Mobile Position**: Text below or overlaid
- **Mobile Alignment**: left, center (recommended), right

#### Color Scheme
- **Color Scheme**: Customize text and background colors via Shopify's color scheme system

### Blocks Configuration

#### Block 1: Heading
**Recommended Settings:**
- Text: "Find Your Perfect Frame"
- Size: hxl or hxxl (for maximum impact)
- Add compelling brand message

**Example:**
```
"Experience Premium Vision"
"Discover Clarity, Define Style"
"Optical Excellence, Perfected"
```

#### Block 2: Subheadline/Tagline
**Recommended Settings:**
- Text: Brief, elegant tagline
- Style: subtitle (larger, refined)
- Keep it short and impactful

**Example:**
```
"Handcrafted frames for the discerning eye"
"Where style meets superior vision"
"Premium eyewear for those who see the difference"
```

#### Block 3: CTA Button(s)
**Primary Button (Recommended):**
- Label: "Shop Collections" or "Explore Frames"
- Style: Primary (orange #FF8C00)
- Link: /collections/all or specific collection

**Secondary Button (Optional):**
- Label: "Book Consultation" or "Learn More"
- Style: Secondary (light gray)
- Link: /pages/consultation or contact page

## Design Philosophy

### Minimalist Approach
- **Clean Layout**: Generous whitespace, no clutter
- **Breathing Room**: Ample spacing between elements
- **Focus**: Content draws attention without distraction
- **Typography**: Premium fonts with careful hierarchy

### Premium Feel
- **Subtle Shadows**: Refined depth without drama
- **Smooth Transitions**: 0.3s cubic-bezier for elegant feel
- **Rounded Corners**: 10px radius for modern look
- **High Contrast**: Text is always readable
- **Professional Spacing**: Mathematical, balanced layout

### Brand Integration
- **Orange Accent**: #FF8C00 for all CTAs
- **Dark Text**: #1A1A1A for readability
- **Light Backgrounds**: #F5F5F5 for breathing room
- **Professional Typography**: Confident, refined appearance

## Responsive Behavior

The hero section responds intelligently to different screen sizes:

### Mobile (< 750px)
- Full-width layout
- Stacked buttons
- Optimized touch targets (min 44px height)
- Readable text without zooming
- Images scale for mobile bandwidth

### Tablet (750px - 989px)
- Improved spacing
- Side-by-side buttons (if using 2)
- Larger headline for readability
- Optimal line lengths

### Desktop (990px+)
- Maximum visual impact
- Generous spacing
- Wide comfortable line lengths
- Full-resolution images

## CSS Classes

### Main Container
- `.banner` - Main section wrapper
- `.banner__content` - Content positioning container
- `.banner__box` - Premium content box

### Typography
- `.banner__heading` - Headline (with h0-hxxl modifiers)
- `.banner__text` - Subheadline/tagline text

### Buttons
- `.banner__buttons` - Button container
- `.button--primary` - Orange CTA button
- `.button--secondary` - Secondary action button

## Customization Examples

### Change Button Colors (if needed)
Edit the CSS variables in `premium-design.css`:

```css
.banner .button--primary {
  background-color: #FF8C00; /* Change this */
  color: #FFFFFF;
}

.banner .button--primary:hover {
  background-color: #E67E00; /* Hover color */
}
```

### Adjust Spacing
Modify padding in `section-image-banner.css`:

```css
.banner__box {
  padding: 3rem 2rem;  /* Adjust these values */
}

/* Tablet */
@media screen and (min-width: 750px) {
  .banner__box {
    padding: 4rem 3rem;  /* Change spacing */
  }
}
```

### Typography Adjustments
Modify text styles:

```css
.banner__heading {
  letter-spacing: -0.02em;  /* Adjust letter spacing */
  font-weight: 700;         /* Adjust boldness */
}

.banner__text {
  font-size: 1.2rem;        /* Adjust size */
  line-height: 1.6;         /* Adjust line height */
}
```

## Accessibility Features

✓ **Semantic HTML**: Proper heading hierarchy (h2 tags)
✓ **Color Contrast**: WCAG AA compliant on all text
✓ **Touch Targets**: Minimum 44px height for buttons
✓ **Focus States**: Clear visible focus indicators
✓ **Alt Text**: Image alt text support via Shopify
✓ **Responsive**: Readable on all screen sizes

## Performance Considerations

- Images are lazy-loaded by default
- Responsive image sizes prevent overloading mobile
- CSS animations use hardware acceleration
- Shadows and effects are lightweight
- No JavaScript required for basic functionality

## Browser Support

✓ Chrome/Edge (latest)
✓ Firefox (latest)
✓ Safari (latest)
✓ Mobile browsers (iOS Safari, Chrome Mobile)

Requires CSS Grid, Flexbox, and CSS Variables support.

## Related Files

- **Section File**: `sections/image-banner.liquid`
- **CSS File**: `assets/section-image-banner.css`
- **Brand CSS**: `assets/premium-design.css`
- **Base CSS**: `assets/base.css` (CSS variables)
- **Theme Layout**: `layout/theme.liquid`

## Support & Customization

For further customization:

1. Refer to `STYLE_GUIDE.md` for brand colors
2. Check `QUICK_REFERENCE.md` for CSS utilities
3. See `premium-design.css` for button styles
4. Review `base.css` for typography variables

---

**Last Updated**: March 28, 2026
**Optimized For**: Zaman Optics - Premium Optical Store
**Version**: 1.0
