import Image from "next/image";
import "./ContactUs.css"
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FaLocationArrow,
  FaMapLocationDot,
  FaPhoneVolume,
  FaXTwitter,
} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import contactUsLogo from "../../../../public/assets/logos/contact-logo.png";

export default function ContactUs() {
  return (
    <div className="bg-yellow-50">
      <section className="container">
        <div className="mx-auto md:pt-6 lg:pt-[55px]">
          <div className="grid grid-cols-1 gap-x-16 lg:grid-cols-6 items-center ">
            <div className="lg:col-span-3 py-[60px] pl-[60px] pr-[50px] bg-yellow-700">
              <div className="text-center md:text-start">
                <h2 className=" lg:text-[36px] text-[20px] ">Contact Us</h2>
                <div className="flex gap-2 items-center lg:text-[18px] text-[14px] lg:py-8 py-4 justify-center md:justify-start">
                  <FaMapLocationDot className=" lg:w-5 lg:h-5 w-auto h-auto" />
                  <Link href={`Location:553 E 2nd St, Brooklyn, NY 11218, United States`}>
                  <p > 553 E 2nd St, Brooklyn, NY 11218, United States</p>
                  </Link>
                </div>
                <div className="flex gap-2 items-center lg:text-[18px] text-[14px] justify-center md:justify-start">
                  <FaPhoneVolume className=" lg:w-5 lg:h-5 w-auto h-auto" />
                  
                  <Link href={`tel:+1 (646) 683-4612`}>
                  <p> +1 (646) 683-4612</p>
                  </Link>
                </div>
                <div className=" flex gap-2 my-auto items-center lg:text-[18px] text-[14px] lg:py-8 py-4 justify-center md:justify-start">
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

                <h6 className=" lg:text-[25px] text-[20px] font-bold lg:py-12 py-5">
                Best Bath Construction Company Brooklyn
                </h6>
                <div className="flex justify-center md:justify-start">
                  <Image
                    src={contactUsLogo}
                    height={130}
                    width={280}
                    className="h-auto w-auto"
                    alt="logo"
                  />
                </div>
                <h6 className=" lg:text-[25px] text-[20px] font-bold lg:pt-12 pt-5">
                R H CONSTRUCTION USA, INC.
                </h6>
              </div>
            </div>

            <div className="rounded-lg p-5 lg:col-span-3 lg:p-12 items-center">
              <h2 className="lg:mb-8 mb-5"> Give Us Feedback </h2>
              <form action="#" className="space-y-4 ">
                <div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:mb-8 mb-4">
                    <div>
                      {" "}
                      <h5 className="mb-2">Your name *</h5>
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
                      <h5 className="mb-2">Email *</h5>
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
                    <h5 className="mb-2">Subjects *</h5>
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
                    <h5 className="mb-2">Your Phone *</h5>
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
                  <h5 className="mb-2">Message *</h5>
                  <textarea
                    className="w-full input__bg  p-4 text-sm"
                    placeholder="Write Message"
                    rows="6"
                    id="message"
                  ></textarea>
                </div>

                <div className="flex justify-center md:justify-start">
                  <button
                    type="submit"
                    className=" w-full rounded-md bg-[#FBCC21E4] px-10 py-4 lg:px-20  font-semibold  sm:w-auto text-black items-center flex lg:mt-13 mt-8"
                  >
                    Submit <FaLocationArrow className="ml-2" />
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
