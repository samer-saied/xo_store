import "react-multi-carousel/lib/styles.css";

import SectionCardWidget from "./section_card_widget";
import { GetAllSections } from "@/repository/sections_repository";
import { Section } from "@/models/section_model";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4.2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2.9,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2.2,
  },
};

export default async function SectionsCarouselComponent() {
  const result: Section[] = await GetAllSections();

  return (
    <div className="w-full  bg-gradient-to-l from-white to-sky-100 md:py-8 py-3">
      {/* /////////////////   TITLE     ///////////////////////// */}
      <div className="w-full h-14 md:px-12 px-2 flex flex-row justify-between  items-center ">
        <div className="text-right text-blue-950 text-2xl md:text-3xl font-bold font-['Almarai'] leading-[56px]">
          الأقسام الرئيسية
        </div>
        <div className="justify-center items-center flex">
          <div className="text-slate-600 text-base font-bold font-['Poppins']">
            المزيد
          </div>
        </div>
      </div>
      {/* /////////////////   Carousel     ///////////////////////// */}
      <Carousel
        // autoPlay={true}
        swipeable={true}
        autoPlaySpeed={1000}
        responsive={responsive}
        transitionDuration={500}
        // infinite={true}
        removeArrowOnDeviceType={["mobile"]}
      >
        {result.map((section) => (
          <SectionCardWidget
            key={section.id}
            id={section.id}
            icon={section.icon}
            name={section.name}
            primaryColor={section.primaryColor}
            secandColor={section.secandColor}
          />
        ))}
      </Carousel>
    </div>
  );
}
