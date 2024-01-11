import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import GameCardWidget from "./game_card_widget";

export default function GamesCardsComponent() {
  const [swiper, setSwiper] = useState<any | null>(null);

  return (
    <div className="w-full bg-white">
      {/* /////////////////   TITLE     ///////////////////////// */}
      <div className="w-full h-14 px-12 flex flex-row justify-between  items-center ">
        <div className="text-right text-zinc-600 text-2xl md:text-3xl font-bold leading-[48px]">
          بطاقات الالعاب
        </div>
        <div className="justify-center items-center flex">
          <div className="button-wrapper">
            <button
              className="button mx-2"
              onClick={() => {
                swiper.slidePrev();
              }}
            >
              <div className="w-[52px] h-10 px-4 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-center items-center gap-2 inline-flex">
                <img src="/arrows/arrow-right.svg" alt="" />
              </div>
            </button>
            <button
              className="button mx-2"
              onClick={() => {
                swiper.slideNext();
              }}
            >
              <div className="w-[52px] h-10 px-4 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-center items-center gap-2 inline-flex">
                <img src="/arrows/arrow-back.svg" alt="" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <Swiper
        // modules={[Pagination]}
        // slidesPerView={3}
        onSwiper={(swiper) => {
          setSwiper(swiper);
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
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
          1300: { slidesPerView: 6 },
        }}
        slidesPerView={2.2}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <GameCardWidget />
        </SwiperSlide>
        <SwiperSlide>
          <GameCardWidget />
        </SwiperSlide>
        <SwiperSlide>
          <GameCardWidget />
        </SwiperSlide>
        <SwiperSlide>
          <GameCardWidget />
        </SwiperSlide>
        <SwiperSlide>
          <GameCardWidget />
        </SwiperSlide>
        <SwiperSlide>
          <GameCardWidget />
        </SwiperSlide>
        <SwiperSlide>
          <GameCardWidget />
        </SwiperSlide>
        <SwiperSlide>
          <GameCardWidget />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

