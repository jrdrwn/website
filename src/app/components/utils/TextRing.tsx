interface TextRingProps {
  side: number;
  children: string;
}
export default function TextRing(props: TextRingProps): React.ReactElement {
  const CHARS = props.children.split("");
  const INNER_ANGLE = 360 / CHARS.length;
  return (
    <span
      className="text-ring"
      style={
        {
          "--total": CHARS.length,
          "--radius": props.side / Math.sin(INNER_ANGLE / (180 / Math.PI)),
        } as any
      }
    >
      {CHARS.map((char: string, index: number) => (
        <span style={{ "--index": index } as any} key={index}>
          {char}
        </span>
      ))}
    </span>
  );
}
