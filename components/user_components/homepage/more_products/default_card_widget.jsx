"use client";
import { GetMoreProducts } from "@/repository/products_repository";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";

export const DefaultCardsCarouselWidget = ({ products }) => {
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
      {products &&
        products.map((product) => {
          return (
            <Link key={product.id} href={"products/" + product.id}>
              <div className=" h-52 md:h-64 w-auto bg-gray-300  mx-2 xl:mx-5 lg:mx-5  rounded-2xl overflow-hidden flex flex-col justify-center items-center">
                <Image
                  priority={true}
                  width={256}
                  height={256}
                  className=" object-contain h-full w-full"
                  src={product.image}
                  alt={product.title}
                />
              </div>
            </Link>
          );
        })}
    </Carousel>
  );
};
