import { useSwiper } from "swiper/react";
import Image from "next/image";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const SwiperButtonNext = ({
  progress,
  className,
  dark,
  onClickNext,
  onClickPrev,
}) => {
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

      <div className="bg-black relative h-1 w-[300px]">
        <div
          className="bg-yellow h-1 transition-all"
          style={{ width: `${300 * progress}px` }}
        ></div>
      </div>
    </div>
  );
};

export default SwiperButtonNext;
