import EleveteProjectImg from "../../../public/assets/images/elevet-project.jpg";
import Image from "next/image";

export default function YourConstructionProjects() {
  return (
    <div>
      <div className="flex flex-wrap md:flex-nowrap gap-x-10 gap-y-3">
        <div>
          <h1 className="font-bold">
            Elevate Your Construction Projects with
            <br />
            <span className="text-primary">RH Construction USA Inc</span>
          </h1>
          <p className="mt-2 font-medium">
            Elevate your construction projects to new heights with RH
            Construction USA Inc., one of the best construction companies in
            Brooklyn. Renowned for its unwavering commitment to excellence, our
            company brings a wealth of experience and expertise to every project
            undertaken. From residential developments to commercial ventures,
            the company's dedication to quality craftsmanship and innovative
            solutions ensures that each endeavor is executed with precision and
            professionalism. With a team of skilled professionals and a
            reputation for delivering projects on time and within budget, our
            construction company stands as a reliable partner for those seeking
            to elevate the standard of their construction endeavors.
          </p>
        </div>
        <Image
          src={EleveteProjectImg}
          alt=""
          width={400}
          height={300}
          priority={1}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
