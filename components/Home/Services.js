"use client";
import React, { useState } from "react";
import SectionContainer from "../Utils/SectionContainer";
import H2 from "../Typography/H2";
import P from "../Typography/P";
import H3 from "../Typography/H3";
import Button from "../Button/Button";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PortableText from "react-portable-text";

const Services = ({ data }) => {
  const [option, setOption] = useState(data[0]);

  return (
    <SectionContainer className="bg-blue pt-9 md:px-[80px] pb-16">
      <H2 className="text-white px-6">Services to maximize your investments</H2>
      <div className="hidden md:block">
        <div className="flex w-full justify-between text-center mt-9">
          {data.map((obj, index) => (
            <div className="flex flex-col w-full" key={index}>
              <P
                className={"font-regular text-white cursor-pointer"}
                onClick={() => {
                  setOption(obj);
                }}
              >
                {obj.service_name}
              </P>
            </div>
          ))}
        </div>
        <div className="flex w-full justify-between mt-2">
          {data.map((obj, index) => (
            <hr
              className={`${
                obj.service_name == option.service_name
                  ? "text-yellow"
                  : "text-white"
              } w-1/4 border-solid border-2 transition`}
              key={index}
            />
          ))}
        </div>
        <div className="flex items-center pt-10 relative">
          <div className="w-1/2 ">
            <H3 className=" text-left text-white ">{option.service_name}</H3>
            <PortableText
              className="py-6 pr-8"
              content={option.service_short_desc[0]}
              serializers={{
                normal: ({ children }) => (
                  <P className={"text-white"}>{children}</P>
                ),
                ul: ({ children }) => (
                  <ul className="columns-2 mt-3">{children}</ul>
                ),
                break: (props) => <br />,
                li: ({ children }) => (
                  <li className="before:content-['-'] leading-[28px]">
                    {children}
                  </li>
                ),
              }}
            />

            <Button className={"bg-yellow "} link="/" arrow>
              Learn More
            </Button>
          </div>
          <div className="w-1/2 relative">
            <Image
              className="!relative"
              src={urlFor(option.service_img).url()}
              fill
              alt="Service Image"
            />
          </div>
        </div>
      </div>
      <div className="md:hidden block px-[24px] mt-9">
        {data.map((obj, index) => (
          <Accordion
            className="!shadow-none !border-t-2 !border-white !border-solid !m-0 before:!h-0 !bg-blue text-white"
            key={index}
          >
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              expandIcon={<ExpandMoreIcon className="text-white" />}
              className="!p-0"
            >
              <P className="!m-0 !text-white">{obj.service_name}</P>
            </AccordionSummary>
            <AccordionDetails className="px-0">
              <Image
                className="!relative"
                src={urlFor(obj.service_img).url()}
                fill
                alt="Service Image"
              />
              <PortableText
                className="py-6 "
                content={obj.service_short_desc[0]}
                serializers={{
                  normal: ({ children }) => (
                    <P className={"text-white"}>{children}</P>
                  ),
                  ul: ({ children }) => (
                    <ul className="columns-2 mt-3">{children}</ul>
                  ),
                  break: (props) => <br />,
                  li: ({ children }) => (
                    <li className="before:content-['-'] leading-[28px]">
                      {children}
                    </li>
                  ),
                }}
              />
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Services;




