import "react-multi-carousel/lib/styles.css";

import SectionCardWidget from "./section_card_widget";
import { GetAllSections } from "@/repository/sections_repository";
import { useEffect, useState } from "react";
import Link from "next/link";
import LoadingPage from "@/components/user_components/common/loading";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSpring, animated } from "@react-spring/web";

export default function SectionsCarouselComponent() {
  const [loading, setLoading] = useState(true);
  const [sections, setsections] = useState(null);
  const [swiper, setSwiper] = useState();

  useEffect(() => {
    GetAllSections().then((sections) => {
      setsections(sections);
      setLoading(false);
    });
  }, []);


///////////// Animation   ///////////////////////
  const props = useSpring({
    from: { opacity: 0 , x:-1000},
    to: { opacity: 1 , x:0},
  });

  
  return (
    <>
      {!loading && (
        <div className="w-full  bg-gradient-to-l from-white to-sky-100 md:py-8 py-5">
          {/* /////////////////   TITLE     ///////////////////////// */}
          <div className="w-full h-14 md:px-12 px-5 flex flex-row justify-between  items-center ">
            <div className="text-right text-blue-950 text-2xl md:text-3xl font-bold leading-[56px]">
              الأقسام الرئيسية
            </div>
            <div className="justify-center items-center flex">
              <Link
                href={"/sections"}
                className="text-slate-600 text-base font-bold "
              >
                المزيد
              </Link>
            </div>
          </div>
          {/* /////////////////   Carousel     ///////////////////////// */}

          <Swiper
            onSwiper={(swiper) => {
              setSwiper(swiper);
            }}
            onActiveIndexChange={(swiper) => {
              console.log("active index is", swiper.activeIndex);
            }}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
            direction={"horizontal"}
            scrollbar={{ draggable: true }}
            spaceBetween={10}
            breakpoints={{
              300: { slidesPerView: 1.8 },
              600: { slidesPerView: 2.8 },
              800: { slidesPerView: 3.2 },
              1024: { slidesPerView: 3.6 },
              1300: { slidesPerView: 4.1 },
            }}
            // slidesPerView={2.2}
            onSlideChange={() => console.log("slide change")}
          >
            {sections.map((section) => (
              <SwiperSlide key={section.id}>
                <animated.div style={props}>
                  <SectionCardWidget key={section.id} {...section} />
                </animated.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      {loading && <LoadingPage />}
    </>
  );
}
