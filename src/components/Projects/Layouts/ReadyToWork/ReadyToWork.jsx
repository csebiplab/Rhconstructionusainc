import { FaPhoneVolume } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import "./ReadyToWork.css";

const ReadyToWork = () => {
  return (
    <div className="ready__section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-11 items-center justify-center gap-x-24">
          <div className="lg:col-span-6 flex items-center">
            <div>
              <h3 className="ready__heading">Ready To Work Together?</h3>
              <p className="ready__p mt-6 mb-9">
                Whether you have a project in mind and you’re looking for a
                reliable construction partner or you’re looking to take the next
                step in your career, we want to hear from you!
              </p>
              <div className="flex items-center gap-x-11">
                <button className="ready__btn flex items-center gap-x-1 py-4 px-8">
                  <span>Get an Estimate</span>
                  <IoIosArrowForward className="h-5 w-5" />
                </button>
                <span className="ready__or">Or</span>
                <a
                  href="tel:+1 (646) 683-4612"
                  className="ready__phone flex gap-1 items-center hover:underline"
                >
                  <FaPhoneVolume className="h-5 w-5" />
                  <span>+1 (646) 683-4612</span>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 w-full h-dvh">
            <img src="/assets/images/ready-work.png" className="h-dvh w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToWork;
