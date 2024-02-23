"use client";

import TableComp from "../../../admin_components/table_comp";
import AdminUpperNavBarComp from "../../../admin_components/admin_upper_nav_bar_comp";
import SpacerWidget from "@/components/common/spacer_widget";
import FooterComponent from "@/components/homepage/footer/footer_component";
import { useEffect, useState } from "react";
import { GetAllCategories } from "@/repository/category_repository";

export default function MostSalesComponent() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    GetAllCategories().then((categories) => {
      setCategories(categories);
      setLoading(false);
    });
  }, []);


  return (
    <div dir="ltr">
      <AdminUpperNavBarComp />

      <TableComp
        data={{
          tableTitle: "Categories",
          tableColumns: ["title", "created", "state"],
          tableData:categories
        }}
      />

      <SpacerWidget />
      <FooterComponent />
    </div>
  );
}
