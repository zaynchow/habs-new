import React from "react";
import SectionContainer from "./Utils/SectionContainer";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import Image from "next/image";

const LogoGrid = ({ data }) => {
  return (
    <SectionContainer className="pb-[50px]">
      <div className="flex justify-between gap-x-4 items-center">
        {data.slice(3, 6).map((obj, i) => (
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
      <div className="flex justify-between mt-12 gap-x-4 items-center relative">
        {data.slice(0, 3).map((obj, i) => (
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
