"use client";

import { GetAllBanners } from "@/repository/banners_repository";
import TableComp from "../../../admin_components/table_comp";
import AdminUpperNavBarComp from "../../../admin_components/admin_upper_nav_bar_comp";
import SpacerWidget from "@/components/common/spacer_widget";
import FooterComponent from "@/components/homepage/footer/footer_component";
import { useEffect, useState } from "react";

export default function AdminBannerPage() {

  const [loading, setLoading] = useState(true);
  const [banners, setbanners] = useState([]);

  useEffect(() => {
    GetAllBanners().then((banners) => {
      setbanners(banners);
      setLoading(false);
    });
  }, []);


  return (
    <div dir="ltr">
      <AdminUpperNavBarComp />

      <TableComp
        data={{
          tableTitle: "Banners",
          tableColumns: ["title", "created", "state"],
          tableData:banners
        }}
      />

      <SpacerWidget />
      <FooterComponent />
    </div>
  );
}
