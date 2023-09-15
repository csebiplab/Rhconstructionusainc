import ServicePageHeader from "@/components/common/ServicePageHeader";

const RC = () => {
  return (
    <>
      <ServicePageHeader
        bg="https://www.rhconstructionusa.com/wp-content/uploads/2022/09/reviews.jpg"
        title={
          <>
            Water <span className="text-primary">Proofing</span>
          </>
        }
      />

      <section className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h2 className="mb-5">EXTERIOR WATERPROOFING SERVICES NEAR ME</h2>
            {[
              "If you are looking for exterior waterproofing services near me, then you come to the right place. We can keep your home from getting wet. And here we provide you with everything that you need to know about waterproofing that might help you.",
              "We provide the best exterior waterproofing services near me. We help homeowners with our waterproofing services to keep their homes or business safe from harmful weather elements such as moisture, snow, and ice. And gladly we are known for our top-quality workmanship and customer satisfaction. ",
              "Our staff is highly trained and experienced in all aspects of waterproofing. With our services, we understand that each customer has different needs. That is why we offer a variety of options that will suit your specific needs. Whether it is their interior or exterior waterproofing need. ",
              "You know we are experts at our services. And our personalized solutions can help you to save money and time while keeping your property safe and protected. Our waterproofing services include waterproofing of roofs, windows, and doors.",
              "We can also install waterproofing on your walls as well as on your floors. Our team of experts can give you more information about our waterproofing services and we can help you choose the best option for your home or office.",
            ].map((item) => (
              <p
                className="leading-relaxed text-gray-700 mb-4 text-lg"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </div>
          <img
            src="https://www.rhconstructionusa.com/wp-content/uploads/2023/03/exterior-waterproofing-jpg.webp"
            alt=""
            className="w-full ring-2 ring-offset-4 ring-primary rounded-lg"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
          <img
            src="https://www.rhconstructionusa.com/wp-content/uploads/2023/03/Exterior-Waterproofing-Services-jpg.webp"
            alt=""
            className="w-full ring-2 ring-offset-4 ring-primary rounded-lg"
          />
          <div>
            <h2 className="mb-5">WHAT IS EXTERIOR WATERPROOFING?</h2>
            {[
              "It is a process that involves sealing cracks, holes, and other openings around your home. Sometimes it is often required when you have a leaky roof or siding. When it rains, water can seep into your home through these areas, and cause damage to the interior of your house. waterproofing can seal these leaks to prevent water from entering your home.",
              "There are two main types of waterproofing:",
              [
                "Membrane: This type of membrane is applied over the surface of the wall to offer protection against dirt, moisture, mold, and mildew. This type of application is best for durability and longevity in harsh weather conditions.",
                "Spray-on: Spray-on products are less expensive than membrane products but they aren’t as durable or long-lasting as membrane solutions.",
              ],
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
          title: "WHAT EXTERIOR WATERPROOFING DO",
          contents: [
            "It keeps your home protected against moisture and the elements. If you live in an area where it rains a lot then this type of waterproofing can protect your home from mold and mildew growth.",
            "Besides, it helps prevent water damage inside your walls and ceilings. In any leaky gutters or plumbing issues, it prevents water from seeping into your home.",
            "In addition, it keeps your exterior looking shiny clean, and beautiful all year long. No matter what time of year it is or how dry it gets outside. Waterproofing keeps your home free from dirt and grime.",
          ],
        },
        {
          title: "IS EXTERIOR WATERPROOFING IMPORTANT?",
          contents: [
            "Yes, homeowners need to keep water from damaging their homes. It can help you avoid costly water damage, and it will also protect your home from mold and mildew.",
            "Besides, these services are ideal for homeowners who want to ensure their homes are protected from the elements. It is also important for those who live in areas with flooding and high winds. As well as those who have septic systems or underground utilities such as gas and electric lines that are susceptible to damage from rainwater.",
          ],
        },
        {
          title: "COST OF EXTERIOR WATERPROOFING",
          contents: [
            "The cost of waterproofing depends on some factors. The first thing you need to do is decide what type of waterproofing you want to use and how much money you want to spend.",
            "Its cost also depends on the size of the job and the materials used. and sometimes it depends on the location of your home and whether it is a new or existing structure.",
            "There is no need to worry. We have a wide range of exterior waterproofing services available at affordable prices.",
          ],
        },
        {
          title: "WHY DO YOU SELECT US?",
          contents: [
            "We are a full-service, licensed, and insured company. That specializes in residential and commercial waterproofing services. And we can help you with any type of waterproofing project, whether it is a new home or an existing one.",
            "We are doing this for many years and built up a solid reputation. In addition, we use only the best materials when doing our work. Simply said, you want them to last as long as possible. Besides, we can protect your home from water damage, mold, and other issues.",
            "As a professional, we know how important it is to protect your home from these problems and we are always ready to help you out.",
          ],
        },
        {
          title: "NEAREST EXTERIOR WATERPROOFING EXPERTS",
          contents: [
            "We are the nearest waterproofing experts and provide the best quality workmanship. Our team has extensive knowledge of waterproofing techniques, materials, and equipment. We know what it takes to make your home or business safe.",
            "Our company has a high level of professionalism and we always put the customer first. With our services, we offer free consultations on all our services. As a result, feel free to pose any inquiries you may have. If you have any queries regarding our products or services then do not hesitate to contact us now.",
            "Besides this, we also provide any kind of roofing, siding, or other related services from us at a reasonable price.",
          ],
        },
        {
          title: "EXTERIOR WATERPROOFING PAINT",
          contents: [
            "Waterproofing paint is a quick and easy way to add an extra layer of protection to your exterior, especially during harsh winter weather.",
            "Our waterproofing paint is available in many colors and styles. So, you can pick something that matches your home perfectly. You can also find waterproofing paints that are designed for specific uses such as siding or trim work around windows and doors.",
          ],
        },
        {
          title: "WATERPROOFING SPRAY",
          contents: [
            "We are proud to offer the best exterior waterproofing spray in the industry. We also exclusively use cutting-edge tools and methods. Our team of experts can provide you with a detailed list of all of our services and the benefits they bring to your home. We also have a variety of packages available to fit any budget.",
            "Our services include installing spray foam insulation, adding sump pumps, repairing leaks and even installing an air barrier.",
          ],
        },
        {
          title: "CRAWL SPACE WATERPROOFING",
          contents: [
            "Crawl space waterproofing is the process of waterproofing the crawl space under your house. The process involves sealing off the gap between the foundation and the exterior of your home. It is also known as crawl space encapsulation or basement waterproofing.",
            "We provide crawl space waterproofing, basement waterproofing, and crawlspace leak repair. It is a great solution for homes that have crawl spaces.",
          ],
        },
        {
          title: "DECK WATERPROOFING",
          contents: [
            "Decking is a very important part of any home. It serves as a great way to add beauty and value to your home by providing a space for you and your family to relax. However, if your deck is not properly waterproofed, then mold and mildew can grow on the surface of the deck in no time at all.",
            "If you want to keep your deck looking great for years, then you need waterproofing properly. We also offer other services like gutter cleaning and pressure washing so that we can make sure that your home looks its best.",
          ],
        },
        {
          title: "FOUNDATION WATERPROOFING",
          contents: [
            "Our Foundation waterproofing services are designed to protect your home from the elements and make it more durable. We use a wide range of waterproofing materials to ensure that your foundation is protected from water damage.",
            "If you have a basement or crawl space that is prone to flooding, we can install an effective system that will keep your home safe during rain storms. And our waterproofing services come with free estimates and free quotes so there are no hidden costs associated with our work.",
          ],
        },
        {
          title: "CONCRETE CRACK REPAIR",
          contents: [
            "Concrete crack repair is a very common problem that can occur in any concrete driveway, walkway, or patio. Cracks are the result of absorbed water into the concrete, causing it to expand and contract. If left untreated, this can lead to large cracks in your concrete.",
            "We offer concrete crack repair services to help you eliminate these problems before they become too large for us to fix on our own.",
          ],
        },
        {
          title: "MOLD REMEDIATION",
          contents: [
            "We are a professional mold remediation company that can help you to get rid of your mold issues. Our mold remediation process begins by inspecting your home for any signs of mold.",
            "If there are any signs of mold, then we can come out and perform an inspection to determine the extent of the problem. Next, we will evaluate the severity of the issue and develop a plan for removal.",
          ],
        },
        {
          title: "EGRESS WINDOWS",
          contents: [
            "Egress windows are a major factor in the safety of your home. If you have an egress window in your home, it is important that it need properly maintained to ensure its safety. If your egress window is not properly maintained, then it could become dangerous for both you and your family.",
            "We offer high-quality egress windows. These windows are designed specifically for use with our emergency exit lighting system. Which can provide a bright glow when needed and turn off when not needed. So that you do not disturb anyone inside your home while leaving.",
          ],
        },
        {
          title: "CONCLUSION",
          contents: [
            "At last, we can say that our exterior waterproofing Contractors are here to give you the best quality waterproofing services. We promise that we do not disappoint you as far as our workmanship or customer satisfaction is concerned.",
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
