const MainHeadings = ({ children, className, highlight }) => {
  return (
    <h2
      className={`${className} text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800`}
    >
      {children} <span className="text-green-800">{highlight}</span>
    </h2>
  );
};

export default MainHeadings;
