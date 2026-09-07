import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { permanentRedirect } from "@/i18n/navigation";
import {
  preserveSearchParams,
  type RouteSearchParams,
} from "@/i18n/search-params";
import { getProjectById, getProjectPath } from "@/lib/projects";

interface LegacyProjectPageProps {
  searchParams: Promise<RouteSearchParams>;
}

const LegacyProjectPage = async ({ searchParams }: LegacyProjectPageProps) => {
  const [locale, query] = await Promise.all([getLocale(), searchParams]);
  const projectIdValue = query.project_id;
  const projectId = Array.isArray(projectIdValue)
    ? projectIdValue[0]
    : projectIdValue;

  if (!projectId) notFound();

  const project = getProjectById(projectId, locale);
  if (!project) notFound();

  permanentRedirect({
    href: {
      pathname: getProjectPath(project),
      query: preserveSearchParams(query, ["project_id"]),
    },
    locale,
  });
};

export default LegacyProjectPage;
