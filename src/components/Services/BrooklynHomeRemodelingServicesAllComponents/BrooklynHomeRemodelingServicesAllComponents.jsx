import RatingComponent from "@/components/__home_components/RatingComponent";
import ContactUs from "@/components/bathroom-reno-components/contactUs/ContactUs";
import LocationMap from "@/components/bathroom-reno-components/LocationMap/LocationMap";
import AboutHomeRenovation from "@/components/brooklyn-home-remodeling-services-components/AboutHomeRenovation/AboutHomeRenovation";
import AffordableHome from "@/components/brooklyn-home-remodeling-services-components/AffordableHome/AffordableHome";
import BrooklynHomeRemodelingServiceHero from "@/components/brooklyn-home-remodeling-services-components/BrooklynHomeRemodelingServiceHero/BrooklynHomeRemodelingServiceHero";
import HiringUs from "@/components/brooklyn-home-remodeling-services-components/HiringUs/HiringUs";
import StunningDesign from "@/components/brooklyn-home-remodeling-services-components/StunningDesign/StunningDesign";
import TrustUs from "@/components/brooklyn-home-remodeling-services-components/TrustUs/TrustUs";
import Review from "@/components/kitchen-remodeling-components/Review/Review";
import React from "react";

const BrooklynHomeRemodelingServicesAllComponents = () => {
  return (
    <div>
      <section>
        <BrooklynHomeRemodelingServiceHero />
      </section>
      <section className="bg___color">
        <RatingComponent />
      </section>

      <section>
        <AboutHomeRenovation />
      </section>
      
      <section>
        <TrustUs />
      </section>

      <section>
        <HiringUs />
      </section>

      <section>
        <StunningDesign />
      </section>

      {/* =============== Review  Section================= */}
      <Review />

      <section>
        <AffordableHome/>
      </section>

      {/* =============== LocationMap  Section================= */}
      <LocationMap />

      {/* =============== ContactUs  Section================= */}
      <ContactUs />
    </div>
  );
};

export default BrooklynHomeRemodelingServicesAllComponents;
