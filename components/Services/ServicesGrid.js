"use client";
import React from "react";
import SingleServiceSection from "./SingleServiceSection";

const ServicesGrid = ({ data }) => {
  return (
    <>
      {data.map((obj, index) => (
        <SingleServiceSection
          reverse={index % 2 == 1 ? true : false}
          title={obj.service_name}
          desc={obj.service_long_desc}
          includeAccordions={obj.include_accordions}
          accordions={obj.accordions}
          image={obj.service_img}
          id={obj?.slug?.current}
        />
      ))}
    </>
  );
};

export default ServicesGrid;
