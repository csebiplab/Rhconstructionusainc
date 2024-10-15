"use client";
import SmallHeadingWithIcon from "@/components/ui/SmallHeadingWithIcon";
import { smHeadingTexts } from "@/constants/smHeadingTexts";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
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
  {
    id: 7,
    question: "How do I get a quote for my project from your company?",
    answer:
      "You can request a free quote by contacting our company through our website, email, or phone. After discussing your project's details, we will provide you with an estimate based on your specific needs.",
  },
  {
    id: 8,
    question: "What types of projects do you specialize in?",
    answer:
      " We specialize in residential and commercial construction, including kitchen and bathroom remodeling, interior and exterior renovations, additions, and new construction projects. Every job is manageable for our general contractor team.",
  },
  {
    id: 9,
    question: "Do you provide design services?",
    answer:
      " Yes, we work with experienced designers and architects to assist you in creating a plan that meets your vision and budget. Whether you need a complete design service or just a consultation, we can help.",
  },
  {
    id: 10,
    question:
      "How long will my project take to complete?",
    answer:
      " Project timelines vary depending on the size, location, and complexity of the job. After assessing your project, we will provide a detailed timeline during the planning phase and keep you updated on progress throughout.",
  },
  {
    id: 11,
    question:
      "What sets RH Construction USA Inc. apart from other contractors?",
    answer:
      " Our commitment to quality craftsmanship, transparency, and excellent customer service makes us stand out. We work closely with clients from start to finish, ensuring their satisfaction every step of the way.",
  },
  {
    id: 12,
    question:
      "Could you work within my budget?",
    answer:
      " Absolutely. We believe in delivering high-quality work while staying within your budget. We will provide options and solutions that align with your financial requirements without compromising on quality.",
  },
  {
    id: 13,
    question: "How do I know what materials to choose for my project?",
    answer:
      "We guide our clients through the material selection process, offering recommendations based on durability, aesthetics, and budget. We work with trusted suppliers to ensure you get the best quality materials.",
  },
  {
    id: 14,
    question: "How can I track the progress of my construction project?",
    answer:
      " We maintain clear communication with our clients and provide regular updates throughout the project. You can expect frequent check-ins, reports, and direct access to our project managers for any questions or concerns.",
  },
  {
    id: 15,
    question: "Do you handle permits and inspections?",
    answer:
      "Indeed, we manage all required permits and guarantee that inspections adhere to local building codes and safety standards. We take care of the paperwork so you can focus on the results.",
  },
  {
    id: 16,
    question:
      "Once the project has started, can I make changes to it?",
    answer:
      "Yes, you can request changes during the construction process, but keep in mind that it may affect the project's timeline and cost. We'll work with you to accommodate any adjustments and keep you informed about how these changes might impact the overall project.",
  },
  {
    id: 17,
    question:
      "Do you offer sustainable or eco-friendly construction options?",
    answer:
      " Yes, our company is committed to sustainable building practices. We can recommend eco-friendly materials and energy-efficient designs that will lower your environmental impact and potentially reduce long-term energy costs.",
  },
  {
    id: 18,
    question:
      "How do you handle unforeseen issues that arise during construction?",
    answer:
      "In construction, unforeseen issues can occasionally arise, such as hidden structural problems. If this happens, we will promptly inform you and provide solutions to address the issue while keeping your project on track. We strive to minimize disruptions and additional costs.",
  },
  {
    id: 19,
    question: "What is the payment schedule for my project?",
    answer:
      " We typically break down our payment schedule into stages, including an initial deposit, progress payments at specific milestones, and a final payment upon project completion. We'll discuss the full schedule with you before the project begins.",
  },
  {
    id: 20,
    question: "Can you work on historic or older buildings?",
    answer:
      "Yes, we have experience working with historic and older buildings, ensuring that renovations or repairs maintain the building's integrity while updating it to modern standards. We're familiar with local preservation guidelines and can help navigate the requirements for these types of projects.",
  },
  {
    id: 21,
    question: "How do I prepare for a construction or remodeling project in my home?",
    answer:
      " Before your project begins, we will guide you through the preparation steps, such as clearing the work area and moving furniture or valuables. Depending on the scope of the project, you may need to temporarily relocate certain activities. Our general contractors aim to make the process as smooth as possible.",
  }
];
const Faq = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="">
      <div className="container common__padding__top">
        <div className="flex flex-col justify-center items-center">
          <div>
            <SmallHeadingWithIcon smallHeadingText={smHeadingTexts.faq} />
          </div>

          <div>
            <h2 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black text-center pb-2">
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
  );
};

export default Faq;
