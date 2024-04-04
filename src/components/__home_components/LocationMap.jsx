import Image from "next/image";
import servicesIcon from "../../../public/assets/icons/services.png";

const LocationMap = () => {
  return (
    <div>
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12110.598375380569!2d-73.976968!3d40.637609!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b2c8251fb29%3A0xfd80b827e8bd8020!2sRH%20Construction%20usa%20inc!5e0!3m2!1sen!2sbd!4v1709399944375!5m2!1sen!2sbd"
        // width="100%"
        height="450"
        style={{ border: 0, width: "100%" }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe> */}


      <div className="custom-container">
        <div className="py-[30px] lg:py-[120px] 5xl:py-[168px]">

          <div className="mx-auto flex flex-col items-center justify-center ">

            <div className='flex items-center pb-2'>
              <Image src={servicesIcon} className='h-5 w-10 mr-2' />
              <p>Area</p>
            </div>

            <div>
              <h2 className="lg:leading-10 lg:text-4xl text-lg py-2 lg:py-4">SERVICE AREA IN RH CONSTRUCTION USA INC</h2>
            </div>

          </div>  

          {/* ============== For Mobile View ============ */}
          <div className="md:hidden block">
          <div className="w-[261px] h-[313px] mx-auto">
              <div className="shadow-md p-0 rounded-[10px]">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193746.99686626304!2d-74.11015801519653!3d40.645386882912746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2sBrooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1710652730916!5m2!1sen!2sbd" height="271" width="261"
                  
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>


                <h5 className="text-sm py-4 px-3 lg:px-10 bg-yellow-700 ">Brooklyn</h5>
              </div>
            </div>
          </div>

          {/* //   ======================= map Card ==================// */}
        <div className="hidden md:block mt-[40px] lg:mt-[55px]">
        <div className="grid grid-cols-5 py-4 md:gap-3 lg:gap-10 text-center md:py-10">

<div className="lg:-mt-10 md:-mt-5">
  <div className="w-full shadow-md p-0 rounded-sm">

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193746.99686626304!2d-74.11015801519653!3d40.645386882912746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2sBrooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1710652730916!5m2!1sen!2sbd" height="325"
      style={{ border: 0, width: "100%" }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>


    <h5 className="lg:text-base text-sm py-4 px-3 lg:px-10 bg-yellow-700 ">Brooklyn</h5>
  </div>
</div>

<div>
  <div className="w-full shadow-md p-0 rounded-sm">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d282591.6426865487!2d-74.04841253213657!3d40.68744007354902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24369470a592b%3A0x4109d18b6c5c7b05!2sQueens%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1710652963610!5m2!1sen!2sbd"
      // width="100%"
      height="325"
      style={{ border: 0, width: "100%" }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>


    <h5 className="lg:text-base md:text-sm md:py-2 lg:py-4 md:px-5 lg:px-10 bg-yellow-700 ">Queens</h5>

  </div>
</div>

<div className="lg:-mt-10 md:-mt-5">
  <div className="w-full shadow-md p-0 rounded-sm">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193296.64126751295!2d-74.08426630631556!3d40.80027958810262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1710653064960!5m2!1sen!2sbd"
      // width="100%"
      height="325"
      style={{ border: 0, width: "100%" }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    <h5 className="lg:text-base md:text-sm lg:py-4 md-py-2 md:px-5 lg:px-10 bg-yellow-700 ">Manhattan</h5>


  </div>
</div>

<div >
  <div className="w-full shadow-md p-0 rounded-sm">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193146.52505702147!2d-74.0060943983724!3d40.85180194863987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28b553a697cb1%3A0x556e43a78ff15c77!2sBronx%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1710653132257!5m2!1sen!2sbd"
      // width="100%"
      height="325"
      style={{ border: 0, width: "100%" }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    <h5 className="lg:text-base md:text-sm md:py-2 lg:py-4 md:px-5 lg:px-10 bg-yellow-700 ">Bronx</h5>

  </div>
</div>

<div className="lg:-mt-10 md:-mt-5">
  <div className="w-full shadow-md p-0 rounded-sm">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193980.89432907896!2d-74.31197899122276!3d40.564748848637244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c245ef79f4d4e7%3A0x50271f8534babc78!2sStaten%20Island%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1710653173307!5m2!1sen!2sbd"
      // width="100%"
      height="325"
      style={{ border: 0, width: "100%" }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>


    <h5 className="lg:text-base md:text-sm md:py-2 lg:py-4 lg:px-10 md:px-5 bg-yellow-700 ">Staten Island</h5>


  </div>
</div>




</div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default LocationMap;
