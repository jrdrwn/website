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
    <section className="bg-primary-container border-secondary border-2 rounded-lg shadow-md min-h-[calc(100dvh-32px)]  relative">
      <Header />
      <p className="font-bold text-base-100 text-right tracking-widest leading-tight  text-[250px] absolute right-0 uppercase ">
        {foregroundText}
      </p>
      <div
        style={{
          animation: "spin 10s linear infinite",
        }}
        className="absolute animate-spin  right-32 bottom-32 text-primary-on-container font-normal  w-[200px] h-[200px] border-2 rounded-full flex justify-center items-center"
      >
        <Star />
        <TextRing side={1.6}>SCROLL • DOWN •&nbsp;</TextRing>
      </div>
      <div className="absolute bottom-32 left-32 z-20">
        <h1 className="text-primary-on-container font-bold text-7xl leading-relaxed tracking-wider ">
          {title}
        </h1>
        <p className=" text-primary-on-container text-[20px] mt-4 max-w-screen-md leading-loose">
          {description}
        </p>
        {suffix}
      </div>
    </section>
  );
}
