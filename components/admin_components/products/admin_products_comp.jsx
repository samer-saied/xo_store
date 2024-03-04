"use client";

import TableComp from "../table_comp";
import { useEffect, useState } from "react";
import { GetAllProducts } from "@/repository/products_repository";

export default function AdminProductsComp() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    GetAllProducts().then((products) => {
      setProducts(products);
      setLoading(false);
    });
  }, []);

  return (
    <TableComp
      data={{
        tableTitle: "products",
        tableHeaders: ["title", "created at", "state", "current Price"],

        tableColumns: ["title", "date", "status", "currentPrice"],
        tableData: products,
      }}
    />
  );
}
