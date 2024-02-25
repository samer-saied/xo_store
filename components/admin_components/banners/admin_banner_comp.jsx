"use client";

import { GetAllBanners } from "@/repository/banners_repository";
import TableComp from "../table_comp";
import { useEffect, useState } from "react";

export default function AdminBannerComp() {
  const [loading, setLoading] = useState(true);
  const [banners, setbanners] = useState(null);

  useEffect(() => {
    GetAllBanners().then((banners) => {
      setbanners(banners);
      setLoading(false);
    });
  }, []);

  return (
    <TableComp
      data={{
        tableTitle: "Banners",
        tableColumns: ["title", "created", "state"],
        tableData: banners,
      }}
    />
  );
}
