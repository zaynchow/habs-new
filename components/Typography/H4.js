import React from "react";

const H4 = ({ children, className }) => {
  return (
    <h4
      className={`font-lora text-2xl font-semibold tracking-[0.5px] text-center antialiased md:font-semibold md:text-[36px] md:leading-[42px] ${className}`}
    >
      {children}
    </h4>
  );
};

export default H4;
