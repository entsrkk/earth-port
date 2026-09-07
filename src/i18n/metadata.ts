import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { getPathname } from "./navigation";

interface SiteUrlEnvironment {
  SITE_URL?: string;
  VERCEL_PROJECT_PRODUCTION_URL?: string;
  NODE_ENV?: string;
}

export const resolveSiteUrl = (environment: SiteUrlEnvironment): URL => {
  const configuredUrl = environment.SITE_URL;
  const vercelUrl = environment.VERCEL_PROJECT_PRODUCTION_URL;
  const rawUrl = configuredUrl ?? (vercelUrl ? `https://${vercelUrl}` : undefined);

  if (!rawUrl && environment.NODE_ENV === "production") {
    throw new Error(
      "SITE_URL is required for production deployments outside Vercel.",
    );
  }

  return new URL(rawUrl ?? "http://localhost:3000");
};

export const metadataBase = resolveSiteUrl(process.env);

const normalizePathname = (pathname: string): string =>
  pathname === "/" ? pathname : `/${pathname.replace(/^\/+/, "")}`;

export const createLocalizedPathnames = (pathname: string) => {
  const href = normalizePathname(pathname);
  const englishPathname = getPathname({ href, locale: "en" });

  return {
    en: englishPathname,
    th: getPathname({ href, locale: "th" }),
    "x-default": englishPathname,
  };
};

export const createLocalizedAlternates = (
  pathname: string,
  locale: Locale,
): NonNullable<Metadata["alternates"]> => {
  const href = normalizePathname(pathname);

  return {
    canonical: getPathname({ href, locale }),
    languages: createLocalizedPathnames(href),
  };
};
