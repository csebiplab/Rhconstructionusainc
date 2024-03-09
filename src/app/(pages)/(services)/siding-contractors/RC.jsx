import ServicePageHeader from "@/components/common/ServicePageHeader";

const RC = () => {
  return (
    <>
      <ServicePageHeader
        bg="https://www.rhconstructionusa.com/wp-content/uploads/2022/09/reviews.jpg"
        title={<>Siding Services</>}
      />

      <section className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h2 className="mb-5">EXTERIOR SIDING CONTRACTORS NEAR ME</h2>
            {[
              "Are you looking for the best exterior siding contractors near me? Then you are welcome to Rh Construction. In our services, it is our job to help you and provide top-quality and expert services for you. Our specialist can work with your budget and do everything to make everything go smoothly from start to finish.",
              "For your kind information, we are the most reliable and experienced construction company that provides the best services to customers. Besides, our professionals are skilled and trained. They do their work on time and at the right cost. Because only we can offer you the best quality of work at an affordable rate.",
              "Besides, our customers are always happy with the way we handle their projects. And proudly we maintain this reputation and continue to provide excellent service in the areas of siding, windows, and door installation.",
              "Our exterior siding contractors are highly qualified and experienced. They know all types of siding including vinyl siding, aluminum siding, and fiber cement siding. As well as windows and doors from many different manufacturers.",
              "In our services, we provide free quotes to our clients before we start working on their homes or businesses. In addition, we also offer free estimates and consultations. So that you can make your decision about hiring our services. And our goal is to make sure that every customer gets the best quality work from us. ",
            ].map((item) => (
              <p
                className="leading-relaxed text-gray-700 mb-4 text-lg"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </div>
          <img
            src="https://www.rhconstructionusa.com/wp-content/uploads/2023/03/siding-contractors-jpg.webp"
            alt=""
            className="w-full ring-2 ring-offset-4 ring-primary rounded-lg"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
          <img
            src="https://www.rhconstructionusa.com/wp-content/uploads/2023/03/Exterior-Siding-Contractors-Companies-Near-Me-jpg.webp"
            alt=""
            className="w-full ring-2 ring-offset-4 ring-primary rounded-lg"
          />
          <div>
            <h2 className="mb-5">WHO ARE THE SIDING CONTRACTORS</h2>
            {[
              "Siding is a very important part of the exterior design as it protects your home from damage due to weather conditions such as rain and snow. It also helps in keeping your home cool during hot summer days and adds value to your property.",
              "The contractors are the ones who specialize in installing various types of siding on your home. They are the experts in siding and have a wide range of services to offer. Besides, they have the skills to install siding and make sure it does not fade, crack, or peel. In their services, they also know how to repair the damage that may occur. In addition, they can help you with all kinds of exterior projects, such as adding new siding, repairing existing ones, or painting them.",
              "These contractors can hire for both residential and commercial properties, depending on the type of siding that needs installing or replacing. Sometimes, they can also perform other related services like gutter cleaning and painting.",
              "Overall, they can do everything from simple repairs to major renovations for your home. In a simple vinyl siding job or a complex composite board installation that requires years of experience and expertise, they have both of these qualities. However, sometimes you may not know what type of siding you want on your house. But they can recommend an appropriate product for your needs.",
              "If you want to save money and improve your home’s appearance at the same time, then these contractors are your best choice.",
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
          title: "TYPES OF SIDING",
          contents: [
            "Depending on your location, the type of siding you want to install, and what kind of budget you have, you can find that there are different types of siding available.",
            "The most common types of siding are vinyl and wood. Vinyl is a popular choice because it is affordable and comes in many different colors. It is also easy to clean. This makes it an attractive choice for many homeowners who do not want to deal with maintenance.",
            "On the other hand, wood is great for people who want something more authentic than vinyl. It has a more natural appearance than vinyl. But it can paint so that it looks very similar to real wood if you choose the right color combination.",
            "Besides, metal siding is another option that people like because it looks more traditional than other types of siding. Metal has been used for years as an exterior home enhancement material. Because it is durable and easy to clean up after rainstorms or snow melt.",
            "If you are looking for something that can last long into the future without needing major repairs or maintenance, then metal can be a good choice for your home or business property.",
          ],
        },
        {
          title: "ARE THEY IMPORTANT FOR OUR PROJECT?",
          contents: [
            "Before starting any project, you should have an idea of what it is, what materials we can use, and how much it can cost. The contractors can help you with all these things.",
            "They are important for our projects because they do the work that we don’t know how to do. Besides, they also make sure that everything is doing well. If we do not have a good contractor, there is a chance that our house might get damaged during construction or repair.",
            "In your project, they can help us with design ideas and renovation plans. And they can fix anything that is damaged during construction or renovation. Besides, they can help you install new windows or doors in your house.",
          ],
        },
        {
          title: "ARE THEIR SERVICE COSTLY OR NOT",
          contents: [
            "The cost of exterior siding depends on the size, type, and location of your home. Sometimes the cost of siding contractors varies a lot depending on the type of material used, the amount of work needed, and other factors. Its price can also vary based on whether or not you have certain features like gutters or skylights.",
            "For example, if you have a large home with multiple rooms, then it less costly to have one company provide all the services. However, if you have a small house with only one room, then you can hire a separate company for each room.",
            "Some companies offer both services and charge less than others. For example, if you need your entire house repainted and new gutters installed at the same time, then it is better to pay for these services from one company. So that they can work on everything at once instead of having to wait for each step completed separately with different companies.",
          ],
        },
        {
          title:
            "WHY SHOULD YOU CHOOSE US AS YOUR EXTERIOR SIDING CONTRACTORS FOR YOUR PROJECT",
          contents: [
            "You should choose us to protect your property from the harsh elements of nature. There are some benefits that you can get when you hire our companies to complete your project.",
            "We can provide you with quality materials that are durable enough to last for years. Our siding contractors near me also use advanced technology. Such as heat sealing and adhesives to make sure that the paint does not come off even after heavy rains and snowfall.",
            "You can also get discounts on our services if you take materials from ours rather than shop. Besides, we have access to different sources of funding including government grants, tax credits, and rebates from manufacturers or distributors of their products.",
            "We handle all aspects of your siding project from start to finish, including:",
            [
              "Siding replacement",
              "Roof replacement",
              "Decks & patios",
              "Windows, doors & garage doors",
              "Garage door installation & maintenance.",
            ],
          ],
        },
        {
          title: "SIDING REPAIR",
          contents: [
            "People need to keep their homes fresh and new looking. Siding repair is an important part of keeping your home in good condition. If your siding is old or damaged, a professional contractor is the best person to help you with it.",
            "When looking for a contractor to fix your siding, look for someone who has experience with repairing this type of material. You do not want to hire someone who does not know how to properly install new material on homes with this type of structure.",
            "The best exterior siding companies near me are the ones that provide you with the most professional services. Our company can repair your siding on time.\n We repair the siding, replace it, and install it. In our work we always use the highest quality materials, so we assure you that your home can look great for years to come.",
          ],
        },
        {
          title: "SMART SIDING",
          contents: [
            "Smart siding is a great choice for homeowners who want to make their homes more energy efficient. It’s also a popular choice for those on a budget because it’s often less expensive than other types of siding.",
            "They are designed to withstand extreme weather conditions and last for many years. You can choose from metal or vinyl products that can stand up to wind gusts and hail damage while still looking great on your house.",
            "We do Smart siding. And our company has different types of smart siding products available at various prices and styles. Our designs include both wood-inspired designs as well as metal options. They look like regular metal siding but are made with recycled materials instead of hardwood or plastic.",
            "Besides, our material is available in many different colors. So, you do not have to worry about your home looks and it is very easy to install.",
          ],
        },
        {
          title: "CONCLUSION",
          contents: [
            "At last, we can say our exterior siding contractors are the best way to upgrade your property with a great new look. Because we never compromise on quality. On the contrary, with hard work and passion, we always provide clients with quality services. For any query, you can contact us or visit us.",
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
