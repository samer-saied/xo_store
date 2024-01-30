// 'use client'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";

import { useEffect, useState } from "react";
import DiscountGameCardWidget from "./category_card_widget";
import "swiper/css";
import { GetAllProducts, GetExclusiveProducts } from "@/repository/products_repository";

export default function GamesCardsComponent() {
  const [loading, setLoading] = useState(true);
  const [swiper, setSwiper] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    GetExclusiveProducts().then((productsData) => {
      setProducts(productsData);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {!loading && (
        <div className="w-full bg-white py-5">
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
                  <div className=" px-2 py-1 bg-white rounded-lg shadow border border-gray-300 justify-center items-center gap-2 inline-flex">
                    <IoIosArrowForward size={25} />
                  </div>
                </button>
                <button
                  className="button mx-1"
                  onClick={() => {
                    swiper.slideNext();
                  }}
                >
                  <div className=" px-2 py-1 bg-white rounded-lg shadow border border-gray-300 justify-center items-center gap-2 inline-flex">
                    <IoIosArrowBack size={25} />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <Swiper
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
              300: { slidesPerView: 2.1 },
              600: { slidesPerView: 3 },
              800: { slidesPerView: 3.2 },
              1024: { slidesPerView: 4 },
              1300: { slidesPerView: 4.8 },
            }}
            // slidesPerView={2.2}
            onSlideChange={() => console.log("slide change")}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <DiscountGameCardWidget {...product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
}
