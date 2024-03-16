"use client";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaMapMarkedAlt } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";
import { MdOutlineAddIcCall } from "react-icons/md";
import homeAdv from "../../../public/assets/footer/homeadvisor.png"
import topRate from "../../../public/assets/footer/toprated.png.png"
import elite from "../../../public/assets/footer/elite.png.png"
import house from "../../../public/assets/footer/ssa-2023.png.png"
import review from "../../../public/assets/footer/100reviews.png.png"
import years from "../../../public/assets/footer/10year.png.png"
import brace from "../../../public/assets/footer/Bark-Reviews-Logo.png"
import facebook from "../../../public/assets/footer/facebook-reviews-logo.png"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import gokundo from "../../../public/assets/footer/Gokundu-logo(white and green) 1.png"
import Image from "next/image";


const Footer = () => {

  const footerIcon = [
    {
      img: homeAdv
    },
    {
      img: topRate
    },
    {
      img: elite
    },
    {
      img: house
    },
    {
      img: review
    },
    {
      img: years
    },
    {
      img: brace
    },
    {
      img: facebook
    }
  ]

  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;
  return (
    <div className="  bg-gray-900">
      <footer className="z-50 custom-container  py-20 text-white" style={{ backgroundImage: 'url(https://www.rhconstructionusa.com/wp-content/uploads/2022/09/footer-bg.jpg)' }}>
        <div className="custom-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-5 lg:mt-36 mt:mb-20 mt-10">

            <div className=" col-span-2">

              <img src="/assets/images/footer-logo.webp" alt="" className="" />
              <p className="text-white pt-6 mb-3 ml-2 lg:text-[36px] md:text-md ">
                RH Construction USA, Inc. <br /> General Cronstruction.
              </p>
              {/* <h5 className="text-gray-500">Customer Reviews</h5> */}
              <div className="flex items-center text-lg lg:gap-4 gap-2 lg:my-10 my-2 ml-2">
                <StarIcon className="text-primary lg:h-7 lg:w-7 h-5 w-5" />{" "}
                <StarIcon className="text-primary lg:h-7 lg:w-7 h-5 w-5" />
                <StarIcon className="text-primary lg:h-7 lg:w-7 h-5 w-5" />
                <StarIcon className="text-primary lg:h-7 lg:w-7 h-5 w-5" />{" "}
                <StarIcon className="text-primary lg:h-7 lg:w-7 h-5 w-5" />
                <div className="lg:text-[30px] md:text-[20px]">4.9</div>
              </div>

            </div>

            <div className=" col-span-3 flex justify-around">
              <div className=" col-span-1">
                <h3 className="font-semibold text-white  lg:text-[36px] md:text-[25px] lg:mb-10 md:mb-5 mb-3 "> News </h3>
                <ul className=" ">
                  <li className=" ">
                    <Link href="#" className="footer-link lg:text-[20px] md:text-sm items-center">
                      <MdKeyboardDoubleArrowRight />How it work
                    </Link>
                  </li>
                  <li className=" lg:py-8 md:py-4 py-2">
                    <Link href="#" className="footer-link lg:text-[20px] md:text-sm items-center ">
                      <MdKeyboardDoubleArrowRight />Gallery
                    </Link>
                  </li>
                  <li className=" ">
                    <Link href="#" className="footer-link lg:text-[20px] md:text-sm items-center">
                      <MdKeyboardDoubleArrowRight />Testimonils
                    </Link>
                  </li>
                  <li className="lg:py-8 md:py-4 py-2 ">
                    <Link href="#" className="footer-link lg:text-[20px] md:text-sm items-center ">
                      <MdKeyboardDoubleArrowRight />Carrer
                    </Link>
                  </li>
                  <li className=" ">
                    <Link href="#" className="footer-link lg:text-[20px] md:text-sm items-center">
                      <MdKeyboardDoubleArrowRight />Sitmap
                    </Link>
                  </li>
                </ul>
              </div>

              <div className=" col-span-1">
                <h3 className="font-semibold text-white lg:text-[36px] md:text-[25px] lg:mb-10 md:mb-5 mb-3">Ours Services</h3>
                <ul className="">
                  <li className=" ">
                    <Link href="#" className="footer-link lg:text-[20px] md:text-sm items-center">
                      <MdKeyboardDoubleArrowRight />Kitchen Remodeling
                    </Link>
                  </li>
                  <li className="  lg:py-8 md:py-4 py-2">
                    <Link href="#" className="footer-link lg:text-[20px] md:text-sm items-center">
                      <MdKeyboardDoubleArrowRight />Bathroom Remodeling
                    </Link>
                  </li>
                  <li className=" ">
                    <Link href="#" className="footer-link lg:text-[20px] md:text-sm items-center">
                      <MdKeyboardDoubleArrowRight />Painting
                    </Link>
                  </li>
                  <li className=" lg:py-8 md:py-4 py-2">
                    <Link href="#" className="footer-link lg:text-[20px] md:text-sm items-center ">
                      <MdKeyboardDoubleArrowRight />Roofing
                    </Link>
                  </li>
                  <li className=" ">
                    <Link href="#" className="footer-link lg:text-[20px] md:text-sm items-center">
                      <MdKeyboardDoubleArrowRight />Brown Stone Repair
                    </Link>
                  </li>
                  <li className=" lg:py-8 md:py-4 py-2">
                    <Link href="#" className="footer-link lg:text-[20px] md:text-sm items-center ">
                      <MdKeyboardDoubleArrowRight />Brick Works
                    </Link>
                  </li>
                </ul>
              </div>
            </div>


            <div className=" col-span-2">
              <h3 className="font-semibold text-white   lg:text-[36px] md:text-[25px] lg:mb-10 md:mb-5 mb-3">Contact Us</h3>
              <ul className=" ">
                <li>
                  <a href="" className="footer-link items-center lg:text-[20px] md:text-sm">
                    <FaMapMarkedAlt className=" lg:h-7 lg:w-7  h-4 w-4" /> 553 East 2nd Street Brooklyn, NY 11218
                  </a>
                </li>
                <li className=" lg:py-8 md:py-4 py-2">
                  <a href="tel:+1 (646) 683-4612" className="footer-link items-center lg:text-[20px] md:text-sm">
                    <FaPhoneVolume className=" lg:h-7 lg:w-7 h-4 w-4" /> +1 (646) 683-4612
                  </a>
                </li>
                <li>
                  <a href="mailto:rhconusa@gmail.com" className="footer-link items-center lg:text-[20px] md:text-sm">
                    <IoIosMail className=" lg:h-7 lg:w-7 h-4 w-4" /> rhconusa@gmail.com
                  </a>
                </li>
                <div>
                  <div className="grid grid-cols-4 lg:gap-8 gap-5 lg:my-12 md:my-8 my-5">
                    {
                      footerIcon.map((fIcon, i) =>
                        <div key={i} className=" col-span-1">
                          <img src={fIcon.img.src} className=" lg:h-auto lg:w-auto w-10 h-10"></img>
                        </div>)
                    }
                  </div>
                </div>
              </ul>
            </div>

          </div>

          <div className="grid lg:grid-cols-9 gap-5 pt-20 items-center">
            <div className=" col-span-3 flex items-center gap-2">
              <p className=" lg:text-[18px] md:text-sm "> <b >WEBSITE DESIGN AND SEO BY:-</b> </p>
              <Image src={gokundo} alt="gokundo" className=" ml-2 " />
            </div>
            <div className=" col-span-4">
              <p className=" lg:text-[18px] md:text-sm  ">© All Copyright 2024 by RH Construction USA, Inc. General Cronstruction.</p>
            </div>
            <div className=" col-span-2">
              <ul className=" lg:text-[18px] md:text-sm  flex justify-between ">
                <li> Terms & Condition  </li>
                <li>  Privacy Policy </li>
              </ul>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
