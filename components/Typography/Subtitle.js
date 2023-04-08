import React from "react";

const Subtitle = ({ children, className}) => {
  return (
    <h4
      className={`font-jakarta md:text-[18px] !text-[16px] font-normal tracking-[0.5px] leading-[28px] antialiased md:text-center text-center mt-3 max-w-[580px] mx-auto ${className}`}
    >
      {children}
    </h4>
  );
};

export default Subtitle;
