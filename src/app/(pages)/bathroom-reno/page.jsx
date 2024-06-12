"use client";

import "../../styles/Home.css";

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
import WhyUs from "@/components/bathroom-reno-components/WhyUs/WhyUs";
import TurnKeys from "@/components/bathroom-reno-components/TurnKeys/TurnKeys";
import Professional from "@/components/bathroom-reno-components/Professional/Professional";
import ContactUs from "@/components/bathroom-reno-components/contactUs/ContactUs";


const BathroomReno = () => {
  return (
    <main className="">
      {/* =============================== Hero Banner =========================== */}

      <BathroomRenoHero/>

      {/* =============== Rating  Section================= */}
      <RatingComponent />

      {/* ================== AboutBathroomReno Section ===== */}
      <AboutBathroomReno/>
      <Expert/>
      <TurnKeys/>
      <Professional/>
      

      {/* =================== our service section ============== */}
        <OurService/>

      {/* =================== Review Section ============== */}
        <Review/>

        <HiringUs/>
        <WhyUs/>

      {/* ================ Ready to Work ============== */}
      <ReadyToWork/>

      {/* ================ Gallery ============== */}
      <ProjectGallery/>


      {/* ============= Constructor Section ================= */}
      <Constructor/>

      <BathroomRemodeling/>

      {/* ==================== FAQ Section ======================= */}
      <FaqSection/>

      {/* ================ Location Map ===================== */}
      <LocationMap/>

      {/* ================ Contact Us ===================== */}
      <ContactUs/>
    </main>
  );
};

export default BathroomReno;
