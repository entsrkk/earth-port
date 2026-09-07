import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "@/i18n/routing";

const handleI18nRouting = createMiddleware(routing);
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
