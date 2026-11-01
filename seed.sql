-- ============================================================================
-- Seed Data: tpl-ecom-b2b-wholesale
-- Industrial Fasteners, Bearings, Fluid Power, Tooling & Dealer Credit Matrix
-- ============================================================================

-- 1. Insert Products
INSERT INTO products (id, sku, name, category, material, grade, standard, thread, length, finish, hsn_code, base_price, moq, stock_qty, unit_of_measure, spec_details)
VALUES
(
  'PRD-FAST-01',
  'FAST-HEX-M8-304',
  'Hex Head Bolt DIN 933 (SS 304, M8 x 30mm)',
  'Industrial Fasteners',
  'SS 304 Stainless Steel',
  'A2-70',
  'DIN 933',
  'M8 x 1.25',
  '30 mm',
  'Bright Passivated',
  '73181500',
  16.00,
  25,
  15400,
  'PCS',
  'Full-thread hexagon head bolt conforming to ISO 4017 / DIN 933. Austenitic stainless steel 304 (18/8) with 700 N/mm² minimum tensile strength.'
),
(
  'PRD-FAST-02',
  'FAST-NYL-M10-88',
  'Flanged Nyloc Nut DIN 6926 (Grade 8.8, M10)',
  'Industrial Fasteners',
  'Grade 8.8 Carbon Steel',
  'Class 8.8',
  'DIN 6926',
  'M10 x 1.5',
  'N/A',
  'Zinc Flake Geomet Coated',
  '73181600',
  14.50,
  50,
  22000,
  'PCS',
  'Self-locking prevailing torque type hexagon nut with integral flange and non-metallic polyamide insert. Vibration proof to DIN 6926 / EN 1663.'
),
(
  'PRD-BRG-03',
  'BRG-BALL-6204-2RS',
  'Deep Groove Ball Bearing 6204-2RS (Chrome Steel)',
  'Bearings & Power Transmission',
  'GCr15 Chrome Steel',
  'ABEC-3 / P6 Precision',
  'ISO 492 / DIN 625',
  'Bore 20mm • OD 47mm • W 14mm',
  'N/A',
  'Nitrile Rubber Dual Sealed (2RS)',
  '84821010',
  240.00,
  10,
  3250,
  'PCS',
  'Radial deep-groove ball bearing with contact rubber seals both sides, pre-lubricated with high-temperature polyurea grease (-30°C to +120°C).'
),
(
  'PRD-HYD-04',
  'HYD-HOSE-100R2-08',
  'High-Pressure Hydraulic Hose SAE 100R2 (1/2" ID, 5000 PSI)',
  'Fluid Power & Hydraulics',
  'Double High-Tensile Steel Wire Braid',
  '5000 PSI W.P. (Burst 20,000 PSI)',
  'SAE 100R2AT / EN 853 2SN',
  '1/2" ID (12.7mm)',
  'Per Meter (Continuous Coil)',
  'MSHA Approved Flame-Resistant Rubber',
  '40092100',
  680.00,
  5,
  1800,
  'METERS',
  'Heavy-duty hydraulic hose reinforced with two braids of high-tensile steel wire. Synthetic oil and weather resistant rubber cover.'
),
(
  'PRD-PIN-05',
  'PIN-DOWL-ISO2338-M8',
  'Precision Dowel Pin ISO 2338 (m6 Hardened Steel, 8mm x 40mm)',
  'Industrial Tooling & Alignment',
  'Hardened Tool Steel (60-62 HRC)',
  'm6 Ground Tolerance',
  'ISO 2338 / DIN 7',
  '8mm Diameter (+0.009/+0.003 mm)',
  '40 mm',
  'Micro-Ground & Corrosion Oil Dipped',
  '73182400',
  42.00,
  20,
  8400,
  'PCS',
  'Through-hardened and precision ground cylindrical dowel pin with chamfered ends for jig, fixture, and press tool alignment.'
),
(
  'PRD-PNEU-06',
  'PNEU-COUP-BRS-04',
  'Pneumatic Quick Coupler Brass 1/4" NPT',
  'Pneumatic Hardware & Valves',
  'Solid CW614N Brass',
  'Industrial Interchange (300 PSI Rated)',
  'Mil-C-4109 / ISO 6150-B',
  '1/4" NPT Female Thread',
  '52 mm',
  'Natural Corrosion-Resistant Brass',
  '84812000',
  185.00,
  10,
  4600,
  'PCS',
  'Heavy-duty 1/4" quick-connect air line coupler with 6 stainless steel locking balls and Buna-N seals for shop air systems.'
),
(
  'PRD-FAST-07',
  'FAST-CAP-M6-304',
  'Socket Head Cap Screw DIN 912 (SS 304, M6 x 20mm)',
  'Industrial Fasteners',
  'SS 304 Stainless Steel',
  'A2-70',
  'DIN 912',
  'M6 x 1.0',
  '20 mm',
  'Passivated Bright',
  '73181500',
  12.00,
  25,
  18500,
  'PCS',
  'Hexagon socket head cap screw conforming to DIN 912 / ISO 4762. Clean cylindrical head for counterbored installations.'
),
(
  'PRD-FAST-08',
  'FAST-HEX-M12-88',
  'High-Tensile Hex Bolt DIN 931 (Grade 8.8, M12 x 50mm)',
  'Industrial Fasteners',
  'Grade 8.8 Carbon Steel',
  'Class 8.8 High-Tensile',
  'DIN 931',
  'M12 x 1.75',
  '50 mm',
  'Black Oxide & Oil Quenched',
  '73181500',
  34.00,
  20,
  9200,
  'PCS',
  'Partially-threaded high-tensile structural hex bolt with 800 MPa tensile strength, engineered for heavy machinery chassis.'
);

