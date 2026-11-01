# MCMASTER INDUSTRIAL // B2B Wholesale, Hardware & Industrial Distributor (`tpl-ecom-b2b-wholesale`)

> **BMAD Template Suite** — Movement E: High-Density Tabular Spec Matrix & Dealer Portal (McMaster-Carr / Fastenal / Misumi)  
> **Layout Archetype:** `data-layout-archetype="tabular-b2b-matrix"` (`/index.html`) & `data-layout-archetype="dealer-credit-admin"` (`/admin.html`)  
> **Live Deployed URL:** [https://tpl-ecom-b2b-wholesale.pages.dev](https://tpl-ecom-b2b-wholesale.pages.dev)  
> **Repository:** [https://github.com/Adithyan-b-raj/tpl-ecom-b2b-wholesale](https://github.com/Adithyan-b-raj/tpl-ecom-b2b-wholesale)

---

## 🔩 Architecture & Features

### 1. High-Density Tabular Spec Matrix View (`public/index.html`)
- **Parametric Engineering Filters:** Material (SS 304, Grade 8.8, GCr15 Chrome Steel, Brass CW614N, Hardened Tool Steel), Standards (DIN 933, DIN 6926, DIN 912, DIN 931, ISO 2338, ISO 492, SAE 100R2), Thread Pitch (M6–M12, 1/4" NPT, 1/2" ID), Category, and live instant search.
- **Dense Spreadsheet Rows:** Interactive quantity steppers with live active price tier highlighting (`1–49 pcs`, `50–199 pcs`, `200+ pcs`), real-time line total recalculation, and 1-tap PO cart addition.
- **Tiered Volume Pricing Popover:** Deep-dive modal displaying volume discount breaks, packaging units (box, master carton), and EN 10204 3.1 Material Test Report (MTR) certification.
- **Quick Bulk CSV Paste Reorder Box:** Rapid multi-line SKU and quantity parser (e.g. `FAST-HEX-M8-304, 250`), line-by-line validation, and 1-click cart loading.
- **1-Click GST Proforma Invoice & RFQ Generator:** Renders official Proforma Invoice (`#PI-2026-8812`) with segregated HSN tax breakdown (7318 / 8482 / 4009 / 8481), CGST/SGST/IGST calculation, reverse charge flag (`N`), and printable PDF stylesheet (`@media print`).
- **Dealer Net-30 Credit Line Selector:** Active dealer switcher, real-time available credit display (e.g. ₹3,40,000 available of ₹5,00,000 limit), and 1-tap Net-30 purchase order checkout or Cashfree UPI with live QR.

### 2. Dealer Credit Console & Logistics Dispatcher (`public/admin.html`)
- **Dealer Net-30 Credit Line Approval Console:** Review pending trade credit applications with GSTIN, audited turnover, requested credit limit, and 1-tap approve/reject/modify limit controls.
- **Custom Bulk RFQ Quote Override:** Set custom bulk discount % or negotiated dealer price on high-volume requests with internal engineering remarks.
- **Indian E-Way Bill Consignment Dispatcher:** 1-tap generation of 12-digit Indian E-Way Bills (mandatory for consignments > ₹50,000) with Transporter ID, Vehicle Number, distance-based validity, and printable highway transport manifest.

### 3. Serverless Edge API (`functions/api/`)
- `GET /api/catalog` — Industrial catalog with parametric filtering and tiered pricing matrices.
- `GET|POST|PATCH /api/rfq` — Generate formal GST Proforma Invoices & RFQs; quote overrides.
- `GET|POST /api/dealers` — Trade credit accounts, approvals, and limit calibrations.
- `GET|POST /api/orders` — Net-30 credit line and Cashfree UPI checkout.
- `GET|POST /api/eway` — Simulated 12-digit Indian E-Way bill generation.
- `ALL /api/[[route]]` — Edge health check and wildcard service routing.
- **V8 Isolate Snapshot Freeze Safe:** All date/time operations use lazy request-time factory getters.

### 4. White-Label Personalization Engine (`public/whitelabel.js`)
Personalize on the fly via URL search parameters:
```
https://tpl-ecom-b2b-wholesale.pages.dev/?brand=Bharat+Fasteners&primary=0284C7&wa=919847001122&phone=919847001122
```

---

## 📋 Relational Schema (`schema.sql` & `seed.sql`)
1. `products` — Industrial fasteners, bearings, pneumatic couplers, hydraulic hoses, dowel pins.
2. `price_tiers` — Volume discount tiers (`1-49`, `50-199`, `200+ pcs`).
3. `dealers` — B2B trade accounts with Net-30 credit limits and audited turnover.
4. `rfqs` — Formal Proforma Invoices with HSN tax segregation.
5. `orders` — Purchase orders settled via Net-30 Credit Line or Cashfree UPI.
6. `eway_bills` — 12-digit statutory Indian E-Way bills with vehicle clearance.

---

## 🧪 Automated Verification
Run the comprehensive test suite:
```bash
node test-verification.mjs
```
Runs 52 assertions covering layout archetypes, D1 schema, parametric filters, volume discount math, GST HSN calculations, Net-30 credit limits, and E-Way bills.
