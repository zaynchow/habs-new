import React from "react";
import Display2 from "../Typography/Display2";
import P from "../Typography/P";
import SectionContainer from "../Utils/SectionContainer";
import { client } from "../../lib/sanity.client";
import { groq } from "next-sanity";

const Counter = ({ data }) => {
  const { book_size, num_of_clients, years_in_brokerage, num_of_branches } =
    data;
  return (
    <SectionContainer className="pb-[50px]">
      <Display2>
        A generation of ownership built <br /> on HABSL
      </Display2>
      <div className="flex justify-center flex-col items-center ">
        <P className="inline-block mt-9 px-6 py-6 md:text-[40px] text-[28px] font-semibold md:tracking-[4.5px] tracking-[1.5px] border-2 border-black border-solid">
          <span className="text-yellow">
            {`${Math.floor(book_size / 1000000).toLocaleString()}`}
          </span>
          {`${((book_size % 1000000) + 1000000)
            .toLocaleString()
            .toString()
            .substr(1, 10)} +`}
        </P>
        <P className="mt-1">Current client book size in BDT</P>
        <div className="flex md:flex-row flex-col gap-10 md:mt-20 mt-10 ">
          <div className="flex flex-col  items-center">
            <P className="inline-block font-medium tracking-[0] md:text-[40px] text-[32px] ">
              {`${years_in_brokerage}+`}
            </P>
            <P className="mt-3">Years in Brokerage</P>
          </div>
          <div className="flex flex-col  items-center">
            <P className="inline-block  md:text-[40px] text-[32px]  font-medium tracking-[0]  mx-[125px]">
              {num_of_branches < 10 ? "0" + num_of_branches : num_of_branches}
            </P>
            <P className="mt-3">Branches</P>
          </div>
          <div className="flex flex-col  items-center">
            <P className="inline-block font-medium tracking-[0] md:text-[40px] text-[32px] ">
              {`${num_of_clients}+`}
            </P>
            <P className="mt-3">Clients served</P>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Counter;
