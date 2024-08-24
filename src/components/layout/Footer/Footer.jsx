import Image from "next/image";
import Link from "next/link";

import { PiMapPinLineFill } from "react-icons/pi";
import { FaPhoneVolume } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import "./Footer.css";

const footerLinks1 = [
  {
    cat: "News ",
    links: [
      { label: ">> How it works ", url: "/" },
      { label: ">> Gallery", url: "/" },
      { label: ">> Testimonials", url: "/" },
      { label: ">> Careers", url: "/" },
      { label: ">> Sitemap", url: "/" },
    ],
  }
];
const footerLinks2 = [
  {
    cat: "Ours Services",
    links: [
      { label: ">> Kitchen Remodeling", url: "/" },
      { label: ">> Bathroom Remodeling", url: "/" },
      { label: ">> Painting", url: "/" },
      { label: ">> Roofing", url: "/" },
      { label: ">> Brown Stone Repair", url: "/" },
      { label: ">> Brick Works", url: "/" },
    ],
  },
];

const footerImages = [
  "/assets/home_page/soap.png",
  "/assets/home_page/toprated.png",
  "/assets/home_page/elite.png",
  "/assets/home_page/ssa-2023.png",
  "/assets/home_page/100reviews.png",
  "/assets/home_page/10year.png",
  "/assets/home_page/Bark-Reviews-Logo.png",
  "/assets/home_page/facebook-reviews-logo.png",
]

const Footer = () => {
  return (
    <div className="custom-container">
      <div className="relative Footer__bg px-5 lg:px-[30px] !text-white">
        <footer className="container top-footer-content !z-50 py-[24px] md:py-[40px] lg:py-[55px] xl:py-[70px] 2xl:py-[85px] 3xl:py-[100px] 4xl:py-[110px] 5xl:py-[120px] text-white">
          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-12 2xl:gap-x-[px] justify-center">
              <div className=" w-full lg:w-auto">
                <div className=" mx-auto flex justify-center">
                  <Image
                    src="/assets/home_page/footer_logo.png"
                    height={311}
                    width={141}
                    alt="Logo"
                    className=" w-[269px] h-[112px] md:w-[311px] md:h-[141px]"
                  />
                </div>
                <p className="text-white pt-6 leading-[200%] text-center md:text-start">
                From bathroom renovation to concrete bathroom, transform your space with our bathroom remodeling services in Brooklyn.
                </p>
                <div className="flex items-center justify-center md:justify-start gap-[35px] pt-[29px]">
                <Image src="/assets/home_page/five_star.png" alt="five star icon" width={133} height={20}/>
                <p className="text-white text-base font-bold">4.9</p>
                </div>
                
              </div>

              {/* Mapping through footer links */}
              <div>
              {footerLinks1.map((category, index) => (
                <div
                  key={index}
                  className="mt-5 md:mt-0 text-center md:text-start"
                >
                  <h3 className="text-white !text-xl mb-5">{category.cat}</h3>
                  <ul>
                    {category.links.map((link, idx) => (
                      <li key={idx} className="mb-6">
                        <Link href={link.url}>
                          <span className="text-white !text-base !font-normal">
                            {link.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              </div>
              <div>
              {footerLinks2.map((category, index) => (
                <div
                  key={index}
                  className="mt-5 md:mt-0 text-center md:text-start"
                >
                  <h5 className="text-white !text-xl mb-5">{category.cat}</h5>
                  <ul>
                    {category.links.map((link, idx) => (
                      <li key={idx} className="mb-6">
                        <Link href={link.url}>
                          <span className="text-white !text-base !font-normal">
                            {link.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              </div>

              <div className="w-full lg:w-auto text-center md:text-start">
                <h5 className="text-white !text-xl pb-5">Contact Us</h5>
                <ul className="text-center md:text-start mx-auto">
                  <li>
                    <Link
                      href="553 East 2nd Street Brooklyn, NY 11218"
                      className="footer-link items-start text-left justify-center md:justify-start md:items-center text-sm text-white"
                    >
                      <PiMapPinLineFill className="w-[21px] h-[21px]" />553 East 2nd Street Brooklyn, NY 11218
                    </Link>
                  </li>
                  <li className="lg:py-8 xs:py-[12px]">
                    <Link
                      href="tel:+1 (646) 683-4612"
                      className="footer-link items-center justify-center md:justify-start text-sm text-white"
                    >
                      <FaPhoneVolume className="w-[21px] h-[21px]" /> +1 (646) 683-4612

                    </Link>
                  </li>
                  <li>
                    <Link
                      href="mailto:rhconusa@gmail.com"
                      className="footer-link items-center justify-center md:justify-start text-sm text-white"
                    >
                      <TfiEmail className="w-[21px] h-[21px]" />
                      rhconusa@gmail.com

                    </Link>
                  </li>
                  {/* footer image  */}
                  <div className="grid grid-cols-4 gap-5 5xl:gap-[42px] pt-[26px] md:pt-[36px]">
                      {
                        footerImages?.map((img, index)=>{
                          return <div key={index}>
                                <Image src={img} alt="footer image" width={60} height={51} className="w-[60px] h-[51px]"/>
                          </div>
                        })
                      }
                  </div>

                  <div className="block md:hidden">
                    <div className="h-[1px] bg-[#8E8E8E] w-full mt-9 mb-4" />

                    <div className="text-center lg:text-left">
                      <p className="text-xs lg:text-sm text-white">
                      © All Copyright 2024 by RH Construction USA, Inc. General Cronstruction.
                      </p>
                      <ul className="text-sm lg:text-sm flex justify-evenly gap-2 mt-4">
                        <li className="text-white"> Terms & Condition</li>
                        <li className="text-white"> Privacy Policy </li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* creater company credit */}
      <div className="footer-bottom-bg">
        <div className="container flex flex-col lg:flex-row justify-between items-center py-2">
          <div className="flex justify-center items-center mb-2 lg:mb-0">
            <p className="text-xs md:text-sm font-semibold text-white mr-[10px] lg:mr-4">
              WEBSITE DESIGN AND SEO BY :-
            </p>
            <Image
              src="/assets/home_page/gokundu_logo.png"
              alt="Gokundo"
              width={141}
              height={36}
              className="w-[114px] h-[30px] md:w-[141px] md:h-9"
            />
          </div>
          <div className="text-center lg:text-left hidden md:block">
            <p className="text-xs lg:text-sm text-white">
            © All Copyright 2024 by RH Construction USA, Inc. General Cronstruction.
            </p>
          </div>
          <div className="text-center lg:text-right hidden md:block">
            <ul className="text-xs lg:text-sm flex justify-evenly gap-2">
              <li className="text-white"> Terms & Condition</li>
              <li className="text-white"> Privacy Policy </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
