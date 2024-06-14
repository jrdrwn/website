"use client";

import MyButton from "@components/button/MyButton";
import { ProjectCardWrapper } from "@components/card/ProjectCard";
import QuoteIcon from "@components/utils/QuoteIcon";
import Closing from "@layouts/Closing";
import Footer from "@layouts/Footer";
import Hero from "@layouts/Hero";
import Wrapper from "@layouts/Wrapper";
import { motion } from "framer-motion";
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
      <section className="relative min-h-[100dvh] container mx-auto p-8 bg-inherit ">
        <QuoteIcon />
        <p className="font-bold text-base-content-100   absolute   right-2 md:right-8 sm:left-auto top-1/2 -translate-y-1/2 text-3xl  lg:text-4xl xl:text-6xl 2xl:text-7xl  text-justify tracking-wide !leading-relaxed max-w-md md:max-w-lg  lg:max-w-screen-sm xl:max-w-screen-lg">
          <motion.span
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{ duration: 2 }}
          >
            Indeed, Allah does not{" "}
          </motion.span>
          <motion.span
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.5 }}
          >
            change the condition of{" "}
          </motion.span>
          <motion.span
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.5 }}
          >
            a people until they{" "}
          </motion.span>
          <motion.span
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.5 }}
          >
            change what is in themselves{" "}
          </motion.span>
        </p>
      </section>
      <section className="min-h-[calc(100dvh-32px)] container  md:px-8 mx-auto bg-inherit relative">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-base-content-100 text-3xl  md:text-4xl  xl:text-5xl before:absolute relative before:-z-10 before:w-12 before:h-12 before:-left-2 before:-translate-y-1   md:before:w-14 md:before:h-14 md:before:-left-4    xl:before:w-16  xl:before:-left-3  xl:before:h-16 md:before:-translate-y-2 before:inset-y-0 z-50 before:border before:border-secondary before:bg-primary-container before:rounded-md"
        >
          SELECTED PROJECT
        </motion.h1>
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
