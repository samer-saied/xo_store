"use client";

import SpacerWidget from "@/components/user_components/common/spacer_widget";
import FooterComponent from "@/components/user_components/homepage/footer/footer_component";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import PathWidget from "@/components/user_components/common/path_widget";
import GameCardWidget from "@/components/user_components/homepage/most_sales/game_card_widget";
import LoadingPage from "@/components/user_components/common/loading";
import useGetOneSection from "../../../hooks/one_section_hook";
import NoItemsWidget from "@/components/user_components/common/no_items_widget";
import { Sheet } from "@/components/ui/sheet";
import Navbar from "@/components/user_components/common/navbar/Navbar";

export default function SpecificSectionsPage({ params }) {
  const query = useSearchParams();
  const urls = [
    {
      name: "الأقسام الرئيسية",
      link: "/sections/",
    },
    {
      name: query.get("name"),
      link: "",
    },
  ];

  const categories = useGetOneSection(params.id);
  console.log(categories);
  return (
    <>
      <Sheet>
        <Navbar />
        <SpacerWidget />

        {/*------------- PATH TEXT ---------------------*/}
        <PathWidget urlPaths={urls} />

        {/* /////////////////   GRID SECTIONS CARDS     ///////////////////////// */}
        {categories.isLoading && <LoadingPage />}

        {!categories.isLoading && categories.categories.length == 0 && (
          <NoItemsWidget infoMsg={"لا يوجد فئات"} />
        )}

        {!categories.isLoading && categories.categories != null && (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-2 md:container px-5 md:w-9/12 mx-auto md:px-5 w-full">
            {categories.categories.map((category) => (
              <GameCardWidget
                key={category.id}
                category={category}
                urls={urls}
              />
            ))}
          </div>
        )}

        <SpacerWidget />
        {/* <FooterComponent /> */}
      </Sheet>
    </>
  );
  //<div>My Post: {params.id}</div>;
}
