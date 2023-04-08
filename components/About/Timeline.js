import React from "react";
import SectionContainer from "../Utils/SectionContainer";
import { H2, Subtitle, H4, P } from "../Typography";
import Image from "next/image";
import YoutubeEmbed from "../Utils/YoutubeEmbed";

const Timeline = () => {
  return (
    <SectionContainer className="mb-[150px]">
      <H2>Take a look at our progress</H2>
      <Subtitle>
        Empowering Investors to Achieve Greater Returns through Professional
        Securities Brokerage
      </Subtitle>
      <div className="mt-16 w-full relative mx-auto flex ">
        <div className="relative md:flex flex-col justify-between mr-2 items-end hidden">
          <P className={"md:!text-[30px] text-[20px] relative !top-[5px]"}>
            1956
          </P>
          <P className={"md:!text-[30px] text-[20px] relative !bottom-[5px]"}>
            2023
          </P>
        </div>
        <div className="relative">
          <div className="absolute md:w-[30px] md:h-[30px] w-[40px] h-[40px] rounded-[50%] bg-yellow top-0 left-0 z-50 flex items-center justify-center">
            <p className="text-[12px] font-semibold md:hidden">1956</p>
          </div>
          <div className="absolute md:w-[30px] md:h-[30px] w-[40px] h-[40px] rounded-[50%] bg-yellow bottom-0 left-0 z-50 flex items-center justify-center">
            <p className="text-[12px] font-semibold md:hidden">2023</p>
          </div>
          <div className="absolute md:left-[14px] left-[19px] top-2 w-[4px] h-[98%] bg-yellow origin-top"></div>
        </div>
        <ul className="w-full flex flex-col items-start justify-between md:!pl-16 pl-14">
          <li className="mb-20 w-full">
            <div className="flex md:flex-row flex-col items-start md:h-[300px] h-[400px] relative md:gap-12 gap-6">
              <div className="md:w-1/2 w-full h-full relative">
                <Image fill src={"/DSE.png"} />
              </div>

              <div className="md:w-1/2 ">
                <H4 className={"!text-left mb-2 underline "}>
                  Establishment of HABSL
                </H4>
                <P>
                  Empowering investors to achieve greater returns through
                  professional brokerage services.
                </P>
              </div>
            </div>
          </li>
          <li className="w-full ">
            <div className="flex items-start md:flex-row flex-col relative md:gap-12 gap-6">
              <div className="md:w-1/2 w-full h-full relative">
                <YoutubeEmbed embedId="rokGy0huYEA" />
              </div>

              <div className="md:w-1/2 ">
                <H4 className={"!text-left mb-2 underline"}>
                  Current Year Video
                </H4>
                <P>
                  Empowering investors to achieve greater returns through
                  professional brokerage services.
                </P>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </SectionContainer>
  );
};

export default Timeline;
