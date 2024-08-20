"use client";
import React from "react";
import "./RoofingContractorInBrooklyn.css";
import RoofingContractorInBrooklynBanner from "./RoofingContractorInBrooklynBanner/RoofingContractorInBrooklynBanner";
import RatingComponent from "@/components/__home_components/RatingComponent";
import AboutOur from "./AboutOur/AboutOur";
import Expert from "./Expert/Expert";
import ResidentialRoofing from "./ResidentialRoofing/ResidentialRoofing";

const RoofingContractorInBrooklyn = () => {
  return (
    <div>
      <section>
        <RoofingContractorInBrooklynBanner />
      </section>

      <section className="bg___color">
        <RatingComponent />
      </section>

      <section>
        <AboutOur/>
      </section>

      <section>
        <Expert/>
      </section>

      <section>
        <ResidentialRoofing/>
      </section>

    </div>
  );
};

export default RoofingContractorInBrooklyn;
