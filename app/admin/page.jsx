"use client";

import { useEffect, useState } from "react";
import AdminUpperNavBarComp from "../../components/admin_components/admin_upper_nav_bar_comp";
import AdminBannerComponent from "../../components/admin_components/banners/admin_banner_comp";
import AdminCategoriesComponent from "../../components/admin_components/categories/admin_categories_comp";
import AdminProductsComponent from "../../components/admin_components/products/admin_products_comp";
import AdminSectionsComponent from "../../components/admin_components/sections/admin_sections_comp";
import AdminAddBannerComp from "../../components/admin_components/banners/admin_add_banner_comp";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../db/firebase_init";
import { useRouter } from "next/navigation";
import LoadingPage from "@/components/user_components/common/loading";

export default function AdminHomePage() {
  const [indexActive, setIndexActive] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.email == "samer@samer.com") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
          router.push("/");
        }
      } else {
        setIsAdmin(false);
        router.push("/login");
      }
    });
  }, [router]);

  return isAdmin == false ? (
    <LoadingPage />
  ) : (
    <div dir="ltr">
      <AdminUpperNavBarComp
        data={{ index: indexActive, setIndex: setIndexActive }}
      />
      {indexActive == 0 && <>Reports</>}
      {indexActive == 1 && (
        <AdminBannerComponent
          data={{ index: indexActive, setIndex: setIndexActive }}
        />
      )}
      {indexActive == 2 && (
        <AdminSectionsComponent
          data={{ index: indexActive, setIndex: setIndexActive }}
        />
      )}
      {indexActive == 3 && (
        <AdminCategoriesComponent
          data={{ index: indexActive, setIndex: setIndexActive }}
        />
      )}
      {indexActive == 4 && (
        <AdminProductsComponent
          data={{ index: indexActive, setIndex: setIndexActive }}
        />
      )}
      {indexActive == 11 && (
        <AdminAddBannerComp
          data={{ index: indexActive, setIndex: setIndexActive }}
        />
      )}
    </div>
  );
}
