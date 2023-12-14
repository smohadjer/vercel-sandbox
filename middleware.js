/* middleware for vercel edge runtime */
import { next } from '@vercel/edge';

// middleware only runs for these paths
export const config = {
  matcher: [
    '/blog/:Path*'
  ]
};

if (typeof EdgeRuntime === 'string') {
  console.log('******* EdgeRuntime *********');
}

export default async function middleware(req) {
  console.log('middleware: ', req.method, req.url);

  const url = new URL(req.url);

  console.log(url.pathname);

  if (req.method === 'GET' && url.pathname.startsWith('/blog')) {
    console.log('redirecting to blog api');
    url.pathname = '/api/blog/index';
    return Response.redirect(url, 302);
  }
}
