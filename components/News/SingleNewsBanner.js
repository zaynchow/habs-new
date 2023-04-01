import React from "react";
import { H3, P } from "../Typography";
import Button from "../Button/Button";
import Image from "next/image";
import urlFor from "@/lib/urlFor";

const SingleNewsBanner = ({ img, title, summary, slug }) => {
  return (
    <div className=" w-full border-solid border-2 border-black">
      <div className="h-[200px] bg-blue relative border-solid border-b-2 border-black">
        <Image src={urlFor(img).url()} fill />
      </div>
      <div className="h-[55%] p-5 pb-8">
        <div className="mb-6">
          <P className="!text-left text-yellow">Article</P>
          <H3 className="!text-left  mt-3 mb-2 font-semibold !text-[22px] leading-7">
            {title}
          </H3>
          <P className="!text-left !block text-[14px]">
            {summary.split(/\s+/).slice(0, 15).join(" ") + "..."}
          </P>
        </div>
        <Button
          bgColor="bg-transparent"
          className="text-left !p-0"
          arrow
          link={`http://localhost:3000/news/${slug.current}`}
        >
          Read More
        </Button>
      </div>
    </div>
  );
};

export default SingleNewsBanner;
