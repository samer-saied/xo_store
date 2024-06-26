"use client";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";

import { useEffect, useRef, useState } from "react";
import ProductGameCardWidget from "./product_card_widget";
import "swiper/css";
import { GetExclusiveProducts } from "@/repository/products_repository";
import LoadingPage from "../../common/loading";

export default function GamesCardsComponent() {
  // const [loading, setLoading] = useState(true);
  const [swiper, setSwiper] = useState();
  const [products, setProducts] = useState([]);
  const fetchDataRef = useRef(false);

  useEffect(() => {
    if (!fetchDataRef.current) {
      GetExclusiveProducts().then((productsData) => {
        setProducts(productsData);
      });
      fetchDataRef.current = true;
    }
  }, []);

  return (
    <>
      {products && products.length > 0 && (
        <div className="w-full bg-white py-5">
          {/* /////////////////   TITLE     ///////////////////////// */}
          <div className="w-full h-14 md:px-12 px-5 flex flex-row justify-between  items-center ">
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
            // onActiveIndexChange={(swiper) => {
            //   // console.log("active index is", swiper.activeIndex);
            // }}
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
            // onSlideChange={() => console.log("slide change")}
          >
            {products.map((product, index) => (
              <SwiperSlide key={product.id}>
                <ProductGameCardWidget product={product} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
}
