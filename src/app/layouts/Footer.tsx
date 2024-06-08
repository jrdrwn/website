import Link from "next/link";
import FooterStar from "../components/utils/FooterStar";

export default function Footer(): React.ReactElement {
  const srcs = [
    [
      {
        name: "home",
        src: "/",
      },
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
    ],
    [
      {
        name: "email",
        src: "mailto:jordirwn@gmail.com",
      },
      {
        name: "github",
        src: "https://github.com/jrdrwn",
      },
      {
        name: "linkedin",
        src: "#",
      },
      {
        name: "read.cv",
        src: "#",
      },
    ],
  ];
  return (
    <section className="px-16">
      <div className="flex justify-between mb-8">
        <div>
          <div className="font-display text-9xl text-base-content-100 mb-4">
            wan<span className="text-secondary">.</span>
          </div>
          <p className="font-light text-base-content-100 text-xl">
            See you in the next project.
          </p>
        </div>
        <div className="flex gap-10">
          {srcs.map((src, index) => (
            <div key={index} className="gap-4 flex flex-col">
              {src.map((item, index) => (
                <Link
                  key={index}
                  href={item.src}
                  className="text-base-content-100 text-xl font-medium tracking-wider hover:underline "
                >
                  {item.name.toUpperCase()}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <hr className="border-secondary" />
      <footer className="mt-8 mb-4 flex justify-between items-center">
        <span className="text-base-content-100">
          ©{" "}
          {new Date().toLocaleDateString("en-US", {
            timeZone: "Asia/Jakarta",
            year: "numeric",
          })}{" "}
          Jordi Irawan. All rights reserved. Made with ❤️
        </span>
        <div className="flex gap-4 items-center">
          <span className="text-base-content-100">Based in Indonesia</span>
          <span className="text-base-content-100">|</span>
          <FooterStar />
          <span className="text-base-content-100">
            {new Date().toLocaleTimeString("en-US", {
              timeStyle: "short",
              hour12: false,
              timeZone: "Asia/Jakarta",
            })}
          </span>
          <span className="text-base-content-100 border border-base-content-100 px-2 py-1 text-xs flex items-center gap-2">
            <span className="border rounded-full w-3 h-3 border-base-content-100 flex items-center justify-center">
              <span className="bg-base-content-100 w-1 h-1 rounded-full"></span>
            </span>
            available
          </span>
        </div>
      </footer>
    </section>
  );
}
