import { createRfq, getRfqs, overrideRfqQuote } from './_store.js';

export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const id = url.searchParams.get('id');
  const limit = Number(url.searchParams.get('limit')) || 50;

  if (id) {
    const rfq = getRfqs(id);
    if (!rfq) {
      return new Response(JSON.stringify({ success: false, error: 'RFQ_NOT_FOUND', message: `RFQ ${id} not found` }), {
        status: 404,
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      });
    }
    return new Response(JSON.stringify({ success: true, rfq }), {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });
  }

  const rfqs = getRfqs(null, limit);
  return new Response(JSON.stringify({ success: true, count: rfqs.length, rfqs }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
}

export async function onRequestPost(context) {
  try {
    const payload = await context.request.json();
    const result = createRfq(payload);

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

export async function onRequestPatch(context) {
  try {
    const payload = await context.request.json();
    const rfqId = payload.rfqId || payload.id;
    if (!rfqId) {
      return new Response(JSON.stringify({ success: false, error: 'MISSING_RFQ_ID', message: 'rfqId is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      });
    }

    const result = overrideRfqQuote(rfqId, payload);
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

export async function onRequestPut(context) {
  return onRequestPatch(context);
}
