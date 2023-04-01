import React from "react";
import SectionContainer from "../Utils/SectionContainer";
import { P } from "../Typography";
import InfoBox from "../Utils/InfoBox";

const CompanyGoals = () => {
  return (
    <SectionContainer className="flex justify-center gap-8">
      <InfoBox title="Mission">
        <P>
          Empowering investors to achieve greater returns through professional
          brokerage services.
        </P>
      </InfoBox>
      <InfoBox title="Vision">
        <P>
          Our vision is to be the most innovative brokerage service in line with
          our legacy of integrity and trust.
        </P>
      </InfoBox>
    </SectionContainer>
  );
};

export default CompanyGoals;
