"use client";
import React from "react";
import { Display1, P } from "@/components/Typography";
import Intro from "@/components/About/Intro";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import LogoGrid from "@/components/LogoGrid";
import CompanyGoals from "@/components/About/CompanyGoals";
import { useState, useEffect } from "react";
import ManagementProfiles from "@/components/About/ManagementProfiles";
import ContactUsBanner from "@/components/ContactUsBanner";
import Timeline from "@/components/About/Timeline";
import Abbreviation from "@/components/About/Abbreviation";

const missionQuery = groq`*[_type=="locations"] | order(_createdAt asc)`;
const peopleQuery = groq`*[_type=="people"] | order(_createdAt asc)`;
const logoQuery = groq`*[_type=="partners"]{image,slug}`;
const timelineQuery = groq`*[_type=="timeline"]`;
const companyGoalsQuery = groq`*[_type=="company-info"]{vision,mission} | order(_createdAt asc)[0]`;
const About = () => {
  const [data, setData] = useState(null);
  async function fetchData() {
    const missionData = await client.fetch(missionQuery);
    const logoData = await client.fetch(logoQuery);
    const peopleData = await client.fetch(peopleQuery);
    const timelineData = await client.fetch(timelineQuery);
    const CompanyGoalsData = await client.fetch(companyGoalsQuery);

    const newData = {
      missionData,
      logoData,
      peopleData,
      timelineData,
      CompanyGoalsData,
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
      <div className="pt-[150px] max-w-[900px] mx-auto px-6">
        <Display1 className={"text-yellow"}>
          Our goal is to make investment simple for you
        </Display1>
      </div>
      <Intro />
      <Abbreviation />
      <Timeline data={data.timelineData[0]} />
      <CompanyGoals data={data.CompanyGoalsData} />
      <LogoGrid data={data.logoData} />
      <ManagementProfiles data={data.peopleData} />
      <ContactUsBanner />
    </div>
  );
};

export default About;
