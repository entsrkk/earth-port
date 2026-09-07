import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import AosProvider from "@/components/providers/AosProvider";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { createLocalizedAlternates, metadataBase } from "@/i18n/metadata";
import { routing } from "@/i18n/routing";
import { mantineTheme } from "@/lib/mantine-theme";
import { fontVariables } from "../fonts";
import "@mantine/core/styles.layer.css";
import "../globals.css";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export const generateStaticParams = () =>
  routing.locales.map((locale) => ({ locale }));

export const generateMetadata = async ({
  params,
}: LocaleLayoutProps): Promise<Metadata> => {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase,
    title: t("homeTitle"),
    description: t("homeDescription"),
    alternates: createLocalizedAlternates("/", locale),
  };
};

const LocaleLayout = async ({ children, params }: LocaleLayoutProps) => {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages({ locale });
  const navigation = await getTranslations({ locale, namespace: "Navigation" });
  const clientMessages = {
    Navigation: messages.Navigation,
    Language: messages.Language,
  };

  return (
    <html
      className={fontVariables}
      lang={locale}
      data-theme="earthport"
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-screen flex-col font-thai">
        <NextIntlClientProvider locale={locale} messages={clientMessages}>
          <MantineProvider theme={mantineTheme}>
            <AosProvider>
              <a
                href="#main-content"
                className="btn btn-primary fixed top-3 left-3 z-50 -translate-y-24 focus:translate-y-0"
              >
                {navigation("skipToContent")}
              </a>
              <Suspense
                fallback={
                  <div
                    aria-hidden="true"
                    className="navbar-shell min-h-16 border-b border-base-300 bg-base-100"
                  />
                }
              >
                <Navbar />
              </Suspense>
              <main id="main-content" tabIndex={-1} className="flex-1">
                {children}
              </main>
              <Footer />
            </AosProvider>
            <SpeedInsights />
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
