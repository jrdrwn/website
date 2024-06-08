import Link from "next/link";

export function NavBtn(props: any): React.ReactElement {
  return (
    <Link href={props.href}>
      <button className="before:transition-all before:absolute before:bg-secondary before:w-0 hover:before:w-full  before:bottom-1 before:h-2 relative before:-z-10 active:before:-bottom-1 ">
        {props.children}
      </button>
    </Link>
  );
}
