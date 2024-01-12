import React from "react";
import Carousel from "react-multi-carousel";
import { DefaultCardsCarouselWidget } from "./default_card_widget";

export default function SectionMoreWidget() {
  return (
    <div className="relative w-full h-auto flex md:flex-row flex-col  bg-amber-50">
      <div className=" md:w-6/12 w-full h-auto md:py-10 bg-MainBlueColor flex flex-col justify-center">
        <div className=" p-10 w-10/12 ">
          <h1 className="lg:text-5xl text-right lg:leading-relaxed leading-normal md:text-3xl text-2xl text-zinc-50">
            هناك العديد من الخيارات التي تناسبك من فئات مختلفة.
          </h1>
          <h1 className=" md:text-md  text-sm text-right text-stone-200 mt-5 leading-relaxed">
            هناك أكثر من 10 الف من العروض رائعة حقًا من مختلف الاحتياجات والفئات
            يمكنك شراءها بأسعار منخفضة جدًا
          </h1>
        </div>
        <div className="w-full md:hidden flex-col justify-center pb-5">
          <DefaultCardsCarouselWidget />
        </div>
      </div>
      <div className="w-1/2 hidden"></div>
      <div className=" md:absolute md:left-0 hidden bottom-0 md:top-0 w-full md:w-7/12 md:flex flex-col justify-center ">
        <DefaultCardsCarouselWidget />
      </div>
    </div>
  );
}
