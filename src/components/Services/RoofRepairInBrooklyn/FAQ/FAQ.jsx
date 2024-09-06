"use client";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
const faqQuestionsNAns = [
  {
    id: 1,
    question:
      "What types of roofing materials do you repair?",
    answer:
      "We repair a wide range of roofing materials, including asphalt shingles, metal, tile, flat roofs, steel, and more.",
  },
  {
    id: 2,
    question:
      "What is the process for getting a roof repair estimate?",
    answer:
      "We will schedule a thorough inspection of your roof, assess the damage, and provide a detailed, transparent estimate.",
  },
  {
    id: 3,
    question:
      "Are your repairs covered by a warranty?",
    answer:
      "Yes, we offer warranties on both our labor and materials to ensure your peace of mind and the durability of our repairs.",
  },
  {
    id: 4,
    question:
      "What should I do if I have an emergency roof issue?",
    answer:
      "Contact us immediately for emergency roof repair services. We offer prompt responses to urgent issues to protect your home and prevent further damage.",
  },
  {
    id: 5,
    question:
      "How can I maintain my roof to prevent future issues?",
    answer:
      "Regular inspections, cleaning gutters, and addressing minor issues promptly can help maintain your roof and prevent major problems.",
  },
  {
    id: 6,
    question:
      "Do you offer financing options for roof repairs?",
    answer:
      "We offer various financing options to help manage the cost of your roof repairs. Contact us to discuss available plans and find one that suits your needs.",
  },
];
const FAQ = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="bg-[#FFFAEE]">
      <div className="full__section_l_p pr-3 md:pr-0 common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 md:gap-[30px]">
          <div className="order-1 md:order-2 md:col-span-3 flex items-center ">
            <div className="">
              <Image
                src="/assets/roof_repair/FAQ.png"
                width={764}
                height={551}
                alt="faq  image"
                className="w-[764px] h-[315px] md:h-[551px]"
              />
            </div>
          </div>

          <div className="order-2 md:order-1 md:col-span-3 pt-3 md:pt-0">
            <div className="flex flex-col justify-center items-center md:items-start ">
              <div>
              <HeadingIcon text={headingIconText.faq__HeadingIconText}/>
              </div>

              <div>
                <h2 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black md:text-start text-center pb-2">
                Some Questions You Must Ask a  
                  <br />{" "}
                  <span className="text-primary">
                  Roof Repair Expert Before Hiring Them  
                  </span>
                </h2>
              </div>
            </div>
            <>
              {faqQuestionsNAns.map(({ question, answer, id }, idx) => (
                <Accordion
                  key={id}
                  open={open === id}
                  className="mb-1 text-white bg-black"
                >
                  <AccordionHeader
                    onClick={() => handleOpen(id)}
                    className=" relative"
                  >
                    <div
                      className={`text-white  border-b-0 transition-colors py-sm px-5`}
                    >
                      <span className="text-white text-base font-bold">
                        {question}
                      </span>
                    </div>
                    <div className="absolute right-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="9"
                        viewBox="0 0 16 9"
                        fill="none"
                      >
                        <path
                          d="M7.85438 8.80353L0.908939 1.3452C0.432523 0.833597 0.795322 -9.06148e-07 1.4944 -8.7698e-07L14.5803 -3.30987e-07C15.2793 -3.01819e-07 15.6421 0.833599 15.1657 1.3452L8.22029 8.80353C8.12142 8.9097 7.95324 8.9097 7.85438 8.80353Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </AccordionHeader>
                  <AccordionBody className="px-3 py-1 text-base font-normal bg-white text-black">
                    {answer}
                  </AccordionBody>
                </Accordion>
              ))}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
