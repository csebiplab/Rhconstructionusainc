import ServicePageHeader from "@/components/common/ServicePageHeader";

const RC = () => {
  return (
    <>
      <ServicePageHeader
        bg="https://www.rhconstructionusa.com/wp-content/uploads/2022/09/reviews.jpg"
        title={<>Roofing Services</>}
      />

      <section className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h2 className="mb-5">COMMERCIAL ROOFING COMPANIES NEAR ME</h2>
            {[
              "Are you looking for Local Commercial Roofing Installation Companies Near Me? Then you come to the right place. We can help you. There are many roofing contractors available who are skilled and experienced in this type of work. However, whether you need an emergency repair or even just regular maintenance, here we provide all the information that you need.",
              "You know, we are the best Commercial roofing Installation company near me. We are trying to provide our customers with exceptional roofing services for many years now. And the best part is, our team is highly experienced and has a lot of experience in this field. ",
              "In addition, our team is fully licensed, insured, and experienced in handling all types of commercial roofing projects. And we offer a wide range of services including metal roofing installation, tile roof installation, concrete roofing installation, and more.",
              "We are highly qualified and equipped with the latest technology that helps us deliver excellent results at affordable prices. With us, you can get complete peace of service, high-quality workmanship, and timely completion within budget.",
              "And in our services, we have all kinds of different materials we can use such as asphalt shingles, slate shingles, and metal shingles among others. Besides our goal is to make your commercial roof installation as easy as possible.",
            ].map((item) => (
              <p
                className="leading-relaxed text-gray-700 mb-4 text-lg"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </div>
          <img
            src="https://www.rhconstructionusa.com/wp-content/uploads/2023/03/Commercial-Roofing.png.webp"
            alt=""
            className="w-full ring-2 ring-offset-4 ring-primary rounded-lg"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
          <img
            src="https://www.rhconstructionusa.com/wp-content/uploads/2023/03/Commercial-Roofing-Installation.png.webp"
            alt=""
            className="w-full ring-2 ring-offset-4 ring-primary rounded-lg"
          />
          <div>
            <h2 className="mb-5">WHAT IS THE COMMERCIAL ROOFING</h2>
            {[
              "The roof of the building covers the interior and exterior of the structure. The main purpose of it is to protect all areas. A good roof can keep out harmful weather conditions. And protect against rain, snow, and other elements that may damage the property. It also allows air to light circulate freely.",
              "They can make out of different materials like steel, and aluminum depending on the need of your business and its location. Besides they can make from metal, wood, tile or slate tiles, or even plastic sheets. Each material has its advantages and disadvantages. However, you need to consider the type of material that suits your requirements before planning.",
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
          title: "WHAT COMMERCIAL ROOFING DO",
          contents: [
            "Roofing is a great way to add value and curb the overall building envelope. A well-installed commercial roof can provide many benefits. This means they can withstand higher stress levels and weight than residential roofs.",
            "A properly installed roof can reduce the amount of energy used for heating and cooling. In addition, they can reduce the risk of structural damage and water leaks. And it can last up to 50 years or longer when properly maintained, which reduces maintenance costs over time.",
          ],
        },
        {
          title: "IS COMMERCIAL ROOFING IMPORTANT?",
          contents: [
            "Yes, they are important for some reasons. It can help you to improve the appearance of your building. Roofing is the most important part of any commercial building. In addition, it protects walls and ceilings and provides access to the building.",
            "Besides, it helps maintain a comfortable temperature. And, it reduces noise from the outside and makes it easier to keep the building dry in wet weather.",
            "Roofing can install in many different styles, so there are many options available to you. If you are looking for an affordable way to improve the look of your building then you can choose vinyl or tile. That is ideal as they are quick and easy to install.",
          ],
        },
        {
          title: "COST OF COMMERCIAL ROOFING",
          contents: [
            "The cost of roofing is typically based on the type of roofing material used, the size of the roof, and whether. Besides, its cost depends on whether there are any additional repairs needed.",
            "Generally speaking, asphalt shingles are more expensive than metal or composite shingles. Aluminum and fiberglass shingles tend as affordable options that have similar durability levels as asphalt shingles.",
            "And smaller roofs typically require fewer materials per square foot than larger ones. In some cases, a company may choose to use less expensive materials to save money while still getting high-quality results. Other times, they may go with more expensive options that cost more but provide better protection against damage or other hazards.",
          ],
        },
        {
          title: "WHY DO YOU SELECT US AS YOUR COMMERCIAL ROOFING COMPANY?",
          contents: [
            "With years of experience in the industry, we have developed strong relationships with both residential and commercial customers. We understand your business needs and can help you find the perfect solution for your specific needs.",
            "Our team has the knowledge and expertise to handle any job from minor repairs to major replacements. From insulation to shingles, we can provide you with all types of roofing products. That can keep your property safe from the elements year after year.",
            "And, we only use high-quality materials and products. These include quality asphalt shingles, metal and composite shingles, standing seam metal roofing, flat roofs, skylights and so much more.",
          ],
        },
        {
          title: "BEST ROOFING COMPANIES",
          contents: [
            "When you are looking for a company that can offer you the best quality service, then we are the best roofing company in the industry. And we aim to provide our clients with the best possible services.",
            "Our team members are very friendly. They can answer all your questions regarding our company and its services. If there is anything that we can do to make your experience better, then please let us know.",
          ],
        },
        {
          title: "LOCAL ROOFING COMPANIES",
          contents: [
            "We are the local roofing companies that offer quality services to all our customers since we started. Besides, we understand that each project is different, and therefore the requirements of our clients are also different. And we have an excellent team of professionals who can provide you with any type of roofing services you may need at your home.",
            "For your kind information, we are experts in all types of roofs, including flat roofs, asphalt shingles, metal roofs, tile roofs, and more. For this, we can help you find the right product for your needs. However, we also make sure that we deliver on our promises and commitments with customer satisfaction at all times.",
          ],
        },
        {
          title: "EXTERIOR ROOFING",
          contents: [
            "Exterior roofs are the most common type of roofing and can make from several different materials. For example, asphalt shingles are a popular choice for most homes. But there are other options for you to choose from as well, including slate and clay tile.",
            "We do exterior roofing, which means we can install a new roof on your home. Besides, we offer free estimates on all projects.",
          ],
        },
        {
          title: "FLAT ROOFING INSTALLATION",
          contents: [
            "Flat roofs are a great way to make your home look more attractive. But they are quite expensive. If you do not know how to keep them in good condition and prevent leaks, then you need a lot of money spent on repairs.",
            "As a professional flat roofing installation company in your area, our team has extensive knowledge of this type of work. We offer low-cost flat roofing services that are sure to meet your expectations.",
          ],
        },
        {
          title: "COMMERCIAL ROOFING REPAIR",
          contents: [
            "Commercial roofs are a big investment, and they need maintain properly. Regular maintenance can ensure that it is functioning properly. If you notice any issues with your commercial roof, take action right away. So that you can get the problem fixed as soon as possible.",
            "Our roofing repair services can help you keep your commercial roof in good shape. We offer a wide range of services that can help restore the look of your roof and make it functional again.",
          ],
        },
        {
          title: "RUBBER ROOFING",
          contents: [
            "Rubber roofing is a great choice for homeowners who want to save money on their roofing bills and make their homes look better. It is also a good option if you are looking for something that can last for many years.",
            "The best part about rubber roofing is that it does not require any maintenance and can withstand heavy rain and snowfall without damage or leakage. The material also emits a low level of carbon dioxide, so there are no problems with your home’s energy efficiency.",
            "Our rubber roofing is available in both flat and sloped styles. So, whether you want a single-family home or an apartment complex, we can install it for you.",
          ],
        },
        {
          title: "EMERGENCY ROOFING",
          contents: [
            "We are a commercial roofing company that deals with emergency roof repairs. Our team provides full-service roofing in the area. With our services, we offer free estimates and free same-day service.",
            "And our technicians are highly trained and ready to handle any job you may need to do on your roof, including hail damage repair. Besides, we can work on almost any type of roofing material, including metal roofs, tile roofs, and more.",
          ],
        },
        {
          title: "CONCLUSION",
          contents: [
            "The best part is, you can get qualified, professional commercial roofing Installation services from us at any time. Just give us a call and our skilled roofing experts do visit your commercial property for the assessment.",
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
