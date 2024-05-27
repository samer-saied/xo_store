import SpacerWidget from "@/components/user_components/common/spacer_widget";
import DetailsProductWidget from "../../../components/user_components/details_product/details_product_widget";
import LoadingPage from "@/components/user_components/common/loading";
import { Sheet } from "@/components/ui/sheet";
import Navbar from "@/components/user_components/common/navbar/Navbar";
import FooterComponent from "@/components/user_components/homepage/footer/footer_component";
import RelatedProductsWidget from "@/components/user_components/related_products/related_products_widget";
import { GetOneProduct } from "@/repository/products_repository";

export default async function ProductPage({ params }) {
  const product = await GetOneProduct(params.id);

  return (
    <>
      <Sheet>
        <Navbar />
        <SpacerWidget />

        <DetailsProductWidget product={product} />

        {/*-------------------- RELATED PRODUCTS ---------------*/}
        <RelatedProductsWidget categoryId={product.categoryId} />
        <SpacerWidget />

        {/*-------------------- FOOTER ---------------*/}
        <FooterComponent />
      </Sheet>
    </>
  );
  //<div>My Post: {params.id}</div>;
}
