import { NextRequest, NextResponse } from "next/server";
import { ROUTES } from "@/shared/constants/routes";

function isAssetPath(pathname: string) {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/public") ||
    pathname.startsWith("/assets") ||
    /\.(svg|png|jpe?g|gif|webp|ico|txt|xml|woff2?)$/i.test(pathname)
  );
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isAssetPath(pathname)) {
    return NextResponse.next();
  }

  if (pathname === ROUTES.home) {
    return NextResponse.redirect(new URL(ROUTES.dashboard, request.url));
  }

  if (pathname === ROUTES.login || pathname === ROUTES.onboarding) {
    return NextResponse.redirect(new URL(ROUTES.dashboard, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
