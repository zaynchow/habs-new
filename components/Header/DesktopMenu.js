import React from "react";
import Link from "next/link";
import { useState } from "react";
import { A, P } from "../Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "../Utils/Button";
import Image from "next/image";

const DesktopMenu = ({ data }) => {
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [showValueAddedServicesMenu, setShowValueAddedServicesMenu] =
    useState(false);
  return (
    <>
      <nav className="flex items-center">
        <Link href="/" className="z-[5]">
          <Image
            src="/logos/logo.svg"
            width="80"
            height="80"
            alt="HABSL Logo"
          />
        </Link>
        <div className="hidden md:block">
          <ul className="flex items-center">
            <li className="pl-8 ">
              <A href="/">Home</A>
            </li>
            <li className="pl-8">
              <A href="/about">About Us</A>
            </li>
            <li
              className="pl-8 py-2"
              onMouseEnter={() => {
                setShowServicesMenu(true);
              }}
              onMouseLeave={() => {
                setShowServicesMenu(false);
              }}
            >
              <A href={"/services"} className={"block"}>
                Services
                <ExpandMoreIcon />
              </A>
              {showServicesMenu && (
                <div className="absolute bg-white shadow-[0px_0px_40px_3px_rgba(0,0,0,0.1)]  mt-2 rounded-[10px] z-10 ">
                  <ul className="grid grid-cols-2 p-6 gap-y-4 gap-x-6">
                    {data.servicesData.map((obj, idx) => (
                      <li>
                        <A
                          href={`/services/#${obj?.slug?.current}`}
                          className={"text-[28px] !leading-8 "}
                          onClick={() => {
                            setShowServicesMenu(false);
                            setTimeout(() => {
                              let element = document.querySelectorAll(
                                `#${obj?.slug?.current}`
                              )[0];
                              element?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            }, 750);
                          }}
                        >
                          {obj.service_name}
                        </A>
                      </li>
                    ))}
                  </ul>
                  <div className="py-4 px-3 bg-blue flex justify-between items-center rounded-b-[10px] gap-8">
                    <P className="text-white font-semibold">Fees & Charges</P>
                    <Button link="/" bgColor="bg-yellow">
                      Learn More
                    </Button>
                  </div>
                </div>
              )}
            </li>
            <li className="pl-8 ">
              <A href="/services/value-added-services">
                VAS <ExpandMoreIcon />
              </A>
              {showValueAddedServicesMenu && (
                <div className="absolute bg-white shadow-[0px_0px_40px_3px_rgba(0,0,0,0.1)] p-6 mt-2 rounded-xl z-10">
                  <ul className="columns-2">
                    {data.valueAddedServicesData.map((obj, idx) => (
                      <li>
                        <A
                          href={`/services/value-added-services/#${obj?.slug?.current}`}
                          className={"text-[28px] !leading-8 "}
                          onClick={() => {
                            setShowServicesMenu(false);
                            setTimeout(() => {
                              let element = document.querySelectorAll(
                                `#${obj?.slug?.current}`
                              )[0];
                              element?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            }, 750);
                          }}
                        >
                          {obj.service_name}
                        </A>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            <li className="pl-8 ">
              <A href="/partners">Our Partners</A>
            </li>
            <li className="pl-8">
              <A href="/news">News</A>
            </li>
            <li className="pl-8">
              <A href="/contact">Contact</A>
            </li>
          </ul>
        </div>
      </nav>
      <div className="hidden md:block">
        <a href="/sign-in" className="mr-8 font-jakarta tracking-[0.5px]">
          Sign In
        </a>
        <Button link="/" outline={false} bgColor="bg-yellow">
          Join Us
        </Button>
      </div>
    </>
  );
};

export default DesktopMenu;
