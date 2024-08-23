
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Link from "next/link";

const TileRoof = () => {
  return (
    <div className="bg___color">
      <div className="full__section_l_p pr-3 md:pr-0 common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10 ">
          <div className="order-2 md:order-1 md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.tileRoof__headingIconText}/>
            </div>
            <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-tight font-bold text-black md:text-start text-center">
            Experienced Tile Roof   
             <br className="hidden md:block"/>
              <span className="text-primary-50"> Contractors</span>
            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            RH Construction USA Inc. features experienced tile roof contractors dedicated to delivering top-quality tile roofing solutions. Specializing in both installation and repair, our skilled team handles various types of tile roofs, including clay, concrete, and slate, ensuring a beautiful and durable result. Tile roofs are renowned for their longevity, energy efficiency, and distinctive aesthetic, and our contractors are adept at working with these materials to provide a secure and stylish roofing system. We manage every project with precision, from detailed inspections and planning to expert installation and maintenance. Our commitment to excellence ensures that your tile roof will withstand the elements while enhancing the charm and value of your property. Trust <Link className="text-primary hover:underline" href="http://www.rhconstructionusa.com">RH Construction</Link> for reliable, professional tile roofing services and benefit from our extensive experience and dedication to superior craftsmanship.

            </p>
          </div>
          <div className="order-1 md:order2 md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/roofing_contractor/Tile Roof.png"
                width={810}
                height={541}
                alt="Tile Roof image"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TileRoof;