import React from "react";

const H3 = ({ children, className }) => {
  return (
    <h3
      className={`font-jakarta md:text-[24px] text-[18px] font-medium tracking-[0.5px] md:leading-[32px] antialiased ${className}`}
    >
      {children}
    </h3>
  );
};

export default H3;
