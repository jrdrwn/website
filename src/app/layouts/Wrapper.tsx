export default function Wrapper(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={props.className ?? "bg-base-100 p-4"}>
      {props.children}
    </main>
  );
}
