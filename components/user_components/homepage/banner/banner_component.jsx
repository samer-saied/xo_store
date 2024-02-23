"use client";
import { GetAllBanners } from "@/repository/banners_repository";
import BannerCardWidget from "./banner_card_widget";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

export default function BannerComponent() {
  SwiperCore.use([Autoplay]);

  const [loading, setLoading] = useState(true);
  const [banners, setbanners] = useState([]);

  useEffect(() => {
    GetAllBanners().then((banners) => {
      setbanners(banners);
      setLoading(false);
    });
  }, []);

  return (
    <Swiper
      pagination={{
        type: "bullets",
      }}
      // effect="fade"
      modules={[Pagination]}
      autoplay={true}
      loop={true}
      direction={"horizontal"}
      scrollbar={{ draggable: true }}
      spaceBetween={30}
      slidesPerView={1}
    >
      {!loading && banners.map((bannerData) => (
        <SwiperSlide key={bannerData.id}>
          <BannerCardWidget {...bannerData} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
