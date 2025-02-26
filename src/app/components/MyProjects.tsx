"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// สร้าง interface สำหรับข้อมูลโปรเจค
interface Project {
  project_id: number;
  project_name: string;
  project_image: string;
  project_tag: string;
}

const MyProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]); // ระบุประเภทข้อมูลของ projects เป็น Project[]

  useEffect(() => {
    axios // ใช้ axios เพื่อเรียกข้อมูลจากไฟล์ project.json
      .get("/data/project.json")
      .then((response) => {
        setProjects(response.data); // กำหนดข้อมูลที่ได้รับเข้ามาให้กับ projects
        console.log(response.data); // แสดงข้อมูลที่ได้รับเข้ามาใน console
      })
      .catch((error) => {
        console.error("Error fetching the projects data", error);
      });

    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="container mx-auto"
    >
      <div className="mb-8">
        <h2 className="text-4xl text-center">My Project</h2>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div key={project.project_id}>
              <div className="card bg-base-200 w-80 lg:w-96 shadow-xl border hover:scale-[1.02] duration-300">
                <figure>
                  <Image
                    width={500}
                    height={500}
                    src={project.project_image}
                    alt=""
                    className="w-full h-96 object-cover object-top"
                  />
                </figure>
                <div className="card-body">
                  <div className="badge bg-base-300 text-sm py-3 capitalize">
                    {project.project_tag}
                  </div>
                  <h2 className="card-title capitalize">
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