-- 2. Insert Price Tiers (1-49 pcs, 50-199 pcs, 200+ pcs)
INSERT INTO price_tiers (id, product_id, min_qty, max_qty, unit_price, discount_pct, tier_label)
VALUES
-- FAST-HEX-M8-304
('TR-01-A', 'PRD-FAST-01', 1, 49, 16.00, 0.0, '1–49 PCS (Standard)'),
('TR-01-B', 'PRD-FAST-01', 50, 199, 12.50, 21.8, '50–199 PCS (-22%)'),
('TR-01-C', 'PRD-FAST-01', 200, NULL, 9.80, 38.7, '200+ PCS (-39% Bulk)'),

-- FAST-NYL-M10-88
('TR-02-A', 'PRD-FAST-02', 1, 49, 14.50, 0.0, '1–49 PCS (Standard)'),
('TR-02-B', 'PRD-FAST-02', 50, 199, 10.80, 25.5, '50–199 PCS (-26%)'),
('TR-02-C', 'PRD-FAST-02', 200, NULL, 7.90, 45.5, '200+ PCS (-46% Bulk)'),

-- BRG-BALL-6204-2RS
('TR-03-A', 'PRD-BRG-03', 1, 49, 240.00, 0.0, '1–49 PCS (Standard)'),
('TR-03-B', 'PRD-BRG-03', 50, 199, 195.00, 18.7, '50–199 PCS (-19%)'),
('TR-03-C', 'PRD-BRG-03', 200, NULL, 162.00, 32.5, '200+ PCS (-32.5% Bulk)'),

-- HYD-HOSE-100R2-08
('TR-04-A', 'PRD-HYD-04', 1, 49, 680.00, 0.0, '1–49 M (Standard)'),
('TR-04-B', 'PRD-HYD-04', 50, 199, 540.00, 20.6, '50–199 M (-21%)'),
('TR-04-C', 'PRD-HYD-04', 200, NULL, 420.00, 38.2, '200+ M (-38% Bulk)'),

-- PIN-DOWL-ISO2338-M8
('TR-05-A', 'PRD-PIN-05', 1, 49, 42.00, 0.0, '1–49 PCS (Standard)'),
('TR-05-B', 'PRD-PIN-05', 50, 199, 31.50, 25.0, '50–199 PCS (-25%)'),
('TR-05-C', 'PRD-PIN-05', 200, NULL, 22.80, 45.7, '200+ PCS (-46% Bulk)'),

-- PNEU-COUP-BRS-04
('TR-06-A', 'PRD-PNEU-06', 1, 49, 185.00, 0.0, '1–49 PCS (Standard)'),
('TR-06-B', 'PRD-PNEU-06', 50, 199, 148.00, 20.0, '50–199 PCS (-20%)'),
('TR-06-C', 'PRD-PNEU-06', 200, NULL, 115.00, 37.8, '200+ PCS (-38% Bulk)'),

-- FAST-CAP-M6-304
('TR-07-A', 'PRD-FAST-07', 1, 49, 12.00, 0.0, '1–49 PCS (Standard)'),
('TR-07-B', 'PRD-FAST-07', 50, 199, 9.20, 23.3, '50–199 PCS (-23%)'),
('TR-07-C', 'PRD-FAST-07', 200, NULL, 6.90, 42.5, '200+ PCS (-42.5% Bulk)'),

