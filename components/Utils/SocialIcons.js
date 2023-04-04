"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

const SocialIcons = ({ className }) => {
  const socialQuery = groq`*[_type=="social"]`;
  const [data, setData] = useState(null);
  async function fetchData() {
    const socialData = await client.fetch(socialQuery);
    const newData = {
      socialData,
    };
    setData(newData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-2">
      <Link href={data.socialData[0].facebook} target="_blank">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 506.86 506.86"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          image-rendering="optimizeQuality"
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="currentColor"
          className={`text-blue hover:text-yellow w-[35px] h-[35px] ${className} `}
        >
          <defs></defs>
          <title>facebook-round-color</title>
          <path
            className="cls-1"
            d="M506.86,253.43C506.86,113.46,393.39,0,253.43,0S0,113.46,0,253.43C0,379.92,92.68,484.77,213.83,503.78V326.69H149.48V253.43h64.35V197.6c0-63.52,37.84-98.6,95.72-98.6,27.73,0,56.73,5,56.73,5v62.36H334.33c-31.49,0-41.3,19.54-41.3,39.58v47.54h70.28l-11.23,73.26H293V503.78C414.18,484.77,506.86,379.92,506.86,253.43Z"
          />
          <path
            className="cls-2"
            style={{ fill: "transparent" }}
            d="M352.08,326.69l11.23-73.26H293V205.89c0-20,9.81-39.58,41.3-39.58h31.95V104s-29-5-56.73-5c-57.88,0-95.72,35.08-95.72,98.6v55.83H149.48v73.26h64.35V503.78a256.11,256.11,0,0,0,79.2,0V326.69Z"
          />
        </svg>
      </Link>
      <Link href={data.socialData[0].linkedin} target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3333 3333"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          image-rendering="optimizeQuality"
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="currentColor"
          className={`text-blue hover:text-yellow w-[35px] h-[35px] ${className}`}
        >
          <path d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm-215 1336h342v175h5c48-86 164-175 338-175 361 0 428 225 428 517v596h-357v-528c0-126-3-288-186-288-186 0-214 137-214 279v537h-357V1336zm-247-309c0 102-83 186-186 186-102 0-186-83-186-186 0-102 83-186 186-186 102 0 186 83 186 186zm-371 309h371v1113H834V1336z" />
        </svg>
      </Link>
      <Link href={data.socialData[0].youtube} target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 333333 333333"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          image-rendering="optimizeQuality"
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="currentColor"
          className={`text-blue hover:text-yellow w-[35px] h-[35px] ${className}`}
        >
          <path
            d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm84195 132297s-1678-11849-6843-17052c-6545-6843-13873-6887-17223-7283-24036-1751-60138-1751-60138-1751h-63s-36085 0-60135 1751c-3363 409-10681 437-17223 7283-5168 5203-6811 17052-6811 17052s-1711 13904-1711 27838v13029c0 13905 1709 27837 1709 27837s1678 11849 6811 17061c6542 6843 15139 6621 18977 7350 13761 1314 58457 1710 58457 1710s36133-64 60169-1783c3363-397 10678-438 17223-7284 5168-5202 6843-17065 6843-17065s1711-13904 1711-27837v-13028c-35-13905-1745-27837-1745-27837l-9 9-1-1zm-102010 56674v-48312l46437 24237-46437 24075z"
            fill="currentColor"
            className={`text-blue hover:text-yellow w-[35px] h-[35px] ${className}`}
          />
        </svg>
      </Link>
    </div>
  );
};

export default SocialIcons;
