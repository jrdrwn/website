"use client";

import Star from "@components/utils/Star";
import TextRing from "@components/utils/TextRing";
import Header from "@layouts/Header";
import { motion } from "framer-motion";
interface HeroProps {
  foregroundText: string | React.ReactElement;
  title: string | React.ReactElement;
  description: string | React.ReactElement;
  suffix?: React.ReactElement;
}

export default function Hero({
  foregroundText,
  title,
  description,
  suffix,
}: HeroProps): React.ReactElement {
  return (
    <section className="bg-primary-container border-secondary border-2 rounded-lg shadow-md h-[calc(100dvh-32px)]  relative container mx-auto  ">
      <Header />
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="font-bold text-base-100 text-right tracking-widest !leading-tight text-[64px]  sm:text-[94px]  md:text-[114px]  lg:text-[154px]  xl:text-[194px]  2xl:text-[234px]  3xl:text-[250px] absolute left-1 bottom-32 md:right-0 md:top-1/2 md:-translate-y-1/2 md:bottom-auto  uppercase "
      >
        {foregroundText}
      </motion.p>
      <div className="flex justify-between w-full absolute bottom-0 p-4  sm:p-12  md:p-14 xl:p-16 flex-col top-32 md:flex-row md:items-end md:gap-10  md:top-auto ">
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.5 }}
          exit={{
            opacity: 0,
            y: 25,
          }}
          className="z-20"
        >
          <h1 className="text-primary-on-container font-bold text-3xl  lg:text-4xl xl:text-6xl 2xl:text-7xl 2xl:max-w-6xl !leading-relaxed tracking-wider ">
            {title}
          </h1>
          <p className=" text-primary-on-container text-sm md:text-base  xl:text-xl  mt-4 max-w-screen-sm lg:max-w-screen-md !leading-loose">
            {description}
          </p>
          {suffix}
        </motion.div>
        <motion.div className="md:scale-100 scale-50  relative w-[200px] h-[200px] mx-auto md:mx-0">
          <div
            style={{
              animation: "spin 10s linear infinite",
            }}
            className=" animate-spin  text-primary-on-container font-normal  w-[200px] h-[200px] border-2 rounded-full flex justify-center items-center"
          >
            <Star />
            <TextRing side={1.6}>SCROLL • DOWN •&nbsp;</TextRing>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
