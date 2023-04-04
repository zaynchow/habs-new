import React from "react";
import SectionContainer from "./Utils/SectionContainer";
import H4 from "./Typography/H4";
import Button from "./Button/Button";

const ContactUsBanner = () => {
  return (
    <SectionContainer className="bg-yellow py-9 md:px-0 px-6 text-center">
      <H4 className="!font-semibold leading-[28px] md:leading-normal">
        Any queries regarding your investment? <br />
        <span className="mt-4 inline-block md:mt-0">
          Let's get you an expert!
        </span>
      </H4>
      <Button
        bgColor={"bg-blue"}
        link="/contact"
        arrow
        className={"text-white md:mt-9 mt-6"}
      >
        Contact Us
      </Button>
    </SectionContainer>
  );
};

export default ContactUsBanner;
