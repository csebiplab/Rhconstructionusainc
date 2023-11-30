"use client";

import Slider from "@/components/Slider";
import { BlogCard } from "@/components/cards/Blog.Card";
import API from "@/config/API.config";
import constant, {
  constructionProjectConsiderations,
  partOfconstructionProjectConsiderations,
} from "@/libs/constant";

import { errorMessage } from "@/libs/utils";
import { Button, Spinner } from "@material-tailwind/react";
import Link from "next/link";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { SwiperSlide } from "swiper/react";
import useSwr from "swr";
import "./styles/Home.css";
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
console.log(
  "partOfconstructionProjectConsiderations",
  partOfconstructionProjectConsiderations
);
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
        {[
          {
            bg: "/assets/images/slider-bg-one.webp",
            img: "/assets/images/slider-img-one.webp",
            title: "General Contractor Brooklyn",
            subtitle:
              "Our experienced general contractor services in Brooklyn encompass everything from project planning and management to skilled craftsmanship, ensuring a seamless and successful construction experience for our clients.",
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
        ].map((item, key) => (
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
            <h1 class="leading-10 mb-4 sm:mb-4">
              <span className="text-primary">R H</span> Construction USA, Inc.
              Best <br /> Brooklyn Contractors
            </h1>
            <p className="max-w-lg xl:max-w-5xl mx-auto text-secondary">
              RH Construction USA, Inc. stands as a beacon of excellence among
              general contractors in Brooklyn. With a reputation built on
              unwavering dedication to quality and precision, this company has
              established itself as a cornerstone of the construction industry
              in the borough. Their team of skilled professionals brings a
              wealth of experience to every project, ensuring that each endeavor
              is met with the highest standards of craftsmanship. From
              residential renovations to commercial builds, RH Construction USA,
              Inc. approaches every undertaking with meticulous attention to
              detail, ensuring that every client's vision is brought to life.
              What sets them apart is their commitment to open communication,
              fostering a collaborative environment that nurtures creativity and
              innovation. This company understands the unique challenges that
              come with Brooklyn's diverse architectural landscape, and they
              have honed their expertise to seamlessly integrate modern design
              with the area's rich historical character. With a track record of
              successful projects and a portfolio that showcases their
              versatility, RH Construction USA, Inc. continues to be a trusted
              name in the industry, delivering exceptional results that exceed
              expectations time and time again.
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
              <h2 className="text-base mb-5 leading-6 ">
                RH Construction USA, Inc. stands out as one of the best trusted
                and reputable construction companies in Brooklyn, known for
                their impeccable craftsmanship and dedication to excellence in
                every project they undertake.
              </h2>
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
      {/* OUT SERVICE */}
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
                  Inc. stands as a beacon of excellence in the realm of Brooklyn
                  construction services. With a proven track record of
                  delivering top-notch projects, we have earned a stellar
                  reputation for our commitment to quality and customer
                  satisfaction. This dynamic company brings a wealth of
                  expertise to every endeavor, ensuring that each project is
                  executed with precision and finesse. From residential
                  construction services, industrial construction services to
                  commercial construction services, RH Construction USA, Inc.
                  exhibits a versatile skill set that caters to a diverse
                  clientele. Our team of highly skilled professionals is
                  equipped with the latest industry knowledge and technology,
                  guaranteeing that every project is completed to the highest
                  standards. Moreover, their dedication to transparency and open
                  communication fosters a collaborative approach, allowing
                  clients to be actively involved in every stage of the
                  construction process. With a keen eye for detail and a passion
                  for innovation, RH Construction USA, Inc. continues to set the
                  benchmark for excellence in general contractor in Brooklyn.
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
                </figure>
                <figure>
                  <h3 className="mb-2">Interior</h3>
                  <ul>
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
                </figure>
                <figure>
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
                </figure>
              </div>
            </div>
            <img
              src="/assets/images/our-service-home-man.webp"
              alt="ourservice man"
              className="col-span-2 mx-auto h-full"
            />
          </div>
        </div>
      </section>
      <HomeBlogs />
      {/* OUR COMMITMENT */}
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
              <span className="text-primary">OUR Commitment </span>
              as Best Contractors Brooklyn
            </h1>
            <p className="text-secondary mb-2 leading-relaxed font-medium">
              RH Construction USA, Inc. stands out as one of the best
              contractors in Brooklyn, setting a benchmark for excellence in the
              industry. With a sterling reputation built on years of dedicated
              service, we have consistently delivered exceptional craftsmanship
              and superior results. Our team of skilled professionals brings a
              wealth of experience to every project, ensuring meticulous
              attention to detail and a commitment to exceeding client
              expectations. From residential renovations to commercial builds,
              RH Construction USA, Inc.
              <br /> <br /> showcases a diverse portfolio that reflects our
              versatility and expertise. With a client-centric approach and a
              passion for quality, our general contractor in Brooklyn truly
              exemplifies the pinnacle of construction excellence in Brooklyn.
              Since 2009, we have been delivering the best home remodeling and
              roof repair services.
            </p>
          </div>
        </div>
      </section>
      {/* OUR COMMITMENT */}
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 py-10 pb-0">
          <div className=" py-10 pt-20">
            <h1 className="mb-4 font-bold">
              What To Consider First When You Start Planning for Your{" "}
              <span className="text-primary">Construction Project</span>
            </h1>
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
                        <ul className="planning__more-content-list">
                          {item?.part?.data?.map((item, key) => (
                            <li className="flex gap-2 items-center py-1 px-2 text-lg text-secondary font-medium mb-2">
                              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
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
            <ul className="planning__more-content-list">
              {constructionProjectConsiderations?.map((item, key) => (
                <li className="flex gap-2 items-center py-1 px-2 text-lg text-secondary font-medium mb-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <img
            src="/assets/images/man-like-smile.webp"
            alt="man-like-smile"
            className="h-full mx-auto"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
