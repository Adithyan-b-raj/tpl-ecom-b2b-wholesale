import { getCatalog, getProductBySkuOrId } from './_store.js';

export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const sku = url.searchParams.get('sku');
  const id = url.searchParams.get('id');

  if (sku || id) {
    const product = getProductBySkuOrId(sku || id);
    if (!product) {
      return new Response(JSON.stringify({ success: false, error: 'NOT_FOUND', message: 'Product not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      });
    }
    return new Response(JSON.stringify({ success: true, product }), {
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=15, s-maxage=30' }
    });
  }

  const filters = {
    material: url.searchParams.get('material') || 'all',
    standard: url.searchParams.get('standard') || 'all',
    grade: url.searchParams.get('grade') || 'all',
    thread: url.searchParams.get('thread') || 'all',
    category: url.searchParams.get('category') || 'all',
    search: url.searchParams.get('search') || url.searchParams.get('q') || ''
  };

  const products = getCatalog(filters);

  return new Response(JSON.stringify({
    success: true,
    total: products.length,
    filters,
    products
  }), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=15, s-maxage=30, stale-while-revalidate=60'
    }
  });
}
