"use client";
import React from "react";
import "./RoofingContractorInBrooklyn.css";
import RoofingContractorInBrooklynBanner from "./RoofingContractorInBrooklynBanner/RoofingContractorInBrooklynBanner";
import RatingComponent from "@/components/__home_components/RatingComponent";
import AboutOur from "./AboutOur/AboutOur";
import Expert from "./Expert/Expert";
import ResidentialRoofing from "./ResidentialRoofing/ResidentialRoofing";
import MetalRoofing from "./MetalRoofing/MetalRoofing";
import SteelRoof from "./SteelRoof/SteelRoof";
import TileRoof from "./TileRoof/TileRoof";
import ContactUs from "@/components/bathroom-reno-components/contactUs/ContactUs";
import LocationMap from "@/components/bathroom-reno-components/LocationMap/LocationMap";
import RoofingContractors from "./RoofingContractors/RoofingContractors";
import CommercialRoofing from "./CommercialRoofing/CommercialRoofing";

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

      <section>
        <CommercialRoofing/>
      </section>
      
      <section>
        <MetalRoofing/>
      </section>

      <section>
        <SteelRoof/>
      </section>

      <section>
        <TileRoof/>
      </section>

      <section>
        <RoofingContractors/>
      </section>




      <section>
      <LocationMap />
      </section>

      <section>
        <ContactUs />
      </section>

    </div>
  );
};

export default RoofingContractorInBrooklyn;
