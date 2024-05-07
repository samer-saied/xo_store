"use client";

import SpacerWidget from "@/components/user_components/common/spacer_widget";
import FooterComponent from "@/components/user_components/homepage/footer/footer_component";
import DetailsProductWidget from "../../../components/user_components/details_product/details_product_widget";
import RelatedProductsWidget from "@/components/user_components/related_products/related_products_widget";
import { GetOneProduct } from "@/repository/products_repository";
import LoadingPage from "@/components/user_components/common/loading";
import { useEffect, useState } from "react";
import { Sheet } from "@/components/ui/sheet";
import Navbar from "@/components/user_components/common/navbar/Navbar";

export default function ProductPage({ params }) {
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
          <Sheet>
            <Navbar />
            <SpacerWidget />

            <DetailsProductWidget params={params} product={product} />

            {/*-------------------- RELATED PRODUCTS ---------------*/}
            <RelatedProductsWidget />

            <SpacerWidget />
            <FooterComponent />
          </Sheet>
        </>
      )}
    </>
  );
  //<div>My Post: {params.id}</div>;
}
