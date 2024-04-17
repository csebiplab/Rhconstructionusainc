"use client";
import build from "@/components/__home_components/Images/faqBuild.png";
import { smHeadingTexts } from "@/constants/smHeadingTexts";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import SmallHeadingWithIcon from "../ui/SmallHeadingWithIcon";

// FAQ questions and answers for RH Construction USA Inc. information
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
      "Yes, RH Construction USA Inc. is a fully licensed and insured company. We adhere to all necessary regulations and standards to ensure the safety and satisfaction of our clients.",
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
      "Yes, we can assist you with obtaining the necessary permits for your construction project. Our team is familiar with the permit process and will work closely with local authorities to ensure all requirements are met.",
  },
  {
    id: 6,
    question:
      "How can I get in touch with RH Construction USA Inc. for further inquiries?",
    answer:
      "You can contact us by phone, by email, or through the contact form on our website. Our team is available to assist you with any further inquiries or questions you may have.",
  },
];

export function FAQ() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="py-0 md:py-10 lg:py-12 5xl:py-[120px] container">
      <div className="md:flex items-center lg:gap-10 md:gap-3">
        <div>
          <Image
            src={build}
            width={478}
            height={717}
            alt="build"
            className="my-0 md:my-2 w-full h-full md:w-[478px] md:h-[717px]"
          />
        </div>
        <div className="mx-auto">
          <div className="text-center md:mb-2 lg:mb-4">
            <SmallHeadingWithIcon smallHeadingText={smHeadingTexts.faq} />
            <h1 className="lg:leading-10 lg:text-4xl text-lg mt-[9px] mb-[10px] xl:mt-[15px] xl:mb-[25px] text-start">
              FAQ FOR RH CONSTRUCTION USA INC
            </h1>
          </div>
          <>
            {faqQuestionsNAns.map(({ question, answer, id }, idx) => (
              <Accordion
                key={id}
                open={open === id}
                className="mb-2 border text-white bg-black border-blue-gray-100 px-4"
              >
                <AccordionHeader onClick={() => handleOpen(id)}>
                  <div
                    className={`border-b-0 transition-colors ${
                      open === idx + 1 ? "hover:!text-primary text-white" : ""
                    }`}
                  >
                    <b>Q{id}</b> {question}
                  </div>
                </AccordionHeader>
                <AccordionBody className="pt-0 p-1 text-base font-normal bg-white">
                  {answer}
                </AccordionBody>
              </Accordion>
            ))}
          </>
        </div>
      </div>
    </div>
  );
}
