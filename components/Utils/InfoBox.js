import React from "react";
import { P, H4 } from "../Typography";

const InfoBox = ({ title, address, phone, children }) => {
  return (
    <div className="border-2 border-solid border-black pt-[40px] pb-[130px] px-[20px]">
      <H4 className="!font-jakarta !text-left underline text-[23px] mb-4">
        {title}
      </H4>
       {children}
    </div>
  );
};

export default InfoBox;
