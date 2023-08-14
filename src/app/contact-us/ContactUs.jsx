"use client";

import PageHeader from "@/components/common/PageHeader";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { GrMapLocation } from "react-icons/gr";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoSend } from "react-icons/io5";

const ContactUs = () => {
  return (
    <>
      <PageHeader
        title="GET IN TOUCH"
        bg="url(/assets/images/contact-us.webp)"
        page={{
          title: "Contact Us",
          route: "/contact-us",
        }}
      />
      <section>
        <div className="container py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2">
            <h2 className="mb-3">
              GET IN <span className="text-primary">TOUCH</span>
            </h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <Input variant="standard" label="First Name" />
                <Input variant="standard" label="Last Name" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <Input variant="standard" label="Email" />
                <Input variant="standard" label="Service" />
              </div>
              <Input variant="standard" label="Phone Number" className="mb-4" />
              <br />
              <Textarea size="md" variant="standard" label="Your Message" />
              <br />
              <Button
                variant="filled"
                color="amber"
                size="lg"
                className="flex items-center gap-2"
              >
                <IoSend /> SEND
              </Button>
            </form>
          </div>
          <div>
            <h2 className="mb-2">
              HOW TO <span className="text-primary">FIND US</span>
            </h2>
            <p className="text-xl text-secondary">
              If you have any questions, just fill in the contact form, and we
              will answer you shortly.
            </p>
            <br />
            <br />
            <br />
            <h5 className="mb-2">Headquarters</h5>
            <div className="mt-3 text-lg">
              <address className="mb-1 font-sans flex gap-2 items-center">
                <GrMapLocation /> 553 E 2nd St, Brooklyn, NY 11218
              </address>
              <a
                href="tel:+1 (646) 683-4612"
                className="flex text-blue-800 gap-2 items-center mb-1"
              >
                <BsFillTelephoneFill /> +1 (646) 683-4612
              </a>
              <a
                href="mailto:rhconusa@gmail.com"
                className="flex text-purple-800 gap-2 items-center mb-1"
              >
                <HiOutlineMailOpen /> rhconusa@gmail.com
              </a>
              <a
                href="https://www.rhconstructionusa.com/"
                className="flex text-green-800 gap-2 items-center mb-1"
              >
                <CgWebsite /> www.rhconstructionusa.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3027.649593845142!2d-73.976968!3d40.637609!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b2c8251fb29%3A0xfd80b827e8bd8020!2sRH%20Construction%20usa%20inc!5e0!3m2!1sen!2sus!4v1692044645763!5m2!1sen!2sus"
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default ContactUs;
