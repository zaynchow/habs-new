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
                className="border-b-2 border-solid border-black"
                key={index}
                link={`/services/value-added-services/#${obj?.slug?.current}`}
                onClick={() => {
                  setTimeout(() => {
                    let element = document.querySelectorAll(
                      `#${obj?.slug?.current}`
                    )[0];
                    element?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }, 750);
                }}
              />
            );
          }
          return (
            <InfoRow
              title={obj.service_name}
              button
              link={`/services/value-added-services/#${obj?.slug?.current}`}
              onClick={() => {
                setTimeout(() => {
                  let element = document.querySelectorAll(
                    `#${obj?.slug?.current}`
                  )[0];
                  element?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }, 750);
              }}
              key={index}
            />
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default ValueAddedServices;
