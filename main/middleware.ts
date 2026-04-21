import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Redirect non-www to www to eliminate SEO duplication
  if (url.hostname === 'smyarns.in') {
    url.hostname = 'www.smyarns.in';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Ensure middleware only runs on actual page routes, avoiding static assets
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|apple-icon.png|web-app-manifest).*)',
  ],
};
