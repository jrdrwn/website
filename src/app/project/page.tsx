import { ProjectCardWrapper } from "@components/card/ProjectCard";
import Closing from "@layouts/Closing";
import Footer from "@layouts/Footer";
import Hero from "@layouts/Hero";
import Wrapper from "@layouts/Wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects Wan",
  description:
    "Having spent many years in web development, I have gained extensive experience working on projects spanning various technologies.",
};

export default function Project() {
  return (
    <Wrapper>
      <Hero
        title={<>A collection of my projects</>}
        description={
          "Having spent many years in web development, I have gained extensive experience working on projects spanning various technologies."
        }
        foregroundText={"LET ME TO SHOWCASE HERE"}
      />
      <section className="min-h-[calc(100dvh-32px)] container pt-8 md:px-8 mx-auto">
        <div className="flex flex-col gap-8 mt-14  lg:mt-8">
          <ProjectCardWrapper url="/projects.json" />
        </div>
      </section>
      <Closing title="Need help completing a project?" action="Get in touch" />
      <Footer />
    </Wrapper>
  );
}
