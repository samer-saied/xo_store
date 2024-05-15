"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GetAllProducts } from "../../../repository/products_repository";
import TableComp from "../products/table_comp";

export default function AdminProductComp({ navData }) {
  const [loading, setLoading] = useState(true);
  const [products, setproducts] = useState(null);

  const router = useRouter();

  useEffect(() => {
    GetAllProducts().then((products) => {
      setproducts(products);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {/* //////////////////// Page Title //////////////////// */}
      <div className=" container max-w-5xl px-4 mx-auto sm:px-8 flex flex-row justify-between pt-5">
        <h2 className="text-2xl md:text-4xl leading-tight">{"Products"}</h2>
        <button
          onClick={() => {
            navData["setIndex"]({ id: 41, navId: "samer" });
          }}
          className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-MainViridianColor rounded-lg shadow-md hover:bg-MainBlueColor-700 focus:outline-none focus:ring-2 focus:ring-MainBlueColor-500 focus:ring-offset-2 focus:ring-offset-MainBlueColor-200"
          type="submit"
        >
          Add
        </button>
      </div>
      <TableComp
        tableData={{
          tableTitle: "products",
          tableHeaders: ["title", "Today Offer", "exclusive", "created at"],
          tableColumns: ["title", "todayOffer", "exclusive", "date"],
          data: products,
        }}
        addFunc={navData["setIndex"]}
      />
    </>
  );
}
