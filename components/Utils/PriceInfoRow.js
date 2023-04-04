import React from "react";
import SectionContainer from "./SectionContainer";
import { H3, P, A } from "../Typography";
import Button from "../Button/Button";

const PriceInfoRow = ({
  className,
  title,
  priceNotConfirmed,
  period,
  price,
}) => {
  return (
    <div
      className={`md:h-24 border-t-2 border-solid border-black font-jakarta flex md:items-center items-start py-6 md:pt-0 justify-between max-w-[980px] mx-auto ${className}`}
    >
      <H3 className="md:auto max-w-[50%]">{title}</H3>
      {priceNotConfirmed ? (
        <A className="md:text-[30px] font-medium text-xl" href="/contact">
          Contact Us
        </A>
      ) : (
        <P className={"font-medium"}>
          <span className="text-yellow md:text-3xl text-xl">BDT </span>
          <span className="md:text-3xl text-xl">{price}</span>
          <br className="md:hidden block" />
          <span className="text-sm"> ({period})</span>
        </P>
      )}
    </div>
  );
};

export default PriceInfoRow;
