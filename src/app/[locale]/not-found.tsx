import NotFoundContent from "@/components/ui/NotFoundContent";
import { getLocale, getTranslations } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";

const NotFoundPage = async () => {
  const [locale, t] = await Promise.all([
    getLocale(),
    getTranslations("Errors"),
  ]);

  return (
    <NotFoundContent
      title={t("notFoundTitle")}
      description={t("notFoundDescription")}
      recoveryHref={getPathname({ href: "/", locale })}
      recoveryLabel={t("backHome")}
    />
  );
};

export default NotFoundPage;
