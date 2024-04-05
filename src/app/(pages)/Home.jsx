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

/*
const HomeBlogs = () => {
  const {
    data: blogs,
    error,
    isLoading,
  } = useSwr("/blogs?limit=3", async (uri) => {
    try {
      const { data } = await API.get(uri);
      return data?.data;
    } catch (error) {
      throw errorMessage(error);
    }
  });
  if (isLoading) {
    return (
      <div className="py-16 flex justify-center">
        <Spinner height={25} width={25} />
      </div>
    );
  }
  if (error) return null;
  return (
    <section>
      <div className="container py-16">
        <div className="text-center mb-5">
          <h1 className="text-gray-900 font-bold mb-2">
            POPULAR <span className="text-primary">BLOGS</span>
          </h1>
          <p className="max-w-md mx-auto text-secondary">Most recent blogs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(Array.isArray(blogs) ? blogs : [])?.map((item, key) => (
            <BlogCard data={item} key={key} />
          ))}
        </div>
        <div className="text-center py-10 ">
          <Button>SEE MORE </Button>
        </div>
      </div>
    </section>
  );
};
*/

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
        <OurServices></OurServices>
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
