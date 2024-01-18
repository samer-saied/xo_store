"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import CardRelatedProductsWidget from "./card_related_product_widget";

export default function RelatedProductsWidget() {
  return (
    <>
      {/*-------------------- RELATED PRODUCTS ---------------*/}
      <div className="py-5 md:w-10/12 mx-auto">
        {/*-------------------- TITle OF RELATED PRODUCT --------------*/}
        <div className="h-14 mx-auto px-5 flex flex-row justify-between items-center">
          <div className="text-right text-blue-950 text-2xl font-bold leading-12">
            منتجات ذات صله
          </div>
          <div className="text-slate-600 text-base font-bold font-['Poppins']">
            المزيد
          </div>
        </div>
        <div className=" relative w-full h-64 flex flex-col justify-center items-center bg-orange-500 bg-opacity-95 md:rounded-2xl">
      <div className=" absolute left-10 top-0 bottom-0 opacity-10">
      <img
          className=" h-full w-full object-cover"
          src="/most/pubg_man.png"
        />
      </div>
          <Swiper
            className="w-full "
            breakpoints={{
              375: { slidesPerView: 1.4 },
              640: { slidesPerView: 1.8 },
              900: { slidesPerView: 2.2 },
              1300: { slidesPerView: 3.8 },
            }}
          >
            <SwiperSlide>
              <CardRelatedProductsWidget />
            </SwiperSlide>
            <SwiperSlide>
              <CardRelatedProductsWidget />
            </SwiperSlide>
            <SwiperSlide>
              <CardRelatedProductsWidget />
            </SwiperSlide>
            <SwiperSlide>
              <CardRelatedProductsWidget />
            </SwiperSlide>
            <SwiperSlide>
              <CardRelatedProductsWidget />
            </SwiperSlide>
          </Swiper>
          {/* <CardRelatedProductsWidget /> */}
        </div>
      </div>
    </>
  );
  //<div>My Post: {params.id}</div>;
}
