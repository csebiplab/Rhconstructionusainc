"use client";
import SmallHeadingWithIcon from "@/components/ui/SmallHeadingWithIcon";
import { smHeadingTexts } from "@/constants/smHeadingTexts";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
const faqQuestionsNAns = [
  {
    id: 1,
    question: "What services does RH Construction USA Inc. provide?",
    answer:
      "RH Construction USA Inc. specializes in a wide range of construction services including but not limited to residential construction, commercial construction, remodeling, renovations, and general contracting.",
  },
  {
    id: 2,
    question: "Where is RH Construction USA Inc. located?",
    answer:
      "Our main office is located in Brooklyn NY. However, we operate in Brooklyn, Queens, Manhattan, Bronx, and Staten Island.",
  },
  {
    id: 3,
    question: "Is RH Construction USA Inc. licensed and insured?",
    answer:
      "Yes, RH Construction USA Inc. is a fully licensed and insured company. Our general contractors adhere to all necessary regulations and standards to ensure the safety and satisfaction of our clients.",
  },
  {
    id: 4,
    question:
      "How does RH Construction USA Inc. prioritize safety on the job site?",
    answer:
      "Safety is our top priority at RH Construction USA Inc. We have strict safety protocols in place and provide regular training to our staff to ensure compliance with safety regulations and standards.",
  },
  {
    id: 5,
    question:
      "Can RH Construction USA Inc. assist with obtaining permits for construction projects?",
    answer:
      "Yes, RH Construction can assist you with obtaining the necessary permits for your construction project. Our team of general contractors is familiar with the permit process and will work closely with local authorities to ensure all requirements are met.",
  },
  {
    id: 6,
    question:
      "How can I get in touch with RH Construction USA Inc. for further inquiries?",
    answer:
      "You can contact us by phone, by email, or through the contact form on our website. Our team is available to assist you with any further inquiries or questions you may have.",
  },
];
const Faq = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="">
      <div className="container common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 md:gap-[30px]">
          <div className="md:col-span-3 flex items-center ">
            <div className="">
              <Image
                src="/assets/home_page/faq.png"
                width={764}
                height={551}
                alt="faq  image"
                className="w-[764px] h-[315px] md:h-[551px]"
              />
            </div>
          </div>

          <div className="md:col-span-3 pt-3 md:pt-0">
            <div className="flex flex-col justify-center items-center md:items-start ">
              <div>
              <SmallHeadingWithIcon smallHeadingText={smHeadingTexts.faq} />
              </div>

              <div>
                <h2 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black md:text-start text-center pb-2">
                FAQ FOR RH CONSTRUCTION USA INC
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
                  <AccordionBody className="px-3 py-1 text-base font-normal bg-white text-black border border-black">
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

export default Faq;
