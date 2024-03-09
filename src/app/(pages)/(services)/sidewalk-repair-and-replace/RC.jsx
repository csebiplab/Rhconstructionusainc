import ServicePageHeader from "@/components/common/ServicePageHeader";

const RC = () => {
  return (
    <>
      <ServicePageHeader
        bg="https://www.rhconstructionusa.com/wp-content/uploads/2022/09/reviews.jpg"
        title={<>Sidewalk Repair And Replace</>}
      />

      <section className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h2 className="mb-5">SIDEWALK REPAIR NEAR ME</h2>
            {[
              "If you need sidewalk repair near me, then you need not worry. We can help you with this. We are the best in it. And here we are providing you with all the information and resources on sidewalks, including general information, tips, and advice on protecting your investment.",
              "You may have to deal with many issues when the sidewalks are cracked or broken. Sidewalks are very important. They need well maintain and take care of. Because if they fail to do that, then it might become dangerous for children and adults. Then you need to hire professional and qualified people who have the expertise and experience in this type of work.",
              "We provide the best sidewalk repair near me. And we offer our services at the lowest price in town. Besides, we also offer a satisfaction guarantee on all the work that we do.",
              "In sidewalk repair near me, we offer complete residential sidewalk repair services as well as commercial sidewalk repairs. These include asphalt sealing and asphalt patching. In addition, we also provide concrete paving services such as crack removal, driveway resurfacing, and concrete sealants for driveways, patios, sidewalks, and more.",
              "Always providing excellent service is a top priority for us. With our services, we provide quality materials and unique designs for them. And gained so much popularity among our customers.",
              "Whether you have cracks in your driveway, cracks in your sidewalk, or holes in the walkway, call us today so that we can come out and repair them for you.",
            ].map((item) => (
              <p
                className="leading-relaxed text-gray-700 mb-4 text-lg"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </div>
          <img
            src="https://www.rhconstructionusa.com/wp-content/uploads/2023/03/sidewalk-repair-near-me-scaled.webp"
            alt=""
            className="w-full ring-2 ring-offset-4 ring-primary rounded-lg"
          />
        </div>
      </section>

      {[
        {
          title: "WHAT IS SIDEWALK REPAIR NEAR ME?",
          contents: [
            "They are the most important elements of a street. Sidewalks repair near me is the process of fixing and repairing a sidewalk. The most common reason for sidewalks repair is because they have cracks in them. That can cause serious problems when people walk on them without shoes or barefoot.",
            "One common type of sidewalk repair is to use concrete or asphalt. These materials work best for small cracks. Because they are more flexible and can easily fill in with mortar or compacted sand. The only problem with these materials is that they need to maintain regularly.",
            "Another common type of repair is using epoxy resin. This material works well for larger cracks. Because it is stronger than concrete and asphalt but still flexible enough to fill in and smooth over the surface after application.",
          ],
        },
        {
          title: "WHAT SIDEWALK REPAIR NEAR ME DO",
          contents: [
            "They are a useful service for homeowners. As it can help prevent damage to your property, maintain the appearance of your neighborhood, and increase the value of your home.",
            "Besides, it keeps your property looking good and safe. If you have any cracks, holes, or other defects in your sidewalk, it can fix them for you.",
            "Sidewalks can extend the life of your home. They minimize moisture issues in the soil around them. This means you need less expensive repairs down the road. And you can safely walk along them without being exposed to any hazards or dangers.",
          ],
        },
        {
          title: "IS SIDEWALK REPAIR NEAR ME IMPORTANT?",
          contents: [
            "They are very important because it helps to keep your neighborhood looking neat and clean. Sidewalks are the first thing that people see as they drive down a street. If you have a broken or cracked sidewalk, it can affect the safety of everyone who uses it. So, they need well-maintain.",
            "If you want to get rid of cracks in your sidewalk or other problems with your walkway, then you need is someone who wants their property fixed up again. They have all of their equipment ready and waiting.",
            "A good sidewalk can make your home more appealing to potential buyers. If you have an ugly or broken sidewalk, then people do not want to buy your house. A good-looking sidewalk can help sell your home faster.",
          ],
        },
        {
          title: "COST OF SIDEWALK REPAIR NEAR ME",
          contents: [
            "The cost of sidewalk repair varies based on the size and scope of the project. If you need to replace old asphalt or concrete with new ones, then you can expect to pay more than if you just want to fix small cracks in the sidewalk. The price also depends on whether or not you need to repave old pavement with new materials.",
            "If water damaged your sidewalk, then it needs new material to install on top of it. So that it can dry out properly before use again by pedestrians and vehicles. Then you can expect a higher cost for this kind of repair job as well.",
          ],
        },
        {
          title: "WHY DO YOU CHOOSE US AS YOUR SIDEWALK REPAIR NEAR ME?",
          contents: [
            "Our team ensures that they can solve any problem that arises during their work on your property. They can also educate you on how to maintain your property properly.",
            "We know that you want to get back to your busy life as soon as possible. And we work quickly and efficiently to get the job done safely and within budget.",
            "Besides, we offer quality services at a reasonable price. Our services are guaranteed to be 100% safe and effective.",
          ],
        },
        {
          title: "SIDEWALK REPAIR NEAR ME CONTRACTOR",
          contents: [
            "We are your nearest sidewalk repair contractors. We offer a wide range of services that include sidewalk repair, curb and gutter installation, walkway installation, and much more. Our team is highly skilled and experienced in all types of sidewalk repair work. And we have the best equipment and tools to handle any type of job with ease.",
            "We understand our customer’s needs and we try hard to satisfy them with our experience at all times. Besides, our team members are highly trained so they can deliver quality results every time without fail.",
          ],
        },
        {
          title: "CONCRETE SIDEWALK REPAIR",
          contents: [
            "Concrete sidewalk repair is one of the most common types of concrete work. We can repair your sidewalk and make it look brand new again. Besides, we can also install new concrete sidewalks and walkways.",
            "It is a great way to get rid of old, cracked, or damaged concrete. The best thing about this type of project is that it does not require any digging or heavy equipment. Our technicians can simply use a simple solution and patch up your sidewalk in no time.",
          ],
        },
        {
          title: "COMMERCIAL SIDEWALK",
          contents: [
            "With our services, we provide commercial sidewalk repair services for all types of commercial and residential sidewalks. We can repair any type of damage or crack on your sidewalk. Whether it is from water, ice, or heat.",
            "Our team of experts comes to your location and assesses the situation before starting any work. And we try to provide top-quality services in the area.",
          ],
        },
        {
          title: "REPAIR YOUR SIDEWALK CRACKS",
          contents: [
            "Sidewalk cracks are a common problem, especially during the winter months. When the ground freezes over and expands. And most homeowners ignore these cracks until they become too large or even dangerous to walk on.",
            "However, we can fix your sidewalk cracks by using different products including epoxy and asphalt. And our technicians also make sure that we use the best material for your project.",
          ],
        },
        {
          title: "ALL-AROUND PAVING",
          contents: [
            "We can provide all-around paving services in your area. Our team of experts is fully qualified to deal with any type of concrete paving and driveway repair. These include all types of cracks, cracks in the surface, and broken pieces.",
            "Besides, we provide you with everything from surface preparation to sealing and sealing services. And in our work, we use top-grade materials that make our work stronger year after year.",
          ],
        },
        {
          title: "ASPHALT PAVING",
          contents: [
            "Asphalt paving is a long-lasting and efficient material. That is used for the repair of walkways, parking lots, and other areas where traffic needs to pass. In past, they are used for roads but now they are used for sidewalks also.",
            "We provide asphalt paving repair services. They are fast and dependable. Our asphalt paving contractors have the expertise and tools to make your driveway repair on time.",
          ],
        },
        {
          title: "ALL-STAR PAVING",
          contents: [
            "We provide All-star paving and repair services according to your needs and budget. For your kind information, we work with insurance companies. And our team is friendly and professional in sidewalk repair near me. They can fix your sidewalk quickly.",
            "For you, we also install sidewalks in your neighborhood. Because we work hard to help you keep your community safe while creating a great walking environment for everyone in it.",
          ],
        },
        {
          title: "REMOVE SIDEWALK HAZARD",
          contents: [
            "Our team can remove the hazards from your sidewalk. With our experience, we know how to remove the hazard and we do it fast. Besides, we use our special equipment that is designed for this type of work.",
            "You may have some hazardous materials like broken glass or even nails on your sidewalk and you need to get rid of them as soon as possible.",
            "However, we can also replace missing boards on your sidewalk if they are beyond repair. If you have an existing crack in your sidewalk, we can fix it. So that it does not cause any more problems for you in the future.",
          ],
        },
        {
          title: "CONCLUSION",
          contents: [
            "We are here to give you the best sidewalk repair near me services. In addition, we can help you with your needs and requirements. So do not worry about anything. Just reach us, or call us for a free estimate.",
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
