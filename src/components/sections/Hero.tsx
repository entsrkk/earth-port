import Image from "next/image";
import { getTranslations } from "next-intl/server";
import React from "react";
import Button from "@/components/ui/Button";

const Hero = async () => {
  const t = await getTranslations("Home");

  return (
    <section className="hero hero-atmosphere min-h-[calc(100svh-7rem)] lg:min-h-[calc(100vh-8rem)]">
      <div className="hero-content mx-auto w-full max-w-(--container-page) flex-col gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid lg:grid-cols-[minmax(20rem,0.8fr)_minmax(0,1.2fr)] lg:gap-16 lg:px-8 lg:py-24">
        <div className="order-2 space-y-5 text-center lg:order-2 lg:text-left">
          <h1 className="text-gradient text-display font-display leading-tight font-black">
            Niti Surakongka
          </h1>
          <p className="mx-auto max-w-measure font-thai text-base leading-7 text-base-content/70 sm:text-lg sm:leading-8 lg:mx-0">
            {t("heroDescription")}
          </p>
          <div className="flex flex-row gap-2 max-[359px]:flex-col sm:gap-3 sm:justify-center lg:justify-start">
            <Button
              href="/projects"
              variant="primary"
              size="lg"
              className="flex-1 px-4 sm:flex-none sm:px-7"
            >
              {t("viewProjects")}
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="flex-1 border-base-content/20 px-4 text-base-content hover:border-primary hover:bg-transparent hover:text-primary sm:flex-none sm:px-7"
            >
              {t("contact")}
            </Button>
          </div>
        </div>
        <figure className="hero-profile-frame order-1 mx-auto w-full max-w-sm rounded-box lg:order-1 lg:max-w-md">
          <Image
            src="/img/profile-earth-remove-bg.jpg"
            alt={t("portraitAlt")}
            width={450}
            height={450}
            loading="eager"
            sizes="(max-width: 1023px) min(calc(100vw - 2rem), 24rem), 28rem"
            className="mask-image-gradient h-auto w-full rounded-box object-cover ring-4 ring-primary/20"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
