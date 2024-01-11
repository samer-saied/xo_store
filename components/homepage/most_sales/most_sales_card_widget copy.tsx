import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function MostSalesCardWidget2() {
  return (
    <div className=" md:h-60 h-48 mx-1 bg-gradient-to-b from-red-600 to-rose-950 rounded-2xl shadow">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <img className="w-3/4  h-1/2 rounded-2xl object-contain" src="/most/roblox.png" />
      </div>
    </div>
  );
}



//bg-gradient-to-b from-red-600 to-rose-950