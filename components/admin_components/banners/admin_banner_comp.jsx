"use client";

import { GetAllBanners } from "@/repository/banners_repository";
import TableComp from "../table_comp";
import { useEffect, useState } from "react";

export default function AdminBannerComp({ data }) {
  console.log(data["index"]);
  const [loading, setLoading] = useState(true);
  const [banners, setbanners] = useState(null);

  useEffect(() => {
    GetAllBanners().then((banners) => {
      setbanners(banners);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {/* //////////////////// Page Title //////////////////// */}
      <div className="px-5 mt-5 flex flex-row justify-between w-full">
        <h2 className="text-2xl leading-tight">{"Banners"}</h2>
        <button
          onClick={() => {
            data["setIndex"](11);
          }}
          className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-MainViridianColor rounded-lg shadow-md hover:bg-MainBlueColor-700 focus:outline-none focus:ring-2 focus:ring-MainBlueColor-500 focus:ring-offset-2 focus:ring-offset-MainBlueColor-200"
          type="submit"
        >
          Add
        </button>
      </div>
      <TableComp
        data={{
          tableTitle: "banners",
          tableHeaders: ["title", "created at", "state"],
          tableColumns: ["title", "date", "status"],
          tableData: banners,
        }}
        addFunc={() => {
          console.log("samer");
        }}
      />
    </>
  );
}
