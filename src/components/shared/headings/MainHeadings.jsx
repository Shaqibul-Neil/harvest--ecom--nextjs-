import { cn } from "@/lib/utils";

const MainHeadings = ({ children, className, highlight, text = "" }) => {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-black text-slate-800 tracking-tight",
        className
      )}
    >
      {children} <span className="text-green-600">{highlight}</span> {text}
    </h2>
  );
};

export default MainHeadings;
