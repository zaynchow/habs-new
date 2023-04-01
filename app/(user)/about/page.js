"use client";
import React from "react";
import { Display1, P } from "@/components/Typography";
import Intro from "@/components/About/Intro";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import LogoGrid from "@/components/LogoGrid";
import CompanyGoals from "@/components/About/CompanyGoals";
import { useState, useEffect } from "react";
import Management from "@/components/Management";
import ContactUsBanner from "@/components/ContactUsBanner";

const missionQuery = groq`*[_type=="locations"] | order(_createdAt asc)`;
const peopleQuery = groq`*[_type=="people"] | order(_createdAt asc)`;
const logoQuery = groq`*[_type=="partners"]{image}`;
const About = () => {
  const [data, setData] = useState(null);
  async function fetchData() {
    const missionData = await client.fetch(missionQuery);
    const logoData = await client.fetch(logoQuery);
    const peopleData = await client.fetch(peopleQuery);

    const newData = {
      missionData,
      logoData,
      peopleData,
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
      <div className="pt-[150px] max-w-[900px] mx-auto">
        <Display1 className={"text-yellow"}>
          Our goal is to make investment simple for you
        </Display1>
      </div>
      <Intro />
      <CompanyGoals />
      <LogoGrid data={data.logoData} />
      <Management data={data.peopleData} />
      <ContactUsBanner />
    </div>
  );
};

export default About;
