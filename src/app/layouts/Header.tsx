import Link from "next/link";
import { NavBtn } from "../components/button/NavBtn";

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

  return (
    <header className="text-primary-on-container flex gap-12 absolute left-16 top-12 z-30">
      <Link href={"/"} className="font-display text-xl">
        wan<span className="text-secondary">.</span>
      </Link>
      <nav className="flex gap-12 text-lg">
        {srcs.map((src, index) => (
          <NavBtn key={index} href={src.src}>
            {src.name}
          </NavBtn>
        ))}
      </nav>
    </header>
  );
}
