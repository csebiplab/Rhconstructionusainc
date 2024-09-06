import Image from "next/image";
import WorkingProcessImg from "../../../public/assets/images/working-process.jpg";

const workingProcessLists = [
  {
    id: 1,
    title: "Project Planning and Design:",
    desc: "We begin by meeting with clients to understand their needs, goals, and budget constraints.",
  },
  {
    id: 2,
    title: "Procurement of Materials and Resources:",
    desc: "We source high-quality materials and engage skilled laborers and subcontractors necessary for the project. ",
  },
  {
    id: 3,
    title: "Quality Control and Assurance:",
    desc: "Throughout the construction phase, we conduct regular inspections and quality control checks to ensure that work meets our standards and adheres to the agreed-upon specifications.",
  },
  {
    id: 4,
    title: "Client Communication and Updates:",
    desc: "We maintain open lines of communication with clients, providing regular updates on the progress of their projects and addressing any concerns or queries they may have.",
  },
  // {
  //   id: 5,
  //   title: "Completion and Handover:",
  //   desc: "We maintain open lines of communication with clients, providing regular updates on the progress of their projects and addressing any concerns or queries they may have.",
  // },
];

export default function OurWorkingProcess() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-11 gap-x-6">
        <div className="w-full md:col-span-7">
          <h2 className="font-bold mb-2 text-3xl">
            Working Process of Our Construction Company{" "}
            <span className="text-primary">in Brooklyn</span>
          </h2>
          <p className="font-semibold">
            Certainly! Here's an overview of the working process of our
            construction company in Brooklyn:
          </p>
          <div className="w-full mt-4">
            <ul className="list-disc list-inside marker:text-primary marker:font-extrabold marker:text-2xl">
              {workingProcessLists.map(({ id, title, desc }) => (
                <div key={id} className="mb-2">
                  <p className="font-bold -mb-2">{title}</p>
                  <li className="ml-8 font-medium">{desc}</li>
                </div>
              ))}
            </ul>
          </div>
          <p className="w-full font-medium">
            <span className="text-primary text-xl">*</span> By following this
            comprehensive working process, we aim to deliver exceptional
            construction projects that exceed our client's expectations while
            contributing positively to the Brooklyn community.
          </p>
        </div>
        <div className="w-full md:col-span-4 h-3/4 md:h-full">
          <Image
            src={WorkingProcessImg}
            alt="Working process"
            width={600}
            height={300}
            priority={1}
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
