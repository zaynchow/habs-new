"use client";
import React, { useState } from "react";
import SectionContainer from "../Utils/SectionContainer";
import { H2, Subtitle } from "../Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import SingleTestimonialSlider from "./SingleTestimonialSlider";
import SwiperButtons from "./SwiperButtons";

const Testimonial = ({ data }) => {
  const [progressBar, setProgressBar] = useState(0);
  return (
    <SectionContainer>
      <H2>Trusted by over 50,000 investors</H2>
      <Subtitle>See why people love us</Subtitle>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper  mt-16"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        onSlideChange={(swiperCore) => {
          const { realIndex } = swiperCore;
          setProgressBar((realIndex + 1) / data.length);
        }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 2, spaceBetween: 150 },
        }}
      >
        {data.map((obj, index) => (
          <SwiperSlide key={index}>
            <SingleTestimonialSlider
              name={obj.name}
              designation={obj.designation}
              img={obj.img}
            >
              {obj.desc}
            </SingleTestimonialSlider>
          </SwiperSlide>
        ))}

        <SwiperButtons className={"-mt-10 md:m-0"} progress={progressBar} />
      </Swiper>
    </SectionContainer>
  );
};

export default Testimonial;
