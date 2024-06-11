import Star from "../components/utils/Star";
import TextRing from "../components/utils/TextRing";
import Header from "./Header";

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
    <section className="bg-primary-container border-secondary border-2 rounded-lg shadow-md h-[calc(100dvh-32px)]   relative container mx-auto ">
      <Header />
      <p className="font-bold text-base-100 text-right tracking-widest !leading-tight text-[74px]  sm:text-[94px]  md:text-[114px]  lg:text-[154px]  xl:text-[194px]  2xl:text-[234px]  3xl:text-[250px] absolute right-0 top-1/2 -translate-y-1/2  uppercase ">
        {foregroundText}
      </p>
      <div className="flex justify-between w-full absolute bottom-0 p-8  sm:p-12  md:p-14 xl:p-16 flex-col top-32 md:flex-row md:items-end md:gap-10  md:top-auto ">
        <div className="z-20">
          <h1 className="text-primary-on-container font-bold text-3xl  lg:text-4xl xl:text-6xl 2xl:text-7xl 2xl:max-w-6xl !leading-relaxed tracking-wider ">
            {title}
          </h1>
          <p className=" text-primary-on-container text-sm md:text-base  xl:text-xl  mt-4 max-w-screen-sm lg:max-w-screen-md !leading-loose">
            {description}
          </p>
          {suffix}
        </div>
        <div className="md:scale-100 scale-50  relative w-[200px] h-[200px] mx-auto">
          <div
            style={{
              animation: "spin 10s linear infinite",
            }}
            className=" animate-spin  text-primary-on-container font-normal  w-[200px] h-[200px] border-2 rounded-full flex justify-center items-center"
          >
            <Star />
            <TextRing side={1.6}>SCROLL • DOWN •&nbsp;</TextRing>
          </div>
        </div>
      </div>
    </section>
  );
}
