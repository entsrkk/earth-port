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
    <div className="bg-base-200">
      <div className="container mx-auto flex flex-col justify-center items-center py-10 sm:py-20">
        <h2 data-aos="fade-up" data-aos-anchor-placement="bottom-center" data-aos-delay="300" data-aos-duration="1000" data-aos-easing="ease-out" className="text-2xl sm:text-4xl text-center">My Experiences</h2>
        <div className="my-10">
          <ul className="timeline timeline-vertical xl:timeline-horizontal px-2 sm:px-0 text-sm">
            <li>
              <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000" data-aos-easing="ease-out" data-aos-anchor-placement="bottom-center" className="timeline-start timeline-box text-balance">
                Start studying <br /> software engineering
              </div>
              <div  className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-blue-600 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000" data-aos-easing="ease-out" data-aos-anchor-placement="bottom-center" className="timeline-end">
                <p className="">5 July 2021</p>
              </div>
              <hr className="bg-blue-600" />
            </li>
            <li>
              <hr className="bg-blue-600" />
              <div data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="ease-out" data-aos-anchor-placement="bottom-center" className="timeline-start">
                <p className="">21 June 2023</p>
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-blue-600 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="ease-out" data-aos-anchor-placement="bottom-center" className="timeline-end timeline-box text-balance">
                Practice ReactJS <br /> on my own using ViteJS
              </div>
              <hr className="bg-blue-600" />
            </li>
            <li>
              <hr className="bg-blue-600" />
              <div data-aos="fade-right" data-aos-delay="700" data-aos-duration="1000" data-aos-easing="ease-out" data-aos-anchor-placement="bottom-center" className="timeline-start timeline-box text-balance">
                Learn Tailwind CSS Framework <br /> on my own
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-blue-600 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div data-aos="fade-left" data-aos-delay="700" data-aos-duration="1000" data-aos-easing="ease-out" data-aos-anchor-placement="bottom-center" className="timeline-end">
                <p className="">21 October 2023</p>
              </div>
              <hr className="bg-blue-600"/>
            </li>
            <li>
              <hr className="bg-blue-600"/>
              <div data-aos="fade-left" data-aos-delay="900" data-aos-duration="1000" data-aos-easing="ease-out" data-aos-anchor-placement="bottom-center" className="timeline-start">
                <p className="">4 November 2023</p>
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-blue-600 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div data-aos="fade-right" data-aos-delay="900" data-aos-duration="1000" data-aos-easing="ease-out" data-aos-anchor-placement="bottom-center" className="timeline-end timeline-box text-balance">
                Learn MongoDB on my own
              </div>
              <hr className="bg-blue-600"/>
            </li>
            <li>
              <hr className="bg-blue-600"/>
              <div data-aos="fade-right" data-aos-delay="1100" data-aos-duration="1000" data-aos-easing="ease-out" data-aos-anchor-placement="bottom-center" className="timeline-start timeline-box text-balance">
                Doing Senior Project
                <br /> as a Front-end Developer
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-blue-600 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div data-aos="fade-left" data-aos-delay="1100" data-aos-duration="1000" data-aos-easing="ease-out" data-aos-anchor-placement="bottom-center" className="timeline-end">
                <p className="">21 December 2023</p>
              </div>
              <hr className="bg-blue-600"/>
            </li>
            <li>
              <hr className="bg-blue-600"/>
              <div data-aos="fade-left" data-aos-delay="1300" data-aos-duration="1000" data-aos-easing="ease-out" data-aos-anchor-placement="bottom-center" className="timeline-start">
                <p className="">2 December 2024</p>
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-blue-600 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div data-aos="fade-right" data-aos-delay="1300" data-aos-duration="1000" data-aos-easing="ease-out" data-aos-anchor-placement="bottom-center" className="timeline-end timeline-box text-balance">
                Internship at Eventtech.ai
              </div>
              <hr className="bg-gradient-to-b xl:bg-gradient-to-r from-blue-600 to-oklch(92.4169% .00108 197.138 / 1)"/>
            </li>
            <li>
              <hr />
              <div data-aos="fade-right" data-aos-delay="1500" data-aos-duration="1000" data-aos-easing="ease-out" data-aos-anchor-placement="bottom-center" className="timeline-start timeline-box text-balance">
              Start working
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="h-5 w-5 fill-[#aaaaaa]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>
        <div className="capitalize space-y-6 px-4">
          <div data-aos="fade-right" data-aos-delay="400" data-aos-duration="1500" data-aos-anchor-placement="bottom-center" className="bg-white w-full flex flex-col justify-center items-center rounded-2xl py-4">
            <p className="text-xl font-semibold mb-4 sm:mb-4 sm:mt-2">Work with TGP Eventtech.ai</p>
            <ul className="list-disc list-inside px-4 sm:px-16 lg:px-36 text-balance space-y-4 sm:space-y-0 text-center sm:text-left">
              <li>wordpress for Koh Mak</li>
              <li>bepeerapat 20th</li>
              <li>
                SEO for Whiteroom.ai :{" "}
                <Link
                  className="text-blue-600"
                  href={"https://whiteroom.ai/"}
                  target="_blank"
                >
                  Whiteroom.ai
                </Link>
              </li>
              <li>
                wordpress for eventtech contact form :{" "}
                <Link
                  className="text-blue-600"
                  href={"https://inquiry.eventtech.ai/"}
                  target="_blank"
                >
                  contact form - eventtech.ai
                </Link>
              </li>

              <li>
                wordpress for ticket protect :{" "}
                <Link
                  className="text-blue-600"
                  href={"https://ticketprotect.eventtech.ai/"}
                  target="_blank"
                >
                  ticket protect.ai
                </Link>
              </li>
              <li>
                wordpress for shop eventtech :{" "}
                <Link
                  className="text-blue-600"
                  href={"https://shop.eventtech.ai/"}
                  target="_blank"
                >
                  shop eventtech.ai
                </Link>
              </li>
              <li>
                touchpoint groups :{" "}
                <Link
                  className="text-blue-600"
                  href={"https://touchpointgroups.com/"}
                  target="_blank"
                >
                  touchpoint groups
                </Link>
              </li>
            </ul>
          </div>
          <div  data-aos="fade-left" data-aos-delay="400" data-aos-duration="1500" data-aos-anchor-placement="center-center" className="bg-white w-full flex flex-col justify-center items-center rounded-2xl py-4">
            <p className="text-xl font-semibold mb-4 sm:mb-4 sm:mt-2">Previously developed projects</p>
            <ul className="list-disc list-inside px-4 sm:px-16 lg:px-36 text-balance space-y-4 sm:space-y-0 text-center sm:text-left">
              <li>
                TechVibe: an Academic Weblog Platform :{" "}
                <Link
                  className="text-blue-600"
                  href={"https://github.com/msssrp/tech-vibe.git"}
                  target="_blank"
                >
                  Github
                </Link>
              </li>
              <li>
                Web application for Purchasing Music Equipment :{" "}
                <Link
                  className="text-blue-600"
                  href={"https://github.com/entsrkk/Mini-Project.git"}
                  target="_blank"
                >
                  Github
                </Link>
              </li>
              <li>
                MERN SeShop :{" "}
                <Link
                  className="text-blue-600"
                  href={"https://github.com/entsrkk/MERN_SeShop.git"}
                  target="_blank"
                >
                  github
                </Link>
              </li>
              <li>
                MERN Blog :{" "}
                <Link
                  className="text-blue-600"
                  href={"https://github.com/entsrkk/MERNBlog.git"}
                  target="_blank"
                >
                  github
                </Link>
              </li>
              <li>
                MERN Chat :{" "}
                <Link
                  className="text-blue-600"
                  href={"https://github.com/entsrkk/MERN_Chat.git"}
                  target="_blank"
                >
                  github
                </Link>
              </li>
              <li>
                Blockchain for buy Pokemon :{" "}
                <Link
                  className="text-blue-600"
                  href={"https://blockchain-beige.vercel.app/"}
                  target="_blank"
                >
                  blockchain
                </Link>
              </li>
              <li>
                Web application for product location search :{" "}
                <Link
                  className="text-blue-600"
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
    </div>
  );
};

export default MyExperiences;
