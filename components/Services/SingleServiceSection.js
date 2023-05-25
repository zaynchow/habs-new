import React from "react";
import SectionContainer from "../Utils/SectionContainer";
import Image from "next/image";
import { A, H3, P } from "../Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PortableText from "react-portable-text";
import urlFor from "@/lib/urlFor";

const SingleServiceSection = ({
  image,
  reverse,
  title,
  desc,
  includeAccordions,
  accordions,
  id,
}) => {
  return (
    <SectionContainer
      className={`flex md:flex-row flex-col items-center justify-between ${
        reverse && "md:flex-row-reverse"
      }`}
      id={id}
    >
      <H3 className="font-medium !text-2xl inline-block md:hidden mb-6">
        {title}
      </H3>
      <Image
        src={urlFor(image).url()}
        width={500}
        height={400}
        className="md:max-w-[50%]"
        alt="Service Image"
      />
      <div className={`md:max-w-[50%] ${reverse ? "md:pr-10" : "md:pl-10"}`}>
        <H3 className="md:inline-block hidden font-semibold">{title}</H3>
        <div className="mt-4">
          <PortableText
            content={desc}
            serializers={{
              ul: ({ children }) => (
                <ul className="columns-1 mt-3">{children}</ul>
              ),
              link: ({ href, children }) => (
                <A href={href} className="text-yellow">
                  {children}
                </A>
              ),
              break: (props) => <br />,
              li: ({ children }) => (
                <li className="before:content-['-'] leading-[28px]">
                  {` ${children}`}
                </li>
              ),
            }}
          />
        </div>

        {includeAccordions &&
          accordions.map((obj, index) => (
            <Accordion
              className="!shadow-none  !border-b-2 !border-black !border-solid !m-0 before:!h-0 "
              key={index}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                expandIcon={<ExpandMoreIcon />}
                className="!p-0"
              >
                <P className="!m-0">{obj.accordion_title}</P>
              </AccordionSummary>
              <AccordionDetails>
                <PortableText
                  content={obj.accordion_desc}
                  serializers={{
                    ul: ({ children }) => (
                      <ul className="columns-1 mt-3">{children}</ul>
                    ),
                    link: ({ href, children }) => (
                      <A href={href} className="text-yellow">
                        {children}
                      </A>
                    ),
                    break: (props) => <br />,
                    li: ({ children }) => (
                      <li className="before:content-['-'] leading-[28px]">
                        {` ${children}`}
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

export default SingleServiceSection;
