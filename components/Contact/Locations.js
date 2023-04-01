"ues client";
import { useState } from "react";
import SectionContainer from "../Utils/SectionContainer";
import { H2, Subtitle, P } from "../Typography";
import InfoBox from "../Utils/InfoBox";

const Locations = ({ data }) => {
  const [option, setOption] = useState(data);
  return (
    <SectionContainer className="!max-w-[1200px]">
      <H2>Our Locations</H2>

      <Subtitle>
        Empowering investors to achieve greater returns through professional
        brokerage services
      </Subtitle>

      <div className="flex justify-center mt-9 mb-14">
        <P
          className={`text-center px-[50px] pb-2 border-b-4 border-solid ${
            option[0].city == "Dhaka" ? "border-yellow" : "border-black"
          } cursor-pointer`}
          onClick={() =>
            setOption(data.filter((singleCity) => singleCity.city == "Dhaka"))
          }
        >
          Dhaka
        </P>
        <P
          className={`text-center px-[50px] pb-2 border-b-4 border-solid ${
            option[0].city == "Chittagong" ? "border-yellow" : "border-black"
          } cursor-pointer`}
          onClick={() =>
            setOption(
              data.filter((singleCity) => singleCity.city == "Chittagong")
            )
          }
        >
          Chittagong
        </P>
      </div>
      <div className="flex gap-3 justify-center ">
        {option[0].offices.map((singleOffice, index) => (
          <InfoBox title={singleOffice.title}>
            <P className="!block">
              <span className="font-semibold">Address: </span>
              {singleOffice.address}
            </P>
            <P className="!block">
              <span className="font-semibold">Phone: </span>
              {singleOffice.phone_num}
            </P>
          </InfoBox>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Locations;
