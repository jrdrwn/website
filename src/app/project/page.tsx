"use client";

import { ProjectCard, ProjectCardProps } from "@components/card/ProjectCard";
import Closing from "@layouts/Closing";
import Footer from "@layouts/Footer";
import Hero from "@layouts/Hero";

export default function Home() {
  const projects: ProjectCardProps[] = [
    {
      title: "Pakar Mobile",
      description:
        "An android application created for the implementation of PAKAR API",
      image: "/image.png",
      url: "/pakar-mobile",
      number: 1,
    },
    {
      title: "Pakar Website",
      description:
        "A website that carries a sustainability theme so that all courses can be handled by this website",
      image: "/image.png",
      url: "/pakar-website",
      number: 2,
    },
    {
      title: "Pendaftaran SMA",
      description: "A website created for a final practicum assignment",
      image: "/image.png",
      url: "/pendaftran-sma",
      number: 3,
    },
  ];

  return (
    <main className="bg-base-100 p-4 mx-auto">
      <Hero
        title={
          <>
            A collection of
            <br /> my projects
          </>
        }
        description={
          "Having spent many years in web development, I have gained extensive experience working on projects spanning various technologies."
        }
        foregroundText={"LET ME TO SHOWCASE HERE"}
      />
      <section className="relative min-h-[100dvh] p-32 ">
        <div className="flex flex-col gap-8 mt-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              url={project.url}
              number={project.number}
            />
          ))}
        </div>
      </section>
      <Closing title="Need help completing a project?" action="Get in touch" />
      <Footer />
    </main>
  );
}
