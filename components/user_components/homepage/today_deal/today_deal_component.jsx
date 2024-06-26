"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";
import { TodayDealCardWidget } from "./today_deal_card_widget";
import { useEffect, useRef, useState } from "react";
import { GetTodayDealProducts } from "@/repository/products_repository";
import Link from "next/link";

export default function SpeedSaleComponent({ uiData }) {
  // const products = await GetTodayDealProducts();

  const [products, setProducts] = useState([]);
  const fetchDataRef = useRef(false);

  useEffect(() => {
    if (!fetchDataRef.current) {
      GetTodayDealProducts().then((productsData) => {
        setProducts(productsData);
      });
      fetchDataRef.current = true;
    }
  }, []);

  return (
    products &&
    products.length > 0 && (
      <div className="w-full h-full md:py-10 py-5 bg-amber-50">
        <Swiper
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
          // onSlideChange={() => console.log("slide change")}
        >
          {/*--------- Welcome Message to show all Cards ------------*/}
          <SwiperSlide>
            <div className=" h-96 flex flex-col justify-center items-start px-3">
              <h1 className="lg:text-2xl text-right lg:leading-relaxed leading-normal  md:text-3xl text-2xl font-medium text-black">
                {uiData.todayTxt ?? "صفقة اليوم"}
              </h1>
              <h1 className=" md:text-md text-md text-right text-slate-500 mt-5 leading-relaxed">
                {uiData.todayDesc ?? "لا يوجد نص"}
              </h1>
              <Link
                href={"/today"}
                className=" cursor-pointer h-12 bg-blue-950 rounded-lg flex flex-row justify-between px-2.5 mt-8 items-center"
              >
                <div className="text-white md:text-base text-sm font-medium font-['Roboto'] leading-snug">
                  انظر جميع العناصر
                </div>
                <div className="text-white text-base font-medium font-['Roboto'] leading-snug">
                  <IoIosArrowBack size={25} />
                </div>
              </Link>
            </div>
          </SwiperSlide>
          {/*--------- Other Cards ------------*/}

          {products &&
            products.map((product, index) => (
              <SwiperSlide key={product.id}>
                <TodayDealCardWidget product={product} index={index} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    )
  );
}
