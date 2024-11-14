"use client";
import React from "react";
import Image from "next/image";

const ProjectSection = () => {
  const projects = [
    {
      title: "Portfolio",
      description: "Simple Portfolio By Using HTML, CSS and JavaScript",
      imageUrl: "/portfolio.png",
      link: "https://daniyalrazaportfolio.vercel.app/",
    },
    {
      title: "Static Resume",
      description: "A Simple Static Resume Project By Using HTML ,CSS and Java Script",
      imageUrl: "/resume.png",
      link: "https://daniyal-static-resume.vercel.app/",
    },
    {
      title: "Resume Builder",
      description: "A Simple Resume Builder Project By Using HTML, CSS and TypeScript",
      imageUrl: "/resume-builder.png",
      link: "https://daniyal-resume-builder.vercel.app/",
    },
  ];

  return (
    <section className="py-16 bg-gray-100" id="projects">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          My Projects
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          Here are some of my recent works, showcasing my skills and creativity.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block text-white px-6 py-2 rounded-full bg-black hover:bg-gray-700 transition-colors"
                  target="_blank"
                  >
                  View Project
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
