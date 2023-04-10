"use client";
import SectionContainer from "./Utils/SectionContainer";
import urlFor from "@/lib/urlFor";
import Image from "next/image";
import { A } from "./Typography";

const LogoGrid = ({ data, className }) => {
  return (
    <SectionContainer className={` ${className}`}>
      <div className="grid grid-rows-3 grid-cols-2 md:grid-rows-2 md:grid-cols-3 md:gap-x-4 gap-16 md:gap-y-16 grid-flow-row">
        {data.slice(0, 6).map((obj, i) => (
          <A href={`/partners/#${obj?.slug?.current}`} key={i}>
            <Image
              className="saturate-0 hover:saturate-100 h-fit max-h-[100px]"
              src={urlFor(obj.image).url()}
              alt="partner logo"
              width={250}
              height={300}
              key={i}
              onClick={() => {
                setTimeout(() => {
                  let element = document.querySelectorAll(
                    `#${obj?.slug?.current}`
                  )[0];
                  element?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }, 500);
                return clearTimeout();
              }}
            />
          </A>
        ))}
      </div>
    </SectionContainer>
  );
};

export default LogoGrid;
