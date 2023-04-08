"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Utils/Button";
import { A, P } from "./Typography";
import { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";

const servicesQuery = groq`*[_type=="services"]{service_name, slug} `;
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [data, setData] = useState(null);
  async function fetchData() {
    const servicesData = await client.fetch(servicesQuery);
    const newData = {
      servicesData,
    };
    setData(newData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    showNav && (document.body.style.overflow = "hidden");
    !showNav && (document.body.style.overflow = "unset");
  }, [showNav]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <header className="w-full md:max-w-[1140px] justify-between flex px-[24px] mx-auto mt-3 items-center">
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
                <div className="absolute bg-white shadow-[0px_0px_40px_3px_rgba(0,0,0,0.1)] p-6 mt-2 rounded-xl z-10">
                  <ul className="columns-2">
                    {data.servicesData.map((obj, idx) => (
                      <li>
                        <A
                          href={`/services/#${obj?.slug?.current}`}
                          className={"text-[28px] !leading-8 "}
                          onClick={() => setShowServicesMenu(false)}
                        >
                          {obj.service_name}
                        </A>
                      </li>
                    ))}
                    <li>
                      <A
                        href="/services/value-added-services"
                        className={"text-[28px] !leading-8 "}
                        onClick={() => setShowServicesMenu(false)}
                      >
                        Value Added Services
                      </A>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li className="pl-8">
              <A href="/about">About Us</A>
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
            <li className="pl-8 ">
              <A href="https://munshicorp.com/careers/">Careers</A>
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
      <div
        className={`block md:hidden z-[5] `}
        onClick={() => setShowNav((prev) => !prev)}
      >
        <div
          className={`w-[35px] h-[2px] my-[8px] block transition-all duration-[800ms] bg-blue ${
            showNav && "-rotate-45 bg-white translate-y-[10px]"
          } `}
        ></div>
        <div
          className={`w-[20px] h-[2px] my-[8px] block transition-all duration-[700ms] bg-blue ${
            showNav && "opacity-0"
          }`}
        ></div>
        <div
          className={`w-[35px] h-[2px] my-[8px] block transition-all duration-[800ms] bg-blue  ${
            showNav && "rotate-45 bg-white -translate-y-[8px]"
          }`}
        ></div>
      </div>

      <nav
        className={`h-screen w-screen md:hidden absolute top-0 right-0 z-[4] bg-blue px-6 ${
          showNav ? "scale-y-100" : "scale-y-0"
        } origin-top transition-transform duration-[600ms] ease-in`}
      >
        <ul
          className={`flex flex-col items-center text-white h-full justify-center w-full gap-5 ${
            showNav ? "animate-fadeIn" : "animate-fadeOut"
          } `}
        >
          <li className=" ">
            <A
              href="/"
              className={`text-[28px] `}
              onClick={() => setShowNav(false)}
            >
              Home
            </A>
          </li>
          <li className=" relative flex items-center">
            <A
              href=""
              className={
                "text-[28px] flex flex-col justify-center items-center gap-5 hover:no-underline"
              }
              onClick={() => {
                setShowServicesMenu((prev) => !prev);
              }}
            >
              <span className="whitespace-nowrap">
                Services
                <ExpandMoreIcon className="-rotate-90" />
              </span>
            </A>
            <ul
              className={`${
                showServicesMenu ? "flex flex-col gap-5 py-5 ml-4 " : "hidden"
              }`}
            >
              <li>
                <A
                  href="/services/#full-dp-service"
                  className={"text-[28px] !leading-8 "}
                  onClick={() => setShowNav(false)}
                >
                  Full DP Services
                </A>
              </li>

              <li>
                <A
                  href="/services/#sms-service"
                  className={"text-[28px] !leading-8 "}
                  onClick={() => setShowNav(false)}
                >
                  SMS Service
                </A>
              </li>

              <li>
                <A
                  href="/services/#online-payment-system"
                  className={"text-[28px] !leading-8 "}
                  onClick={() => setShowNav(false)}
                >
                  Online Payment System
                </A>
              </li>

              <li>
                <A
                  href="/services/#research-services"
                  className={"text-[28px] !leading-8  "}
                  onClick={() => setShowNav(false)}
                >
                  Research Services
                </A>
              </li>
              <li>
                <A
                  href="/services/value-added-services"
                  className={"text-[28px] !leading-8 "}
                  onClick={() => setShowNav(false)}
                >
                  Value Added Services
                </A>
              </li>
            </ul>
          </li>
          <li className="">
            <A
              href="/about"
              className={"text-[28px] text-center"}
              onClick={() => setShowNav(false)}
            >
              About Us
            </A>
          </li>
          <li className=" ">
            <A
              href="/partners"
              className={"text-[28px]"}
              onClick={() => setShowNav(false)}
            >
              Our Partners
            </A>
          </li>
          <li className="">
            <A
              href="/news"
              className={"text-[28px]"}
              onClick={() => setShowNav(false)}
            >
              News
            </A>
          </li>
          <li className="">
            <A
              href="/contact"
              className={"text-[28px]"}
              onClick={() => setShowNav(false)}
            >
              Contact
            </A>
          </li>
          <li className=" ">
            <A href="https://munshicorp.com/careers/" className={"text-[28px]"}>
              Careers
            </A>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
