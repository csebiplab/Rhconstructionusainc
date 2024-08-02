import RatingComponent from "@/components/__home_components/RatingComponent";
import BrooklynHomeRemodelingServiceHero from "@/components/brooklyn-home-remodeling-services-components/BrooklynHomeRemodelingServiceHero/BrooklynHomeRemodelingServiceHero";
import HiringUs from "@/components/brooklyn-home-remodeling-services-components/HiringUs/HiringUs";
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
        <HiringUs />
      </section>
    </div>
  );
};

export default BrooklynHomeRemodelingServicesAllComponents;
