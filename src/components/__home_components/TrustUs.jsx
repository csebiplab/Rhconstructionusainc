import inspector from "@/components/__home_components/Images/inspectors.png";
import trust from "@/components/__home_components/Images/trust.png";
import Image from "next/image";
const TrustUs = () => {
  return (
    <div>
      <div className="md:flex items-center px-8">
        <div>
          <Image
            src={inspector}
            width={1016}
            height={772}
            layout="responsive"
            alt="inspector"
          />
        </div>
        <div>
          <div className="flex flex-col">
            <div className="items-center md:-ml-[80px] rounded-[15px] bg-white p-4 my-class">
              <Image
                src={trust}
                width={96}
                height={18.02}
                alt="trust"
                className="my-2"
              />
              <h2 className="leading-10 mb-1 py-2">
                TRUSTED GENERAL CONTRACTOR <br/> IN BROOKLYN
              </h2>
              <p className="max-w-lg xl:max-w-5xl mx-auto text-black mt-3 mb-2">
                Since 2009, RH Construction USA Inc. has been dedicated to
                delivering excellence in construction services, boasting over 15
                years of expertise in home renovations, bathroom and kitchen
                remodeling, roofing repair, and various construction projects.
                As a locally owned and operated company based in Brooklyn, our
                commitment to quality craftsmanship, innovation, and client
                satisfaction sets us apart. With a skilled team prioritizing
                efficiency and precision, we transform visions into realities,
                ensuring every detail is perfected. Whether it's residential,
                commercial, or industrial construction, RH Construction USA Inc.
                is poised to exceed expectations with our quick, reliable, and
                professional touch, leaving our clients as our next happy
                customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustUs;
