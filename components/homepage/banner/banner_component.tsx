import { GetAllBanners } from "@/repository/banners_repository";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerCardWidget from "./banner_card_widget";
import { Banner } from "@/models/banner_model";
import { Pagination ,Autoplay} from 'swiper/modules';
import SwiperCore from 'swiper'
import 'swiper/css';


const BannerComponent = async () => {
  const banners: Banner[] = await GetAllBanners();
  SwiperCore.use([Autoplay]);

  return (
    <Swiper
      modules={[Pagination]}
      autoplay={{stopOnLastSlide:false, delay: 2500,}}
      loop={true}
      onSwiper={(swiper) => {
        // setSwiper(swiper);
      }}
      onActiveIndexChange={(swiper) => {
        console.log("active index is", swiper.activeIndex);
      }}
      pagination={{
        clickable: true,
        el: ".swiper-custom-pagination",
      }}
      className="mySwiper"
      direction={"horizontal"}
      scrollbar={{ draggable: true }}
      spaceBetween={10}
      slidesPerView={1}
    >
      {banners.map((bannerData :Banner) => (
        <SwiperSlide key={bannerData.id}>
          <BannerCardWidget {...bannerData} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerComponent;
