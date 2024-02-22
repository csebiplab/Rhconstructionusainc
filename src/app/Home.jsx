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

// Slider info
const slidersInfo = [
  {
    bg: "/assets/images/slider-bg-one.webp",
    img: "/assets/images/slider-img-one.webp",
    title: "The Best Construction Companies in Brooklyn",
    subtitle:
      "RH Construction USA Inc. stands as a beacon of excellence among construction companies in Brooklyn, earning its reputation as one of the best in the industry.",
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
          "--swiper-navigation-size": "22px",
          "--swiper-theme-color": "white",
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
                <div className="container grid grid-cols-1 md:grid-cols-2 items-end">
                  <div className="h-full w-full flex flex-col justify-center items-center text-center md:text-left">
                    <h1 className="mb-3 font-bold lg:text-6xl">
                      {item?.title}
                    </h1>
                    <h3 className="mb-8">{item?.subtitle}</h3>
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
                    className="w-full hidden md:block"
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
      <section className="py-10 pt-32">
        <div className="container">
          <div className="text-center mb-3">
            <h1 class="leading-10 mb-1">
              <span className="text-primary">R H</span> Construction USA, Inc.
            </h1>
            <h3>Welcome to The Leading Construction Companies in Brooklyn</h3>
            <p className="max-w-lg xl:max-w-5xl mx-auto text-secondary mt-4">
              RH Construction USA Inc. stands out as one of the leading
              construction companies in Brooklyn, embodying a commitment to
              excellence and innovation in the industry. With a proven track
              record of successfully delivering a diverse range of construction
              projects, our construction company has earned a stellar reputation
              for its dedication to quality craftsmanship and timely completion.
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
        className="bg-cover bg-right md:bg-cetner bg-primary"
        style={{
          backgroundImage: "url(/assets/images/call-to-action-bg.webp)",
        }}
      >
        <div className="container py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
            <div className="lg:col-span-2" />
            <div className="lg:col-span-3">
              <h1 class="leading-10">
                Discover Excellence in Construction with{" "}
                <span className="text-gray-900">R H</span> Construction USA Inc
              </h1>
              <p className="text-base mb-5 leading-6 font-bold mt-4">
                RH Construction USA Inc. is your gateway to discovering
                excellence in construction services. With a commitment to
                quality craftsmanship, innovation, and client satisfaction, we
                bring a wealth of experience to every project. Whether it's
                residential, commercial, or industrial construction, our skilled
                team strives for perfection in every detail. From the initial
                concept to the final touches, we prioritize efficiency and
                precision, ensuring that your vision becomes a reality. At our
                company, we believe in building more than structures; we build
                lasting relationships with our clients through trust and
                reliability from all construction companies in Brooklyn.
              </p>
              <div className="flex gap-3  items-center flex-wrap">
                <Button className="rounded-full bg-white hover:bg-gray-900 text-black hover:text-white text-lg font-semibold tracking-wider">
                  Request a Quote
                </Button>
                <a
                  href={`tel:${constant.hotline}`}
                  className="flex justify-center items-center gap-4 rounded-full hover:bg-white/10 text-lg py-3 px-4"
                >
                  <BsTelephoneForwardFill /> {constant.hotline}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* OUR SERVICE */}
      <section>
        <div className="container py-20">
          <div className="grid grid-cols-1 mg:grid-cols-4 lg:grid-cols-6 gap-2">
            <div className="col-span-1 md:col-span-3 lg:col-span-4">
              <div className="mb-20">
                <h1 className="mb-3 font-bold">
                  OUR <span className="text-primary">SERVICES</span>
                </h1>
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
        className="consideringPlan__arrea bg-cover bg-right bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(to left, white 50%, transparent 60%), url(/assets/images/house-bg.webp)",
        }}
      >
        <div className="container grid grid-cols-1 md:grid-cols-2 py-20">
          <div />
          <div className="py-10">
            <h1 className="mb-4 font-bold">
              The Best Dependable Construction Companies in Brooklyn
            </h1>
            <p className="text-secondary mb-2 leading-relaxed font-medium">
              When it comes to dependable construction companies in Brooklyn, a
              few names stand out for their consistent quality and reliability.
              One such company is RH Construction USA Inc., known for its
              commitment to excellence and attention to detail. With a track
              record of successful projects across the borough, our construction
              company has earned a reputation for delivering projects on time
              and within budget, making them a top choice for clients seeking
              reliability and professionalism.
              <br /> <br /> Our construction company in Brooklyn is renowned for
              its expertise in both residential and commercial projects. With a
              team of skilled professionals and a dedication to client
              satisfaction, our builders have built a strong presence in the
              local construction industry. Our emphasis on transparency and
              clear communication ensures that clients are kept informed every
              step of the way, fostering trust and confidence in our abilities
              to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>
      {/* OUR COMMITMENT End*/}

      {/* Construction Project Section Starts */}
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 py-10 pb-0">
          <div className=" py-10 pt-20">
            <h1 className="mb-2 font-bold">
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
            className="h-full mx-auto"
          />
        </div>
      </section>
      {/* Construction Project Section Ends */}
    </main>
  );
};

export default Home;
