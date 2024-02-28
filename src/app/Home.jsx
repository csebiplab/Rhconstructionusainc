"use client";

import Slider from "@/components/Slider";
import { BlogCard } from "@/components/cards/Blog.Card";
import API from "@/config/API.config";
import constant, {
  partOfconstructionProjectConsiderations,
} from "@/libs/constant";

import { errorMessage } from "@/libs/utils";
import { Button, Spinner } from "@material-tailwind/react";
import Link from "next/link";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { SwiperSlide } from "swiper/react";
import useSwr from "swr";
import "./styles/Home.css";
// import OurCommitment from "@/components/__home_components/OurCommitment";
import OurWorkingProcess from "@/components/__home_components/OurWorkingProcess";
// import GeneralContractor from "@/components/__home_components/GeneralContractor";
import YourConstructionProjects from "@/components/__home_components/YourConstructionProjects";
import { FaqAccordion } from "@/components/__home_components/FaqAccordion";
import TrustedGeneralContractor from "@/components/__home_components/TrustedGeneralContractor";

// Slider info
const slidersInfo = [
  {
    bg: "/assets/images/slider-bg-one.webp",
    img: "/assets/images/slider-img-one.webp",
    title: `General Contractor Brooklyn`,
    subtitle:
      "Top-rated general contractor in Brooklyn, delivering exceptional construction and renovation services with expertise and integrity.",
    route: "/",
  },
  {
    bg: "/assets/images/slider-bg-two.webp",
    img: "/assets/images/slider-img-two.webp",
    title: "Industrial Contractor",
    subtitle:
      "With a reputation for delivering innovative solutions and unmatched expertise, our industrial contractor seamlessly transforms visions into reality, setting new standards of excellence in every project.",
    route: "/",
  },
  {
    bg: "/assets/images/slider-bg-three.webp",
    img: "/assets/images/slider-img-three.webp",
    title: "All Construction Services",
    subtitle:
      "From construction groundbreaking to construction cleaning services, our construction services company brings your vision to life with precision and expertise.",
    route: "/",
  },
];

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
      <Slider
        className="max-h-[600px] overflow-hidden"
        id="home-banner-slider"
        style={{
          "--swiper-navigation-size": "48px",
          "--swiper-theme-color": "blue",
        }}
      >
        {slidersInfo.map((item, key) => (
          <SwiperSlide key={key} className=" h-full">
            {({ isActive }) => (
              <div
                style={{
                  backgroundImage: `url(${item.bg})`,
                  opacity: isActive ? 1 : 0,
                }}
                className="bg-cover bg-center text-white"
              >
                <div className="container grid grid-cols-1 md:grid-cols-9 items-end">
                  <div className="z-50 h-full w-full md:col-span-6 flex flex-col justify-center items-center md:text-left mt-52 md:mt-0">
                    <h1 className="w-full font-bold text-4xl lg:text-[43px] leading-tight md:text-left">
                      <>
                        {item?.title}
                        {/* {key !== 0 ? (
                          <> {item?.title}</>
                        ) : (
                          <>
                            {item?.title?.split(" in ")[0]}
                            <br />
                            {"in " + item?.title?.split(" in ")[1]}
                          </>
                        )} */}
                      </>
                    </h1>
                    <h3 className="my-10">{item?.subtitle}</h3>
                    <div className="w-full">
                      <Button
                        size="lg"
                        className="tracking-wider text-lg bg-primary text-black rounded-full"
                      >
                        Free Estimate
                      </Button>
                    </div>
                  </div>
                  <img
                    src={item.img}
                    alt=""
                    className="w-full -mt-64 md:mt-0 block md:col-span-3"
                  />
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Slider>
      <div className="container flex justify-center items-center absolute left-1/2 -translate-x-1/2 z-50">
        <img
          src="/assets/images/hat.png"
          className="w-40 h-40 object-contain object-center mx-auto -mt-20"
        />
      </div>
      <section className="py-10 pt-32 bg-[#FCFCFB]">
        <div className="container">
          <div className="text-center mb-3">
            <h1 className="leading-10 mb-1">
              <span className="text-primary">R H</span> Construction USA, Inc.
            </h1>
            <h3>Leading Construction Company in Brooklyn</h3>
            <p className="max-w-lg xl:max-w-5xl mx-auto text-secondary mt-4">
              RH Construction USA Inc. stands out as one of the leading
              construction companies in Brooklyn, embodying a commitment to
              excellence and innovation in the industry. With a proven track
              record of successfully delivering a diverse range of construction
              projects, the general contractor of our construction company has
              earned a stellar reputation for its dedication to quality
              craftsmanship and timely completion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
            {[
              {
                icon: "/assets/images/construction-icon.png",
                title: "Highly trained Staff",
                desc: "We hire only highly trained staff for best results.",
              },
              {
                icon: "/assets/images/construction-icon-2.png",
                title: "Competitive Pricing",
                desc: "We quote the best price possible in the industry.",
              },
              {
                icon: "/assets/images/construction-icon-3.png",
                title: "Satisfaction Guaranteed",
                desc: "100% Customer satisfaction is our sole motto.",
              },
            ].map((item, key) => (
              <figure
                key={key}
                className="flex flex-col justify-center items-center p-3 max-w-[320px] text-center mx-auto"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  loading="lazy"
                  className="h-24 w-24 object-contain mb-3"
                />
                <h3 className="text-gray-700">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </figure>
            ))}
          </div>
        </div>
      </section>
      {/* CALL TO ACTIONS */}
      <section
        className="bg-cover bg-right md:bg-cetner bg-primary my-6"
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
                {/* <br />
                with
                <span className="text-white ml-2">
                  R H Construction USA Inc
                </span> */}
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
                  {/* {constant.hotline} */}
                  <span className="text-sm font-bold font-serif">
                    {constant.hotline}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR COMMITMENT SECTION */}
      {/* <section className="py-10">
        <OurCommitment />
      </section> */}
      <section className="container pt-20">
        <TrustedGeneralContractor />
      </section>

      {/* OUR SERVICE */}
      <section className="">
        <div className="container py-20">
          <div className="grid grid-cols-1 mg:grid-cols-4 lg:grid-cols-6 gap-2">
            <div className="col-span-1 md:col-span-3 lg:col-span-4">
              <div className="mb-20">
                <h1 className="mb-3 font-bold">
                  OUR <span className="text-primary">SERVICES</span>
                </h1>
                <h5 className="mb-3 font-semibold">
                  Enjoy a stress-free construction service with our unique build
                  process.
                </h5>
                <p className="text-secondary leading-7">
                  <Link href="/" className="text-primary text-lg font-semibold">
                    RH Construction USA,
                  </Link>{" "}
                  is your trusted partner for top-notch construction services,
                  dedicated to bringing your dream project to life. From
                  conceptualization to completion, we prioritize quality
                  craftsmanship, timely delivery, and cost-effective solutions
                  to meet and exceed your expectations.
                </p>
                <p className="text-secondary leading-7 mt-2">
                  At our company, we understand that your dream project is a
                  significant investment, and we take pride in delivering
                  unparalleled construction service that reflects our unwavering
                  commitment to customer satisfaction. Whether you're
                  envisioning a residential masterpiece or a commercial
                  endeavor, our experienced team is equipped to handle a diverse
                  range of projects.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <figure>
                  <h3 className="mb-2">Interior</h3>
                  <ul>
                    {[
                      "Bathroom Remodeling",
                      "Kitchen Remodeling",
                      "Painting",
                      "Sheetrock",
                      "Plastering",
                      "Electrical",
                      "Plumbing",
                    ].map((item, key) => (
                      <li key={key}>
                        <Link
                          href="/"
                          className="p-1 rounded-md flex gap-2 items-center duration-200 hover:bg-black hover:text-white border border-transparent hover:border-black/10"
                        >
                          <span className="h-2 w-2 rounded-full bg-primary inline-block" />{" "}
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </figure>
                <figure>
                  <h3 className="mb-2">Exterior</h3>
                  <ul>
                    {[
                      "Roofing",
                      "Pointing",
                      "Water Proofing",
                      "Sidewalk Repair and Replace",
                      "Brown Stone Repair",
                      "Brick Works",
                      "Power Wash",
                      "Siding and all kinds of masonry work",
                    ].map((item, key) => (
                      <li key={key}>
                        <Link
                          href="/"
                          className="p-1 rounded-md flex gap-2 items-center duration-200 hover:bg-black hover:text-white border border-transparent hover:border-black/10"
                        >
                          <span className="h-2 w-2 rounded-full bg-primary inline-block" />{" "}
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </figure>
                {/* <figure>
                  <ul className="lg:mt-10">
                    {[
                      "Bathroom Remodeling",
                      "Kitchen Remodeling",
                      "Painting",
                      "Sheetrock",
                      "Plastering",
                      "Electrical and Plumbing",
                    ].map((item, key) => (
                      <li key={key}>
                        <Link
                          href="/"
                          className="p-1 rounded-md flex gap-2 items-center duration-200 hover:bg-black hover:text-white border border-transparent hover:border-black/10"
                        >
                          <span className="h-2 w-2 rounded-full bg-primary inline-block" />{" "}
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </figure> */}
              </div>
            </div>
            <img
              src="/assets/images/our-service-home-man.webp"
              alt="ourservice man"
              className="col-span-2 mx-auto h-full mt-16"
            />
          </div>
        </div>
      </section>
      <HomeBlogs />
      {/* OUR COMMITMENT Start*/}
      <section
        className="bg-cover bg-right bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(to left, white 50%, transparent 60%), url(/assets/images/house-bg.webp)",
        }}
      >
        <div className="container grid grid-cols-1 md:grid-cols-2 py-20">
          <div />
          <div className="py-10">
            <h1 className="mb-4 font-bold">
              Experienced Brooklyn General Contractor
              {/* <span className="text-primary">in Brooklyn</span> */}
            </h1>
            <p className="text-secondary mb-2 leading-relaxed font-medium">
              With years of expertise and a solid educational background, our
              Brooklyn-based general contracting firm stands out as a reliable
              partner for your construction projects. Our team comprises
              seasoned professionals who bring a wealth of knowledge and
              hands-on experience to every job site. From residential
              renovations to commercial builds, we have successfully delivered
              projects of varying scales, earning a reputation for excellence
              and integrity within the community.
              <br />
              <br />
              At our core, we prioritize client satisfaction by combining our
              technical prowess with clear communication and meticulous
              attention to detail. Our commitment to staying abreast of industry
              advancements ensures that we employ the latest techniques and
              technologies to optimize project efficiency and quality. Whether
              you're envisioning a modern urban renovation or a timeless
              architectural masterpiece, our well-experienced and educated team
              is dedicated to bringing your vision to life with precision and
              professionalism.
            </p>
          </div>
        </div>
      </section>
      {/* OUR COMMITMENT End*/}
      {/* Choosing The Right Contractor Start*/}
      <section
        className="bg-cover bg-right bg-fixed w-full min-h-screen"
        style={{
          backgroundImage: "url(/assets/images/house-bg.webp)",
        }}
      >
        <div className="container grid grid-cols-1 md:grid-cols-2 py-20">
          <div />

          <div className="py-10">
            <h1 className="mb-4 font-bold">
              Choosing the Right General Contractor{" "}
              <span className="text-primary">in Brooklyn</span>
            </h1>
            <p className="text-secondary mb-2 leading-relaxed font-medium">
              Choosing the right general contractor from all construction
              companies in Brooklyn is a crucial step in ensuring the success of
              your construction project. RH Construction USA Inc., a prominent
              player in the industry, stands out as a reliable choice for
              discerning clients. With a proven track record of delivering
              high-quality construction services in Brooklyn, we bring a wealth
              of experience and expertise to the table. Our commitment to
              excellence is evident in our attention to detail, timely project
              completion, and customer satisfaction. When searching for a
              general contractor in Brooklyn, our company emerges as a reliable
              partner dedicated to turning your construction dreams into
              reality.
            </p>
          </div>
        </div>
      </section>
      {/* Choosing The Right Contractor Start*/}

      {/* Our working process */}
      <section className="container py-20">
        <OurWorkingProcess />
      </section>

      {/* General Contractor section */}
      {/* <section className="my-10">
        <GeneralContractor />
      </section> */}

      {/* Your Construction Project */}
      <section className="py-20 container">
        <YourConstructionProjects />
      </section>

      {/* FAQ ACCORDION starts */}
      <section className="py-20 container">
        <FaqAccordion />
      </section>
      {/* FAQ ACCORDION ends */}

      {/* Construction Project Section Starts */}
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 py-10 pb-0">
          <div>
            <h1 className="mb-2 font-bold text-[2rem]">
              What To Consider First When You Hire the
              <span className="text-primary ml-2">Best Contractors</span>
            </h1>
            <p className="font-medium mb-4">
              When selecting the best contractors from all construction
              companies in Brooklyn for your project, it's crucial to consider
              several key factors to ensure a successful and satisfactory
              outcome. Here are the top considerations to prioritize, listed in
              order of importance:
            </p>
            <Slider
              className="max-h-[600px] overflow-hidden slider-area"
              id="home-banner-slider"
              style={{
                "--swiper-navigation-size": "22px",
                "--swiper-theme-color": "black",
              }}
            >
              {partOfconstructionProjectConsiderations?.map((item, key) => (
                <SwiperSlide key={key} className=" h-full">
                  {({ isActive }) => (
                    <div
                      style={{
                        // backgroundImage: `url(${item.bg})`,
                        // background: "#000",
                        opacity: isActive ? 1 : 0,
                      }}
                      className="bg-cover bg-center text-white"
                    >
                      <div className="content-areea">
                        <ul className="list-inside list-disc planning__more-content-list">
                          {item?.part?.data?.map((item, key) => (
                            <li
                              key={key}
                              className="flex gap-2 items-center py-1 px-2 text-lg text-secondary font-medium mb-2"
                            >
                              <span className="h-4 w-4 rounded-full bg-primary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Slider>
            <p>
              By systematically evaluating these factors, you'll be better
              equipped to choose the best contractor for your project, ensuring
              a successful and stress-free construction or renovation
              experience.
            </p>
          </div>
          <img
            src="/assets/images/man-like-smile.webp"
            alt="man-like-smile"
            className="h-full mx-auto md:mt-12 -z-10"
          />
        </div>
      </section>
      {/* Construction Project Section Ends */}
    </main>
  );
};

export default Home;
