import React from "react";
import Carousel from "react-multi-carousel";

export default function SectionMoreWidget() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2.5,
    },
  };

  return (
    <div className="relative w-full h-auto flex md:flex-row flex-col">
      <div className=" md:w-6/12 w-full h-auto md:py-10 bg-MainBlueColor flex flex-col justify-center">
        <div className=" p-10 w-10/12">
          <h1 className="lg:text-5xl text-right lg:leading-relaxed leading-normal md:text-3xl text-2xl text-zinc-50">
            هناك العديد من الخيارات التي تناسبك من فئات مختلفة.
          </h1>
          <h1 className=" md:text-md  text-sm text-right text-stone-200 mt-5 leading-relaxed">
            هناك أكثر من 10 الف من العروض رائعة حقًا من مختلف الاحتياجات والفئات
            يمكنك شراءها بأسعار منخفضة جدًا
          </h1>
        </div>
        <div className="w-full md:hidden flex-col justify-center pb-5">
        <Carousel
          swipeable={true}
          autoPlaySpeed={1000}
          responsive={responsive}
          transitionDuration={500}
          // infinite={true}
          removeArrowOnDeviceType={["mobile"]}
        >
          <div className="m-2 xl:m-5 lg:m-5 max-h-64 rounded-2xl overflow-hidden">
            <img
              className=" object-cover max-h-64 w-full "
              src="https://via.placeholder.com/150"
              alt="Placeholder Image"
            />
          </div>
          <div className="m-2 xl:m-5 md:m-5 max-h-64 rounded-2xl overflow-hidden">
            <img
              className=" object-cover max-h-64 w-full "
              src="https://via.placeholder.com/150"
              alt="Placeholder Image"
            />
          </div>
          <div className="m-2 xl:m-5 md:m-5 max-h-64 rounded-2xl overflow-hidden">
            <img
              className=" object-cover max-h-64 w-full "
              src="https://via.placeholder.com/150"
              alt="Placeholder Image"
            />
          </div>
        </Carousel>
      </div>
      </div>
      <div className="w-1/2 bg-stone-50 hidden"></div>
      <div className=" md:absolute md:left-0 hidden bottom-0 md:top-0 w-full md:w-7/12 md:flex flex-col justify-center">
        <Carousel
          swipeable={true}
          autoPlaySpeed={1000}
          responsive={responsive}
          transitionDuration={500}
          // infinite={true}
          removeArrowOnDeviceType={["mobile"]}
        >
          <div className="m-2 xl:m-5 lg:m-5 max-h-96 rounded-2xl overflow-hidden">
            <img
              className=" object-cover max-h-64 w-full "
              src="https://via.placeholder.com/150"
              alt="Placeholder Image"
            />
          </div>
          <div className="m-2 xl:m-5 lg:m-5 max-h-96 rounded-2xl overflow-hidden">
            <img
              className=" object-cover max-h-64 w-full "
              src="https://via.placeholder.com/150"
              alt="Placeholder Image"
            />
          </div>
          <div className="m-2 xl:m-5 lg:m-5 max-h-96 rounded-2xl overflow-hidden">
            <img
              className=" object-cover max-h-64 w-full "
              src="https://via.placeholder.com/150"
              alt="Placeholder Image"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
