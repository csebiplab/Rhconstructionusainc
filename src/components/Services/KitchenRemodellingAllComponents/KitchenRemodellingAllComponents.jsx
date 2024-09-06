"use client";

import "../../../app/styles/Home.css";

import RatingComponent from "@/components/__home_components/RatingComponent";
import LocationMap from "@/components/bathroom-reno-components/LocationMap/LocationMap";
import ContactUs from "@/components/bathroom-reno-components/contactUs/ContactUs";
import AboutKitchenRemodeling from "@/components/kitchen-remodeling-components/AboutKitchenRemodeling/AboutKitchenRemodeling";
import ChooseUs from "@/components/kitchen-remodeling-components/ChooseUs/ChooseUs";
import FaqSection from "@/components/kitchen-remodeling-components/FaqSection/FaqSection";
import HireUs from "@/components/kitchen-remodeling-components/HireUs/HireUs";
import KeyPoints from "@/components/kitchen-remodeling-components/KeyPoints/KeyPoints";
import KitchenRemodelingHero from "@/components/kitchen-remodeling-components/KitchenRemodelingHero/KitchenRemodelingHero";
import KitchenRemodelingServices from "@/components/kitchen-remodeling-components/KitchenRemodelingServices/KitchenRemodelingServices";
import KitchenRenovationCost from "@/components/kitchen-remodeling-components/KitchenRenovationCost/KitchenRenovationCost";
import ProjectGallery from "@/components/kitchen-remodeling-components/ProjectGallery/ProjectGallery";
import ReadyToWork from "@/components/kitchen-remodeling-components/ReadyToWork/ReadyToWork";
import AestheticKitchen from "@/components/kitchen-remodeling-components/AestheticKitchen/AestheticKitchen";
import Review from "@/components/kitchen-remodeling-components/Review/Review";
import TrustUs from "@/components/kitchen-remodeling-components/TrustUs/TrustUs";
import WorkingProcess from "@/components/kitchen-remodeling-components/WorkingProcess/WorkingProcess";
import OurServices from "@/components/kitchen-remodeling-components/ourServices/OurServices";

const KitchenRemodelingAllComponents = () => {
  return (
    <main className="custom-container">
      {/* =============== KitchenRemodelingHero  Section================= */}
      <KitchenRemodelingHero />

      {/* =============== RatingComponent  Section================= */}

      <div className="bg___color">
        <RatingComponent />
      </div>

      {/* =============== AboutKitchenRemodeling  Section================= */}
      <AboutKitchenRemodeling />

      {/* =============== KitchenRemodelingServices  Section================= */}
      <KitchenRemodelingServices />

      {/* =============== trustUs  Section================= */}
      <TrustUs />

      {/* =============== WorkingProcess  Section================= */}
      <WorkingProcess />

      {/* =============== Review  Section================= */}
      <Review />

      {/* =============== OurServices  Section================= */}

      <OurServices />

      {/* =============== ChooseUs  Section================= */}
      <ChooseUs />

      {/* =============== ProjectGallery  Section================= */}
      <ProjectGallery />

      {/* =============== kitchenRenovationCost  Section================= */}
      <KitchenRenovationCost />

      {/* =============== KeyPoints  Section================= */}
      <KeyPoints />

      {/* =============== HireUs  Section================= */}
      <HireUs />

      {/* =============== ReadyToWork  Section================= */}
      <ReadyToWork />

      {/* =============== Aesthetic Kitchen  Section================= */}
      <AestheticKitchen />

      {/* =============== FaqSection  Section================= */}
      <FaqSection />

      {/* =============== LocationMap  Section================= */}
      <LocationMap />

      {/* =============== ContactUs  Section================= */}
      <ContactUs />
    </main>
  );
};

export default KitchenRemodelingAllComponents;
