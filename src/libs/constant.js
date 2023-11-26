const constants = {
  hotline: "+1 (646) 683-4612",
  mail: "rhconusa@gmail.com",
  facebook: "https://www.facebook.com/RHconstructionusa",
  twitter: "https://twitter.com/_rhconstruction",
};
export default constants;
const constructionProjectConsiderations = [
  "Establishing clear goals and defining the scope of your construction project.",
  "Developing a comprehensive budget and financial strategy for the construction project.",
  "Identifying potential risks and implementing strategies to manage and mitigate them.",
  "Ensuring adherence to local regulations and obtaining necessary permits for construction.",
  "Evaluating and selecting the optimal site for construction, considering factors like accessibility and environmental impact.",
  "Building a skilled and reliable project team, including architects, contractors, and other key personnel.",
  "Incorporating modern technologies and innovative solutions to enhance efficiency and productivity.",
  "Creating a realistic timeline and scheduling plan for the various phases of the construction project.",
  "Developing a strategy for the procurement of materials and allocation of resources.",
  "Establishing effective communication channels among team members, stakeholders, and other involved parties.",
  "Implementing measures to ensure the quality and integrity of construction work throughout the project.",
  "Conducting an assessment of the project's environmental impact and implementing eco-friendly practices.",
  "Engaging with the local community and stakeholders to address concerns and build positive relationships.",
  "Securing appropriate insurance coverage and addressing legal considerations to protect the project and parties involved.",
  "Developing comprehensive safety plans and protocols to ensure the well-being of workers and minimize accidents.",
  "Planning for the ongoing maintenance and operational aspects of the constructed facility.",
  "Creating a flexible plan that can adapt to unexpected changes in conditions or requirements.",
  "Establishing a collaborative relationship with the client and managing expectations throughout the construction process.",
  "Exploring and implementing innovative construction methods to enhance efficiency and reduce costs.",
  "Establishing a robust system for record-keeping and documentation to track progress and ensure accountability.",
];
const totalLength = constructionProjectConsiderations?.length;
const partLength = Math.ceil(totalLength / 5);
const part1 = constructionProjectConsiderations.slice(0, partLength);
const part2 = constructionProjectConsiderations.slice(
  partLength,
  2 * partLength
);
const part3 = constructionProjectConsiderations.slice(
  2 * partLength,
  3 * partLength
);
const part4 = constructionProjectConsiderations.slice(
  3 * partLength,
  4 * partLength
);
const part5 = constructionProjectConsiderations.slice(4 * partLength);
export const partOfconstructionProjectConsiderations = [
  {
    part: {
      data: part1,
      length: part1.length,
    },
  },
  {
    part: {
      data: part2,
      length: part2.length,
    },
  },
  {
    part: {
      data: part3,
      length: part3.length,
    },
  },
  {
    part: {
      data: part4,
      length: part4.length,
    },
  },
  {
    part: {
      data: part5,
      length: part5.length,
    },
  },
];
