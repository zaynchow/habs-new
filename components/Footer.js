import React from "react";
import { P, A } from "./Typography";
import SectionContainer from "./Utils/SectionContainer";
import Image from "next/image";
import SocialIcons from "./Utils/SocialIcons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-blue pt-16 pb-4">
      <SectionContainer className="!mb-0">
        <div>
          <div className="flex md:flex-row flex-col gap-8 pb-20 justify-between">
            <div className="md:max-w-[240px]">
              <Link href="/">
                <Image
                  src="/logos/logo.svg"
                  width="120"
                  height="120"
                  alt="HABSL Logo"
                />
              </Link>
              <P className="text-[14px] text-white  mt-4">
                Haji Ahmad Brothers Securities Limited is one of the found
                companies in Bangladesh.
              </P>
            </div>
            <div className="max-w-[280px]">
              <P className="text-[20px] text-white mb-4 font-semibold ">
                Office
              </P>
              <br />
              <P className="text-white ">
                Uday Tower (6th floor), 57-57/A, Gulshan Avenue-1, Dhaka-1212
              </P>
              <br />
              <A
                className="text-white underline mt-3"
                href="mailto:information@habsl.net"
              >
                information@habsl.net
              </A>
              <br />
              <A className="text-white mt-3" href="tel:+8801844485548">
                +880 1844 485548
              </A>
              <br />
            </div>
            <div>
              <P className=" text-[20px] text-white mb-4 font-semibold ">
                Links
              </P>
              <br />
              <A className="text-white" href="/">
                Home
              </A>
              <br />
              <A className="text-white mt-3" href="/about">
                About
              </A>
              <br />
              <A className="text-white mt-3" href="/services">
                Services
              </A>
              <br />
              <A className="text-white mt-3" href="/partners">
                Our Partners
              </A>
              <br />
              <A className="text-white mt-3 " href="/contact">
                Contact
              </A>
              <br />
            </div>
            <div>
              <P className=" text-[20px] text-white mb-4 font-semibold ">
                Socials
              </P>
              <div className="flex gap-2">
                <SocialIcons className={"!w-[25px] !h-[25px] text-white"} />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <P className="md:text-[14px] text-[12px] text-white">
              HABSL Membership details: TREC # 041, Dhaka Stock Exchange Ltd.
              Sec Reg No. 3.1/DSE-41/2006/127
            </P>
            <P className="md:text-[14px] text-[12px] text-white">
              © Copyright HABS LTD 2023. All Rights Reserved.
            </P>
            <P className="md:text-[14px] text-[12px] text-white">
              Designed & Developed by{" "}
              <a className="underline" href="https://zaynchowdhury.com">
                Zayn Chowdhury
              </a>
            </P>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Footer;
