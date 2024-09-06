import ServicePageHeader from "@/components/common/ServicePageHeader";

const RC = () => {
  return (
    <>
      <ServicePageHeader
        bg="https://www.rhconstructionusa.com/wp-content/uploads/2022/09/reviews.jpg"
        title={<>Plastering Services</>}
      />

      <section className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h2 className="mb-5">PLASTERING CONTRACTORS COMPANY NEAR ME</h2>
            {[
              "Are you looking for reputable plastering contractor companies near me? Then you come to the right place. We can help you out.  Here we can provide reliable plastering contractors who can fulfill all your criteria and offer solutions according to your preferences.",
              "Yes, we are the best plastering contractors in the area. And our company is known for its commitment to quality, which makes us one of the most preferred companies in this industry. They can do an excellent job on your property with the best techniques. Besides, we also ensure that all of our materials are top quality. So that they last long without any issues.",
              "We offer a wide range of services from home repairs to commercial projects. And we are licensed and insured, so we can professionally repair your property. ",
              "Our plastering contractors are highly qualified and experienced in all aspects of plastering. We offer everything from simple repair jobs to complete re-plastering of your home. In addition, we have a huge selection of colors and textures to choose from. ",
              "With our services, we also provide other services like bathroom refurbishment, and kitchen refurbishment, at extremely affordable prices. On the other hand, our staff is always friendly. They are punctual and can do everything to make your house looks great. We also provide free estimates. So, there is no need to worry about price or time.",
            ].map((item) => (
              <p
                className="leading-relaxed text-gray-700 mb-4 text-lg"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </div>
          <img
            src="https://www.rhconstructionusa.com/wp-content/uploads/2023/03/plastering-companies-near-me-jpg.webp"
            alt=""
            className="w-full ring-2 ring-offset-4 ring-primary rounded-lg"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
          <img
            src="https://www.rhconstructionusa.com/wp-content/uploads/2023/03/plastering-contractors-jpg.webp"
            alt=""
            className="w-full ring-2 ring-offset-4 ring-primary rounded-lg"
          />
          <div>
            <h2 className="mb-5">PLASTERING CONTRACTORS COMPANY NEAR ME</h2>
            {[
              "Plastering contractors are the construction workers who do the plastering work for you. They lay the plaster on walls and ceilings. So that they can look beautiful. Besides they are used for repainting walls, painting trim, or even adding new decorative accents.",
              "They are also used to remove wallpaper in certain rooms that match the existing ones. However, in some cases, they are called to repair damaged plaster and stucco. ",
            ].map((item) => (
              <p
                className="leading-relaxed text-gray-700 mb-4 text-lg"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </div>
        </div>
      </section>

      {[
        {
          title: "WHAT DO PLASTERING CONTRACTORS DO",
          paragraphs: [
            "They use sand and plaster to create a solid base for your walls, ceilings, and floors. They use tools like ladders and scaffolding to reach high places where you cannot get yourself up there. Besides, they make your walls plaster properly before they apply the finish coat of paint or wallpaper.",
            "In some cases, they work with different materials to create the perfect look for your home. They use drywall or gypsum board as well as paints, stains, and more.",
            "So, if you want your house to look its best and safe from water damage, then a good plasterer is what you need.",
          ],
        },
        {
          title: "ARE PLASTERING CONTRACTORS USEFUL?",
          paragraphs: [
            "They are useful for many reasons. They can use as a means of keeping your home looking new. Because they can create a fresh coat of plaster that can help to cover up any damage or cracks. On the other hand, they can also use when you need to repair or modify your house, such as ceilings and walls.",
            "If you plan on remodeling your home or even just making some small changes, they can help you with those projects. They can fix any damages that occur from water or other environmental factors.",
          ],
        },
        {
          title: "TYPE OF PLASTERING",
          paragraphs: [
            "The type of plastering you need can depend on the type of home you live in and how much work you want to do on it.",
            "If you have a small home with a small budget, hiring a painting contractor is the best option for you. This type of contractor can help you paint your entire house or just one room at a time.",
            "In a large home that needs some serious renovations, you can hire a coving contractor. These professionals specialize in installing decorative wood surfaces such as wood paneling or hardwood floors throughout your home. They often use special tools and techniques that allow them to install these surfaces with ease.",
            "For damage or mold, a drywall contractor is necessary for repairing it properly. Drywall contractors specialize in installing new drywall into homes.",
          ],
        },
        {
          title: "COST OF PLASTERING CONTRACTORS",
          paragraphs: [
            "The cost of it is one of the most important factors to consider when looking for a good plastering contractor. The size of your project can impact the overall costs. If you have a small project, it is cheap to hire a local contractor than hire an out-of-town company.",
            "However, if you have a large project or one that requires multiple crews, then hire an out-of-town company. The type of material used in your project can also affect the cost. This includes how hard your plaster needs and how much you want to cover with it.",
            "The thickness of the material can increase its costs. Because thicker materials require more labor hours to install than thinner materials.",
          ],
        },
        {
          title: "WHY DID YOU CHOOSE US AS YOUR PLASTERING CONTRACTORS?",
          paragraphs: [
            "It is simple. We have years of industry experience and can help you with all your needs. In addition, we only use the best materials for our work. So, your home or business is protected from moisture and dust. Our team is fully trained to handle any job from ceiling repair to full wall replacements.",
            "We offer free estimates and a 100% satisfaction guarantee on all our services. Our goal is to provide our customers with the best quality service at a reasonable price.",
            "With our services, we understand in any emergency you need plastering contractors. So, we are always available 24/7 to help you.",
          ],
        },
        {
          title: "PLASTERING WALLS",
          paragraphs: [
            "We do plaster walls, ceilings, and facades. Our team is dedicated to making your construction process as simple and hassle-free as possible. You can hire us for any type of work like working walls, ceilings, flooring, and many more.",
            "However, we are not just providing services but also offering customization in our services as per your needs. And we do Plastering walls without compromising on the quality of work.",
          ],
        },
        {
          title: "PLASTERING TAPE",
          paragraphs: [
            "They use to repair cracks and uneven surfaces in drywall, plaster, and concrete. It is also a good way to patch up holes in drywall that are smaller than the standard 1/2-inch width.",
            "Plastering tape is available in many different colors and can be made to match the color of your walls. We do plaster tape for all your needs.",
            "Whether you need to repair cracks in your walls or floors, we offer a wide range of plastering tapes. That can suit your needs. Besides, we have the best quality plastering tapes at competitive prices.",
          ],
        },
        {
          title: "SAND PLASTERING",
          paragraphs: [
            "If you are looking for sand plastering, then you are at the right place. Our team of experienced professionals are doing sand plastering for many years now.",
            "We continue to grow as a result of that. For you, we provide services on an hourly basis so that you can get the best results from us.",
          ],
        },
        {
          title: "CONCRETE PLASTERING",
          paragraphs: [
            "It is a technique that use to fill cracks in concrete. It can also use to repair damages to the surface of the concrete. Concrete plastering is a very versatile process. And it can use for a range of purposes. One of the main advantages of this technique is that it does not involve the use of chemicals that may damage the environment.",
            "We do concrete plastering, concrete block, stone work, small remodels, and additions. Besides, we also do driveway replacement.",
          ],
        },
        {
          title: "PLASTERING SERVICES & RENOVATIONS",
          paragraphs: [
            "As plastering contractors near me, we do plaster services and renovations. So, you can rest in peace about our professionalism, reliability, and quality of workmanship.",
            "We do plaster services and renovations for homes, offices, retail spaces, and commercial buildings. Our team is trained to handle any type of project with great care.",
          ],
        },
        {
          title: "INTERIOR AND EXTERIOR PLASTERING",
          paragraphs: [
            "We do both interior and exterior plastering. Our team is ready to help you with any project big or small. Whether you need a new floor for your office or remodel of your kitchen, we can handle it all.",
            "We specialize in drywall repair and replacement as well as wallpapering and taping. Our team will work with you every step of the way to ensure your home looks its best.",
          ],
        },
        {
          title: "SKIMMING OVER OLD PLASTER",
          paragraphs: [
            "Skimming over an old plaster is a great way to make your walls protect against any further damage. It is a quick and affordable way to prevent further cracking, chipping, and peeling.",
            "The process involves removing the existing plaster from the wall and then applying new plaster in its place. We do skim over old plaster. We use foam, not water. It is dry, comes in handy, and can use as a sealant.",
            "We use two types of material: whiteboard or plain sheetrock. The sheetrock holds up to wear and tear better than the whiteboard does. But it does not hold up as long in humid conditions. It also tends to warp more easily than the whiteboard.",
          ],
        },
        {
          title: "CONCLUSION",
          paragraphs: [
            "As you can see, there are many good reasons why we are the best choice among the plastering contractors near me. And if you are looking for a company that offers top-quality services, at reasonable prices, then you should choose us. We can do all efforts to meet your expectations.",
          ],
        },
      ].map((section, key) => (
        <section className={`py-16 ${key % 2 !== 0 ? "bg-gray-100" : ""}`}>
          <div className="container">
            <h2 className="mb-4">{section?.title}</h2>
            {section.paragraphs.map((item, key) => (
              <p
                key={key}
                className="leading-relaxed text-gray-600 text-lg mb-4"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default RC;
