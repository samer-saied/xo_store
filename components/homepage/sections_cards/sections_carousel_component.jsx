import "react-multi-carousel/lib/styles.css";

import SectionCardWidget from "./section_card_widget";
import { GetAllSections } from "@/repository/sections_repository";
import Carousel from "react-multi-carousel";
import { useEffect, useState } from "react";
import Link from "next/link";
import LoadingPage from "@/components/common/loading";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.9,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2.1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

export default function SectionsCarouselComponent() {
  const [loading, setLoading] = useState(true);
  const [sections, setsections] = useState([]);

  useEffect(() => {
    GetAllSections().then((sections) => {
      setsections(sections);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {!loading && (
        <div className="w-full  bg-gradient-to-l from-white to-sky-100 md:py-8 py-10">
          {/* /////////////////   TITLE     ///////////////////////// */}
          <div className="w-full h-14 md:px-12 px-2 flex flex-row justify-between  items-center ">
            <div className="text-right text-blue-950 text-2xl md:text-3xl font-bold font-['Almarai'] leading-[56px]">
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
          <Carousel
            // autoPlay={true}
            swipeable={true}
            autoPlaySpeed={1000}
            responsive={responsive}
            transitionDuration={500}
            // infinite={true}
            removeArrowOnDeviceType={["mobile"]}
          >
            {sections.map((section) => (
              <SectionCardWidget key={section.id} {...section} />
            ))}
          </Carousel>
        </div>
      )}
      {loading && <LoadingPage />}
    </>
  );
}
