"use client";

import "../../styles/Home.css";



import RhconstructionSection from "@/components/__home_components/RhconstructionSection/RhconstructionSection";
import AboutUs from "@/components/__home_components/AboutUs";
import TrustUs from "@/components/__home_components/TrustUs";
import WorkingProcess from "@/components/__home_components/WorkingProcess";
import GallerySection from "@/components/__home_components/GallerySection";
import ExperiencedContractor from "@/components/__home_components/ExperiencedContractor";
import Right from "@/components/__home_components/Right";
import ProjectElevate from "@/components/__home_components/ProjectElevate";
import Tools from "@/components/__home_components/Tools";
import ProjectCost from "@/components/__home_components/ProjectCost/ProjectCost";
import { FAQ } from "@/components/__home_components/FAQ";
import ContactHome from "@/components/__home_components/contactHome/ContactHome";
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
      

      {/* =================== our service section ============== */}
        <OurService/>

      {/* =================== Review Section ============== */}
        <Review/>

        <HiringUs/>

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
      <div>
        <LocationMap/>
        
      </div>
      {/* Our Location Section ends */}
      <div>
        <ContactHome/>
      </div>
    </main>
  );
};

export default BathroomReno;
