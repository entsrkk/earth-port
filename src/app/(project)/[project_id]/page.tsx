"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Modal, ScrollArea  } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

interface Project {
  project_id: number;
  project_name: string;
  project_image: string;
  project_tag: string[];
  project_description: string;
  project_responsibilities: string;
  keyResponsibilities: string[];
  technologies_used: string[];
}

const ProjectDetailPage = () => {
  const searchParams = useSearchParams();
  const project_id = searchParams.get("project_id");
  const [project, setProject] = useState<Project | null>(null);
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get("/data/project.json");
        const projects: Project[] = response.data;
        const findProject = projects.find(
          (p) => p.project_id.toString() === project_id
        );
        // ทำให้ project_tag เป็นอาร์เรย์เสมอ
        if (findProject) {
          const normalizedProject = {
            ...findProject,
            project_tag: Array.isArray(findProject.project_tag)
              ? findProject.project_tag
              : [findProject.project_tag],
            keyResponsibilities: Array.isArray(findProject.keyResponsibilities)
              ? findProject.keyResponsibilities
              : [findProject.keyResponsibilities],
            technologies_used: Array.isArray(findProject.technologies_used)
              ? findProject.technologies_used
              : [findProject.technologies_used],
          };
          setProject(normalizedProject);
        }
      } catch (error) {
        console.error("Error fetching the project data", error);
      }
    };

    if (project_id) {
      fetchProject();
    }
  }, [project_id]);

  if (!project) {
    return <p className="text-center text-red-500">Project not found</p>;
  }


  return (
    <div className="container mx-auto py-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex justify-center items-center order-2 lg:order-1 px-4 lg:px-0 ">
          <Image
            src={project.project_image}
            alt={project.project_name}
            width={450}
            height={450}
            loading="lazy"
            loader={({ src }) => src}
            className="rounded-lg border drop-shadow-lg hover:cursor-zoom-in hover:scale-105 duration-300"
            onClick={open}
          />
          <Modal
            opened={opened}
            onClose={close}
            withCloseButton={false}
            overlayProps={{
              backgroundOpacity: 0.55,
              blur: 4,
            }}
            size="lg"
            centered
          >
            <Image
              src={project.project_image}
              alt={project.project_name}
              width={1080}
              height={1080}
            />
          </Modal>
        </div>
        <div className="px-4 lg:px-0 space-y-6 order-1 lg:order-2">
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl capitalize font-semibold ">
              {project.project_name}
            </p>
            <div className="flex space-x-2">
              {project.project_tag.map((tag) => (
                <span
                  key={tag}
                  className="badge bg-base-300 text-sm py-3 capitalize opacity-60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="md:text-lg">{project.project_description}</p>
          </div>
          <div>
            <p className="text-lg font-semibold">
              {project.project_responsibilities}
            </p>
            <ul className="list-disc list-inside indent-3 sm:indent-5 text-sm sm:text-base">
              {project.keyResponsibilities.map((keyResponsibility) => (
                <li key={keyResponsibility}>{keyResponsibility}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-lg font-semibold ">Technologies Used</p>
            <ul className="list-disc list-inside indent-3 sm:indent-5 text-sm sm:text-base">
              {project.technologies_used.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
