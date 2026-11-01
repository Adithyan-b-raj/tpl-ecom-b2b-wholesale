import { generateEwayBill, getEwayBills } from './_store.js';

export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const id = url.searchParams.get('id');
  const limit = Number(url.searchParams.get('limit')) || 50;

  if (id) {
    const bill = getEwayBills(id);
    if (!bill) {
      return new Response(JSON.stringify({ success: false, error: 'EWAY_NOT_FOUND', message: `E-Way bill ${id} not found` }), {
        status: 404,
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      });
    }
    return new Response(JSON.stringify({ success: true, ewayBill: bill }), {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });
  }

  const bills = getEwayBills(null, limit);
  return new Response(JSON.stringify({ success: true, count: bills.length, ewayBills: bills }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
}

export async function onRequestPost(context) {
  try {
    const payload = await context.request.json();
    if (!payload.orderId) {
      return new Response(JSON.stringify({ success: false, error: 'MISSING_ORDER_ID', message: 'orderId is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      });
    }

    const result = generateEwayBill(payload);
    return new Response(JSON.stringify(result), {
      status: result.status || 200,
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: 'BAD_REQUEST', message: err.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });
  }
}
