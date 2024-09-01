"use client";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
const faqQuestionsNAns = [
  {
    id: 1,
    question:
      "What types of home renovation services does RH Construction USA Inc. offer?",
    answer:
      "We specialize in a wide range of home renovation services, including kitchen remodeling, bathroom renovations, room additions, and complete home makeovers. Our expert team is equipped to handle projects of various sizes and complexities.",
  },
  {
    id: 2,
    question:
      "How can I request a consultation for my home renovation project?",
    answer:
      "We prioritize efficiency in project management and sourcing, allowing us to maintain competitive pricing without compromising on the quality of materials or workmanship. Our transparent pricing structure ensures clients are informed at every step.",
  },
  {
    id: 3,
    question:
      "Is RH Construction USA Inc. licensed and insured?",
    answer:
      "We meticulously plan each bath construction project, considering factors such as material availability, weather conditions, and potential challenges. Our project management team is adept at adapting to unforeseen circumstances to keep timelines on track.",
  },
  {
    id: 4,
    question:
      "What is the typical timeline for a home renovation project with RH Construction?",
    answer:
      "Absolutely. Whether it's a small bathroom renovation or a large-scale construction project, our team is dedicated to delivering exceptional results.",
  },
  {
    id: 5,
    question:
      "How does RH Construction handle budget considerations for home renovations?",
    answer:
      "Sustainability is a core value at our bathroom remodeling services company in Brooklyn. We source eco-friendly materials, incorporate energy-efficient solutions, and adhere to responsible construction practices to minimize the environmental impact of our projects.",
  },
  {
    id: 6,
    question:
      "Can I see examples of RH Construction USA Inc.'s previous renovation projects?",
    answer:
      "We believe in collaborative partnerships with our clients. From the initial design phase to material selection and throughout the construction process, we actively seek and value client input to ensure their vision is realized.",
  },
];
const FAQ = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="bg-[#FFFAEE]">
      <div className="full__section_r_p pl-3 md:pl-0 common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 md:gap-[30px]">
          <div className="md:col-span-3 flex items-center ">
            <div className="">
              <Image
                src="/assets/brooklyn_Home/FAQ.png"
                width={764}
                height={600}
                alt="faq  image"
                className="w-full h-[600px]"
              />
            </div>
          </div>

          <div className="md:col-span-3 pt-3 md:pt-0">
            <div className="flex flex-col justify-center items-center md:items-start ">
              <div>
              <HeadingIcon text={headingIconText.faq__HeadingIconText}/>
              </div>

              <div>
                <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-normal text-black md:text-start text-center pb-2">
                FAQ About the Home Renovators of 
                  <br />{" "}
                  <span className="text-primary">
                  RH Construction USA Inc 
                  </span>
                </h3>
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