"use client";

import SpacerWidget from "@/components/user_components/common/spacer_widget";
import FooterComponent from "@/components/user_components/homepage/footer/footer_component";
import { useEffect, useState } from "react";
import PathWidget from "@/components/user_components/common/path_widget";
import { GetProductsByCategory } from "@/repository/products_repository";
import { TodayDealCardWidget } from "@/components/user_components/homepage/today_deal/today_deal_card_widget";
import LoadingPage from "@/components/user_components/common/loading";
import NoItemsWidget from "@/components/user_components/common/no_items_widget";
import { useSearchParams } from "next/navigation";
import { Sheet } from "@/components/ui/sheet";
import Navbar from "@/components/user_components/common/navbar/Navbar";

export default function CategoriesPage({ params }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const query = useSearchParams();

  useEffect(() => {
    GetProductsByCategory(params.id).then((products) => {
      setProducts(products);
      setLoading(false);
      console.log("=====================params.id==================");
      console.log(params.id);
      console.log("=====================PRODUCTS.id==================");

      console.log(products);
    });
  }, []);

  const urlPaths = [
    {
      name: "الأقسام الرئيسية",
      link: "/sections/",
    },
    {
      name: query.get("category"),
      link: "/sections/",
    },
  ];

  return (
    <>
      <Sheet>
        <Navbar />
        {/*------------- PATH TEXT ---------------------*/}
        <PathWidget urlPaths={urlPaths} />

        {/* /////////////////   GRID SECTIONS CARDS     ///////////////////////// */}
        {!loading && products.length > 0 && (
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-2 md:w-9/12 px-2 mx-auto">
            {products.map((product) => (
              <TodayDealCardWidget key={product.id} product={product} />
            ))}
          </div>
        )}
        {!loading && products.length == 0 && <NoItemsWidget />}

        <SpacerWidget />
        {/* <FooterComponent /> */}
      </Sheet>
    </>
  );
  //<div>My Post: {params.id}</div>;
}
