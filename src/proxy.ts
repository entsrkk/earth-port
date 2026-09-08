import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "@/i18n/routing";

const handleI18nRouting = createMiddleware(routing);

// Name of the cookie the pre-next-intl, cookie-based locale scheme used
// (previously exported as `localeCookieName` from the now-deleted
// src/i18n/config.ts). Kept as a literal purely to clean up returning
// visitors' stale cookies; nothing else in the app still reads or writes it.
const legacyLocaleCookieName = "earthport-locale";

export default function proxy(request: NextRequest): NextResponse {
  if (request.cookies.has(legacyLocaleCookieName)) {
    // Isolate cleanup from App Router redirects. Otherwise Next.js can merge a
    // second session cookie after this expired cookie and leave the legacy key.
    const response = NextResponse.redirect(request.nextUrl, 307);
    response.cookies.set({
      name: legacyLocaleCookieName,
      value: "",
      maxAge: 0,
      path: "/",
    });
    response.headers.set("Cache-Control", "private, no-store");

    return response;
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
