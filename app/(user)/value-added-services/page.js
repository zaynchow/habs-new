"use client";

import { Display1, Subtitle } from "@/components/Typography";
import Button from "@/components/Utils/Button";
import ContactUsBanner from "@/components/ContactUsBanner";
import ServicesGrid from "@/components/Services/ServicesGrid";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { useState, useEffect } from "react";

const servicesQuery = groq`*[_type=="value_added_services"] | order(_createdAt asc)`;

const ValueAddedService = () => {
  const [data, setData] = useState(null);
  async function fetchData() {
    const servicesData = await client.fetch(servicesQuery);
    const newData = {
      servicesData,
    };
    setData(newData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <div className="h-[100vh]"></div>;
  }

  return (
    <div>
      <div className="py-[150px] px-6">
        <Display1 className={"lg:text-center text-yellow text-center"}>
          Value Added Services
        </Display1>
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

      <ContactUsBanner />
    </div>
  );
};

export default ValueAddedService;
