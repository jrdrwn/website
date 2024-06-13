"use client";

import MyButton from "@components/button/MyButton";
import { ProjectCardWrapper } from "@components/card/ProjectCard";
import QuoteIcon from "@components/utils/QuoteIcon";
import Closing from "@layouts/Closing";
import Footer from "@layouts/Footer";
import Hero from "@layouts/Hero";
import Wrapper from "@layouts/Wrapper";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapper>
      <Hero
        title={<>Hello, i&lsquo;m Jordi Irawan a Full Snack Developer</>}
        description={
          "Currently studying at the University of Palangkaraya majoring in Informatics Engineering."
        }
        foregroundText={"KEEP SIMPLE BE HUMBLE"}
        suffix={
          <Link
            href={
              "https://drive.google.com/uc?export=download&id=1NOaX97NXQ4fPI3NpPawNdPW_Ip-LVS2p"
            }
          >
            <MyButton className="mt-10">Curriculum Vitae</MyButton>
          </Link>
        }
      />
      <section className="relative min-h-[100dvh] container mx-auto p-8 ">
        <QuoteIcon />
        <p className="font-bold  text-base-content-100 absolute  right-2 md:right-8 sm:left-auto top-1/2 -translate-y-1/2 text-3xl  lg:text-4xl xl:text-6xl 2xl:text-7xl  text-justify tracking-wide !leading-relaxed max-w-md md:max-w-lg  lg:max-w-screen-sm xl:max-w-screen-lg">
          Indeed, Allah does not change the condition of a people until they
          change what is in themselves
        </p>
      </section>
      <section className="min-h-[calc(100dvh-32px)] container  md:px-8 mx-auto">
        <h1 className="text-base-content-100 text-3xl  md:text-4xl  xl:text-5xl before:absolute relative before:-z-10 before:w-12 before:h-12 before:-left-2 before:-translate-y-1   md:before:w-14 md:before:h-14 md:before:-left-4    xl:before:w-16  xl:before:-left-3  xl:before:h-16 md:before:-translate-y-2 before:inset-y-0 z-50 before:border before:border-secondary before:bg-primary-container before:rounded-md">
          SELECTED PROJECT
        </h1>
        <div className="flex flex-col gap-8 mt-14  lg:mt-8">
          <ProjectCardWrapper url="/selected_projects.json" />
        </div>
        <Link href="/project">
          <MyButton className="mt-10">View All Project</MyButton>
        </Link>
      </section>
      <Closing title="See you in the next project." action="Get in touch" />
      <Footer />
    </Wrapper>
  );
}
