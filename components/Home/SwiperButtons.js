"use client";
import { useSwiper } from "swiper/react";
import Image from "next/image";
import { useRef } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const SwiperButtonNext = ({
  progress,
  className,
  dark,
  onClickNext,
  onClickPrev,
}) => {
  const sliderRef = useRef();

  return (
    <div className={`flex flex-col items-center gap-6 ${className}`}>
      <div className="flex gap-3">
        <button
          className={` border-solid ${
            dark ? "!border-white" : "!border-black"
          } border-2 rounded-[200px] w-12 h-12 rotate-180 flex justify-center cursor-pointer items-center prev`}
          onClick={onClickPrev}
        >
          <ArrowRightAltIcon
            className={`cursor-pointer ${dark ? "text-white" : "text-black"} `}
          />
        </button>
        <button
          className={` border-solid ${
            dark ? "!border-white" : "!border-black"
          } border-2 rounded-[200px] w-12 h-12 flex justify-center cursor-pointer items-center next`}
          onClick={onClickNext}
        >
          <ArrowRightAltIcon
            className={`cursor-pointer ${dark ? "text-white" : "text-black"} `}
          />
        </button>
      </div>

      <div
        className="bg-black relative h-1 md:w-[300px] w-full"
        ref={sliderRef}
      >
        <div
          className={`bg-yellow h-1 transition-all`}
          style={{ width: `${sliderRef.current?.clientWidth * progress}px` }}
        ></div>
      </div>
    </div>
  );
};

export default SwiperButtonNext;
