import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import GameCardWidget from "./game_card_widget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";

export default function GamesCardsComponent() {
  const [swiper, setSwiper] = useState<any | null>(null);

  return (
    <div className="w-full bg-white">
      {/* /////////////////   TITLE     ///////////////////////// */}
      <div className="w-full h-14 md:px-12 px-2 flex flex-row justify-between  items-center ">
        <div className="text-right text-zinc-600 text-xl md:text-2xl font-bold leading-[48px]">
          خصومات حصرية
        </div>
        <div className="justify-center items-center flex">
          <div className="button-wrapper">
            <button
              className="button"
              onClick={() => {
                swiper.slidePrev();
              }}
            >
              <div className=" px-3 py-2 bg-white rounded-lg shadow border border-gray-300 justify-center items-center gap-2 inline-flex">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </button>
            <button
              className="button mx-1"
              onClick={() => {
                swiper.slideNext();
              }}
            >
              <div className=" px-3 py-2 bg-white rounded-lg shadow border border-gray-300 justify-center items-center gap-2 inline-flex">
                <FontAwesomeIcon icon={faArrowLeft} />
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
