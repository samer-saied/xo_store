import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";

import React from "react";

import { SpeedSaleCardWidget } from "./speed_cards_widget";

export default function SpeedSaleComponent() {
  return (
    <div className="w-full h-full md:py-24 py-8 bg-amber-50">
      <Swiper
        onSwiper={(swiper) => {
          // setSwiper(swiper);
        }}
        onActiveIndexChange={(swiper) => {
          console.log("active index is", swiper.activeIndex);
        }}
        pagination={{
          clickable: true,
          // el: ".swiper-custom-pagination",
        }}
        className="mySwiper"
        direction={"horizontal"}
        scrollbar={{ draggable: true }}
        spaceBetween={10}
        breakpoints={{
          640: { slidesPerView: 3.1 },
          1024: { slidesPerView: 4.2 },
          1300: { slidesPerView: 5.3 },
        }}
        slidesPerView={2.1}
        onSlideChange={() => console.log("slide change")}
      >
        {/*--------- Welcome Message to show all Cards ------------*/}
        <SwiperSlide>
          <div className="p-5 h-80 flex flex-col justify-evenly">
            <h1 className="lg:text-2xl text-right lg:leading-relaxed leading-normal  md:text-2xl text-xl text-black">
              صفقة اليوم
            </h1>
            <h1 className=" md:text-md text-xs text-right text-slate-500 mt-2 leading-relaxed">
              احصل على العناصر المفضلة لديك هنا. جميع العناصر مخصومة ومحدودة
              فقط. احصل عليه بسرعة قبل بيعه!
            </h1>
            <div className=" h-12 bg-blue-950 rounded-lg flex flex-row justify-between px-2.5 mt-8 items-center">
              <div className="text-white md:text-base text-sm font-medium font-['Roboto'] leading-snug">
                انظر جميع العناصر
              </div>
              <div className="text-white text-base font-medium font-['Roboto'] leading-snug">
                <FontAwesomeIcon icon={faAngleLeft} />
              </div>
            </div>
          </div>{" "}
        </SwiperSlide>
        {/*--------- Other Cards ------------*/}
        <SwiperSlide>
          <SpeedSaleCardWidget />
        </SwiperSlide>
        <SwiperSlide>
          <SpeedSaleCardWidget />
        </SwiperSlide>
        <SwiperSlide>
          <SpeedSaleCardWidget />
        </SwiperSlide>
        <SwiperSlide>
          <SpeedSaleCardWidget />
        </SwiperSlide>
        <SwiperSlide>
          <SpeedSaleCardWidget />
        </SwiperSlide>
        <SwiperSlide>
          <SpeedSaleCardWidget />
        </SwiperSlide>
        <SwiperSlide>
          <SpeedSaleCardWidget />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
