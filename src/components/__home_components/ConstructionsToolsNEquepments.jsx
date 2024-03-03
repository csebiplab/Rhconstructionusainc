import EleveteProjectImg from "../../../public/assets/images/toolsneq.jpg";
import Image from "next/image";

export default function ConstructionsToolsNEquepments() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-9 gap-x-10 gap-y-3">
        <div className="w-full md:col-span-5 order-1">
          <h1 className="font-bold">
            Heaving all Kinds of Building Tools & Equipments
          </h1>
          <p className="mt-4 font-medium">
            RH Construction USA Inc. offers a comprehensive range of building
            tools and equipment tailored to meet the diverse needs of your
            project. Whether you're embarking on a small-scale renovation or
            overseeing a large construction endeavor, we have you covered with
            top-of-the-line tools and machinery. Our inventory encompasses
            everything from power drills and saws to heavy-duty excavators and
            cranes, ensuring that you have access to the right equipment to get
            the job done efficiently and effectively.
            <br />
            <br />
            With our construction company, you can trust in the quality and
            reliability of our tools and equipment, sourced from reputable
            manufacturers renowned for their durability and performance. We
            understand the importance of having the right tools at your disposal
            to streamline construction processes and maximize productivity. From
            excavation to finishing touches, our diverse selection of building
            tools and equipment empowers you to tackle any project with
            confidence, knowing that you have the support of a trusted partner
            every step of the way.
          </p>
        </div>
        <Image
          src={EleveteProjectImg}
          alt="Elevete Your Construction Projects"
          width={400}
          height={300}
          priority={1}
          className="w-full h-5/6 md:col-span-4 order-2"
        />
      </div>
    </div>
  );
}
