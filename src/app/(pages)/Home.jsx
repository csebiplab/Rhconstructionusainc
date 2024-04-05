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

      {/* <section
        className="bg-cover bg-right md:bg-center bg-primary my-6"
        style={{
          backgroundImage: "url(/assets/images/call-to-action-bg.webp)",
        }}
      >
        <div className="container py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
            <div className="lg:col-span-2" />
            <div className="lg:col-span-3">
              <h1 className="leading-10 text-[2rem]">
                About Our General Contractor Company
                <br />
                with
                <span className="text-white ml-2">
                  R H Construction USA Inc
                </span>
              </h1>
              <p className="text-base mb-5 leading-6 font-medium mt-4 text-white">
                Since 2009, RH Construction USA Inc. has been dedicated to
                delivering excellence in construction services, boasting over 15
                years of expertise in home renovations, bathroom and kitchen
                remodeling, roofing repair, and various construction projects.
                As a locally owned and operated company based in Brooklyn, our
                commitment to quality craftsmanship, innovation, and client
                satisfaction sets us apart. With a skilled team prioritizing
                efficiency and precision, we transform visions into realities,
                ensuring every detail is perfected. Whether it's residential,
                commercial, or industrial construction, RH Construction USA Inc.
                is poised to exceed expectations with our quick, reliable, and
                professional touch, leaving our clients as our next happy
                customers.
              </p>
              <div className="flex gap-3  items-center flex-wrap">
                <Button className="rounded-full bg-white hover:bg-gray-900 text-black hover:text-white text-lg font-semibold tracking-wider">
                  Request a Quote
                </Button>
                <a
                  href={`tel:${constant.hotline}`}
                  className="flex justify-center items-center gap-4 rounded-full hover:bg-white/10 text-lg py-3 px-4"
                >
                  <BsTelephoneForwardFill />
                  {constant.hotline}
                  <span className="text-sm font-bold font-serif">
                    {constant.hotline}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* OUR COMMITMENT SECTION */}
      {/* <section className="py-10">
        <OurCommitment />
      </section> */}
      {/* <section className="container pt-20">
        <TrustedGeneralContractor />
      </section> */}

      {/* OUR SERVICE */}

      {/* <HomeBlogs /> */}
      {/* OUR COMMITMENT Start*/}

      {/* OUR COMMITMENT End*/}
      {/* Choosing The Right Contractor Start*/}

      {/* Choosing The Right Contractor Start*/}

      {/* Our working process */}
      {/* <section className="container py-20">
        <OurWorkingProcess />
      </section> */}

      {/* General Contractor section */}
      {/* <section className="my-10">
        <GeneralContractor />
      </section> */}

      {/* Your Construction Project */}
      {/* <section className="py-20 container">
        <ElevateYourConstructionProjects />
      </section> */}

      {/* ConstructionsToolsNEquepments */}
      {/* <section className="pt-20 container">
        <ConstructionsToolsNEquepments />
      </section> */}

      {/* Cost of constructions */}
      {/* <section className="pt-20 container">
        <CostOfConstructions />
      </section> */}

      {/* Our Past Projects Gallery */}

      {/* FAQ ACCORDION starts */}
      {/* <section className="py-20 container">
        <FaqAccordion />
      </section> */}
      {/* FAQ ACCORDION ends */}

      {/* Construction Project Section Starts */}

      {/* Construction Project Section Ends */}

      {/* Our Location Section starts */}
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
