import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  return NextResponse.next();

  const publicRouteList: string[] = ['/login', '/registration'];
  const isPublic = publicRouteList.includes(request?.nextUrl?.pathname);
  const token = request.cookies.get('token')?.value || '';

  if (isPublic && !token) {
    return NextResponse.next();
  } else if (!isPublic && token) {
    return NextResponse.next();
  } else if (isPublic && token) {
    return NextResponse.redirect(new URL('/', request.url));
  } else if (!isPublic && !token) {
    return NextResponse.redirect(
      new URL(`/login?reference=${request?.nextUrl?.pathname}`, request.url)
    );
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/'],
};
