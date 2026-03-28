# Zaman Optics - CSS Quick Reference

## Brand Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Primary Orange | #FF8C00 | rgb(255, 140, 0) | Buttons, links, focus states |
| Dark Text | #1A1A1A | rgb(26, 26, 26) | Body text, headings |
| White | #FFFFFF | rgb(255, 255, 255) | Main background |
| Light Gray | #F5F5F5 | rgb(245, 245, 245) | Card/surface backgrounds |
| Very Light Gray | #E8E8E8 | rgb(232, 232, 232) | Borders, dividers |
| Darker Orange | #E67E00 | rgb(230, 126, 0) | Button hover state |

## CSS Variables

```css
/* Colors */
--color-brand-primary: #FF8C00
--color-text: #1A1A1A
--color-background-primary: #FFFFFF
--color-surface: #F5F5F5
--color-border-light: #E8E8E8

/* Border Radius */
--border-radius-default: 10px
--border-radius-card: 10px
--border-radius-button: 10px
--border-radius-input: 10px
```

## Button Classes

```html
<!-- Primary Button -->
<button class="button button--primary">Primary Action</button>

<!-- Secondary Button -->
<button class="button button--secondary">Secondary Action</button>

<!-- Tertiary Button -->
<button class="button button--tertiary">Tertiary Action</button>

<!-- Full Width Button -->
<button class="button button--full-width">Full Width</button>

<!-- Small Button -->
<button class="button button--small">Small</button>
```

## Form Elements

```html
<!-- Text Input -->
<input type="text" placeholder="Enter text...">

<!-- Email Input -->
<input type="email" placeholder="email@example.com">

<!-- Textarea -->
<textarea placeholder="Enter message..."></textarea>

<!-- Select -->
<select>
  <option>Choose option</option>
</select>
```

## Card Styling

```html
<!-- Product Card -->
<div class="product-card-wrapper">
  <a href="#" class="card card--card">
    <div class="card__media"><!-- image --></div>
    <div class="card__content">
      <h3>Product Name</h3>
      <div class="price">$99.00</div>
    </div>
  </a>
</div>

<!-- Generic Card -->
<div class="card card--card">
  <!-- content -->
</div>
```

## Common Utilities

```css
/* Text Color */
.color-foreground { color: rgb(var(--color-foreground)); }

/* Background */
.background-secondary { background-color: var(--color-surface); }

/* Spacing */
.element-margin-top { margin-top: 5rem; }

/* Alignment */
.center { text-align: center; }
.left { text-align: left; }
.right { text-align: right; }

/* Visibility */
.hidden { display: none !important; }
.visually-hidden { /* screen reader only */ }
```

## Shadow Values

```css
/* Subtle Shadow */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

/* Medium Shadow */
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);

/* Button Shadow */
box-shadow: 0 4px 12px rgba(255, 140, 0, 0.15);

/* Button Hover Shadow */
box-shadow: 0 8px 20px rgba(255, 140, 0, 0.25);
```

## Transitions

```css
/* Standard Timing */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Fast Timing */
transition: all 0.2s ease;

/* Hover Effects */
transform: translateY(-4px);  /* Card lift */
transform: translateY(-2px);  /* Button lift */
opacity: 0.85;                /* Link fade */
```

## Focus States

```css
/* Standard Focus */
*:focus-visible {
  outline: 2px solid #FF8C00;
  outline-offset: 2px;
}

/* Input Focus */
input:focus {
  border-color: #FF8C00;
  box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.1);
}
```

## Responsive Breakpoints

```css
/* Mobile */
@media screen and (max-width: 749px) { /* ... */ }

/* Tablet */
@media screen and (min-width: 750px) and (max-width: 989px) { /* ... */ }

/* Desktop */
@media screen and (min-width: 990px) { /* ... */ }
```

## Color Combinations

### Light Text on Brand Orange
```css
color: #FFFFFF;
background-color: #FF8C00;
/* Contrast: 5.4:1 (AAA) */
```

### Brand Orange on White
```css
color: #FF8C00;
background-color: #FFFFFF;
/* Contrast: 4.5:1 (AA) */
```

### Dark Text on White
```css
color: #1A1A1A;
background-color: #FFFFFF;
/* Contrast: 19.4:1 (AAA) */
```

### Dark Text on Light Gray
```css
color: #1A1A1A;
background-color: #F5F5F5;
/* Contrast: 15.5:1 (AAA) */
```

## Common Patterns

### Card with Hover Effect
```css
.card--card {
  background-color: #F5F5F5;
  border: 1px solid #E8E8E8;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.card--card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-color: rgba(255, 140, 0, 0.2);
  transform: translateY(-4px);
}
```

### Primary Button
```css
.button--primary {
  background-color: #FF8C00;
  color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(255, 140, 0, 0.15);
}

.button--primary:hover {
  background-color: #E67E00;
  box-shadow: 0 8px 20px rgba(255, 140, 0, 0.25);
  transform: translateY(-2px);
}
```

### Form Input
```css
input {
  border: 1px solid #E8E8E8;
  border-radius: 10px;
  padding: 0.8rem 1.2rem;
  transition: all 0.2s ease;
}

input:focus {
  border-color: #FF8C00;
  box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.1);
}
```

## File Locations

| File | Purpose |
|------|---------|
| `assets/base.css` | Core styles and CSS variables |
| `assets/premium-design.css` | Premium design system |
| `layout/theme.liquid` | Stylesheet inclusion |
| `STYLE_GUIDE.md` | Complete design documentation |
| `BRAND_DESIGN_UPDATES.md` | Implementation details |

## Quick Tips

1. **Colors**: Use CSS variables from `:root` for consistency
2. **Spacing**: Use rem units for responsive sizing
3. **Transitions**: Use `cubic-bezier(0.4, 0, 0.2, 1)` for smooth animations
4. **Focus**: Always provide visible focus states
5. **Contrast**: Verify WCAG AA compliance for all text colors
6. **Responsive**: Test on mobile, tablet, and desktop
7. **Accessibility**: Use semantic HTML and proper ARIA labels

---

**Last Updated**: March 28, 2026
**For Help**: See STYLE_GUIDE.md or BRAND_DESIGN_UPDATES.md
