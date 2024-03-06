import ServicePageHeader from "@/components/common/ServicePageHeader";

const RC = () => {
  return (
    <>
      <ServicePageHeader
        bg="https://www.rhconstructionusa.com/wp-content/uploads/2022/09/reviews.jpg"
        title={<>All kinds of Masonry Work</>}
      />

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {[
              {
                src:'https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-34.jpeg.webp',
                title:null,
              },
              {
                src:'https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-35.jpeg.webp',
                title:null,
              },
              {
                src:'https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-36.jpeg.webp',
                title:'Homewyse interior painting',
              },
              {
                src:'https://www.rhconstructionusa.com/wp-content/uploads/2022/09/asset-37.jpeg.webp',
                title:'Local painting companies',
              },
            ].map((item)=>(
              <figure className="p-2 rounded-md overflow-hidden shadow-md border border-gray-300">
                <img src={item.src} alt="" className="w-full rounded-md h-96 object-cover" />
                <div className="py-3 bg-white">
                  <p className="text-lg font-semibold text-center">
                    {item.title}
                  </p>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default RC;
