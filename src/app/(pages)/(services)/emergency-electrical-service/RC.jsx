import ServicePageHeader from "@/components/common/ServicePageHeader";

const RC = () => {
  return (
    <>
      <ServicePageHeader
        bg="https://www.rhconstructionusa.com/wp-content/uploads/2022/09/reviews.jpg"
        title={
          <>
            Electrical <span className="text-primary">Services</span>
          </>
        }
      />

      <section className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h2 className="mb-5">EMERGENCY ELECTRICAL SERVICES</h2>
            {[
              "We mainly provide emergency electrical service,commercial electrical service and Residential electrical service. Are you suffering from electrical problems in your home? Can’t you find any solution? Then you have arrive to the right place. ",
              "We will provide you with quality emergency electrical repair service and if you need an emergency electrician we will provide it.We usually provide 24 hour electrical service. If you need emergency electrical service call us immediately at <a href='tel:+1(646)683-4612'>+1(646)683-4612</a>.",
            ].map((item) => (
              <p
                className="leading-relaxed text-gray-700 mb-4 text-lg"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </div>
          <img
            src="https://www.rhconstructionusa.com/wp-content/uploads/2023/03/Electrical-Services-Companies-Near-Me.jpg.webp"
            alt=""
            className="w-full ring-2 ring-offset-4 ring-primary rounded-lg"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
          <img
            src="https://www.rhconstructionusa.com/wp-content/uploads/2023/03/electrical-services.jpg.webp"
            alt=""
            className="w-full ring-2 ring-offset-4 ring-primary rounded-lg"
          />
          <div>
            <h2 className="mb-5">
              WHEN TO KNOW YOU NEED ELECTRICAL EMERGENCY SERVICES
            </h2>
            {[
              "People worry about when to call an electrician. Many times common people do not understand what the problem actually is. Do not be concerned about what happened and then call the electrician.",
              "Here are some of the most common electrical emergency problems electricians are called out to handle:",
              [
                "An unknown burning smell in the house",
                "An electrical switch or outlet is so hot to the touch",
                "A circuit breaker keeps tripping repeatedly",
                "The light is on continuously",
                "An outlet or switch emits a buzzing sound",
                "Someone got an electric shock",
                "Home has a partial, permanent power loss",
                "Your electrical panel is wet",
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
          title: "SEVEN EMERGENCY ELECTRICAL SERVICE",
          contents: [
            "An emergency electrician is trained to offer an electrical issue. Any electrical placing, repair, or prosperity should only be done by a licensed emergency electrician. If the electrical problem happens at night many times, it’s just not a good thought to wait until the morning to look for help. Because determining electrical emergency can start fires, don’t delay in calling for help with your worry. When it arrives to electricity, it’s ever better to be safe than sorry.",
          ],
        },
        {
          title: "FLICKERING, DIM, OR BUZZING LIGHTS:",
          contents: [
            "Lights flickering, going dim, or throwing a humming noise is a common infelicity. The major reason for the issues are",
            [
              "Outdated wiring",
              "Faulty circuit",
              "Too many are plugged into the same circuit",
              "A faulty switch",
              "A loose lamp",
            ],
          ],
        },
        {
          title: "THE LIGHT SWITCH DOESN’T WORK OR BUZZ:",
          contents: [
            "A faulty light switch is often reason by,",
            ["An improper connection", "Issue with cable", "A broken switch"],
          ],
        },
        {
          title: "THE CIRCUIT BREAKER KEEPS TRIPPING:",
          contents: [
            "Power tripping problems are a common emergency electrical service. A few causes why you could be having the issue,",
            [
              "An appliance may have a wiring fault that causes the breaker to trip when plugged in",
              "The terminal connection may have a loose screw",
              "A plug-in appliance is drawing too much current from the outlet",
              "Live wiring is touching a neutral causing a short circuit",
              "Breaker replacement is required due to wear and tear",
            ],
          ],
        },
        {
          title: "DEAD OUTLETS",
          contents: [
            "It’s a common reason owners call for commercial emergency electrical services.",
            [
              "More of the fuses has tripped",
              "Faulty electrical wiring",
              "The outlet needs replacing",
            ],
          ],
        },
        {
          title: "HOT PLUGS OR AN ELECTRICAL SHOCK WHEN TOUCHED:",
          contents: [
            "When an electrical cord or outlet realizes hot or offers you an electrical shock, it’s time to call a licensed emergency electrician. You also want to call for electrical emergency services,",
            [
              "The outlet needs repairing or replacing",
              "Faulty wiring",
              "A faulty appliance",
            ],
          ],
        },
        {
          title: "HIGH ELECTRICAL BILLS:",
          contents: [
            "Faulty electrical wiring or circuit breakers",
            "An energy prick in the building’s electrical system",
            "Older appliances that are drawing too high much energy",
          ],
        },
        {
          title: "ELECTRICAL UPGRADING:",
          contents: [
            "Installing, replacing, and upgrading electrical panels",
            "Installing energy-efficient lights, outlets, and switches",
            "Upgrade and replace existing wiring",
            "Set up of electrical systems",
            "Surge protection throughout the building",
            "Outlet repair and installation",
            "Installing and repairing exhaust fans",
            "Electrical safety inspections",
          ],
        },
        {
          title: "24 HOUR ELECTRICAL SERVICES",
          contents: [
            "You may not think much about your electricity necessity till something goes wrong. From a flickering light to an electrical fire, electrical problems often work out suddenly and at bad times. That’s why we giving 24-Hour Emergency Electrical Services accomplished by our skilled technicians.",
            "You can be sure that we are a Fully Licensed and Insured Professional in emergency electrical repair and meet all local electrical emergency codes and obtain accurate permits when necessary.",
            "There can be any number of causes you’re experiencing issues – from overloaded circuits, exposed or loose wiring, a tripped breaker, or worn out circuitry and wiring.We’ll tackle any issue big or small! Rh construction electric has the know-how, the tools, and the expertise to correct any of your electrical issues quickly and affordably",
          ],
        },
        {
          title: "COST OF ELECTRICAL SERVICES",
          contents: [
            "The cost of these services depends on some factors. The first factor is the size of your home or building. If you have an older home with smaller wiring, then it can cheaper.",
            "Another factor that determines the cost is your budget. If you want to save money on your electrical bill with solar panels or get energy-efficient light fixtures, then this can also increase the cost of services.",
            "On the other hand, if you want to purchase new appliances such as refrigerators and dishwashers, this can decrease your electric bill. Because these appliances consume less electricity than old appliances.",
          ],
        },
        {
          title: "WHY DID YOU SELECT US?",
          contents: [
            "Our services are the best in the industry. We are always there for you when you need us, and make sure that you are satisfied with our work.",
            "besides, we have a lot of experience working with our clients. Our team knows what they want, and we can deliver it quickly. In our services, we can repair any kind of electrical problems like loose or burnt wires. Also, we can replace old outdated appliances with new ones, including refrigerators, washers, dryers, and others.",
          ],
        },
        {
          title: "CONCLUSION",
          contents: [
            "In this article, we discussed the different types of electrical services a reliable company can offer. Our technicians will thoroughly describe the electrical problem in terms that you can completely understand. We have a longstanding policy of presenting you with all the essential info and we permanently address any questions or anxiety that you might have. Now it is your turn to decide. Because it not only adds value to your home but also makes you feel safe.",
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
