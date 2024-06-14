import Closing from "@layouts/Closing";
import Footer from "@layouts/Footer";
import Hero from "@layouts/Hero";
import Wrapper from "@layouts/Wrapper";
import { Metadata } from "next";
import AboutSection from "../layouts/AboutSection";

export const metadata: Metadata = {
  title: "About Wan",
  description:
    "Let me introduce myself, my workflows, my collaborations, and the technologies I like to use to bring my projects to life.",
};

export default function About() {
  return (
    <Wrapper>
      <Hero
        title={<>Let&lsquo;s get to know each other</>}
        description={
          "Let me introduce myself, my workflows, my collaborations, and the technologies I like to use to bring my projects to life."
        }
        foregroundText={"I DON'T KNOW WHO I AM:V"}
      />
      <AboutSection />
      <Closing title="See you in the next project." action="Get in touch" />
      <Footer />
    </Wrapper>
  );
}
