import React from "react";
import { useState, useEffect } from "react";
import { A } from "../Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "../Utils/Button";

const MobileMenu = ({ data }) => {
  const [showNav, setShowNav] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [showValueAddedServicesMenu, setShowValueAddedServicesMenu] =
    useState(false);

  const allDropdownStates = [
    setShowServicesMenu,
    setShowValueAddedServicesMenu,
  ];
  useEffect(() => {
    showNav && (document.body.style.overflow = "hidden");
    !showNav && (document.body.style.overflow = "unset");
  }, [showNav]);

  const menuItems = [
    { name: "Home", url: "/", dropdown: false },
    { name: "About", url: "/about", dropdown: false },
    {
      name: "Services",
      url: "/services",
      dropdown: true,
      dropdownState: showServicesMenu,
      dropdownSetState: setShowServicesMenu,
      data: data.servicesData,
    },
    {
      name: "VAS",
      url: "/value-added-services",
      dropdown: true,
      dropdownState: showValueAddedServicesMenu,
      dropdownSetState: setShowValueAddedServicesMenu,
      data: data.valueAddedServicesData,
    },
    { name: "Our Partners", url: "/partners", dropdown: false },
    { name: "News", url: "/news", dropdown: false },
    { name: "Contact", url: "/contact", dropdown: false },
  ];
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
          className={`flex flex-col items-center  text-white h-full justify-center w-full gap-5 relative ${
            showNav ? "animate-fadeIn" : "animate-fadeOut"
          } `}
        >
          {menuItems.map((obj, idx) => {
            return (
              <li
                className={`relative w-[90%] pb-6 after:bottom-0 after:opacity-20 after:content-[""] after:absolute after:left-0 after:w-full after:border-solid after:border-[0.5px] after:border-white transition`}
              >
                <div className={` flex justify-between `}>
                  <A
                    className={"text-[25px]"}
                    href={obj.url}
                    onClick={() => setShowNav(false)}
                  >
                    {obj.name}
                  </A>

                  {obj.dropdown && (
                    <ExpandMoreIcon
                      className={`cursor-pointer transition ${
                        obj.dropdownState && "-rotate-180"
                      }`}
                      onClick={(e) => {
                        allDropdownStates.map(
                          (func, idx) =>
                            func != obj.dropdownSetState && func(false)
                        );
                        obj.dropdownSetState((prev) => !prev);
                      }}
                    />
                  )}
                </div>

                {obj.dropdownState && obj.dropdown && (
                  <ul className="flex flex-col gap-3 pt-10 ">
                    {obj.data.map((service, idx) => (
                      <li>
                        <A
                          href={`${obj.url}#${service.slug.current}`}
                          className="cursor-pointer text-[20px]"
                          onClick={() => {
                            setShowNav(false);
                            setTimeout(() => {
                              let element = document.querySelectorAll(
                                `#${service?.slug?.current}`
                              )[0];
                              element?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            }, 750);
                          }}
                        >
                          {service.service_name}
                        </A>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
          <li className="flex justify-start items-start gap-4 w-[90%]">
            <Button bgColor={"bg-yellow"}>Join Us</Button>
            <Button bgColor={"bg-transparent outline text-white"}>
              Sign Up
            </Button>
          </li>
          {/* <li className="">
            <A
              href="/about"
              className={"text-[28px] "}
              onClick={() => setShowNav(false)}
            >
              About Us
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
          </li> */}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
