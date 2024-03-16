import React from 'react'
import logo from "../../../../public/assets/images/footer-logo.webp"
import Image from 'next/image'
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function ContactHome() {
  return (
    <div className=" custom-container bg-yellow-50  ">

      <section >
        <div className="mx-auto px-4  sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 lg:grid-cols-7 ">

            <div className="lg:col-span-3 lg:py-20  lg:px-5 px-2 py-2 bg-yellow-700">

              <div>
                <h2 className=" my-5">
                  Contact Us
                </h2>
                <div className=' flex gap-2 items-center '>
                  <FaMapLocationDot className=' lg:w-5 lg:h-5 w-auto h-auto' />
                  <p> 553 E 2nd St, Brooklyn, NY 11218, United States</p>
                </div>
                <div className='my-3 flex gap-2 items-center '>
                  <FaPhoneVolume className=' lg:w-5 lg:h-5 w-auto h-auto' />
                  <p > +1 (646) 683-4612</p>
                </div>
                <div className=' flex gap-2 my-auto items-center'>
                  <IoIosMail className=' lg:w-5 lg:h-5 w-auto h-auto' />
                  <p>rhconusa@gmail.com</p>
                </div>
                <div className=' flex gap-8 my-8'>
                  <FaFacebook className=' lg:w-6 lg:h-6 w-auto h-auto' />
                  <FaXTwitter className=' lg:w-6  lg:h-6 w-auto h-auto' />
                  <FaInstagram className=' lg:w-6 lg:h-6 w-auto h-auto' />
                  <FaLinkedin className=' lg:w-6 lg:h-6 w-auto h-auto' />
                </div>

                <h4 className='my-5'>Best Construction Company Brooklyn</h4>
                <Image src={logo} />
                <h4 className='my-5'>R H CONSTRUCTION USA, INC.</h4>
              </div>
            </div>

            <div className="rounded-lg p-8 lg:col-span-4 lg:p-12">
              <h2 className='my-5'> Give Us Feedback </h2>
              <form action="#" className="space-y-4 ">

                <div >

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div> <h5>Your name *</h5>
                      <label className="sr-only" htmlFor="email">name</label>
                      <input
                        className="w-full rounded-lg bg-[#FFB70326] shadow-sm shadow-black p-3 text-sm"
                        placeholder="Robot Fox"
                        type="email"
                        id="email"
                      />
                    </div>

                    <div>
                      <h5>Email *</h5>
                      <label className="sr-only" htmlFor="phone">Phone</label>
                      <input
                        className="w-full rounded-lg bg-[#FFB70326] shadow-sm shadow-black p-3 text-sm"
                        placeholder="info.example@gmail.com"
                        type="tel"
                        id="phone"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2  ">
                  <div>
                    <h5>Subjects *</h5>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                      className="w-full rounded-lg bg-[#FFB70326] shadow-sm shadow-black p-3 text-sm"
                      placeholder="Subjects "
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <h5>Your Phone *</h5>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input
                      className="w-full rounded-lg bg-[#FFB70326] shadow-sm shadow-black p-3 text-sm"
                      placeholder="+8801700000000"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div >
                  <label className="sr-only" htmlFor="message">Message</label>
                  <h5>Message *</h5>
                  <textarea
                    className="w-full rounded-lg bg-[#FFB70326] shadow-sm shadow-black p-3 text-sm"
                    placeholder="Write Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div >
                  <button
                    type="submit"
                    className="inline-block w-full rounded-md bg-[#FBCC21E4] px-10 py-4  font-semibold  sm:w-auto text-black "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
