
import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const ProjectCost = () => {
  return (
    <div className="bg___color">
      <div className="container common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px]">
          <div className="md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.projectCost__HeadingIconText}/>
            </div>
            <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-normal text-black md:text-start text-center">
            How Much Does  
             <br className="hidden 2xl:block"/>{" "}
              <span className="text-primary-50">
              The Home Remodeling Project Cost? </span>
            </h3>
            <p className="text-lg font-normal md:text-start text-center pt-[10px]">
            Embarking on a home remodeling project is an exciting yet budget-conscious endeavor. When considering the cost, it's essential to factor in the expenses associated with hiring professionals. The total cost of a complete home renovation can vary widely, ranging from <b>$10,000 to $50,000</b>  or more. This range encompasses a spectrum of projects, from minor updates to major transformations. Factors influencing the overall cost include the size of the space, the extent of structural changes, the quality of materials selected, and the level of craftsmanship desired.
            </p>
            <p className="text-lg font-normal md:text-start text-center">
            It's crucial to consider not only the upfront costs but also the potential long-term savings and added value to the property. Investing in quality materials and skilled labor may incur a higher initial expense, but it often pays off in terms of durability, functionality, and increased home resale value. For instance, RH Construction USA Inc. offers competitive rates, with home renovators available for as low as  <b>$50 per hour.</b> This flexibility allows homeowners to tailor their budget according to the scope of the project and their specific needs.
            </p>
          </div>
          <div className="md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/brooklyn_Home/Project Cost.png"
                width={810}
                height={657}
                alt="Project Cost image"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCost;