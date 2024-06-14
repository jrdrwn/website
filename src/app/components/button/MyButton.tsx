export default function MyButton({
  children,
  onClick,
  className,
}: Readonly<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}>) {
  return (
    <button
      className={`group relative inline-block text-sm font-medium text-primary-container z-50  md:text-base ${className}`}
      onClick={onClick}
    >
      <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-transparent border-primary-on-container border-2 rounded-md  transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
      <span className="relative flex items-center justify-center rounded-md font-medium  bg-primary-on-container group-active:bg-white  px-8 py-3 ">
        {children}
      </span>
    </button>
  );
}
