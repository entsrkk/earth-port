import Link from "next/link";
import React from "react";

const MyExperiences = () => {
  return (
    <div className="bg-base-200">
      <div className="container mx-auto flex flex-col justify-center items-center py-10 sm:py-20">
        <h2 className="text-3xl text-center">My Experiences</h2>
        
        <div className="capitalize space-y-6 my-6">
          <div className="bg-white w-[800px] flex flex-col justify-center items-center rounded-2xl py-4">
            <p className="text-xl mb-2">Work with TGP Eventtech.ai</p>
            <ul className="list-disc list-inside">
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
          <div className="bg-white w-[800px] flex flex-col justify-center items-center rounded-2xl py-4">
            <p className="text-xl mb-2">Previously developed projects</p>
            <ul className="list-disc list-inside">
              <li>
                TechVibe: an Academic Weblog Platform{" "}
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
