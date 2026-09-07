import NotFoundContent from "@/components/ui/NotFoundContent";
import { getLocale, getTranslations } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";

const ProjectNotFound = async () => {
  const [locale, t] = await Promise.all([
    getLocale(),
    getTranslations("Errors"),
  ]);

  return (
    <NotFoundContent
      title={t("projectNotFoundTitle")}
      description={t("projectNotFoundDescription")}
      recoveryHref={getPathname({ href: "/projects", locale })}
      recoveryLabel={t("backToProjects")}
    />
  );
};

export default ProjectNotFound;
