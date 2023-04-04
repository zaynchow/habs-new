"use client";
import HighlightedNews from "@/components/News/HighlightedNews";
import React from "react";
import { Display1, Subtitle } from "@/components/Typography";
import Button from "@/components/Button/Button";
import SingleNewsBanner from "@/components/News/SingleNewsBanner";
import SectionContainer from "@/components/Utils/SectionContainer";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { useState, useEffect } from "react";
import SocialIcons from "@/components/Utils/SocialIcons";
import { P } from "@/components/Typography";

const blogQuery = groq`*[_type=="blog_posts"] | order(_createdAt asc)`;

const news = () => {
  const [data, setData] = useState(null);

  async function fetchData() {
    const blogData = await client.fetch(blogQuery);
    const newData = {
      blogData,
    };
    setData(newData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const pageNumbers = [];

  if (!data) {
    return <div>Loading...</div>;
  }
  const totalPosts = data.blogData.length;
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.blogData.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <div className="py-[150px] mx-6">
        <Display1 className={"text-yellow text-center"}>Stay Updated</Display1>
        <Subtitle className="text-xl font-light mt-6 mb-9 tracking-[1.2px]">
          Empowering investors to achieve greater returns through professional
          brokerage services
        </Subtitle>
        <div className="text-center justify-center flex gap-2">
          <SocialIcons />
        </div>
      </div>
      <HighlightedNews />

      <SectionContainer className="grid md:grid-cols-2 gap-12 ">
        {currentPosts.map((obj, index) => (
          <SingleNewsBanner
            title={obj.title}
            desc={obj.desc}
            img={obj.image}
            summary={obj.summary}
            slug={obj.slug}
            key={index}
          />
        ))}
      </SectionContainer>
      <SectionContainer className="flex justify-between items-center">
        <div
          onClick={(e) => setCurrentPage((prev) => prev - 1)}
          className="cursor-pointer"
        >
          {currentPage != 1 && (
            <>
              <img
                className="inline-block mr-2 rotate-180"
                src="/icons/arrow-right.svg"
                width={20}
                height={20}
              />
              <P className={"inline-block "}>Prev</P>
            </>
          )}
        </div>
        <ul>
          {pageNumbers.map((num, index) => {
            return (
              <>
                <li
                  className={`inline cursor-pointer ${
                    currentPage == num && "text-yellow"
                  } `}
                  onClick={(e) => setCurrentPage(num)}
                >
                  {num}
                </li>
                {pageNumbers.length != 1 && num != pageNumbers.length && (
                  <li className="inline mx-1 ">-</li>
                )}
              </>
            );
          })}
        </ul>
        <div
          onClick={(e) => setCurrentPage((prev) => prev + 1)}
          className="cursor-pointer"
        >
          {currentPage != pageNumbers.length && (
            <>
              <P className={"inline-block "}>Next</P>
              <img
                className="inline-block ml-2"
                src="/icons/arrow-right.svg"
                width={20}
                height={20}
              />
            </>
          )}
        </div>
      </SectionContainer>
    </div>
  );
};

export default news;
