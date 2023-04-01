import React from "react";

const Display1 = ({ children, className }) => {
  return (
    <h1
      className={`font-lora md:text-[64px] text-[39px] font-semibold tracking-[0.5px] md:leading-[64px] leading-[50px] md:text-center antialiased  ${className}`}
    >
      {children}
    </h1>
  );
};

export default Display1;
