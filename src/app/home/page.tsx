"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import TechStackCarousel from "../components/TechStackCarousel";
import MyProjects from "../components/MyProjects";

const Homepage = () => {
  return (
    <>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 sm:gap-20 my-10 sm:my-20">
          <Image
            data-aos-duration="3000"
            src="/img/profile-earth-remove-bg.png"
            alt="Niti Surakongka"
            width={500}
            height={500}
            loading="lazy"
            className="w-[500px] h-[340px] sm:h-[440px] object-cover drop-shadow-lg "
          />
          <div className="space-y-2 sm:space-y-6  text-center lg:text-left">
            <TypeAnimation
              sequence={["Niti Surakongka"]}
              wrapper="h1"
              speed={40}
              className="text-3xl sm:text-6xl font-extrabold tracking-wide uppercase bg-gradient-to-r from-blue-600 to-sky-600 text-transparent bg-clip-text"
            />
            <p className="mx-auto text-base text-balance md:text-xl lg:text-2xl lg:w-[690px]">
              Hello! My name is Earth, or Mr. Niti Surakongka, a Junior Frontend
              Developer. I have a foundation in web development with knowledge
              of modern front-end technologies, and a growing interest in Full
              Stack Development.
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
    </>
  );
};

export default Homepage;
