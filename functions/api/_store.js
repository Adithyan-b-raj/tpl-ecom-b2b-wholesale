/**
 * Shared Industrial Catalog & Dealer Credit Store for tpl-ecom-b2b-wholesale
 * Movement E: High-Density Tabular Spec Matrix & Dealer Portal (McMaster-Carr / Fastenal / Misumi)
 * CRITICAL: Zero top-level Date.now() to prevent V8 isolate snapshot freezing.
 * Uses lazy request-time factory getters for all temporal calculations.
 */

// Supplier statutory details (Kochi Hub, Kerala)
export const SUPPLIER_INFO = {
  name: 'MCMASTER INDUSTRIAL DISTRIBUTORS PVT LTD',
  trade_name: 'McMaster Industrial Supply // Fasteners & Tooling',
  gstin: '32AABCM9982D1Z3',
  cin: 'U28991KL2021PTC078912',
  address: 'Hub 04, Cochin Industrial Corridor, Kalamassery, Kochi, Kerala 682024',
  state: 'Kerala',
  state_code: '32',
  phone: '919061902295',
  email: 'b2b@mcmaster-industrial.in',
  hsn_chapters: '7318 (Fasteners), 8482 (Bearings), 4009 (Hydraulics), 8481 (Pneumatics)'
};

function getInitialProducts() {
  return [
    {
      id: 'PRD-FAST-01',
      sku: 'FAST-HEX-M8-304',
      name: 'Hex Head Bolt DIN 933 (SS 304, M8 x 30mm)',
      category: 'Industrial Fasteners',
      material: 'SS 304 Stainless Steel',
      grade: 'A2-70',
      standard: 'DIN 933',
      thread: 'M8 x 1.25',
      length: '30 mm',
      finish: 'Bright Passivated',
      hsn_code: '73181500',
      base_price: 16.00,
      moq: 25,
      stock_qty: 15400,
      unit_of_measure: 'PCS',
      spec_details: 'Full-thread hexagon head bolt conforming to ISO 4017 / DIN 933. Austenitic stainless steel 304 (18/8) with 700 N/mm² minimum tensile strength.'
    },
    {
      id: 'PRD-FAST-02',
      sku: 'FAST-NYL-M10-88',
      name: 'Flanged Nyloc Nut DIN 6926 (Grade 8.8, M10)',
      category: 'Industrial Fasteners',
      material: 'Grade 8.8 Carbon Steel',
      grade: 'Class 8.8',
      standard: 'DIN 6926',
      thread: 'M10 x 1.5',
      length: 'N/A',
      finish: 'Zinc Flake Geomet Coated',
      hsn_code: '73181600',
      base_price: 14.50,
      moq: 50,
      stock_qty: 22000,
      unit_of_measure: 'PCS',
      spec_details: 'Self-locking prevailing torque type hexagon nut with integral flange and non-metallic polyamide insert. Vibration proof to DIN 6926 / EN 1663.'
    },
    {
      id: 'PRD-BRG-03',
      sku: 'BRG-BALL-6204-2RS',
      name: 'Deep Groove Ball Bearing 6204-2RS (Chrome Steel)',
      category: 'Bearings & Power Transmission',
      material: 'GCr15 Chrome Steel',
      grade: 'ABEC-3 / P6 Precision',
      standard: 'ISO 492 / DIN 625',
      thread: 'Bore 20mm • OD 47mm • W 14mm',
      length: 'N/A',
      finish: 'Nitrile Rubber Dual Sealed (2RS)',
      hsn_code: '84821010',
      base_price: 240.00,
      moq: 10,
      stock_qty: 3250,
      unit_of_measure: 'PCS',
      spec_details: 'Radial deep-groove ball bearing with contact rubber seals both sides, pre-lubricated with high-temperature polyurea grease (-30°C to +120°C).'
    },
    {
      id: 'PRD-HYD-04',
      sku: 'HYD-HOSE-100R2-08',
      name: 'High-Pressure Hydraulic Hose SAE 100R2 (1/2" ID, 5000 PSI)',
      category: 'Fluid Power & Hydraulics',
      material: 'Double High-Tensile Steel Wire Braid',
      grade: '5000 PSI W.P. (Burst 20,000 PSI)',
      standard: 'SAE 100R2AT / EN 853 2SN',
      thread: '1/2" ID (12.7mm)',
      length: 'Per Meter (Continuous Coil)',
      finish: 'MSHA Approved Flame-Resistant Rubber',
      hsn_code: '40092100',
      base_price: 680.00,
      moq: 5,
      stock_qty: 1800,
      unit_of_measure: 'METERS',
      spec_details: 'Heavy-duty hydraulic hose reinforced with two braids of high-tensile steel wire. Synthetic oil and weather resistant rubber cover.'
    },
    {
      id: 'PRD-PIN-05',
      sku: 'PIN-DOWL-ISO2338-M8',
      name: 'Precision Dowel Pin ISO 2338 (m6 Hardened Steel, 8mm x 40mm)',
      category: 'Industrial Tooling & Alignment',
      material: 'Hardened Tool Steel (60-62 HRC)',
      grade: 'm6 Ground Tolerance',
      standard: 'ISO 2338 / DIN 7',
      thread: '8mm Diameter (+0.009/+0.003 mm)',
      length: '40 mm',
      finish: 'Micro-Ground & Corrosion Oil Dipped',
      hsn_code: '73182400',
      base_price: 42.00,
      moq: 20,
      stock_qty: 8400,
      unit_of_measure: 'PCS',
      spec_details: 'Through-hardened and precision ground cylindrical dowel pin with chamfered ends for jig, fixture, and press tool alignment.'
    },
    {
      id: 'PRD-PNEU-06',
      sku: 'PNEU-COUP-BRS-04',
      name: 'Pneumatic Quick Coupler Brass 1/4" NPT',
      category: 'Pneumatic Hardware & Valves',
      material: 'Solid CW614N Brass',
      grade: 'Industrial Interchange (300 PSI Rated)',
      standard: 'Mil-C-4109 / ISO 6150-B',
      thread: '1/4" NPT Female Thread',
      length: '52 mm',
      finish: 'Natural Corrosion-Resistant Brass',
      hsn_code: '84812000',
      base_price: 185.00,
      moq: 10,
      stock_qty: 4600,
      unit_of_measure: 'PCS',
      spec_details: 'Heavy-duty 1/4" quick-connect air line coupler with 6 stainless steel locking balls and Buna-N seals for shop air systems.'
    },
    {
      id: 'PRD-FAST-07',
      sku: 'FAST-CAP-M6-304',
      name: 'Socket Head Cap Screw DIN 912 (SS 304, M6 x 20mm)',
      category: 'Industrial Fasteners',
      material: 'SS 304 Stainless Steel',
      grade: 'A2-70',
      standard: 'DIN 912',
      thread: 'M6 x 1.0',
      length: '20 mm',
      finish: 'Passivated Bright',
      hsn_code: '73181500',
      base_price: 12.00,
      moq: 25,
      stock_qty: 18500,
      unit_of_measure: 'PCS',
      spec_details: 'Hexagon socket head cap screw conforming to DIN 912 / ISO 4762. Clean cylindrical head for counterbored installations.'
    },
    {
      id: 'PRD-FAST-08',
      sku: 'FAST-HEX-M12-88',
      name: 'High-Tensile Hex Bolt DIN 931 (Grade 8.8, M12 x 50mm)',
      category: 'Industrial Fasteners',
      material: 'Grade 8.8 Carbon Steel',
      grade: 'Class 8.8 High-Tensile',
      standard: 'DIN 931',
      thread: 'M12 x 1.75',
      length: '50 mm',
      finish: 'Black Oxide & Oil Quenched',
      hsn_code: '73181500',
      base_price: 34.00,
      moq: 20,
      stock_qty: 9200,
      unit_of_measure: 'PCS',
      spec_details: 'Partially-threaded high-tensile structural hex bolt with 800 MPa tensile strength, engineered for heavy machinery chassis.'
    }
  ];
}

