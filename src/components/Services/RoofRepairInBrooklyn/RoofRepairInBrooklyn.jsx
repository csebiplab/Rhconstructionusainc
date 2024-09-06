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
import RoofingRepairCompany from "./RoofingRepairCompany/RoofingRepairCompany";
import ReadyToWorkWithUs from "./ReadyToWorkWithUs/ReadyToWorkWithUs";
import CostIdeas from "./CostIdeas/CostIdeas";
import ProjectGallery from "./ProjectGallery/ProjectGallery";
import WhyHireUs from "./WhyHireUs/WhyHireUs";
import RoofRepairServices from "./RoofRepairServices/RoofRepairServices";
import ContactUs from "@/components/bathroom-reno-components/contactUs/ContactUs";
import LocationMap from "@/components/bathroom-reno-components/LocationMap/LocationMap";
import Review from "@/components/kitchen-remodeling-components/Review/Review";

const RoofRepairInBrooklyn = () => {
  return (
    <div className="custom-container">
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
        <RoofingRepairCompany />
      </section>


      <section>
        <Affordable />
      </section>

      <section>
        <SmallRoofRepair />
      </section>

      <section>
        <RoofRepairServices />
      </section>

      <section>
        <ProjectGallery />
      </section>


      <section>
        <Dependable />
      </section>

      <section>
        <CostIdeas />
      </section>
      
      <section>
        <Review/>
      </section>

      <section>
        <WhyHireUs/>
      </section>



      <section>
        <ReadyToWorkWithUs />
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
