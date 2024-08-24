"use client";
import "../styles/Home.css";
// import OurCommitment from "@/components/__home_components/OurCommitment";
// import GeneralContractor from "@/components/__home_components/GeneralContractor";
import AboutUs from "@/components/__home_components/AboutUs";
import Constructor from "@/components/__home_components/Constructor/Constructor";
import ExperiencedContractor from "@/components/__home_components/ExperiencedContractor";
import Faq from "@/components/__home_components/FAQ/FAQ";
import Hero from "@/components/__home_components/Hero";
import LocationMap from "@/components/__home_components/LocationMap";
import ProjectCost from "@/components/__home_components/ProjectCost/ProjectCost";
import ProjectElevate from "@/components/__home_components/ProjectElevate";
import ProjectGallery from "@/components/__home_components/ProjectGallery/ProjectGallery";
import RatingComponent from "@/components/__home_components/RatingComponent";
import Review from "@/components/__home_components/Review/Review";
import RhconstructionSection from "@/components/__home_components/RhconstructionSection/RhconstructionSection";

import Right from "@/components/__home_components/Right";
import Tools from "@/components/__home_components/Tools";
import TrustUs from "@/components/__home_components/TrustUs";
import WorkingProcess from "@/components/__home_components/WorkingProcess";
import OurServices from "@/components/__home_components/ourServices/OurServices";
import ContactUs from "@/components/bathroom-reno-components/contactUs/ContactUs";

const Home = () => {
  return (
    <main>
      {/* =============================== Hero Banner =========================== */}
      <Hero />

      {/* =============== Rating  Section================= */}
      <RatingComponent />

      {/* ================== R H CONSTRUCTION Section ===== */}
      <RhconstructionSection />

      {/* ================ about us ============== */}
      <AboutUs />
      {/* =================== Trust Us ============== */}

      <TrustUs />

      {/* =================== Working Process ============== */}
      <div>
        <OurServices />
      </div>
      {/* =================== Working Process ============== */}

      {/* =================== Working Process ============== */}
      <WorkingProcess />

      {/* =================== Review Section ============== */}
      <Review />

      {/* ================ Gallery ============== */}

      <ProjectGallery/>

      {/* ============= EXPERIENCED CONTRACTOR =============== */}
      <ExperiencedContractor />

      {/* ========== Right General Section ============== */}
      <Right />

      {/* =============== Project Elevate ============= */}
      <ProjectElevate />

      {/* =============== Equip & Tools ============== */}
      <Tools />

      {/* ===================== Project Cost =========== */}
      <ProjectCost />

      {/* ==================== FAQ Section ======================= */}
      <Faq/>

      {/* ============= Constructor Section ================= */}
      <Constructor />

      {/* ================ Location Map ===================== */}
      <div>
        <LocationMap />
      </div>
      {/* contact us Section ends */}

      <section>
        <ContactUs />
      </section>
    </main>
  );
};

export default Home;