function getInitialPriceTiers() {
  return [
    { id: 'TR-01-A', product_id: 'PRD-FAST-01', min_qty: 1, max_qty: 49, unit_price: 16.00, discount_pct: 0.0, tier_label: '1–49 PCS (Standard)' },
    { id: 'TR-01-B', product_id: 'PRD-FAST-01', min_qty: 50, max_qty: 199, unit_price: 12.50, discount_pct: 21.8, tier_label: '50–199 PCS (-22%)' },
    { id: 'TR-01-C', product_id: 'PRD-FAST-01', min_qty: 200, max_qty: null, unit_price: 9.80, discount_pct: 38.7, tier_label: '200+ PCS (-39% Bulk)' },

    { id: 'TR-02-A', product_id: 'PRD-FAST-02', min_qty: 1, max_qty: 49, unit_price: 14.50, discount_pct: 0.0, tier_label: '1–49 PCS (Standard)' },
    { id: 'TR-02-B', product_id: 'PRD-FAST-02', min_qty: 50, max_qty: 199, unit_price: 10.80, discount_pct: 25.5, tier_label: '50–199 PCS (-26%)' },
    { id: 'TR-02-C', product_id: 'PRD-FAST-02', min_qty: 200, max_qty: null, unit_price: 7.90, discount_pct: 45.5, tier_label: '200+ PCS (-46% Bulk)' },

    { id: 'TR-03-A', product_id: 'PRD-BRG-03', min_qty: 1, max_qty: 49, unit_price: 240.00, discount_pct: 0.0, tier_label: '1–49 PCS (Standard)' },
    { id: 'TR-03-B', product_id: 'PRD-BRG-03', min_qty: 50, max_qty: 199, unit_price: 195.00, discount_pct: 18.7, tier_label: '50–199 PCS (-19%)' },
    { id: 'TR-03-C', product_id: 'PRD-BRG-03', min_qty: 200, max_qty: null, unit_price: 162.00, discount_pct: 32.5, tier_label: '200+ PCS (-32.5% Bulk)' },

    { id: 'TR-04-A', product_id: 'PRD-HYD-04', min_qty: 1, max_qty: 49, unit_price: 680.00, discount_pct: 0.0, tier_label: '1–49 M (Standard)' },
    { id: 'TR-04-B', product_id: 'PRD-HYD-04', min_qty: 50, max_qty: 199, unit_price: 540.00, discount_pct: 20.6, tier_label: '50–199 M (-21%)' },
    { id: 'TR-04-C', product_id: 'PRD-HYD-04', min_qty: 200, max_qty: null, unit_price: 420.00, discount_pct: 38.2, tier_label: '200+ M (-38% Bulk)' },

    { id: 'TR-05-A', product_id: 'PRD-PIN-05', min_qty: 1, max_qty: 49, unit_price: 42.00, discount_pct: 0.0, tier_label: '1–49 PCS (Standard)' },
    { id: 'TR-05-B', product_id: 'PRD-PIN-05', min_qty: 50, max_qty: 199, unit_price: 31.50, discount_pct: 25.0, tier_label: '50–199 PCS (-25%)' },
    { id: 'TR-05-C', product_id: 'PRD-PIN-05', min_qty: 200, max_qty: null, unit_price: 22.80, discount_pct: 45.7, tier_label: '200+ PCS (-46% Bulk)' },

    { id: 'TR-06-A', product_id: 'PRD-PNEU-06', min_qty: 1, max_qty: 49, unit_price: 185.00, discount_pct: 0.0, tier_label: '1–49 PCS (Standard)' },
    { id: 'TR-06-B', product_id: 'PRD-PNEU-06', min_qty: 50, max_qty: 199, unit_price: 148.00, discount_pct: 20.0, tier_label: '50–199 PCS (-20%)' },
    { id: 'TR-06-C', product_id: 'PRD-PNEU-06', min_qty: 200, max_qty: null, unit_price: 115.00, discount_pct: 37.8, tier_label: '200+ PCS (-38% Bulk)' },

    { id: 'TR-07-A', product_id: 'PRD-FAST-07', min_qty: 1, max_qty: 49, unit_price: 12.00, discount_pct: 0.0, tier_label: '1–49 PCS (Standard)' },
    { id: 'TR-07-B', product_id: 'PRD-FAST-07', min_qty: 50, max_qty: 199, unit_price: 9.20, discount_pct: 23.3, tier_label: '50–199 PCS (-23%)' },
    { id: 'TR-07-C', product_id: 'PRD-FAST-07', min_qty: 200, max_qty: null, unit_price: 6.90, discount_pct: 42.5, tier_label: '200+ PCS (-42.5% Bulk)' },

    { id: 'TR-08-A', product_id: 'PRD-FAST-08', min_qty: 1, max_qty: 49, unit_price: 34.00, discount_pct: 0.0, tier_label: '1–49 PCS (Standard)' },
    { id: 'TR-08-B', product_id: 'PRD-FAST-08', min_qty: 50, max_qty: 199, unit_price: 26.00, discount_pct: 23.5, tier_label: '50–199 PCS (-23.5%)' },
    { id: 'TR-08-C', product_id: 'PRD-FAST-08', min_qty: 200, max_qty: null, unit_price: 19.50, discount_pct: 42.6, tier_label: '200+ PCS (-43% Bulk)' }
  ];
}

