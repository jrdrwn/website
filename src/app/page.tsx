"use client";

import Link from "next/link";
import MyButton from "./components/button/MyButton";
import { ProjectCard, ProjectCardProps } from "./components/card/ProjectCard";
import QuoteIcon from "./components/utils/QuoteIcon";
import Closing from "./layouts/Closing";
import Footer from "./layouts/Footer";
import Hero from "./layouts/Hero";

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
  ];

  return (
    <main className="bg-base-100 p-4 ">
      <Hero
        title={<>Hello, i&lsquo;m Jordi Irawan a Full Snack Developer</>}
        description={
          "Currently studying at the University of Palangkaraya majoring in Informatics Engineering."
        }
        foregroundText={"KEEP SIMPLE BE HUMBLE"}
        suffix={<MyButton className="mt-10">Curriculum Vitae</MyButton>}
      />
      <section className="relative min-h-[100dvh]">
        <QuoteIcon />
        <p className="font-bold  text-white absolute right-32 top-1/2 -translate-y-1/2  text-7xl text-justify tracking-wide leading-relaxed max-w-screen-lg">
          Indeed, Allah does not change the condition of a people until they
          change what is in themselves
        </p>
      </section>
      <section className="min-h-[calc(100dvh-32px)] px-32">
        <h1 className="text-base-content-100 text-5xl before:absolute relative before:-z-10 before:w-16  before:-left-3  before:h-16 before:-translate-y-2 before:inset-y-0 z-50 before:border before:border-secondary before:bg-primary-container before:rounded-md">
          SELECTED PROJECT
        </h1>
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
        <Link href="/project">
          <MyButton className="mt-10">View All Project</MyButton>
        </Link>
      </section>
      <Closing title="See you in the next project." action="Get in touch" />
      <Footer />
    </main>
  );
}
