import SpacerWidget from "@/components/user_components/common/spacer_widget";
import DetailsProductWidget from "../../../components/user_components/details_product/details_product_widget";
import LoadingPage from "@/components/user_components/common/loading";
import { Sheet } from "@/components/ui/sheet";
import Navbar from "@/components/user_components/common/navbar/Navbar";
import FooterComponent from "@/components/user_components/homepage/footer/footer_component";
import RelatedProductsWidget from "@/components/user_components/related_products/related_products_widget";

export default function ProductPage({ params }) {
  // const product = useGetOneProductHook(params.id);
  return (
    <>
      <Sheet>
        <Navbar />
        <SpacerWidget />

        <DetailsProductWidget params={params} />

        {/*-------------------- RELATED PRODUCTS ---------------*/}
        <RelatedProductsWidget />

        <SpacerWidget />
        <FooterComponent />
      </Sheet>
    </>
  );
  //<div>My Post: {params.id}</div>;
}
