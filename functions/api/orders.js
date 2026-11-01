import { createOrder, getOrders } from './_store.js';

export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const id = url.searchParams.get('id');
  const limit = Number(url.searchParams.get('limit')) || 50;

  if (id) {
    const order = getOrders(id);
    if (!order) {
      return new Response(JSON.stringify({ success: false, error: 'ORDER_NOT_FOUND', message: `Order ${id} not found` }), {
        status: 404,
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      });
    }
    return new Response(JSON.stringify({ success: true, order }), {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });
  }

  const orders = getOrders(null, limit);
  return new Response(JSON.stringify({ success: true, count: orders.length, orders }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
}

export async function onRequestPost(context) {
  try {
    const payload = await context.request.json();
    const result = createOrder(payload);

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
