import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className="bg-hero-bg bg-cover bg-center h-screen">
      <Navbar />
      <div className="bg-app-bg bg-no-repeat bg-cover flex flex-col md:flex-row items-center justify-start p-5 md:py-10 md:px-20">
        <article className="text-black flex flex-col justify-center md:justify-center h-[500px]">
          <div className="my-[20px] md:my-[0px]">
            <h1 className="text-white font-melodrama text-5xl lg:text-6xl font-semibold md:my-[20px]">
              Innovation Meets Law
            </h1>
          </div>
          <h2 className="font-DM mb-[20px] md:my-[30px] text-white">
            Empowering Africa’s future with innovative legal solutions. Our
            expert team provides trusted guidance to help you navigate
            challenges, seize opportunities, and drive growth across the
            continent.
          </h2>
          <button className=" py-3 px-6 w-[150px] font-DM rounded-md bg-[#D9A886] text-white font-semibold hover:bg-white hover:text-black hover:border-aqua hover:cursor-pointer">
            Learn More
          </button>
        </article>
      </div>
    </div>
  );
};

export default HeroSection;
