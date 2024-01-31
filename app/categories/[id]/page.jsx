"use client";

import SpacerWidget from "@/components/common/spacer_widget";
import FooterComponent from "@/components/homepage/footer/footer_component";
import TopBarComponent from "@/components/homepage/topbar/topbar_component";

import Navbar from "@/components/common/Navbar";
import { useEffect, useState } from "react";
import PathWidget from "@/components/common/path_widget";
import { GetProductsByCategory } from "@/repository/products_repository";
import { SpeedSaleCardWidget } from "@/components/homepage/speed_sale/speed_cards_widget";


export default function CategoriesPage( params ) {
  const [products, setCategories] = useState([]);


  useEffect(() => {
    GetProductsByCategory(params.id).then((products) => setCategories(products));
  }, []);

  const urlPaths = [{ name: "المنتجات الرئيسية", link: "/products/" + "product.id" }];

  return (
    <>
      <TopBarComponent />
      <Navbar />
      <SpacerWidget />

      {/*------------- PATH TEXT ---------------------*/}
      <PathWidget urlPaths={urlPaths} />

      {/* /////////////////   GRID SECTIONS CARDS     ///////////////////////// */}
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 md:w-9/12 px-2 mx-auto">
        {products.map((product) => (
           <SpeedSaleCardWidget key={product.id} product={product} />
        ))}
      </div>

      <SpacerWidget />
      <FooterComponent />
    </>
  );
  //<div>My Post: {params.id}</div>;
}
