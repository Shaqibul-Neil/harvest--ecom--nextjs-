import { cn } from "@/lib/utils";

const MainHeadings = ({ children, className, highlight, text = "" }) => {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight",
        className
      )}
    >
      {children}{" "}
      <span className="relative inline-block">
        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-green-600">
          {highlight}
        </span>{" "}
        {text}
        {/* Underline decoration */}
        <svg
          className="absolute -bottom-2 left-0 w-full h-3 text-green-300"
          viewBox="0 0 200 12"
          fill="none"
        >
          <path
            d="M2 8.5C50 2 150 2 198 8.5"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </h2>
  );
};

export default MainHeadings;
