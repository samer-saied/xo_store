"use client";

import SpacerWidget from "@/components/common/spacer_widget";
import FooterComponent from "@/components/homepage/footer/footer_component";
import TopBarComponent from "@/components/homepage/topbar/topbar_component";

import Navbar from "@/components/common/Navbar";
import { useEffect, useState } from "react";
import PathWidget from "@/components/common/path_widget";
import { GetProductsByCategory } from "@/repository/products_repository";
import { SpeedSaleCardWidget } from "@/components/homepage/speed_sale/speed_cards_widget";
import { GetCategoriesBySections } from "@/repository/category_repository";


export default function CategoriesPage({ params }) {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    GetCategoriesBySections(params.id).then((categories) => setCategories(categories));
  }, []);

  const urlPaths = { name: "المنتجات الرئيسية", link: "/products/" + "product.id" };

  return (
    <>
      <TopBarComponent />
      <Navbar />
      <SpacerWidget />

      {/*------------- PATH TEXT ---------------------*/}
      <PathWidget urlPaths={urlPaths} />

      {/* /////////////////   GRID SECTIONS CARDS     ///////////////////////// */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 md:container mx-auto px-5">
        {categories.map((category) => (
           <SpeedSaleCardWidget key={category.id} />
        ))}
      </div>

      <SpacerWidget />
      <FooterComponent />
    </>
  );
  //<div>My Post: {params.id}</div>;
}
