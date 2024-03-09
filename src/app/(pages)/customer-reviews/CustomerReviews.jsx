"use client";
import PageHeader from "@/components/common/PageHeader";
import API from "@/config/API.config";
import { errorMessage } from "@/lib/utils";
import {
  Button,
  Input,
  Rating,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import Swal from "sweetalert2";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useSwr from "swr";

const DEFAULT_VAL = {
  name: "",
  summary: "",
  review: "",
  rating: 0,
};

const CustomerReviews = () => {
  const {
    data: reviews,
    error,
    isLoading,
  } = useSwr("/reviews", async (url) => {
    try {
      const { data } = await API?.get(url);
      return data;
    } catch (error) {
      throw errorMessage(error);
    }
  });

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(DEFAULT_VAL);
  const handleSubmit = async (event) => {
    event.preventDefault();
    let valid = true;
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        Swal.fire({
          title: `Invalid '${key}' value`,
          icon: "error",
        });
        valid = false;
        return;
      }
    });
    if (valid) {
      try {
        setLoading(true);
        await API.post("/reviews", formData);
        Swal.fire({
          title: "Thank You.",
          icon: "success",
        });
      } catch (error) {
        Swal.fire({
          title: "Try again",
          icon: "error",
          text: errorMessage(error),
        });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (key, value) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  };

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

      {!!reviews?.length ? <section className="bg-gray-100">
        <div className="container py-20">
          <h1 className="mb-4">
            WHAT OUR <span className="text-primary">CLIENT SAYS</span>
          </h1>
          {!!reviews?.length? <Swiper
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
            {(reviews||[])?.map((item, index) => (
              <SwiperSlide className="me-3 bg-white">
                <figure className="flex gap-4 flex-col md:flex-row">
                  <div className="h-40  min-w-[10rem] bg-primary p-3 flex flex-col justify-center items-center text-white">
                    <h3 className="italic">Reviews</h3>
                    <Rating value={Number(item?.rating)} readonly ratedColor="white" />
                  </div>
                  <div className="py-2">
                    <p className="text-lg mb-1 italic">{item?.name}</p>
                    <p className="text-primary mb-2 italic">
                      Satisfied Customer
                    </p>
                    <p className="text-secondary line-clamp-3">
                      {item?.summary || item?.review}
                    </p>
                  </div>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>:null}
        </div>
      </section>:null}

      <section>
        <div className="container py-20">
          <figure className="max-w-md mx-auto ">
            <div className="text-center mb-10">
              <h2>
                LEAVE <span className="text-primary">YOUR RATING</span>
              </h2>
            </div>
            <form onSubmit={handleSubmit}>
              <label className="mb-3">
                <p className="text-gray-800 mb-1">Name</p>
                <Input
                  value={formData.name}
                  onChange={(e) => handleChange("name", e?.target?.value)}
                  variant="outlined"
                  className="mb-3"
                  label="Your Name"
                />
              </label>
              <br />
              <label className="mb-3">
                <p className="text-gray-800 mb-1">Summary</p>
                <Input
                  value={formData.summary}
                  onChange={(e) => handleChange("summary", e?.target?.value)}
                  variant="outlined"
                  className="mb-3"
                  label="Review Summary"
                />
              </label>
              <br />
              <label className="mb-3">
                <p className="text-gray-800 mb-1">Review</p>
                <Textarea
                  size="md"
                  name="review"
                  value={formData.review}
                  onChange={(e) => handleChange("review", e?.target?.value)}
                  label="Review"
                  className="mb-3"
                />
              </label>
              <label className="mb-3">
                <p className="text-gray-800 mb-1">Rating</p>
                <Rating
                  name="rating"
                  value={formData.rating}
                  onChange={(e) => handleChange("rating", e)}
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
                  disabled={loading || !Object.values(formData).every(e=>!!e)}
                >
                  {loading ? `Loading` : `SUBMIT`}
                </Button>
                <Button
                  onClick={() => setFormData(DEFAULT_VAL)}
                  type="reset"
                  variant="text"
                  color="red"
                  className="flex-grow text-center"
                  disabled={loading}
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
