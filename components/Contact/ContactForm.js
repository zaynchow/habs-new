import React from "react";
import SectionContainer from "../Utils/SectionContainer";
import { H3 } from "../Typography";
import Button from "../Utils/Button";
import { TextField } from "@mui/material";
import { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const ContactForm = () => {
  const [fName, setFName] = useState("");
  const [phNum, setPhNum] = useState("");
  const [email, setEmail] = useState("");
  const [accNum, setAccNum] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = { fName, phNum, email, accNum, message };
    fetch("api/hello", { method: "POST", body: JSON.stringify(formData) });
  };

  return (
    <SectionContainer className="md:h-[500px] md:flex">
      <div className="md:w-1/3 bg-blue border-solid border-2 border-black inline-block p-8 pt-12 h-full">
        <H3 className="text-white text-[35px] !leading-[38px] font-bold mb-9">
          Send us a message or call us for any questions.
        </H3>
        <Button bgColor="bg-yellow" link="/" arrow>
          Call Now
        </Button>
      </div>
      <form
        className="md:w-2/3 border-solid border-2 border-black !box-border h-full md:p-12 px-4 py-8"
        onSubmit={submitHandler}
      >
        <div className="gap-4 flex">
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            className="!w-full"
            required
            onChange={(e) => setFName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            className="!w-full"
            required
            onChange={(e) => setPhNum(e.target.value)}
          />
        </div>
        <div className="gap-4 flex md:flex-row flex-col mt-6">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="!w-full"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Account Number"
            variant="outlined"
            className="!w-full"
            onChange={(e) => setAccNum(e.target.value)}
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
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="gap-4 flex mt-6">
          <button
            type="submit"
            className={`md:pl-9 md:py-2.5 pl-6 py-2 
             md:pr-7 pr-1 bg-black
             font-jakarta font-medium rounded-[50px] tracking-[0.5px] w-[fit-content] inline-block 
             text-white
            `}
          >
            Submit
            <ArrowRightAltIcon className={`ml-2 text-[30px] text-white`} />
          </button>
        </div>
      </form>
    </SectionContainer>
  );
};

export default ContactForm;