-- FAST-HEX-M12-88
('TR-08-A', 'PRD-FAST-08', 1, 49, 34.00, 0.0, '1–49 PCS (Standard)'),
('TR-08-B', 'PRD-FAST-08', 50, 199, 26.00, 23.5, '50–199 PCS (-23.5%)'),
('TR-08-C', 'PRD-FAST-08', 200, NULL, 19.50, 42.6, '200+ PCS (-43% Bulk)');

-- 3. Insert B2B Dealers
INSERT INTO dealers (id, company_name, contact_person, phone, email, gstin, state_code, credit_limit, credit_used, credit_available, payment_terms, status, audited_turnover)
VALUES
(
  'DLR-991',
  'Cochin Marine Hardware Syndicate',
  'Rajesh Varma',
  '919895033445',
  'rajesh@cochinmarine.in',
  '32AABCC1234D1Z5',
  '32',
  500000.00,
  160000.00,
  340000.00,
  'Net-30 Trade Credit',
  'APPROVED',
  '₹8.40 Cr'
),
(
  'DLR-992',
  'Malabar Heavy Engineering Works (Calicut)',
  'Faisal Rahman',
  '919447022334',
  'purchase@malabarheavy.com',
  '32ABXPR4567K1Z2',
  '32',
  750000.00,
  215000.00,
  535000.00,
  'Net-30 Trade Credit',
  'APPROVED',
  '₹14.20 Cr'
),
(
  'DLR-993',
  'Coimbatore Precision Pumps & Motors',
  'Senthil Kumar',
  '919842055667',
  'accounts@cbe-precision.com',
  '33AAACD9876P1ZV',
  '33',
  400000.00,
  310000.00,
  90000.00,
  'Net-30 Trade Credit',
  'APPROVED',
  '₹6.10 Cr'
),
(
  'DLR-994',
  'Apex Industrial Fabricators (Aluva)',
  'George Mathew',
  '919846011998',
  'admin@apexfab.in',
  '32AACFA7766M1Z8',
  '32',
  300000.00,
  0.00,
  300000.00,
  'Net-30 Trade Credit',
  'PENDING_APPROVAL',
  '₹4.80 Cr'
),
(
  'DLR-995',
  'Bharath Heavy Hydraulics & Valves (Bangalore)',
  'Vikram Rao',
  '919880199223',
  'info@bharathhydraulics.co.in',
  '29AAGCB5544J1Z1',
  '29',
  1000000.00,
  0.00,
  1000000.00,
  'Net-30 Trade Credit',
  'PENDING_APPROVAL',
  '₹18.50 Cr'
);

-- 4. Insert Seed RFQs / Proforma Invoices
INSERT INTO rfqs (id, rfq_number, dealer_id, company_name, contact_name, phone, email, gstin, state_code, is_interstate, items_json, subtotal, cgst, sgst, igst, grand_total, discount_override_pct, negotiated_total, admin_notes, status)
VALUES
(
  'RFQ-2026-8812',
  'PI-2026-8812',
  'DLR-991',
  'Cochin Marine Hardware Syndicate',
  'Rajesh Varma',
  '919895033445',
  'rajesh@cochinmarine.in',
  '32AABCC1234D1Z5',
  '32',
  0,
  '[{"sku":"FAST-HEX-M8-304","name":"Hex Head Bolt DIN 933 (SS 304, M8 x 30mm)","hsn":"73181500","qty":500,"unit_price":9.80,"line_total":4900},{"sku":"BRG-BALL-6204-2RS","name":"Deep Groove Ball Bearing 6204-2RS","hsn":"84821010","qty":150,"unit_price":195.00,"line_total":29250},{"sku":"PNEU-COUP-BRS-04","name":"Pneumatic Quick Coupler Brass 1/4\" NPT","hsn":"84812000","qty":250,"unit_price":115.00,"line_total":28750}]',
  62900.00,
  5661.00,
  5661.00,
  0.00,
  74222.00,
  0.0,
  74222.00,
  'Standard volume discount applied across all 3 product lines.',
  'PROFORMA_ISSUED'
),
(
  'RFQ-2026-8813',
  'PI-2026-8813',
  'DLR-993',
  'Coimbatore Precision Pumps & Motors',
  'Senthil Kumar',
  '919842055667',
  'accounts@cbe-precision.com',
  '33AAACD9876P1ZV',
  '33',
  1,
  '[{"sku":"HYD-HOSE-100R2-08","name":"High-Pressure Hydraulic Hose SAE 100R2 (1/2\" ID)","hsn":"40092100","qty":300,"unit_price":420.00,"line_total":126000},{"sku":"PIN-DOWL-ISO2338-M8","name":"Precision Dowel Pin ISO 2338 (m6 Hardened)","hsn":"73182400","qty":1000,"unit_price":22.80,"line_total":22800}]',
  148800.00,
  0.00,
  0.00,
  26784.00,
  175584.00,
  5.0,
  166804.80,
  '5% special export corridor discount authorized by sales director.',
  'QUOTE_OVERRIDDEN'
);

