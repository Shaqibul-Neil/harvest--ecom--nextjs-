const MainHeadings = ({ children, className }) => {
  return (
    <h2 className={`${className} text-3xl md:text-4xl lg:text-5xl font-bold`}>
      {children}
    </h2>
  );
};

export default MainHeadings;
