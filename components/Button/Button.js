import React from "react";
import Link from "next/link";
import P from "../Typography/P";

const Button = ({
  link,
  children,
  bgColor,
  outline,
  className,
  arrow = false,
}) => {
  return (
    <Link
      className={`md:pl-9 md:py-2.5 pl-6 py-2 ${
        arrow ? "md:pr-7 pr-3.5" : "md:pr-9 pr-6"
      } ${
        bgColor == "transparent" && "px-0"
      } ${bgColor} font-jakarta font-medium rounded-[50px] tracking-[0.5px] w-[fit-content] inline-block ${
        outline && "border-2 border-black border-solid"
      } ${className}`}
      href={link}
    >
      <P
        className={`inline-block md:text-[16px] text-[14px] ${
          bgColor == "bg-blue" || bgColor == "bg-black"
            ? "text-white"
            : "text-black"
        }`}
      >
        {children}
      </P>
      {arrow && (
        <img
          className="inline-block ml-2 "
          src="/icons/arrow-right.svg"
          width={20}
          height={20}
        />
      )}
    </Link>
  );
};

export default Button;
