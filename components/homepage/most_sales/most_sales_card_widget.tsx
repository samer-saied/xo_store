import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function MostSalesCardWidget() {
  return (
    <div className=" md:h-60 h-44 mx-1 bg-gradient-to-b from-blue-600 to-blue-950 rounded-2xl transition delay-150 duration-300 ease-in-out hover:shadow-md hover:shadow-slate-600 mb-5 hover:scale-95">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <img className="w-3/4  h-1/2 rounded-2xl object-contain" src="/most/B.png" />
      </div>
    </div>
  );
}



//bg-gradient-to-b from-red-600 to-rose-950