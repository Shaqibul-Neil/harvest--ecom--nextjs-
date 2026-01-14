import { cn } from "@/lib/utils";

const MainHeadings = ({ children, className, highlight }) => {
  return (
    <h2
      className={cn(
        "text-2xl md:text-3xl lg:text-5xl font-black text-slate-800 tracking-tight",
        className
      )}
    >
      {children} <span className="text-green-600">{highlight}</span>
    </h2>
  );
};

export default MainHeadings;
