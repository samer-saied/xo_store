"use client";

import { useState } from "react";
import AdminUpperNavBarComp from "../../components/admin_components/admin_upper_nav_bar_comp";
import AdminBannerComponent from "../../components/admin_components/banners/admin_banner_comp";
import AdminCategoriesComponent from "../../components/admin_components/categories/admin_categories_comp";
import AdminProductsComponent from "../../components/admin_components/products/admin_products_comp";
import AdminSectionsComponent from "../../components/admin_components/sections/admin_sections_comp";

export default function AdminHomePage() {
  const [indexActive, setIndexActive] = useState(0);

  return (
    <div dir="ltr">
      <AdminUpperNavBarComp
        data={{ index: indexActive, setIndex: setIndexActive }}
      />
      {indexActive == 0 ? <></> : <></>}
      {indexActive == 1 ? <AdminBannerComponent /> : <></>}
      {indexActive == 2 ? <AdminSectionsComponent /> : <></>}
      {indexActive == 3 ? <AdminCategoriesComponent /> : <></>}
      {indexActive == 4 ? <AdminProductsComponent /> : <></>}
    </div>
  );
}
