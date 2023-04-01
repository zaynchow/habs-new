import React from "react";
const P = ({ className, children, onClick }) => {
  return (
    <p
      className={`font-jakarta md:text-[16px] text-[14px] font-regular leading-[24px] inline-block ${className}`}
      onClick={onClick}
      style={{ wordSpacing: "3px" }}
    >
      {children}
    </p>
  );
};

export default P;
