import React from "react";
import { AppText, aboutSection } from "../constants";
import { laptop, wave } from "../assets";

const About = () => {
  return (
    <div className="mt-36">
      <img src={wave} className="w-full absolute" alt="wave_image" />
      <img
        src={laptop}
        className="absolute mt-[-90px] md:mt-[-160px] w-[220px] md:w-[300px]"
        alt="laptop_image"
      />
      <div className="h-[300px] bg-purple-600 w-full">
        <h2 className="text-[50px] text-center font-bold text-white pt-24 md:pt-6">
          {AppText.About} <span className="text-black">{AppText.Me}</span>
        </h2>
        <h2 className="text-white md:mt-10 mt-1 text-center px-10 md:px-64 lg:px-80">
          {AppText.aboutMeDescription}
        </h2>
      </div>

      <div className="flex flex-col md:mt-[-60px] mt-[-16px] md:flex-row justify-around items-center px-56">
        {aboutSection.map((item, index) => (
          <div className="group hover:bg-purple-600 mb-5 p-7 rounded-2xl">
            <img
              src={item.image}
              className="w-[230px] h-[190px] object-cover rounded-lg"
              alt="skill_1"
            />
            <div className="w-[230px] pb-[20px]">
              <h2 className="font-bold text-center group-hover:text-white">{item.title}</h2>
              <h2 className="text[12px] text-center text-gray-500 group-hover:text-gray-200">
                {item.desc}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
