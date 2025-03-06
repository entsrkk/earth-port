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
  const router = useRouter()

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/data/project.json");
        const normalizedData = response.data.map((project: Project) => ({
          ...project,
          project_tag: Array.isArray(project.project_tag)
            ? project.project_tag
            : [project.project_tag],
        }));

        setProjects((prev) => (prev.length === 0 ? normalizedData : prev)); // ป้องกันการโหลดซ้ำ
      } catch (error) {
        console.error("Error fetching the projects data", error);
      }
    };

    fetchProjects();
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="container mx-auto"
    >
      <div className="mb-8">
        <h2 className="text-4xl text-center">My Projects</h2>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div key={project.project_id}>
              <div className="card bg-base-200 w-80 lg:w-96 shadow-xl border hover:scale-[1.02] duration-300">
                <figure>
                  <Image
                    width={450}
                    height={450}
                    src={project.project_image}
                    alt={project.project_name}
                    className="w-full h-96 object-cover object-top"
                    loading="lazy"
                  />
                </figure>
                <div className="card-body">
                  <div className="space-x-1 flex flex-wrap">
                    {project.project_tag.map((tag) => (
                      <div
                        key={tag}
                        className="badge bg-base-300 text-sm py-3 capitalize"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                  <h2 className="card-title capitalize line-clamp-1 cursor-pointer hover:text-blue-500 transition" 
                  onClick={() => router.push(`/project?project_id=${project.project_id}`)}>
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
