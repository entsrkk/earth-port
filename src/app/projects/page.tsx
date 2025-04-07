import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllProjectpage = () => {
  return (
    <div className="container mx-auto py-10 px-2 md:px-10 sm:py-20">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor="ease-in-back"
        data-aos-offset="100"
        className="mb-6 sm:mb-14"
      >
        <h2 className="text-3xl sm:text-5xl font-medium text-center">
          All Projects
        </h2>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-out"
        className="flex flex-col gap-6 sm:gap-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12"
      >
        <div className="card md:card-side rounded-2xl border bg-white hover:bg-zinc-100 duration-500 ease-out">
          <Image
            src="/img/TechVibe.png"
            alt="project cover"
            width={450}
            height={450}
            loading="lazy"
            className="h-auto sm:w-72 md:w-80 xl:w-[28rem] aspect-[16/9] object-cover object-top border rounded-t-xl sm:rounded-s-xl sm:rounded-e-none"
          />
          <div className="card-body p-4 md">
            <h2 className="card-title text-xl">
              TechVibe: An Academic Weblog Platform
            </h2>
            <div className="tech-stack-2">
              <div className="flex justify-center items-center text-black space-x-2 border bg-white rounded-xl px-2 py-[4px] hover:scale-105 duration-300">
                <img
                  height="24"
                  width="24"
                  src="https://cdn.simpleicons.org/nextdotjs"
                  className="w-4 lg:w-5"
                />
                <p>Next.js</p>
              </div>
              <div className="flex justify-center items-center text-black space-x-2 border bg-white rounded-xl px-2 py-[4px] hover:scale-105 duration-300">
                <img
                  height="24"
                  width="24"
                  src="https://cdn.simpleicons.org/tailwindcss"
                  className="w-4 lg:w-5"
                />
                <p>TailwindCSS</p>
              </div>
              <div className="flex justify-center items-center text-black space-x-2 border bg-white rounded-xl px-2 py-[4px] hover:scale-105 duration-300">
                <img
                  height="24"
                  width="24"
                  src="https://cdn.simpleicons.org/typescript"
                  className="w-4 lg:w-5"
                />
                <p>TypeScript</p>
              </div>
              <div className="flex justify-center items-center text-black space-x-2 border bg-white rounded-xl px-2 py-[4px] hover:scale-105 duration-300">
                <img
                  height="24"
                  width="24"
                  src="https://cdn.simpleicons.org/mantine"
                  className="w-4"
                />
                <p>Mantine</p>
              </div>
              <div className="flex justify-center items-center text-black space-x-2 border bg-white rounded-xl px-2 py-[4px] hover:scale-105 duration-300">
                <img
                  height="24"
                  width="24"
                  src="https://cdn.simpleicons.org/supabase"
                  className="w-4"
                />
                <p>Supabase</p>
              </div>
            </div>
            <p className="description">
              โปรเจคนี้เป็นโปรเจคจบ ที่พัฒนาโดยทีม 3 คน
              สำหรับการเขียนบทความออนไลน์ รองรับผู้ใช้กว่า 100
              คนในภาควิชาวิศวกรรมซอฟต์แวร์ พัฒนาโดยใช้ Next.js, TailwindCSS,
              Mantine เพื่อประสิทธิภาพและรองรับ Responsive รวมถึงใช้ TinyMCE
              สำหรับการเขียนบทความ
            </p>
            <div>
              <Link
                href={"https://github.com/msssrp/tech-vibe.git"}
                target="_blank"
                className="btn cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black lg:px-7 lg:py-3 rounded-full border border-gray-600 hover:scale-105 hover:text-gray-300 hover:border-gray-800 hover:from-black hover:to-gray-900 transition duration-300 ease-in-out"
              >
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FFFFFF"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  ></path>
                </svg>
                Github
              </Link>
            </div>
          </div>
        </div>
        <div className="card md:card-side rounded-2xl border bg-white hover:bg-zinc-100 duration-500 ease-out">
          <Image
            src="/img/blockchain-beige.png"
            alt="project cover"
            width={450}
            height={450}
            loading="lazy"
            className="h-auto sm:w-72 md:w-80 xl:w-[28rem] aspect-[16/9] object-cover object-top border rounded-t-xl sm:rounded-s-xl sm:rounded-e-none"
          />

          <div className="card-body p-4">
            <h2 className="card-title text-xl">Blockchain for Buying Pokémon</h2>
            <div className="tech-stack-2">
              <div className="flex justify-center items-center text-black space-x-2 border bg-white rounded-xl px-2 py-[4px] hover:scale-105 duration-300">
                <img
                  height="24"
                  width="24"
                  src="https://cdn.simpleicons.org/nextdotjs"
                  className="w-4 lg:w-5"
                />
                <p>Next.js</p>
              </div>
              <div className="flex justify-center items-center text-black space-x-2 border bg-white rounded-xl px-2 py-[4px] hover:scale-105 duration-300">
                <img
                  height="24"
                  width="24"
                  src="https://cdn.simpleicons.org/tailwindcss"
                  className="w-4 lg:w-5"
                />
                <p>TailwindCSS</p>
              </div>
            </div>
            <p className="description">
              โปรเจคนี้เป็นโปรเจคในรายวิชา Blockchain จะการผสมผสาน 2
              งานเข้าด้วยกัน คือ โปรเจคการเรียนรู้ API ของ Pokémon API และ
              การใช้ Blockchain ในการซื้อขาย โดยใช้ Next.js และ TailwindCSS
            </p>
            <div className="space-x-2 flex">
              <Link
                href={"https://blockchain-beige.vercel.app/"}
                target="_blank"
                className="btn border-none cursor-pointer text-white font-semibold bg-gradient-to-r from-blue-600 to-sky-600 lg:px-7 lg:py-3 rounded-full hover:scale-105 transition duration-300 ease-in-out hover:text-gray-300 hidden sm:flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  className="size-6 stroke-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                Live pervirew
              </Link>
              <Link
                href={"https://github.com/entsrkk/blockchain"}
                target="_blank"
                className="btn cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black lg:px-7 lg:py-3 rounded-full border border-gray-600 hover:scale-105 hover:text-gray-300 hover:border-gray-800 hover:from-black hover:to-gray-900 transition duration-300 ease-in-out"
              >
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FFFFFF"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  ></path>
                </svg>
                Github
              </Link>
            </div>
          </div>
        </div>
        <div className="card md:card-side rounded-2xl border bg-white hover:bg-zinc-100 duration-500 ease-out">
          <Image
            src="/img/ShoppingCartRedux.png"
            alt="project cover"
            width={450}
            height={450}
            loading="lazy"
            className="h-auto sm:w-72 md:w-80 xl:w-[28rem] aspect-[16/9] object-cover object-top border rounded-t-xl sm:rounded-s-xl sm:rounded-e-none"
          />

          <div className="card-body p-4">
            <h2 className="card-title text-xl">Shopping Cart with Redux</h2>
            <div className="tech-stack-2">
              <div className="flex justify-center items-center text-black space-x-2 border bg-white rounded-xl px-2 py-[4px] hover:scale-105 duration-300">
                <img
                  height="24"
                  width="24"
                  src="https://cdn.simpleicons.org/react"
                  className="w-4 lg:w-5"
                />
                <p>React</p>
              </div>
              <div className="flex justify-center items-center text-black space-x-2 border bg-white rounded-xl px-2 py-[4px] hover:scale-105 duration-300">
                <img
                  height="24"
                  width="24"
                  src="https://cdn.simpleicons.org/vite"
                  className="w-4 lg:w-5"
                />
                <p>Vite</p>
              </div>
              <div className="flex justify-center items-center text-black space-x-2 border bg-white rounded-xl px-2 py-[4px] hover:scale-105 duration-300">
                <img
                  height="24"
                  width="24"
                  src="https://cdn.simpleicons.org/tailwindcss"
                  className="w-4 lg:w-5"
                />
                <p>TailwindCSS</p>
              </div>
              <div className="flex justify-center items-center text-black space-x-2 border bg-white rounded-xl px-2 py-[4px] hover:scale-105 duration-300">
                <img
                  height="24"
                  width="24"
                  src="https://cdn.simpleicons.org/redux"
                  className="w-4 lg:w-5"
                />
                <p>Redux</p>
              </div>
              <div className="flex justify-center items-center text-black space-x-2 border bg-white rounded-xl px-2 py-[4px] hover:scale-105 duration-300">
                <img
                  height="24"
                  width="24"
                  src="https://cdn.simpleicons.org/reacthookform"
                  className="w-4 lg:w-5"
                />
                <p>React Hook Form</p>
              </div>
            </div>
            <p className="description">
              โปรเจคนี้เป็น Workshop ในรายวิชา Component-based & Mobile
              Development เป็นการเรียนรู้การใช้ Redux ในการจัดการ State
              ของโปรเจค สามารถเพิ่มสินค้า เพิ่มสินค้าลงในตะกร้า
              และลบสินค้าออกจากตะกร้าได้ และยังได้เรียนรู้การใช้ Redux DevTools
              ในการ Debug อีกด้วย โดยใช้ Vite, TailwindCSS, Redux และ React Hook
              Form
            </p>
            <div>
              <Link
                href={"https://github.com/entsrkk/ShoppingCartRedux.git"}
                target="_blank"
                className="btn cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black lg:px-7 lg:py-3 rounded-full border border-gray-600 hover:scale-105 hover:text-gray-300 hover:border-gray-800 hover:from-black hover:to-gray-900 transition duration-300 ease-in-out"
              >
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FFFFFF"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  ></path>
                </svg>
                Github
              </Link>
            </div>
          </div>
        </div>
        <div className="card md:card-side rounded-2xl border bg-white hover:bg-zinc-100 duration-500 ease-out">
          <Image
            src="/img/mern-chat.png"
            alt="project cover"
            width={450}
            height={450}
            loading="lazy"
            className="h-auto sm:w-72 md:w-80 xl:w-[28rem] aspect-[16/9] object-cover object-top border rounded-t-xl sm:rounded-s-xl sm:rounded-e-none"
          />

          <div className="card-body p-4">
            <h2 className="card-title text-xl">Chat Application with MERN Stack</h2>
            <div className="tech-stack-2">
              <div className="flex justify-center items-center text-black space-x-2 border bg-white rounded-xl px-2 py-[4px] hover:scale-105 duration-300">
                <img
                  height="24"
                  width="24"
                  src="https://cdn.simpleicons.org/react"
                  className="w-4 lg:w-5"
                />
                <p>React</p>
              </div>
              <div className="flex justify-center items-center text-black space-x-2 border bg-white rounded-xl px-2 py-[4px] hover:scale-105 duration-300">
                <img
                  height="24"
                  width="24"
                  src="https://cdn.simpleicons.org/vite"
                  className="w-4 lg:w-5"
                />
                <p>Vite</p>
              </div>
              <div className="flex justify-center items-center text-black space-x-2 border bg-white rounded-xl px-2 py-[4px] hover:scale-105 duration-300">
                <img
                  height="24"
                  width="24"
                  src="https://cdn.simpleicons.org/tailwindcss"
                  className="w-4 lg:w-5"
                />
                <p>TailwindCSS</p>
              </div>
              <div className="flex justify-center items-center text-black space-x-2 border bg-white rounded-xl px-2 py-[4px] hover:scale-105 duration-300">
                <img
                  height="24"
                  width="24"
                  src="https://cdn.simpleicons.org/lodash"
                  className="w-4 lg:w-5"
                />
                <p>Lodash</p>
              </div>
              <div className="flex justify-center items-center text-black space-x-2 border bg-white rounded-xl px-2 py-[4px] hover:scale-105 duration-300">
                <img
                  height="24"
                  width="24"
                  src="https://cdn.simpleicons.org/axios"
                  className="w-4 lg:w-5"
                />
                <p>Axios</p>
              </div>
              <div className="flex justify-center items-center text-black space-x-2 border bg-white rounded-xl px-2 py-[4px] hover:scale-105 duration-300">
                <img
                  height="24"
                  width="24"
                  src="https://cdn.simpleicons.org/mongoDB"
                  className="w-4 lg:w-5"
                />
                <p>MongoDB</p>
              </div>
            </div>
            <p className="description">
              โปรเจคนี้เป็น Workshop ในรายวิชา Component-based & Mobile
              Development เป็นการเรียนรู้พื้นฐาน MERN Stack และพื้นฐานการใช้งาน
              WebSocket, lodash โปรเจคนี้เปรียบเสมือนการส่งข้อความแบบ Realtime
              ระหว่างผู้ใช้บน Chat Application จริงๆ โดยใช้ Vite, TailwindCSS,
              Axios, Lodash, MongoDB, WebSocket, Bcryptjs, Cookie Parser
            </p>
            <div>
              <Link
                href={"https://github.com/entsrkk/MERN_Chat.git"}
                target="_blank"
                className="btn cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black lg:px-7 lg:py-3 rounded-full border border-gray-600 hover:scale-105 hover:text-gray-300 hover:border-gray-800 hover:from-black hover:to-gray-900 transition duration-300 ease-in-out"
              >
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FFFFFF"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  ></path>
                </svg>
                Github
              </Link>
            </div>
          </div>
        </div>
        <div className="card md:card-side rounded-2xl border bg-white hover:bg-zinc-100 duration-500 ease-out">
          <Image
            src="/img/mern-e-commerce.png"
            alt="project cover"
            width={450}
            height={450}
            loading="lazy"
            className="h-auto sm:w-72 md:w-80 xl:w-[28rem] aspect-[16/9] object-cover object-top border rounded-t-xl sm:rounded-s-xl sm:rounded-e-none"
          />

          <div className="card-body p-4">
            <h2 className="card-title text-xl">E-commerce website with MERN Stack</h2>
            <div className="tech-stack-2">
              <div className="flex justify-center items-center text-black space-x-2 border bg-white rounded-xl px-2 py-[4px] hover:scale-105 duration-300">
                <img
                  height="24"
                  width="24"
                  src="https://cdn.simpleicons.org/react"
                  className="w-4 lg:w-5"
                />
                <p>React</p>
              </div>
              <div className="flex justify-center items-center text-black space-x-2 border bg-white rounded-xl px-2 py-[4px] hover:scale-105 duration-300">
                <img
                  height="24"
                  width="24"
                  src="https://cdn.simpleicons.org/vite"
                  className="w-4 lg:w-5"
                />
                <p>Vite</p>
              </div>
              <div className="flex justify-center items-center text-black space-x-2 border bg-white rounded-xl px-2 py-[4px] hover:scale-105 duration-300">
                <img
                  height="24"
                  width="24"
                  src="https://cdn.simpleicons.org/tailwindcss"
                  className="w-4 lg:w-5"
                />
                <p>TailwindCSS</p>
              </div>
              <div className="flex justify-center items-center text-black space-x-2 border bg-white rounded-xl px-2 py-[4px] hover:scale-105 duration-300">
                <img
                  height="24"
                  width="24"
                  src="https://cdn.simpleicons.org/firebase"
                  className="w-4 lg:w-5"
                />
                <p>Firebase</p>
              </div>
              <div className="flex justify-center items-center text-black space-x-2 border bg-white rounded-xl px-2 py-[4px] hover:scale-105 duration-300">
                <img
                  height="24"
                  width="24"
                  src="https://cdn.simpleicons.org/axios"
                  className="w-4 lg:w-5"
                />
                <p>Axios</p>
              </div>
              <div className="flex justify-center items-center text-black space-x-2 border bg-white rounded-xl px-2 py-[4px] hover:scale-105 duration-300">
                <img
                  height="24"
                  width="24"
                  src="https://cdn.simpleicons.org/mongoDB"
                  className="w-4 lg:w-5"
                />
                <p>MongoDB</p>
              </div>
            </div>
            <p className="description">
              โปรเจคนี้เป็น Workshop ในรายวิชา Component-based & Mobile
              Development เป็นการเรียนรู้ MERN Stack และการใช้งาน Firebase
              เป็นโปรเจคที่มีความ Advance มากขึ้น
              โดยการลงทะเบียนและเข้าสู่ระบบกับ Google ด้วย Firebase, การใช้งาน
              Swagger เพื่อสร้าง API Document และทดสอบ API ได้ง่ายขึ้น, การใช้
              AuthContext ในการตรวจสอบสิทธิ์ของผู้ใช้งาน
              และการจำกัดสิทธิ์ในการเข้าถึงในหน้า Admin Panel โดยใช้ Vite,
              TailwindCSS, SweetAlert2, TanStack, Axios, Firebase, MongoDB,
              Swagger
            </p>
            <div>
              <Link
                href={"https://github.com/entsrkk/MERN_SeShop.git"}
                target="_blank"
                className="btn cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black lg:px-7 lg:py-3 rounded-full border border-gray-600 hover:scale-105 hover:text-gray-300 hover:border-gray-800 hover:from-black hover:to-gray-900 transition duration-300 ease-in-out"
              >
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FFFFFF"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  ></path>
                </svg>
                Github
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-4 md:mt-10 lg:mt-14 text-lg md:text-2xl font-medium">
          <p>Information is being updated regularly, please wait...</p>
        </div>
      </div>
    </div>
  );
};

export default AllProjectpage;