-- 5. Insert Seed Orders
INSERT INTO orders (id, order_number, rfq_id, dealer_id, company_name, contact_name, phone, email, gstin, shipping_address, state_code, payment_method, payment_status, items_json, subtotal, cgst, sgst, igst, grand_total, status, eway_bill_id, upi_qr_string)
VALUES
(
  'ORD-B2B-7011',
  'PO-2026-7011',
  'RFQ-2026-8812',
  'DLR-991',
  'Cochin Marine Hardware Syndicate',
  'Rajesh Varma',
  '919895033445',
  'rajesh@cochinmarine.in',
  '32AABCC1234D1Z5',
  'Shed #4, Marine Drive Shipyard Complex, Willingdon Island, Kochi, Kerala 682003',
  '32',
  'net30_credit',
  'CREDIT_CHARGED',
  '[{"sku":"FAST-HEX-M8-304","name":"Hex Head Bolt DIN 933 (SS 304, M8 x 30mm)","hsn":"73181500","qty":500,"unit_price":9.80,"line_total":4900},{"sku":"BRG-BALL-6204-2RS","name":"Deep Groove Ball Bearing 6204-2RS","hsn":"84821010","qty":150,"unit_price":195.00,"line_total":29250},{"sku":"PNEU-COUP-BRS-04","name":"Pneumatic Quick Coupler Brass 1/4\" NPT","hsn":"84812000","qty":250,"unit_price":115.00,"line_total":28750}]',
  62900.00,
  5661.00,
  5661.00,
  0.00,
  74222.00,
  'EWAY_GENERATED',
  'EWB-541098234410',
  NULL
),
(
  'ORD-B2B-7012',
  'PO-2026-7012',
  NULL,
  'DLR-992',
  'Malabar Heavy Engineering Works (Calicut)',
  'Faisal Rahman',
  '919447022334',
  'purchase@malabarheavy.com',
  '32ABXPR4567K1Z2',
  'Plot 18, West Hill Industrial Estate, Calicut, Kerala 673005',
  '32',
  'cashfree_upi',
  'PAID',
  '[{"sku":"FAST-NYL-M10-88","name":"Flanged Nyloc Nut DIN 6926 (Grade 8.8, M10)","hsn":"73181600","qty":2000,"unit_price":7.90,"line_total":15800},{"sku":"FAST-HEX-M12-88","name":"High-Tensile Hex Bolt DIN 931 (Grade 8.8, M12)","hsn":"73181500","qty":800,"unit_price":19.50,"line_total":15600}]',
  31400.00,
  2826.00,
  2826.00,
  0.00,
  37052.00,
  'DISPATCH_PENDING',
  NULL,
  'upi://pay?pa=industrial.dist@icici&pn=MCMASTER+INDUSTRIAL&am=37052.00&cu=INR&tn=PO-2026-7012'
);

-- 6. Insert Seed E-Way Bill
INSERT INTO eway_bills (id, eway_bill_number, order_id, doc_number, gstin_supplier, gstin_recipient, dispatch_from_pincode, delivery_to_pincode, transporter_id, transporter_name, vehicle_number, approx_distance_km, valid_from, valid_until, hsn_summary_json, total_value, status)
VALUES
(
  'EWB-541098234410',
  '541098234410',
  'ORD-B2B-7011',
  'PO-2026-7011',
  '32AABCM9982D1Z3',
  '32AABCC1234D1Z5',
  '682024',
  '682003',
  '32AAACT8812K1Z9',
  'VRL Logistics Industrial Express',
  'KL-07-CD-4421',
  45,
  '2026-11-01 10:00:00',
  '2026-11-02 23:59:59',
  '[{"hsn":"73181500","desc":"SS 304 Hex Bolts","taxable":4900,"cgst":441,"sgst":441,"igst":0},{"hsn":"84821010","desc":"Ball Bearings 6204-2RS","taxable":29250,"cgst":2632.50,"sgst":2632.50,"igst":0},{"hsn":"84812000","desc":"Pneumatic Couplers","taxable":28750,"cgst":2587.50,"sgst":2587.50,"igst":0}]',
  74222.00,
  'ACTIVE'
);
