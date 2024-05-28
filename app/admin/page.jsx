"use client";

import { useEffect, useState } from "react";
import AdminUpperNavBarComp from "../../components/admin_components/admin_upper_nav_bar_comp";

import AdminTransactionsComp from "../../components/admin_components/transactions/admin_transactions_comp";

import AdminUsersComp from "@/components/admin_components/users/admin_users_comp";
import AdminUserShowComp from "@/components/admin_components/users/admin_user_data_comp";

import AdminReportComp from "@/components/admin_components/reports/admin_report_comp";

import AdminBannerComponent from "../../components/admin_components/banners/admin_banner_comp";
import AdminAddBannerComp from "../../components/admin_components/banners/admin_add_banner_comp";
import AdminEditBannerComp from "../../components/admin_components/banners/admin_edit_banner";

import AdminCategoryComponent from "../../components/admin_components/categories/admin_category_comp";
import AdminEditCategorysComp from "../../components/admin_components/categories/admin_edit_category";
import AdminAddCategoryComp from "../../components/admin_components/categories/admin_add_category_comp";

import AdminSectionsComponent from "../../components/admin_components/sections/admin_section_comp";
import AdminAddSectionComp from "../../components/admin_components/sections/admin_add_section_comp";
import AdminEditSectionComp from "../../components/admin_components/sections/admin_edit_section";

import AdminProductsComponent from "../../components/admin_components/products/admin_product_comp";
import AdminEditProductsComp from "../../components/admin_components/products/admin_edit_product";
import AdminAddProductComp from "../../components/admin_components/products/admin_add_product_comp";

import AdminSettingsComp from "../../components/admin_components/settings/admin_settings_comp";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../db/firebase_init";
import { useRouter } from "next/navigation";
import LoadingPage from "@/components/user_components/common/loading";

export default function AdminHomePage() {
  const [index, setIndex] = useState({
    id: 0,
    navSection: "main",
    navId: null,
  });
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (
          user.email == "samer@samer.com"
          //   process.env.ADMIN_USER
        ) {
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
      <AdminUpperNavBarComp navData={{ index: index, setIndex: setIndex }} />

      {/* ////////  REPORT - ADMIN HOMEPAGE  ///////////// */}
      {index.id == 0 && (
        <AdminReportComp navData={{ index: index, setIndex: setIndex }} />
      )}

      {/* //////// Banners  ///////////// */}
      {index.id == 1 && (
        <AdminBannerComponent navData={{ index: index, setIndex: setIndex }} />
      )}
      {index.id == 11 && (
        <AdminAddBannerComp navData={{ index: index, setIndex: setIndex }} />
      )}
      {index.id == 12 && (
        <AdminEditBannerComp navData={{ index: index, setIndex: setIndex }} />
      )}

      {/* //////// Sections  ///////////// */}
      {index.id == 2 && (
        <AdminSectionsComponent
          navData={{ index: index, setIndex: setIndex }}
        />
      )}
      {index.id == 21 && (
        <AdminAddSectionComp navData={{ index: index, setIndex: setIndex }} />
      )}
      {index.id == 22 && (
        <AdminEditSectionComp navData={{ index: index, setIndex: setIndex }} />
      )}

      {/* //////// Categories  ///////////// */}
      {index.id == 3 && (
        <AdminCategoryComponent
          navData={{ index: index, setIndex: setIndex }}
        />
      )}
      {index.id == 31 && (
        <AdminAddCategoryComp navData={{ index: index, setIndex: setIndex }} />
      )}
      {index.id == 32 && (
        <AdminEditCategorysComp
          navData={{ index: index, setIndex: setIndex }}
        />
      )}

      {/* //////// Products  ///////////// */}
      {index.id == 4 && (
        <AdminProductsComponent
          navData={{ index: index, setIndex: setIndex }}
        />
      )}

      {index.id == 41 && (
        <AdminAddProductComp navData={{ index: index, setIndex: setIndex }} />
      )}

      {index.id == 42 && (
        <AdminEditProductsComp navData={{ index: index, setIndex: setIndex }} />
      )}

      {/* //////// USERS  ///////////// */}
      {index.id == 5 && (
        <AdminUsersComp navData={{ index: index, setIndex: setIndex }} />
      )}
      {index.id == 51 && (
        <AdminUserShowComp navData={{ index: index, setIndex: setIndex }} />
      )}

      {/* //////// Transactions  ///////////// */}
      {index.id == 6 && (
        <AdminTransactionsComp navData={{ index: index, setIndex: setIndex }} />
      )}

      {/* //////// Settings  ///////////// */}
      {index.id == 7 && (
        <AdminSettingsComp navData={{ index: index, setIndex: setIndex }} />
      )}

      {/* {index.id == 41 && (
        <AdminAddProductComp navData={{ index: index, setIndex: setIndex }} />
      )}

      {index.id == 42 && (
        <AdminEditProductsComp navData={{ index: index, setIndex: setIndex }} />
      )} */}
    </div>
  );
}
