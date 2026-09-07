import type { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";
import { getPathname } from "@/i18n/navigation";
import {
  createLocalizedPathnames,
  metadataBase,
} from "@/i18n/metadata";
import { routing } from "@/i18n/routing";

const toAbsoluteUrl = (pathname: string): string =>
  new URL(pathname, metadataBase).toString();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/projects", "/contact"];
  const projectRoutes = PROJECTS.map(
    (project) => `/projects/${project.slug}`,
  );

  return [...staticRoutes, ...projectRoutes].flatMap((href) => {
    const pathnames = createLocalizedPathnames(href);
    const languages = Object.fromEntries(
      Object.entries(pathnames).map(([locale, pathname]) => [
        locale,
        toAbsoluteUrl(pathname),
      ]),
    );

    return routing.locales.map((locale) => ({
      url: toAbsoluteUrl(getPathname({ href, locale })),
      alternates: { languages },
    }));
  });
}
