"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Utils/Button";
import { A, P } from "../Typography";
import { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const servicesQuery = groq`*[_type=="services"] | order(_createdAt asc){service_name, slug}`;
const valueAddedServicesQuery = groq`*[_type=="value_added_services"] | order(_createdAt asc){service_name, slug}`;
const Header = () => {
  const [data, setData] = useState(null);
  async function fetchData() {
    const servicesData = await client.fetch(servicesQuery);
    const valueAddedServicesData = await client.fetch(valueAddedServicesQuery);
    const newData = {
      servicesData,
      valueAddedServicesData,
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
    <header className="w-full md:max-w-[1250px] justify-between flex px-[24px] mx-auto mt-3 items-center">
      <DesktopMenu data={data} />
      <MobileMenu data={data} />
    </header>
  );
};

export default Header;
