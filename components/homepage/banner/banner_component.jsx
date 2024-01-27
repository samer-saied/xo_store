import { GetAllBanners } from "@/repository/banners_repository";
import BannerCardWidget from "./banner_card_widget";
import { Banner } from "@/models/banner_model";

import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination,Autoplay } from "swiper/modules";

const BannerComponent = async () => {
  const banners = await GetAllBanners();
  SwiperCore.use([Autoplay]);

  return (
    <Swiper
      pagination={{
        type: "bullets",
      }}
      // effect="fade"
      modules={[ Pagination]}
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
  );
};

export default BannerComponent;
