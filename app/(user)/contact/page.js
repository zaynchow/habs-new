"use client";
import { Display1, Subtitle } from "@/components/Typography";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { useState, useEffect } from "react";
import Locations from "@/components/Contact/Locations";
import ContactForm from "@/components/Contact/ContactForm";

const locationsQuery = groq`*[_type=="locations"] | order(_createdAt asc)`;
const Contact = () => {
  const [data, setData] = useState(null);
  async function fetchData() {
    const locationsData = await client.fetch(locationsQuery);

    const newData = {
      locationsData,
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
    <div className="">
      <div className="py-[150px] mx-6">
        <Display1 className={"text-yellow text-center"}>Contact</Display1>
        <Subtitle className="text-xl font-light mt-6 mb-9 tracking-[1.2px]">
          Empowering investors to achieve greater returns through professional
          brokerage services
        </Subtitle>
      </div>
      <Locations data={data.locationsData} />
      <ContactForm />
    </div>
  );
};

export default Contact;
