import React, { useRef } from "react";
import Video from "../components/home/Video";
import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottomText from "../components/home/HomeBottomText";

const Home = () => {
  return (
    <>
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="fixed inset-0 z-10 bg-black/30" />

      <div className="relative z-20 flex h-screen w-screen flex-col justify-between overflow-hidden pb-5">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </>
  );
};

export default Home;
