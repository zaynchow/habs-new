"use client";
import { Display1, Subtitle } from "@/components/Typography";
import Button from "@/components/Button/Button";
import SinglePartnerSection from "@/components/Partners/SinglePartnerSection";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { useState, useEffect } from "react";
import SectionContainer from "@/components/Utils/SectionContainer";
import ContactUsBanner from "@/components/ContactUsBanner";

const partnersQuery = groq`*[_type=="partners"] | order(_createdAt asc)`;
const Partners = () => {
  const [data, setData] = useState(null);
  async function fetchData() {
    const partnersData = await client.fetch(partnersQuery);

    const newData = {
      partnersData,
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
        <Display1 className={"text-yellow"}>Our Partners</Display1>
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
      <SectionContainer>
        {data.partnersData.map((obj, index) => (
          <>
            <SinglePartnerSection
              name={obj.name}
              desc={obj.desc}
              commissionRate={obj.commission_rate}
              interestRate={obj.interest_rate}
              img={obj.image}
              className={index == 0 ? "pb-24" : "py-24"}
            />
            {index != data.partnersData.length - 1 && (
              <hr className="w-full  border-[1px] " />
            )}
          </>
        ))}
        <ContactUsBanner />
      </SectionContainer>
    </div>
  );
};

export default Partners;
