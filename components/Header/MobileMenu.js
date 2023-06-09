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
                key={idx}
                className={`relative w-[90%] pb-6 after:bottom-0 after:opacity-20 after:content-[""] after:absolute after:left-0 after:w-full after:border-solid after:border-[0.5px] after:border-white`}
              >
                <div className={` flex justify-between `}>
                  <A
                    className={"text-[20px]"}
                    href={obj.url}
                    onClick={() => setShowNav(false)}
                  >
                    {obj.name}
                  </A>

                  {obj.dropdown && (
                    <ExpandMoreIcon
                      className={`cursor-pointer transition-all ${
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
                      <li key={idx}>
                        <A
                          href={`${obj.url}#${service.slug.current}`}
                          className="cursor-pointer text-[16px]"
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
            <Button
              bgColor={"bg-transparent"}
              outline
              className={"text-white shadow-borderWhite"}
            >
              Sign Up
            </Button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
