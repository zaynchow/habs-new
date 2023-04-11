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
                <ExpandMoreIcon
                  className={`transition-all ${
                    showServicesMenu && "-rotate-180"
                  }`}
                />
              </A>
              {showServicesMenu && (
                <div className="absolute bg-white shadow-[0px_0px_40px_3px_rgba(0,0,0,0.1)]  mt-2 rounded-[10px] z-10 ">
                  <ul className="grid p-6 gap-y-4 gap-x-6">
                    {data.servicesData.map((obj, idx) => (
                      <li>
                        <A
                          href={`/services#${obj?.slug?.current}`}
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
                    <Button
                      link={`/services#fees`}
                      onClick={() => {
                        setShowServicesMenu(false);
                        setTimeout(() => {
                          let element = document.querySelectorAll(`#fees`)[0];
                          element?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }, 750);
                      }}
                      bgColor="bg-yellow"
                      className={"hover:text-white"}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              )}
            </li>
            <li
              className="pl-8 py-2"
              onMouseEnter={() => {
                setShowValueAddedServicesMenu(true);
              }}
              onMouseLeave={() => {
                setShowValueAddedServicesMenu(false);
              }}
            >
              <A href="/value-added-services" className={"block"}>
                VAS
                <ExpandMoreIcon
                  className={`transition-all ${
                    showValueAddedServicesMenu && "-rotate-180"
                  }`}
                />
              </A>
              {showValueAddedServicesMenu && (
                <div className="absolute bg-white shadow-[0px_0px_40px_3px_rgba(0,0,0,0.1)] mt-2 rounded-[10px] z-10">
                  <ul className="grid grid-cols-2 p-6 gap-y-4 gap-x-6">
                    {data.valueAddedServicesData.map((obj, idx) => (
                      <li>
                        <A
                          href={`/value-added-services/#${obj?.slug?.current}`}
                          className={"text-[28px] !leading-8 "}
                          onClick={() => {
                            setShowValueAddedServicesMenu(false);
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
                    <P className="text-white font-semibold">
                      For More Information
                    </P>
                    <Button
                      link="tel:+8801844485548"
                      bgColor="bg-yellow"
                      className={"hover:text-white"}
                    >
                      Call Now
                    </Button>
                  </div>
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
        <a
          href={data.customBtnsData[0].sign_in}
          className="mr-8 font-jakarta tracking-[0.5px] cursor-pointer"
          target="_blank"
        >
          Sign In
        </a>
        <Button
          link={data.customBtnsData[0].join_us}
          outline={false}
          bgColor="bg-yellow"
          target="_blank"
        >
          Join Us
        </Button>
      </div>
    </>
  );
};

export default DesktopMenu;
