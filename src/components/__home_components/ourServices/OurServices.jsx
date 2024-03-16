import React, { useState } from 'react'
import servicesIcon from "../../../../public/assets/icons/services.png"
import Image from 'next/image'
import bathroom from '../../../../public/assets/services/bithrom.png'
import Sheetrock from '../../../../public/assets/services/Sheetrock.png'
import Plastering from '../../../../public/assets/services/Plastering.png'
import Plumbing from '../../../../public/assets/services/Plumbing.png'
import Kitchen from '../../../../public/assets/services/Kitchen.png'
import Painting from '../../../../public/assets/services/Painting.png'
import Roofing from '../../../../public/assets/services/roofing.png'
import Pointing2 from '../../../../public/assets/services/painting.png'
import Water from '../../../../public/assets/services/water.png'
import Brown from '../../../../public/assets/services/Brown.png'
import Brick from '../../../../public/assets/services/Brick .png'
import Power from '../../../../public/assets/services/Power.png'

export default function OurServices() {

  const services = [
    {
      title: 'Bathroom Remodeling',
      img: bathroom
    },
    {
      title: 'Sheetrock',
      img: Sheetrock
    },
    {
      title: 'Plastering',
      img: Plastering
    },
    {
      title: 'Plumbing',
      img: Plumbing
    },
    {
      title: 'Kitchen Remodeling',
      img: Kitchen
    },
    {
      title: " Painting",
      img: Painting
    }
  ]
  const services2 = [
    {
      title: 'Roofing',
      img: Roofing
    },
    {
      title: 'Pointing',
      img: Pointing2
    },
    {
      title: 'Water Proofing',
      img: Water
    },
    {
      title: 'Brown Stone Repair',
      img: Brown
    },
    {
      title: 'Brick Works',
      img: Brick
    },
    {
      title: " Power Wash",
      img: Power
    }
  ]

  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }



  return (
    <div className=" bg-[#FFB7031A]">
      <div className='custom-container py-14'>
        <div className="grid grid-cols-1  lg:grid-cols-2 lg:gap-40 gap-4  p-5 items-end text-sm ">

          <div className="  ">
            <div className=' flex items-center pb-2'>
              <Image src={servicesIcon} className=' h-5 w-10 mr-2'></Image>
              <p>Services</p>
            </div>
            <h2>Our Services</h2>
            <p className=' lg:py-8 py-5'>
              <b>Enjoy a stress-free construction service with our unique build process.RH Construction USA,</b> is your trusted partner for top-notch construction services, dedicated to bringing your dream project to life. From conceptualization to completion, we prioritize quality craftsmanship, timely delivery, and cost-effective solutions to meet and exceed your expectations.</p>
          </div>

          <div className=" ">
            <p className=' lg:py-10 py-5 items-center'>
              At our company, we understand that your dream project is a significant investment, and we take pride in delivering unparalleled construction service that reflects our unwavering commitment to customer satisfaction. Whether you're envisioning a residential masterpiece or a commercial endeavor, our experienced team is equipped to handle a diverse range of projects.
            </p>
          </div>

        </div>


        {/* taggle button */}
        <div className='flex justify-center items-center py-2 mb-12 mx-2 '>
          {/* <Switcher11></Switcher11> */}
          <label className='themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-3xl bg-white '>
            <input
              type='checkbox'
              className='sr-only'
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span
              className={`flex items-center space-x-[6px] lg:px-20 px-10 rounded-3xl py-2  text-sm font-medium ${!isChecked ? 'text-white bg-black ' : 'text-body-color'
                }`}
            >
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                className='mr-[6px] fill-current'
              >
                <g clipPath='url(#clip0_3122_652)'>

                </g>
                <defs>
                  <clipPath id='clip0_3122_652'>
                    <rect width='16' height='16' fill='white'></rect>
                  </clipPath>
                </defs>
              </svg>
              Interior
            </span>
            <span
              className={`flex items-center space-x-[6px] lg:px-20 px-10 rounded-3xl py-2 text-sm font-medium ${isChecked ? ' text-white bg-black ' : 'text-body-color'
                }`}
            >
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                className='mr-[6px] fill-current'
              >

              </svg>
              Exterior
            </span>
          </label>
        </div>

        <div>
          {!isChecked &&
            <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5 gap-y-8'>
              {services.map((service, index) => (
                <div key={index} className='col-span-1 border-2 rounded border-black'>
                  <div className="mx-auto rounded-lg shadow-lg bg-[#ffb80305] relative">
                    <div className=" py-7 ">
                      <p className='mt-4 mx-auto text-center  text-xs'>{service.title} </p>
                    </div>
                    <div className="absolute  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <img className="w-14 h-14 bg-white rounded-full border-black" src={service.img.src} alt="Profile" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          }
          {isChecked &&
            <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5 gap-y-8'>
              {services2.map((service, index) => (
                <div key={index} className='col-span-1 border-2 rounded border-black'>
                  <div className="mx-auto rounded-lg shadow-lg bg-[#ffb80305] relative">
                    <div className=" py-7 ">
                      <p className='mt-4 mx-auto text-center  text-xs'>{service.title} </p>
                    </div>
                    <div className="absolute  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <img className="w-14 h-14 bg-white rounded-full  border-black" src={service.img.src} alt="Profile" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          }
        </div>
      </div>
    </div>
  )
}