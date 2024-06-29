import React from "react";
import { homeImage } from "../assets";
import { AppText } from "../constants";
import "../Home.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="flex p-[20px] md:px-20 justify-between flex-col md:flex-row">
      <div className="flex w-full flex-row  justify-end">
        <div className="flex w-full flex-col  items-start content-end">
          <h1 className="text-[35px] md:text-[40px] font-bold ">
            {AppText.hello}
          </h1>
          <div className="flex">
            <h1 className="text-[35px]  md:text-[40px] font-bold mr-3">
              {AppText.Iam}
            </h1>
            <Typewriter
              options={{
                strings: [
                  AppText.TejasPawar,
                  AppText.FrontedDeveloper,
                  AppText.UIUXDesigner,
                  AppText.BackendDeveloper,
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div>
            <h1 className="my-5 text-gray-400">
              {AppText.introDescription}
            </h1>
          </div>
          <button class="hover:z-50 transition-all duration-300 ease-in-out  hover:scale-125 bg-purple-600 p-2 rounded-md text-white">
            Resume
          </button>
        </div>
      </div>
      <div className=" w-full flex justify-center">
        <img src={homeImage} className="w-[200px] md:w-[300px]" alt="home_image" />
      </div>
    </div>
  );
};

export default Home;
