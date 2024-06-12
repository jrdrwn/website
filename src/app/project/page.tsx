"use client";

import { ProjectCard, ProjectCardProps } from "@components/card/ProjectCard";
import Closing from "@layouts/Closing";
import Footer from "@layouts/Footer";
import Hero from "@layouts/Hero";
import { useEffect, useState } from "react";

export default function Home() {
  const [projects, setProjects] = useState<ProjectCardProps[]>([]);

  const fetchProjects = async () => {
    const response = await fetch("/projects.json");
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <main className="bg-base-100 p-4 mx-auto">
      <Hero
        title={<>A collection of my projects</>}
        description={
          "Having spent many years in web development, I have gained extensive experience working on projects spanning various technologies."
        }
        foregroundText={"LET ME TO SHOWCASE HERE"}
      />
      <section className="min-h-[calc(100dvh-32px)] container pt-8 md:px-8 mx-auto">
        <div className="flex flex-col gap-8 mt-14  lg:mt-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              url={project.url}
              number={index + 1}
            />
          ))}
        </div>
      </section>
      <Closing title="Need help completing a project?" action="Get in touch" />
      <Footer />
    </main>
  );
}
