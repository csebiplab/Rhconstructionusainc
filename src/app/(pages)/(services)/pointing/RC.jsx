import ServicePageHeader from "@/components/common/ServicePageHeader";

const RC = () => {
  return (
    <>
      <ServicePageHeader
        bg="https://www.rhconstructionusa.com/wp-content/uploads/2022/09/reviews.jpg"
        title={<>Pointing Services</>}
      />

      <section className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h2 className="mb-5">
              EXTERIOR TUCK POINTING CONSTRUCTION NEAR ME
            </h2>
            {[
              "Looking for tuck pointing construction near me? Then we can help you out. Here we can provide you with all the information. On how to start it, what materials to use, and whether or not it’s necessary for each part of your house.",
              "Tuck pointing is a very important part of the home construction process. It is a common way to seal and improve the strength of your home’s exterior. And it makes your house look more attractive, weatherproof, and durable.",
              "We provide the best pointing services near you. Our team has years of experience in it and can help you with any kind of project. Whether your house needs to repair after a storm or for a classy driveway, we have the skills and knowledge to get the job done right.",
              "With our services, we offer an extensive line of tuck pointing materials that can use for any type of home. Besides, we have a variety of colors and textures available. So, you can choose from them and can find what is best for your project.",
              "Our services involve the removal of all loose or damaged brick, stone and mortar, flooring, and other materials from the exterior of your home. First, we survey your property to determine what needs to do. Then we create a plan that includes all of the necessary steps necessary for your project completion. ",
              "We are dedicated to providing you with excellent customer service during this process. In addition, we also offer free quotes for all new and remodeling jobs. ",
            ].map((item) => (
              <p
                className="leading-relaxed text-gray-700 mb-4 text-lg"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </div>
          <img
            src="https://www.rhconstructionusa.com/wp-content/uploads/2023/03/tuck-pointing-1.png.webp"
            alt=""
            className="w-full ring-2 ring-offset-4 ring-primary rounded-lg"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
          <img
            src="https://www.rhconstructionusa.com/wp-content/uploads/2023/03/Tuck-Pointing-Construction.png.webp"
            alt=""
            className="w-full ring-2 ring-offset-4 ring-primary rounded-lg max-h-[560px]"
          />
          <div>
            <h2 className="mb-5">WHAT IS TUCK POINTING</h2>
            {[
              "It is a process that repairs cracks and other defects in brickwork. Besides, it involves removing the old mortar and replacing it with new mortar, or a mixture of sand and cement, which strengthens the brickwork.",
              "It is a popular method of renovating old buildings and creating a traditional look. The traditional method of pointing his hand. But increasingly power tools are used such as specialist printing machines.",
              "The main advantage of using power tools is they can use in narrow spaces, whereas hand tools cannot. Besides, they also allow you to apply more pressure than a human being can manage. ",
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
                      <li className="mb-1">{e}</li>
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
          title: "WHAT TUCK POINTING DO",
          contents: [
            "Generally, it is a quality control measure that ensures that the walls, floor, and ceiling are all smooth and flat. It is a popular method of finishing concrete. That makes a wall look more finished by adding a layer of decorative concrete over an unsightly area. This process involves pouring concrete on top of existing concrete and leveling it out. So, it looks seamless and uniform.",
            "Besides, it improves the appearance of your home and makes it more inviting to potential buyers. They can do this on exterior walls, interior walls, and roofs. As well as structural elements such as columns, beams, and joists. Which helps to increase your property’s value.",
          ],
        },
        {
          title: "IS TUCK POINTING IMPORTANT",
          contents: [
            "Yes, it is an important step in the construction process. When it comes to the exterior of your home, it is a great way to add value and curb. If you’re looking for this in your home,  we can help you with this goal.",
            "It is important to note that they are not just for older homes. Rather it is also an effective way to finish some new construction projects too. For example, if you’re building an addition to your house or renovating an existing one, it can help blend in the new with the old. And you can make both projects look like they belong together as one cohesive space.",
            "In addition, they are not for exterior walls either. You can also use it when renovating interior spaces such as bathrooms or kitchens. Pointed walls significantly increase the value of your home while preventing mold growth and other damaging factors associated with dampness.",
          ],
        },
        {
          title: "HOW MUCH DOES TUCK POINTING COST?",
          contents: [
            "It is a very affordable construction task. While the cost of doing it can vary depending on the size and complexity of the project. However, it can do with a variety of materials, including concrete, cementitious mixtures, and steel. The type of material used depends on the type of pointing method used and what benefits it can provide for your project.",
            "You know, it is an effective way to improve curb appeal and prevent water leaks. Usually, professionals completed who have experience in this field. These contractors use specialized tools and equipment. So, they can charge more.",
            "On the other hand, the length of time it takes for the pointing contractor to complete the job is also important. Longer projects can require additional materials and labor costs which also affect their final price.",
          ],
        },
        {
          title: "WHY DO YOU SELECT US?",
          contents: [
            "Our tuck pointing team is committed to providing our clients with reliable and professional service. We have years of experience in this field, which help us gain wide recognition and respect among our clients.",
            "Gladly, we are proud of our reputation for quality workmanship, attention to detail, and timely completion. Besides, we try to give our customers the highest quality of service on every project from start to finish.",
            "And our experienced staff can assist you in selecting the proper materials and equipment you need for your project. With our services, we also specialize in residential, commercial, and industrial projects.",
            "However, we have extensive experience in dealing with every type of construction material. So, there is no need for you to worry about anything once we get started on your project.",
          ],
        },
        {
          title: "PERFECT POINTING",
          contents: [
            "We understand in a home you spend your free time and store your most prized possessions. So, obviously, you want to make your house in the best condition.",
            "In our services, we provide the highest quality tuck-pointing services in the area. We make sure that your home is perfectly pointed and ready for new construction or renovations.",
            "Our perfect tuck pointing not only improves the surface appearance of your home but also helps extend its life span. It also protects against moisture damage from weather conditions such as rain or snowfall.",
          ],
        },
        {
          title: "TUCK POINTING TOOLS",
          contents: [
            "We provide pointing tools for all brands of exterior home construction. And we can do tuck point on any exterior wall surface that needs it, including brick, stucco, tile, and more.",
            "Besides, we use durable tools. That makes the process easier and more efficient while ensuring a quality job every time. Our equipment comes with safety features such as air-powered pneumatic guns and nozzles. That eliminates the need for both hand work and sharp implements like chisels.",
          ],
        },
        {
          title: "TUCK POINTING BLADE",
          contents: [
            "Our team consists of highly skilled professionals. They are well-versed in all types of pointing techniques and know how to use different types of tools and equipment. Besides, they do their work efficiently and effectively.",
            "We use these blades to repair cracks and holes in your walls or floors. And we make it easily affordable for most people. You can hire us whenever you need our help. Because we do not charge extra money for installation or any other type of additional fee.",
          ],
        },
        {
          title: "BAD REPOINTING",
          contents: [
            "A bad repointing is a new layer of plaster over an old layer of plaster. The reason is that the old layer of plaster needs to be removed, which is known as repointing.",
            "We provide bad repointing and also other services like window and door replacement, new construction, repair, and maintenance. In our services, we are an expert in all types of bad repointing projects, from small to large scale.",
          ],
        },
        {
          title: "CHIMNEY AND FIREPLACE REPAIR",
          contents: [
            "Chimney and fireplace repair is our specialty. We offer a wide range of services, including cleaning and repair of your chimney, flue, and fireplace. Our technicians are trained to handle all types of chimneys, fireplaces, and stove repairs.",
            "And we use the best materials to ensure your fireplace is safe and protected from the elements. Besides, we can provide you with a free estimate on all types of repairs. So, if you need any kind of work on your chimney or fireplace, call us today.",
          ],
        },
        {
          title: "BUILDING FAÇADE RESTORATIONS",
          contents: [
            "With our services, we provide Building façade restorations, exterior tuck-pointing, and stonework. We are a leading company in the field of façade restoration. And we have the expertise to handle any kind of restoration job from minor repairs to major repainting projects.",
            "For our customers, we can restore the structure as well as the appearance of the façade. It is quite common for older buildings to have issues with their façades. But many times, it can be very difficult to find an issue or not until it is too late.",
            "However, we know how to deal with all kinds of materials like brick, stone, concrete, stucco, and much more.",
          ],
        },
        {
          title: "MASONRY CHIMNEY RESTORATION",
          contents: [
            "Masonry chimney restoration is one of the most common and troublesome repairs in the construction industry. It requires regular maintenance to keep them operational. The most common problem with masonry chimneys is that they become too porous, allowing water to seep through them. When this happens, masonry chimneys can become dangerous if not repaired quickly.",
            "We provide Masonry chimney restoration services to all types of customers, including homeowners, contractors, and insurance companies.",
          ],
        },
        {
          title: "CONCLUSION",
          contents: [
            "At last, we can say that tuck pointing is a common technique used to enhance the exterior of existing houses and buildings. When this process is neglected, walls can become brittle and weaker. To prevent this from happening, you can call us or can think about our services.",
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
