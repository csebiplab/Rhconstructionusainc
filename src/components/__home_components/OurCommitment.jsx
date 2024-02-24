import { OurCommitmentCard } from "./OurCommitmentCard";

const commitments = [
  {
    id: 1,
    title: "Customer Satisfaction",
    text: `We prioritize clear communication, transparent processes, and client collaboration to ensure that every step of the construction journey aligns with our client's vision and expectations.`,
    icon: "/assets/icons/commitment1.png",
  },
  {
    id: 2,
    title: "Timely Project Delivery",
    text: `Our efficient project management practices and skilled workforce enable us to deliver results promptly without compromising on quality.`,
    icon: "/assets/icons/commitment2.png",
  },
  {
    id: 3,
    title: "Innovation and Adaptability",
    text: `We embrace innovation and stay at the forefront of construction technology and trends. Our commitment to continuous improvement allows us to adapt to evolving industry standards, delivering modern, sustainable, and future-ready construction solutions.`,
    icon: "/assets/icons/commitment3.png",
  },
  {
    id: 4,
    title: "Safety First",
    text: `The safety of our team and all stakeholders is non-negotiable. We implement rigorous safety protocols and adhere to industry regulations to create a secure work environment. Our commitment to safety reflects our responsibility towards our workforce and the communities we serve.`,
    icon: "/assets/icons/commitment4.png",
  },
  {
    id: 5,
    title: "Transparent Pricing",
    text: `Honesty and transparency are the cornerstones of our pricing strategy. We provide detailed and accurate estimates, ensuring that our clients have a clear understanding of costs from the outset. There are no hidden fees, and we strive to deliver value that exceeds expectations.`,
    icon: "/assets/icons/commitment5.png",
  },
  {
    id: 6,
    title: "Professional Integrity",
    text: `We conduct business with honesty, integrity, and a commitment to ethical practices. Our clients can trust us to uphold the highest standards of professionalism in every aspect of our work.`,
    icon: "/assets/icons/commitment6.png",
  },
];

const OurCommitment = () => {
  return (
    <div className="container mx-auto">
      <div className="w-full flex justify-center">
        <div className="">
          <div className="flex justify-center">
            <h1 className="leading-10 mb-1 max-w-4xl">
              <span className="text-primary">Our Commitment </span> as one of
              the Best Construction Companies in Brooklyn
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 justify-center items-center h-full">
            {commitments?.map((commitment, idx) => (
              <div
                key={commitment.id}
                className="md:max-w-xs h-[460px] border-b-2 border-gray-600 rounded-none text-center"
              >
                <OurCommitmentCard commitment={commitment} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCommitment;