function getInitialDealers() {
  return [
    {
      id: 'DLR-991',
      company_name: 'Cochin Marine Hardware Syndicate',
      contact_person: 'Rajesh Varma',
      phone: '919895033445',
      email: 'rajesh@cochinmarine.in',
      gstin: '32AABCC1234D1Z5',
      state_code: '32',
      credit_limit: 500000.00,
      credit_used: 160000.00,
      credit_available: 340000.00,
      payment_terms: 'Net-30 Trade Credit',
      status: 'APPROVED',
      audited_turnover: '₹8.40 Cr',
      created_at: '2026-11-01 07:00:00'
    },
    {
      id: 'DLR-992',
      company_name: 'Malabar Heavy Engineering Works (Calicut)',
      contact_person: 'Faisal Rahman',
      phone: '919447022334',
      email: 'purchase@malabarheavy.com',
      gstin: '32ABXPR4567K1Z2',
      state_code: '32',
      credit_limit: 750000.00,
      credit_used: 215000.00,
      credit_available: 535000.00,
      payment_terms: 'Net-30 Trade Credit',
      status: 'APPROVED',
      audited_turnover: '₹14.20 Cr',
      created_at: '2026-11-01 07:30:00'
    },
    {
      id: 'DLR-993',
      company_name: 'Coimbatore Precision Pumps & Motors',
      contact_person: 'Senthil Kumar',
      phone: '919842055667',
      email: 'accounts@cbe-precision.com',
      gstin: '33AAACD9876P1ZV',
      state_code: '33',
      credit_limit: 400000.00,
      credit_used: 310000.00,
      credit_available: 90000.00,
      payment_terms: 'Net-30 Trade Credit',
      status: 'APPROVED',
      audited_turnover: '₹6.10 Cr',
      created_at: '2026-11-01 08:00:00'
    },
    {
      id: 'DLR-994',
      company_name: 'Apex Industrial Fabricators (Aluva)',
      contact_person: 'George Mathew',
      phone: '919846011998',
      email: 'admin@apexfab.in',
      gstin: '32AACFA7766M1Z8',
      state_code: '32',
      credit_limit: 300000.00,
      credit_used: 0.00,
      credit_available: 300000.00,
      payment_terms: 'Net-30 Trade Credit',
      status: 'PENDING_APPROVAL',
      audited_turnover: '₹4.80 Cr',
      created_at: '2026-11-01 08:45:00'
    },
    {
      id: 'DLR-995',
      company_name: 'Bharath Heavy Hydraulics & Valves (Bangalore)',
      contact_person: 'Vikram Rao',
      phone: '919880199223',
      email: 'info@bharathhydraulics.co.in',
      gstin: '29AAGCB5544J1Z1',
      state_code: '29',
      credit_limit: 1000000.00,
      credit_used: 0.00,
      credit_available: 1000000.00,
      payment_terms: 'Net-30 Trade Credit',
      status: 'PENDING_APPROVAL',
      audited_turnover: '₹18.50 Cr',
      created_at: '2026-11-01 09:10:00'
    }
  ];
}

