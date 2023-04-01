"use client";
import { groq } from "next-sanity";
import React, { useEffect, useState } from "react";
import Hero from "@/components/Home/Hero";
import Counter from "@/components/Home/Counter";
import LogoGrid from "@/components/LogoGrid";
import CommissionBanner from "@/components/Home/CommissionBanner";
import Services from "@/components/Home/Services";
import ValueAddedServices from "@/components/Home/ValueAddedServices";
import Testimonial from "@/components/Home/Testimonial";
import ContactUsBanner from "@/components/ContactUsBanner";
import { client } from "../../lib/sanity.client";

const counterQuery = groq`*[_type=="company-info"][0]{book_size, num_of_clients, years_in_brokerage, num_of_branches}`;
const logoQuery = groq`*[_type=="partners"]{image}`;
const servicesQuery = groq`*[_type=="services"] | order(_createdAt asc){service_img, service_short_desc, service_name} `;
const valueAddedServicesQuery = groq`*[_type=="value_added_services"] | order(_createdAt asc){service_name}`;
const testimonialsQuery = groq`*[_type=="testimonials"]`;

const HomePage = () => {
  const [data, setData] = useState(null);
  async function fetchData() {
    const counterData = await client.fetch(counterQuery);
    const logoData = await client.fetch(logoQuery);
    const servicesData = await client.fetch(servicesQuery);
    const valueAddedServicesData = await client.fetch(valueAddedServicesQuery);
    const testimonialsData = await client.fetch(testimonialsQuery);

    const newData = {
      counterData,
      logoData,
      servicesData,
      testimonialsData,
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
    <main>
      <Hero />
      <Counter data={data.counterData} />
      <LogoGrid data={data.logoData} />
      <CommissionBanner />
      <Services data={data.servicesData} />
      <ValueAddedServices data={data.valueAddedServicesData} />
      <Testimonial data={data.testimonialsData} />
      <ContactUsBanner />
    </main>
  );
};

export default HomePage;
