"use client";

import TableComp from "../table_comp";
import { useEffect, useState } from "react";
import { GetAllCategories } from "@/repository/category_repository";

export default function AdminCategoriesComp() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    GetAllCategories().then((categories) => {
      setCategories(categories);
      setLoading(false);
    });
  }, []);


  return (


      <TableComp
        data={{
          tableTitle: "categories",
          tableHeaders: ["title", "created At", "state"],
          tableColumns: ["title", "date", "status"],
          tableData:categories
        }}
      />

  );
}
