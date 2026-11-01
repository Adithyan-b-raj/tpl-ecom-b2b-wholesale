import { getDealers, updateDealerCredit, applyDealerCredit } from './_store.js';

export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const id = url.searchParams.get('id');

  if (id) {
    const dealer = getDealers(id);
    if (!dealer) {
      return new Response(JSON.stringify({ success: false, error: 'DEALER_NOT_FOUND', message: `Dealer ${id} not found` }), {
        status: 404,
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      });
    }
    return new Response(JSON.stringify({ success: true, dealer }), {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });
  }

  const dealers = getDealers();
  return new Response(JSON.stringify({ success: true, count: dealers.length, dealers }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
}

export async function onRequestPost(context) {
  try {
    const payload = await context.request.json();
    const action = payload.action;

    if (action === 'apply') {
      const result = applyDealerCredit(payload);
      return new Response(JSON.stringify(result), {
        status: result.status || 200,
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      });
    }

    // Dealer credit approval or limit adjustment
    const dealerId = payload.dealerId || payload.id;
    if (!dealerId) {
      return new Response(JSON.stringify({ success: false, error: 'MISSING_DEALER_ID', message: 'dealerId is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      });
    }

    const result = updateDealerCredit(dealerId, payload);
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
