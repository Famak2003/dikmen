import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

// Internationalization Middleware
const intlMiddleware = createMiddleware(routing);

// This function can be marked async if using await inside
export async function middleware(request: NextRequest) {
  const authorizationToken = request.cookies.get("token");
  const { pathname } = request.nextUrl;
  const siteLocale = pathname.split("/")[1];

  const isAuthRoute = pathname.startsWith(`/${siteLocale}/auth`);
  const isDashboardRoute = pathname.startsWith(`/${siteLocale}/dashboard`);

  // Redirect unauthenticated users away from protected routes
  if (!authorizationToken?.value && isDashboardRoute) {
    const redirectUrl = new URL(`/${siteLocale}/auth/login`, request.url);
    redirectUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // Redirect authenticated users  back to their previous page
  if (authorizationToken?.value && isAuthRoute) {
    const from =
      request.nextUrl.searchParams.get("from") || `/${siteLocale}/dashboard`;
    return NextResponse.redirect(new URL(from, request.url));
  }

  // Run the internationalization middleware first
  const intlResponse = intlMiddleware(request);
  if (intlResponse) return intlResponse;

  // Redirect "/" to the localized dashboard
  if (pathname === "/dashboard" || pathname === `/${siteLocale}/dashboard`) {
    return NextResponse.redirect(
      new URL(`/${siteLocale}/dashboard`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    "/",
    "/(en|tr)",
    "/(en|tr)/dashboard",
    "/(en|tr)/dashboard/:path*",
    "/(en|tr)/auth",
    "/(en|tr)/auth/:path*",
  ],
};