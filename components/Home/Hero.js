import React from "react";
import Display1 from "../Typography/Display1";
import Button from "../Button/Button";
import { Subtitle } from "../Typography";
import SectionContainer from "../Utils/SectionContainer";

const Hero = () => {
  return (
    <SectionContainer className="py-[150px]">
      {/* TODO: Adjust images */}
      {/* <Image
        src={"/jatiyo.png"}
        height={350}
        width={250}
        className="absolute"
      />
      <Image
        src={"/bull.png"}
        height={280}
        width={280}
        className="absolute right-0"
      /> */}
      <Display1 className="text-left lg:text-center md:max-w-[600px] md:mx-auto">
        Achieving financial
        <span className="text-yellow"> success</span>
      </Display1>
      <Subtitle className=" md:text-[20px] font-light md:mt-6 md:mb-9 my-6 tracking-[1.2px]  md:!text-center !text-left ">
        Your trusted investment partner since 1956
      </Subtitle>
      <div className="md:text-center flex flex-col md:block ">
        <Button
          link="/"
          bgColor="bg-black"
          outline={true}
          className="mr-4 text-white"
        >
          Join Us
        </Button>
        <Button
          link="/"
          bgColor="transparent"
          outline={true}
          className={"px-9 mt-2 md:mt-0"}
        >
          See Services
        </Button>
      </div>
    </SectionContainer>
  );
};

export default Hero;

