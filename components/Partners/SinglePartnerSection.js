import React from "react";
import SectionContainer from "../Utils/SectionContainer";
import Image from "next/image";
import { H3, P } from "../Typography";
import urlFor from "@/lib/urlFor";

const SinglePartnerSection = ({
  name,
  desc,
  img,
  interestRate,
  commissionRate,
  className,
}) => {
  return (
    <div className={`flex justify-center flex-col items-center ${className}`}>
      <Image
        className="saturate-0 hover:saturate-100 h-fit max-h-[100px]"
        src={urlFor(img).url()}
        alt="partner logo"
        width={300}
        height={350}
      />
      <H3 className="mt-12 mb-8 text-center">{name}</H3>
      <P className="text-center w-[80%]">{desc}</P>

      <div
        className={`flex  ${
          (commissionRate || interestRate) && "mt-12"
        } gap-8 justify-center`}
      >
        {commissionRate && (
          <div className="flex items-center gap-2">
            <P className="!text-[52px] font-bold text-yellow ">0.35%</P>
            <P className="leading-5">
              Commission
              <br /> Rate
            </P>
          </div>
        )}
        {interestRate && (
          <div className="flex items-center gap-2">
            <P className="!text-[52px] font-bold text-yellow ">14%</P>
            <P className="leading-5">
              Interest Rate on
              <br /> Margin Loan
            </P>
          </div>
        )}
      </div>
    </div>
  );
};

export default SinglePartnerSection;
