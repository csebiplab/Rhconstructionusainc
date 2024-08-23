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
      "What services does RH Construction USA Inc. offer?",
    answer:
      "We provide a range of roofing services including installations, repairs, maintenance, and inspections for both residential and commercial properties. Our expertise covers various types of roofing systems, including metal, tile, and shingle roofs.",
  },
  {
    id: 2,
    question:
      "How long does a typical roofing project take?",
    answer:
      "Generally, small repairs can be completed in a few hours, while larger installations or replacements may take several days.",
  },
  {
    id: 3,
    question:
      "Are you licensed and insured?",
    answer:
      "Yes, RH Construction USA Inc. is fully licensed and insured. This ensures that our work meets industry standards and provides you with protection and peace of mind throughout the project.",
  },
  {
    id: 4,
    question:
      "Do you offer warranties on your roofing services?",
    answer:
      "We offer warranties on both materials and workmanship. The specifics of the warranty will depend on the type of roofing material used and the nature of the project. Our experienced roofing team will provide detailed information about the warranty during the consultation.",
  },
  {
    id: 5,
    question:
      "What should I do to prepare for a roofing project?",
    answer:
      "Clear the area around your home or business of any outdoor furniture, vehicles, or obstacles. Ensure easy access to the roof and inform your neighbors about the upcoming work. Our experienced roofing team will guide you on any additional preparations needed.",
  },
  {
    id: 6,
    question:
      "What sets RH Construction USA Inc. apart from other roofing contractors?",
    answer:
      "Our commitment to high-quality craftsmanship, use of premium materials, extensive experience, and dedication to customer satisfaction distinguishes our company. We tailor our services to meet your specific needs and provide reliable, long-lasting roofing solutions.",
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
                src="/assets/roofing_contractor/FAQ.png"
                width={764}
                height={597}
                alt="faq  image"
                className="w-[764px] h-[315px] md:h-[597px]"
              />
            </div>
          </div>

          <div className="md:col-span-3 pt-3 md:pt-0">
            <div className="flex flex-col justify-center items-center md:items-start ">
              <div>
              <HeadingIcon text={headingIconText.faq__HeadingIconText}/>
              </div>

              <div>
                <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black md:text-start text-center pb-2">
                Some Questions You Must Ask a  
                  <br />{" "}
                  <span className="text-primary">
                  Roofing Contractor Expert Before Hiring Them 
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
