import React from "react";

const SectionContainer = (props) => {
  return (
    <div
      className={` box-border mx-[24px] md:max-w-[980px] md:mx-auto mb-[150px] relative ${props.className}`}
      id={props.id}
    >
      {props.children}
    </div>
  );
};

export default SectionContainer;
