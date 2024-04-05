import Image from 'next/image'
import { useState } from 'react'
import bathroom from '../../../../public/assets/services/bithrom.png'
import Brick from '../../../../public/assets/services/brick .png'
import Brown from '../../../../public/assets/services/brown.png'
import Kitchen from '../../../../public/assets/services/kitchen.png'
import { default as Painting, default as Pointing2 } from '../../../../public/assets/services/painting.png'
import Plastering from '../../../../public/assets/services/plastering.png'
import Plumbing from '../../../../public/assets/services/plumbing.png'
import Power from '../../../../public/assets/services/power.png'
import Roofing from '../../../../public/assets/services/roofing.png'
import Sheetrock from '../../../../public/assets/services/sheetrock.png'
import Water from '../../../../public/assets/services/water.png'
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
      <div className='container py-6 lg:py-[55px]'>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-40 gap-4 lg:p-5 md:p-3 items-end text-sm">

          <div className="  ">
          <div className="flex justify-center md:block">
              <Image
                src={services}
                width={101}
                height={18.02}
                alt="services"
                className="my-2"
              />
            </div>
            <h1 className='lg:leading-10 lg:text-4xl text-lg mt-[9px] mb-[10px] xl:mt-[15px] xl:mb-[25px] text-center md:text-start'>Our Services</h1>
            <p className='md:text-base text-[12px] leading-[208%] lg:leading-[250%] text-black text-center md:text-start font-semibold'>Enjoy a stress-free construction service with our unique build process.</p>
            <p className='md:text-base text-[12px] leading-[208%] lg:leading-[250%] text-black text-center md:text-start'>
              <span className='font-semibold'>RH Construction USA</span>, is your trusted partner for top-notch construction services, dedicated to bringing your dream project to life. From conceptualization to completion, we prioritize quality craftsmanship, timely delivery, and cost-effective solutions to meet and exceed your expectations.</p>
          </div>

          <div className=" ">
            <p className='md:text-base text-[12px] leading-[208%] lg:leading-[250%] text-black text-center md:text-start'>
              At our company, we understand that your dream project is a significant investment, and we take pride in delivering unparalleled construction service that reflects our unwavering commitment to customer satisfaction. Whether you're envisioning a residential masterpiece or a commercial endeavor, our experienced team is equipped to handle a diverse range of projects.
            </p>
          </div>

        </div>


        {/* taggle button */}
        <div className='flex justify-center items-center lg:py-6 py-4 mb-2 md:mb-6 lg:mb-12 mx-2 lg:px-0 md:px-4'>
          {/* <Switcher11></Switcher11> */}
          <label className='themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-3xl bg-white '>
            <input
              type='checkbox'
              className='sr-only'
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span
              className={`flex items-center space-x-[6px] lg:px-32 px-14 rounded-3xl lg:py-4  py-2  lg:text-[20px] text-sm font-medium ${!isChecked ? 'text-white bg-black ' : 'text-body-color'
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
              className={`flex items-center space-x-[6px] lg:px-32 px-14 rounded-3xl lg:py-4 py-2 lg:text-[20px] text-sm font-medium ${isChecked ? ' text-white bg-black ' : 'text-body-color'
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

        <div className='lg:py-10 py-7'>
          {!isChecked &&
            <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5 gap-y-8'>
              {services.map((service, index) => (
                <div key={index} className='col-span-1 border-2 rounded border-black'>
                  <div className="mx-auto rounded-lg shadow-lg bg-[#ffb80305] relative">
                    <div className=" py-7 ">
                      <p className='mt-4 py-5  mx-auto text-center lg:text-[20px]  text-xs'>{service.title} </p>
                    </div>
                    <div className="absolute  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <img className=" lg:w-20 lg:h-20 w-14 h-14 bg-white rounded-full border-black" src={service.img.src} alt="Profile" />
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
                      <p className='mt-4 py-5 mx-auto text-center lg:text-[20px]  text-xs'>{service.title} </p>
                    </div>
                    <div className="absolute  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <img className="lg:w-20 lg:h-20 w-14 h-14 bg-white rounded-full  border-black" src={service.img.src} alt="Profile" />
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
