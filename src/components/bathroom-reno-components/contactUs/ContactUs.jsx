import Image from "next/image";
import "./ContactUs.css";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaMapLocationDot, FaPhoneVolume, FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import contactUsLogo from "../../../../public/assets/logos/contact-logo.png";

export default function ContactUs() {
  return (
    <div className="bg-yellow-50">
      <section className="container">
        <div className="mx-auto md:pt-6 lg:pt-[55px]">
          <div className="grid grid-cols-1 gap-x-16 lg:grid-cols-6 items-center ">
            <div className="lg:col-span-3 pt-[40px] pb-[60px] pl-[60px] pr-[50px] contact__bg">
              <div className="text-center md:text-start">
                <p className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black text-center md:text-left">
                  Contact Us
                </p>
                <div className="flex gap-2 items-center 5xl:text-[18px] md:text-base text-[14px] 5xl:py-8 py-4 justify-center md:justify-start">
                  <FaMapLocationDot className=" lg:w-5 lg:h-5 w-auto h-auto" />
                  <Link
                    href={`Location:553 E 2nd St, Brooklyn, NY 11218, United States`}
                  >
                    <p> 553 E 2nd St, Brooklyn, NY 11218, United States</p>
                  </Link>
                </div>
                <div className="flex gap-2 items-center 5xl:text-[18px] md:text-base text-[14px] justify-center md:justify-start">
                  <FaPhoneVolume className=" lg:w-5 lg:h-5 w-auto h-auto" />

                  <a href={`tel:+1 (646) 683-4612`}>
                    <p> +1 (646) 683-4612</p>
                  </a>
                </div>
                <div className=" flex gap-2 my-auto items-center 5xl:text-[18px] md:text-base text-[14px] 5xl:py-8 py-4 justify-center md:justify-start">
                  <IoIosMail className=" lg:w-5 lg:h-5 w-auto h-auto" />

                  <Link href={`email:rhconusa@gmail.com`}>
                    <p>rhconusa@gmail.com</p>
                  </Link>
                </div>
                <div className="flex lg:gap-8 gap-3 justify-center md:justify-start">
                  <FaFacebook className=" lg:w-6 lg:h-6 w-auto h-auto" />
                  <FaXTwitter className=" lg:w-6  lg:h-6 w-auto h-auto" />
                  <FaInstagram className=" lg:w-6 lg:h-6 w-auto h-auto" />
                  <FaLinkedin className=" lg:w-6 lg:h-6 w-auto h-auto" />
                </div>

                <p className=" 5xl:text-[25px] text-[20px] font-bold 5xl:py-10 py-6">
                  Best Bath Construction Company Brooklyn
                </p>
                <div className="flex justify-center md:justify-start">
                  <Image
                    src={contactUsLogo}
                    height={130}
                    width={280}
                    className="h-auto w-auto"
                    alt="logo"
                  />
                </div>
                <p className=" 5xl:text-[25px] text-[20px] font-bold 5xl:pt-10 pt-6">
                  R H CONSTRUCTION USA, INC.
                </p>
              </div>
            </div>

            <div className="rounded-lg p-5 lg:col-span-3 lg:p-12 items-center">
              <p className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black text-left  mb-5">
                {" "}
                Give Us Feedback{" "}
              </p>
              <form action="#" className="space-y-4 ">
                <div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:mb-5 mb-4">
                    <div>
                      {" "}
                      <p className="mb-2">Your name *</p>
                      <label className="sr-only" htmlFor="name">
                        name
                      </label>
                      <input
                        className="w-full input__bg p-3 text-sm"
                        placeholder="Robot Fox"
                        type="text"
                        id="text"
                      />
                    </div>

                    <div>
                      <p className="mb-2">Email *</p>
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="w-full input__bg p-3 text-sm"
                        placeholder="rhconusa@gmail.com"
                        type="email"
                        id="email"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:mb-8 mb-4  ">
                  <div>
                    <p className="mb-2">Subjects *</p>
                    <label className="sr-only" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      className="w-full input__bg p-3 text-sm"
                      placeholder="Subjects "
                      type="text"
                      id="subject"
                    />
                  </div>

                  <div>
                    <p className="mb-2">Your Phone *</p>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full input__bg p-3 text-sm"
                      placeholder="+1 (646) 683-4612"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>
                  <p className="mb-2">Message *</p>
                  <textarea
                    className="w-full input__bg  p-4 text-sm"
                    placeholder="Write Message"
                    rows="3"
                    id="message"
                  ></textarea>
                </div>

                <div className="flex justify-center md:justify-start">
                  <button
                    type="submit"
                    className=" w-full rounded-md bg-[#FBCC21E4] px-10 py-4 lg:px-20 text-lg font-bold  sm:w-auto text-black items-center flex lg:mt-8 mt-6"
                  >
                    Submit{" "}
                    <svg
                      className="ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                    >
                      <path
                        d="M2.09057 2.35667L8.14308 4.86111L2.09057 4.08333V2.35667ZM8.14308 9.13889L2.09057 11.6433V9.91667L8.14308 9.13889ZM0.476562 0V5.44444L12.5816 7L0.476562 8.55556V14L17.4236 7L0.476562 0Z"
                        fill="black"
                      />
                    </svg>
                    {/* <FaLocationArrow className="ml-2" /> */}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
