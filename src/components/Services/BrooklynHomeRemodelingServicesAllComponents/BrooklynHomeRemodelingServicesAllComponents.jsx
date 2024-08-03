import RatingComponent from "@/components/__home_components/RatingComponent";
import ContactUs from "@/components/bathroom-reno-components/contactUs/ContactUs";
import LocationMap from "@/components/bathroom-reno-components/LocationMap/LocationMap";
import AboutHomeRenovation from "@/components/brooklyn-home-remodeling-services-components/AboutHomeRenovation/AboutHomeRenovation";
import AffordableHome from "@/components/brooklyn-home-remodeling-services-components/AffordableHome/AffordableHome";
import BrooklynHomeRemodelingServiceHero from "@/components/brooklyn-home-remodeling-services-components/BrooklynHomeRemodelingServiceHero/BrooklynHomeRemodelingServiceHero";
import FAQ from "@/components/brooklyn-home-remodeling-services-components/FAQ/FAQ";
import GetReadyWithUs from "@/components/brooklyn-home-remodeling-services-components/GetReadyWithUs/GetReadyWithUs";
import HireUs from "@/components/brooklyn-home-remodeling-services-components/HireUs/HireUs";
import HiringUs from "@/components/brooklyn-home-remodeling-services-components/HiringUs/HiringUs";
import KnowDetails from "@/components/brooklyn-home-remodeling-services-components/KnowDetails/KnowDetails";
import ProjectCost from "@/components/brooklyn-home-remodeling-services-components/ProjectCost/ProjectCost";
import ProjectGallery from "@/components/brooklyn-home-remodeling-services-components/ProjectGallery/ProjectGallery";
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

      <section>
        <ProjectGallery />
      </section>

      <section>
        <KnowDetails />
      </section>

      <section>
        <ProjectCost/>
      </section>

      {/* =============== Review  Section================= */}
      <section>
      <Review />
      </section>
      

      <section>
        <GetReadyWithUs/>
      </section>

      <section>
        <AffordableHome/>
      </section>

      <section>
        <HireUs/>
      </section>


      <section>
        <FAQ/>
      </section>

      {/* =============== LocationMap  Section================= */}
      <section>
      <LocationMap />
      </section>
      

      {/* =============== ContactUs  Section================= */}
      <section>
      <ContactUs />
      </section>
      
    </div>
  );
};

export default BrooklynHomeRemodelingServicesAllComponents;
