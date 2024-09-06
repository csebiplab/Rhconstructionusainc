import ServicePageHeader from "@/components/common/ServicePageHeader";

const RC = () => {
  return (
    <>
      <ServicePageHeader
        bg="https://www.rhconstructionusa.com/wp-content/uploads/2022/09/reviews.jpg"
        title={<>Brownstone Services</>}
      />

      <section className="py-16">
        <div className="container">
          <div>
            <h2 className="mb-5">
              BROWNSTONE APARTMENTS CONSTRUCTION SERVICES NEAR ME
            </h2>
            {[
              "If you are looking for modern exterior brownstone apartments service near me then look no further. Because we are a full-service company. We know the importance of each step in your apartment construction. That is why we are providing you with all the information about brownstone construction needs for your new home. ",
              "With our services, we provide the best brownstone apartments. Our company is one of the best companies in the area. That provides the best quality of services for our customers. Besides, we have a professional team who are dedicated to providing you with high-quality services and quality products. ",
              "And our company has many years of experience in various types of construction services. Such as brownstone apartments construction, renovation, remodeling, etc. In addition, we treat our work with precision and care. Also, we try to maintain a high degree of professionalism and efficiency at all times. ",
              "In our services, we also offer various types of building materials such as bricks, concrete slabs, and wood paneling. From a particular brownstone, through planning the construction process, until the completion of your home project we can do everything.",
              "And they can also provide a wide range of interior design services to help you create the perfect space for your office or home. ",
            ].map((item) => (
              <p
                className="leading-relaxed text-gray-700 mb-4 text-lg"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center mt-10">
            {[
              'https://www.rhconstructionusa.com/wp-content/uploads/2023/03/brownstone-apartments-2.jpeg.webp',
              'https://www.rhconstructionusa.com/wp-content/uploads/2023/03/MODERN-EXTERIOR-BROWNSTONE-APARTMENTS-CONSTRUCTION-SERVICES-NEAR-ME-2-jpeg.webp',
              'https://www.rhconstructionusa.com/wp-content/uploads/2023/03/Modern-Exterior-Brownstone-Construction-Services-2-jpeg.webp'
            ].map(item=>(
              <img src={item} className="w-full rounded-md ring-2 ring-offset-2 ring-gray-500" />
            ))}
          </div>
        </div>
      </section>

      {[
  {
    "title": "WHAT ARE BROWNSTONE APARTMENTS?",
    "contents": [
      "Brownstones are a type of residential property that was built in the 19th century. The buildings are made up of brownstone and limestone, which gives them a unique look. The buildings are usually built using brick and stone materials.",
      "These apartments tend more expensive than other types of housing because they are so rare. They are used for hundreds of years ago, but they are still using. Wealthy people want to build these houses because they want to build their own homes away from the city center where they are living during the day. Today, there are many different types of brownstones available for sale or rent in different parts of the country."
    ]
  },
  {
    "title": "WHAT BROWNSTONE APARTMENTS DO",
    "contents": [
      "They offer everything you need from a home, including an excellent location, modern amenities, and great design. Brownstone apartments are widely known for their classic architecture, which is why they are so popular among architects and interior designers.",
      "The beauty of these homes lies in their unique features and details that keep them looking new even after hundreds of years. They come with high ceilings and large windows that allow natural light to flow into the apartment. Besides, it also provides a variety of colors and textures that add to their charm.",
      "Brownstones insulate with brick and mortar, which is more effective at insulating than other materials such as steel or wood. Because it does not allow as much air to flow through it, this means less heat loss from your home and lower energy bills for you."
    ]
  },
  {
    "title": "ARE BROWNSTONE APARTMENTS IMPORTANT?",
    "contents": [
      "These apartments are important for many reasons. They are a strong symbol of historic preservation and cultural heritage, as well as a symbol of the city’s wealth and prosperity. Besides, it is also an excellent investment. Many of them are renovated with modern amenities such as hardwood floors and stainless-steel appliances.",
      "Most importantly, brownstones are a great place to live. Many people choose to live in brownstones because they offer a sense of community and history, while allowing you to enjoy all the benefits that come with living in a city."
    ]
  },
  {
    "title": "COST OF BROWNSTONE APARTMENTS",
    "contents": [
      "The cost of these apartments varies greatly. It depends on what you want to do with the construction. If you are just looking for a place to live, then you can find it at a cheaper price. But if you want to make it your home, then you can renovate it completely. The price of this apartment can increase if you want to make it your home and live there for many years.",
      "Different types of building materials are used in creating this type of building. One of them is brick, which is one of the most popular materials that architects and builders use when designing homes today. It is available in many colors and sizes so that you can choose what suits your needs best. The cost of installing brick walls depends on their size and thickness.",
      "If you want to go for stone or marble floors instead of wood ones, then there are additional costs involved as well as labor costs associated with installation. Because these materials require more time and effort from professionals."
    ]
  },
  {
    "title": "WHY DO YOU CHOOSE US AS YOUR BROWNSTONE APARTMENTS CONTRACTOR?",
    "contents": [
      "You can trust our brownstone construction services. Our experienced professional contractors are capable of handling any kind of construction project, whether it is small or large.",
      "Besides this, we work with many different types of materials such as concrete, metal, wood, and stone. And we are committed to providing superior customer service and quality workmanship. That is why we are always pleased when clients choose us as their brownstone contractor.",
      "In addition, our team has enough experience and expertise to deliver all types of construction services related to apartments. And we have many satisfied customers. They love us so much."
    ]
  },
  {
    "title": "BROWNSTONE REPAIR",
    "contents": [
      "We do brownstone repair. Our team has the knowledge and experience to help you make your brownstone look like new again. Fortunately, we can replace any part of your exterior, including windows, siding, porches, and more.",
      "For you, we also provide design services. Our team can work with you to determine what color scheme works best for your home. If you are looking for something unique or different from there, we can help with that as well.",
      "With our services, we are helping our clients with their exterior needs. So that, they can enjoy their homes as much as possible without worry."
    ]
  },
  {
    "title": "MODERN BROWNSTONE",
    "contents": [
      "Modern brownstone construction services are very popular. Because they are affordable and environmentally friendly. With this construction service, you can experience a high-quality building without having to pay as much as you spend with traditional materials such as brick or stone.",
      "We do modern brownstone construction services. And we are experts at making designs for your floor as well as for your walls. If you want to make a design for your wall, then we can help you with this.",
      "In addition to that, we also provide interior design services near me. With the help of our interior designers, we can help you to make a design that suits your needs and budget."
    ]
  },
  {
    "title": "BROWNSTONE RENOVATION",
    "contents": [
      "We do brownstone renovation. Our team is very experienced, professional, and reliable. Besides, we also have a separate team of experts. Who specialize in interior design and carpentry services.",
      "They are highly skilled, dedicated, and committed to delivering their best performance at all times. Our workers are always trying to help you with any kind of matter related to your property or home renovation project."
    ]
  },
  {
    "title": "BROWNSTONE EXTERIOR RESTORATION",
    "contents": [
      "Brownstone exterior restoration services are our specialty. It is a process that restores the original appearance of the exterior of a brownstone. Cleaning and repairing the brick, mortar, and stonework can make up the building’s façade.",
      "Brownstone apartments give an iconic look, but they can damage over time. These restoration services can help preserve this historic look while making sure that it can last for years to come."
    ]
  },
  {
    "title": "MODERN BROWNSTONE HOUSE",
    "contents": [
      "We do modern Brownstone houses. Our team members are skilled and experienced workers. They are well-versed in the art of building and remodeling brownstone houses. And we use the best materials and equipment for our project.",
      "In our services, we offer free quotes for all our customers. So that you can think of us as the best option for your needs. Besides these, we can ensure all safety regulations. And make sure that it is safe for your family and pets to live in. Also, we can help you to find the right color scheme for your new home so that it looks great from every angle."
    ]
  },
  {
    "title": "BROWNSTONE FIREPLACE",
    "contents": [
      "Brownstone fireplace installation and repair is a difficult task. You need to know what you are doing, but also be careful enough not to damage the fireplace.",
      "In our services, we do brownstone fireplace installation and repair. So, you can rest in peace. And we can ensure your fireplace is safe for use. In addition, we can also help you with other home maintenance services, such as painting and staining."
    ]
  },
  {
    "title": "EXTERIOR BROWNSTONE APARTMENTS",
    "contents": [
      "Gladly, we do exterior apartments. And we are an exterior home design, construction, and remodeling company. We specialize in customizing any project to fit your specific needs. Our team is experienced in everything from traditional brick-and-mortar homes to modern luxury homes with all the amenities you desire.",
      "If you want a new or updated home, we can help you with that too. From start to finish, we can work with every detail with great care."
    ]
  },
  {
    "title": "CONCLUSION",
    "contents": [
      "In general, with the help of our company, you can get modern brownstone apartments without worrying. We design and implement every step of the process. And we are always ready to cooperate with you in any way."
    ]
  }
]
.map((section, key) => (
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
