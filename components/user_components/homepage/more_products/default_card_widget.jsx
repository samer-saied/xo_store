// import { GetMoreProducts } from "@/repository/products_repository";
// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import Carousel from "react-multi-carousel";

// export function DefaultCardsCarouselWidget() {
//   const [products, setProducts] = useState([]);
//   const fetchDataRef = useRef(false);

//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 4,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 3,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 2.5,
//     },
//   };
//   const [products, setProducts] = useState([]);
//   const fetchDataRef = useRef(false);
//   useEffect(() => {
//     if (!fetchDataRef.current) {
//       GetMoreProducts().then((productsData) => {
//         console.log(productsData);
//         setProducts(productsData);
//       });
//       fetchDataRef.current = true;
//     }
//   }, []);

//   return (
//     <Carousel
//       swipeable={true}
//       autoPlaySpeed={1000}
//       responsive={responsive}
//       transitionDuration={500}
//       // infinite={true}

//       removeArrowOnDeviceType={["mobile"]}
//     >
//       {products.length > 0 &&
//         products.map((product) => {
//           return (
//             <div
//               key={product.id}
//               className=" bg-gray-300 h-full mx-2 xl:mx-5 lg:mx-5  rounded-2xl overflow-hidden flex flex-col justify-center items-center"
//             >
//               <Image
//                 width={64}
//                 height={64}
//                 className=" object-fit h-full w-full"
//                 src={product.image}
//                 alt={product.title}
//               />
//             </div>
//           );
//         })}
//     </Carousel>
//   );
// }

"use client";
import { GetMoreProducts } from "@/repository/products_repository";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
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

  const [products, setProducts] = useState([]);
  const fetchDataRef = useRef(false);

  useEffect(() => {
    if (!fetchDataRef.current) {
      GetMoreProducts().then((productsData) => {
        setProducts(productsData);
      });
      fetchDataRef.current = true;
    }
  }, []);

  return (
    <Carousel
      swipeable={true}
      autoPlaySpeed={1000}
      responsive={responsive}
      transitionDuration={500}
      // infinite={true}
      removeArrowOnDeviceType={["mobile"]}
    >
      {products.length > 0 &&
        products.map((product) => {
          return (
            <div
              key={product.id}
              className=" bg-gray-300 h-full mx-2 xl:mx-5 lg:mx-5  rounded-2xl overflow-hidden flex flex-col justify-center items-center"
            >
              <Image
                priority={true}
                width={64}
                height={64}
                className=" object-contain h-full w-full"
                src={product.image}
                alt={product.title}
              />
            </div>
          );
        })}
    </Carousel>
  );
};
