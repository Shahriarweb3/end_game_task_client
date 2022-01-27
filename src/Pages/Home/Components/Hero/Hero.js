import React from "react";
import banner from "../../../../images/banner.jpg"
import "./Hero.css";



const Hero = () => {

  return (
    <div id="home" className="Hero flex justify-center bg-transparent items-center relative  overflow-hidden hero" style={{ backgroundImage: "url('https://i.ibb.co/4TM7tH7/banner.jpg')" }}>
      <div className="w-1/2 bg-transparent h-screen pb-20 overflow-hidden ">
        <div className="absolute bg-transparent top-1/2 left-1/2 w-full z-10">
          <h1 className="titleSpeech pb-0 yellow-500 text-7xl lg:text-9xl z-10">
            Travel Vibes
          </h1>
          <p className='heroDes text-white text-xl lg:text-3xl pt-0 text-center'>Never let your memories be greater than your dreams</p>
        </div>
      </div>
      <div className="w-1/2 h-screen bg-transparent"></div>
    </div>
  );
};

export default Hero;
