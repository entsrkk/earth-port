import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { createLocalizedAlternates } from "@/i18n/metadata";
import { routing } from "@/i18n/routing";
import { getProjectById, getProjectBySlug } from "@/lib/projects";

interface ProjectDetailLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string; slug: string }>;
}

export const generateMetadata = async ({
  params,
}: ProjectDetailLayoutProps): Promise<Metadata> => {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

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
