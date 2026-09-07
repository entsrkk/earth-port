import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import NotFoundContent from "@/components/ui/NotFoundContent";
import { fontVariables } from "./fonts";
import "./globals.css";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations({ locale: "en", namespace: "Errors" });

  return {
    title: t("notFoundTitle"),
    description: t("notFoundDescription"),
  };
};

const GlobalNotFound = async () => {
  const t = await getTranslations({ locale: "en", namespace: "Errors" });

  return (
    <html className={fontVariables} lang="en" data-theme="earthport">
      <body className="bg-base-100 font-thai text-base-content">
        <NotFoundContent
          title={t("notFoundTitle")}
          description={t("notFoundDescription")}
          recoveryHref="/"
          recoveryLabel={t("backHome")}
          standalone
        />
      </body>
    </html>
  );
};

export default GlobalNotFound;
