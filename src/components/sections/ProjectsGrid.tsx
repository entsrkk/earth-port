import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import React from "react";
import { getFeaturedProjects } from "@/lib/projects";
import PageSection from "@/components/ui/PageSection";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

interface ProjectsGridProps {
  locale: Locale;
}

const ProjectsGrid = async ({ locale }: ProjectsGridProps) => {
  const t = await getTranslations("Home");
  const projects = getFeaturedProjects(locale);

  return (
    <PageSection id="featured-projects" labelledBy="featured-projects-heading">
      <div className="mb-8 sm:mb-10">
        <SectionHeading
          title={t("projectsHeading")}
          highlight={t("projectsHighlight")}
          id="featured-projects-heading"
          aosProps={{
            "data-aos": "fade-down",
            "data-aos-delay": "100",
            "data-aos-easing": "ease-out",
            "data-aos-duration": "800",
          }}
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="800"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.projectId}
            project={project}
            variant="grid"
            ctaVariant="soft"
            eagerImage={index === 0}
          />
        ))}
      </div>
    </PageSection>
  );
};

export default ProjectsGrid;
