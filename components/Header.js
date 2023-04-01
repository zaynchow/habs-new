import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button/Button";
import { P, A } from "./Typography";

const Header = () => {
  return (
    <header className="md:w-full xl:w-[1186px] justify-between flex md:mx-auto mx-2 mt-3 items-center">
      <div className="flex items-center">
        <Image src="/logos/logo.svg" width="80" height="80" alt="HABSL Logo" />
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
      <div>
        <a href="/sign-in" className="mr-8 font-jakarta tracking-[0.5px]">
          Sign In
        </a>
        <Button link="/" outline={false} bgColor="bg-yellow">
          Join Us
        </Button>
      </div>
    </header>
  );
};

export default Header;
