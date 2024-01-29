import { Swiper, SwiperSlide } from "swiper/react";

import MostSalesCardWidget from "./most_sales_card_widget";
import MostSalesCardWidget2 from "./most_sales_card_widget copy";
import MostSalesCardWidget3 from "./most_sales_card_widget copy 2";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { GetAllCategories } from "@/repository/category_repository";

export default async function MostSalesComponent() {
  const [swiper, setSwiper] = useState<any | null>(null);
  const categories = await GetAllCategories();
  console.log(categories);
  
  return (
    <div className="w-full bg-white">
      {/* /////////////////   TITLE     ///////////////////////// */}
      <div className="w-full h-14 md:px-12 px-2 flex flex-row justify-between  items-center ">
        <div className="text-right text-zinc-600 text-xl md:text-2xl font-bold leading-[48px]">
          الأكثر مبيعا
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
        onSwiper={(swiper: any) => {
          setSwiper(swiper);
        }}
        onActiveIndexChange={(swiper: any) => {
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
        {categories.map((category) => (
          <>
            <SwiperSlide key={category.id}>
              <MostSalesCardWidget3 {...category}/>
            </SwiperSlide>
          </>
        ))}

        {/* <SwiperSlide>
          <MostSalesCardWidget />
        </SwiperSlide>

        <SwiperSlide>
          <MostSalesCardWidget2 />
        </SwiperSlide>

        <SwiperSlide>
          <MostSalesCardWidget />
        </SwiperSlide>
        <SwiperSlide>
          <MostSalesCardWidget />
        </SwiperSlide>
        <SwiperSlide>
          <MostSalesCardWidget />
        </SwiperSlide>
        <SwiperSlide>
          <MostSalesCardWidget />
        </SwiperSlide>
        <SwiperSlide>
          <MostSalesCardWidget />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}
