import cons from "@/components/__home_components/Images/const.png";
import pp1 from "@/components/__home_components/Images/pp1.png";
import pp2 from "@/components/__home_components/Images/pp2.png";
import pp3 from "@/components/__home_components/Images/pp3.png";
import Image from "next/image";
const Constructor = () => {
    return (
        <div className="md:py-16 py-6 px-8">
            <div className="mx-auto text-center">
            <Image
            src={cons}
            width={115}
            height={18.02}
            alt="cons"
            className="my-2"
          />
          <h2 className="leading-10 mb-1 py-4">
          WHAT TO CONSIDER FIRST WHEN YOU HIRE THE BEST CONTRACTORS
          </h2>
            </div>
            {/* =================== Card Section =============== */}
            <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-center py-10">
              <div className="w-full shadow-md p-0 rounded-sm">
                <Image
                  src={pp1}
                  width={114}
                  height={113}
                  alt=""
                  className="w-full"
                />
                <div className="text-center py-3">
                  <h4 className="text-base py-2">Highly trained Staff</h4>
                  <p className="text-sm text-black">
                    We hire only highly trained staff <br /> for best results.
                  </p>
                </div>
              </div>
              <div className="w-full shadow-md p-0 rounded-sm">
                <Image
                  src={pp2}
                  width={114}
                  height={113}
                  alt=""
                  className="w-full"
                />
                <div className="text-center py-3">
                  <h4 className="text-base py-2">Competitive Pricing</h4>
                  <p className="text-sm text-secondary">
                    We quote the best price possible <br /> in the industry..
                  </p>
                </div>
              </div>
              <div className="w-full shadow-md p-0 rounded-sm">
                <Image
                 src={pp3}
                 width={114}
                 height={113}
                 alt=""
                 className="w-full"
                />
                <div className="text-center py-3">
                  <h4 className="text-base py-2">Satisfaction Guaranteed</h4>
                  <p className="text-sm text-black">
                    100% Customer satisfaction is <br /> our sole motto.
                  </p>
                </div>
              </div>
            </div>
            </div>
        </div>
    );
};

export default Constructor;