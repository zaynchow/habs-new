import React from "react";
import SectionContainer from "../Utils/SectionContainer";
import { H3 } from "../Typography";
import Button from "../Button/Button";
import { TextField } from "@mui/material";

const ContactForm = () => {
  return (
    <SectionContainer className="h-[500px] flex">
      <div className="w-1/3 bg-blue border-solid border-2 border-black inline-block p-8 pt-12 h-full">
        <H3 className="text-white text-[35px] !leading-[38px] font-bold mb-9">
          Send us a message or call us for any questions.
        </H3>
        <Button bgColor="bg-yellow" link="/" arrow>
          Call Now
        </Button>
      </div>
      <div className="w-2/3 border-solid border-2 border-black !box-border h-full p-12  ">
        <div className="gap-4 flex">
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            className="!w-full"
            required
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            className="!w-full"
            required
          />
        </div>
        <div className="gap-4 flex mt-6">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="!w-full"
            required
          />
          <TextField
            id="outlined-basic"
            label="Account Number"
            variant="outlined"
            className="!w-full"
          />
        </div>
        <div className="gap-4 flex mt-6">
          <TextField
            id="outlined-basic"
            label="Message"
            variant="outlined"
            className="!w-full !outline-blue"
            multiline
            minRows={5}
          />
        </div>
        <div className="gap-4 flex mt-6">
          <Button link={"/"} bgColor="bg-black" arrow>
            Submit
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactForm;
