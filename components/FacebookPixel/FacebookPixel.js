"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import * as fbq from "../../lib/fpixel";

const FacebookPixel = () => {
  const pathName = usePathname();

  useEffect(() => {
    fbq.pageview();
  }, [pathName]);
  return null;
};

export default FacebookPixel;
