import React from "react";

const SectionContainer = (props) => {
  return (
    <div
      className={` box-border mx-[24px] lg:max-w-[980px] md:mx-auto mb-[100px] relative ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default SectionContainer;
