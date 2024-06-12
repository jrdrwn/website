import { NavBtn } from "@components/button/NavBtn";
import Link from "next/link";
import React from "react";
import { MdClose, MdMenu } from "react-icons/md";

export default function Header(): React.ReactElement {
  const srcs = [
    {
      name: "about",
      src: "/about",
    },
    {
      name: "project",
      src: "/project",
    },
    {
      name: "contact",
      src: "/contact",
    },
  ];

  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="text-primary-on-container items-center flex gap-12 absolute left-4 right-4  sm:left-12  md:left-14 xl:left-16 top-8  md:top-12 z-30">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link
            href={"/"}
            className="font-display text-primary-on-container text-xl"
          >
            wan<span className="text-secondary">.</span>
          </Link>
          <button className="md:hidden text-primary-on-container text-2xl">
            <MdMenu onClick={toggle} />
          </button>
        </div>
        <nav className="hidden md:flex gap-12 text-lg">
          {srcs.map((src, index) => (
            <NavBtn key={index} href={src.src}>
              {src.name}
            </NavBtn>
          ))}
        </nav>
      </header>
      <nav
        className={`transition-all fixed  right-0 left-0 bottom-0 bg-primary-container/95 z-[999] text-primary-on-container ${
          !isOpen ? "-top-full translate-y-full" : "top-0"
        }`}
      >
        <div className="flex justify-between items-center h-16 px-8 pt-16 ">
          <Link href={"/"} className="font-display text-xl">
            wan<span className="text-secondary">.</span>
          </Link>
          <button className="text-primary-on-container text-2xl">
            <MdClose onClick={toggle} />
          </button>
        </div>
        <div className="flex justify-center items-center h-[calc(100%-64px)] ">
          <nav className="flex flex-col gap-12 text-center">
            {srcs.map((src, index) => (
              <Link key={index} href={src.src}>
                <button className="before:transition-all before:absolute before:bg-secondary before:w-0 hover:before:w-full  before:bottom-1 before:h-2 relative before:-z-10 active:before:-bottom-1 text-3xl ">
                  {src.name}
                </button>
              </Link>
            ))}
          </nav>
        </div>
      </nav>
    </>
  );
}
