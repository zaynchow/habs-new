import React from "react";
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"], weight: ["500", "600"] });

const Display2 = ({ children }) => {
  return (
    <h2
      className={`${lora.className} md:text-[40px] text-[35px] font-medium tracking-[0.5px] md:leading-[48px] leading-[42px] text-center`}
    >
      {children}
    </h2>
  );
};

export default Display2;
