"use client";
import PageHeader from "@/components/common/PageHeader";
import {
  Button,
  Input,
  Rating,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CustomerReviews = () => {
  return (
    <>
      <PageHeader
        title="OUR CUSTOMER REVIEWS"
        breadcrumbs={[
          {
            title: "Home",
            route: "/",
          },
        ]}
        page={{
          title: "Customer Reviews",
          route: "/customer-reviews",
        }}
        className="bg-black"
        bg={"url(/assets/images/about-header-bg.webp)"}
      />
      <section>
        <div className="container py-24 text-center">
          <Typography variant="h2" className="mb-4">
            <span className="text-primary">RH</span> Construction Customers
            Review
          </Typography>
          <p className="mx-auto text-xl text-secondary leading-loose max-w-5xl">
            We are{" "}
            <a
              href="https://en.wikipedia.org/wiki/Small_business"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 hover:font-semibold underline decoration-wavy decoration-blue-600"
            >
              small business
            </a>{" "}
            company located in{" "}
            <a
              href="https://en.wikipedia.org/wiki/Brooklyn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 hover:font-semibold underline decoration-wavy decoration-blue-600"
            >
              Brooklyn
            </a>
            . We try to make our customers 100% happy, however no compromise
            with QUALITY work and affordable cost. With your honest reviews and
            your opinion for RH Construction USA, Inc could make a huge. With
            your opinion it helps us to improve our quality. We appreciate your
            valuable review.
          </p>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container py-20">
          <h1 className="mb-4">
            WHAT OUR <span className="text-primary">CLIENT SAYS</span>
          </h1>
          <Swiper
            spaceBetween={10}
            breakpoints={{
              100: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 1.5,
              },
              900: {
                slidesPerView: 2,
              },
            }}
            autoplay
            modules={[Autoplay]}
          >
            {[...Array(5)].map((item, index) => (
              <SwiperSlide className="me-3 bg-white">
                <figure className="flex gap-4 flex-col md:flex-row">
                  <div className="h-40  min-w-[10rem] bg-primary p-3 flex flex-col justify-center items-center text-white">
                    <h3 className="italic">Reviews</h3>
                    <Rating value={4} readonly ratedColor="white" />
                  </div>
                  <div className="py-2">
                    <p className="text-lg mb-1 italic">Mark Joseph</p>
                    <p className="text-primary mb-2 italic">
                      Satisfied Customer
                    </p>
                    <p className="text-secondary line-clamp-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Et nemo necessitatibus nostrum deleniti facere corrupti
                      eius ipsa. Et architecto.
                    </p>
                  </div>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section>
        <div className="container py-20">
          <figure className="max-w-md mx-auto ">
            <div className="text-center mb-10">
              <h2>
                LEAVE <span className="text-primary">YOUR RATING</span>
              </h2>
            </div>
            <form>
              <label className="mb-3">
                <p className="text-gray-800 mb-1">Summary</p>
                <Input
                  variant="outlined"
                  className="mb-3"
                  label="Review Summary"
                />
              </label>
              <br />
              <label className="mb-3">
                <p className="text-gray-800 mb-1">Review</p>
                <Textarea size="md" label="Review" className="mb-3" />
              </label>
              <label className="mb-3">
                <p className="text-gray-800 mb-1">Rating</p>
                <Rating
                  value={0}
                  ratedColor="amber"
                  className="mb-6 text-4xl"
                />
              </label>
              <div className="flex gap-2">
                <Button
                  type="submit"
                  variant="gradient"
                  color="amber"
                  className="flex-grow text-center"
                >
                  SUBMIT
                </Button>
                <Button
                  type="submit"
                  variant="text"
                  color="red"
                  className="flex-grow text-center"
                >
                  CANCEL
                </Button>
              </div>
            </form>
          </figure>
        </div>
      </section>
    </>
  );
};

export default CustomerReviews;
