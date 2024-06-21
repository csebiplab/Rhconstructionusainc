"use client"
import "../../../styles/Home.css";

import BathroomRenoHero from "@/components/bathroom-reno-components/BathroomRenoHero/BathroomRenoHero";
import AboutBathroomReno from "@/components/bathroom-reno-components/AboutBathroomReno/AboutBathroomReno";
import BathroomRemodeling from "@/components/bathroom-reno-components/BathroomRemodeling/BathroomRemodeling";
import LocationMap from "@/components/bathroom-reno-components/LocationMap/LocationMap";
import ReadyToWork from "@/components/bathroom-reno-components/ReadyToWork/ReadyToWork";
import FaqSection from "@/components/bathroom-reno-components/FaqSection/FaqSection";
import ProjectGallery from "@/components/bathroom-reno-components/ProjectGallery/ProjectGallery";
import OurService from "@/components/bathroom-reno-components/ourService/OurService";
import Review from "@/components/bathroom-reno-components/Review/Review";
import Constructor from "@/components/bathroom-reno-components/Constructor/Constructor";
import Expert from "@/components/bathroom-reno-components/Expert/Expert";
import RatingComponent from "@/components/bathroom-reno-components/RatingComponent";
import HiringUs from "@/components/bathroom-reno-components/HiringUs/HiringUs";
import TurnKeys from "@/components/bathroom-reno-components/TurnKeys/TurnKeys";
import Professional from "@/components/bathroom-reno-components/Professional/Professional";
import ContactUs from "@/components/bathroom-reno-components/contactUs/ContactUs";
import WhyUs from "@/components/bathroom-reno-components/WhyUs/WhyUs";

const BathroomReno = () => {
  return (
    <main className="">
      {/* =============================== Hero Banner =========================== */}

      <BathroomRenoHero />

      {/* =============== Rating  Section================= */}
      <RatingComponent />

      {/* ================== AboutBathroomReno Section ===== */}
      <AboutBathroomReno />

      {/* ================== Expert Section ===== */}
      <Expert />

      {/* ================== TurnKeys Section ===== */}
      <TurnKeys />

      {/* ================== Professional Section ===== */}
      <Professional />

      {/* ================ Ready to Work ============== */}
      <ReadyToWork />

      {/* ================ Gallery ============== */}
      <ProjectGallery />

      {/* =================== our service section ============== */}
      <OurService />

      {/* ============= Constructor Section ================= */}
      <Constructor />

      {/* =================== Review Section ============== */}
      <Review />

      {/* ================== HiringUs Section ===== */}

      <HiringUs />

      {/* ================== WhyUs Section ===== */}
      <WhyUs />

      {/* ================== BathroomRemodeling Section ===== */}

      <BathroomRemodeling />

      {/* ==================== FAQ Section ======================= */}
      <FaqSection />

      {/* ================ Location Map ===================== */}
      <LocationMap />

      {/* ================ Contact Us ===================== */}
      <ContactUs />
    </main>
  );
};

export default BathroomReno;
