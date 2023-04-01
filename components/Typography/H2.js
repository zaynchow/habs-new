import React from "react";

const H2 = ({ children, className }) => {
  return (
    <h2
      className={`font-lora md:text-[36px] text-[28px] font-semibold tracking-[0.5px] md:leading-[42px] leading-[33px] text-center antialiased ${className}`}
    >
      {children}
    </h2>
  );
};

export default H2;
