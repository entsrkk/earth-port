import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import ProjectsView from "@/components/sections/ProjectsView";
import PageSection from "@/components/ui/PageSection";
import { createLocalizedAlternates } from "@/i18n/metadata";
import { routing } from "@/i18n/routing";
import { getProjects } from "@/lib/projects";

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

export const generateMetadata = async ({
  params,
}: ProjectsPageProps): Promise<Metadata> => {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("projectsTitle"),
    description: t("projectsDescription"),
    alternates: createLocalizedAlternates("/projects", locale),
  };
};

const ProjectsPage = async () => {
  const [locale, messages] = await Promise.all([getLocale(), getMessages()]);
  const projects = getProjects(locale);

  return (
    <PageSection
      spacing="compact"
      className="pt-6 pb-14 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20"
      labelledBy="projects-heading"
    >
      <NextIntlClientProvider messages={{ Projects: messages.Projects }}>
        <ProjectsView projects={projects} />
      </NextIntlClientProvider>
    </PageSection>
  );
};

export default ProjectsPage;
