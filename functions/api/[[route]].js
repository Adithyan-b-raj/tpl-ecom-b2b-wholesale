export async function onRequest() {
  return new Response(JSON.stringify({ service: 'tpl-ecom-b2b-wholesale', status: 'ok', items: [{"id":"RFQ-2091","name":"Kerala Electricals & Switchgear (Thrissur)","phone":"919847011223","detail":"120x 200W High-Bay LED (100+ Slab Applied @ ₹1,890) • GSTIN 32AABCK1122F1Z9","status":"PROFORMA ISSUED","amount":"₹2,67,624"},{"id":"RFQ-2090","name":"Malabar Solar EPC Pvt Ltd (Calicut)","phone":"919447022334","detail":"62x 550Wp Bifacial Panels (2 Pallets) • Paid via RTGS","status":"DISPATCHED // LR #8841","amount":"₹6,51,124"},{"id":"RFQ-2089","name":"Cochin Marine Hardware Syndicate","phone":"919895033445","detail":"25 Cartons SS-304 Fasteners • Net-30 Dealer Credit Approved","status":"CREDIT APPROVED","amount":"₹1,23,900"}] }), {
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=30, s-maxage=60, stale-while-revalidate=120' }
  });
}
