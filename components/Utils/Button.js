import React from "react";
import Link from "next/link";
import P from "../Typography/P";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Button = ({
  link = "/",
  children,
  bgColor,
  outline,
  className,
  arrow = false,
  onClick,
  target,
}) => {
  return (
    <Link
      className={`md:pl-9 md:py-3 pl-6 py-2.5  ${
        arrow ? "md:pr-7 pr-3" : "md:pr-9 pr-6"
      } ${
        bgColor == "transparent" && "px-0"
      } ${bgColor} font-jakarta font-medium rounded-[50px] tracking-[0.5px] w-[fit-content] inline-block ${
        outline && "shadow-borderBlack "
      }  
      ${
        bgColor == "bg-yellow" &&
        "hover:shadow-borderYellow hover:bg-transparent "
      }
      ${
        (bgColor == "bg-black" || bgColor == "bg-blue") &&
        "hover:shadow-borderBlack hover:bg-transparent  hover:text-black"
      }
      ${
        (bgColor == "bg-transparent" || bgColor == "bg-white") &&
        outline &&
        "hover:shadow-borderBlack hover:bg-black  hover:text-white"
      }
      
      ${
        bgColor == "bg-blue" || bgColor == "bg-black"
          ? "text-white "
          : "text-black"
      }
      ${className}`}
      href={link}
      onClick={onClick}
      target={target}
    >
      <div className="flex items-center">
        <P className={`inline-block md:text-[16px] text-[14px] `}>{children}</P>
        {arrow && (
          <ArrowRightAltIcon
            className={`ml-2 text-[30px] text-inherit
            `}
          />
        )}
      </div>
    </Link>
  );
};

export default Button;
