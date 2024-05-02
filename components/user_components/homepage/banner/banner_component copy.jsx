import { GetAllBanners } from "../../../../repository/banners_repository";
import BannerCardWidget from "./banner_card_widget";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default async function BannerSwiperComponent() {
  const banners = await GetAllBanners();

  return banners.map((bannerData) => (
    <SwiperSlide key={bannerData.id}>
      <BannerCardWidget {...bannerData} />
    </SwiperSlide>
  ));
}
