"use client"
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLine,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Contactpage: React.FC = () => {
  return (
    <div className="container mx-auto py-20 sm:py-10 sm:h-screen flex justify-center items-center">
      <div className="px-2">
        <div className="flex flex-col md:flex-row gap-12 md:gap-44 justify-center items-center">
          <TypeAnimation
            sequence={["Contact Us"]}
            wrapper="h2"
            speed={40}
            className="text-4xl sm:text-5xl font-bold sm:font-black uppercase text-center lg:text-start text-gradient"
          />
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <FaFacebook className="w-12 h-12 fill-blue-500 " /> :{" "}
              <Link
                href="https://www.facebook.com/niti.surakongka"
                className="text-lg hover:text-blue-600"
              >
                Niti Surakongka
              </Link>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <FaInstagram className="w-12 h-12 fill-blue-500" /> :{" "}
              <Link
                href="https://www.instagram.com/eearth_nt/"
                className="text-lg hover:text-blue-600"
              >
                eearth_nt
              </Link>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <FaLine className="w-12 h-12 fill-blue-500" /> :{" "}
              <Link
                href="https://line.me/ti/p/8XgcLYn8Cg"
                className="text-lg hover:text-blue-600"
              >
                091-758-2874
              </Link>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <FaPhone className="w-12 h-12 fill-blue-500" /> :{" "}
              <Link
                href="tel:0917582874"
                className="text-lg hover:text-blue-600"
              >
                091-758-2874
              </Link>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <FaGithub className="w-12 h-12 fill-blue-500" /> :{" "}
              <Link
                href="https://github.com/entsrkk"
                className="text-lg hover:text-blue-600"
              >
                entsrkk
              </Link>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <FaLinkedin className="w-12 h-12 fill-blue-500" /> :{" "}
              <Link
                href="https://www.linkedin.com/in/nitisurakongka/"
                className="text-lg hover:text-blue-600"
              >
                Niti Surakongka
              </Link>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <FaMedium className="w-12 h-12 fill-blue-500" /> :{" "}
              <Link
                href="https://medium.com/@niti2003s"
                className="text-lg hover:text-blue-600"
              >
                @niti2003s
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
