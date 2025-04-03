import React from "react";

const TechStackCarousel: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-sky-600 ">
      <div className="container mx-auto flex flex-col justify-center items-center py-8 sm:py-12">
        <h2
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
          className="text-3xl sm:text-4xl text-white text-center font-medium"
        >
          Technologies I use
        </h2>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
          data-aos-anchor-placement="top-bottom"
          className="tech-stack flex flex-wrap justify-center items-center gap-1 px-4 sm:px-2 mt-4 md:mt-6 max-w-5xl"
        >
          <div className="flex justify-center items-center text-black space-x-2 border border-white bg-white rounded-xl px-3 py-[4px] sm:px-4 sm:py-[6px]  hover:scale-105 lg:hover-drop-shadow duration-300">
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/html5"
              className="w-4 lg:w-6"
            />
            <p>HTML</p>
          </div>
          <div className="flex justify-center items-center text-black space-x-2 border border-white bg-white rounded-xl px-3 py-[4px] sm:px-4 sm:py-[6px]  hover:scale-105 lg:hover-drop-shadow duration-300">
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/css3"
              className="w-4 lg:w-6"
            />
            <p>CSS</p>
          </div>
          <div className="flex justify-center items-center text-black space-x-2 border border-white bg-white rounded-xl px-3 py-[4px] sm:px-4 sm:py-[6px]  hover:scale-105 lg:hover-drop-shadow duration-300">
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/javascript"
              className="w-4 lg:w-6"
            />
            <p>JavaScript</p>
          </div>
          <div className="flex justify-center items-center text-black space-x-2 border border-white bg-white rounded-xl px-3 py-[4px] sm:px-4 sm:py-[6px]  hover:scale-105 lg:hover-drop-shadow duration-300">
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/typescript"
              className="w-4 lg:w-6"
            />
            <p>TypeScript</p>
          </div>
          <div className="flex justify-center items-center text-black space-x-2 border border-white bg-white rounded-xl px-3 py-[4px] sm:px-4 sm:py-[6px]  hover:scale-105 lg:hover-drop-shadow duration-300">
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/react"
              className="w-4 lg:w-6"
            />
            <p>React</p>
          </div>
          <div className="flex justify-center items-center text-black space-x-2 border border-white bg-white rounded-xl px-3 py-[4px] sm:px-4 sm:py-[6px]  hover:scale-105 lg:hover-drop-shadow duration-300">
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/nextdotjs"
              className="w-4 lg:w-6"
            />
            <p>Next.js</p>
          </div>
          <div className="flex justify-center items-center text-black space-x-2 border border-white bg-white rounded-xl px-3 py-[4px] sm:px-4 sm:py-[6px]  hover:scale-105 lg:hover-drop-shadow duration-300">
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/tailwindcss"
              className="w-4 lg:w-6"
            />
            <p>TailwindCSS</p>
          </div>
          <div className="flex justify-center items-center text-black space-x-2 border border-white bg-white rounded-xl px-3 py-[4px] sm:px-4 sm:py-[6px]  hover:scale-105 lg:hover-drop-shadow duration-300">
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/daisyui"
              className="w-4 lg:w-6"
            />
            <p>daisyUI</p>
          </div>
          <div className="flex justify-center items-center text-black space-x-2 border border-white bg-white rounded-xl px-3 py-[4px] sm:px-4 sm:py-[6px]  hover:scale-105 lg:hover-drop-shadow duration-300">
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/mui"
              className="w-4 lg:w-6"
            />
            <p>Material UI</p>
          </div>
          <div className="flex justify-center items-center text-black space-x-2 border border-white bg-white rounded-xl px-3 py-[4px] sm:px-4 sm:py-[6px]  hover:scale-105 lg:hover-drop-shadow duration-300">
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/Mantine"
              className="w-4 lg:w-6"
            />
            <p>Mantine</p>
          </div>
          <div className="flex justify-center items-center text-black space-x-2 border border-white bg-white rounded-xl px-3 py-[4px] sm:px-4 sm:py-[6px]  hover:scale-105 lg:hover-drop-shadow duration-300">
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/nextui"
              className="w-4 lg:w-6"
            />
            <p>NextUI</p>
          </div>

          <div className="flex justify-center items-center text-black space-x-2 border border-white bg-white rounded-xl px-3 py-[4px] sm:px-4 sm:py-[6px]  hover:scale-105 lg:hover-drop-shadow duration-300">
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/redux"
              className="w-4 lg:w-6"
            />
            <p>Redux</p>
          </div>
          <div className="flex justify-center items-center text-black space-x-2 border border-white bg-white rounded-xl px-3 py-[4px] sm:px-4 sm:py-[6px]  hover:scale-105 lg:hover-drop-shadow duration-300">
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/nodedotjs"
              className="w-4 lg:w-6"
            />
            <p>Node.Js</p>
          </div>
          <div className="flex justify-center items-center text-black space-x-2 border border-white bg-white rounded-xl px-3 py-[4px] sm:px-4 sm:py-[6px]  hover:scale-105 lg:hover-drop-shadow duration-300">
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/express"
              className="w-4 lg:w-6"
            />
            <p>ExpressJS</p>
          </div>
          <div className="flex justify-center items-center text-black space-x-2 border border-white bg-white rounded-xl px-3 py-[4px] sm:px-4 sm:py-[6px]  hover:scale-105 lg:hover-drop-shadow duration-300">
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/firebase"
              className="w-4 lg:w-6"
            />
            <p>Firebase</p>
          </div>
          <div className="flex justify-center items-center text-black space-x-2 border border-white bg-white rounded-xl px-3 py-[4px] sm:px-4 sm:py-[6px]  hover:scale-105 lg:hover-drop-shadow duration-300">
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/axios"
              className="w-4 lg:w-6"
            />
            <p>Axios</p>
          </div>
          <div className="flex justify-center items-center text-black space-x-2 border border-white bg-white rounded-xl px-3 py-[4px] sm:px-4 sm:py-[6px]  hover:scale-105 lg:hover-drop-shadow duration-300">
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/mysql"
              className="w-4 lg:w-6"
            />
            <p>MySQL</p>
          </div>
          <div className="flex justify-center items-center text-black space-x-2 border border-white bg-white rounded-xl px-3 py-[4px] sm:px-4 sm:py-[6px]  hover:scale-105 lg:hover-drop-shadow duration-300">
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/PostgreSQL"
              className="w-4 lg:w-6"
            />
            <p>PostgreSQL</p>
          </div>
          <div className="flex justify-center items-center text-black space-x-2 border border-white bg-white rounded-xl px-3 py-[4px] sm:px-4 sm:py-[6px]  hover:scale-105 lg:hover-drop-shadow duration-300">
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/mongodb"
              className="w-4 lg:w-6"
            />
            <p>MongoDB</p>
          </div>
          <div className="flex justify-center items-center text-black space-x-2 border border-white bg-white rounded-xl px-3 py-[4px] sm:px-4 sm:py-[6px]  hover:scale-105 lg:hover-drop-shadow duration-300">
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/swagger"
              className="w-4 lg:w-6"
            />
            <p>Swagger</p>
          </div>
          <div className="flex justify-center items-center text-black space-x-2 border border-white bg-white rounded-xl px-3 py-[4px] sm:px-4 sm:py-[6px]  hover:scale-105 lg:hover-drop-shadow duration-300">
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/postman"
              className="w-4 lg:w-6"
            />
            <p>Postman</p>
          </div>
          <div className="flex justify-center items-center text-black space-x-2 border border-white bg-white rounded-xl px-3 py-[4px] sm:px-4 sm:py-[6px]  hover:scale-105 lg:hover-drop-shadow duration-300">
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/git"
              className="w-4 lg:w-6"
            />
            <p>Git</p>
          </div>
          <div className="flex justify-center items-center text-black space-x-2 border border-white bg-white rounded-xl px-3 py-[4px] sm:px-4 sm:py-[6px]  hover:scale-105 lg:hover-drop-shadow duration-300">
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/github"
              className="w-4 lg:w-6"
            />
            <p>Github</p>
          </div>
          <div className="flex justify-center items-center text-black space-x-2 border border-white bg-white rounded-xl px-3 py-[4px] sm:px-4 sm:py-[6px]  hover:scale-105 lg:hover-drop-shadow duration-300">
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/gitlab"
              className="w-4 lg:w-6"
            />
            <p>Gitlab</p>
          </div>
          <div className="flex justify-center items-center text-black space-x-2 border border-white bg-white rounded-xl px-3 py-[4px] sm:px-4 sm:py-[6px]  hover:scale-105 lg:hover-drop-shadow duration-300">
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/vercel"
              className="w-4 lg:w-6"
            />
            <p>Vercel</p>
          </div>
          <div className="flex justify-center items-center text-black space-x-2 border border-white bg-white rounded-xl px-3 py-[4px] sm:px-4 sm:py-[6px]  hover:scale-105 lg:hover-drop-shadow duration-300">
            <img
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/netlify"
              className="w-4 lg:w-6"
            />
            <p>Netlify</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackCarousel;
