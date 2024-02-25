"use client";

import SpacerWidget from "@/components/user_components/common/spacer_widget";
import FooterComponent from "@/components/user_components/homepage/footer/footer_component";
import TopBarComponent from "@/components/user_components/homepage/topbar/topbar_component";
import Navbar from "@/components/user_components/common/Navbar";
import PathWidget from "@/components/user_components/common/path_widget";
import { GetTodayDealProducts } from "@/repository/products_repository";
import { TodayDealCardWidget } from "@/components/user_components/homepage/today_deal/today_deal_card_widget";
import LoadingPage from "@/components/user_components/common/loading";
import NoItemsWidget from "@/components/user_components/common/no_items_widget";
import { useEffect, useState } from "react";

export default function TodayOffersPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetTodayDealProducts().then((products) => {
      setProducts(products);
      setLoading(false);
    });
  }, []);

  const urlPaths = [
    {
      name:"صفقه اليوم",
      link: "/today",
    }, 
  ];

  return (
    <>
      <TopBarComponent />
      <Navbar />
      <SpacerWidget />

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
      {loading && <LoadingPage />}

      <SpacerWidget />
      <FooterComponent />
    </>
  );
  //<div>My Post: {params.id}</div>;
}
