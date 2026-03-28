# CLAUDE.md — Zaman Optics Technical Reference

## 🚀 Project Overview
- **Brand:** Zaman Optics (Optical Retailer)
- **Location:** Gujar Khan, Pakistan
- **Tech Stack:** Shopify Liquid, Tailwind CSS (or Custom CSS), Shopify CLI
- **Core Goal:** A premium, minimalist store featuring a multi-step "Peachmart-style" prescription lens selection flow.

## 🛠 Critical Commands
- **Start Dev Server:** `shopify theme dev --store zaman-optics.myshopify.com`
- **Pull Latest Code:** `shopify theme pull`
- **Push Changes:** `shopify theme push`
- **Git Workflow:** `git add . && git commit -m "update" && git push origin main`

## 🎨 Design Tokens (Sticky Rules)
- **Primary Orange:** `#FF8C00` (Use for all primary CTAs/Buttons)
- **Primary Black:** `#1A1A1A` (Use for headings/body text)
- **Surface Gray:** `#F5F5F5` (Use for secondary backgrounds/cards)
- **Canvas White:** `#FFFFFF` (Main background)
- **Border Radius:** `10px` (Apply to all cards and buttons)
- **UI Feel:** Minimalist, spacious, soft shadows, rounded corners.

## 🧠 Business Logic
### 1. Product Page Modes
- **Prescription Mode:** Applies to `Eyeglasses`, `Blue Light`, and `Kids`. 
  - Must include: Lens Type Selection -> Lens Upgrades -> Prescription Input (Manual/Upload) -> Dynamic Price Calculation.
- **Standard Mode:** Applies to `Sunglasses`.
  - Must include: Basic Product Info -> Add to Cart -> Buy Now (No lens selection).

### 2. Prescription Data
- **Capture:** SPH, CYL, Axis (OD/OS) and PD.
- **Storage:** Save these as `line_item_properties` so they appear in the Shopify Order Admin.

### 3. Localization (Pakistan)
- **Currency:** PKR.
- **Payments:** Prioritize Visibility of COD, EasyPaisa, JazzCash, and Credit/Debit Cards.

## 📂 Reference Files
- **Full Creative Brief:** [website-prd.md](./website-prd.md)