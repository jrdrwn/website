import Footer from "@layouts/Footer";
import Hero from "@layouts/Hero";
import Wrapper from "@layouts/Wrapper";
import { Metadata } from "next";
import ContactForm from "../layouts/ContactForm";

export const metadata: Metadata = {
  title: "Contact Wan",
  description:
    "If you have a project to collaborate on or just want to chat, you've come to the right place.",
};
export default function Home() {
  return (
    <Wrapper>
      <Hero
        title={<>Let&apos;s connect with me online!</>}
        description={
          "If you have a project to collaborate on or just want to chat, you've come to the right place."
        }
        foregroundText={"Don't be shy to CONNECT"}
      />
      <ContactForm />
      <Footer />
    </Wrapper>
  );
}
