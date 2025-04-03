"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const MyExperiences = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container mx-auto max-w-8xl flex flex-col justify-center items-center py-10 sm:py-20 px-4">
      <h2 className="text-4xl sm:text-5xl text-center font-medium">
        My Experiences
      </h2>
      <div className="mt-8 sm:mt-14 space-y-4">
        <div className="flex flex-col sm:flex-row justify-center w-full bg-white shadow-sm rounded-2xl px-4 sm:px-8 py-6 sm:py-10 ">
          <div className="space-y-0 sm:space-y-1 mb-2 sm:mb-0">
            <span className="text-sm font-light tracking-wide uppercase">
              Dec 2024 - Mar 2025
            </span>
            <p className="text-2xl font-semibold text-nowrap w-full sm:w-80 lg:w-96">
              Frontend Developer Intern
            </p>
            <div className="flex gap-1 text-sm font-light ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <span>
                EventTech.ai, Bangkok
                <span className="status bg-neutral w-1 h-1 box-shadow: 0 0 #0000; ml-2 mr-1"></span>
                Hybrid
              </span>
            </div>
          </div>
          <div>
            <ul className="list-disc list-inside text-base capitalize font-light space-y-1">
              <p>
                During my Frontend Developer internship, I worked on real-world
                web projects, collaborated with a team, and used modern
                technologies to enhance user experience. Additionally, I had the
                opportunity to work with WordPress, which was a new experience,
                and I also learned more about SEO. This included optimizing
                website performance by improving First Contentful Paint (FCP),
                Largest Contentful Paint (LCP), and Cumulative Layout Shift
                (CLS) to ensure a smoother and more efficient user experience.
                Furthermore, I worked on making URLs more user-friendly, adding
                Meta Titles and Tags, and optimizing Images SEO to improve
                search engine rankings.
              </p>
              <li>Koh Mak</li>
              <li>bepeerapat 20th</li>
              <li>
                SEO for Whiteroom.ai :{" "}
                <Link
                  className="text-blue-600 hover:font-medium duration-300 ease-in-out"
                  href={"https://whiteroom.ai/"}
                  target="_blank"
                >
                  Whiteroom.ai
                </Link>
              </li>
              <li>
                eventtech contact form :{" "}
                <Link
                  className="text-blue-600 hover:font-medium duration-300 ease-in-out"
                  href={"https://inquiry.eventtech.ai/"}
                  target="_blank"
                >
                  contact form
                </Link>
              </li>

              <li>
                ticket protect :{" "}
                <Link
                  className="text-blue-600 hover:font-medium duration-300 ease-in-out"
                  href={"https://ticketprotect.eventtech.ai/"}
                  target="_blank"
                >
                  ticket protect
                </Link>
              </li>
              <li>
                shop eventtech :{" "}
                <Link
                  className="text-blue-600 hover:font-medium duration-300 ease-in-out"
                  href={"https://shop.eventtech.ai/"}
                  target="_blank"
                >
                  shop eventtech
                </Link>
              </li>
              <li>
                touchpoint groups :{" "}
                <Link
                  className="text-blue-600 hover:font-medium duration-300 ease-in-out"
                  href={"https://touchpointgroups.com/"}
                  target="_blank"
                >
                  touchpoint groups
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center w-full bg-white shadow-sm rounded-2xl px-4 sm:px-8 py-6 sm:py-10 ">
          <div className="space-y-0 sm:space-y-1 mb-2 sm:mb-0">
            <span className="text-sm font-light tracking-wide uppercase">
              Jul 2021 - Apr 2025
            </span>
            <p className="text-2xl font-semibold text-nowrap w-full sm:w-80 lg:w-96">
              Undergraduate Student
            </p>
            <div className="flex gap-1 text-sm font-light ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <span>Nakhon Pathom Rajabhat University</span>
            </div>
          </div>
          <ul className="list-disc list-inside text-base capitalize font-light space-y-1">
            <p>
              During my studies, I learned the basics of web development, from
              UX/UI design, building academic platforms, to automating tests.
              These projects gave me the opportunity to work with new
              technologies and frameworks, such as React, Next.js, TailwindCSS,
              MUI, Typescript, Redux, RESTful API, MERN Stack, and Firebase,
              among others.
            </p>
            <li>
              TechVibe: an Academic Weblog Platform :{" "}
              <Link
                className="text-blue-600 hover:font-medium duration-300 ease-in-out"
                href={"https://github.com/msssrp/tech-vibe.git"}
                target="_blank"
              >
                Github
              </Link>
            </li>
            <li>
              Web application for Purchasing Music Equipment :{" "}
              <Link
                className="text-blue-600 hover:font-medium duration-300 ease-in-out"
                href={"https://github.com/entsrkk/Mini-Project.git"}
                target="_blank"
              >
                Github
              </Link>
            </li>
            <li>
              MERN E-commerce :{" "}
              <Link
                className="text-blue-600 hover:font-medium duration-300 ease-in-out"
                href={"https://github.com/entsrkk/MERN_SeShop.git"}
                target="_blank"
              >
                github
              </Link>
            </li>
            <li>
              MERN Blog :{" "}
              <Link
                className="text-blue-600 hover:font-medium duration-300 ease-in-out"
                href={"https://github.com/entsrkk/MERNBlog.git"}
                target="_blank"
              >
                github
              </Link>
            </li>
            <li>
              MERN Chat :{" "}
              <Link
                className="text-blue-600 hover:font-medium duration-300 ease-in-out"
                href={"https://github.com/entsrkk/MERN_Chat.git"}
                target="_blank"
              >
                github
              </Link>
            </li>
            <li>
              Blockchain for buy Pokemon :{" "}
              <Link
                className="text-blue-600 hover:font-medium duration-300 ease-in-out"
                href={"https://blockchain-beige.vercel.app/"}
                target="_blank"
              >
                blockchain
              </Link>
            </li>
            <li>
              Web application for product location search :{" "}
              <Link
                className="text-blue-600 hover:font-medium duration-300 ease-in-out"
                href={"https://project-phi-red.vercel.app/"}
                target="_blank"
              >
                product location search
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyExperiences;
