"use client";

import SpacerWidget from "@/components/common/spacer_widget";
import FooterComponent from "@/components/homepage/footer/footer_component";
import TopBarComponent from "@/components/homepage/topbar/topbar_component";

import Navbar from "@/components/common/Navbar";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import PathWidget from "@/components/common/path_widget";
import GameCardWidget from "@/components/homepage/most_sales/game_card_widget";
import LoadingPage from "@/components/common/loading";
import { GetCategoriesBySections } from "@/repository/category_repository";
import NoItemsWidget from "@/components/common/no_items_widget";
import loading from "@/app/loading";

export default function SpecificSectionsPage({ params }) {
  const query = useSearchParams();
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    GetCategoriesBySections(params.id).then((categories) => {
      setCategories(categories);
      setLoading(false);
    });
  }, []);

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

  return (
    <>
      <TopBarComponent />
      <Navbar />
      <SpacerWidget />

      {/*------------- PATH TEXT ---------------------*/}
      <PathWidget urlPaths={urls} />

      {/* /////////////////   GRID SECTIONS CARDS     ///////////////////////// */}
      {isLoading && <LoadingPage />}
      {!isLoading && categories.length != 0 && (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-2 md:container mx-auto px-5">
          {categories.map((category) => (
            <GameCardWidget key={category.id} {...category} />
          ))}
        </div>
      )}
      {!isLoading && categories.length == 0 && <NoItemsWidget />}
      <SpacerWidget />
      <FooterComponent />
    </>
  );
  //<div>My Post: {params.id}</div>;
}
