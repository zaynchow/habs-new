import React from "react";

const SectionContainer = (props) => {
  return (
    <div
      className={` box-border px-[24px] md:max-w-[980px] md:mx-auto md:mb-[150px] mb-[100px] relative ${props.className}`}
      id={props.id}
    >
      {props.children}
    </div>
  );
};

export default SectionContainer;
