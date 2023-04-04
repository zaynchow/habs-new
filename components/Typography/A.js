import Link from "next/link";
import React from "react";
const A = ({ className, children, onClick, href, onMouseOver, onMouseOut }) => {
  return (
    <Link href={href} onMouseOut={onMouseOut} onMouseOver={onMouseOver}>
      <p
        className={` font-jakarta md:text-[16px] text-[15px] font-regular leading-[24px] inline-block hover:underline wordSpacing-[3px] ${className}`}
        onClick={onClick}
      >
        {children}
      </p>
    </Link>
  );
};

export default A;
