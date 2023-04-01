import React from "react";
import { H2, Subtitle } from "../Typography";
import InfoRow from "../Utils/InfoRow";
import SectionContainer from "../Utils/SectionContainer";

const ValueAddedServices = ({ data }) => {
  return (
    <SectionContainer>
      <H2>Value added services</H2>
      <Subtitle>
        Empowering investors to achieve greater returns through professional
        brokerage services
      </Subtitle>
      <div className="mt-16">
        {data.map((obj, index) => {
          if (index == data.length - 1) {
            return (
              <InfoRow
                title={obj.service_name}
                button
                link="/"
                className="border-b-2 border-solid border-black"
                key={index}
              />
            );
          }
          return (
            <InfoRow title={obj.service_name} button link="/" key={index} />
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default ValueAddedServices;
