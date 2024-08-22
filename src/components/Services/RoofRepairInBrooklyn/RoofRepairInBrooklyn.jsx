"use client";
import React from "react";
import RoofRepairInBrooklynBanner from "./RoofRepairInBrooklynBanner/RoofRepairInBrooklynBanner";
import RatingComponent from "@/components/__home_components/RatingComponent";
import AboutOur from "./AboutOur/AboutOur";
import RoofRepairSpecialists from "./RoofRepairSpecialists/RoofRepairSpecialists";
import Affordable from "./Affordable/Affordable";
import SmallRoofRepair from "./SmallRoofRepair/SmallRoofRepair";
import Dependable from "./Dependable/Dependable";
import FAQ from "./FAQ/FAQ";


// import LocationMap from "@/components/__home_components/LocationMap";
import ContactUs from "@/components/bathroom-reno-components/contactUs/ContactUs";
import LocationMap from "@/components/bathroom-reno-components/LocationMap/LocationMap";
import Review from "@/components/kitchen-remodeling-components/Review/Review";

const RoofRepairInBrooklyn = () => {
  return (
    <div>
      <section>
        <RoofRepairInBrooklynBanner />
      </section>

      <section className="bg___color">
        <RatingComponent />
      </section>

      <section>
        <AboutOur />
      </section>

      <section>
        <RoofRepairSpecialists />
      </section>


      <section>
        <Affordable />
      </section>

      <section>
        <SmallRoofRepair />
      </section>


      <section>
        <Dependable />
      </section>
      
      <section>
        <Review/>
      </section>



      <section>
        <FAQ />
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

export default RoofRepairInBrooklyn;
