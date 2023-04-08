"use client";
import { useState, useEffect } from "react";
import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { groq } from "next-sanity";
import { Display1, Subtitle } from "@/components/Typography";
import Button from "@/components/Utils/Button";
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
    <div>
      <div className="pt-[150px] max-w-[900px] md:mx-auto mx-6">
        <Display1 className={"text-yellow text-center"}>
          {data.postData[0].title}
        </Display1>
        <Subtitle className="text-xl font-light mt-6 mb-9 tracking-[1.2px] !max-w-[780px] ">
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
        <SectionContainer className="mt-16 md:mb-16 !mb-10 w-full mx-auto">
          <Image
            src={urlFor(data.postData[0].image).url()}
            width={900}
            height={350}
            className="md:h-[400px] md:w-[900px] w-full "
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
          <Button link="/contact" bgColor="bg-yellow" outline={true} arrow>
            Copy Link
          </Button>
          <div>
            <Icons />
          </div>
        </div>
      </div>
      <ContactUsBanner />
    </div>
  );
};

export default singlePost;
