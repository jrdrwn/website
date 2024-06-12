"use client";
import Image from "next/image";
import Link from "next/link";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
  number: number;
}
export function ProjectCard(props: ProjectCardProps) {
  return (
    <>
      <div className="flex justify-between items-center group/project cursor-pointer flex-col sm:flex-row gap-4 w-full">
        <div className="lg:hidden">
          <Image
            src={props.image}
            alt={`Picture of the project ${props.title}`}
            width={350}
            height={200}
            className="transition-all object-cover object-center rounded-2xl  w-full sm:w-auto group-hover/project:-translate-y-1 "
          />
        </div>
        <div className="flex lg:items-center overflow-hidden relative flex-col lg:flex-row gap-4">
          <div className="flex justify-between items-center">
            <div className="transition-all lg:group-hover/project:left-0 flex lg:-left-12 lg:absolute items-center justify-center w-12 h-12 rounded-full bg-primary-container text-primary-on-container">
              {props.number}
            </div>
            <Link
              href={props.url}
              className="transition-all bg-primary-container border border-secondary relative w-[48px] h-[48px] hover:h-[24px]  rounded-xl group/view-project flex justify-center items-center lg:hidden"
            >
              <svg
                className="fill-current text-base-content-100 transition-all w-6  group-hover/view-project:rotate-45 "
                viewBox="0 0 61 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.63307 55.4802C7.83277 59.6114 14.6418 59.6114 18.8415 55.4802C23.0412 51.349 23.0412 44.651 18.8415 40.5198C14.6418 36.3886 7.83277 36.3886 3.63307 40.5198C-0.566632 44.651 -0.566632 51.349 3.63307 55.4802ZM60.0164 2C60.0164 0.90455 59.1137 0.0165122 58.0001 0.0165122H39.8527C38.7391 0.0165122 37.8363 0.90455 37.8363 2C37.8363 3.09545 38.7391 3.98349 39.8527 3.98349L55.9837 3.98349L55.9837 19.8514C55.9837 20.9468 56.8864 21.8349 58.0001 21.8349C59.1137 21.8349 60.0164 20.9468 60.0164 19.8514V2ZM12.6631 49.4025L59.4259 3.40254L56.5743 0.597462L9.81151 46.5975L12.6631 49.4025Z" />
              </svg>
            </Link>
          </div>
          <div className="transition-all max-w-sm lg:group-hover/project:ml-16">
            <h2 className="text-base-content-100 font-bold text-xl md:text-2xl  xl:text-3xl mb-3">
              {props.title}
            </h2>
            <p className="text-base-content-100 font-light text-sm md:text-base">
              {props.description}
            </p>
          </div>
        </div>
        <div className="hidden lg:flex items-center lg:gap-4 xl:gap-12">
          <Image
            src={props.image}
            alt={`Picture of the project ${props.title}`}
            width={350}
            height={200}
            className="transition-all object-cover object-center rounded-2xl group-hover/project:opacity-100 opacity-0 hover:scale-105 hover:rotate-3"
          />
          <Link
            href={props.url}
            className="transition-all bg-primary-container border border-secondary relative w-[60px] h-[60px] rounded-3xl group/view-project hover:w-[114px] xl:mr-5 "
          >
            <svg
              className="fill-current text-base-content-100 transition-all absolute bottom-[18px] left-[18px] group-hover/view-project:rotate-45 group-hover/view-project:bottom-0 group-hover/view-project:left-[24px]"
              width="61"
              height="59"
              viewBox="0 0 61 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.63307 55.4802C7.83277 59.6114 14.6418 59.6114 18.8415 55.4802C23.0412 51.349 23.0412 44.651 18.8415 40.5198C14.6418 36.3886 7.83277 36.3886 3.63307 40.5198C-0.566632 44.651 -0.566632 51.349 3.63307 55.4802ZM60.0164 2C60.0164 0.90455 59.1137 0.0165122 58.0001 0.0165122H39.8527C38.7391 0.0165122 37.8363 0.90455 37.8363 2C37.8363 3.09545 38.7391 3.98349 39.8527 3.98349L55.9837 3.98349L55.9837 19.8514C55.9837 20.9468 56.8864 21.8349 58.0001 21.8349C59.1137 21.8349 60.0164 20.9468 60.0164 19.8514V2ZM12.6631 49.4025L59.4259 3.40254L56.5743 0.597462L9.81151 46.5975L12.6631 49.4025Z" />
            </svg>
          </Link>
        </div>
      </div>
      <hr className="border-secondary" />
    </>
  );
}
