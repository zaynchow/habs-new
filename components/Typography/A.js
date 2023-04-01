import Link from "next/link";
import React from "react";
const A = ({ className, children, onClick, href }) => {
  return (
    <Link href ={href}>
      <p
        className={` font-jakarta text-[16px] font-regular leading-[24px] inline-block hover:underline wordSpacing-[3px] ${className}`}
        onClick={onClick}
      >
        {children}
      </p>
    </Link>
  );
};

export default A;
