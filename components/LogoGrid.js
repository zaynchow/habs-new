import React from "react";
import SectionContainer from "./Utils/SectionContainer";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import Image from "next/image";

const LogoGrid = ({ data, className }) => {
  return (
    <SectionContainer className={` ${className}`}>
      <div className="grid grid-rows-3 grid-cols-2 md:grid-rows-2 md:grid-cols-3 md:gap-x-4 gap-16 md:gap-y-16 ">
        {data.slice(0, 6).map((obj, i) => (
          <Image
            className="saturate-0 hover:saturate-100 h-fit max-h-[100px]"
            src={urlFor(obj.image).url()}
            alt="partner logo"
            width={250}
            height={300}
            key={i}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default LogoGrid;
