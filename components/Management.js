"use client";
import SectionContainer from "./Utils/SectionContainer";
import { P } from "./Typography";
import SwiperButtons from "./Home/SwiperButtons";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import PortableText from "react-portable-text";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper";
import { useState } from "react";

import "swiper/swiper-bundle.min.css";
const Management = ({ data }) => {
  const [progressBar, setProgressBar] = useState(1 / 3);
  return (
    <SectionContainer className="py-16 px-12 bg-blue  h-[650px] ">
      <Swiper
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, EffectFade, Autoplay]}
        onSlideChange={(swiperCore) => {
          const { realIndex } = swiperCore;
          setProgressBar((realIndex + 1) / data.length);
        }}
      >
        {data.map((obj, index) => (
          <SwiperSlide key={index} className="flex h-[520px]">
            <div className="w-2/5 relative">
              <div className="h-[85%] relative bg-black">
                <Image src={urlFor(obj.image).url()} fill />
                {console.log(obj.image)}
              </div>
              <div className="h-[15%] flex items-center bg-white pl-2">
                <P className="">
                  <span className="font-semibold ">{obj.name}</span>
                  <br />
                  {obj.designation}
                </P>
              </div>
            </div>
            <div className="w-3/5 flex flex-col justify-between ml-12">
              <PortableText
                content={obj.description}
                className="text-white"
                serializers={{ break: (props) => <br /> }}
              />
              <div>
                <SwiperButtons
                  className={"!items-start"}
                  progress={progressBar}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionContainer>
  );
};

export default Management;
