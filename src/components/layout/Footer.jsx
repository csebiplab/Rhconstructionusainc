"use client";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaMapMarkedAlt } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";
import { MdOutlineAddIcCall } from "react-icons/md";

const Footer = () => {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
          <div>
            <img src="/assets/images/footer-logo.webp" alt="" className="-mt-16" />
            <h4 className="text-white mt-3">
              RH Construction USA, Inc. General Cronstruction.
            </h4>
            <h5 className="text-gray-500">Customer Reviews</h5>
            <div className="flex items-center text-lg">
            <StarIcon className="text-primary h-6 w-6" />{" "}
            <StarIcon className="text-primary h-6 w-6" />
            <StarIcon className="text-primary h-6 w-6" />
            <StarIcon className="text-primary h-6 w-6" />{" "}
            <StarIcon className="text-primary h-6 w-6" /> 4.6
            </div>
          </div>
          <div>
            <h2 className="font-medium mb-4">Service Area</h2>
            <ul className="pl-3">
              <li>
                <Link href="#" className="footer-link">
                  Brooklyn
                </Link>
              </li>
              <li>
                <Link href="#" className="footer-link">
                  Queens
                </Link>
              </li>
              <li>
                <Link href="#" className="footer-link">
                  Manhattan
                </Link>
              </li>
              <li>
                <Link href="#" className="footer-link">
                  Bronx
                </Link>
              </li>
              <li>
                <Link href="#" className="footer-link">
                  Staten Island
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-medium mb-4">Contact Us</h2>
            <ul className="pl-2 text-lg ">
              <li>
                <a href="" className="footer-link">
                  <FaMapMarkedAlt /> 553 East 2nd Street Brooklyn, NY 11218
                </a>
              </li>
              <li>
                <a href="tel:+1 (646) 683-4612" className="footer-link">
                  <MdOutlineAddIcCall /> +1 (646) 683-4612
                </a>
              </li>
              <li>
                <a href="mailto:rhconusa@gmail.com" className="footer-link">
                  <HiMailOpen /> rhconusa@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
