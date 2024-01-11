import React from "react";
import Carousel from "react-multi-carousel";

export default function SpeedSaleComponent() {
  return (
    <div className="relative w-full h-auto flex md:flex-row flex-col">
      <div className="w-full h-auto md:py-10 bg-amber-50 flex flex-col justify-center">
        <div className=" p-10 w-3/12">
          <h1 className="lg:text-5xl text-right lg:leading-relaxed leading-normal md:text-3xl text-2xl text-black">
            بيع مفاجئ
          </h1>
          <h1 className=" md:text-md  text-sm text-right text-slate-500 mt-5 leading-relaxed">
            احصل على العناصر المفضلة لديك هنا. جميع العناصر مخصومة ومحدودة فقط.
            احصل عليه بسرعة قبل بيعه!
          </h1>
          <div className=" w-60 h-12 bg-blue-950 rounded-lg flex flex-row justify-between px-2.5 mt-3 items-center">
            <div className="text-white text-base font-medium font-['Roboto'] leading-snug">
              انظر جميع العناصر
            </div>
            <div className="text-white text-base font-medium font-['Roboto'] leading-snug">
              K
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
