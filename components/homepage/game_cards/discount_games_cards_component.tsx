// import { Swiper, Swiper } from "swiper/react";
import { IoIosArrowForward ,IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';

import { useState } from "react";
import DiscountGameCardWidget from "./game_card_widget";
import "swiper/css";
import { GetAllCategories } from "@/repository/category_repository";

export default async function GamesCardsComponent() {
   const [swiper, setSwiper] = useState<any | null>(null);
//    const categories = await GetAllCategories();
// console.log(categories)

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
              <IoIosArrowForward size={25} />
              </div>
            </button>
            <button
              className="button mx-1"
              onClick={() => {
                 swiper.slideNext();
              }}
            >
              <div className=" px-3 py-2 bg-white rounded-lg shadow border border-gray-300 justify-center items-center gap-2 inline-flex">
              <IoIosArrowBack size={25} />

              </div>
            </button>
          </div>
        </div>
      </div>
      <Swiper
        // modules={[Pagination]}
        // slidesPerView={3}
        onSwiper={(swiper:any) => {
          setSwiper(swiper);
        }}
        onActiveIndexChange={(swiper:any) => {
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
          300: { slidesPerView: 2.1 },
          600: { slidesPerView: 3 },
          800: { slidesPerView: 3.2 },
          1024: { slidesPerView: 4 },
          1300: { slidesPerView: 4.8 },
        }}
        // slidesPerView={2.2}
        onSlideChange={() => console.log("slide change")}
      >
        
        <SwiperSlide>
           <DiscountGameCardWidget />
        </SwiperSlide>

        <SwiperSlide>
           <DiscountGameCardWidget />
        </SwiperSlide>

        <SwiperSlide>
           <DiscountGameCardWidget />
        </SwiperSlide>

        <SwiperSlide>
           <DiscountGameCardWidget />
        </SwiperSlide>

        </Swiper>
    </div>
  );
}




// <Swiper
// // modules={[Pagination]}
// slidesPerView={3}
// onSwiper={(swiper) => {
//   // setSwiper(swiper);
// }}
// onActiveIndexChange={(swiper) => {
//   console.log("active index is", swiper.activeIndex);
// }}

// // className="mySwiper"
// // direction={"horizontal"}
// // scrollbar={{ draggable: true }}
// spaceBetween={10}
// breakpoints={{
//   640: { slidesPerView: 3 },
//   1024: { slidesPerView: 5 },
//   1300: { slidesPerView: 6 },
// }}
// // slidesPerView={2.2}
// onSlideChange={() => console.log("slide change")}
// >
// <Swiper>
//   <DiscountGameCardWidget />
// </Swiper>
// <Swiper>
//   <DiscountGameCardWidget />
// </Swiper>
// <Swiper>
//   <DiscountGameCardWidget />
// </Swiper>
// <Swiper>
//   <DiscountGameCardWidget />
// </Swiper>
// <Swiper>
//   <DiscountGameCardWidget />
// </Swiper>
// <Swiper>
//   <DiscountGameCardWidget />
// </Swiper>
// <Swiper>
//   <DiscountGameCardWidget />
// </Swiper>
// <Swiper>
//   <DiscountGameCardWidget />
// </Swiper>
// </Swiper>