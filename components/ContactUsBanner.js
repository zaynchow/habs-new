import React from "react";
import SectionContainer from "./Utils/SectionContainer";
import H4 from "./Typography/H4";
import Button from "./Button/Button";

const ContactUsBanner = () => {
  return (
    <SectionContainer className="bg-yellow py-9 md:px-0 px-2 text-center">
      <H4>
        Any queries regarding your investment? <br />
        Let's get you an expert!
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
