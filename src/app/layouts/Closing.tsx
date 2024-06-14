"use client";

import MyButton from "@components/button/MyButton";
import { motion } from "framer-motion";
import Link from "next/link";
interface ClosingProps {
  title: string;
  action: string | React.ReactElement;
}

export default function Closing(props: ClosingProps): React.ReactElement {
  return (
    <section className="min-h-[100dvh] flex items-center container mx-auto relative bg-inherit ">
      <motion.div
        initial={{
          borderRadius: "4rem",
        }}
        whileInView={{ borderRadius: "100%" }}
        viewport={{ amount: "all", once: true }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-[calc(100svw-4rem)] h-[calc(100svw-4rem)]  sm:max-w-xl sm:h-[576px]  lg:max-w-2xl lg:h-[672px]  xl:max-w-3xl xl:h-[768px] w-full  bg-primary-container border-secondary border-2  flex justify-center items-center gap-4 flex-col"
      >
        <p className="text-center font-bold text-primary-on-container !leading-relaxed tracking-wide text-2xl mx-14  sm:text-4xl   lg:text-5xl   xl:text-6xl sm:mx-20 lg:mx-16">
          {props.title}
        </p>
        {typeof props.action === "string" ? (
          <Link href="/contact">
            <MyButton className="mt-4">{props.action}</MyButton>
          </Link>
        ) : (
          props.action
        )}
      </motion.div>
    </section>
  );
}
