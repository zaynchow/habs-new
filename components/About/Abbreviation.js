"use client";

import React from "react";
import SectionContainer from "../Utils/SectionContainer";
import { H2, P } from "../Typography";
import { useState, useEffect } from "react";

const descriptions = [
  {
    letter: "H",
    title: "Honest",
    desc: "We are honest in providing the correct information to maximize clients' wealth",
  },
  {
    letter: "A",
    title: "Advanced",
    desc: "We have a world class trading environment in all branches with the technology",
  },
  {
    letter: "B",
    title: "Bold",
    desc: "We have a bold pool of staff who are the most efficient in trade execution within the industry",
  },
  {
    letter: "S",
    title: "Strong",
    desc: "Our strong relationship with our clients enables us to provide customized service",
  },
  {
    letter: "L",
    title: "Long term customer value",
    desc: "We work tirelessly to focus on our clients long term value enhancement",
  },
];

const Abbreviation = () => {
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrIndex((prev) => (currIndex == 4 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  });

  return (
    <SectionContainer className=" bg-blue flex justify-center flex-col items-center pb-[50px]">
      <h2 className="font-lora md:text-[150px] text-[80px] !font-light !tracking-wider  !leading-0 !pt-0 !mt-0">
        {descriptions.map((obj, idx) => (
          <span
            className={`cursor-pointer ${
              idx == currIndex ? "text-white " : "text-yellow"
            }`}
          >
            {obj.letter}
          </span>
        ))}
      </h2>
      <P
        className={
          "text-white  md:!text-[30px] text-[20px] md:mb-6 mb-2 underline "
        }
      >
        {descriptions[currIndex].title}
      </P>
      <P className="block text-white text-center mx-2">
        {descriptions[currIndex].desc}
      </P>
    </SectionContainer>
  );
};

export default Abbreviation;
