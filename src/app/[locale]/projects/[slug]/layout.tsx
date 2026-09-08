import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { assertLocale } from "@/i18n/locale";
import { createLocalizedAlternates } from "@/i18n/metadata";
import { getProjectById, getProjectBySlug } from "@/lib/projects";

interface ProjectDetailLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string; slug: string }>;
}

export const generateMetadata = async ({
  params,
}: ProjectDetailLayoutProps): Promise<Metadata> => {
  const { locale, slug } = await params;
  assertLocale(locale);

  const [metadata, errors] = await Promise.all([
    getTranslations({ locale, namespace: "Metadata" }),
    getTranslations({ locale, namespace: "Errors" }),
  ]);
  const project =
    getProjectBySlug(slug, locale) ?? getProjectById(slug, locale);

  if (!project) {
    return {
      title: metadata("projectNotFoundTitle"),
      description: errors("projectNotFoundDescription"),
    };
  }

  return {
    title: `${project.projectName} | Niti Surakongka`,
    description: project.projectDescription,
    alternates: createLocalizedAlternates(
      `/projects/${project.slug}`,
      locale,
    ),
  };
};

const ProjectDetailLayout = ({ children }: ProjectDetailLayoutProps) => children;

export default ProjectDetailLayout;
