"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

// สร้าง interface สำหรับข้อมูลโปรเจค
interface Project {
  project_id: number;
  project_name: string;
  project_image: string;
  project_tag: string[];
}

const MyProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/data/project.json");
        const { data } = response;
        setProjects(data);
      } catch (error) {
        console.error("Error fetching the projects data", error);
      }
    };

    fetchProjects();
    AOS.init({ disable: window.innerWidth < 1024 });
  }, []);

  return (
    <div className="container mx-auto">
      <div className="mb-4 sm:mb-8">
        <h2
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-easing="ease-out"
          data-aos-duration="800"
          className="text-4xl text-center font-medium"
        >
          Curated <span className="text-gradient font-extrabold">Works</span>
        </h2>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="800"
        className="flex justify-center items-center"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div key={project.project_id}>
              <div className="card bg-zinc-100 w-72 sm:w-80 lg:w-96 shadow-md border hover:scale-[1.02] transition duration-300 ease-in-out ">
                <figure>
                  <Image
                    width={450}
                    height={450}
                    src={project.project_image}
                    alt={project.project_name}
                    className="w-full h-96 object-cover object-top relative"
                    loading="lazy"
                  />
                </figure>
                <div className="card-body p-5 lg:py-6">
                  <h2
                    className="card-title text-base sm:text-xl font-medium capitalize line-clamp-1 cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out"
                    onClick={() =>
                      router.push(`/project?project_id=${project.project_id}`)
                    }
                  >
                    {project.project_name}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
