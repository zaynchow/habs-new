"use client";

import { Display1, Subtitle } from "@/components/Typography";
import Button from "@/components/Button/Button";

import ContactUsBanner from "@/components/ContactUsBanner";
import Fees from "@/components/Services/Fees";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { useState, useEffect } from "react";
import ServicesGrid from "@/components/Services/ServicesGrid";

const feesQuery = groq`*[_type=="fees"] | order(_createdAt asc)`;
const servicesQuery = groq`*[_type=="services"] | order(_createdAt asc)`;

const ServicesPage = () => {
  const [data, setData] = useState(null);
  async function fetchData() {
    const feesData = await client.fetch(feesQuery);
    const servicesData = await client.fetch(servicesQuery);
    const newData = {
      feesData,
      servicesData,
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
    <div>
      <div className="py-[150px]">
        <Display1 className={"text-yellow"}>Services</Display1>
        <Subtitle className="text-xl font-light mt-6 mb-9 tracking-[1.2px]">
          Empowering investors to achieve greater returns through professional
          brokerage services
        </Subtitle>
        <div className="text-center">
          <Button
            link="/contact"
            bgColor="bg-black"
            outline={true}
            className=" text-white"
          >
            Join Us
          </Button>
        </div>
      </div>
      <ServicesGrid data={data.servicesData} />
      <Fees data={data.feesData} />
      <ContactUsBanner />
    </div>
  );
};

export default ServicesPage;
