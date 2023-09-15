"use client";

import Slider from "@/components/Slider";
import { BlogCard } from "@/components/cards/Blog.Card";
import API from "@/config/API.config";
import constant from "@/libs/constant";
import { errorMessage } from "@/libs/utils";
import { Button, Spinner } from "@material-tailwind/react";
import Link from "next/link";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { SwiperSlide } from "swiper/react";
import useSwr from "swr";
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
      <Slider className="max-h-[600px] overflow-hidden" id="home-banner-slider" style={{"--swiper-navigation-size":'22px',"--swiper-theme-color":'white'}}>
        {[
          {
            bg: "/assets/images/slider-bg-one.webp",
            img: "/assets/images/slider-img-one.webp",
            title: "FIXING THE FUTURE",
            subtitle: " Your Best Source For Remodeling, Roofing and More ",
            route: "/",
          },
          {
            bg: "/assets/images/slider-bg-two.webp",
            img: "/assets/images/slider-img-two.webp",
            title: "WE BUILD IT RIGHT",
            subtitle: "Design the best for your real-time.",
            route: "/",
          },
          {
            bg: "/assets/images/slider-bg-three.webp",
            img: "/assets/images/slider-img-three.webp",
            title: "COMMITMENT TO QUALITY",
            subtitle: "GET complete solution for home renovation",
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
                  <div className=" py-52 text-center md:text-left">
                    <h1 className="mb-3 font-bold lg:text-6xl">
                      {item?.title}
                    </h1>
                    <h3 className="mb-8">{item?.subtitle}</h3>
                    <Button
                      size="lg"
                      className="tracking-wider text-lg bg-primary text-black rounded-full"
                    >
                      Free Estimate
                    </Button>
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
      <img src="/assets/images/hat.png" className="w-40 h-40 object-contain object-center mx-auto -mt-20" />
      </div>
      <section className="py-10 pt-32">
        <div className="container">
          <div className="text-center mb-3">
            <h1>
              <span className="text-primary mb-2">R H</span> Construction
              Company USA INC
            </h1>
            <p className="max-w-lg mx-auto text-secondary">
              More than 10 years of experience in home remodeling and roof
              repairing. Locally owned and operated company based in Brooklyn,
              New York.
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
              <h2 className=" mb-5 leading-relaxed ">
                Quality Without Compromise’ is the cornerstone of our
                commitment. Try our services now!
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
                    RH Construction USA
                  </Link>{" "}
                  is the most trusted and many years old construction company
                  headquartered in Brooklyn, New York. We work as the local
                  company at whom you can count. We carry great expertise in
                  providing the best construction services ranging from interior
                  work to exterior general construction work. We are known for
                  providing the best techniques to customers and even enhance
                  their customer experiences. Connect to us at 718-249-5782 to
                  get a free quote for our services.
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
              className="col-span-2 mx-auto"
            />
          </div>
        </div>
      </section>
      <HomeBlogs />
      {/* OUR COMMITMENT */}
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
              OUR <span className="text-primary">COMMITMENT</span>
            </h1>
            <p className="text-secondary mb-2 leading-relaxed font-medium">
              Since 2009, we are delivering best home remodeling and roof repair
              services. We carry a highly trained team that ensures every
              project is done at the right time. We instill pride in ourselves
              to ensure that services get delivered to homes and businesses
              throughout New York.
            </p>
            <p className="text-secondary leading-relaxed font-medium">
              One of the most priceless things assured from our end lies in
              showcasing those services you generally like.
            </p>
          </div>
        </div>
      </section>
      {/* OUR COMMITMENT */}
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 py-10 pb-0">
          <div className=" py-10 pt-20">
            <h1 className="mb-4 font-bold">
              OUR <span className="text-primary">COMMITMENT</span>
            </h1>
            <ul>
              {[
                "Handle any big or small project.",
                "Commitment to professional integrity.",
                "Exceptional service and maximum value.",
                "Year-round installation by our reliable, timely workforce.",
                "Experience of handling everything from beginning to end.",
              ].map((item, key) => (
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
            className="max-w-[260] mx-auto"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
