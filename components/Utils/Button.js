import React from "react";
import Link from "next/link";
import P from "../Typography/P";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Button = ({
  link,
  children,
  bgColor,
  outline,
  className,
  arrow = false,
  onClick,
}) => {
  return (
    <Link
      className={`md:pl-9 md:py-2.5 pl-6 py-2  ${
        arrow ? "md:pr-7 pr-1" : "md:pr-9 pr-6"
      } ${
        bgColor == "transparent" && "px-0"
      } ${bgColor} font-jakarta font-medium rounded-[50px] tracking-[0.5px] w-[fit-content] inline-block ${
        outline && "border-2 border-black border-solid"
      } ${className}`}
      href={link}
      onClick={onClick}
    >
      <div className="flex items-center">
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
          <ArrowRightAltIcon
            className={`ml-2 text-[30px] ${
              bgColor == "bg-blue" || bgColor == "bg-black"
                ? "text-white"
                : "text-black"
            }`}
          />
        )}
      </div>
    </Link>
  );
};

export default Button;
