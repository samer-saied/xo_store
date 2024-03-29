"use client";

import SpacerWidget from "@/components/user_components/common/spacer_widget";
import FooterComponent from "@/components/user_components/homepage/footer/footer_component";
import TopBarComponent from "@/components/user_components/homepage/topbar/topbar_component";
import DetailsProductWidget from "@/components/user_components/details_product/details_product_widget";
import RelatedProductsWidget from "@/components/user_components/related_products/related_products_widget";
import Navbar from "@/components/user_components/common/Navbar";
import { GetOneProduct } from "@/repository/products_repository";
import LoadingPage from "@/components/user_components/common/loading";
import { useEffect, useState } from "react";

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
