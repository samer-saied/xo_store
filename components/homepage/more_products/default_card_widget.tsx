import React from "react";
import Carousel from "react-multi-carousel";

export const DefaultCardsCarouselWidget = () => {
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
  );
};
