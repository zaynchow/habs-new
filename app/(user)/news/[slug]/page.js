"use client";
import { useState, useEffect } from "react";
import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { groq } from "next-sanity";
import { Display1, Subtitle } from "@/components/Typography";
import Button from "@/components/Button/Button";
import SectionContainer from "@/components/Utils/SectionContainer";
import Image from "next/image";
import PortableText from "react-portable-text";
import ContactUsBanner from "@/components/ContactUsBanner";
import Icons from "@/components/Utils/SocialIcons";

const singlePost = ({ params }) => {
  const postQuery = groq`*[_type=="blog_posts" && slug.current == "${params.slug}"]`;
  const [data, setData] = useState(null);
  async function fetchData() {
    const postData = await client.fetch(postQuery);
    const newData = {
      postData,
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
    <div className="pt-[150px] max-w-[900px] mx-auto">
      <Display1 className={"text-yellow"}>{data.postData[0].title}</Display1>
      <Subtitle className="text-xl font-light mt-6 mb-9 tracking-[1.2px] !max-w-[780px]">
        {data.postData[0].summary}
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
      <SectionContainer className="mt-16 mb-16">
        <Image
          src={urlFor(data.postData[0].image).url()}
          width={900}
          height={350}
          className="h-[400px]"
        />
      </SectionContainer>
      <SectionContainer className="!max-w-[780px] mx-auto !mb-[70px]">
        <PortableText
          content={data.postData[0].desc}
          serializers={{ break: (props) => <br /> }}
        />
      </SectionContainer>
      <hr className="border-solid border-black border-2 mb-4" />
      <div className="flex justify-between mb-[100px]">
        <div className="flex gap-2">
          <Button
            link="/contact"
            bgColor="bg-yellow"
            outline={true}
            className=" text-white "
          >
            Investment
          </Button>
          <Button
            link="/contact"
            bgColor="bg-yellow"
            outline={true}
            className=" text-white"
          >
            Stocks
          </Button>
        </div>
        <div className="flex gap-2 items-center">
          <Button
            link="/contact"
            bgColor="bg-blue"
            outline={true}
            className=" text-white"
            arrow
          >
            Copy Link
          </Button>

          <Icons />
        </div>
      </div>
      <ContactUsBanner />
    </div>
  );
};

export default singlePost;
