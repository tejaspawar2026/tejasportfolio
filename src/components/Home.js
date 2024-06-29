import React from "react";
import { homeImage } from "../assets";
import { AppText } from "../constants";

const Home = () => {
  return (
    <div className="mt-7 flex px-4 md:px-20 items-center flex-col md:flex-row">
      <div>
        <h1 className="text-[40px] font-bold">{AppText.hello}</h1>
        <h1 className="text-[40px] font-bold">
          {AppText.Iam}
          <span className="text-purple-600">{AppText.TejasPawar}</span>
        </h1>
        <h1 className="text-gray-400">{AppText.introDescription}</h1>
        <button className="bg-purple-600 p-2 px-3 rounded-md mt-4 text-white transition-all ease-in-out hover:scale-110">
          Resume
        </button>
      </div>
      <img className="w-[300px] md:w-[400px]" src={homeImage} alt="home_image" />
    </div>
  );
};

export default Home;
