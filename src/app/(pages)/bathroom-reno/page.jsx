"use client";

import "../../styles/Home.css";


import RatingComponent from "@/components/__home_components/RatingComponent";
import RhconstructionSection from "@/components/__home_components/RhconstructionSection/RhconstructionSection";
import AboutUs from "@/components/__home_components/AboutUs";
import TrustUs from "@/components/__home_components/TrustUs";
import OurServices from "@/components/__home_components/ourServices/OurServices";
import WorkingProcess from "@/components/__home_components/WorkingProcess";
import Review from "@/components/__home_components/Review";
import GallerySection from "@/components/__home_components/GallerySection";
import ExperiencedContractor from "@/components/__home_components/ExperiencedContractor";
import Right from "@/components/__home_components/Right";
import ProjectElevate from "@/components/__home_components/ProjectElevate";
import Tools from "@/components/__home_components/Tools";
import ProjectCost from "@/components/__home_components/ProjectCost/ProjectCost";
import { FAQ } from "@/components/__home_components/FAQ";
import Constructor from "@/components/__home_components/Constructor/Constructor";
// import LocationMap from "@/components/__home_components/LocationMap";
import ContactHome from "@/components/__home_components/contactHome/ContactHome";
import BathroomRenoHero from "@/components/bathroom-reno-components/BathroomRenoHero/BathroomRenoHero";
import AboutBathroomReno from "@/components/bathroom-reno-components/AboutBathroomReno/AboutBathroomReno";
import BathroomRemodeling from "@/components/bathroom-reno-components/BathroomRemodeling/BathroomRemodeling";
import LocationMap from "@/components/bathroom-reno-components/LocationMap/LocationMap";
import ReadyToWork from "@/components/bathroom-reno-components/ReadyToWork/ReadyToWork";
import FaqSection from "@/components/bathroom-reno-components/FaqSection/FaqSection";
import ProjectGallery from "@/components/bathroom-reno-components/ProjectGallery/ProjectGallery";


const BathroomReno = () => {
  return (
    <main>
      {/* =============================== Hero Banner =========================== */}

      <BathroomRenoHero/>

      {/* =============== Rating  Section================= */}
      <RatingComponent />

      {/* ================== AboutBathroomReno Section ===== */}
      <AboutBathroomReno/>
      <BathroomRemodeling/>

      {/* ================ about us ============== */}
      {/* <AboutUs /> */}
      {/* =================== Trust Us ============== */}

      {/* <TrustUs /> */}

      {/* =================== Working Process ============== */}
      <div>
        <OurServices />
      </div>
      {/* =================== Working Process ============== */}

      {/* =================== Working Process ============== */}
      <WorkingProcess />

      {/* =================== Review Section ============== */}
      <Review />



      {/* ================ Ready to Work ============== */}
      <ReadyToWork/>

      {/* ================ Gallery ============== */}
      <ProjectGallery/>


      {/* ============= Constructor Section ================= */}
      <Constructor />

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
