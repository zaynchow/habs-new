import React from "react";
import SectionContainer from "../Utils/SectionContainer";
import { P } from "../Typography";

const Intro = () => {
  return (
    <SectionContainer className="mt-6 !max-w-[580px]">
      <P className="text-left">
        Our mission at HABS Brokerage is to provide our clients with the highest
        level of service and expertise in the stock market. We strive to empower
        individuals and businesses to make informed financial decisions by
        providing them with access to the latest market research, analysis, and
        tools.
      </P>
    </SectionContainer>
  );
};

export default Intro;
