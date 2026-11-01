-- ============================================================================
-- D1 SQLite Relational Schema: tpl-ecom-b2b-wholesale
-- High-Density Industrial Hardware & Distributor Spec Matrix
-- Tables: products, price_tiers, dealers, rfqs, orders, eway_bills
-- ============================================================================

DROP TABLE IF EXISTS eway_bills;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS rfqs;
DROP TABLE IF EXISTS dealers;
DROP TABLE IF EXISTS price_tiers;
DROP TABLE IF EXISTS products;

-- 1. Products: Industrial catalog with parametric engineering attributes
CREATE TABLE products (
  id TEXT PRIMARY KEY,
  sku TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  material TEXT NOT NULL,
  grade TEXT NOT NULL,
  standard TEXT NOT NULL,
  thread TEXT NOT NULL,
  length TEXT,
  finish TEXT NOT NULL,
  hsn_code TEXT NOT NULL,
  base_price REAL NOT NULL,
  moq INTEGER NOT NULL DEFAULT 1,
  stock_qty INTEGER NOT NULL DEFAULT 0,
  unit_of_measure TEXT NOT NULL DEFAULT 'PCS',
  spec_details TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. Price Tiers: Volume discount breaks (1-49, 50-199, 200+ pcs)
CREATE TABLE price_tiers (
  id TEXT PRIMARY KEY,
  product_id TEXT NOT NULL,
  min_qty INTEGER NOT NULL,
  max_qty INTEGER, -- NULL indicates unbounded tier (e.g. 200+)
  unit_price REAL NOT NULL,
  discount_pct REAL NOT NULL,
  tier_label TEXT NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- 3. Dealers: B2B Dealer credit accounts with Net-30 trade credit limits
CREATE TABLE dealers (
  id TEXT PRIMARY KEY,
  company_name TEXT NOT NULL,
  contact_person TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  gstin TEXT UNIQUE NOT NULL,
  state_code TEXT NOT NULL,
  credit_limit REAL NOT NULL DEFAULT 0,
  credit_used REAL NOT NULL DEFAULT 0,
  credit_available REAL NOT NULL DEFAULT 0,
  payment_terms TEXT NOT NULL DEFAULT 'Net-30',
  status TEXT NOT NULL DEFAULT 'PENDING_APPROVAL', -- 'APPROVED', 'PENDING_APPROVAL', 'REJECTED'
  audited_turnover TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 4. RFQs / Proforma Invoices: Formal GST Proforma Invoices & High-Volume Quote Requests
CREATE TABLE rfqs (
  id TEXT PRIMARY KEY,
  rfq_number TEXT UNIQUE NOT NULL,
  dealer_id TEXT,
  company_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  gstin TEXT,
  state_code TEXT NOT NULL,
  is_interstate INTEGER NOT NULL DEFAULT 0,
  items_json TEXT NOT NULL,
  subtotal REAL NOT NULL,
  cgst REAL NOT NULL DEFAULT 0,
  sgst REAL NOT NULL DEFAULT 0,
  igst REAL NOT NULL DEFAULT 0,
  grand_total REAL NOT NULL,
  discount_override_pct REAL DEFAULT 0,
  negotiated_total REAL,
  admin_notes TEXT,
  status TEXT NOT NULL DEFAULT 'PROFORMA_ISSUED', -- 'PROFORMA_ISSUED', 'QUOTE_OVERRIDDEN', 'ORDER_CONVERTED', 'CANCELLED'
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (dealer_id) REFERENCES dealers(id)
);

-- 5. Orders: Purchase orders placed via Net-30 Credit Line or Cashfree UPI
CREATE TABLE orders (
  id TEXT PRIMARY KEY,
  order_number TEXT UNIQUE NOT NULL,
  rfq_id TEXT,
  dealer_id TEXT,
  company_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  gstin TEXT,
  shipping_address TEXT NOT NULL,
  state_code TEXT NOT NULL,
  payment_method TEXT NOT NULL, -- 'net30_credit', 'cashfree_upi', 'rtgs_transfer'
  payment_status TEXT NOT NULL, -- 'CREDIT_CHARGED', 'PAID', 'PENDING'
  items_json TEXT NOT NULL,
  subtotal REAL NOT NULL,
  cgst REAL NOT NULL DEFAULT 0,
  sgst REAL NOT NULL DEFAULT 0,
  igst REAL NOT NULL DEFAULT 0,
  grand_total REAL NOT NULL,
  status TEXT NOT NULL DEFAULT 'DISPATCH_PENDING', -- 'DISPATCH_PENDING', 'EWAY_GENERATED', 'DISPATCHED', 'DELIVERED'
  eway_bill_id TEXT,
  upi_qr_string TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (dealer_id) REFERENCES dealers(id)
);

-- 6. E-Way Bills: Simulated Indian E-Way Bills (Mandatory for consignments > ₹50,000)
CREATE TABLE eway_bills (
  id TEXT PRIMARY KEY,
  eway_bill_number TEXT UNIQUE NOT NULL, -- 12 digits
  order_id TEXT NOT NULL,
  doc_number TEXT NOT NULL,
  gstin_supplier TEXT NOT NULL,
  gstin_recipient TEXT NOT NULL,
  dispatch_from_pincode TEXT NOT NULL,
  delivery_to_pincode TEXT NOT NULL,
  transporter_id TEXT NOT NULL,
  transporter_name TEXT NOT NULL,
  vehicle_number TEXT NOT NULL,
  approx_distance_km INTEGER NOT NULL,
  valid_from DATETIME NOT NULL,
  valid_until DATETIME NOT NULL,
  hsn_summary_json TEXT NOT NULL,
  total_value REAL NOT NULL,
  status TEXT NOT NULL DEFAULT 'ACTIVE', -- 'ACTIVE', 'CANCELLED'
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (order_id) REFERENCES orders(id)
);

-- Indexes for fast query performance
CREATE INDEX idx_products_sku ON products(sku);
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_material ON products(material);
CREATE INDEX idx_price_tiers_prod ON price_tiers(product_id);
CREATE INDEX idx_dealers_gstin ON dealers(gstin);
CREATE INDEX idx_rfqs_num ON rfqs(rfq_number);
CREATE INDEX idx_orders_num ON orders(order_number);
CREATE INDEX idx_eway_num ON eway_bills(eway_bill_number);
