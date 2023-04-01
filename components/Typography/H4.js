import React from "react";

const H4 = ({ children, className }) => {
  return (
    <h4
      className={`font-lora md:text-[36px] text-2xl font-semibold tracking-[0.5px] md:leading-[42px]  text-center antialiased ${className}`}
    >
      {children}
    </h4>
  );
};

export default H4;
