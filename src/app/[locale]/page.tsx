import { getLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import MyExperiences from "@/components/sections/MyExperiences";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import TechStack from "@/components/sections/TechStack";
import { getExperiences } from "@/lib/experiences";

const HomePage = async () => {
  const locale = await getLocale();
  const experiences = getExperiences(locale);

  return (
    <>
      <Hero />
      <TechStack />
      <ProjectsGrid locale={locale} />
      <MyExperiences experiences={experiences} />
    </>
  );
};

export default HomePage;
