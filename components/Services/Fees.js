import React from "react";
import PriceInfoRow from "../Utils/PriceInfoRow";
import SectionContainer from "../Utils/SectionContainer";
import { H2, Subtitle } from "../Typography";

const Fees = ({ data }) => {
  return (
    <SectionContainer>
      <H2>Fees and Charges</H2>
      <Subtitle>
        Empowering Investors to Achieve Greater Returns through Professional
        Securities Brokerage
      </Subtitle>
      <div className="mt-16">
        {data.map((obj, index) =>
          obj.price ? (
            <PriceInfoRow
              title={obj.service_name}
              price={obj.price}
              period={obj.period}
              key={index}
            />
          ) : (
            <PriceInfoRow
              title={obj.service_name}
              priceNotConfirmed
              key={index}
            />
          )
        )}
      </div>
    </SectionContainer>
  );
};

export default Fees;
