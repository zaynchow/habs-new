"use client";
import SectionContainer from "../Utils/SectionContainer";
import { P, H2, Subtitle } from "../Typography";
import SwiperButtons from "../Home/SwiperButtons";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import PortableText from "react-portable-text";

import { useState, useEffect } from "react";

import "swiper/swiper-bundle.min.css";
const Management = ({ data }) => {
  const [currSlideIdx, setCurrSlideIdx] = useState(0);
  const [progressBar, setProgressBar] = useState(1 / 3);

  useEffect(() => {
    const timer = setInterval(() => {
      currSlideIdx + 1 == data.length
        ? setCurrSlideIdx(0)
        : setCurrSlideIdx((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  });

  useEffect(() => {
    setProgressBar((currSlideIdx + 1) / data.length);
  }, [currSlideIdx]);

  return (
    <>
      <H2>Some words from our team</H2>
      <Subtitle>
        Empowering Investors to Achieve Greater Returns through Professional
        Securities Brokerage
      </Subtitle>
      <SectionContainer className="py-16 px-12 bg-blue mt-16">
        <div className="md:flex md:h-[520px] w-full">
          <div className="md:w-2/5 relative">
            <div className="md:h-[85%] h-[360px] relative bg-black">
              <Image src={urlFor(data[currSlideIdx].image).url()} fill />
            </div>
            <div className="md:h-[15%] py-1 md:py-0 flex items-center bg-white pl-2">
              <P className="">
                <span className="font-semibold ">
                  {data[currSlideIdx].name}
                </span>
                <br />
                {data[currSlideIdx].designation}
              </P>
            </div>
          </div>
          <div className="md:w-3/5 flex flex-col justify-between md:ml-12 md:mt-0 mt-6 swiper-no-swiping ">
            <PortableText
              content={data[currSlideIdx].description}
              className="text-white md:h-full h-[500px]"
              serializers={{ break: (props) => <br /> }}
            />
            <SwiperButtons
              dark
              className={"!items-start md:m-0 mt-6"}
              progress={progressBar}
              onClickNext={() => {
                currSlideIdx + 1 == data.length
                  ? setCurrSlideIdx(0)
                  : setCurrSlideIdx((prev) => prev + 1);
              }}
              onClickPrev={() => {
                currSlideIdx - 1 == -1
                  ? setCurrSlideIdx(data.length - 1)
                  : setCurrSlideIdx((prev) => prev - 1);
              }}
            />
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default Management;
