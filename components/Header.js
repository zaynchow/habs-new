"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button/Button";
import { P, A } from "./Typography";
import { useState, useEffect } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    showNav && (document.body.style.overflow = "hidden");
    !showNav && (document.body.style.overflow = "unset");
  }, [showNav]);

  return (
    <header className="md:w-full xl:w-[1186px] justify-between flex md:mx-auto mx-[24px] mt-3 items-center">
      <div className="flex items-center">
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
              <A href="/services">
                Services
                <img className="inline pl-1" src="/icons/caret-down.svg" />
              </A>
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
      </div>
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
          className={`w-[35px] h-[2px] my-[8px] block transition-transform duration-[800ms] bg-blue ${
            showNav && "-rotate-45 bg-white translate-y-[10px]"
          } `}
        ></div>
        <div
          className={`w-[20px] h-[2px] my-[8px] block transition-opacity duration-[700ms] bg-blue ${
            showNav && "opacity-0"
          }`}
        ></div>
        <div
          className={`w-[35px] h-[2px] my-[8px] block transition-transform duration-[800ms] bg-blue  ${
            showNav && "rotate-45 bg-white -translate-y-[8px]"
          }`}
        ></div>
      </div>

      <div
        className={`h-screen w-screen md:hidden absolute top-0 right-0 z-[4] bg-blue  ${
          showNav ? "scale-y-100" : "scale-y-0"
        } origin-top transition-transform duration-[600ms] ease-in`}
      >
        <ul
          className={`flex flex-col items-center text-white h-full justify-center w-full gap-5 ${
            showNav ? "animate-fadeIn" : "animate-fadeOut"
          } `}
        >
          <li className="pl-8 ">
            <A
              href="/"
              className={`text-[28px] `}
              onClick={() => setShowNav(false)}
            >
              Home
            </A>
          </li>
          <li className="pl-8 relative">
            <A href="/services " className={"text-[28px]"}>
              Services
              <img
                className="inline pl-1 absolute top-1/2 -translate-y-[50%]"
                src="/icons/caret-down.svg"
              />
            </A>
          </li>
          <li className="pl-8">
            <A
              href="/about"
              className={"text-[28px] text-center"}
              onClick={() => setShowNav(false)}
            >
              About Us
            </A>
          </li>
          <li className="pl-8 ">
            <A
              href="/partners"
              className={"text-[28px]"}
              onClick={() => setShowNav(false)}
            >
              Our Partners
            </A>
          </li>
          <li className="pl-8">
            <A
              href="/news"
              className={"text-[28px]"}
              onClick={() => setShowNav(false)}
            >
              News
            </A>
          </li>
          <li className="pl-8">
            <A
              href="/contact"
              className={"text-[28px]"}
              onClick={() => setShowNav(false)}
            >
              Contact
            </A>
          </li>
          <li className="pl-8 ">
            <A href="https://munshicorp.com/careers/" className={"text-[28px]"}>
              Careers
            </A>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
