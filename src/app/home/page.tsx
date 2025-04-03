"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import TechStackCarousel from "../components/TechStack";
import MyProjects from "../components/MyProjects";
import MyExperiences from "../components/MyExperiences";
import AOS from "aos";
import "aos/dist/aos.css";

const Homepage = () => {
  useEffect(() => {
    AOS.init({ disable: window.innerWidth < 1024 });
  }, []);
  return (
    <>
      <div className="container mx-auto px-2 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 sm:gap-20 my-10 sm:my-20">
          <Image
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
            data-aos-delay="100"
            src="/img/profile-earth-remove-bg.jpg"
            alt="Niti Surakongka"
            width={450}
            height={450}
            loading="lazy"
            className="w-[400px] h-[380px] sm:h-[440px] object-cover mask-image-gradient"
          />
          <div className="space-y-2 sm:space-y-6 text-center lg:text-left">
            <TypeAnimation
              sequence={["Niti Surakongka"]}
              wrapper="h1"
              speed={40}
              className="text-3xl sm:text-6xl font-black tracking-wide uppercase text-gradient "
            />
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-out"
              className="mx-auto text-base text-balance md:text-xl lg:text-2xl lg:w-[740px] font-light"
            >
              Hello! I&apos;m Earth, also known as Mr. Niti Surakongka, a Junior
              Frontend Developer. I have a strong foundation in web development,
              with expertise in modern front-end technologies and a growing
              interest in Full Stack Development.
            </p>
          </div>
        </div>
      </div>
      <div>
        <TechStackCarousel />
      </div>
      <div className="container mx-auto my-10 sm:my-20">
        <MyProjects />
      </div>
      <div className="bg-[#FAFAFA]">
        <MyExperiences />
      </div>
    </>
  );
};

export default Homepage;
