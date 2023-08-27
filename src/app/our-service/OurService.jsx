"use client";

import PageBuilder from "@/components/PageBuilder";
import PageHeader from "@/components/common/PageHeader";
import constants from "@/libs/constant";
import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { BsTelephoneForwardFill } from "react-icons/bs";

const OurService = () => {
  return (
    <>
      <PageHeader
        bg="url(/assets/images/about-header-bg.webp)"
        title={"OUR SERVICES"}
        className="bg-gray-900/70 bg-blend-multiply"
        page={{ title: "Our Service", route: "/our-service" }}
      />
      <PageBuilder />

      <section>
        <div className="container py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <img src="/assets/images/service-man.webp" alt="" className="w-fll rounded-md mx-auto" />
          <div>
            <Typography variant="h1" classNamemb-7 font-semibold>
              WHAT <span className="text-primary">WE ARE</span>{" "}
            </Typography>
            <p className="text-secondary text-lg leading-relaxed first-letter:font-semibold first-letter:text-4xl first-letter:text-primary">
              RH Construction is a general construction company located in
              Brooklyn New York, operated with over 10 years of remodel and roof
              repair experience. We offer best-in-class contractor services for
              commercial and homeowners too. We are also capable of
              accomplishing a big and a small job that gets provided to us. We
              work as a general contractor and believe in completing the project
              from the beginning to its completion.
            </p>
          </div>
        </div>
      </section>

      {/* OUT SERVICE */}
      <section>
        <div className="container pt">
          <div className="grid grid-cols-1 mg:grid-cols-4 lg:grid-cols-6 gap-2 items-end">
            <div className="col-span-1 md:col-span-3 lg:col-span-4 pb-20">
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
              className="col-span-2 mx-auto w-full max-w-[220px]"
            />
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
                  href={`tel:${constants.hotline}`}
                  className="flex justify-center items-center gap-4 rounded-full hover:bg-white/10 text-lg py-3 px-4"
                >
                  <BsTelephoneForwardFill /> {constants.hotline}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurService;
