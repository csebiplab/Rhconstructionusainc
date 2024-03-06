import ServicePageHeader from "@/components/common/ServicePageHeader";

const RC = () => {
  return (
    <>
      <ServicePageHeader
        bg="https://www.rhconstructionusa.com/wp-content/uploads/2022/09/reviews.jpg"
        title={
          <>
            Affordable{" "}
            <span className="text-primary">Concrete Contractor Services</span>
          </>
        }
      />

      <section className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h2 className="mb-5">CONCRETE CONTRACTOR IN DENVER COLORADO</h2>
            {[
              "In Denver area Concrete Contractor in Denver Colorado is one of the top concrete contractors. You can trust our contractors to do a quality job and be on time. Whether you’re building a commercial or residential project, you must need experience working with many types of materials and schedule work throughout the day. We work with all different types of concrete, from plain cement to self-leveling and multi-pour flat slab system; we are able to handle any type of concrete contractor needs for your project! We will give you Concrete specs before your project starts to ensure there is no delay during <a href='https://www.rhconstructionusa.com/about/'>construction!</a>.",
            ].map((item) => (
              <p
                className="leading-relaxed text-gray-700 mb-4 text-lg"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </div>
          <img
            src="https://www.rhconstructionusa.com/wp-content/uploads/2022/11/Concrete-Contractor-scaled.webp"
            alt=""
            className="w-full ring-2 ring-offset-4 ring-primary rounded-lg"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
          <img
            src="https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-1.jpeg.webp"
            alt=""
            className="w-full ring-2 ring-offset-4 ring-primary rounded-lg"
          />
          <div>
            <h2 className="mb-5">
              WHO IS THE BEST & WHY YOU WANT TO HIRE THEM....?
            </h2>
            {[
              "With so many concrete contractors in Denver, you may be wondering how to hire the right one. Here are some key tips to help you finding the best concrete contractor in Denver:",
              "1. Compare costs and quality of work. You want a concrete contractor that charges competitive prices and provides high-quality workmanship at every step of your project.",
              "2. Look for references from past clients and check their ratings on Google or Yelp. Researching the company’s history you will know about our working longevity or any complaints about us from past customers.",
              "3. Ask for references from companies with which we already worked with or did business with in the past; which shows that we are reputable and trustable to do quality work on your project without causing any problems down the road.",
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
          title:
            "WHY YOU HIRE COMPLETE CONCRETE CONTRACTOR LLC DENVER COLORADO",
          contents: [
            "<b>Complete Concrete LLC Denver Colorado offers you the best concrete services. We are expert at our craft, and we know what we are doing. We have the right equipment and tools, and we can get the job done quickly.</b>",
            "If you are looking for a concrete contractor in Denver, it can be hard to find one that is dependable, honest, and affordable. It is important to find a good contractor who has the right equipment and tools for your needs. We want to make sure that we have done your project completely without any problems or delays.",
            "We offer both residential and commercial cleaning services. Our contractors are specialized in concrete cleaning services so they can take care of all types of concrete surfaces including driveways, sidewalks, patios, decks, sidewalks, parking lots and more!",
          ],
        },
        {
          title: "HOW TO CHOOSE THE RIGHT SIDING FOR YOUR HOME",
          contents: [
            "Choosing the right siding for your home is a big decision. It is clear to know what options are available for your home and what options will work best for you. You want to make sure that you choose the right type of siding for your home. There are many different types of materials that can be used in a home’s exterior, and each type has its own unique advantages and disadvantages. The best thing to do when choosing a type of siding is to look at the pros and cons of each type, then make a decision based on these factors.",
            "Polished concrete contractor Denver — Polished concrete contractor Denver can be defined as a business provider especially for those who want to install polished concrete or other types of natural stone at their homes but only know that it is not easy to do it.",
            "Is Denver’s polished concrete contractor Denver your preferred destination? If yes, then you are at the right place. We are professional and reliable in paving services. Our services cover outdoor and indoor options and the scope includes road construction, driveway, curb and gutter along with sidewalks.",
            "Polished concrete contractors Denver is one of the most trusted names in the industry. We offer the best quality services for polished concrete for commercial and residential properties. Our company is known for its high quality workmanship. Our team works extensively on ensuring excellent results by taking a keen interest in their work. Our workers are highly skilled in their respective fields and they ensure that they understand each and every detail related to polished concrete work.",
            "Finding a polished concrete contractor Denver for your project is not easy. The Internet makes itdifficult to find complete information about the best polish concrete contractors that you can hire for your next project",
            "Are you looking for polished concrete contractor Denver? You are on the right website. I have found hundreds of concrete contractors but not many were able to tell me the truth. The others were just trying to make money on me. They were just trying to sell me their services more so than telling me the truth about their company or services.",
            "Do you live in the Denver area and are looking for a polished concrete contractor? We’ve got a great selection of services to choose from",
            "<b>If you need contractors concrete service in Denver we can help. Our contractors can take care of all your needs.</b>",
            "<b>Professional Service</b>",
            "<b>Fast Response Time</b>",
            "<b>Punctual and Dependable</b>",
            "<b>High Customer Satisfaction</b>",
            "<b>Residential and Commercial Service</b>",
            "Everyone of us are proud serving members of the Denver community. We are hard working and take our business seriously. Our reputation is based not only on quality work but on trust. Did you see our five star reviews? These are real local residents of the Denver and surrounding areas.",
            "<b>Professional craftsmanship and quality.</b>",
            "<b>Committed to quality work, attention to detail, and exceptional customer service.</b>",
            "<b>Well-trained and experienced crews will get the job done right.</b>",
            "<b>Licensed & Insured in all Denver Metro areas.</b>",
            "<b>Driveways, Garage Floors, Patios, Pool Decks, Porches, Sidewalks,</b>",
            "<b>Stamped Concrete, Stairs, Walkways & More</b>",
          ],
        },
        {
          title: "RESIDENTIAL CONCRETE CONTRACTOR",
          contents: [
            "We’re proud to be one of the best residential concrete contractors in the Denver metro area. Our work is professional, our teams are knowledgeable and experienced, and our prices are fair and competitive. We guarantee our work and your satisfaction.",
            "Services For Your Needs & Budget",
            "Free Estimates",
            "Competitive Prices",
            "100% Satisfaction Guaranteed",
          ],
        },
        {
          title: "EXCEPTIONAL DRIVEWAY AND PATIO SPECIALIST",
          contents: [
            "Are you in need of a new driveway or walkway? Perhaps, you just need your asphalt or concrete patched up? No worries! Our team of skilled professionals is standing by to assist you in any way we can.",
          ],
        },
        {
          title: "HIGH QUALITY AND IMPRESSIVE LOOKING",
          contents: [
            "We have over 20 years of experience in providing you with high-quality solutions for a competitive rate. Whether you need work done on your gutters or it’s time to pour a driveway, you can trust in us to handle your needs.",
            "How to Hire a Contractor",
            "<a href=\"#\">Check State License Requirements</a>",
            "<a href=\"#\">Check Better Business Bureau</a>",
          ],
        },
        {
          title: "Services Offered",
          contents: [
            [
              "Verified by Business",
              "Carpentry",
              "Decks & Railing",
              "Balcony Remodeling",
              "Deck Remodeling",
              "Damage Restoration",
              "Balcony Construction",
              "Deck Construction/Replacement",
              "Deck Repair",
            ],
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
