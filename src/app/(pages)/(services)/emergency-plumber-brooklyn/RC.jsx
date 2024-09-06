import ServicePageHeader from "@/components/common/ServicePageHeader";

const RC = () => {
  return (
    <>
      <ServicePageHeader
        bg="https://www.rhconstructionusa.com/wp-content/uploads/2022/09/reviews.jpg"
        title={<>Emergency Plumbing</>}
      />

      <section className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h2 className="mb-5">EMERGENCY PLUMBER BROOKLYN, NY| </h2>
            {[
              "If you are looking for an emergency plumber in Brooklyn, then we can help. Our skilled and licensed plumber repair water leaks, toilets, burst pipes, blocked drains, etc. They play a vital role for any homeowner. Plumbing is one of the most important services that you need in your home. To keep your plumbing system in good condition you can hire a professional plumber to take care of any issues that need fixing.",
            ].map((item) => (
              <p
                className="leading-relaxed text-gray-700 mb-4 text-lg"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </div>
          <img
            src="https://www.rhconstructionusa.com/wp-content/uploads/2023/03/Plumbing-Contractor.jpg.webp"
            alt=""
            className="w-full ring-2 ring-offset-4 ring-primary rounded-lg"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
          <img
            src="https://www.rhconstructionusa.com/wp-content/uploads/2023/03/Emergency-Plumbing-Contractor-Services-Near-Me-jpg.webp"
            alt=""
            className="w-full ring-2 ring-offset-4 ring-primary rounded-lg"
          />
          <div>
            <h2 className="mb-5">WHAT IS AN EMERGENCY PLUMBING IN BROOKLYN?</h2>
            {[
              "Homeowners’ necessity to understand formed by a plumbing emergency. At RH Construction Dead Heating, our emergency plumbers in Brooklyn constantly try to teach homeowners about what problems are emergencies.",
              "Resistance is the greatest solution to plumbing emergencies. When it arrives at emergency plumbing service in Brooklyn, our expert plumbers will always say you the greatest prohibition procedures, so that you can eliminate the major problems that might cause main water damage.",
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
            <br />
            <br />
            <h2 className="mb-5">24 HOUR PLUMBER IN BROOKLYN</h2>
            {[
              "As your go-to 24 hour plumber in Brooklyn, we give a complete range of emergency plumbing services. We can help put problems with your toilet, unclog your drain, and make reparation to your pipes if they are damaged.",
              "Depending on the condition and the specific issue, our systems of handling your plumbing problems may change. Though the services of a 24 hour plumber in Brooklyn are often vital, we also offer basic maintenance services. We recommend regular maintenance for any lodge because it can mean the difference between facing a plumbing emergency and enjoying a lodge that is free of plumbing trouble.",
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
          title: "PROFESSIONAL PLUMBING REPAIRS IN BROOKLYN & THROUGHOUT NYC",
          contents: [
            "When our team comes to your home, we will assess the condition and offer a proper plan of action. Customer service and amusement are significant to us, so we will never sell out you anything that you don’t need. If we can refitment your plumbing, we will do so. If we trust it would be more cost-helpful to replace instead of refit your plumbing, we will prepare that recommendation and discuss the details with you. As a little company, we vanity ourselves on making lifelong buyers, and we do so by being before and helpful always.",
          ],
        },
        {
          title: "WHEN TO CALL AN EMERGENCY PLUMBER IN BROOKLYN",
          contents: [
            "It’s scarce for a plumbing emergency to arrive at a convenient time. With that in mind, we give 24 hour emergency plumbing services in the Brooklyn area. So, you may be surprised when to call an emergency plumber. What constructs a plumbing emergency & what can wait for normal business hours?",
            "Here are some key signs you may have a plumbing emergency:",
            "- Extensive water leaks: Not all water pricks indicate an emergency, but if you view a larger prick – it’s probable that it’s been pricking for a while.",
            "- Sagging ceilings: If you notice a stain or sagging on your ceiling, it’s time to call before a dynamic small issue becomes a larger problem.",
            "- Water stains: In most cases, watermarks indicate that a prick has been there for a while. Give us a call for conduct.",
            "- Busted Pipes: There’s no time to wait if you have pushed or harmed pipes. These problems can reason flooding if left unhandled, which can be a security hazard for your property.",
            "- Gas Leaks: There’s no time to wait if you smell a gas prick, call immediately to have the issue solved.",
            "- Overflowing Toilets: This can be the reason for a variety of causes, but you should call if using a plunger didn’t work in solving the problem.",
          ],
        },
        {
          title: "BROOKLYN SEWERS SERVICES",
          contents: [
            "Sewer problems can very serious. If your sewer line is blocked, it not only causes sewage to back up into your home, but it can also lead to flooding in your area. This is why you need to contact a professional plumber as soon as possible.",
            "When you call our company, we send out a technician to inspect your plumbing system and determine what needs to do. If there is a blockage in the pipes or if there are leaks, we can fix them all at once. And in our services, we use high-quality products that are guaranteed to last for many years without needing any additional maintenance.",
          ],
        },
        {
          title: "DRAIN CLEANING BROOKLYN NY",
          contents: [
            "Brooklyn drain cleaning is one of the most common plumbing services we provide. We use advanced technology to treat your drain lines with the most effective chemicals and equipment. So, you can rest in peace that your pipes are clean and safe.",
            "In addition, we use our sewer drain cleaning Brooklyn services to restore the natural function of your pipes. So that they can drain properly without blockages. If you have any questions about our sewer cleaning services, please contact us by phone or email and we will respond within 24 hours.",
          ],
        },
        {
          title: "WATER HEATER REPAIR BROOKLYN NY",
          contents: [
            "We do water heater repair in Brooklyn NY replacement and maintenance. It can be a source of frustration if they break down. If this happens, you can call in an emergency plumber in Brooklyn. They can come out and fix your water heater as soon as possible.",
            "Our technicians are trained to diagnose problems quickly. We can handle any type of job whether it is a small leaky faucet or a major overhaul of your entire system.",
          ],
        },
        {
          title: "AFFORDABLE PLUMBING COMPANY",
          contents: [
            "We are an affordable plumbing company. We understand that there is a lot of competition in the industry, but we are confident that we can provide you with the service you need at an affordable rate.",
            "Our emergency plumbing contractors provide you with the highest quality services while remaining reasonable. In addition, we also offer drain cleaning and sewer service for leaky faucet repair and replacement. The best thing about us is that we can reach you at any time of the day or night.",
            "If you have an emergency plumbing problem. Our friendly staff is happy to answer any questions you may have.",
          ],
        },
        {
          title: "WHY DID YOU CHOOSE US?",
          contents: [
            "We are a local emergency plumber in Brooklyn who offers professional and reliable plumbing services in and around the area. Besides, we are providing our customers with top-quality workmanship and personalized attention to their needs for years.",
            "In addition, we are well known for our fast response time and our fair prices. And our staff is made up of highly trained technicians. They can handle any problem that a customer may have with his plumbing system.",
            "However, our technicians have years of experience working with all types of plumbing systems and are more capable of getting the job done. So, you can call us anytime for any plumbing-related issues.",
          ],
        },
        {
          title: "DEPENDABLE EMERGENCY PLUMBER IN BROOKLYN, NY",
          contents: [
            "Call us at Plumbing & Dead Heating today, or whenever you next necessity a 24 hour emergency plumber in Brooklyn, NY! We will find you there quickly and fix your issue soon!",
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
