"use client";

import { GetAllBanners } from "@/repository/banners_repository";
import BannerSwiperComponent from "./banner_component copy";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import BannerCardWidget from "./banner_card_widget";

export default function BannerComponent() {
  const [banners, setbanners] = useState([]);
  const fetchDataRef = useRef(false);

  useEffect(() => {
    if (!fetchDataRef.current) {
      GetAllBanners().then((banners) => {

        setbanners(banners);
      });
      fetchDataRef.current = true;
    }
  }, []);

  SwiperCore.use([Autoplay]);

  return (
    <>
      {banners.length > 0 && (
        <Swiper
          pagination={{
            type: "bullets",
          }}
          // effect="fade"
          modules={[Pagination, Autoplay]}
          autoplay={true}
          loop={true}
          direction={"horizontal"}
          scrollbar={{ draggable: true }}
          spaceBetween={30}
          slidesPerView={1}
        >
          {banners.map((bannerData) => (
            <SwiperSlide key={bannerData.id}>
              <BannerCardWidget {...bannerData} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
