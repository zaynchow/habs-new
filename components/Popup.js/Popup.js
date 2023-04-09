import React from "react";
import Image from "next/image";
import { P } from "../Typography";
import Button from "../Utils/Button";
import CloseIcon from "@mui/icons-material/Close";

const Popup = ({ setPopupVisibility }) => {
  return (
    <div className="md:w-[900px] w-full md:h-[450px]  bg-yellow mx-auto relative flex items-center md:flex-row flex-col">
      <div className="md:w-1/2 w-full relative md:h-full h-[30vh] bg-yellow ">
        <Image src="/gift.png" fill className="hidden md:block" />
        <Image src="/gift-mob.png" fill className="md:hidden block" />
      </div>
      <div className="md:w-1/2 relative md:h-[450px] max-h-[60vh] flex flex-col items-start justify-center md:pr-8 p-6 pt-4">
        <h2 className="inline-block text-left mb-4">
          <span className="md:text-[14px] text-[1.5vh]">Get Upto</span>
          <br />
          <span className="font-lora font-semibold md:text-[85px] text-[7vh] md:leading-[90px] leading-[65px]">
            50% OFF
          </span>
          <br />
          <span className="md:text-[50px] text-[3vh] md:leading-[0.95] leading-[32px]">
            In Commissions
          </span>
        </h2>
        <P className="md:text-inherit text-[1.6vh]">
          Become a part of Bangladesh’s first customized client reward program.
          A step towards acknowledging the valuable contributions of our
          respected clients.
        </P>
        <Button link="/contact" bgColor={"bg-blue"} arrow className="mt-6">
          Contact Us To Enroll
        </Button>
      </div>
      <CloseIcon
        className="absolute right-[8px] top-[8px] cursor-pointer md:text-black text-white"
        onClick={() => setPopupVisibility(false)}
      />
    </div>
  );
};

export default Popup;
