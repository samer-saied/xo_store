"use client";

import SpacerWidget from "@/components/common/spacer_widget";
import FooterComponent from "@/components/homepage/footer/footer_component";
import TopBarComponent from "@/components/homepage/topbar/topbar_component";
import DetailsProductWidget from "@/components/details_product/details_product_widget";
import RelatedProductsWidget from "@/components/related_products/related_products_widget";

import Navbar from "@/components/common/Navbar";
import { useEffect, useState } from "react";
import {
  GetOneProduct,
  GetAllProducts,
} from "@/repository/products_repository";
import LoadingPage from "@/components/common/loading";

export default function ProductPage({ params }) {
   console.log(params);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    GetOneProduct(params.id).then((productData) => {
      setProduct(productData);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <TopBarComponent />
          <Navbar />

          <SpacerWidget />

          <DetailsProductWidget params={params} product={product} />

          {/*-------------------- RELATED PRODUCTS ---------------*/}
          <RelatedProductsWidget />

          <SpacerWidget />
          <FooterComponent />
        </>
      )}
    </>
  );
  //<div>My Post: {params.id}</div>;
}
