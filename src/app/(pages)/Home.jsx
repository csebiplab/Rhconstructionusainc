"use client";
import "../styles/Home.css";
// import OurCommitment from "@/components/__home_components/OurCommitment";
// import GeneralContractor from "@/components/__home_components/GeneralContractor";
import AboutUs from "@/components/__home_components/AboutUs";
import Constructor from "@/components/__home_components/Constructor/Constructor";
import ExperiencedContractor from "@/components/__home_components/ExperiencedContractor";
import { FAQ } from "@/components/__home_components/FAQ";
import GallerySection from "@/components/__home_components/GallerySection";
import Hero from "@/components/__home_components/Hero";
import LocationMap from "@/components/__home_components/LocationMap";
import ProjectCost from "@/components/__home_components/ProjectCost/ProjectCost";
import ProjectElevate from "@/components/__home_components/ProjectElevate";
import RatingComponent from "@/components/__home_components/RatingComponent";
import Review from "@/components/__home_components/Review/Review";
import RhconstructionSection from "@/components/__home_components/RhconstructionSection";
import Right from "@/components/__home_components/Right";
import Tools from "@/components/__home_components/Tools";
import TrustUs from "@/components/__home_components/TrustUs";
import WorkingProcess from "@/components/__home_components/WorkingProcess";
import ContactHome from "@/components/__home_components/contactHome/ContactHome";
import OurServices from "@/components/__home_components/ourServices/OurServices";

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
      <div className="md:py-6 lg:py-[55px] custom-container">
        <GallerySection />
      </div>

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
      <FAQ />

      {/* ============= Constructor Section ================= */}
      <Constructor />

      {/* ================ Location Map ===================== */}
      <div>
        <LocationMap />
      </div>
      {/* Our Location Section ends */}
      <div>
        <ContactHome></ContactHome>
      </div>
    </main>
  );
};

export default Home;
