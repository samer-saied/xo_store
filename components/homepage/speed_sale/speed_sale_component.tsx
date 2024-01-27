import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";


import { SpeedSaleCardWidget } from "./speed_cards_widget";



export default function SpeedSaleComponent() {
  return (
    <div className="w-full h-full md:py-24 py-8 bg-amber-50">
      <Swiper
        onSwiper={(swiper:any) => {
          // setSwiper(swiper);
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
          300: { slidesPerView: 1.8 },
          640: { slidesPerView: 3.1 },
          1024: { slidesPerView: 4.2 },
          1300: { slidesPerView: 4.6 },
        }}
        slidesPerView={2.1}
        onSlideChange={() => console.log("slide change")}
      >
        {/*--------- Welcome Message to show all Cards ------------*/}
        <SwiperSlide>
          <div className="p-5 h-80 flex flex-col justify-evenly">
            <h1 className="lg:text-2xl text-right lg:leading-relaxed leading-normal  md:text-2xl text-xl font-medium text-black">
              صفقة اليوم
            </h1>
            <h1 className=" md:text-md text-md text-right text-slate-500 mt-2 leading-relaxed">
              احصل على العناصر المفضلة لديك هنا. جميع العناصر مخصومة ومحدودة
              فقط. احصل عليه بسرعة قبل بيعه!
            </h1>
            <div className=" h-12 bg-blue-950 rounded-lg flex flex-row justify-between px-2.5 mt-8 items-center">
              <div className="text-white md:text-base text-sm font-medium font-['Roboto'] leading-snug">
                انظر جميع العناصر
              </div>
              <div className="text-white text-base font-medium font-['Roboto'] leading-snug">                
                <IoIosArrowBack size={25} />
              </div>
            </div>
          </div>
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
