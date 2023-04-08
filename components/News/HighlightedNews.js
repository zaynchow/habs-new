import React from "react";
import { Subtitle, H2, P } from "../Typography";
import SectionContainer from "../Utils/SectionContainer";
import Button from "../Utils/Button";
import Image from "next/image";

const HighlightedNews = () => {
  return (
    <SectionContainer className="bg-blue md:h-[420px] py-10 px-8 flex items-center gap-2">
      <div className="md:w-1/2 ">
        <div className="mb-10">
          <Subtitle className="!text-left text-yellow text-[16px]">
            HIGHLIGHT
          </Subtitle>
          <H2 className="!text-left text-white text-[40px] md:inherit leading-[46px] mt-3 md:mb-2 mb-3 uppercase">
            Run tender offers with full control
          </H2>
          <P className="!text-left !block text-white ">By Zayn Chowdhury</P>
        </div>
        <Button bgColor="bg-yellow" arrow link="/">
          Read More
        </Button>
      </div>
      <div className="md:w-1/2 md:block hidden bg-white h-full relative">
        <Image src="/DSE.png" fill />
      </div>
    </SectionContainer>
  );
};

export default HighlightedNews;
