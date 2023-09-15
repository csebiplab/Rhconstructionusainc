import ServicePageHeader from "@/components/common/ServicePageHeader";

const RC = () => {
  return (
    <>
      <ServicePageHeader
        bg="https://www.rhconstructionusa.com/wp-content/uploads/2022/09/reviews.jpg"
        title={<>Brickwork Contractors</>}
      />

      <section className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h2 className="mb-5">
              EXTERIOR BRICKWORK CONTRACTORS FOR CONSTRUCTION SERVICES NEAR ME
            </h2>
            {[
              "If you are looking for exterior brickwork contractors for Construction services near me, then do not worry. We are here for you. In this article, we are providing a list of things you can look out for before hiring any contractor in this field.",
              "For your kind information, we are the best brickwork contractors in the area. They are well-experienced in all types of brickwork projects. Our contractors can do almost anything with bricks and mortar. From building walls and laying paths to installing tiles in your kitchen or bathroom. They can also design the perfect garden, complete with pathways, ponds, and flower beds.",
              "Besides, we have been providing brickwork services for years. In this field, we have gained an excellent reputation as a leading provider of all types of construction services. Also, our team is well-trained to execute any type of brickwork project with perfection.",
              "Our work includes installing decorative bricks, laying stone pavers, and laying tiles on asphalt or concrete surfaces. In addition to this, we also provide waterproofing services for residential and commercial buildings.",
              "In addition, our team of experts can help you with all kinds of o exterior brickwork construction. Like repairing damaged bricks or replacing them with new ones if needed. So that your house remains intact and safe from any kind of risk or damage.",
              "And our brickwork contractors are available at affordable prices which makes them attractive to customers. So that they can choose our services without worrying about their finances. However, we also offer free estimates and no-obligation pricing. And you can compare our services against others in your area. ",
            ].map((item) => {
              if (typeof item === "string") {
                return (
                  <p
                    className="leading-relaxed text-gray-700 mb-4 text-lg"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                );
              } else if (Array.isArray(item)) {
                return (
                  <ul className="list-disc text-gray-700 pl-6 text-lg font-medium">
                    {item.map((e) => (
                      <li
                        className="mb-1"
                        dangerouslySetInnerHTML={{ __html: e }}
                      />
                    ))}
                  </ul>
                );
              }
            })}
          </div>
          <img
            src="https://www.rhconstructionusa.com/wp-content/uploads/2023/03/brickwork-contractors.png.webp"
            alt=""
            className="w-full ring-2 ring-offset-4 ring-primary rounded-lg"
          />
        </div>
      </section>
      <section className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
          <img
            src="https://www.rhconstructionusa.com/wp-content/uploads/2023/03/Exterior-Brickwork-Contractors.png.webp"
            alt=""
            className="w-full ring-2 ring-offset-4 ring-primary rounded-lg"
          />
          <div>
            <h2 className="mb-5">WHAT ARE BRICKWORK CONTRACTORS?</h2>
            {[
              "Generally, they are the people who build the walls of your house. They use bricks to construct the walls of your home. And making sure that they fit and match perfectly.",
              "Besides, they are also responsible for laying mortar between the bricks so that they can stick together. The mortar is what holds all of the bricks together. It makes them strong enough to withstand heavy weather conditions like rain or snow.",
              "You can call it art. That requires expert knowledge and skill. They make different patterns, designs, and sizes to create unique ornamental walls. And with their skills, experience, and qualifications they provide a wide range of services. Such as bricks on walls, floors, or ceilings. In this work, they use all kinds of materials like brick, clay, stone, and concrete. ",
            ].map((item) => {
              if (typeof item === "string") {
                return (
                  <p
                    className="leading-relaxed text-gray-700 mb-4 text-lg"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                );
              } else if (Array.isArray(item)) {
                return (
                  <ul className="list-disc text-gray-700 pl-6 text-lg font-medium">
                    {item.map((e) => (
                      <li
                        className="mb-1"
                        dangerouslySetInnerHTML={{ __html: e }}
                      />
                    ))}
                  </ul>
                );
              }
            })}
          </div>
        </div>
      </section>

      {[
        {
          title: "WHAT DO BRICKWORK CONTRACTORS DO",
          contents: [
            "They are responsible for the construction of brick walls, brick paving, and brick internal and external cladding. These contractors install bricks into masonry products such as walls and floors. In their work, they also collect, sort, and deliver bricks to their customers.",
            "However, they work on a wide range of projects including domestic properties, commercial properties, and industrial sites. With their services, they use hand tools including hammers, trowels, and chisels to shape the bricks in their desired form.",
            "Besides this, they also have to maintain good working conditions for themselves and other workers. Most of the time our skilled craftsmen keep appropriate safety equipment while working around dangerous machinery.",
          ],
        },
        {
          title: "WHY ARE EXTERIOR BRICKWORK CONTRACTORS IMPORTANT?",
          contents: [
            "Exterior brickwork near me is a significant part of any home’s design. It needs carefully planned, executed, and maintained. They play a vital role for homeowners. Because only they can ensure that all the bricks and mortar are in good condition. Sometimes they also advise on how to maintain your bricks and mortar for longer.",
            "They provide your home with a beautiful and practical finish. It makes your home more attractive. Brickwork can add color and texture to your property, making it more interesting. However, a well-designed brick wall can give it an extra level of prestige and beauty. This can increase its value as well as its desirability.",
            "It also provides insulation, which helps to keep the house warm in winter and cool in summer. The mortar between bricks helps to prevent water from seeping between them.",
            "Brickwork can also provide privacy and security for the home. This is particularly important if you live on a busy road or close to other buildings or people.",
          ],
        },
        {
          title: "COST OF BRICKWORK CONTRACTORS",
          contents: [
            "Its cost depends on the size, location, and complexity of the project. Like they usually charge more for larger projects because they need additional equipment to complete them quickly.",
            "Firstly, the cost of it varies depending on their skills as well as experience level. You have to pay more money than if you hire someone who has never done anything like this before.",
            "Secondly, busy areas masonry contractors are more expensive than those located in less populated areas because they have to travel farther to find suitable materials",
          ],
        },
        {
          title: "WHY DO YOU SELECT US AS YOUR BRICKWORK CONTRACTORS",
          contents: [
            "Our contractors are very experienced in the field of brickwork. And they can help you with any type of project you might have. Whether it is a small job or a large one, we can accommodate your needs with our experience and professionalism.",
            "Besides, we understand what our customers want from us. They want quick deliveries of their projects on time, with minimal disruptions in their daily lives.",
            "In addition, they want to get the best value for money when hiring us as their brickwork contractors. Fortunately, our customers know that we are well-trained and experienced and can do your work efficiently and quickly.",
          ],
        },
        {
          title: "BRICKWORK POINTING",
          contents: [
            "Brickwork pointing is a process where the bricks are pointed with a specialized tool to create a more attractive finish. This can do on new or old bricks. And it is the perfect way to give your home that extra touch of class.",
            "We do brickwork pointing, brickwork repairs, and brickwork replacement. For our work, we have the right equipment and know-how to fix any type of brickwork-pointing problem you may have.",
          ],
        },
        {
          title: "BRICKWORK REPAIRS",
          contents: [
            "Brickwork repairs are a common and necessary part of any home or building. The composition of the mortar determines its strength. So, it is important to ensure that the right products are used.",
            "They are the most critical aspect of any brickwork project. We can ensure all necessary repairs with our qualified brickwork contractor. So that it returns to its pre-existing condition.",
          ],
        },
        {
          title: "BRICKWORK SERVICES",
          contents: [
            "Brickwork is a popular building material in many parts of the world. It is used to build walls, roofs, and other structural elements.",
            "Brickwork contractors can provide you with all the services you need to get your project completed successfully. We offer bricklaying services, including brickwork and mortar installation, brick covering and repair, brick replacement, and chimney construction.",
          ],
        },
        {
          title: "SEALING EXTERIOR BRICKWORK",
          contents: [
            "We provide a range of services for your exterior brickwork. In our services, we can seal the bricks to keep them clean and preserve their color.",
            "And we do this with a variety of products including preservative sealants and corrosion inhibitors. Which helps protect the bricks from damaging effects.",
            "Our experts use their expertise to ensure that you receive perfect results. The service includes sealing the brickwork joints, repairing cracks in masonry surfaces, and repointing bricks and stone cladding.",
          ],
        },
        {
          title: "CEMENT PLASTER",
          contents: [
            "Cement plaster is used to seal, protect and beautify brickwork. Our high-quality products are ideal for both inside and outside brickwork. It allows you to achieve a uniform finish that exceeds your expectations.",
            "With our experience and knowledge, we can provide you with the best possible solution for your home. For a cost-effective and professional finish, we offer a wide variety of brickwork solutions.",
          ],
        },
        {
          title: "EXTERIOR BRICKWORK CONSTRUCTION DESIGN AND REPAIR",
          contents: [
            "We provide Exterior brickwork construction design and repair services. And we are experts at brickwork repairs, including repairs on render, stonework, and stone walls. Our brickwork contractors cover all types of complex brickwork construction projects, including new gable end extensions and alterations to existing homes.",
            "Besides our other services including chimney concrete repair, tiling, and waterproofing as well as driveway paving.",
          ],
        },
        {
          title: "HAND-PLASTERED WALLS",
          contents: [
            "We provide hand-plastered walls that are locally sourced, natural, and environmentally friendly. In our services, we do not use any harmful chemicals. So that we can provide a safe and healthy building environment.",
            "Our team uses the latest materials and methods in our work, so you can expect seamless installation and beautiful results. And we can ensure that we ensure that all our work is performed with perfection.",
          ],
        },
        {
          title: "WE ARE AVAILABLE 24/7",
          contents: [
            "There is no job too small or too big for us. And we have built a solid reputation based on superior quality and personal service. We are available 24/7 to answer any questions you may have.",
            "If we cannot answer your question immediately, you can expect a reply within the hour. We also offer other services such as brickwork and terrace installation, kitchen installation, and renovations.",
          ],
        },
        {
          title: "CONCLUSION",
          contents: [
            "For all your above-mentioned requirements, you can contact us today. Our brickwork contractors can reach your location on the same day. They can give you the best of the services you deserve and can fulfill your brickwork requirements perfectly.",
          ],
        },
      ].map((section, key) => (
        <section className={`py-16 ${key % 2 !== 0 ? "bg-gray-100" : ""}`}>
          <div className="container">
            <h2 className="mb-4">{section?.title}</h2>
            {section.contents.map((item, key) => {
              if (typeof item === "string") {
                return (
                  <p
                    key={key}
                    className="leading-relaxed text-gray-600 text-lg mb-4"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                );
              } else if (Array.isArray(item)) {
                return (
                  <ul className="list-disc text-gray-700 pl-6 text-lg font-medium">
                    {item.map((e) => (
                      <li className="mb-1">{e}</li>
                    ))}
                  </ul>
                );
              }
            })}
          </div>
        </section>
      ))}
    </>
  );
};

export default RC;
