import React from "react";
import { useState, useEffect } from "react";
import { A } from "../Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MobileMenu = ({ showServicesMenu, setShowServicesMenu, data }) => {
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    showNav && (document.body.style.overflow = "hidden");
    !showNav && (document.body.style.overflow = "unset");
  }, [showNav]);
  return (
    <>
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
    </>
  );
};

export default MobileMenu;
