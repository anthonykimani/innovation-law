import { aboutSource } from "@/helpers/aboutSource";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="flex flex-col items-center font-DM mt-[100px]">
      <div className="">
        <h2 className="text-black text-center text-3xl xsm:text-[40px] font-bold my-10 ">
          Empowering the Future of Law: Innovation, Technology, and Legal
          Excellence
        </h2>
        <h4 className="text-[#596780ab] text-center text-base">
          Championing African Innovation: Merging Legal Expertise with Homegrown
          Solutions for a Thriving Future
        </h4>
      </div>
      <div className="flex flex-col md:flex-row items-center p-5 md:py-10 xl:px-20">
        <article className="text-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-around md:justify-around lg:h-[500px]">
          {aboutSource.map((element, index) => {
            return (
              <div key={index} className="flex flex-col items-start justify-around xsm:my-2 border border-gray-200 rounded-md p-8">
                <Image src={element.icon} alt="wallet" className="my-2" />
                <h3 className="text-black font-semibold text-3xl xsm:text-4xl">
                  {element.title}
                </h3>
                <p className="text-[#596780] mt-2">
                  {element.subtitle}
                </p>
                <button>Learn More</button>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default About;
