"use client";
import React from "react";
import { useState, useEffect } from "react";

import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const servicesQuery = groq`*[_type=="services"] | order(_createdAt asc){service_name, slug}`;
const valueAddedServicesQuery = groq`*[_type=="value_added_services"] | order(_createdAt asc){service_name, slug}`;
const customBtnsQuery = groq`*[_type=="custom_btns"]`;
const Header = () => {
  const [data, setData] = useState(null);
  async function fetchData() {
    const servicesData = await client.fetch(servicesQuery, "force-cache");
    const customBtnsData = await client.fetch(customBtnsQuery, "force-cache");
    const valueAddedServicesData = await client.fetch(
      valueAddedServicesQuery,
      "force-cache"
    );

    const newData = {
      servicesData,
      valueAddedServicesData,
      customBtnsData,
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
    <header className="w-full md:max-w-[1150px] justify-between flex px-[24px] mx-auto mt-3 items-center">
      <DesktopMenu data={data} />
      <MobileMenu data={data} />
    </header>
  );
};

export default Header;
