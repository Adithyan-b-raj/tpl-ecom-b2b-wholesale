import { getCatalog, getDealers, getRfqs, getOrders, getEwayBills, SUPPLIER_INFO } from './_store.js';

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const path = url.pathname;

  // Health check endpoint
  if (path.endsWith('/health')) {
    return new Response(JSON.stringify({
      service: 'tpl-ecom-b2b-wholesale',
      status: 'healthy',
      timestamp: new Date().toISOString(),
      architecture: 'Movement E: High-Density Tabular Spec Matrix & Dealer Portal',
      archetypes: {
        storefront: 'tabular-b2b-matrix',
        admin: 'dealer-credit-admin'
      }
    }), {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });
  }

  // Summary API info
  const products = getCatalog();
  const dealers = getDealers();
  const rfqs = getRfqs();
  const orders = getOrders();
  const ewayBills = getEwayBills();

  return new Response(JSON.stringify({
    service: 'tpl-ecom-b2b-wholesale',
    status: 'ok',
    movement: 'Movement E: Industrial Tabular Order Sheet (McMaster-Carr / Fastenal)',
    supplier: SUPPLIER_INFO,
    counts: {
      products: products.length,
      dealers: dealers.length,
      rfqs: rfqs.length,
      orders: orders.length,
      ewayBills: ewayBills.length
    },
    sample_items: products.slice(0, 4).map(p => ({
      sku: p.sku,
      name: p.name,
      base_price: p.base_price,
      hsn: p.hsn_code,
      stock: p.stock_qty
    })),
    endpoints: [
      'GET /api/catalog',
      'GET /api/catalog?sku=FAST-HEX-M8-304',
      'GET /api/catalog?material=SS+304&standard=DIN+933',
      'GET /api/dealers',
      'POST /api/dealers (approve, reject, update_limit, apply)',
      'GET /api/rfq',
      'POST /api/rfq (generate formal GST Proforma & RFQ)',
      'PATCH /api/rfq (custom quote override)',
      'GET /api/orders',
      'POST /api/orders (Net-30 credit line or Cashfree UPI checkout)',
      'GET /api/eway',
      'POST /api/eway (generate 12-digit Indian E-Way bill)'
    ]
  }), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=15, s-maxage=30, stale-while-revalidate=60'
    }
  });
}
