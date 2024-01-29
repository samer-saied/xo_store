"use client";

import SpacerWidget from "@/components/common/spacer_widget";
import FooterComponent from "@/components/homepage/footer/footer_component";
import TopBarComponent from "@/components/homepage/topbar/topbar_component";

import Navbar from "@/components/common/Navbar";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import PathWidget from "@/components/common/path_widget";
import MostSalesCardWidget from "@/components/homepage/most_sales/most_sales_card_widget";
import { GetCategoriesBySections } from "@/repository/category_repository";

export default function SpecificSectionsPage(params) {
  
  const query = useSearchParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    GetCategoriesBySections(params.id).then((categories) =>
      setCategories(categories)
    );
  }, []);

  return (
    <>
      <TopBarComponent />
      <Navbar />
      <SpacerWidget />

      {/*------------- PATH TEXT ---------------------*/}
      <PathWidget
        urlPaths={{
          name: query.get("name"),
          link: "/products/" + "product.id",
        }}
      />

      {/* /////////////////   GRID SECTIONS CARDS     ///////////////////////// */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-2 md:container mx-auto px-5">
        {categories.map((category) => (
          <MostSalesCardWidget key={category.id} {...category} />
        ))}
      </div>

      <SpacerWidget />
      <FooterComponent />
    </>
  );
  //<div>My Post: {params.id}</div>;
}
