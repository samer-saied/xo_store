"use client";
import "swiper/css";
import "swiper/css/pagination";

import CardRelatedProductsWidget from "./card_related_product_widget";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import useGetRelatedProductHook from "@/hooks/get_related_product_hook";

export default function RelatedProductsWidget({ categoryId }) {
  const relatedProducts = useGetRelatedProductHook(categoryId);

  return (
    <>
      {/*-------------------- RELATED PRODUCTS ---------------*/}
      {relatedProducts && relatedProducts.length > 0 && (
        <div className="py-5 md:w-10/12 mx-auto">
          {/*-------------------- TITle OF RELATED PRODUCT --------------*/}
          <div className="h-14 mx-auto px-5 flex flex-row justify-between items-center">
            <div className="text-right text-blue-950 text-2xl font-bold leading-12">
              منتجات ذات صله
            </div>
            {/* <div className="text-slate-600 text-base font-bold font-['Poppins']">
            المزيد
          </div> */}
          </div>
          <div className=" relative w-full h-64 flex flex-col justify-center items-center bg-orange-500 bg-opacity-95 md:rounded-2xl">
            <div className=" absolute left-10 top-0 bottom-0 opacity-10">
              <Image
                width={200}
                height={200}
                className=" h-full w-full object-cover"
                src="/most/pubg_man.png"
                alt={"pubg_man"}
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
              {relatedProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <CardRelatedProductsWidget product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
}
