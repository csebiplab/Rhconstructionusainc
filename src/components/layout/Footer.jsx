"use client";
import Link from "next/link";
import { FaMapMarkedAlt } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";
import { MdOutlineAddIcCall } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
          <div></div>
          <div>
            <h2 className="font-medium mb-4">Service Area</h2>
            <ul className="pl-3">
              <li>
                <Link href="#" className="footer-link">Brooklyn</Link>
              </li>
              <li>
                <Link href="#" className="footer-link">Queens</Link>
              </li>
              <li>
                <Link href="#" className="footer-link">Manhattan</Link>
              </li>
              <li>
                <Link href="#" className="footer-link">Bronx</Link>
              </li>
              <li>
                <Link href="#" className="footer-link">Staten Island</Link>
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
