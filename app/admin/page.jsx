"use client";

import { useEffect, useState } from "react";
import AdminUpperNavBarComp from "../../components/admin_components/admin_upper_nav_bar_comp";
import AdminBannerComponent from "../../components/admin_components/banners/admin_banner_comp";
import AdminCategoriesComponent from "../../components/admin_components/categories/admin_categories_comp";
import AdminProductsComponent from "../../components/admin_components/products/admin_products_comp";
import AdminSectionsComponent from "../../components/admin_components/sections/admin_section_comp";
import AdminAddBannerComp from "../../components/admin_components/banners/admin_add_banner_comp";
import AdminEditBannerComp from "../../components/admin_components/banners/admin_edit_banner";
import AdminAddSectionComp from "../../components/admin_components/sections/admin_add_section_comp";
import AdminEditSectionComp from "../../components/admin_components/sections/admin_edit_section";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../db/firebase_init";
import { useRouter } from "next/navigation";
import LoadingPage from "@/components/user_components/common/loading";

export default function AdminHomePage() {
  const [index, setIndex] = useState({ id: 0, navId: "samer" });
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
      <AdminUpperNavBarComp data={{ index: index, setIndex: setIndex }} />
      {index.id == 0 && <>Reports</>}

      {/* //////// Banners  ///////////// */}
      {index.id == 1 && (
        <AdminBannerComponent data={{ index: index, setIndex: setIndex }} />
      )}
      {index.id == 11 && (
        <AdminAddBannerComp data={{ index: index, setIndex: setIndex }} />
      )}
      {index.id == 12 && (
        <AdminEditBannerComp data={{ index: index, setIndex: setIndex }} />
      )}

      {/* //////// Sections  ///////////// */}
      {index.id == 2 && (
        <AdminSectionsComponent data={{ index: index, setIndex: setIndex }} />
      )}
      {index.id == 21 && (
        <AdminAddSectionComp data={{ index: index, setIndex: setIndex }} />
      )}
      {index.id == 22 && (
        <AdminEditSectionComp data={{ index: index, setIndex: setIndex }} />
      )}

      {/* //////// Categories  ///////////// */}
      {index.id == 3 && (
        <AdminCategoriesComponent data={{ index: index, setIndex: setIndex }} />
      )}
      {index.id == 4 && (
        <AdminProductsComponent
          data={{ index: index, setIndex: setIndexActive }}
        />
      )}
    </div>
  );
}
