"use client";
import vector from "@/components/__home_components/Images/Vector.png";
import { BlogCard } from "@/components/cards/Blog.Card";
import API from "@/config/API.config";
import { errorMessage } from "@/lib/utils";
import { Button, Spinner } from "@material-tailwind/react";
import useSwr from "swr";
import "../styles/Home.css";
// import OurCommitment from "@/components/__home_components/OurCommitment";
// import GeneralContractor from "@/components/__home_components/GeneralContractor";
import AboutUs from "@/components/__home_components/AboutUs";
import Achievement from "@/components/__home_components/Achievement";
import Brand from "@/components/__home_components/Brand";
import Constructor from "@/components/__home_components/Constructor";
import ExperiencedContractor from "@/components/__home_components/ExperiencedContractor";
import { FAQ } from "@/components/__home_components/FAQ";
import GallerySection from "@/components/__home_components/GallerySection";
import Hero from "@/components/__home_components/Hero";
import title from "@/components/__home_components/Images/title.png";
import work from "@/components/__home_components/Images/work.png";
import work1 from "@/components/__home_components/Images/work1.png";
import work2 from "@/components/__home_components/Images/work2.png";
import work3 from "@/components/__home_components/Images/work3.png";
import LocationMap from "@/components/__home_components/LocationMap";
import ProjectCost from "@/components/__home_components/ProjectCost";
import ProjectElevate from "@/components/__home_components/ProjectElevate";
import Rating from "@/components/__home_components/Rating";
import RatingProgressBar from "@/components/__home_components/RatingProgressBar";
import Review from "@/components/__home_components/Review";
import Right from "@/components/__home_components/Right";
import Tools from "@/components/__home_components/Tools";
import TrustUs from "@/components/__home_components/TrustUs";
import WorkingProcess from "@/components/__home_components/WorkingProcess";
import ContactHome from "@/components/__home_components/contactHome/ContactHome";
import OurServices from "@/components/__home_components/ourServices/OurServices";
import Image from "next/image";



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

const Home = () => {
  return (
    <main>


      {/* =============================== Hero Banner =========================== */}
      <Hero />

      {/* =============== Rating ================= */}

      <div className="md:py-[15px] py-10">
        <div className="md:w-[87.95%] w-full mx-auto">
          <div className="md:w-[980px] w-full mx-auto">
            <div className="rating p-6 rounded-[8px]">
              <h2 className="lg:text-2xl text-lg leading-[36px] mb-3">Ratings</h2>
              <div className="flex justify-between gap-5">
                <div className="w-[260px]">
                  <div>
                    <div className="w-[60px] h-[60px] mx-auto text-[#FAA500] text-lg font-bold text-center leading-[60px] border-[2px] border-[#DBDBDB] rounded-full">
                      4.9
                    </div>
                    <Rating />
                    <p className="text-sm font-bold leading-[21px] text-[#1B1B1B] mt-1 text-center">
                      61 Verified Reviews*
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <span className="absolute top-[17px] h-[72px] w-[2px] bg-[#DBDBDB] mr-3"></span>
                </div>
                <div className="w-[390px]">
                  <RatingProgressBar />
                </div>
                <div className="relative">
                  <span className="absolute top-[17px] h-[72px] w-[2px] bg-[#DBDBDB]"></span>
                </div>
                <div className="w-[260px]">
                  <div>
                    <div className="flex">
                      <h4 className="text-[#000] lg:text-lg font-bold mb-5">
                        Highly rated for
                      </h4>
                      <img
                        src={vector.src}
                        className="w-[22px] h-[24px] ms-3"
                      />
                    </div>
                    <div className="flex justify-center">
                      <h5 className="me-4 border-2 bg-[#EAEAEA] font-semibold text-[#000] text-sm px-2">
                        Quality
                      </h5>
                      <h5 className="border-2 bg-[#EAEAEA] font-semibold text-[#000] text-sm px-2">
                        Value
                      </h5>
                    </div>
                    <h5 className="border-2 bg-[#EAEAEA] text-[#000] font-semibold text-sm px-2 text-center mt-2 w-8/12 mx-auto">
                      Customer Service
                    </h5>
                  </div>
                </div>
              </div>
              <p className="text-[12px] font-medium leading-[16px] text-[#666666] mt-[15px]">
                *Reviews imported from Google have not been individually
                verified by HomeAdvisor.
              </p>
            </div>

            <Achievement />
          </div>
          <Brand />
        </div>
      </div>


      {/* ================== R H CONSTRUCTION Section ===== */}
      <div className="lg:py-16 py-6 custom-container">
        <div className="lg:flex lg:px-[61px] justify-between gap-10">
          <div>
            <Image src={work} width={608} height={608} alt="" />
          </div>
          <div>
            <Image src={title} width={298} height={18} alt="" />
            <h1 className="leading-10 mb-1 py-4 text-lg lg:text-4xl">R H Construction USA, Inc.</h1>
            <p className="max-w-lg xl:max-w-5xl mx-auto text-black mt-4">
              RH Construction USA Inc. stands out as one of the leading
              construction companies in Brooklyn, embodying a commitment to
              excellence and innovation in the industry. With a proven track
              record of successfully delivering a diverse range of construction
              projects, the general contractor of our construction company has
              earned a stellar reputation for its dedication to quality
              craftsmanship and timely completion.
            </p>

            {/* ============== Image Card =============== */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-center py-10">
              <div className="w-full shadow-md p-0 rounded-sm">
                <Image
                  src={work1}
                  width={221}
                  height={148}
                  alt=""
                  className="w-full"
                />
                <div className="text-center py-3">
                  <h4 className="text-base py-2">Highly trained Staff</h4>
                  <p className="text-sm text-secondary">
                    We hire only highly trained staff <br /> for best results.
                  </p>
                </div>
              </div>
              <div className="w-full shadow-md p-0 rounded-sm">
                <Image
                  src={work2}
                  width={221}
                  height={148}
                  alt=""
                  className="w-full"
                />
                <div className="text-center py-3">
                  <h4 className="text-base py-2">Competitive Pricing</h4>
                  <p className="text-sm text-secondary">
                    We quote the best price possible <br /> in the industry..
                  </p>
                </div>
              </div>
              <div className="w-full shadow-md p-0 rounded-sm">
                <Image
                  src={work3}
                  width={221}
                  height={148}
                  alt=""
                  className="w-full"
                />
                <div className="text-center py-3">
                  <h4 className="text-base py-2">Satisfaction Guaranteed</h4>
                  <p className="text-sm text-secondary">
                    100% Customer satisfaction is <br /> our sole motto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
      <Review/>

      {/* ================ Gallery ============== */}
      <div className="py-16 custom-container">
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
      <div className="py-20">
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
