import Image from "next/image";

const TrustedGeneralContractor = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-9 gap-4">
        <div className="w-full md:col-span-5 md:order-2">
          <div className="w-full">
            <h2 className="font-semibold text-3xl">
              Trusted General Contractor in Brooklyn
            </h2>
          </div>
          <p className="mt-4">
            As a trusted general contractor in Brooklyn, we prioritize clear and
            open communication with clients, keeping us informed at every stage
            of the construction process. Our skilled professionals bring
            innovative solutions to the table, ensuring that your vision is not
            only realized but surpassed. Our team is dedicated to delivering
            high-quality craftsmanship and exceptional service from start to
            finish. With 15 years of experience in the industry, we handle
            projects of all sizes with precision and care.
          </p>
        </div>
        <div className="w-full md:col-span-4 md:order-1">
          <Image
           src="/assets/images/general-trusted-contractor.jpg"
            alt="Trusted general contractor"
            width={450}
            height={300}
            loading="lazy"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedGeneralContractor;
