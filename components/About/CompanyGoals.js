import React from "react";
import SectionContainer from "../Utils/SectionContainer";
import { P } from "../Typography";
import InfoBox from "../Utils/InfoBox";

const CompanyGoals = ({ data }) => {
  return (
    <SectionContainer className="flex md:flex-row flex-col justify-center gap-8">
      <InfoBox title="Mission">
        <P>{data.mission}</P>
      </InfoBox>
      <InfoBox title="Vision">
        <P>{data.vision}</P>
      </InfoBox>
    </SectionContainer>
  );
};

export default CompanyGoals;
