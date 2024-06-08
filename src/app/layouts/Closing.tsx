import Link from "next/link";
import MyButton from "../components/button/MyButton";

interface ClosingProps {
  title: string;
  action: string | React.ReactElement;
}

export default function Closing(props: ClosingProps): React.ReactElement {
  return (
    <section className="min-h-[100dvh] flex items-center">
      <div className="mx-auto max-w-3xl h-[768px] bg-primary-container border-secondary border-2 rounded-full flex justify-center items-center gap-4 flex-col">
        <p className="text-center font-bold text-primary-on-container leading-relaxed tracking-wide text-6xl mx-16">
          {props.title}
        </p>
        {typeof props.action === "string" ? (
          <Link href="/contact">
            <MyButton className="mt-10">{props.action}</MyButton>
          </Link>
        ) : (
          props.action
        )}
      </div>
    </section>
  );
}
