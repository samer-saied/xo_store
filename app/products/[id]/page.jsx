'use client'

import SpacerWidget from "@/components/common/spacer_widget";
import FooterComponent from "@/components/homepage/footer/footer_component";
import TopBarComponent from "@/components/homepage/topbar/topbar_component";
import DetailsProductWidget from "@/components/details_product/details_product_widget";
import RelatedProductsWidget from "@/components/related_products/related_products_widget";

import Navbar from "@/components/common/Navbar";
import { useEffect, useState } from "react";
import { GetOneProduct, GetAllProducts } from "@/repository/products_repository";

export default function ProductPage({ params }) {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    GetOneProduct("e6RC3MRT0bM9Y3Vhqttb").then((productData) => setProduct(productData));
  }, []);


  return (
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
  );
  //<div>My Post: {params.id}</div>;
}
