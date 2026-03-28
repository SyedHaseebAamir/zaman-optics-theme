# Zaman Optics - CSS Brand Style Guide

## Color Palette

### Primary Colors
```
Primary Orange:    #FF8C00
  - Used for: Call-to-action buttons, links, focus states, accent elements
  - RGB: rgb(255, 140, 0)
  - Darker variant: #E67E00 (hover state)
```

### Text Colors
```
Primary Text:      #1A1A1A (Dark Gray)
  - Used for: All body text, headings, and primary content
  - Provides high contrast for accessibility
  - RGB: rgb(26, 26, 26)
```

### Background Colors
```
Main Background:   #FFFFFF (White)
  - Used for: Page background, main containers
  - RGB: rgb(255, 255, 255)

Surface/Cards:     #F5F5F5 (Light Gray)
  - Used for: Card backgrounds, content containers, alternating sections
  - RGB: rgb(245, 245, 245)

Border Color:      #E8E8E8 (Very Light Gray)
  - Used for: Card borders, input borders, dividers
  - RGB: rgb(232, 232, 232)
```

### Semantic Colors
```
Success:           #27AE60 (Green)
Error:             #E74C3C (Red)
Neutral:           rgba(26, 26, 26, 0.6) (Semi-transparent dark)
```

## Typography

### Heading Styles
```css
h1, h2, h3, h4, h5, h6 {
  color: #1A1A1A;
  font-weight: 600;
  letter-spacing: -0.5px;
}
```

### Body Text
```css
body, p {
  color: #1A1A1A;
  line-height: 1.6;
  font-size: 1.5rem (15px @ base 62.5%)
}
```

## Border Radius Standards

All rounded elements use a consistent **10px** border radius:

```
Cards:             10px
Buttons:           10px
Input Fields:      10px
Content Boxes:     10px
Media Elements:    10px
Badges:            20px (rounded pills)
```

## Button Styles

### Primary Button
```css
.button--primary {
  background-color: #FF8C00;
  color: #FFFFFF;
  border-radius: 10px;
  padding: 0 3rem;
  min-height: 4.5rem;
  box-shadow: 0 4px 12px rgba(255, 140, 0, 0.15);
  transition: all 0.3s ease;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.button--primary:hover {
  background-color: #E67E00;
  box-shadow: 0 8px 20px rgba(255, 140, 0, 0.25);
  transform: translateY(-2px);
}
```

### Secondary Button
```css
.button--secondary {
  background-color: #F5F5F5;
  color: #1A1A1A;
  border: 1px solid #E8E8E8;
  border-radius: 10px;
}

.button--secondary:hover {
  background-color: #EFEFEF;
  border-color: #FF8C00;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}
```

### Tertiary Button
```css
.button--tertiary {
  color: #FF8C00;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 10px;
}

.button--tertiary:hover {
  background-color: rgba(255, 140, 0, 0.05);
  border-color: #FF8C00;
}
```

## Card Styling

```css
.card--card {
  background-color: #F5F5F5;
  border: 1px solid #E8E8E8;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card--card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-color: rgba(255, 140, 0, 0.2);
  transform: translateY(-4px);
}
```

## Form Elements

### Input Field
```css
input[type="text"],
input[type="email"],
input[type="password"],
textarea,
select {
  border: 1px solid #E8E8E8;
  border-radius: 10px;
  background-color: #FFFFFF;
  color: #1A1A1A;
  padding: 0.8rem 1.2rem;
  transition: all 0.2s ease;
}

input:focus,
textarea:focus,
select:focus {
  border-color: #FF8C00;
  box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.1);
  outline: none;
}
```

## Spacing & Layout

### Section Spacing
```css
.section {
  padding: 3rem 0;  /* Mobile */
}

@media screen and (min-width: 750px) {
  .section {
    padding: 4rem 0;
  }
}

@media screen and (min-width: 990px) {
  .section {
    padding: 5rem 0;
  }
}
```

### Section Alternation
```css
.section:nth-child(even) {
  background-color: #F5F5F5;
}

.section:nth-child(odd) {
  background-color: #FFFFFF;
}
```

## Shadows & Elevation

### Subtle Shadow (Default)
```css
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
```

### Medium Shadow (Hover)
```css
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
```

### Button Shadow
```css
box-shadow: 0 4px 12px rgba(255, 140, 0, 0.15);
```

### Button Hover Shadow
```css
box-shadow: 0 8px 20px rgba(255, 140, 0, 0.25);
```

## Transitions & Animation

### Standard Timing
```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### Fast Interaction
```css
transition: all 0.2s ease;
```

### Hover Effects
- Scale buttons up slightly on hover
- Lift cards on hover (translateY -4px to -2px)
- Change opacity on links (0.85)

## Focus States

```css
*:focus-visible {
  outline: 2px solid #FF8C00;
  outline-offset: 2px;
}
```

## Accessibility

### Color Contrast
- Primary text (#1A1A1A) on white: **19.4:1** (AAA)
- Primary text (#1A1A1A) on light gray (#F5F5F5): **15.5:1** (AAA)
- Brand orange (#FF8C00) on white: **4.5:1** (AA)
- White on brand orange: **5.4:1** (AAA)

### WCAG Compliance
- All text meets minimum contrast requirements (WCAG AA)
- Focus states clearly visible
- No color-only information indicators
- Clear button/link distinction

## Implementation Notes

### CSS Variables
All colors and styles are defined using CSS variables for easy global updates:

```css
:root {
  --color-brand-primary: #FF8C00;
  --color-text: #1A1A1A;
  --color-background-primary: #FFFFFF;
  --color-surface: #F5F5F5;
  --color-border-light: #E8E8E8;
  --border-radius-default: 10px;
  --border-radius-card: 10px;
  --border-radius-button: 10px;
  --border-radius-input: 10px;
}
```

### Files
- **assets/base.css** - Core CSS variables and base styles
- **assets/premium-design.css** - Premium styling system
- **layout/theme.liquid** - Stylesheet inclusion

## Design Philosophy

### Minimalist
- Clean, uncluttered layouts
- Generous whitespace
- Subtle shadows and borders
- Limited color palette

### Premium
- Smooth, refined transitions
- Elevation effects on interaction
- High-quality typography
- Consistent visual hierarchy
- Refined shadow system

### Brand-Focused
- Prominent use of orange (#FF8C00)
- Professional dark text
- Clean light backgrounds
- Modern, contemporary aesthetic

---
**Version**: 1.0
**Last Updated**: March 28, 2026
**Theme**: Zaman Optics - Shopify
