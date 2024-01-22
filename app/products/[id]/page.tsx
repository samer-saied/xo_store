import SpacerWidget from "@/components/common/spacer_widget";
import FooterComponent from "@/components/homepage/footer/footer_component";
import TopBarComponent from "@/components/homepage/topbar/topbar_component";
import DetailsProductWidget from "@/components/details_product/details_product_widget";
import RelatedProductsWidget from "@/components/related_products/related_products_widget";
import { faHeart, faHome, faStar } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";

export default function Product({ params }: { params: { id: string } }) {
  return (
    <>
      <TopBarComponent />
      <Navbar />

      <SpacerWidget />

      <DetailsProductWidget params={params} />

      {/*-------------------- RELATED PRODUCTS ---------------*/}
      <RelatedProductsWidget />

      <SpacerWidget />
      <FooterComponent />
    </>
  );
  //<div>My Post: {params.id}</div>;
}
