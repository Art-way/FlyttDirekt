// File: middleware.js
// Path: Place this in the root directory of your project

import { NextResponse } from 'next/server';

/**
 * This middleware enforces the "www" subdomain for the production domain.
 * @param {import('next/server').NextRequest} request - The incoming request
 */
export function middleware(request) {
  const host = request.headers.get('host');

  // Ensure host is present to avoid errors
  if (!host) {
    return NextResponse.next();
  }

  // Ignore redirection in local environment (localhost) or on Vercel preview domains
  const isDevelopment = host.startsWith('localhost');
  const isVercelPreview = host.endsWith('.vercel.app');

  if (isDevelopment || isVercelPreview) {
    return NextResponse.next();
  }

  // If the host does not start with "www.", redirect to the www version.
  if (!host.startsWith('www.')) {
    const newHost = `www.${host}`;
    const newUrl = new URL(request.url);
    newUrl.host = newHost;
    // Use a 308 redirect to preserve the request method
    return NextResponse.redirect(newUrl, 308);
  }

  // If no redirection is needed, continue.
  return NextResponse.next();
}

// Middleware configuration: specify the paths it should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
