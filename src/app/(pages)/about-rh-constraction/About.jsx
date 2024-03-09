"use client";

import PageHeader from "@/components/common/PageHeader";
import { Progress, Typography } from "@material-tailwind/react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <PageHeader
        bg="url(/assets/images/about-header-bg.webp)"
        title={"About us"}
        className="bg-gray-900/70 bg-blend-multiply"
        page={{ title: "About us", route: "/about" }}
      />

      <section>
        <div className="container py-14">
          <div className="text-center">
            <img
              src="/assets/images/hat.webp"
              alt="hat"
              className="w-20 md:w-28 lg:w-40 mx-auto mb-4"
            />
            <Typography variant="h1" className="mb-2">
              WHO <span className="text-primary">WE ARE</span>
            </Typography>
            <p className="mx-auto max-w-2xl text-lg text-secondary leading-relaxed">
              RH Construction is a growing construction company that is operated
              locally in the city of the USA. Carrying more than ten years of
              existence earmarks us a trusting enterprise at who will maintain
              your trust.
            </p>
            <div className="mx-auto h-1 w-14 bg-primary rounded-full mt-5" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left mt-10">
              <img
                src="/assets/images/about-wal.webp"
                alt="About wal"
                className="rounded-lg ring-2 ring-gray-300 ring-offset-4"
              />
              <div>
                <p className="text-secondary text-lg mb-6 first-letter:text-6xl first-letter:font-semibold first-letter:text-primary leading-relaxed">
                  RH Construction.We have delighted our customers by providing
                  them with reliable and quick solutions. We believe in giving
                  the best outcome to a customer for any service which they
                  demand. We have firm affirmation in providing the best
                  solution to the client.
                </p>
                <ul>
                  <li className="flex gap-2 mb-3 text-xl text-gray-800 font-medium items-center">
                    <span className="h-3 w-3 rounded-full bg-primary" />
                    Satisfaction Guaranteed
                  </li>
                  <li className="flex gap-2 mb-3 text-xl text-gray-800 font-medium items-center">
                    <span className="h-3 w-3 rounded-full bg-primary" />
                    Dedicated Team
                  </li>
                  <li className="flex gap-2 mb-3 text-xl text-gray-800 font-medium items-center">
                    <span className="h-3 w-3 rounded-full bg-primary" /> Quality
                    Assurance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-gray-600 bg-cover bg-center bg-blend-multiply"
        style={{ backgroundImage: "url(/assets/images/achievement.webp)" }}
      >
        <div className="py-20 container text-white ">
          <Typography variant="h2" className="mb-4">
            ACHIEVEMENTS
          </Typography>
          <p className="text-lg">
            We are top rated contractor in{" "}
            <Link href="/" className="text-blue-600">
              HomeAdvisor
            </Link>{" "}
            and{" "}
            <Link href="/" className="text-blue-600">
              Yelp
            </Link>
            .
          </p>
        </div>
      </section>

      <section>
        <div className="container pt-20 grid grid-cols-3 gap-4 items-center">
          <div className="col-span-2">
            <Typography variant="h1" className="mb-4">
              ABDUL AHAD MINAR - <span className="text-primary">CEO</span>
            </Typography>
            <p className="text-xl font-medium leading-relaxed text-secondary">
              Abdul Ahad Minar began his career as a small contractor and later
              formed the company known as RH Construction.
            </p>
          </div>
          <img
            src="/assets/images/ceo.webp"
            alt="CEO"
            className="w-full max-w-[260px] mx-auto"
          />
        </div>
      </section>

      <section
        style={{ backgroundImage: "url(/assets/images/portfolio.webp)" }}
      >
        <div className="py-20 container text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div>
            <Typography variant="h1" className="mb-5 drop-shadow">
              10+
            </Typography>
            <p className="text-xl mb-4">PROJECT DONE</p>
            <Progress
              value={70}
              color="dark"
              className="bg-white/80 shadow-md"
            />
          </div>
          <div>
            <Typography variant="h1" className="mb-5">
              10+
            </Typography>
            <p className="text-xl mb-4">SATISFIED CLIENTS</p>
            <Progress
              value={70}
              color="dark"
              className="bg-white/80 shadow-md"
            />
          </div>
          <div>
            <Typography variant="h1" className="mb-5">
              10+
            </Typography>
            <p className="text-xl mb-4">PROJECT DONE</p>
            <Progress
              value={70}
              color="dark"
              className="bg-white/80 shadow-md"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container py-14">
          <Typography variant="h2" className="mb-4">
            OUR <span className="text-primary">EXPERTS</span>
          </Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[...Array(4)].map((ele) => (
              <figure className="text-center p-2 rounded-md bg-blue-gray-50/50">
                <img
                  src="/assets/images/ceo.webp"
                  alt=""
                  className="aspect-square object-cover object-top max-h-80 w-full rounded-md bg-white mx-auto"
                />
                <p className="font-semibold text-lg">Person Name</p>
                <p className="text-secondary  text-lg font-medium">POST</p>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container py-14">
          <Typography variant="h2" className="mb-4">
            OUR <span className="text-primary">EXPERTS</span>
          </Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[...Array(4)].map((ele) => (
              <figure className="text-center p-2 rounded-md bg-blue-gray-50/50">
                <img
                  src="/assets/images/ceo.webp"
                  alt=""
                  className="aspect-square object-cover object-top max-h-80 w-full rounded-md bg-white mx-auto"
                />
                <p className="font-semibold text-lg">Person Name</p>
                <p className="text-secondary  text-lg font-medium">POST</p>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
