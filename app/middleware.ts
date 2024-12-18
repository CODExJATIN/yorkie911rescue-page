import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Define the routes that exist in your application
const validRoutes = [
  '/',
  '/adopt',
  '/about',
  '/surrender',
  '/events',
  '/volunteer',
  '/donate'
]

export function middleware(request: NextRequest) {
  // Get the pathname from the URL
  const path = request.nextUrl.pathname

  // Check if it's a valid route or starts with /adopt/ (for individual dog pages)
  const isValidRoute = validRoutes.includes(path) || path.startsWith('/adopt/')

  // If it's not a valid route and not an asset request, redirect to home
  if (!isValidRoute && 
      !path.startsWith('/_next/') && 
      !path.startsWith('/api/') &&
      !path.includes('.')) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api/ routes
     * 2. /_next/ (Next.js internals)
     * 3. /.next/static (static files)
     * 4. /.next/image (image optimization files)
     * 5. /favicon.ico, /sitemap.xml (static files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

