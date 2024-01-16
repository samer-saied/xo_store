import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import SectionCardWidget from "./section_card_widget";

export default function CategriesCarouselComponent() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.9,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2.2,
    },
  };

  return (
    <div className="w-full  bg-gradient-to-l from-white to-sky-100 pb-5">
      {/* /////////////////   TITLE     ///////////////////////// */}
      <div className="w-full h-14 md:px-12 px-2 flex flex-row justify-between  items-center ">
        <div className="text-right text-blue-950 text-2xl md:text-3xl font-bold font-['Almarai'] leading-[56px]">
        الأقسام الرئيسية
        </div>
        <div className="justify-center items-center flex">
          <div className="text-slate-600 text-base font-bold font-['Poppins']">
            المزيد
          </div>
        </div>
      </div>
      {/* /////////////////   Carousel     ///////////////////////// */}
      <Carousel
        // autoPlay={true}
        swipeable={true}
        autoPlaySpeed={1000}
        responsive={responsive}
        transitionDuration={500}
        // infinite={true}
        removeArrowOnDeviceType={["mobile"]}
      >
        <SectionCardWidget
          image={"/cards/electricty.svg"}
          text={"شحن التطبيقات"}
          firstColor={"#4ED364"}
          secandColor={"#008000"}
        />
        <SectionCardWidget
          image={"/cards/coins.svg"}
          text={"بطاقات التطبيقات"}
          firstColor={"#F170FF"}
          secandColor={"#70037C"}
        />
        <SectionCardWidget
          image={"/cards/controller.svg"}
          text={"بطاقات الالعاب"}
          firstColor={"#3364CE"}
          secandColor={"#142B5F"}
        />
        <SectionCardWidget
          image={"/cards/coins.svg"}
          text={"كروت الالعاب"}
          firstColor={"#FACA00"}
          secandColor={"#C58001"}
        />
        <SectionCardWidget
          image={"/cards/electricty.svg"}
          text={"شحن التطبيقات"}
          firstColor={"#4ED364"}
          secandColor={"#008000"}
        />
        <SectionCardWidget
          image={"/cards/coins.svg"}
          text={"بطاقات الالعاب"}
          firstColor={"#F170FF"}
          secandColor={"#70037C"}
        />
        <SectionCardWidget
          image={"/cards/controller.svg"}
          text={"شحن الالعاب"}
          firstColor={"#3364CE"}
          secandColor={"#142B5F"}
        />
        <SectionCardWidget
          image={"/cards/coins.svg"}
          text={"كروت الالعاب"}
          firstColor={"#FACA00"}
          secandColor={"#C58001"}
        />
      </Carousel>
    </div>
  );
}
