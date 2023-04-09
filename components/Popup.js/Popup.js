import React from "react";
import Image from "next/image";
import { P } from "../Typography";
import Button from "../Utils/Button";
import CloseIcon from "@mui/icons-material/Close";

const Popup = ({ setPopupVisibility }) => {
  return (
    <div className="md:w-[900px] w-[90vw] md:h-[450px] h-[90vh] bg-yellow mx-auto relative flex items-center md:flex-row flex-col">
      <div className="md:w-1/2 w-full relative h-full bg-yellow ">
        <Image src="/gift.png" fill className="hidden md:block" />
        <Image src="/gift-mob.png" fill className="md:hidden block" />
      </div>
      <div className="md:w-1/2 relative h-[450px] flex flex-col items-start justify-center md:pr-8 p-6">
        <h2 className="inline-block text-left mb-4">
          <span className="md:text-[14px] text-[12px]">Get Upto</span>
          <br />
          <span className="font-lora font-semibold md:text-[85px] !text-[65px] md:leading-[90px] leading-[65px]">
            50% OFF
          </span>
          <br />
          <span className="md:text-[50px] text-[30px] md:leading-[0.95] leading-[32px]">
            In Commissions
          </span>
        </h2>
        <P>
          Become a part of Bangladesh’s first customized client reward program.
          A step towards acknowledging the valuable contributions of our
          respected clients.
        </P>
        <Button link="/contact" bgColor={"bg-blue"} arrow className="mt-6">
          Contact Us To Enroll
        </Button>
      </div>
      <CloseIcon
        className="absolute right-[8px] top-[8px] cursor-pointer"
        onClick={() => setPopupVisibility(false)}
      />
    </div>
  );
};

export default Popup;