function getInitialRfqs() {
  return [
    {
      id: 'RFQ-2026-8812',
      rfq_number: 'PI-2026-8812',
      dealer_id: 'DLR-991',
      company_name: 'Cochin Marine Hardware Syndicate',
      contact_name: 'Rajesh Varma',
      phone: '919895033445',
      email: 'rajesh@cochinmarine.in',
      gstin: '32AABCC1234D1Z5',
      state_code: '32',
      is_interstate: 0,
      items: [
        { sku: 'FAST-HEX-M8-304', name: 'Hex Head Bolt DIN 933 (SS 304, M8 x 30mm)', hsn: '73181500', qty: 500, unit_price: 9.80, line_total: 4900 },
        { sku: 'BRG-BALL-6204-2RS', name: 'Deep Groove Ball Bearing 6204-2RS', hsn: '84821010', qty: 150, unit_price: 195.00, line_total: 29250 },
        { sku: 'PNEU-COUP-BRS-04', name: 'Pneumatic Quick Coupler Brass 1/4" NPT', hsn: '84812000', qty: 250, unit_price: 115.00, line_total: 28750 }
      ],
      subtotal: 62900.00,
      cgst: 5661.00,
      sgst: 5661.00,
      igst: 0.00,
      grand_total: 74222.00,
      discount_override_pct: 0.0,
      negotiated_total: 74222.00,
      admin_notes: 'Standard volume discount applied across all 3 product lines.',
      status: 'PROFORMA_ISSUED',
      created_at: '2026-11-01 08:30:00'
    },
    {
      id: 'RFQ-2026-8813',
      rfq_number: 'PI-2026-8813',
      dealer_id: 'DLR-993',
      company_name: 'Coimbatore Precision Pumps & Motors',
      contact_name: 'Senthil Kumar',
      phone: '919842055667',
      email: 'accounts@cbe-precision.com',
      gstin: '33AAACD9876P1ZV',
      state_code: '33',
      is_interstate: 1,
      items: [
        { sku: 'HYD-HOSE-100R2-08', name: 'High-Pressure Hydraulic Hose SAE 100R2 (1/2" ID)', hsn: '40092100', qty: 300, unit_price: 420.00, line_total: 126000 },
        { sku: 'PIN-DOWL-ISO2338-M8', name: 'Precision Dowel Pin ISO 2338 (m6 Hardened)', hsn: '73182400', qty: 1000, unit_price: 22.80, line_total: 22800 }
      ],
      subtotal: 148800.00,
      cgst: 0.00,
      sgst: 0.00,
      igst: 26784.00,
      grand_total: 175584.00,
      discount_override_pct: 5.0,
      negotiated_total: 166804.80,
      admin_notes: '5% special export corridor discount authorized by sales director.',
      status: 'QUOTE_OVERRIDDEN',
      created_at: '2026-11-01 09:15:00'
    }
  ];
}

function getInitialOrders() {
  return [
    {
      id: 'ORD-B2B-7011',
      order_number: 'PO-2026-7011',
      rfq_id: 'RFQ-2026-8812',
      dealer_id: 'DLR-991',
      company_name: 'Cochin Marine Hardware Syndicate',
      contact_name: 'Rajesh Varma',
      phone: '919895033445',
      email: 'rajesh@cochinmarine.in',
      gstin: '32AABCC1234D1Z5',
      shipping_address: 'Shed #4, Marine Drive Shipyard Complex, Willingdon Island, Kochi, Kerala 682003',
      state_code: '32',
      payment_method: 'net30_credit',
      payment_status: 'CREDIT_CHARGED',
      items: [
        { sku: 'FAST-HEX-M8-304', name: 'Hex Head Bolt DIN 933 (SS 304, M8 x 30mm)', hsn: '73181500', qty: 500, unit_price: 9.80, line_total: 4900 },
        { sku: 'BRG-BALL-6204-2RS', name: 'Deep Groove Ball Bearing 6204-2RS', hsn: '84821010', qty: 150, unit_price: 195.00, line_total: 29250 },
        { sku: 'PNEU-COUP-BRS-04', name: 'Pneumatic Quick Coupler Brass 1/4" NPT', hsn: '84812000', qty: 250, unit_price: 115.00, line_total: 28750 }
      ],
      subtotal: 62900.00,
      cgst: 5661.00,
      sgst: 5661.00,
      igst: 0.00,
      grand_total: 74222.00,
      status: 'EWAY_GENERATED',
      eway_bill_id: 'EWB-541098234410',
      upi_qr_string: null,
      created_at: '2026-11-01 09:00:00'
    },
    {
      id: 'ORD-B2B-7012',
      order_number: 'PO-2026-7012',
      rfq_id: null,
      dealer_id: 'DLR-992',
      company_name: 'Malabar Heavy Engineering Works (Calicut)',
      contact_name: 'Faisal Rahman',
      phone: '919447022334',
      email: 'purchase@malabarheavy.com',
      gstin: '32ABXPR4567K1Z2',
      shipping_address: 'Plot 18, West Hill Industrial Estate, Calicut, Kerala 673005',
      state_code: '32',
      payment_method: 'cashfree_upi',
      payment_status: 'PAID',
      items: [
        { sku: 'FAST-NYL-M10-88', name: 'Flanged Nyloc Nut DIN 6926 (Grade 8.8, M10)', hsn: '73181600', qty: 2000, unit_price: 7.90, line_total: 15800 },
        { sku: 'FAST-HEX-M12-88', name: 'High-Tensile Hex Bolt DIN 931 (Grade 8.8, M12)', hsn: '73181500', qty: 800, unit_price: 19.50, line_total: 15600 }
      ],
      subtotal: 31400.00,
      cgst: 2826.00,
      sgst: 2826.00,
      igst: 0.00,
      grand_total: 37052.00,
      status: 'DISPATCH_PENDING',
      eway_bill_id: null,
      upi_qr_string: 'upi://pay?pa=industrial.dist@icici&pn=MCMASTER+INDUSTRIAL&am=37052.00&cu=INR&tn=PO-2026-7012',
      created_at: '2026-11-01 09:30:00'
    }
  ];
}

function getInitialEwayBills() {
  return [
    {
      id: 'EWB-541098234410',
      eway_bill_number: '541098234410',
      order_id: 'ORD-B2B-7011',
      doc_number: 'PO-2026-7011',
      gstin_supplier: '32AABCM9982D1Z3',
      gstin_recipient: '32AABCC1234D1Z5',
      dispatch_from_pincode: '682024',
      delivery_to_pincode: '682003',
      transporter_id: '32AAACT8812K1Z9',
      transporter_name: 'VRL Logistics Industrial Express',
      vehicle_number: 'KL-07-CD-4421',
      approx_distance_km: 45,
      valid_from: '2026-11-01 10:00:00',
      valid_until: '2026-11-02 23:59:59',
      hsn_summary: [
        { hsn: '73181500', desc: 'SS 304 Hex Bolts', taxable: 4900, cgst: 441, sgst: 441, igst: 0 },
        { hsn: '84821010', desc: 'Ball Bearings 6204-2RS', taxable: 29250, cgst: 2632.50, sgst: 2632.50, igst: 0 },
        { hsn: '84812000', desc: 'Pneumatic Couplers', taxable: 28750, cgst: 2587.50, sgst: 2587.50, igst: 0 }
      ],
      total_value: 74222.00,
      status: 'ACTIVE',
      created_at: '2026-11-01 10:00:00'
    }
  ];
}

