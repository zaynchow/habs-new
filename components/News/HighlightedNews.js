import React from "react";
import { Subtitle, H2, P } from "../Typography";
import SectionContainer from "../Utils/SectionContainer";
import Button from "../Button/Button";
import Image from "next/image";

const HighlightedNews = () => {
  return (
    <SectionContainer className="bg-blue h-[420px] py-10 px-8 flex items-center gap-2">
      <div className="w-1/2 ">
        <div className="mb-10">
          <Subtitle className="!text-left text-yellow">Article</Subtitle>
          <H2 className="!text-left text-white mt-3 mb-2">
            Engage with investors more than ever
          </H2>
          <P className="!text-left !block text-white ">By Zayn Chowdhury</P>
        </div>
        <Button bgColor="bg-yellow" arrow link="/">
          Read More
        </Button>
      </div>
      <div className="w-1/2 bg-white h-full relative">
        <Image src="/DSE.png" fill />
      </div>
    </SectionContainer>
  );
};

export default HighlightedNews;
