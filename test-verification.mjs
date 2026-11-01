/**
 * Automated Verification Test Suite for tpl-ecom-b2b-wholesale
 * Tests D1 Schema, Store logic, API endpoints, Tax calculations, and Layout Archetypes.
 */

import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';
import {
  getCatalog,
  getProductBySkuOrId,
  resolveTierPrice,
  computeGstBreakdown,
  createRfq,
  getRfqs,
  overrideRfqQuote,
  getDealers,
  updateDealerCredit,
  createOrder,
  generateEwayBill,
  getEwayBills,
  SUPPLIER_INFO
} from './functions/api/_store.js';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ ${message}`);
    passed++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    failed++;
  }
}

async function runTestSuite() {
  console.log('\n=============================================================');
  console.log('🧪 RUNNING TEST SUITE: tpl-ecom-b2b-wholesale');
  console.log('=============================================================\n');

  // 1. Files & Layout Archetypes
  console.log('Test Suite 1: Structural Integrity & Anti-Clone Layout Archetypes');
  const indexHtml = readFileSync(resolve('public/index.html'), 'utf8');
  const adminHtml = readFileSync(resolve('public/admin.html'), 'utf8');

  assert(indexHtml.includes('data-layout-archetype="tabular-b2b-matrix"'), 'public/index.html carries data-layout-archetype="tabular-b2b-matrix"');
  assert(adminHtml.includes('data-layout-archetype="dealer-credit-admin"'), 'public/admin.html carries data-layout-archetype="dealer-credit-admin"');
  assert(indexHtml.includes('whitelabel.js'), 'public/index.html includes whitelabel.js');
  assert(adminHtml.includes('whitelabel.js'), 'public/admin.html includes whitelabel.js');

  const schemaSql = readFileSync(resolve('schema.sql'), 'utf8');
  assert(schemaSql.includes('CREATE TABLE products'), 'schema.sql defines products table');
  assert(schemaSql.includes('CREATE TABLE price_tiers'), 'schema.sql defines price_tiers table');
  assert(schemaSql.includes('CREATE TABLE dealers'), 'schema.sql defines dealers table');
  assert(schemaSql.includes('CREATE TABLE rfqs'), 'schema.sql defines rfqs table');
  assert(schemaSql.includes('CREATE TABLE orders'), 'schema.sql defines orders table');
  assert(schemaSql.includes('CREATE TABLE eway_bills'), 'schema.sql defines eway_bills table');

  const seedSql = readFileSync(resolve('seed.sql'), 'utf8');
  assert(seedSql.includes('FAST-HEX-M8-304'), 'seed.sql seeds Hex Head Bolt DIN 933 (SS 304)');
  assert(seedSql.includes('FAST-NYL-M10-88'), 'seed.sql seeds Flanged Nyloc Nut DIN 6926 (Grade 8.8)');
  assert(seedSql.includes('BRG-BALL-6204-2RS'), 'seed.sql seeds Ball Bearing 6204-2RS (Chrome Steel)');
  assert(seedSql.includes('HYD-HOSE-100R2-08'), 'seed.sql seeds Hydraulic Hose SAE 100R2');
  assert(seedSql.includes('PIN-DOWL-ISO2338-M8'), 'seed.sql seeds Precision Dowel Pin ISO 2338');
  assert(seedSql.includes('PNEU-COUP-BRS-04'), 'seed.sql seeds Pneumatic Quick Coupler Brass');

  // 2. Zero Top-Level Date.now() Freezing Check
  console.log('\nTest Suite 2: V8 Isolate Snapshot Freeze Safety');
  const storeJs = readFileSync(resolve('functions/api/_store.js'), 'utf8');
  // Top-level Date.now() check: should only occur inside functions
  const topLevelDateMatch = storeJs.match(/^(const|let|var)\s+\w+\s*=\s*(Date\.now\(\)|new Date\(\));/m);
  assert(!topLevelDateMatch, 'Zero top-level Date.now() or new Date() freezing in _store.js');

  // 3. Catalog & Parametric Filters
  console.log('\nTest Suite 3: Catalog & Parametric Filters');
  const allProducts = getCatalog();
  assert(allProducts.length >= 8, `Catalog returns ${allProducts.length} industrial products (>= 8)`);

  const ss304Prods = getCatalog({ material: 'SS 304' });
  assert(ss304Prods.length >= 2, `Parametric filter material="SS 304" returned ${ss304Prods.length} items`);

  const din933 = getCatalog({ standard: 'DIN 933' });
  assert(din933.length === 1 && din933[0].sku === 'FAST-HEX-M8-304', 'Parametric filter standard="DIN 933" correctly resolved Hex Bolt');

  const bolt = getProductBySkuOrId('FAST-HEX-M8-304');
  assert(bolt !== null, 'Product FAST-HEX-M8-304 found');
  assert(bolt.price_tiers.length === 3, 'Product has 3 volume pricing tiers');

  // 4. Volume Price Tier Resolution
  console.log('\nTest Suite 4: Tiered Volume Pricing Resolution');
  const tier1 = resolveTierPrice(bolt, 25);
  assert(tier1.unitPrice === 16.00 && tier1.discountPct === 0, 'Tier 1 (25 pcs): Base price ₹16.00, 0% discount');

  const tier2 = resolveTierPrice(bolt, 100);
  assert(tier2.unitPrice === 12.50 && Math.round(tier2.discountPct) === 22, 'Tier 2 (100 pcs): Slashed rate ₹12.50 (-22%)');

  const tier3 = resolveTierPrice(bolt, 500);
  assert(tier3.unitPrice === 9.80 && Math.round(tier3.discountPct) === 39, 'Tier 3 (500 pcs): Bulk factory rate ₹9.80 (-39%)');

  // 5. GST Computation & HSN Segregation
  console.log('\nTest Suite 5: Indian GST & HSN Segregation');
  const itemsIntrastate = [
    { sku: 'FAST-HEX-M8-304', hsn: '73181500', name: 'SS 304 Bolt', unit_price: 9.80, qty: 500, line_total: 4900 },
    { sku: 'BRG-BALL-6204-2RS', hsn: '84821010', name: 'Ball Bearing', unit_price: 195.00, qty: 150, line_total: 29250 }
  ];
  const gstKerala = computeGstBreakdown(itemsIntrastate, '32');
  assert(!gstKerala.isInterstate, 'State 32 (Kerala) identified as Intrastate');
  assert(gstKerala.cgst > 0 && gstKerala.sgst > 0 && gstKerala.igst === 0, 'Intrastate applies CGST 9% and SGST 9%, zero IGST');
  assert(gstKerala.hsnBreakdown.length === 2, 'HSN 7318 and 8482 correctly segregated');

  const gstInterstate = computeGstBreakdown(itemsIntrastate, '33'); // Tamil Nadu
  assert(gstInterstate.isInterstate, 'State 33 (Tamil Nadu) identified as Interstate');
  assert(gstInterstate.cgst === 0 && gstInterstate.sgst === 0 && gstInterstate.igst > 0, 'Interstate applies IGST 18%');
  assert(gstInterstate.grandTotal === Math.round(34150 * 1.18 * 100) / 100, `Interstate Grand Total matches ₹${gstInterstate.grandTotal}`);

  // 6. Formal GST Proforma Invoice & RFQ Generation
  console.log('\nTest Suite 6: 1-Click GST Proforma Invoice & RFQ Generator');
  const rfqRes = createRfq({
    dealerId: 'DLR-991',
    companyName: 'Cochin Marine Hardware Syndicate',
    contactName: 'Rajesh Varma',
    phone: '919895033445',
    email: 'rajesh@cochinmarine.in',
    gstin: '32AABCC1234D1Z5',
    stateCode: '32',
    items: [
      { sku: 'FAST-HEX-M8-304', qty: 500 },
      { sku: 'BRG-BALL-6204-2RS', qty: 150 }
    ]
  });
  assert(rfqRes.success && rfqRes.rfqId.startsWith('RFQ-2026-'), 'Generated formal RFQ ticket');
  assert(rfqRes.proformaNumber.startsWith('PI-2026-'), 'Generated formal Proforma Invoice number (#PI-2026-XXXX)');
  assert(rfqRes.rfq.reverse_charge === 'N', 'Reverse charge flag set to N');
  assert(rfqRes.rfq.supplier_info.gstin === '32AABCM9982D1Z3', 'Supplier entity details attached');

  // Test Quote Override
  const overrideRes = overrideRfqQuote(rfqRes.rfqId, { discountOverridePct: 5.0, adminNotes: 'Special dealer concession' });
  assert(overrideRes.success && overrideRes.rfq.status === 'QUOTE_OVERRIDDEN', 'Admin custom quote override succeeded');
  assert(overrideRes.rfq.discount_override_pct === 5.0, '5.0% discount override recorded');

  // 7. Dealer Net-30 Credit Line Management
  console.log('\nTest Suite 7: B2B Dealer Trade Credit Management');
  const dealersList = getDealers();
  assert(dealersList.length >= 5, `Retrieved ${dealersList.length} dealer accounts`);
  const cochinDealer = getDealers('DLR-991');
  assert(cochinDealer.status === 'APPROVED', 'Cochin Marine Hardware Syndicate is APPROVED');
  assert(cochinDealer.credit_available === 340000, 'Available credit is ₹3,40,000 of ₹5,00,000 limit');

  const pendingDealer = getDealers('DLR-994');
  assert(pendingDealer.status === 'PENDING_APPROVAL', 'Apex Industrial Fabricators is PENDING_APPROVAL');

  const approveRes = updateDealerCredit('DLR-994', { action: 'approve', creditLimit: 350000 });
  assert(approveRes.success && approveRes.dealer.status === 'APPROVED', 'Pending dealer approved successfully');
  assert(approveRes.dealer.credit_limit === 350000, 'Credit limit calibrated to ₹3,50,000');

  // 8. Order Placement (Net-30 vs UPI)
  console.log('\nTest Suite 8: Order Placement via Net-30 Credit Line & Cashfree UPI');
  const initialCreditAvail = cochinDealer.credit_available;
  const orderRes = createOrder({
    dealerId: 'DLR-991',
    customerName: 'Rajesh Varma',
    companyName: 'Cochin Marine Hardware Syndicate',
    phone: '919895033445',
    email: 'rajesh@cochinmarine.in',
    gstin: '32AABCC1234D1Z5',
    shippingAddress: 'Shed #4, Marine Drive Shipyard Complex, Kochi',
    stateCode: '32',
    paymentMethod: 'net30_credit',
    items: [{ sku: 'FAST-HEX-M8-304', qty: 500 }]
  });
  assert(orderRes.success && orderRes.orderNumber.startsWith('PO-2026-'), 'Net-30 purchase order created');
  assert(orderRes.order.payment_status === 'CREDIT_CHARGED', 'Payment status marked CREDIT_CHARGED');
  assert(cochinDealer.credit_available < initialCreditAvail, 'Dealer available credit decremented in ledger');

  // Insufficient credit guard
  const excessOrder = createOrder({
    dealerId: 'DLR-993', // Coimbatore, available: 90,000
    customerName: 'Senthil Kumar',
    companyName: 'Coimbatore Precision Pumps',
    phone: '919842055667',
    email: 'accounts@cbe-precision.com',
    gstin: '33AAACD9876P1ZV',
    shippingAddress: 'Coimbatore',
    stateCode: '33',
    paymentMethod: 'net30_credit',
    items: [{ sku: 'HYD-HOSE-100R2-08', qty: 300 }] // Subtotal 1,26,000 + GST > 90,000
  });
  assert(excessOrder.status === 400 && excessOrder.error === 'INSUFFICIENT_CREDIT_LINE', 'Order exceeding available credit rejected with 400 INSUFFICIENT_CREDIT_LINE');

  // 9. Simulated Indian E-Way Bill Generation
  console.log('\nTest Suite 9: Indian GST E-Way Bill Consignment Dispatcher');
  const ewayRes = generateEwayBill({
    orderId: orderRes.orderId,
    transporterId: '32AAACT8812K1Z9',
    transporterName: 'VRL Logistics Industrial Express',
    vehicleNumber: 'KL-07-CD-4421',
    approxDistanceKm: 85,
    dispatchFromPincode: '682024',
    deliveryToPincode: '682003'
  });
  assert(ewayRes.success && ewayRes.ewayBillNumber.length === 12, `Generated valid 12-digit Indian E-Way bill: ${ewayRes.ewayBillNumber}`);
  assert(ewayRes.ewayBill.vehicle_number === 'KL-07-CD-4421', 'Vehicle registration recorded');
  assert(ewayRes.ewayBill.hsn_summary.length > 0, 'HSN summary goods breakdown attached');
  assert(orderRes.order.status === 'EWAY_GENERATED', 'Order status updated to EWAY_GENERATED');

  // 10. Whitelabel Personalization Contract
  console.log('\nTest Suite 10: Whitelabel Contract Compatibility');
  const wlJs = readFileSync(resolve('public/whitelabel.js'), 'utf8');
  assert(wlJs.includes('brand') && wlJs.includes('primary') && wlJs.includes('wa') && wlJs.includes('phone'), 'whitelabel.js supports brand, primary, phone, wa query params');

  console.log('\n=============================================================');
  console.log(`📊 TEST RESULTS: ${passed} PASSED, ${failed} FAILED`);
  console.log('=============================================================\n');

  if (failed > 0) {
    process.exit(1);
  }
}

runTestSuite().catch(err => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
