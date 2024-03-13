import constructor from "@/components/__home_components/Images/constructor.png";
import exp from "@/components/__home_components/Images/exp.png";
import Image from "next/image";

const ExperiencedContractor = () => {
    return (
        <div className="flex px-8 md:justify-between py-12 gap-10">
            <div>
        <Image src={constructor} width={900} height={880} alt="constructor" />
      </div>
      <div className="">
        <Image
          src={exp}
          width={190}
          height={19.02}
          alt="about"
          className="my-2"
        />
        <h2 className="leading-10 mb-1 py-4">
        EXPERIENCED BROOKLYN GENERAL CONTRACTOR
        </h2>
        <p className="max-w-lg xl:max-w-5xl mx-auto text-secondary mt-4">
        With years of expertise and a solid educational background, our Brooklyn-based general contracting firm stands out as a reliable partner for your construction projects. Our team comprises seasoned professionals who bring a wealth of knowledge and hands-on experience to every job site. From residential renovations to commercial builds, we have successfully delivered projects of varying scales, earning a reputation for excellence and integrity within the community 

        </p>
        <p className="max-w-lg xl:max-w-5xl mx-auto text-secondary mt-4">
        At our core, we prioritize client satisfaction by combining our technical prowess with clear communication and meticulous attention to detail. Our commitment to staying abreast of industry advancements ensures that we employ the latest techniques and technologies to optimize project efficiency and quality. Whether you're envisioning a modern urban renovation or a timeless architectural masterpiece, our well-experienced and educated team is dedicated to bringing your vision to life with precision and professionalism.
        </p>
        
      </div>
      
    </div>
    );
};

export default ExperiencedContractor;