// In-memory singletons across requests within isolate
let memoryProducts = getInitialProducts();
let memoryPriceTiers = getInitialPriceTiers();
let memoryDealers = getInitialDealers();
let memoryRfqs = getInitialRfqs();
let memoryOrders = getInitialOrders();
let memoryEwayBills = getInitialEwayBills();

/**
 * Lazy request-time catalog loader.
 * Merges price tiers into each product record and allows parametric filtering.
 */
export function getCatalog(filters = {}) {
  const { material, standard, grade, thread, category, search } = filters;

  return memoryProducts.map(p => {
    const tiers = memoryPriceTiers.filter(t => t.product_id === p.id).sort((a, b) => a.min_qty - b.min_qty);
    return {
      ...p,
      price_tiers: tiers
    };
  }).filter(p => {
    if (material && material !== 'all') {
      if (!p.material.toLowerCase().includes(material.toLowerCase())) return false;
    }
    if (standard && standard !== 'all') {
      if (!p.standard.toLowerCase().includes(standard.toLowerCase())) return false;
    }
    if (grade && grade !== 'all') {
      if (!p.grade.toLowerCase().includes(grade.toLowerCase())) return false;
    }
    if (thread && thread !== 'all') {
      if (!p.thread.toLowerCase().includes(thread.toLowerCase())) return false;
    }
    if (category && category !== 'all') {
      if (!p.category.toLowerCase().includes(category.toLowerCase())) return false;
    }
    if (search && search.trim()) {
      const q = search.trim().toLowerCase();
      const match =
        p.sku.toLowerCase().includes(q) ||
        p.name.toLowerCase().includes(q) ||
        p.hsn_code.includes(q) ||
        p.standard.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.thread.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });
}

/**
 * Find single product by SKU or ID
 */
export function getProductBySkuOrId(identifier) {
  const idStr = String(identifier).trim();
  const prod = memoryProducts.find(p => p.id === idStr || p.sku.toLowerCase() === idStr.toLowerCase());
  if (!prod) return null;
  const tiers = memoryPriceTiers.filter(t => t.product_id === prod.id).sort((a, b) => a.min_qty - b.min_qty);
  return { ...prod, price_tiers: tiers };
}

/**
 * Resolve price tier and unit price for a given quantity
 */
export function resolveTierPrice(product, quantity) {
  const qty = Math.max(1, Number(quantity) || 1);
  const tiers = memoryPriceTiers.filter(t => t.product_id === product.id).sort((a, b) => a.min_qty - b.min_qty);
  if (!tiers || tiers.length === 0) {
    return {
      unitPrice: product.base_price,
      discountPct: 0,
      tierLabel: 'Standard 1+',
      lineTotal: Math.round(product.base_price * qty * 100) / 100
    };
  }

  let matchedTier = tiers[0];
  for (const t of tiers) {
    if (qty >= t.min_qty && (t.max_qty === null || qty <= t.max_qty)) {
      matchedTier = t;
      break;
    }
  }

  const unitPrice = matchedTier.unit_price;
  const discountPct = matchedTier.discount_pct;
  const lineTotal = Math.round(unitPrice * qty * 100) / 100;

  return {
    unitPrice,
    discountPct,
    tierLabel: matchedTier.tier_label,
    lineTotal
  };
}

/**
 * Calculate Indian GST (HSN wise, Intrastate vs Interstate)
 */
export function computeGstBreakdown(lineItems, buyerStateCode = '32') {
  const isInterstate = String(buyerStateCode).trim() !== '32';
  let subtotal = 0;
  const hsnMap = {};

  for (const item of lineItems) {
    const lineTotal = Number(item.line_total || (item.unit_price * item.qty)) || 0;
    subtotal += lineTotal;

    const hsn = item.hsn || item.hsn_code || '73181500';
    if (!hsnMap[hsn]) {
      hsnMap[hsn] = {
        hsn,
        description: item.name || `HSN ${hsn}`,
        taxable_amount: 0,
        gst_rate: 18,
        cgst_rate: isInterstate ? 0 : 9,
        sgst_rate: isInterstate ? 0 : 9,
        igst_rate: isInterstate ? 18 : 0,
        cgst_amount: 0,
        sgst_amount: 0,
        igst_amount: 0,
        total_tax: 0
      };
    }
    hsnMap[hsn].taxable_amount += lineTotal;
  }

  let totalCgst = 0;
  let totalSgst = 0;
  let totalIgst = 0;

  for (const hsn in hsnMap) {
    const entry = hsnMap[hsn];
    entry.taxable_amount = Math.round(entry.taxable_amount * 100) / 100;

    if (isInterstate) {
      entry.igst_amount = Math.round(entry.taxable_amount * 0.18 * 100) / 100;
      entry.total_tax = entry.igst_amount;
      totalIgst += entry.igst_amount;
    } else {
      entry.cgst_amount = Math.round(entry.taxable_amount * 0.09 * 100) / 100;
      entry.sgst_amount = Math.round(entry.taxable_amount * 0.09 * 100) / 100;
      entry.total_tax = entry.cgst_amount + entry.sgst_amount;
      totalCgst += entry.cgst_amount;
      totalSgst += entry.sgst_amount;
    }
  }

  subtotal = Math.round(subtotal * 100) / 100;
  totalCgst = Math.round(totalCgst * 100) / 100;
  totalSgst = Math.round(totalSgst * 100) / 100;
  totalIgst = Math.round(totalIgst * 100) / 100;
  const taxTotal = Math.round((totalCgst + totalSgst + totalIgst) * 100) / 100;
  const grandTotal = Math.round((subtotal + taxTotal) * 100) / 100;

  return {
    subtotal,
    isInterstate,
    cgst: totalCgst,
    sgst: totalSgst,
    igst: totalIgst,
    taxTotal,
    grandTotal,
    hsnBreakdown: Object.values(hsnMap)
  };
}

/**
 * Lazy request-time RFQ Generator & Proforma Invoice Builder
 */
export function createRfq(payload = {}) {
  const now = Date.now();
  const {
    dealerId = null,
    companyName = 'Apex Engineering Client',
    contactName = 'Purchase Head',
    phone = '919061902295',
    email = 'procurement@apexeng.in',
    gstin = '32AABCC1234D1Z5',
    stateCode = '32',
    items = []
  } = payload;

  if (!Array.isArray(items) || items.length === 0) {
    return { status: 400, error: 'EMPTY_RFQ', message: 'No industrial line items specified in RFQ request.' };
  }

  const resolvedItems = [];
  for (const rawItem of items) {
    const prod = getProductBySkuOrId(rawItem.sku || rawItem.id);
    if (!prod) {
      return { status: 400, error: 'PRODUCT_NOT_FOUND', message: `Product ${rawItem.sku || rawItem.id} not found.` };
    }
    const qty = Math.max(1, Number(rawItem.qty) || 1);
    const tierPricing = resolveTierPrice(prod, qty);

    resolvedItems.push({
      sku: prod.sku,
      name: prod.name,
      standard: prod.standard,
      material: prod.material,
      thread: prod.thread,
      hsn: prod.hsn_code,
      qty,
      unit_of_measure: prod.unit_of_measure,
      unit_price: tierPricing.unitPrice,
      discount_pct: tierPricing.discountPct,
      tier_label: tierPricing.tierLabel,
      line_total: tierPricing.lineTotal
    });
  }

  const gstCalc = computeGstBreakdown(resolvedItems, stateCode);
  const rfqSeq = Math.floor(1000 + Math.random() * 9000);
  const rfqId = `RFQ-2026-${rfqSeq}`;
  const proformaNumber = `PI-2026-${rfqSeq}`;

  const validUntilDate = new Date(now + 14 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

  const newRfq = {
    id: rfqId,
    rfq_number: proformaNumber,
    dealer_id: dealerId,
    company_name: companyName.trim(),
    contact_name: contactName.trim(),
    phone: phone.trim().replace(/[^0-9]/g, ''),
    email: email.trim(),
    gstin: (gstin || '').trim().toUpperCase(),
    state_code: stateCode,
    is_interstate: gstCalc.isInterstate ? 1 : 0,
    items: resolvedItems,
    subtotal: gstCalc.subtotal,
    cgst: gstCalc.cgst,
    sgst: gstCalc.sgst,
    igst: gstCalc.igst,
    grand_total: gstCalc.grandTotal,
    discount_override_pct: 0.0,
    negotiated_total: gstCalc.grandTotal,
    admin_notes: 'Automated RFQ proforma issued at tiered volume schedule.',
    status: 'PROFORMA_ISSUED',
    created_at: new Date(now).toISOString().replace('T', ' ').slice(0, 19),
    valid_until: validUntilDate,
    reverse_charge: 'N',
    supplier_info: SUPPLIER_INFO,
    hsn_breakdown: gstCalc.hsnBreakdown
  };

  memoryRfqs.unshift(newRfq);
  if (memoryRfqs.length > 50) memoryRfqs.pop();

  return {
    status: 200,
    success: true,
    rfqId,
    proformaNumber,
    rfq: newRfq
  };
}

export function getRfqs(id = null, limit = 50) {
  if (id) {
    const rfq = memoryRfqs.find(r => r.id === id || r.rfq_number === id);
    return rfq || null;
  }
  return memoryRfqs.slice(0, limit);
}

/**
 * Admin Custom Bulk RFQ Quote Override
 */
export function overrideRfqQuote(rfqId, payload = {}) {
  const rfq = memoryRfqs.find(r => r.id === rfqId || r.rfq_number === rfqId);
  if (!rfq) {
    return { status: 404, error: 'RFQ_NOT_FOUND', message: `RFQ ${rfqId} not found.` };
  }

  const discountOverridePct = Math.max(0, Math.min(50, Number(payload.discountOverridePct) || 0));
  const adminNotes = payload.adminNotes || 'Discount negotiated by B2B sales desk.';

  // Apply discount to subtotal
  const originalSubtotal = rfq.subtotal;
  const discountedSubtotal = Math.round(originalSubtotal * (1 - discountOverridePct / 100) * 100) / 100;

  // Recompute tax with discounted taxable subtotal
  const ratio = discountedSubtotal / originalSubtotal;
  const adjustedItems = rfq.items.map(it => ({
    ...it,
    line_total: Math.round(it.line_total * ratio * 100) / 100
  }));

  const gstCalc = computeGstBreakdown(adjustedItems, rfq.state_code);

  rfq.discount_override_pct = discountOverridePct;
  rfq.negotiated_total = gstCalc.grandTotal;
  rfq.subtotal = gstCalc.subtotal;
  rfq.cgst = gstCalc.cgst;
  rfq.sgst = gstCalc.sgst;
  rfq.igst = gstCalc.igst;
  rfq.grand_total = gstCalc.grandTotal;
  rfq.admin_notes = adminNotes;
  rfq.status = 'QUOTE_OVERRIDDEN';

  return {
    status: 200,
    success: true,
    rfq
  };
}

/**
 * Dealers management
 */
export function getDealers(id = null) {
  if (id) {
    const dealer = memoryDealers.find(d => d.id === id || d.gstin === id);
    return dealer || null;
  }
  return memoryDealers.map(d => ({ ...d }));
}

/**
 * Dealer credit line approval, rejection, or limit update
 */
export function updateDealerCredit(dealerId, payload = {}) {
  const dealer = memoryDealers.find(d => d.id === dealerId || d.gstin === dealerId);
  if (!dealer) {
    return { status: 404, error: 'DEALER_NOT_FOUND', message: `Dealer ${dealerId} not found.` };
  }

  const { action = 'approve', creditLimit } = payload;

  if (action === 'approve') {
    dealer.status = 'APPROVED';
    if (creditLimit !== undefined) {
      const newLimit = Math.max(0, Number(creditLimit) || 0);
      dealer.credit_limit = newLimit;
      dealer.credit_available = Math.max(0, newLimit - dealer.credit_used);
    }
  } else if (action === 'reject') {
    dealer.status = 'REJECTED';
  } else if (action === 'update_limit') {
    const newLimit = Math.max(0, Number(creditLimit) || 0);
    dealer.credit_limit = newLimit;
    dealer.credit_available = Math.max(0, newLimit - dealer.credit_used);
  }

  return {
    status: 200,
    success: true,
    dealer
  };
}

/**
 * Submit new dealer application
 */
export function applyDealerCredit(payload = {}) {
  const now = Date.now();
  const {
    companyName,
    contactPerson,
    phone,
    email,
    gstin,
    stateCode = '32',
    requestedCredit = 500000,
    auditedTurnover = '₹5.00 Cr'
  } = payload;

  if (!companyName || !gstin || !phone) {
    return { status: 400, error: 'MISSING_FIELDS', message: 'Company name, GSTIN, and phone are required.' };
  }

  const id = `DLR-${Math.floor(1000 + Math.random() * 9000)}`;
  const newDealer = {
    id,
    company_name: companyName.trim(),
    contact_person: (contactPerson || 'Authorized Signatory').trim(),
    phone: phone.trim().replace(/[^0-9]/g, ''),
    email: (email || 'procurement@company.com').trim(),
    gstin: gstin.trim().toUpperCase(),
    state_code: stateCode,
    credit_limit: Number(requestedCredit) || 300000,
    credit_used: 0.00,
    credit_available: Number(requestedCredit) || 300000,
    payment_terms: 'Net-30 Trade Credit',
    status: 'PENDING_APPROVAL',
    audited_turnover: auditedTurnover,
    created_at: new Date(now).toISOString().replace('T', ' ').slice(0, 19)
  };

  memoryDealers.unshift(newDealer);
  return { status: 200, success: true, dealer: newDealer };
}

/**
 * Order placement via Net-30 Trade Credit Line or Cashfree UPI
 */
export function createOrder(payload = {}) {
  const now = Date.now();
  const {
    dealerId = null,
    rfqId = null,
    customerName = 'B2B Purchaser',
    companyName = 'Engineering Partner',
    phone = '919061902295',
    email = 'b2b@company.com',
    gstin = '32AABCC1234D1Z5',
    shippingAddress = 'Industrial Zone, Shed #12, Kochi',
    stateCode = '32',
    paymentMethod = 'net30_credit', // 'net30_credit', 'cashfree_upi', 'rtgs_transfer'
    items = []
  } = payload;

  if (!Array.isArray(items) || items.length === 0) {
    return { status: 400, error: 'EMPTY_ORDER', message: 'No items in order payload.' };
  }

  const verifiedItems = [];
  for (const rawItem of items) {
    const prod = getProductBySkuOrId(rawItem.sku || rawItem.id);
    if (!prod) {
      return { status: 400, error: 'PRODUCT_NOT_FOUND', message: `Product ${rawItem.sku || rawItem.id} not found.` };
    }
    const qty = Math.max(1, Number(rawItem.qty) || 1);
    const tierPricing = resolveTierPrice(prod, qty);

    verifiedItems.push({
      sku: prod.sku,
      name: prod.name,
      standard: prod.standard,
      material: prod.material,
      thread: prod.thread,
      hsn: prod.hsn_code,
      qty,
      unit_of_measure: prod.unit_of_measure,
      unit_price: tierPricing.unitPrice,
      discount_pct: tierPricing.discountPct,
      tier_label: tierPricing.tierLabel,
      line_total: tierPricing.lineTotal
    });
  }

  const gstCalc = computeGstBreakdown(verifiedItems, stateCode);
  const grandTotal = gstCalc.grandTotal;

  // Net-30 Credit Line Verification & Ledger Deduction
  let selectedDealer = null;
  let paymentStatus = 'PENDING';
  let upiQrString = null;

  if (paymentMethod === 'net30_credit') {
    if (!dealerId) {
      return { status: 400, error: 'DEALER_REQUIRED', message: 'Dealer ID required for Net-30 credit checkout.' };
    }
    selectedDealer = memoryDealers.find(d => d.id === dealerId);
    if (!selectedDealer) {
      return { status: 400, error: 'DEALER_NOT_FOUND', message: 'Specified dealer account not found.' };
    }
    if (selectedDealer.status !== 'APPROVED') {
      return {
        status: 403,
        error: 'CREDIT_LINE_NOT_APPROVED',
        message: `Trade credit application for ${selectedDealer.company_name} is ${selectedDealer.status}. Orders must be settled via Advance UPI/RTGS.`
      };
    }
    if (selectedDealer.credit_available < grandTotal) {
      return {
        status: 400,
        error: 'INSUFFICIENT_CREDIT_LINE',
        message: `Insufficient Net-30 Credit: Order total is ₹${grandTotal.toLocaleString('en-IN')}, but available credit is only ₹${selectedDealer.credit_available.toLocaleString('en-IN')}. Please settle outstanding invoices or select UPI/RTGS.`
      };
    }

    // Deduct available credit and update credit ledger
    selectedDealer.credit_used = Math.round((selectedDealer.credit_used + grandTotal) * 100) / 100;
    selectedDealer.credit_available = Math.round((selectedDealer.credit_limit - selectedDealer.credit_used) * 100) / 100;
    paymentStatus = 'CREDIT_CHARGED';
  } else if (paymentMethod === 'cashfree_upi') {
    const orderSeq = Math.floor(1000 + Math.random() * 9000);
    upiQrString = `upi://pay?pa=industrial.dist@icici&pn=MCMASTER+INDUSTRIAL&am=${grandTotal.toFixed(2)}&cu=INR&tn=PO-2026-${orderSeq}`;
    paymentStatus = 'PAID';
  } else {
    paymentStatus = 'PENDING';
  }

  const orderSeq = Math.floor(1000 + Math.random() * 9000);
  const orderId = `ORD-B2B-${orderSeq}`;
  const orderNumber = `PO-2026-${orderSeq}`;

  const newOrder = {
    id: orderId,
    order_number: orderNumber,
    rfq_id: rfqId,
    dealer_id: dealerId,
    company_name: companyName.trim(),
    contact_name: customerName.trim(),
    phone: phone.trim().replace(/[^0-9]/g, ''),
    email: email.trim(),
    gstin: (gstin || '').trim().toUpperCase(),
    shipping_address: shippingAddress.trim(),
    state_code: stateCode,
    payment_method: paymentMethod,
    payment_status: paymentStatus,
    items: verifiedItems,
    subtotal: gstCalc.subtotal,
    cgst: gstCalc.cgst,
    sgst: gstCalc.sgst,
    igst: gstCalc.igst,
    grand_total: grandTotal,
    status: 'DISPATCH_PENDING',
    eway_bill_id: null,
    upi_qr_string: upiQrString,
    created_at: new Date(now).toISOString().replace('T', ' ').slice(0, 19)
  };

  memoryOrders.unshift(newOrder);
  if (memoryOrders.length > 50) memoryOrders.pop();

  return {
    status: 200,
    success: true,
    orderId,
    orderNumber,
    order: newOrder,
    dealerCreditStatus: selectedDealer ? {
      dealerId: selectedDealer.id,
      companyName: selectedDealer.company_name,
      creditLimit: selectedDealer.credit_limit,
      creditUsed: selectedDealer.credit_used,
      creditAvailable: selectedDealer.credit_available
    } : null
  };
}

export function getOrders(id = null, limit = 50) {
  if (id) {
    const ord = memoryOrders.find(o => o.id === id || o.order_number === id);
    return ord || null;
  }
  return memoryOrders.slice(0, limit);
}

/**
 * Generate simulated Indian E-Way Bill (Mandatory for consignments > ₹50,000)
 */
export function generateEwayBill(payload = {}) {
  const now = Date.now();
  const {
    orderId,
    transporterId = '32AAACT8812K1Z9',
    transporterName = 'VRL Logistics Industrial Express',
    vehicleNumber = 'KL-07-CD-4421',
    approxDistanceKm = 120,
    dispatchFromPincode = '682024',
    deliveryToPincode = '682003'
  } = payload;

  const order = memoryOrders.find(o => o.id === orderId || o.order_number === orderId);
  if (!order) {
    return { status: 404, error: 'ORDER_NOT_FOUND', message: `Order ${orderId} not found.` };
  }

  // 12-digit Indian E-Way bill number (starts with 5410, standard 12-digit format)
  const ewbSuffix = String(Math.floor(10000000 + Math.random() * 90000000));
  const ewayBillNumber = `5410${ewbSuffix}`;
  const ewbId = `EWB-${ewayBillNumber}`;

  // Calculate validity period (1 day per 200 km, minimum 24 hours)
  const dist = Math.max(10, Number(approxDistanceKm) || 50);
  const validityDays = Math.max(1, Math.ceil(dist / 200));
  const validFrom = new Date(now).toISOString().replace('T', ' ').slice(0, 19);
  const validUntil = new Date(now + validityDays * 24 * 60 * 60 * 1000).toISOString().replace('T', ' ').slice(0, 19);

  // Summarize HSN items
  const hsnSummary = (order.items || []).map(i => ({
    hsn: i.hsn,
    desc: i.name,
    qty: i.qty,
    taxable: i.line_total,
    cgst: order.cgst ? Math.round(i.line_total * 0.09 * 100) / 100 : 0,
    sgst: order.sgst ? Math.round(i.line_total * 0.09 * 100) / 100 : 0,
    igst: order.igst ? Math.round(i.line_total * 0.18 * 100) / 100 : 0
  }));

  const ewbRecord = {
    id: ewbId,
    eway_bill_number: ewayBillNumber,
    order_id: order.id,
    doc_number: order.order_number,
    gstin_supplier: SUPPLIER_INFO.gstin,
    gstin_recipient: order.gstin || '32AABCC1234D1Z5',
    dispatch_from_pincode: dispatchFromPincode,
    delivery_to_pincode: deliveryToPincode,
    transporter_id: transporterId,
    transporter_name: transporterName,
    vehicle_number: vehicleNumber.toUpperCase(),
    approx_distance_km: dist,
    valid_from: validFrom,
    valid_until: validUntil,
    hsn_summary: hsnSummary,
    total_value: order.grand_total,
    status: 'ACTIVE',
    created_at: validFrom
  };

  memoryEwayBills.unshift(ewbRecord);
  if (memoryEwayBills.length > 50) memoryEwayBills.pop();

  // Update order status
  order.eway_bill_id = ewbId;
  order.status = 'EWAY_GENERATED';

  return {
    status: 200,
    success: true,
    ewayBillNumber,
    ewayBill: ewbRecord
  };
}

export function getEwayBills(id = null, limit = 50) {
  if (id) {
    const ewb = memoryEwayBills.find(e => e.id === id || e.eway_bill_number === id);
    return ewb || null;
  }
  return memoryEwayBills.slice(0, limit);
}
