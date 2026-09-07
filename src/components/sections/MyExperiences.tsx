import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import React from "react";
import ExperienceCard from "@/components/ui/ExperienceCard";
import PageSection from "@/components/ui/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Experience } from "@/types/experience";

interface MyExperiencesProps {
  experiences: readonly Experience[];
}

const MyExperiences = async ({ experiences }: MyExperiencesProps) => {
  const [messages, t] = await Promise.all([
    getMessages(),
    getTranslations("Home"),
  ]);

  return (
    <PageSection
      id="experience"
      labelledBy="experience-heading"
      muted
      containerClassName="flex flex-col items-center"
    >
      <SectionHeading
        id="experience-heading"
        title={t("experiencesHeading")}
        className="mb-8 sm:mb-12"
      />
      <NextIntlClientProvider
        messages={{ Home: messages.Home, Common: messages.Common }}
      >
        <div className="w-full space-y-4 sm:space-y-6">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </NextIntlClientProvider>
    </PageSection>
  );
};

export default MyExperiences;
